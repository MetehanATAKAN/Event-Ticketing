import { headers } from "next/headers";

export async function getRequestHeaders() {
  return headers();
}
