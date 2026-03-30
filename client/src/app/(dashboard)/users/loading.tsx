export default function UsersLoading() {
  return (
    <div className="container-shell py-8">
      <div className="panel animate-pulse rounded-[2rem] p-8">
        <div className="h-6 w-40 rounded bg-white/10" />
        <div className="mt-4 h-4 w-72 rounded bg-white/10" />
        <div className="mt-8 space-y-3">
          <div className="h-14 rounded-2xl bg-white/8" />
          <div className="h-14 rounded-2xl bg-white/8" />
          <div className="h-14 rounded-2xl bg-white/8" />
        </div>
      </div>
    </div>
  );
}
