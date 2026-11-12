import {connection } from 'next/server';
import NavLinks from './NavLinks';

export default async function Header() {
    await connection();
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="bg-blue-700 text-white shadow-md print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
            <h1 className="text-2xl font-bold tracking-tight">Oakridge Ward</h1>
            <p className="text-xs text-blue-200">{currentDate}</p>
            </div>
            <NavLinks />
        </div>
        </header>
    );
}
