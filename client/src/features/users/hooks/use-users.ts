"use client";

import { useEffect, useState } from "react";

import { getUsers } from "@/features/users/services/users.service";
import type { User } from "@/features/users/types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getUsers()
      .then((response) => {
        if (mounted) {
          setUsers(response);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { users, isLoading };
}
