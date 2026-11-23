'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4"
    >
      <div>
        {currentPage > 1 ? (
          <Link
            href={createPageURL(currentPage - 1)}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            ← Previous
          </Link>
        ) : (
          <span className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
            ← Previous
          </span>
        )}
      </div>

      <span className="text-sm font-medium text-gray-700">
        Page <span className="font-semibold text-gray-900">{currentPage}</span> of{' '}
        <span className="font-semibold text-gray-900">{totalPages}</span>
      </span>

      <div>
        {currentPage < totalPages ? (
          <Link
            href={createPageURL(currentPage + 1)}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Next →
          </Link>
        ) : (
          <span className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
            Next →
          </span>
        )}
      </div>
    </nav>
  );
}
