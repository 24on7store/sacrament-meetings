import { NextResponse } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') ?? '';
    const date = searchParams.get('date');
    const page = Math.max(1, Number(searchParams.get('page')) || 1);

    const meetings = await getMeetings(query, page);

    if (date) {
        return NextResponse.json(
        meetings.filter((m) => m.date === date),
        { status: 200 }
        );
    }

    return NextResponse.json(meetings, { status: 200 });
}
