import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

export default async function SingleMeetingPage({
    params,
    }: {
    params: Promise<{ id: string }>;
    }) {
    const { id } = await params;
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const res = await fetch(`${protocol}://${host}/api/meetings/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        notFound();
    }

    const meeting: SacramentMeeting = await res.json();

    return <MeetingDetail meeting={meeting} />;
}
