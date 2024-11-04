import{a as d}from"./chunk-NGOLEB3M.js";import"./chunk-EFT3UOO7.js";import"./chunk-YIFVF66K.js";import{a as e}from"./chunk-OAZG3KV2.js";import"./chunk-TVJZK64K.js";import"./chunk-NULE3QRY.js";import{Fa as o,Va as l,W as i,rb as t,sb as c}from"./chunk-3LZAVVBI.js";import"./chunk-TWZW5B45.js";var p=`<p class="ngde">Formats initials from given user based on their information: If no fistName nor lastName was provided, method will returns email's first letter. Otherwise, will return the first letters of the firstName and lastName.</p><h2 id="presentation" href="api/functions/api/initials" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="api/functions/api/initials" class="ng-doc-code-anchor ngde">initials</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">user</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/type-aliases/api/UserType" class="ng-doc-code-anchor ngde">UserType</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> |</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> undefined</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><h2 id="returns" href="api/functions/api/initials" headinglink="true" class="ngde">Returns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="returns"></ng-doc-heading-anchor></h2><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">string</code> <span class="ngde">-</span><p class="ngde">Initials from given user</p></div><h2 id="parameters" href="api/functions/api/initials" headinglink="true" class="ngde">Parameters<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="parameters"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">user<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/type-aliases/api/UserType" class="ng-doc-code-anchor ngde">UserType</a> | undefined</code></td><td class="ngde"><p class="ngde">User information to get initials from</p></td></tr></tbody></table></div><section indexable="false" class="ngde"><h2 id="example-usage" href="api/functions/api/initials" headinglink="true" class="ngde">Example usage<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="example-usage"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> user</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { email</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'email@example.fr'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> firstName</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'John'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> lastName</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'Doe'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="api/functions/api/initials" class="ng-doc-code-anchor ngde">initials</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="api/functions/api/initials" class="ng-doc-code-anchor ngde">initials</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(user)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> // JD</span></span></code></pre></section>`,n=class s extends e{pageType="api";pageContent=p;constructor(){super()}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=i({type:s,selectors:[["ng-doc-page-ak8f0mm6"]],standalone:!0,features:[t([{provide:e,useExisting:s}]),o,c],decls:1,vars:0,template:function(a,h){a&1&&l(0,"ng-doc-page")},dependencies:[d],encapsulation:2,changeDetection:0})},g=[{path:"",component:n,title:"initials"}],u=g;export{n as PageComponent,u as default};