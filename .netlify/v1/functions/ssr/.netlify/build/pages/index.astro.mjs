import { c as createAstro, a as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, d as renderSlot, b as renderComponent } from '../chunks/astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_CQVIplYv.mjs';
import { c as colors, $ as $$Card } from '../chunks/Card_C4MPnZc2.mjs';
/* empty css                                 */
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DUeHitvW.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CDoMC3BE.mjs';
import { s as supabaseClient } from '../chunks/supabase_klfyvS1Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://example.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(rest)} class="btn" data-astro-cid-vnzlvqnm${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/maxx-supreme/macc-blog/src/components/Button.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$SummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SummaryCard;
  const { title, imgAlt, imgSrc, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "color": "white" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="ptext-lg md:text-xl">${title}</h3> <div class=""> ${renderComponent($$result2, "Image", $$Image, { "src": imgSrc, "alt": imgAlt, "width": 800, "height": 400, "class": "rounded h-full w-full object-cover" })} </div> <p>${description}</p> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/maxx-supreme/macc-blog/src/components/generic/SummaryCard.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$BlogSummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogSummaryCard;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SummaryCard", $$SummaryCard, { "title": post.data.title, "imgAlt": post.data.title, "imgSrc": post.data.imgUrl, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-end my-4"> ${renderComponent($$result2, "Button", $$Button, { "href": `/post/${post.id}/`, "class": "bg-white text-black px-4 py-2 border-solid border-black hover:bg-gray-200" }, { "default": ($$result3) => renderTemplate`
Read Post
` })} </div> <div class="hidden sm:inline-block"> <p class="poppins mt-2">tags:</p> <div class="flex justify-between items-center"></div> </div> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/components/BlogSummaryCard.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    return renderTemplate`<li> ${renderComponent($$result, "BlogSummaryCard", $$BlogSummaryCard, { "post": post })} </li>`;
  })} </ul>`;
}, "/home/maxx-supreme/macc-blog/src/components/BlogList.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$RecentBlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecentBlogPosts;
  const { count } = Astro2.props;
  const posts = await getCollection("blog").then(
    (posts2) => posts2.reverse().slice(0, count ?? 3)
  );
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> ${renderComponent($$result, "Card", $$Card, { "color": "white" }, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-start"> <div class="hidden md:block"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blogs/" }, { "default": ($$result3) => renderTemplate`Go to blog &rarr;` })} </div> <!--<p class="text-lg text-gray-700 mb-6">--> <!--    Dive into my adventures in software engineering, problem-solving, and personal projects. Join the journey and gain insights from my experiences!--> <!--</p>--> <!--<Button href="/blog/">--> <!--    Recent Blogposts--> <!--</Button>--> </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} ` })} </section> <!-- was running out of memory because the const posts = await getCollection('blog') was recursing infinitely before i changed it-->`;
}, "/home/maxx-supreme/macc-blog/src/components/generic/RecentBlogPosts.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await supabaseClient.from("Users").select("*");
  const { activeUrl, isLoggedIn } = Astro2.props;
  console.log("users");
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home", "pageTitle": "Home Page", "activeUrl": activeUrl, "isLoggedIn": isLoggedIn }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 new-amsterdam-regular bg-[#D9CAB3] border-solid border-black"> <!-- Hero Section --> <section id="hero" class="whitish-looking-bg drop-shadow-[5px_5px_0_rgb(0_0_0/_1)] border-solid border-2 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 p-4  shadow-md rounded-lg"> <div class="col-span-4"> <h1 class="josefin-sans-variable text-4xl md:text-6xl outfit font-bold mt-4">Welcome to Macc Blogs</h1> <p class="text-lg md:text-xl mt-4 rubik-serif">
Follow along as I share my experiences in software engineering and explore my hobbies. Dive into stories, lessons, and adventures!
</p> <p>Colors inspired by my wifey.</p> ${renderComponent($$result2, "Button", $$Button, { "target": "_self", "href": "/about/" }, { "default": ($$result3) => renderTemplate`
Learn More About Me &rarr;
` })} </div> </section> <!-- About Section --> <section id="about" class="grid md:grid-cols-8 gap-6 mt-12"> <div class="col-span-4 p-4 m-4 custom-lavender-texture-bg border-dashed border-b-dark drop-shadow-[5px_5px_0_rgb(0_0_0/_1)]"> ${renderComponent($$result2, "Card", $$Card, { "color": "white" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl outfit font-bold mb-4 rubik-variable">About the Blog</h2> <p class="text-lg rubik-serif">
This blog is a space where I document my journey through software engineering and beyond. Whether it's new technologies, problem-solving adventures, or personal projects, you'll find it here.
</p> ` })} </div> <div class="col-span-4 p-4 m-4 custom-lavender-texture-bg border-dashed border-b-dark drop-shadow-[5px_5px_0_rgb(0_0_0/_1)]"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl outfit font-bold mb-4 rubik-variable">Why Follow Along?</h2> <p class="text-lg rubik-serif">
Join me in discovering how to navigate challenges, embrace learning opportunities, and celebrate small wins. Let’s grow and explore together.
</p> ` })} </div> </section> <!-- Recent Blog Posts Section --> <section id="recent-blogs" class="bg-[#BC8034] drop-shadow-[5px_5px_0_rgb(0_0_0/_1)] border-solid border-2 flex flex-col md:flex-row items-center justify-between gap-6 mt-8 mb-12 p-8  shadow-md rounded-lg"> <div class=""> <h1 class="josefin-sans-variable">Check out some of my Recent Blogposts</h1> ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, {})} </div> </section> </main> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/pages/index.astro", void 0);

const $$file = "/home/maxx-supreme/macc-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
