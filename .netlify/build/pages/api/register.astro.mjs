import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_CQVIplYv.mjs';
import { a as supabase } from '../../chunks/supabase_klfyvS1Y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  Astro2.props;
  await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password"
  });
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Register", "pageTitle": "Register", "activeUrl": "no", "isLoggedIn": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1 flex flex-col gap-4 items-center p-4 justify-center"> <section class="w-full max-w-md"> <h1 class="font-semibold text-2xl dark:text-zinc-100 text-zinc-900 w-full mb-1">
title goes here
</h1> <p class="text-zinc-500 dark:text-zinc-400 text-sm mb-8 w-full">
Already have an account? <a href="/api/signin" class="dark:text-blue-400 text-blue-600 underline underline-offset-2 font-medium">Sign in</a> </p> <form action="/api/auth/register" method="post" class="grid grid-cols-1 gap-3 w-full"> <div class="grid grid-cols-1 gap-2"> <label for="email" class="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Email</label> <input id="email" type="email" name="email" class="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60"> </div> <div class="grid grid-cols-1 gap-2"> <label for="password" class="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Password</label> <input id="password" type="password" name="password" class="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60"> </div> <button type="submit" class="dark:bg-zinc-100 bg-zinc-900 border-zinc-900 py-1.5 border dark:border-zinc-100 rounded-md mt-4 dark:text-zinc-900 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed">Register</button> </form> </section> </main> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/pages/api/register.astro", void 0);

const $$file = "/home/maxx-supreme/macc-blog/src/pages/api/register.astro";
const $$url = "/api/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
