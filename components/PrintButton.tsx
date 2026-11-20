'use client';

export default function PrintButton() {
    return (
        <button
        type="button"
        onClick={() => window.print()}
        className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors print:hidden"
        >
        Print Program
        </button>
    );
}
