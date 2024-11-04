import{a as i}from"./chunk-NGOLEB3M.js";import"./chunk-EFT3UOO7.js";import"./chunk-YIFVF66K.js";import{a as e}from"./chunk-OAZG3KV2.js";import"./chunk-TVJZK64K.js";import"./chunk-NULE3QRY.js";import{Fa as l,Va as t,W as d,rb as c,sb as o}from"./chunk-3LZAVVBI.js";import"./chunk-TWZW5B45.js";var r=`<p class="ngde">Simple component to render a card with title, optionally subtitle or footer. The footer can be passed as a template with the name <code class="ngde">cardFooter</code>. (See example)</p><h2 id="properties" href="api/classes/api/CardComponent" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="cardFooter" data-slugtype="member" id="cardFooter"><td indexable="false" class="ngde"><span class="ngde">cardFooter <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected, Readonly" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span> <span class="ng-doc-badge ngde" indexable="false" data-content="readonly">r</span></span></span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Signal&#x3C;TemplateRef&#x3C;unknown>></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="cardSubtitle" data-slugtype="member" id="cardSubtitle"><td indexable="false" class="ngde"><span class="ngde">cardSubtitle</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">InputSignal&#x3C;string | undefined></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="cardTitle" data-slugtype="member" id="cardTitle"><td indexable="false" class="ngde"><span class="ngde">cardTitle</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">InputSignal&#x3C;string></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="closable" data-slugtype="member" id="closable"><td indexable="false" class="ngde"><span class="ngde">closable</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">InputSignalWithTransform&#x3C;boolean, unknown></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="closed" data-slugtype="member" id="closed"><td indexable="false" class="ngde"><span class="ngde">closed</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">OutputEmitterRef&#x3C;unknown></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr></tbody></table></div><section indexable="false" class="ngde"><h2 id="example-usage" href="api/classes/api/CardComponent" headinglink="true" class="ngde">Example usage<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="example-usage"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde"><a href="api/classes/api/CardComponent" class="ng-doc-code-anchor ngde">lib-card</a></span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [cardTitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"title"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [cardSubtitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"subtitle"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">   veritatis modi eum corporis!</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">ng-template</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> #cardFooter</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">   &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Cancel</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">   &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Confirm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">ng-template</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde"><a href="api/classes/api/CardComponent" class="ng-doc-code-anchor ngde">lib-card</a></span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre></section>`,n=class s extends e{pageType="api";pageContent=r;constructor(){super()}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=d({type:s,selectors:[["ng-doc-page-7mplid3f"]],standalone:!0,features:[c([{provide:e,useExisting:s}]),l,o],decls:1,vars:0,template:function(a,k){a&1&&t(0,"ng-doc-page")},dependencies:[i],encapsulation:2,changeDetection:0})},g=[{path:"",component:n,title:"CardComponent"}],b=g;export{n as PageComponent,b as default};