
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { services as placeholderServices } from '@/lib/placeholder-data';

export async function GET() {
    try {
        // Attempt to fetch from DB
        // Assuming a table 'services' exists with similar structure
        // Since migration script isn't run yet, this will likely fail or return empty
        // But this demonstrates the backend logic.
        const result = await query('SELECT * FROM services');

        if (result.rows && result.rows.length > 0) {
            return NextResponse.json(result.rows);
        }

        // Fallback to placeholder data if DB is empty or not set up
        return NextResponse.json(placeholderServices);
    } catch (error) {
        console.error('Database query failed:', error);
        // Fallback on error (e.g. valid credentials not provided yet)
        return NextResponse.json(placeholderServices);
    }
}
