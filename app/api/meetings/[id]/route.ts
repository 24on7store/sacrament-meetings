import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const numericId = Number(id);

  if (Number.isNaN(numericId) || numericId <= 0) {
    return NextResponse.json({ error: 'Invalid meeting ID' }, { status: 400 });
  }

  const meeting = await getMeetingById(numericId);

  if (!meeting) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }

  return NextResponse.json(meeting, { status: 200 });
}
