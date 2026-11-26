import Link from 'next/link';
import { deleteMeetingAction as deleteMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
    meeting: SacramentMeeting;
    }

    export default function MeetingCard({ meeting }: MeetingCardProps) {
    const deleteMeetingWithId = deleteMeeting.bind(null, meeting.id);

    return (
        <article className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-600">{meeting.date}</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                {meeting.meetingType}
            </span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">
            Conducting: {meeting.conducting}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
            Presiding: {meeting.presiding}
            </p>
            {meeting.speakers.length > 0 && (
            <p className="text-xs text-gray-600 mb-4">
                <strong>Program:</strong> {meeting.speakers.map((s) => s.name).join(', ')}
            </p>
            )}
        </div>

        <div className="space-y-2 mt-2">
            <Link
            href={`/meetings/${meeting.id}`}
            className="inline-block text-center w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
            View &amp; Print Agenda
            </Link>

            <div className="flex gap-2">
            <Link
                href={`/meetings/${meeting.id}/edit`}
                aria-label={`Edit meeting for ${meeting.date}`}
                className="flex-1 text-center border border-gray-300 text-gray-700 py-1.5 px-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
                Edit
            </Link>

            <form action={deleteMeetingWithId} className="flex-1">
                <button
                type="submit"
                aria-label={`Delete meeting for ${meeting.date}`}
                className="w-full border border-red-200 text-red-700 py-1.5 px-3 rounded-md text-sm font-medium hover:bg-red-50 transition-colors"
                >
                Delete
                </button>
            </form>
            </div>
        </div>
        </article>
    );
}
