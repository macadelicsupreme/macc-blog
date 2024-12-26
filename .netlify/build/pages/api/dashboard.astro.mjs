import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
import { a as supabase } from '../../chunks/supabase_klfyvS1Y.mjs';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_CQVIplYv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/api/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/api/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/api/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "dashboard", "pageTitle": "dashboard", "activeUrl": "", "isLoggedIn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome Dude</h1> <p class="max-w-prose text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
Welcome ${email} </p> <section> <form action="/api/auth/signout"> <button type="submit" class="mb-10 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-1 rounded-md">Sign out</button> </form> </section> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/pages/api/dashboard.astro", void 0);

const $$file = "/home/maxx-supreme/macc-blog/src/pages/api/dashboard.astro";
const $$url = "/api/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
