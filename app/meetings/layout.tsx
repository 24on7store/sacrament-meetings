import Link from 'next/link';

export default function MeetingsLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 print:hidden">
            <h2 className="text-xl font-bold text-gray-800">Sunday Agendas</h2>
            <div className="flex gap-4 text-sm font-medium">
            <Link href="/meetings" className="text-blue-700 hover:underline">
                All Agendas
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/meetings/current" className="text-blue-700 hover:underline">
                Current Sunday
            </Link>
            </div>
        </div>
        {children}
        </div>
    );
}
