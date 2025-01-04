// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import {supabase} from "../../../utils/supabase.ts";
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const formData = await request.formData();
        const first_name = formData.get("first_name")?.toString().trim();
        const last_name = formData.get("last_name")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const password = formData.get("password")?.toString().trim();

        // Validate input
    if (!email || !password) {
        return new Response("Email and password are required", { status: 400 });
    }

        if (!first_name || !last_name) {
            return new Response("First and last name are required", { status: 400 });
        }

    if (password.length < 8) {
        return new Response("Password must be at least 8 characters", { status: 400 });
    }

    // Attempt sign-up with Supabase AUTH
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            console.error("Auth sign-up error:", authError);
            return new Response(authError.message, { status: 500 });
        }
        // Ensure user data exists in response
        if (!authData || !authData.user) {
            return new Response("Auth sign-up succeeded but no user data was returned", { status: 500 });
        }

        const userId = authData.user.id; // Supabase user ID

        // Insert user details into the custom 'users' table
        const { error: userError } = await supabase
            .from("users") // Replace with your table name
            .insert([
                {
                    id: userId, // Use the user ID from Supabase Auth
                    role: "placeholder",
                    email,           // Email from form data
                    password, // TODO: Encrypt passwords
                    created_at: new Date().toISOString(),
                    created_by: email,
                    username: "placeholder"
                },
            ]);


        if (userError) {
            console.error("Database insert error:", userError);
            return new Response("Failed to save user in the database", { status: 500 });
        }

        // Insert profile details into the profiles table
        const { error: profileError } = await supabase
            .from("profiles") // Replace with your profiles table name
            .insert([
                {
                    id: userId,    // Use the user ID from Supabase Auth
                    first_name,    // First name
                    last_name,     // Last name
                    created_at: new Date().toISOString(),
                },
            ]);

        if (profileError) {
            console.error("Profile details insert error:", profileError);
            return new Response("Failed to save profile details in the database", { status: 500 });
        }

        // Redirect after successful user creation
        return redirect("/api/signin");

    } catch (err) {
        console.error("Unexpected error:", err);
        return new Response("Internal server error", { status: 500 });
    }

};