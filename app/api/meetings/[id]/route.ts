import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
    ) {
    const { id } = await params;
    const numericId = Number(id);

    // Return 400 if ID is not a valid number (e.g. /api/meetings/abc)
    if (Number.isNaN(numericId) || numericId <= 0) {
        return NextResponse.json({ error: 'Invalid meeting ID' }, { status: 400 });
    }

    const meeting = getMeetingById(numericId);

    // Return 404 if meeting doesn't exist (e.g. /api/meetings/999)
    if (!meeting) {
        return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
    }

    return NextResponse.json(meeting, { status: 200 });
    }
