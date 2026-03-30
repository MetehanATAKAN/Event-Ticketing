import { notFound } from "next/navigation";

import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
import { UserDetailCard } from "@/features/users/components/user-detail-card";
import { getUserById } from "@/features/users/services/users.service";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container-shell grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <main>
          <UserDetailCard user={user} />
        </main>
      </div>
    </div>
  );
}
