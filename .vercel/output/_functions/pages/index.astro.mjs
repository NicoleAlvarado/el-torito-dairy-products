import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as createAstro, a as renderComponent, i as renderScript, h as defineStyleVars, b as addAttribute, f as renderSlot } from '../chunks/astro/server_QQCANYh-.mjs';
import 'kleur/colors';
import { c as basics, h as heroSection, d as $$CTA, e as aboutUsSection, p as productsSection, t as testimoniesSection, o as ourTeamSection, F as FAQsSection, f as $$PhoneIcon, g as contactUsSection, $ as $$Navbar, a as $$Footer, b as $$Layout } from '../chunks/Footer_CSIsI2BH.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_Dnegh8bN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$e = createAstro();
const $$HeaderCarouselControl = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$HeaderCarouselControl;
  const { number } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span data-astro-cid-uadnxpfp>${number}</span> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/HeaderCarouselControl.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { name, summary } = basics;
  const { mainImages } = heroSection;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-shwxrd6l> <div class="hero__content" data-astro-cid-shwxrd6l> <h1 data-astro-cid-shwxrd6l>${name}</h1> <p data-astro-cid-shwxrd6l>${summary}</p> ${renderComponent($$result, "CTA", $$CTA, { "href": "#products", "data-astro-cid-shwxrd6l": true }, { "default": ($$result2) => renderTemplate`Ver productos` })} </div> <div class="carousel__controls" id="carousel-controls" data-astro-cid-shwxrd6l> ${mainImages.map((_, index) => renderTemplate`${renderComponent($$result, "HeaderCarouselControl", $$HeaderCarouselControl, { "number": (index + 1).toString().padStart(2, "0"), "data-astro-cid-shwxrd6l": true })}`)} </div> </section>  ${renderScript($$result, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Hero.astro", void 0);

const $$Astro$d = createAstro();
const $$AwardCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AwardCard;
  const { index, title, value, totalAwards } = Astro2.props;
  const $$definedVars = defineStyleVars([{ index, totalAwards }]);
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-o2u43rm7${addAttribute($$definedVars, "style")}> <p data-astro-cid-o2u43rm7${addAttribute($$definedVars, "style")}>${title}</p> <div data-astro-cid-o2u43rm7${addAttribute($$definedVars, "style")}> <p data-astro-cid-o2u43rm7${addAttribute($$definedVars, "style")}>${value}</p> </div> </article> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/AwardCard.astro", void 0);

const $$Awards = createComponent(($$result, $$props, $$slots) => {
  const { awards } = heroSection;
  const totalAwards = awards.length;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-d62wjqyu> ${awards.map(({ title, value }, index) => renderTemplate`${renderComponent($$result, "AwardCard", $$AwardCard, { "index": index, "title": title, "value": value, "totalAwards": totalAwards, "data-astro-cid-d62wjqyu": true })}`)} </section> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Awards.astro", void 0);

const $$Astro$c = createAstro();
const $$AboutDetailCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AboutDetailCard;
  const { number, image, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-pzugydvc> <div data-astro-cid-pzugydvc> <div class="about__statistic-card" data-astro-cid-pzugydvc> <span data-astro-cid-pzugydvc>${number}</span> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": `Imagen de ${title}`, "width": 400, "height": 500, "data-astro-cid-pzugydvc": true })} </div> <div class="about__description-card" data-astro-cid-pzugydvc> <h3 data-astro-cid-pzugydvc>${title}</h3> <p data-astro-cid-pzugydvc>${content}</p> </div> </div> </article> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/AboutDetailCard.astro", void 0);

const $$Astro$b = createAstro();
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { id, flexDirection = "column", flexWrap = "nowrap", paddingInline = "1rem" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ flexDirection, flexWrap, paddingInline }]);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-xjpubisi${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/MainSection.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const { title, description, identities } = aboutUsSection;
  return renderTemplate`${renderComponent($$result, "MainSection", $$MainSection, { "id": "about-us", "data-astro-cid-iswbnlsh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-iswbnlsh> <h2 data-astro-cid-iswbnlsh>${title}</h2> <p data-astro-cid-iswbnlsh>${description}</p> </header> <main data-astro-cid-iswbnlsh> ${identities.map(({ title: title2, image, content }, index) => renderTemplate`${renderComponent($$result2, "AboutDetailCard", $$AboutDetailCard, { "number": (index + 1).toString().padStart(2, "0"), "image": image, "title": title2, "content": content, "data-astro-cid-iswbnlsh": true })}`)} </main> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/AboutUs.astro", void 0);

const $$Astro$a = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { name, image, description, gridArea } = Astro2.props;
  const $$definedVars = defineStyleVars([{ gridArea }]);
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-tjdfhdqb${addAttribute($$definedVars, "style")}> <div data-astro-cid-tjdfhdqb${addAttribute($$definedVars, "style")}> <h5 data-astro-cid-tjdfhdqb${addAttribute($$definedVars, "style")}>${name}</h5> <p data-astro-cid-tjdfhdqb${addAttribute($$definedVars, "style")}>${description}</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": `/src/assets/images/products/${image}.webp`, "alt": `Imagen del producto ${name}`, "width": 1, "height": 1, "data-astro-cid-tjdfhdqb": true })} </article> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/ProductCard.astro", void 0);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const { title, description, products } = productsSection;
  return renderTemplate`${renderComponent($$result, "MainSection", $$MainSection, { "id": "products", "data-astro-cid-asp2fhfg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-asp2fhfg> <h2 data-astro-cid-asp2fhfg>${title}</h2> <p data-astro-cid-asp2fhfg>${description}</p> </header> <main data-astro-cid-asp2fhfg> ${products.map(({ name, image, description: description2, gridArea }) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": name, "image": image, "description": description2, "gridArea": gridArea, "data-astro-cid-asp2fhfg": true })}`)} </main> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Products.astro", void 0);

const $$Astro$9 = createAstro();
const $$UserIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$UserIcon;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 48 48"><path fill="none"${addAttribute(color, "stroke")} stroke-linejoin="round" stroke-width="4" d="M5.004 42.231a.78.78 0 0 0 .791.769h36.407a.78.78 0 0 0 .792-.769v-.918c.018-.277.055-1.657-.855-3.184c-.574-.963-1.407-1.794-2.476-2.472c-1.293-.82-2.938-1.413-4.928-1.77a29 29 0 0 1-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.8.8 0 0 0-.066-.169c-.022-.11-.075-.528.027-1.647c.258-2.843 1.783-4.523 3.008-5.873c.386-.425.751-.828 1.032-1.222c1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 0 0-.087-.628c-.12-.37-.343-.6-.507-.77a3 3 0 0 1-.113-.12c-.012-.014-.044-.052-.015-.243a19 19 0 0 0 .203-1.857c.056-1.002.099-2.5-.16-3.959a6 6 0 0 0-.172-.825q-.408-1.507-1.32-2.57c-.105-.115-2.653-2.8-10.05-3.35c-1.023-.076-2.034-.035-3.03.016a4.4 4.4 0 0 0-.875.108c-.764.197-.968.681-1.021.952c-.089.45.067.798.17 1.03c.015.033.034.074.001.182c-.171.266-.442.506-.717.733c-.08.067-1.934 1.667-2.036 3.756c-.275 1.589-.255 4.064.07 5.775c.02.095.047.235.002.33c-.35.313-.746.668-.745 1.478c.004.082.117 2.016 1.33 3.717c.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872c.101 1.12.048 1.537.027 1.648a.8.8 0 0 0-.067.169c-.001.006-.23.599-2.85 1.27c-1.512.387-3 .585-3.045.59c-1.934.327-3.569.906-4.86 1.721c-1.065.673-1.9 1.507-2.48 2.477c-.928 1.55-.903 2.962-.89 3.22z"></path></svg>`;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/assets/icons/UserIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$TestimonyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TestimonyCard;
  const { id, name, time, testimony, gridArea, position } = Astro2.props;
  const $$definedVars = defineStyleVars([{ gridArea, position }]);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(id, "id")} data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}> <header data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}> <figure data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "UserIcon", $$UserIcon, { "width": 32, "height": 32, "color": "var(--neutral-50)", "data-astro-cid-air3qmoa": true })} </figure> <div data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}> <h6 data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}>${name}</h6> <p data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}>${time}</p> </div> </header> <main data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}> <p data-astro-cid-air3qmoa${addAttribute($$definedVars, "style")}>${testimony}</p> </main> </article> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/TestimonyCard.astro", void 0);

const $$Testimonies = createComponent(($$result, $$props, $$slots) => {
  const { title, description, testimonies } = testimoniesSection;
  const getTestimonyId = (index) => `testimony-${index}`;
  const $$definedVars = defineStyleVars([{ testimoniesLength: testimonies.length }]);
  return renderTemplate`<!-- TODO: HACER QUE TESTIMONIES CUANDO ES RESPONSIVE Y SE HACE CLICK EN EL CAROUSEL SE VEA CENTRADO VERTICALMENTE -->${renderComponent($$result, "MainSection", $$MainSection, { "id": "testimonies", "paddingInline": 0, "data-astro-cid-ask2aiy5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}> <h2 data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}>${title}</h2> <p data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}>${description}</p> </header> <main data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}> <div tabindex="0" data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}> ${testimonies.map(({ name, time, testimony, gridArea, position }, i) => renderTemplate`${renderComponent($$result2, "TestimonyCard", $$TestimonyCard, { "id": getTestimonyId(i), "name": name, "time": time, "testimony": testimony, "gridArea": gridArea, "position": position, "data-astro-cid-ask2aiy5": true })}`)} </div> <nav data-astro-cid-ask2aiy5${addAttribute($$definedVars, "style")}> ${testimonies.map((_, i) => renderTemplate`<a${addAttribute(`#${getTestimonyId(i)}`, "href")}${addAttribute(`${`--i: ${i + 1}`}; ${$$definedVars}`, "style")} data-astro-cid-ask2aiy5></a>`)} </nav> </main> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Testimonies.astro", void 0);

const $$Astro$7 = createAstro();
const $$OurTeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OurTeamCard;
  const { index, name, image, role, gridArea } = Astro2.props;
  const $$definedVars = defineStyleVars([{ index, gridArea }]);
  return renderTemplate`${maybeRenderHead()}<article class="article-container" data-astro-cid-3kdrl4fm${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": `/src/assets/images/team/${image}.webp`, "alt": `Foto de ${name}`, "width": 1, "height": 1, "data-astro-cid-3kdrl4fm": true })} <div data-astro-cid-3kdrl4fm${addAttribute($$definedVars, "style")}> <h6 data-astro-cid-3kdrl4fm${addAttribute($$definedVars, "style")}>${name}</h6> <p data-astro-cid-3kdrl4fm${addAttribute($$definedVars, "style")}>${role}</p> </div> </article> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/OurTeamCard.astro", void 0);

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  const { title, description, team } = ourTeamSection;
  return renderTemplate`${maybeRenderHead()}<section id="our-team" data-astro-cid-2bufyy7u> <header data-astro-cid-2bufyy7u> <h2 data-astro-cid-2bufyy7u>${title}</h2> <p data-astro-cid-2bufyy7u>${description}</p> <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero autem, illum explicabo dignissimos esse
            officiis quos ut nulla impedit dolorem molestias reiciendis nihil iure exercitationem, excepturi aliquid
            accusamus neque.
        </p> --> </header> ${team.map(({ name, image, role, gridArea }, index) => renderTemplate`${renderComponent($$result, "OurTeamCard", $$OurTeamCard, { "index": index, "name": name, "image": image, "role": role, "gridArea": gridArea, "data-astro-cid-2bufyy7u": true })}`)} </section> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/OurTeam.astro", void 0);

const $$Astro$6 = createAstro();
const $$FAQItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FAQItem;
  const { question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details name="FAQs" data-astro-cid-7h4h7iwu> <summary data-astro-cid-7h4h7iwu> <h6 data-astro-cid-7h4h7iwu>${question}</h6> <div data-astro-cid-7h4h7iwu></div> </summary> <div data-astro-cid-7h4h7iwu> <p data-astro-cid-7h4h7iwu>${answer}</p> </div> </details> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/FAQItem.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const { title, description, FAQs } = FAQsSection;
  return renderTemplate`${renderComponent($$result, "MainSection", $$MainSection, { "id": "FAQ", "data-astro-cid-wo444cgt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-wo444cgt> <h2 data-astro-cid-wo444cgt>${title}</h2> <p data-astro-cid-wo444cgt>${description}</p> </header> <main data-astro-cid-wo444cgt> ${FAQs.map(({ question, answer }) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": question, "answer": answer, "data-astro-cid-wo444cgt": true })}`)} </main> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/FAQ.astro", void 0);

const $$Astro$5 = createAstro();
const $$InputField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$InputField;
  const { name, label, inputType, fieldType, pattern, minLength, maxLength, error, flex } = Astro2.props;
  const $$definedVars = defineStyleVars([{ flex }]);
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-at2cjfen${addAttribute($$definedVars, "style")}> ${fieldType === "input" ? renderTemplate`<input${addAttribute(name, "name")}${addAttribute(inputType, "type")} placeholder=""${addAttribute(pattern, "pattern")}${addAttribute(minLength, "minlength")}${addAttribute(maxLength, "maxlength")} required data-astro-cid-at2cjfen${addAttribute($$definedVars, "style")}>` : renderTemplate`<textarea${addAttribute(name, "name")} placeholder=""${addAttribute(minLength, "minlength")}${addAttribute(maxLength, "maxlength")} required data-astro-cid-at2cjfen${addAttribute($$definedVars, "style")}></textarea>`} <label data-astro-cid-at2cjfen${addAttribute($$definedVars, "style")}>${label}</label> ${error && renderTemplate`<span data-astro-cid-at2cjfen${addAttribute($$definedVars, "style")}>${error}</span>`} <!-- <span>{error}</span> --> </div> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/InputField.astro", void 0);

const $$Astro$4 = createAstro();
const $$LocationIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LocationIcon;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><g fill="none"${addAttribute(color, "stroke")} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64"></path><path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path></g></svg>`;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/assets/icons/LocationIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$EmailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EmailIcon;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 32 32"><path${addAttribute(color, "fill")} d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"></path></svg>`;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/assets/icons/EmailIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactLink;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-ut3kf42a> ${renderSlot($$result, $$slots["default"])} <span data-astro-cid-ut3kf42a>${text}</span> </a> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/ContactLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { type, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(className, "class")} data-astro-cid-vnzlvqnm> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { email, phone, address } = basics;
  const { title, description, addressLink, addressMapLink, schedules } = contactUsSection;
  const contactFields = {
    name: {
      name: "Nombre",
      fieldType: "input",
      inputType: "text",
      minLength: 3,
      maxLength: 30,
      currentError: "Pedro dxfsdf "
    },
    lastName: {
      name: "Apellidos",
      fieldType: "input",
      inputType: "text",
      minLength: 3,
      maxLength: 50,
      currentError: ""
    },
    email: {
      name: "Correo",
      fieldType: "input",
      inputType: "email",
      minLength: 5,
      maxLength: 50,
      currentError: ""
    },
    subject: {
      name: "Asunto",
      fieldType: "input",
      inputType: "text",
      minLength: 5,
      maxLength: 50,
      currentError: ""
    },
    message: {
      name: "Mensaje",
      fieldType: "textarea",
      minLength: 10,
      maxLength: 500,
      currentError: "",
      flex: 1
    }
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const formData = Object.fromEntries(data.entries());
      const { name, lastName, email: email2, subject, message } = formData;
      console.log({ name, lastName, email: email2, subject, message });
      if (typeof name !== "string" || name.length < 100) {
        console.log("Hola 1");
        console.log("ContactField1", contactFields["name"].currentError);
        contactFields["name"].currentError = "Please enter a username. ";
        console.log("ContactField2", contactFields["name"].currentError);
      }
      const hasErrors = Object.values(contactFields).some(({ currentError }) => currentError);
      if (!hasErrors) {
        return Astro2.redirect("/login");
      }
      console.log("Hola 2");
    } catch (error) {
      console.log("Hola error");
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "MainSection", $$MainSection, { "id": "contact-us", "flexDirection": "row", "flexWrap": "wrap", "data-astro-cid-ptl3ltwj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="contact__info" data-astro-cid-ptl3ltwj> <header data-astro-cid-ptl3ltwj> <h2 data-astro-cid-ptl3ltwj>${title}</h2> <p data-astro-cid-ptl3ltwj>${description}</p> </header> <main data-astro-cid-ptl3ltwj> <div data-astro-cid-ptl3ltwj> <h6 data-astro-cid-ptl3ltwj>Información de contacto</h6> ${renderComponent($$result2, "ContactLink", $$ContactLink, { "link": addressLink, "text": address, "data-astro-cid-ptl3ltwj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LocationIcon", $$LocationIcon, { "width": 24, "height": 24, "color": "var(--neutral-900)", "data-astro-cid-ptl3ltwj": true })} ` })} ${renderComponent($$result2, "ContactLink", $$ContactLink, { "link": `tel:${phone.trim()}`, "text": phone, "data-astro-cid-ptl3ltwj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PhoneIcon", $$PhoneIcon, { "width": 24, "height": 24, "color": "var(--neutral-900)", "data-astro-cid-ptl3ltwj": true })} ` })} ${renderComponent($$result2, "ContactLink", $$ContactLink, { "link": `mailto:${email}`, "text": email, "data-astro-cid-ptl3ltwj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "EmailIcon", $$EmailIcon, { "width": 24, "height": 24, "color": "var(--neutral-900)", "data-astro-cid-ptl3ltwj": true })} ` })} </div> <div data-astro-cid-ptl3ltwj> <h6 data-astro-cid-ptl3ltwj>Horario</h6> ${schedules.map(({ day, hours }) => renderTemplate`<p data-astro-cid-ptl3ltwj> ${day}: ${hours} </p>`)} </div> </main> <iframe${addAttribute(addressMapLink, "src")} loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-ptl3ltwj></iframe> </article> <article class="contact__form" data-astro-cid-ptl3ltwj> <h5 data-astro-cid-ptl3ltwj>Ponte en contacto con nosotros</h5> <form id="prueba" method="POST" data-astro-cid-ptl3ltwj> ${Object.entries(contactFields).map(
    ([key, { name, fieldType, inputType, minLength, pattern, maxLength, currentError, flex }]) => renderTemplate`${renderComponent($$result2, "InputField", $$InputField, { "name": key, "label": name, "fieldType": fieldType, "inputType": inputType, "pattern": pattern, "minLength": minLength, "maxLength": maxLength, "error": currentError, "flex": flex, "data-astro-cid-ptl3ltwj": true })}`
  )} ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "className": "primary-btn", "data-astro-cid-ptl3ltwj": true }, { "default": ($$result3) => renderTemplate`Enviar` })} </form> <!-- {Object.values(contactFields).some(({ currentError }) => currentError) && <p>Error</p>} --> </article> ` })}  ${renderScript($$result, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/sections/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { name } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": name, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-j7pv25f6> <header data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Awards", $$Awards, { "data-astro-cid-j7pv25f6": true })} </header> <main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutUs", $$AboutUs, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Products", $$Products, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonies", $$Testimonies, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "OurTeam", $$OurTeam, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "backgroundColor": "var(--primary-700)", "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/pages/index.astro", void 0);

const $$file = "/home/jordy756/Documentos/Projects/el-torito-dairy-products/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
