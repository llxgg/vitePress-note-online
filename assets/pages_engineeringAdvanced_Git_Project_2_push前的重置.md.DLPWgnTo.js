import{_ as s,c as i,o as a,aV as n}from"./chunks/framework.D-slqnxL.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/engineeringAdvanced/Git/Project/2_push前的重置.md","filePath":"pages/engineeringAdvanced/Git/Project/2_push前的重置.md","lastUpdated":1728400322000}'),e={name:"pages/engineeringAdvanced/Git/Project/2_push前的重置.md"},t=n(`<h2 id="将文件重置回最近的状态" tabindex="-1">将文件重置回最近的状态 <a class="header-anchor" href="#将文件重置回最近的状态" aria-label="Permalink to &quot;将文件重置回最近的状态&quot;">​</a></h2><h3 id="文件修改了-还没有执行-add" tabindex="-1">文件修改了，还没有执行 add <a class="header-anchor" href="#文件修改了-还没有执行-add" aria-label="Permalink to &quot;文件修改了，还没有执行 add&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">重置所有修改了的文件：git checkout .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">重置某一个文件：git checkout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fileName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // git checkout theme</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="已经add-但还没有commit" tabindex="-1">已经add 但还没有commit <a class="header-anchor" href="#已经add-但还没有commit" aria-label="Permalink to &quot;已经add 但还没有commit&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 取消add操作，把代码放回到工作区中： </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 注意：只是取消add操作，但是已修改的代码还是会保留的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">语法：git reset </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> （可以指定fileName，不指定的话，所有文件全部取消）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="已经-commit-但还没有-push" tabindex="-1">已经 commit 但还没有 push <a class="header-anchor" href="#已经-commit-但还没有-push" aria-label="Permalink to &quot;已经 commit 但还没有 push&quot;">​</a></h3><ul><li><code>--soft</code>：表示<strong>不删除工作区的代码</strong>，撤销<code>commit</code>，保留<code>git add .</code>操作</li><li><code>--mixed</code>：表示<strong>不删除工作区的代码</strong>，撤销<code>commit</code>，并且撤销<code>git add . </code>操作</li><li><code>--hard</code>：表示<strong>删除工作区的代码，改动的代码还原了</strong>，撤销<code>commit</code>，撤销<code>git add .</code>操作 <ul><li><code>--hard </code>是一个危险的操作，因为它会还原所有代码的改动。</li></ul></li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、撤销commit, 不撤销 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">soft </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// git status查看文件状态颜色为绿色，不是红色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	git reset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">soft </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HEAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、撤销commit, 撤销add, 但不撤销已修改的代码：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mixed </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// git status查看文件状态颜色为红色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	git reset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mixed </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HEAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、撤销commit, 撤销add,并撤销已修改的代码：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hard </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// git status查不到任何变更过的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	git reset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hard </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HEAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 后面可以跟具体文件名称，只撤销该文件；没有的话，默认撤销全部文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="已经push" tabindex="-1">已经push <a class="header-anchor" href="#已经push" aria-label="Permalink to &quot;已经push&quot;">​</a></h3><ul><li>只能走代码回滚操作了。</li></ul>`,10),l=[t];function p(h,d,r,k,c,o){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{E as __pageData,m as default};
