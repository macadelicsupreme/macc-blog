import { c as createAstro, a as createComponent, r as renderTemplate, d as renderSlot, g as renderHead, m as maybeRenderHead, e as addAttribute, b as renderComponent } from './astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$4 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="stylesheet"><link rel="icon" type="image/svg" href="./favicon.svg"><title>macc blogs</title>${renderSlot($$result, $$slots["default"])}${renderHead()}</head>`;
}, "/home/maxx-supreme/macc-blog/src/components/layout/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://example.com");
const $$BaseFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseFooter;
  const { backToTop = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<footer class="Customize Toolbar\u2026  bg-black text-white p-6" data-astro-cid-4jhxmvk6> <h2 class="hidden" data-astro-cid-4jhxmvk6>Footer</h2> <p class="outfit" data-astro-cid-4jhxmvk6>
Brutal theme for Astro - by <a href="" target="_blank" class="text-blue" data-astro-cid-4jhxmvk6>macc blogs</a> </p> </footer>  <!--<script>--> <!--    document.addEventListener('astro:page-load', () => {--> <!--        const backToTop = document.querySelector('.backToTop');--> <!--        const toggleBackToTopButton = () => {--> <!--            if (window.scrollY > 250) {--> <!--                backToTop?.classList.add('active');--> <!--            } else {--> <!--                backToTop?.classList.remove('active');--> <!--            }--> <!--        };--> <!--        backToTop?.addEventListener('click', () => {--> <!--            window.scrollTo({--> <!--                top: 0,--> <!--                behavior: 'smooth',--> <!--            });--> <!--        });--> <!--        window.addEventListener('scroll', toggleBackToTopButton);--> <!--    });--> <!--<\/script>-->`])), backToTop && renderTemplate`${maybeRenderHead()}<button${addAttribute([
    backToTop ? `backToTop` : null,
    "transition-300 z-50 opacity-0 fixed flex bottom-[10px] right-[30px] w-10 h-10 bg-white border border-black card-shadow"
  ], "class:list")} data-astro-cid-4jhxmvk6><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="100%" width="100%" stroke-width="1.5" stroke="currentColor" data-astro-cid-4jhxmvk6><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" data-astro-cid-4jhxmvk6></path></svg></button>`);
}, "/home/maxx-supreme/macc-blog/src/components/layout/BaseFooter.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$NavButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavButtons;
  const { activeUrl, isLoggedIn } = Astro2.props;
  const navigationItems = isLoggedIn ? [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blogs/" },
    { name: "About", url: "/about/" }
  ] : [
    // if you are not logged in
    { name: "Home", url: "/" },
    { name: "Sign-in", url: "api/signin/" },
    { name: "Register", url: "api/register" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav> <ul> ${navigationItems.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")}${addAttribute({ "active": activeUrl === item.url }, "class:list")}> ${item.name} </a> </li>`)} </ul> </nav>`;
}, "/home/maxx-supreme/macc-blog/src/components/layout/NavButtons.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BaseHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHeader;
  const { activeUrl, isLoggedIn, pageTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#90323D] rubik-variable border-dashed border-b-2 font-bold border-black flex justify-between items-center px-6 py-4" data-astro-cid-yim3ke4b> <h1 class="text-white text-2xl" data-astro-cid-yim3ke4b>${pageTitle || "My Website"}</h1> ${renderComponent($$result, "NavButtons", $$NavButtons, { "activeUrl": activeUrl, "isLoggedIn": isLoggedIn, "data-astro-cid-yim3ke4b": true })} </header> `;
}, "/home/maxx-supreme/macc-blog/src/components/layout/BaseHeader.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title, isLoggedIn, pageTitle, activeUrl } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full w-full"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}${renderComponent($$result, "BaseHeader", $$BaseHeader, { "pageTitle": pageTitle, "isLoggedIn": isLoggedIn, "activeUrl": activeUrl })}${maybeRenderHead()}<body class="flex flex-col h-full w-full dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-100"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </body></html>`;
}, "/home/maxx-supreme/macc-blog/src/layouts/DefaultLayout.astro", void 0);

export { $$DefaultLayout as $ };
