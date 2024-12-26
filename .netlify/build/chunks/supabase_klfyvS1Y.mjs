import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  "https://ksldhhnrcseitkqgdyrb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzbGRoaG5yY3NlaXRrcWdkeXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5OTU2OTksImV4cCI6MjA1MDU3MTY5OX0.jRMMgM0d772gN6iXOnS7Xuw3_s2gndU_dRKeTLiS9Bc",
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: true,
      detectSessionInUrl: false,
      persistSession: true
    }
  }
);
const supabaseUrl = "https://ksldhhnrcseitkqgdyrb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzbGRoaG5yY3NlaXRrcWdkeXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5OTU2OTksImV4cCI6MjA1MDU3MTY5OX0.jRMMgM0d772gN6iXOnS7Xuw3_s2gndU_dRKeTLiS9Bc";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as a, supabaseClient as s };
