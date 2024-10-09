import{_ as s,c as i,o as a,aV as e}from"./chunks/framework.D-slqnxL.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/basicAdvanced/Css/Less/1_正文.md","filePath":"pages/basicAdvanced/Css/Less/1_正文.md","lastUpdated":1727689213000}'),n={name:"pages/basicAdvanced/Css/Less/1_正文.md"},l=e(`<blockquote><p><a href="https://juejin.cn/post/7417293219467149366#heading-1" target="_blank" rel="noreferrer">https://juejin.cn/post/7417293219467149366#heading-1</a></p><p><a href="https://juejin.cn/post/6844903520441729037" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903520441729037</a></p><p><a href="https://juejin.cn/post/7408168213362049075" target="_blank" rel="noreferrer">https://juejin.cn/post/7408168213362049075</a></p></blockquote><h2 id="_1-安装" tabindex="-1">1.安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1.安装&quot;">​</a></h2><ul><li>在页面中 引入 Less.js</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 方案一：直接在项目中引入cdn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src=&quot;//cdnjs</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.cloudflare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.com/ajax/libs/less.js/2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.2/less</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 方案二：将less</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.js包下载到本地再引入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">注意：</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签一定要在 Less</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 之前引入，并且 </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签的 rel 属性要设置为stylesheet/less。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rel=&quot;stylesheet/less&quot; href=&quot;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.less&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src=&quot;less</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>全局安装</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install -g less</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>webpack</code> 项目安装</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install less less</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loader </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>vite</code> 项目安装</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install less </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-注释" tabindex="-1">2.注释 <a class="header-anchor" href="#_2-注释" aria-label="Permalink to &quot;2.注释&quot;">​</a></h2><ul><li><code>/* */ </code> CSS原生注释，会被编译在 CSS 文件中。</li><li><code>/ / </code> Less提供的一种注释，不会被编译在 CSS 文件中。</li></ul>`,12),t=[l];function p(h,r,k,d,c,E){return a(),i("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
