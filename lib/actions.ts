'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { 
    addMeeting as dbAddMeeting,
    updateMeeting as dbUpdateMeeting,
    deleteMeeting as dbDeleteMeeting } from './meetings-db';
import type { SpeakerItem, WardBusinessItem } from './types';

// // Reusable schema for Hymn objects ({ number, title })
// const MeetingFormSchema = z.object({
//     number: z.coerce.number().int().min(1, { message: 'Hymn number must be at least 1.' }),
//     title: z.string().trim().min(1, { message: 'Hymn title is required.' }),
//     });

    // Main Zod schema
    const MeetingFormSchema = z.object({
    date: z.string().min(1, { message: 'Please select a meeting date.' }),
    meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], {
        message: 'Please select a valid meeting type.',
    }),
    presiding: z.string().trim().min(1, { message: 'Presiding leader is required.' }),
    conducting: z.string().trim().min(1, { message: 'Conducting leader is required.' }),
    announcements: z.string().optional().default('[]'),
    openingHymnNumber: z.coerce.number().int().min(1, { message: 'Opening hymn number is required.' }),
    openingHymnTitle: z.string().trim().min(1, { message: 'Opening hymn title is required.' }),
    openingPrayer: z.string().trim().min(1, { message: 'Opening prayer is required.' }),
    wardBusiness: z.string().optional().default('[]'),
    stakeBusiness: z.boolean().default(false),
    sacramentHymnNumber: z.coerce.number().int().min(1, { message: 'Sacrament hymn number is required.' }),
    sacramentHymnTitle: z.string().trim().min(1, { message: 'Sacrament hymn title is required.' }),
    speakers: z.string().optional().default('[]'),
    closingHymnNumber: z.coerce.number().int().min(1, { message: 'Closing hymn number is required.' }),
    closingHymnTitle: z.string().trim().min(1, { message: 'Closing hymn title is required.' }),
    closingPrayer: z.string().trim().min(1, { message: 'Closing prayer is required.' }),
    });

    export type MeetingFormState = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        announcements?: string[];
        openingHymnNumber?: string[];
        openingHymnTitle?: string[];
        openingPrayer?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
        sacramentHymnNumber?: string[];
        sacramentHymnTitle?: string[];
        speakers?: string[];
        closingHymnNumber?: string[];
        closingHymnTitle?: string[];
        closingPrayer?: string[];
    };
    message?: string | null;
    };

    // Safe JSON array parser helper
    function parseJsonArray<T>(raw: string | undefined, fallback: T[] = []): T[] {
    if (!raw) return fallback;
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : fallback;
    } catch {
        return fallback;
    }
    }

    function extractFormData(formData: FormData) {
    return {
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        announcements: formData.get('announcements') || '[]',
        openingHymnNumber: formData.get('openingHymnNumber'),
        openingHymnTitle: formData.get('openingHymnTitle'),
        openingPrayer: formData.get('openingPrayer'),
        wardBusiness: formData.get('wardBusiness') || '[]',
        stakeBusiness: formData.get('stakeBusiness') === 'on' || formData.get('stakeBusiness') === 'true',
        sacramentHymnNumber: formData.get('sacramentHymnNumber'),
        sacramentHymnTitle: formData.get('sacramentHymnTitle'),
        speakers: formData.get('speakers') || '[]',
        closingHymnNumber: formData.get('closingHymnNumber'),
        closingHymnTitle: formData.get('closingHymnTitle'),
        closingPrayer: formData.get('closingPrayer'),
    };
    }

    // CREATE Action
    export async function createMeetingAction(
    prevState: MeetingFormState,
    formData: FormData
    ): Promise<MeetingFormState> {
    const validated = MeetingFormSchema.safeParse(extractFormData(formData));

    if (!validated.success) {
        return {
        errors: validated.error.flatten().fieldErrors,
        message: 'Please fix the highlighted errors before saving.',
        };
    }

    const d = validated.data;

    try {
        await dbAddMeeting({
        date: d.date,
        meetingType: d.meetingType,
        presiding: d.presiding,
        conducting: d.conducting,
        announcements: parseJsonArray<string>(d.announcements),
        openingHymn: { number: d.openingHymnNumber, title: d.openingHymnTitle },
        openingPrayer: d.openingPrayer,
        wardBusiness: parseJsonArray<WardBusinessItem>(d.wardBusiness),
        stakeBusiness: d.stakeBusiness,
        sacramentHymn: { number: d.sacramentHymnNumber, title: d.sacramentHymnTitle },
        speakers: parseJsonArray<SpeakerItem>(d.speakers),
        closingHymn: { number: d.closingHymnNumber, title: d.closingHymnTitle },
        closingPrayer: d.closingPrayer,
        });
    } catch (error) {
        console.error('Database Error:', error);
        return { message: 'Database Error: Failed to create meeting.' };
    }

    revalidatePath('/meetings');
    redirect('/meetings');
    }

    // UPDATE Action
    export async function updateMeetingAction(
    id: number,
    prevState: MeetingFormState,
    formData: FormData
    ): Promise<MeetingFormState> {
    const validated = MeetingFormSchema.safeParse(extractFormData(formData));

    if (!validated.success) {
        return {
        errors: validated.error.flatten().fieldErrors,
        message: 'Please fix the highlighted errors before updating.',
        };
    }

    const d = validated.data;

    try {
        await dbUpdateMeeting(id, {
        date: d.date,
        meetingType: d.meetingType,
        presiding: d.presiding,
        conducting: d.conducting,
        announcements: parseJsonArray<string>(d.announcements),
        openingHymn: { number: d.openingHymnNumber, title: d.openingHymnTitle },
        openingPrayer: d.openingPrayer,
        wardBusiness: parseJsonArray<WardBusinessItem>(d.wardBusiness),
        stakeBusiness: d.stakeBusiness,
        sacramentHymn: { number: d.sacramentHymnNumber, title: d.sacramentHymnTitle },
        speakers: parseJsonArray<SpeakerItem>(d.speakers),
        closingHymn: { number: d.closingHymnNumber, title: d.closingHymnTitle },
        closingPrayer: d.closingPrayer,
        });
    } catch (error) {
        console.error('Database Error:', error);
        return { message: 'Database Error: Failed to update meeting.' };
    }

    revalidatePath('/meetings');
    revalidatePath(`/meetings/${id}`);
    redirect('/meetings');
    }

    // DELETE Action
    export async function deleteMeetingAction(id: number): Promise<void> {
    try {
        await dbDeleteMeeting(id);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to delete meeting.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}
