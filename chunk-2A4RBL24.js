import{a as s,b as B,c as h}from"./chunk-KC7BGKSG.js";import"./chunk-GM4LL73H.js";import{a as k}from"./chunk-NGOLEB3M.js";import"./chunk-EFT3UOO7.js";import"./chunk-YIFVF66K.js";import"./chunk-N2DOPE3H.js";import"./chunk-ICM3AELO.js";import{a as e}from"./chunk-OAZG3KV2.js";import{aa as D}from"./chunk-TVJZK64K.js";import"./chunk-NULE3QRY.js";import{Fa as c,Va as r,W as t,rb as p,sb as d}from"./chunk-3LZAVVBI.js";import{a as i,b as o,h as F}from"./chunk-TWZW5B45.js";var y=F(D());var f=`<h2 id="sources" href="components/icon-material/sources" headinglink="true" class="ngde">Sources<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sources"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" name="icon-material.component.ts"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> input } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Simple component to display an icon from material-symbols-outlined font.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Refer to the material-symbols-outlined font for the list of available icons.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * https://fonts.google.com/icons</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@see</span><span style="color:#6F42C1;--shiki-dark:#59C2FF;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> [Documentation</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> page](https://louiiuol.github.io/ngx-lib/#/components/icon-material) for more details.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@example</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * \`\`\`html</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * &#x3C;lib-icon-material name="favorite" /></span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * &#x3C;lib-icon-material name="favorite" size="3.5rem" /></span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@author</span><span style="color:#6F42C1;--shiki-dark:#59C2FF;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> louiiuol</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'lib-icon-material'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  host</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'material-symbols-outlined inline-block'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    '[style.width]'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'size()'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    '[style.height]'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'size()'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    '[style.fontSize]'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'size()'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  template</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`{{ name() }}\`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/api/IconMaterialComponent" class="ng-doc-code-anchor ngde">IconMaterialComponent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   * Name of the material icon (check google material icon website for the list of available icons)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  name</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> input</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">required</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  /**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   * Size of the icon (must include css unit)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">   */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  size</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> input</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">'1.5rem'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">Refer to the <a href="https://fonts.google.com/icons" class="ngde">material-symbols-outlined</a> font for the list of available icons.</p></ng-doc-blockquote>`,l=class a extends e{pageType="guide";pageContent=f;page=s;demoAssets=h;constructor(){super()}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=t({type:a,selectors:[["ng-doc-page-k0fvxppd"]],standalone:!0,features:[p([{provide:e,useExisting:a},B,s.providers??[]]),c,d],decls:1,vars:0,template:function(n,A){n&1&&r(0,"ng-doc-page")},dependencies:[k],encapsulation:2,changeDetection:0})},C=[o(i({},(0,y.isRoute)(s.route)?s.route:{}),{path:"",component:l,title:"Sources"})],z=C;export{l as PageComponent,z as default};