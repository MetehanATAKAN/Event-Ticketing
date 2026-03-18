export type EventHighlight = {
  id: number;
  title: string;
  city: string;
  venue: string;
  date: string;
  category: string;
  price: string;
  attendees: string;
};

export const featuredEvents: EventHighlight[] = [
  {
    id: 1,
    title: "Midnight Echoes Live",
    city: "Istanbul",
    venue: "Harbiye Acik Hava",
    date: "28 Haziran 2026",
    category: "Konser",
    price: "690 TL",
    attendees: "1.2K bilet satildi",
  },
  {
    id: 2,
    title: "City Lights Festival",
    city: "Ankara",
    venue: "CerModern",
    date: "12 Temmuz 2026",
    category: "Festival",
    price: "850 TL",
    attendees: "Erken erisim aktif",
  },
  {
    id: 3,
    title: "Analog Nights DJ Set",
    city: "Izmir",
    venue: "Container Hall",
    date: "05 Agustos 2026",
    category: "Gece Hayati",
    price: "540 TL",
    attendees: "VIP %70 dolu",
  },
];

export const quickStats = [
  { label: "Aktif etkinlik", value: "120+" },
  { label: "Sehir", value: "18" },
  { label: "Gunluk bilet islemi", value: "9.4K" },
];
