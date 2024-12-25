// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import {supabaseClient} from "../../../utils/supabase.ts";

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();


    // Validate input
    if (!email || !password) {
        return new Response("Email and password are required", { status: 400 });
    }

    if (password.length < 8) {
        return new Response("Password must be at least 8 characters", { status: 400 });
    }

    // Attempt sign-up
    const { data, error } = await supabaseClient.auth.signUp({  email: 'example@email.com',
        password: 'example-password', });

    if (error) {
        console.error("Supabase error during sign-up:", error);
        return new Response(error.message, { status: 500 });
    }

        return redirect("/api/signin");
    } catch (err) {
        console.error("Unexpected error during sign-up:", err);
        return new Response("Internal server error", { status: 500 });
    }
};

