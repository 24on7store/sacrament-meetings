import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <div className="max-w-xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Oakridge Ward Administration
        </span>
        <h2 className="text-4xl font-bold text-gray-900">
          Sacrament Meeting Planner &amp; Program Archive
        </h2>
        <p className="text-gray-600 text-lg">
          Prepare weekly Sunday agendas, coordinate speakers and musical numbers, and print programs for congregation members.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/meetings/current"
            className="bg-blue-700 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            View This Sunday&apos;s Program
          </Link>
          <Link
            href="/meetings"
            className="bg-gray-100 text-gray-900 px-5 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Browse All Meetings
          </Link>
        </div>
      </div>

      <div className="flex-shrink-0 bg-blue-50 p-8 rounded-full">
        <Image
          src="/globe.svg"
          alt="Oakridge Ward Global Community Emblem"
          width={180}
          height={180}
          priority
        />
      </div>
    </section>
  );
}
