import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_QQCANYh-.mjs';
import 'kleur/colors';
import { $ as $$Navbar, a as $$Footer, b as $$Layout, c as basics } from '../chunks/Footer_CSIsI2BH.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const { name } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${name} 404`, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-zetdm5md> <header data-astro-cid-zetdm5md> ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-zetdm5md": true })} </header> <main data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>404</span> </main> ${renderComponent($$result2, "Footer", $$Footer, { "backgroundColor": "transparent", "data-astro-cid-zetdm5md": true })} </div> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/pages/404.astro", void 0);

const $$file = "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
