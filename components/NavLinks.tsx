'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/' },
    { name: 'All Meetings', href: '/meetings' },
    { name: 'This Sunday', href: '/meetings/current' },
    ];

    export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary Navigation" className="flex gap-3">
        {links.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                {
                    'bg-blue-800 text-white': isActive,
                    'text-blue-100 hover:bg-blue-600 hover:text-white': !isActive,
                }
                )}
            >
                {link.name}
            </Link>
            );
        })}
        </nav>
    );
}
