import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-11-01',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Bishop Smith',
        announcements: ['Fast Sunday: Thank you for your generous fast offerings'],
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Adams',
        wardBusiness: [{ description: 'Release of Brother Clark as Sunday School Teacher' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
        speakers: [], // Testimony meeting
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
    },
    {
        id: 2,
        date: '2026-11-08', // Matches this current week's Sunday!
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Ward temple night: Nov 14 at 7:00 PM', 'Youth activity Wednesday'],
        openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
        speakers: [
        { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
        { name: 'Ward Choir', topic: 'Come, Follow Me', type: 'musical-number' },
        { name: 'Brother Taylor', topic: 'Gratitude in Daily Life', type: 'speaker' },
        ],
        closingHymn: { number: 85, title: 'How Firm a Foundation' },
        closingPrayer: 'Sister Miller',
    },
    {
        id: 3,
        date: '2026-11-15',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother White',
        announcements: ['Ward Thanksgiving dinner next Friday'],
        openingHymn: { number: 92, title: 'For the Beauty of the Earth' },
        openingPrayer: 'Brother Wilson',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
        speakers: [
        { name: 'Youth Speaker: Mia Moore', topic: 'Service', type: 'speaker' },
        { name: 'Brother Anderson', topic: 'Enduring to the End', type: 'speaker' },
        ],
        closingHymn: { number: 94, title: 'Come, Ye Thankful People' },
        closingPrayer: 'Sister Thomas',
    },
    {
        id: 4,
        date: '2026-11-22',
        meetingType: 'stake',
        presiding: 'President Jackson',
        conducting: 'President Jackson',
        announcements: ['Stake Conference broadcast at the Stake Center'],
        openingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
        openingPrayer: 'Brother Harris',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
        { name: 'High Councilor Lee', topic: 'Strengthening Families', type: 'speaker' },
        { name: 'Stake Relief Society President', topic: 'Covenant Path', type: 'speaker' },
        ],
        closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
        closingPrayer: 'Sister Martin',
    },
    {
        id: 5,
        date: '2026-10-04',
        meetingType: 'general',
        presiding: 'First Presidency',
        conducting: 'First Presidency',
        announcements: ['General Conference Broadcast — No local ward meetings'],
        openingHymn: { number: 301, title: 'I Am a Child of God' },
        openingPrayer: 'General Authority',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 170, title: 'God, Our Father, Hear Us Pray' },
        speakers: [],
        closingHymn: { number: 2, title: 'The Spirit of God' },
        closingPrayer: 'General Authority',
    },
    ];

    export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter((m) => m.date === date);
    return meetings;
    }

    export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find((m) => m.id === id) ?? null;
}
