export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type PaginatedApiResponse<T> = ApiResponse<T> & {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
};
