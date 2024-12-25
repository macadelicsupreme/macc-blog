import { c as createAstro, a as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as renderSlot } from './astro/server_DM4MSMfD.mjs';
/* empty css                         */
import 'clsx';

const colors = [
	"#c084fc",
	"#f472b6",
	"#fb7185",
	"#e879f9",
	"#a78bfa",
	"#818cf8",
	"#60a5fa",
	"#38bdf8",
	"#22d3ee",
	"#2dd4bf",
	"#34d399",
	"#4ade80",
	"#a3e635",
	"#facc15",
	"#fb923c",
	"#f87171"
];

const $$Astro = createAstro("https://example.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<div class="another-card" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/maxx-supreme/macc-blog/src/components/Card.astro", void 0);

export { $$Card as $, colors as c };
