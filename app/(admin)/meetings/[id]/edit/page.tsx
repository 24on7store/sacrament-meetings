import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from '@/components/EditMeetingForm';

export default async function EditMeetingPage({
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
        <section className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Meeting #{meeting.id} ({meeting.date})
        </h1>
        <EditMeetingForm meeting={meeting} />
        </section>
    );
}
