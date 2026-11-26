import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-4 p-6">
        <h2 className="text-xl font-semibold">404 - Meeting Not Found</h2>
        <p className="text-sm text-gray-600">Could not find the requested sacrament meeting.</p>
        <Link
            href="/meetings"
            className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
        >
            Back to Meetings
        </Link>
        </main>
    );
}
