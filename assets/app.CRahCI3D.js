import{R as i}from"./chunks/theme.YwWjmmO3.js";import{U as o,aW as u,aX as l,aY as c,aZ as f,a_ as d,a$ as m,b0 as h,b1 as b,b2 as g,b3 as A,d as y,u as P,y as v,x as w,b4 as C,b5 as R,b6 as E,aE as S}from"./chunks/framework.D-slqnxL.js";function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(i),T=y({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),R(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=D(),t=x();t.provide(l,e);const a=c(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function x(){return b(T)}function D(){let e=o,t;return g(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{_ as createApp};
