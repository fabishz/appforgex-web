
import { Pool } from '@neondatabase/serverless';

// Typically these are loaded from process.env
// For local development, ensure DATABASE_URL is in .env or .env.local
const connectionString = process.env.DATABASE_URL;

// Create a pool instance
// The pool will manage multiple connections to the database
export const pool = new Pool({
    connectionString,
});

// Helper for running queries
export const query = async (text: string, params?: any[]) => {
    if (!connectionString) {
        console.warn("DATABASE_URL not set, returning empty result for query:", text);
        return { rows: [] };
    }
    return pool.query(text, params);
};
