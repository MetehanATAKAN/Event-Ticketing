export function formatDate(value: string) {
  return new Intl.DateTimeFormat('tr-TR', { dateStyle: 'medium' }).format(new Date(value));
}
