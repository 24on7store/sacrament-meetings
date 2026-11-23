export default function MeetingsLoading() {
  return (
    <main className="max-w-4xl mx-auto p-6 animate-pulse space-y-6">
      <div className="h-8 w-48 rounded bg-slate-200" />
      <div className="h-10 w-full rounded bg-slate-200" />
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="h-28 rounded-xl border border-slate-200 bg-slate-100" />
        ))}
      </div>
    </main>
  );
}
