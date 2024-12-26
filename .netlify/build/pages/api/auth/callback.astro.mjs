import { s as supabaseClient } from '../../../chunks/supabase_klfyvS1Y.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }
  const { data, error } = await supabaseClient.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  console.log("cookies set");
  return redirect("/api/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
