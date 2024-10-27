import{a as r}from"./chunk-4USHH2GB.js";import"./chunk-2ZFB5XQQ.js";import"./chunk-UZJ76Y2H.js";import{a as e}from"./chunk-V536U723.js";import"./chunk-I6JK2FMR.js";import"./chunk-BADPLUKI.js";import{Ba as l,Ra as t,U as i,nb as o,ob as p}from"./chunk-6UTZZ65G.js";import"./chunk-TWZW5B45.js";var d=`<p class="ngde">Defines toast instance. It could be used to inform the user about the result of the action or to show some error messages.</p><h2 id="presentation" href="api/type-aliases/api/Toast" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">type</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/type-aliases/api/Toast" class="ng-doc-code-anchor ngde">Toast</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /** Unique identifier of the toast. */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  uuid</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   * <a href="api/type-aliases/api/Severity" class="ng-doc-code-anchor ngde">Severity</a> of the toast.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   * Must be one of these: 'info', 'note', 'warn', 'error' or 'success'.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  severity</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/type-aliases/api/Severity" class="ng-doc-code-anchor ngde">Severity</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /** Title of the toast. */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  summary</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /** Description of the toast. */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  details</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /** Should the user be able to close it manually. */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  closable</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /** Time in milliseconds the toast will be displayed. */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  life</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> number</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre>`,n=class s extends e{pageType="api";pageContent=d;constructor(){super()}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=i({type:s,selectors:[["ng-doc-page-uf4q76sq"]],standalone:!0,features:[o([{provide:e,useExisting:s}]),l,p],decls:1,vars:0,template:function(a,g){a&1&&t(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0})},k=[{path:"",component:n,title:"Toast"}],D=k;export{n as PageComponent,D as default};
