import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot } from '../chunks/astro/server_DM4MSMfD.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_CQVIplYv.mjs';
import { $ as $$Card } from '../chunks/Card_C4MPnZc2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const identity = {
    firstName: "Macc",
    country: "USA",
    occupation: "Software Engineer",
    hobbies: ["photography", "coding", "cooking", "reading"]
  };
  const pageTitle = "About";
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "About", "pageTitle": "About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6"> <h2 class="p-2">${pageTitle}</h2> <p class="">This is like my 100th attempt at this blog. I better get this done this time.</p> <ul> <li>My name is ${identity.firstName}.</li> <li>I live in ${identity.country} and I work as a ${identity.occupation}.</li>
)}
</ul> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="bg-bluegray p-2 border-solid"> <p class="poppins">My skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li>${skill}</li>`)} </ul> </div> ` })} </main> ` })}`;
}, "/home/maxx-supreme/macc-blog/src/pages/about.astro", void 0);

const $$file = "/home/maxx-supreme/macc-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
