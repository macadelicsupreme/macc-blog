import { a as supabase, s as supabaseClient } from '../../../chunks/supabase_klfyvS1Y.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const { data, error } = await supabase.from("users").select();
  if (provider) {
    const { data: data2, error: error2 } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "https://astro-supabase-auth.vercel.app/api/auth/callback"
      }
    });
    if (error2) {
      return new Response(error2.message, { status: 500 });
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  await supabaseClient.auth.getUser();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });
  cookies.set("sb-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });
  return redirect("/api/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
