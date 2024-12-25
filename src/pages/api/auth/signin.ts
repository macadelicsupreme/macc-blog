// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import {supabase, supabaseClient} from "../../../utils/supabase.ts";
import type {Provider} from "@supabase/auth-js";


export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const provider = formData.get("provider")?.toString();
    const { data, error } = await supabase
        .from('users')
        .select()


    if (provider) {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: provider as Provider,
            options: {
                redirectTo: import.meta.env.DEV
                    ? "http://localhost:4321/api/auth/callback"
                    : "https://astro-supabase-auth.vercel.app/api/auth/callback",
            },
        });



    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect(data.url);
}

if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
}
//
// const { data, error } = await supabaseClient.auth.signInWithPassword({
//     email,
//     password,
// });

    const { data: { user } } = await supabaseClient.auth.getUser()


if (error) {
    return new Response(error.message, { status: 500 });
}

const { access_token, refresh_token } = data.session;

cookies.set("sb-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
});

cookies.set("sb-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
});

return redirect("/api/dashboard");
};