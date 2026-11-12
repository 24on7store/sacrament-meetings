import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
    meeting: SacramentMeeting;
    }

    export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-500">{meeting.date}</span>
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
            <p className="text-xs text-gray-500 mb-4">
                <strong>Program:</strong> {meeting.speakers.map((s) => s.name).join(', ')}
            </p>
            )}
        </div>

        <Link
            href={`/meetings/${meeting.id}`}
            className="inline-block text-center w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
            View &amp; Print Agenda
        </Link>
        </article>
    );
}
