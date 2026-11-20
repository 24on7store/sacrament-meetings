//'use client';


import type { SacramentMeeting } from '@/lib/types';
import PrintButton from './PrintButton';

interface MeetingDetailProps {
    meeting: SacramentMeeting;
    }

    export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm print:border-none print:shadow-none print:p-0">
        {/* Header & Print Button */}
        <div className="flex justify-between items-start border-b pb-6 mb-6">
            <div>
            <p className="text-sm uppercase tracking-wider text-blue-700 font-semibold">
                Oakridge Ward — {meeting.meetingType} Meeting
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{meeting.date}</h1>
            </div>

            <PrintButton />
        </div>

        {/* Leadership */}
        <section className="grid grid-cols-2 gap-4 mb-6 text-sm bg-gray-50 p-4 rounded-md print:bg-transparent print:border">
            <div>
            <span className="text-gray-500 block">Presiding</span>
            <span className="font-semibold text-gray-900">{meeting.presiding}</span>
            </div>
            <div>
            <span className="text-gray-500 block">Conducting</span>
            <span className="font-semibold text-gray-900">{meeting.conducting}</span>
            </div>
        </section>

        {/* Announcements */}
        {meeting.announcements && meeting.announcements.length > 0 && (
            <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                Announcements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {meeting.announcements.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            </section>
        )}

        {/* Agenda Line Items */}
        <section className="space-y-4 text-sm border-t pt-6">
            <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Opening Hymn</span>
            <span>#{meeting.openingHymn.number} — {meeting.openingHymn.title}</span>
            </div>
            <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Invocation</span>
            <span>{meeting.openingPrayer}</span>
            </div>

       {/* Ward & Stake Business */}
        <div className="py-3 border-y border-dashed space-y-2">
            <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Ward Business</span>
                {meeting.wardBusiness.length === 0 ? (
                <span className="text-gray-600">None</span>
                ) : (
                <ul className="text-right text-gray-600 space-y-1">
                    {meeting.wardBusiness.map((b, i) => (
                    <li key={i}>{b.description}</li>
                    ))}
                </ul>
                )}
            </div>
            <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Stake Business</span>
                <span className="text-gray-600">{meeting.stakeBusiness ? 'Yes' : 'No'}</span>
            </div>
        </div>

            {/* Speakers & Musical Numbers */}
            <div className="py-4 border-y">
            <h3 className="font-semibold text-gray-700 mb-3">Program</h3>
            {meeting.speakers.length === 0 ? (
                <p className="text-gray-600 italic">Bearing of Testimonies / Special Broadcast</p>
            ) : (
                <ul className="space-y-2">
                {meeting.speakers.map((item, idx) => (
                    <li key={idx} className="flex justify-between">
                    <span className="font-medium text-gray-900">
                        {item.type === 'musical-number' ? `Musical Number: ${item.name}` : `Speaker: ${item.name}`}
                    </span>
                    <span className="text-gray-600">{item.topic}</span>
                    </li>
                ))}
                </ul>
            )}
            </div>

            <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Closing Hymn</span>
            <span>#{meeting.closingHymn.number} — {meeting.closingHymn.title}</span>
            </div>
            <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Benediction</span>
            <span>{meeting.closingPrayer}</span>
            </div>
        </section>
        </div>
    );
}
