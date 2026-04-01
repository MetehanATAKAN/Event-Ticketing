import type { EventsResponse } from "@/features/events/types";
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { PaginatedApiResponse } from "@/types/api";

type GetEventsParams = {
  pageParam?: number;
  limit?: number;
};

export async function getEvents({
  pageParam = 1,
  limit = 12,
}: GetEventsParams = {}): Promise<EventsResponse> {
  const searchParams = new URLSearchParams({
    page: String(pageParam),
    limit: String(limit),
  });

  const response = await apiClient.get<PaginatedApiResponse<EventsResponse["items"]>>(
    `${API_ENDPOINTS.events}?${searchParams.toString()}`,
  );

  return {
    items: response.data,
    ...response.pagination,
  };
}
