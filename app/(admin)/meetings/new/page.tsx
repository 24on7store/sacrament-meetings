import CreateMeetingForm from '@/components/CreateMeetingForm';

export default function NewMeetingPage() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create New Sacrament Meeting
      </h1>
      <CreateMeetingForm />
    </section>
  );
}
