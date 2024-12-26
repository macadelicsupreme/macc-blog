import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY,
    {
        auth: {
            flowType: "pkce",
            autoRefreshToken: true,
            detectSessionInUrl: false,
            persistSession: true,
        },
    },
);


const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);