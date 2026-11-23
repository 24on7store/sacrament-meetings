import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';

async function MeetingDetailContent({
    params,
    }: {
    params: Promise<{ id: string }>;
    }) {
    const { id } = await params;
    const numericId = Number(id);

    if (Number.isNaN(numericId) || numericId <= 0) {
        notFound();
    }

    const meeting = await getMeetingById(numericId);

    if (!meeting) {
        notFound();
    }

    return (
        <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
            <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                {meeting.meetingType} Meeting
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">{meeting.date}</h1>
            </div>
            <Link href="/meetings" className="text-sm text-blue-600 hover:underline">
            ← Back to Meetings
            </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <p><span className="font-semibold">Presiding:</span> {meeting.presiding}</p>
            <p><span className="font-semibold">Conducting:</span> {meeting.conducting}</p>
            {meeting.openingPrayer && (
            <p><span className="font-semibold">Opening Prayer:</span> {meeting.openingPrayer}</p>
            )}
            {meeting.closingPrayer && (
            <p><span className="font-semibold">Closing Prayer:</span> {meeting.closingPrayer}</p>
            )}
        </div>

        {(meeting.announcements ?? []).length > 0 && (
            <div>
            <h2 className="font-semibold text-gray-900 mb-2">Announcements</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {(meeting.announcements ?? []).map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            </div>
        )}

        <div className="space-y-2 text-sm border-t pt-4">
            {meeting.openingHymn?.title && (
            <p><span className="font-semibold">Opening Hymn:</span> #{meeting.openingHymn.number} — {meeting.openingHymn.title}</p>
            )}
            {meeting.sacramentHymn?.title && (
            <p><span className="font-semibold">Sacrament Hymn:</span> #{meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</p>
            )}
            {meeting.closingHymn?.title && (
            <p><span className="font-semibold">Closing Hymn:</span> #{meeting.closingHymn.number} — {meeting.closingHymn.title}</p>
            )}
        </div>

        {(meeting.speakers ?? []).length > 0 && (
            <div className="border-t pt-4">
            <h2 className="font-semibold text-gray-900 mb-2">Program & Speakers</h2>
            <ul className="space-y-2 text-sm">
                {(meeting.speakers ?? []).map((speaker, idx) => (
                <li key={idx} className="rounded-lg bg-gray-50 p-3">
                    <span className="font-medium text-gray-900">{speaker.name}</span>
                    {speaker.topic && <span className="text-gray-600"> — {speaker.topic}</span>}
                </li>
                ))}
            </ul>
            </div>
        )}
        </article>
    );
    }

    export default function MeetingDetailPage({
    params,
    }: {
    params: Promise<{ id: string }>;
    }) {
    return (
        <Suspense fallback={<div className="p-6 text-gray-500 animate-pulse">Loading meeting details...</div>}>
        <MeetingDetailContent params={params} />
        </Suspense>
    );
    }
