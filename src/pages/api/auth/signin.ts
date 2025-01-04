// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import {supabase} from "../../../utils/supabase.ts";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    try {
        const formData = await request.formData();
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        const provider = formData.get("provider")?.toString();
        const {data:users, error:usersError} = await supabase
            .from('users')
            .select();
        if (usersError) {
            console.log("Error fetching users:", usersError)
        }
        console.log("fetching data from Users table")



        if (!email || !password) {
            return new Response("Email and password are required", { status: 400 });
        }

        // signin user
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        // Set tokens in cookies
        const { access_token, refresh_token } = data.session;
        cookies.set("sb-access-token", access_token, { path: "/" });
        cookies.set("sb-refresh-token", refresh_token, { path: "/" });

        return redirect("/api/dashboard");
    } catch (err) {
        console.error("Unexpected Error while signing in", err);
        return new Response(
            err instanceof Error ? err.message : "Unknown error occurred",
            { status: 500 }
        );
    }

};