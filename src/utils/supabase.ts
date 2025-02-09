// utils/supabase.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from 'database.types.ts';

// Environment variables
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

// Verify that environment variables are provided
if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables: SUPABASE_URL or SUPABASE_KEY");
}

// Create and export a single Supabase client instance
export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: {
        flowType: "pkce",  // Ensures secure OAuth flow
        autoRefreshToken: false,  // Automatically refreshes tokens
        persistSession: true,  // Saves the session across reloads
    },
});
