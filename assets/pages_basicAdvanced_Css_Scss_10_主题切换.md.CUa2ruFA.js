import{_ as s,c as a,o as i,aV as n}from"./chunks/framework.D-slqnxL.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/basicAdvanced/Css/Scss/10_主题切换.md","filePath":"pages/basicAdvanced/Css/Scss/10_主题切换.md","lastUpdated":null}'),l={name:"pages/basicAdvanced/Css/Scss/10_主题切换.md"},p=n(`<h2 id="vue-scss-动态切换主题" tabindex="-1">Vue + Scss 动态切换主题 <a class="header-anchor" href="#vue-scss-动态切换主题" aria-label="Permalink to &quot;Vue + Scss 动态切换主题&quot;">​</a></h2><blockquote><p><a href="https://juejin.cn/post/6844904141983072264?searchId=202409270950445DEEFBD4C1D8DB7DFF5C" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904141983072264?searchId=202409270950445DEEFBD4C1D8DB7DFF5C</a></p></blockquote><h3 id="_1、安装和配置依赖" tabindex="-1">1、安装和配置依赖 <a class="header-anchor" href="#_1、安装和配置依赖" aria-label="Permalink to &quot;1、安装和配置依赖&quot;">​</a></h3><div class="language-less vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">node-sass</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> sass-loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 找到build中webpack.base.conf.js,在rules中添加scss规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    test: /\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.scss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$/,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loaders: [&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;, &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">css</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;, &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-配置不同的主题方案" tabindex="-1">2.<strong>配置不同的主题方案</strong> <a class="header-anchor" href="#_2-配置不同的主题方案" aria-label="Permalink to &quot;2.**配置不同的主题方案**&quot;">​</a></h3><ul><li><strong>新建一个Scss文件_themes.scss，里面可以配置不同的主题配色方案</strong></li></ul><div class="language-less vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//当HTML的data-theme为dark时，样式引用dark</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//data-theme为其他值时，就采用组件库的默认样式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这里我只定义了两套主题方案，想要再多只需在\`$themes\`里加就行了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//注意一点是，每套配色方案里的key可以自定义但必须一致，不然就会混乱</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$themes: (</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    light: (</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //字体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        font_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#414141</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        font_color2: white,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#fff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color2: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#f0f2f5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color3: red,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color4: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#2674e7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //边框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        border_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#3d414a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dark: (</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //字体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        font_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#a7a7a7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        font_color2: white,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#1b2531</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color2: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#283142</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color3: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#1e6ceb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        background_color4: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#323e4e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //边框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        border_color1: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#3d414a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="_3-操作主题-theme的变量" tabindex="-1">3.<strong>操作主题$theme的变量</strong> <a class="header-anchor" href="#_3-操作主题-theme的变量" aria-label="Permalink to &quot;3.**操作主题$theme的变量**&quot;">​</a></h3><ul><li><strong>定义另外一个sass文件_handle.scss来操作1中的$theme变量（当然两个文件可以合并，分开写是想把配置和操作解耦），上代码：</strong></li></ul><div class="language-less vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./_themes.scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 遍历主题map</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// themeify方法用于获取HTML的data-theme值。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mixin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themeify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">each</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">map</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $themes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //!global 把局部变量强升为全局变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme-map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme-map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> !global;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //判断html的data-theme的属性值  #{}是sass的插值表达式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //&amp; sass嵌套里的父容器标识   @content是混合器插槽，像vue的slot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#{$theme-name}&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个根据Key获取颜色的function</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">function</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($key) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map, $key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取背景颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mixin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> background_color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($color) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themeify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: themed($color)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取字体颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mixin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> font_color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($color) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themeify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: themed($color)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取边框颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mixin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> border_color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($color) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themeify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: themed($color)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,10),e=[p];function h(k,t,r,E,c,d){return i(),a("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
