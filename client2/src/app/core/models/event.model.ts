export type EventItem = {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  category_id: number | null;
  venue_id: number | null;
  organizer_id: number | null;
  start_date: string;
  end_date: string | null;
  price_from: string;
  currency: string;
  total_ticket_count: number;
  available_ticket_count: number;
  status: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};

export type EventsResponse = {
  items: EventItem[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
};
