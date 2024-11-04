import{a as z}from"./chunk-L2DCAVDR.js";import{a as b}from"./chunk-GM4LL73H.js";import{Da as E,Ha as C,La as p,Ma as u,Pa as F,Ta as l,Ua as o,Va as c,W as i,Za as f,ab as x,ba as h,bb as d,ca as m,ka as t,lb as A,sa as D,sb as k,ta as r}from"./chunk-3LZAVVBI.js";function I(a,e){if(a&1){let s=f();l(0,"img",2),x("load",function(){h(s);let y=d();return m(y.onLoad())})("error",function(){h(s);let y=d();return m(y.onError())}),o()}if(a&2){let s=d();p("src",s.src(),D)("alt",s.alt())}}function w(a,e){a&1&&c(0,"lib-icon",1)}var g=class a{src=t.required();alt=t("");ratio=t("16 / 9");loading=E(!0);hasError=E(!1);onLoad(){this.loading.set(!1),this.hasError.set(!1)}onError(){this.loading.set(!1),this.hasError.set(!0)}static \u0275fac=function(s){return new(s||a)};static \u0275cmp=i({type:a,selectors:[["lib-lazy-img"]],hostAttrs:[1,"inline-block","rounded-lg","relative"],hostVars:2,hostBindings:function(s,n){s&2&&u("aspect-ratio",n.ratio())},inputs:{src:[1,"src"],alt:[1,"alt"],ratio:[1,"ratio"]},standalone:!0,features:[k],decls:2,vars:2,consts:[[1,"w-full","h-auto","max-w-",3,"src","alt"],["name","image-placeholder",1,"!w-full","h-auto","fill-slate-400","bg-slate-200","px-6"],[1,"w-full","h-auto","max-w-",3,"load","error","src","alt"]],template:function(s,n){s&1&&C(0,I,1,2,"img",0)(1,w,1,0,"lib-icon",1),s&2&&(F(n.src()&&!n.hasError()?0:-1),r(),F(n.loading()||n.hasError()?1:-1))},dependencies:[z],encapsulation:2,changeDetection:0})};var B=class a{url="https://github.com/louiiuol/louiiuol/blob/prod/images/works/graphism/illustrator/heisenberg.jpg?raw=true";static \u0275fac=function(s){return new(s||a)};static \u0275cmp=i({type:a,selectors:[["lib-lazy-img-demo"]],standalone:!0,features:[k],decls:9,vars:1,consts:[[1,"ng-demo"],[1,"w-full","text-2xl","mb-3"],[1,"examples-container"],[1,"examples-list","w-80"],["alt","Heisenberg",3,"src"]],template:function(s,n){s&1&&(l(0,"div",0)(1,"section")(2,"h3",1),A(3,"Loading image"),o(),l(4,"div",2)(5,"h2"),A(6,"Default"),o(),l(7,"div",3),c(8,"lib-lazy-img",4),o()()()()),s&2&&(r(8),p("src",n.url))},dependencies:[g],encapsulation:2,changeDetection:0})};var v={title:"Lazy image",route:"lazy-img",mdFile:["./tabs/index.md","./tabs/sources.md","./tabs/requirements.md"],demos:{LazyImgDemoComponent:B},category:b},j=v;var G=[];var S={LazyImgDemoComponent:[{title:"TypeScript",code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/classes/api/LazyImgComponent" class="ng-doc-code-anchor ngde">LazyImgComponent</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../../lazy-img.component'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@internal</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'lib-lazy-img-demo'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  template</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"ng-demo"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"w-full text-2xl mb-3"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Loading image</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-container"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h2</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Default</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h2</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-list w-80"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">lib-lazy-img</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [src]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"url"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> alt</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Heisenberg"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"><a href="api/classes/api/LazyImgComponent" class="ng-doc-code-anchor ngde">LazyImgComponent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> LazyImgDemoComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  url</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    'https://github.com/louiiuol/louiiuol/blob/prod/images/works/graphism/illustrator/heisenberg.jpg?raw=true'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`}]},J=S;export{j as a,G as b,J as c};