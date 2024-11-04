import{Kb as k,Ta as e,U as d,Ua as n,W as B,Y as h,ab as E,dc as F,ka as o,la as g,lb as l,qa as y,sb as m}from"./chunk-3LZAVVBI.js";var A={title:"Directives"},D=A;var r=class t{libTooltip=o.required();tooltipClass=o();tooltipDisabled=o(!1);position=o("below");tooltipElement=document.createElement("div");elementRef=d(g);sanitizer=d(F);tooltipClasses="absolute bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 transition-opacity duration-200 pointer-events-none z-50 max-w-96 text-pretty";constructor(){this.createTooltipElement(),this.syncContent(),this.syncCustomClasses()}ngOnDestroy(){this.tooltipElement.parentNode&&this.tooltipElement.parentNode.removeChild(this.tooltipElement)}onMouseEnter(){this.tooltipDisabled()||(document.body.appendChild(this.tooltipElement),this.updateTooltipPosition(),this.tooltipElement.classList.remove("opacity-0"),this.tooltipElement.classList.add("opacity-100"))}onMouseLeave(){if(this.tooltipDisabled())return;this.tooltipElement.classList.remove("opacity-100"),this.tooltipElement.classList.add("opacity-0"),setTimeout(()=>{this.tooltipElement.parentNode&&this.tooltipElement.parentNode.removeChild(this.tooltipElement)},200)}createTooltipElement(){this.tooltipElement.classList.add(...this.tooltipClasses.split(" "))}syncContent(){k(()=>{this.tooltipElement.innerHTML=this.sanitizer.sanitize(y.HTML,this.libTooltip())??""})}syncCustomClasses(){k(()=>{this.tooltipElement.className="",this.tooltipElement.classList.add(...this.tooltipClasses.split(" "));let s=this.tooltipClass();s&&this.tooltipElement.classList.add(...s.split(" "))})}updateTooltipPosition(){let s=this.elementRef.nativeElement.getBoundingClientRect(),a=this.tooltipElement.getBoundingClientRect(),p={above:{top:s.top-a.height-8+window.scrollY,left:s.left+(s.width-a.width)/2+window.scrollX},below:{top:s.bottom+8+window.scrollY,left:s.left+(s.width-a.width)/2+window.scrollX},before:{top:s.top+(s.height-a.height)/2+window.scrollY,left:s.left-a.width-8+window.scrollX},after:{top:s.top+(s.height-a.height)/2+window.scrollY,left:s.right+8+window.scrollX}}[this.position()];this.tooltipElement.style.top=`${p.top}px`,this.tooltipElement.style.left=`${p.left}px`}static \u0275fac=function(a){return new(a||t)};static \u0275dir=h({type:t,selectors:[["","libTooltip",""]],hostBindings:function(a,i){a&1&&E("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()})},inputs:{libTooltip:[1,"libTooltip"],tooltipClass:[1,"tooltipClass"],tooltipDisabled:[1,"tooltipDisabled"],position:[1,"position"]},standalone:!0})};var c=class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=B({type:t,selectors:[["lib-tooltip-demo"]],standalone:!0,features:[m],decls:12,vars:0,consts:[[1,"ng-demo"],[1,"flex","gap-6"],["libTooltip","Hello, friend. <br/> Nice to meet you",1,"text-2xl","mb-3","bg-slate-400","text-center","text-slate-800","py-3","px-5","rounded-lg"],["libTooltip","Hello, friend. <br/> Nice to meet you","position","above",1,"text-2xl","mb-3","bg-slate-400","text-center","text-slate-800","py-3","px-5","rounded-lg"],["libTooltip","Hello, friend. <br/> Nice to meet you","position","before",1,"text-2xl","mb-3","bg-slate-400","text-center","text-slate-800","py-3","px-5","rounded-lg"],["libTooltip","Hello, friend. <br/> Nice to meet you","position","after",1,"text-2xl","mb-3","bg-slate-400","text-center","text-slate-800","py-3","px-5","rounded-lg"],["libTooltip","Hello, friend. <br/> Nice to meet you","tooltipClass","bg-pink-300 text-black","position","above",1,"text-2xl","mb-3","bg-slate-400","text-center","text-slate-800","py-3","px-5","rounded-lg"]],template:function(a,i){a&1&&(e(0,"div",0)(1,"section",1)(2,"h3",2),l(3," Below (Default) "),n(),e(4,"h3",3),l(5," Above "),n(),e(6,"h3",4),l(7," Before "),n(),e(8,"h3",5),l(9," After "),n(),e(10,"h3",6),l(11," CSS "),n()()())},dependencies:[r],encapsulation:2,changeDetection:0})};var f={title:"Tooltip",route:"tooltip",mdFile:["./tabs/index.md","./tabs/sources.md","./tabs/requirements.md"],demos:{TooltipDemoComponent:c},category:D},M=f;var O=[];var x={TooltipDemoComponent:[{title:"TypeScript",code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/classes/api/TooltipDirective" class="ng-doc-code-anchor ngde">TooltipDirective</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../../tooltip.directive'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@internal</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'lib-tooltip-demo'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  template</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"ng-demo"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"flex gap-6"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          libTooltip</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Hello, friend. &#x3C;br/> Nice to meet you"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">          Below (Default)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          libTooltip</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Hello, friend. &#x3C;br/> Nice to meet you"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          position</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"above"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">          Above</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          libTooltip</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Hello, friend. &#x3C;br/> Nice to meet you"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          position</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"before"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">          Before</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          libTooltip</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Hello, friend. &#x3C;br/> Nice to meet you"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          position</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"after"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">          After</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          libTooltip</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"Hello, friend. &#x3C;br/> Nice to meet you"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          tooltipClass</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"bg-pink-300 text-black"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          position</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"above"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">          CSS</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"><a href="api/classes/api/TooltipDirective" class="ng-doc-code-anchor ngde">TooltipDirective</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> TooltipDemoComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`}]},_=x;export{M as a,O as b,_ as c};