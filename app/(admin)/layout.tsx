import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
        <span className="font-semibold">Ward Leadership Portal</span>
        <Link href="/meetings" className="text-sm text-slate-300 hover:text-white">
          ← Back to Public Meetings
        </Link>
      </header>
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </div>
  );
}
