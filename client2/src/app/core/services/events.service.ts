import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

import { API_BASE_URL, API_ENDPOINTS } from '../constants/api-endpoints';
import type { EventsResponse } from '../models/event.model';
import type { PaginatedApiResponse } from '../models/api.model';
import type { EventItem } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly http = inject(HttpClient);

  getEvents(page = 1, limit = 12) {
    return this.http
      .get<PaginatedApiResponse<EventItem[]>>(
        `${API_BASE_URL}${API_ENDPOINTS.events}?page=${page}&limit=${limit}`,
      )
      .pipe(
        map(
          (response): EventsResponse => ({
            items: response.data,
            ...response.pagination,
          }),
        ),
      );
  }
}
