import type { APIRoute } from "astro";
import { supabase } from "../utils/supabase.ts";

export const GET: APIRoute = async () => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            { status: 500 },
        );
    }

    return new Response(JSON.stringify(data));
};

export const POST: APIRoute = async ({ request }) => {
    const { username, password } = await request.json();
    const { data, error } = await supabase
        .from("user")
        .insert({ username, password })
        .select();

    if (error) {
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            { status: 500 },
        );
    }

    return new Response(JSON.stringify(data));
};