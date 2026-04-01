"use client";

import { useEffect, useRef, useState } from "react";

import { getEvents } from "@/features/events/services/events.service";
import type { EventItem } from "@/features/events/types";

const PAGE_SIZE = 12;

export function useInfiniteEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadFirstPage() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getEvents({ pageParam: 1, limit: PAGE_SIZE });

        if (cancelled) {
          return;
        }

        setEvents(response.items);
        setPage(response.page);
        setHasNextPage(response.hasNextPage);
      } catch {
        if (!cancelled) {
          setError("Etkinlikler yuklenemedi.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadFirstPage();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const node = sentinelRef.current;

    if (!node || isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (!firstEntry?.isIntersecting || isFetchingNextPage || !hasNextPage) {
          return;
        }

        setIsFetchingNextPage(true);

        getEvents({ pageParam: page + 1, limit: PAGE_SIZE })
          .then((response) => {
            setEvents((currentEvents) => [...currentEvents, ...response.items]);
            setPage(response.page);
            setHasNextPage(response.hasNextPage);
          })
          .catch(() => {
            setError("Daha fazla etkinlik yuklenemedi.");
          })
          .finally(() => {
            setIsFetchingNextPage(false);
          });
      },
      {
        rootMargin: "240px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, isLoading, page]);

  return {
    error,
    events,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    sentinelRef,
    totalLoaded: events.length,
  };
}
