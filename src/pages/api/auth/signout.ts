// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, cookies, redirect }) => {
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    return redirect("/signin");
};