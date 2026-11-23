import { Suspense } from 'react';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import MeetingCard  from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className="space-y-6">
      <Suspense fallback={<div className="h-10 rounded-lg bg-gray-200 animate-pulse" />}>
        <MeetingSearch />
      </Suspense>

      {meetings.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No meetings found{query ? ` matching "${query}"` : ''}.
        </p>
      ) : (
        <div className="space-y-4">
          {meetings.map((m) => (
            <MeetingCard key={m.id} meeting={m} />
          ))}
        </div>
      )}

      <Suspense fallback={null}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
