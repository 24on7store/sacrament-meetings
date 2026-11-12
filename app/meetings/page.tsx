import { headers } from 'next/headers';
import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

export default async function MeetingsListPage() {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const res = await fetch(`${protocol}://${host}/api/meetings`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch meetings');
    }

    const meetings: SacramentMeeting[] = await res.json();

    return (
        <section aria-label="All Sacrament Meetings">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
        </div>
        </section>
    );
}
