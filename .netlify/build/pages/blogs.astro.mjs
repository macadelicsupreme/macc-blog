import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent } from '../chunks/astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DUeHitvW.mjs';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_CQVIplYv.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/home/maxx-supreme/macc-blog/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blogs;
  const { activeUrl, isLoggedIn } = Astro2.props;
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Blog", "pageTitle": "Brutal Blog", "activeUrl": activeUrl, "isLoggedIn": isLoggedIn }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-green p-6"> <p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.id}/`, "title": post.data.title })}`)} </ul> </main> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/pages/blogs.astro", void 0);

const $$file = "/home/maxx-supreme/macc-blog/src/pages/blogs.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blogs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
