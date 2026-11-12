import {connection} from 'next/server';

export default async function Footer() {
    await connection();
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-12 print:hidden">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Oakridge Ward Sacrament Meeting Planner. All rights reserved.</p>
        </div>
        </footer>
    );
}
