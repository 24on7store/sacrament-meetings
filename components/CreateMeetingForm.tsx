'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createMeetingAction as createMeeting, type MeetingFormState } from '@/lib/actions';

export default function CreateMeetingForm() {
    const initialState: MeetingFormState = { message: null, errors: {} };
    const [state, formAction, isPending] = useActionState(createMeeting, initialState);

    return (
        <form
        action={formAction}
        aria-describedby="form-error"
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6"
        >
        {/* Default empty JSON arrays for structured list fields */}
        <input type="hidden" name="announcements" defaultValue="[]" />
        <input type="hidden" name="wardBusiness" defaultValue="[]" />
        <input type="hidden" name="speakers" defaultValue="[]" />

        {/* Date & Meeting Type */}
        <div className="grid sm:grid-cols-2 gap-4">
            <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Meeting Date
            </label>
            <input
                id="date"
                name="date"
                type="date"
                aria-describedby="date-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="date-error" aria-live="polite" aria-atomic="true">
                {state.errors?.date?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="meetingType" className="block text-sm font-medium text-gray-700">
                Meeting Type
            </label>
            <select
                id="meetingType"
                name="meetingType"
                defaultValue="regular"
                aria-describedby="meetingType-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            >
                <option value="regular">Regular</option>
                <option value="testimony">Fast &amp; Testimony</option>
                <option value="stake">Stake Conference</option>
                <option value="general">General Conference</option>
            </select>
            <div id="meetingType-error" aria-live="polite" aria-atomic="true">
                {state.errors?.meetingType?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>
        </div>

        {/* Presiding & Conducting */}
        <div className="grid sm:grid-cols-2 gap-4">
            <div>
            <label htmlFor="presiding" className="block text-sm font-medium text-gray-700">
                Presiding
            </label>
            <input
                id="presiding"
                name="presiding"
                type="text"
                placeholder="e.g., Bishop Smith"
                aria-describedby="presiding-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="presiding-error" aria-live="polite" aria-atomic="true">
                {state.errors?.presiding?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="conducting" className="block text-sm font-medium text-gray-700">
                Conducting
            </label>
            <input
                id="conducting"
                name="conducting"
                type="text"
                placeholder="e.g., Brother Johnson"
                aria-describedby="conducting-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="conducting-error" aria-live="polite" aria-atomic="true">
                {state.errors?.conducting?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>
        </div>

        {/* Opening Hymn & Opening Prayer */}
        <div className="grid sm:grid-cols-3 gap-4">
            <div>
            <label htmlFor="openingHymnNumber" className="block text-sm font-medium text-gray-700">
                Opening Hymn #
            </label>
            <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                min={1}
                aria-describedby="openingHymnNumber-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="openingHymnNumber-error" aria-live="polite" aria-atomic="true">
                {state.errors?.openingHymnNumber?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="openingHymnTitle" className="block text-sm font-medium text-gray-700">
                Opening Hymn Title
            </label>
            <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                type="text"
                aria-describedby="openingHymnTitle-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="openingHymnTitle-error" aria-live="polite" aria-atomic="true">
                {state.errors?.openingHymnTitle?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="openingPrayer" className="block text-sm font-medium text-gray-700">
                Opening Prayer
            </label>
            <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                aria-describedby="openingPrayer-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
                {state.errors?.openingPrayer?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>
        </div>

        {/* Sacrament Hymn */}
        <div className="grid sm:grid-cols-2 gap-4">
            <div>
            <label htmlFor="sacramentHymnNumber" className="block text-sm font-medium text-gray-700">
                Sacrament Hymn #
            </label>
            <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                min={1}
                aria-describedby="sacramentHymnNumber-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="sacramentHymnNumber-error" aria-live="polite" aria-atomic="true">
                {state.errors?.sacramentHymnNumber?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="sacramentHymnTitle" className="block text-sm font-medium text-gray-700">
                Sacrament Hymn Title
            </label>
            <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                type="text"
                aria-describedby="sacramentHymnTitle-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="sacramentHymnTitle-error" aria-live="polite" aria-atomic="true">
                {state.errors?.sacramentHymnTitle?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>
        </div>

            {/* Closing Hymn & Closing Prayer */}
        <div className="grid sm:grid-cols-3 gap-4">
            <div>
            <label htmlFor="closingHymnNumber" className="block text-sm font-medium text-gray-700">
                Closing Hymn #
            </label>
            <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                min={1}
                aria-describedby="closingHymnNumber-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="closingHymnNumber-error" aria-live="polite" aria-atomic="true">
                {state.errors?.closingHymnNumber?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="closingHymnTitle" className="block text-sm font-medium text-gray-700">
                Closing Hymn Title
            </label>
            <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                type="text"
                aria-describedby="closingHymnTitle-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="closingHymnTitle-error" aria-live="polite" aria-atomic="true">
                {state.errors?.closingHymnTitle?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>

            <div>
            <label htmlFor="closingPrayer" className="block text-sm font-medium text-gray-700">
                Closing Prayer
            </label>
            <input
                id="closingPrayer"
                name="closingPrayer"
                type="text"
                aria-describedby="closingPrayer-error"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
            />
            <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
                {state.errors?.closingPrayer?.map((err) => (
                <p key={err} className="mt-1 text-xs text-red-600">{err}</p>
                ))}
            </div>
            </div>
        </div>

        {/* Stake Business Checkbox */}
        <div className="flex items-center gap-2">
            <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600"
            />
            <label htmlFor="stakeBusiness" className="text-sm text-gray-700">
            Includes Stake Business
            </label>
        </div>

        {/* Form-Level Status / Error Message */}
        <div id="form-error" aria-live="polite" aria-atomic="true">
            {state.message && (
            <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                {state.message}
            </p>
            )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <Link
            href="/meetings"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
            Cancel
            </Link>
            <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
            {isPending ? 'Creating...' : 'Create Meeting'}
            </button>
        </div>
        </form>
    );
}
