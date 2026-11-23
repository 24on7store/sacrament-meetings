import Link from 'next/link';

export default function PublicMeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="border-b px-6 py-4 flex items-center justify-between">
        <div className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/meetings">All Meetings</Link>
          <Link href="/meetings/current">This Sunday</Link>
        </div>
        <Link href="/meetings/new" className="text-sm text-blue-600 hover:underline">
          Leader Portal
        </Link>
      </nav>
      {children}
    </div>
  );
}
