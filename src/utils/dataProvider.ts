import { supabaseClient } from './supabase';
import {supabaseDataProvider} from "ra-supabase";

export const dataProvider = supabaseDataProvider({
    instanceUrl: import.meta.env.SUPABASE_URL,
    apiKey: import.meta.env.SUPABASE_KEY,
    supabaseClient,
});