import{a as q}from"./chunk-GM4LL73H.js";import{a as C}from"./chunk-7DR6RBZI.js";import{a as j}from"./chunk-N2DOPE3H.js";import{Ab as I,Ha as r,Hb as O,Ib as R,La as p,Pa as y,Rb as M,Ta as l,Ua as n,Va as _,W as k,Ya as v,Za as E,ab as m,ba as B,bb as A,ca as g,cb as S,db as T,eb as w,gb as N,hb as P,ja as x,ka as h,lb as o,mb as V,nb as d,sb as F,ta as i,wa as b}from"./chunk-3LZAVVBI.js";var G=["cardFooter"],H=["*"];function U(a,t){if(a&1&&(l(0,"p",3),o(1),n()),a&2){let s=A();i(),V(s.cardSubtitle())}}function Y(a,t){if(a&1){let s=E();l(0,"button",7),m("click",function(){B(s);let c=A();return g(c.closed.emit(null))}),_(1,"lib-icon-material",8),n()}}function z(a,t){a&1&&v(0)}function J(a,t){if(a&1&&(l(0,"footer",6),r(1,z,1,0,"ng-container",9),n()),a&2){let s=A();i(),p("ngTemplateOutlet",s.cardFooter())}}var u=class a{cardTitle=h.required();cardSubtitle=h();closable=h(!1,{transform:O});closed=x();cardFooterTemplate;cardFooter=R(()=>this.cardFooterTemplate);static \u0275fac=function(s){return new(s||a)};static \u0275cmp=k({type:a,selectors:[["lib-card"]],contentQueries:function(s,e,c){if(s&1&&w(c,G,5,b),s&2){let f;N(f=P())&&(e.cardFooterTemplate=f.first)}},hostAttrs:[1,"flex","flex-col","gap-6","p-6","bg-white","rounded-2xl","shadow","w-fit","mx-auto","max-w-screen-xl"],inputs:{cardTitle:[1,"cardTitle"],cardSubtitle:[1,"cardSubtitle"],closable:[1,"closable"]},outputs:{closed:"closed"},standalone:!0,features:[F],ngContentSelectors:H,decls:9,vars:4,consts:[[1,"flex","items-start","justify-between","gap-4"],[1,"flex-1","flex","flex-col","items-start","justify-start","gap-2"],[1,"text-2xl","text-primary-900","font-semibold","leading-6"],[1,"text-slate","text-primary-200"],["lib-button","","rounded","","appearance","icon","color","primary"],[1,"relative","flex-1","h-fit","min-w-48","min-h-14","w-fit","max-w-screen-md"],[1,"flex","justify-evenly","items-center","mt-4"],["lib-button","","rounded","","appearance","icon","color","primary",3,"click"],["name","close"],[4,"ngTemplateOutlet"]],template:function(s,e){s&1&&(S(),l(0,"header",0)(1,"div",1)(2,"h2",2),o(3),n(),r(4,U,2,1,"p",3),n(),r(5,Y,2,0,"button",4),n(),l(6,"section",5),T(7),n(),r(8,J,2,1,"footer",6)),s&2&&(i(3),d(" ",e.cardTitle()," "),i(),y(e.cardSubtitle()?4:-1),i(),y(e.closable()?5:-1),i(3),y(e.cardFooter()?8:-1))},dependencies:[M,C,j],encapsulation:2,changeDetection:0})};function K(a,t){a&1&&(l(0,"button",7),o(1,"Cancel"),n(),l(2,"button",8),o(3,"Confirm"),n())}var D=class a{title="Hello friend.";subtitle="Nice to meet you.";description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis modi eum corporis, rem officia natus omnis ullam ut
                repudiandae, accusantium ipsum eveniet quibusdam obcaecati sint
                pariatur tempore amet. Voluptates!`;close(){alert("Closed")}static \u0275fac=function(s){return new(s||a)};static \u0275cmp=k({type:a,selectors:[["lib-card-demo"]],standalone:!0,features:[F],decls:19,vars:6,consts:[["cardFooter",""],[1,"ng-demo"],[1,"w-full","text-2xl","mb-3"],[1,"examples-container"],[1,"examples-list"],[3,"cardTitle","cardSubtitle"],["closable","",3,"closed","cardTitle","cardSubtitle"],["lib-button","","appearance","stroked"],["lib-button","","color","primary"]],template:function(s,e){if(s&1){let c=E();l(0,"div",1)(1,"section")(2,"h3",2),o(3,"Default card"),n(),l(4,"div",3)(5,"div",4)(6,"lib-card",5)(7,"p"),o(8),n()()()()(),l(9,"section")(10,"h3",2),o(11,"Card with close button & footer"),n(),l(12,"div",3)(13,"div",4)(14,"lib-card",6),m("closed",function(){return B(c),g(e.close())}),l(15,"p"),o(16),n(),r(17,K,4,0,"ng-template",null,0,I),n()()()()()}s&2&&(i(6),p("cardTitle",e.title)("cardSubtitle",e.subtitle),i(2),d(" ",e.description," "),i(6),p("cardTitle",e.title)("cardSubtitle",e.subtitle),i(2),d(" ",e.description," "))},dependencies:[u,C],encapsulation:2,changeDetection:0})};var W={title:"Card",route:"card",mdFile:["./tabs/index.md","./tabs/sources.md","./tabs/requirements.md"],demos:{CardDemoComponent:D},category:q},ds=W;var Bs=[];var X={CardDemoComponent:[{title:"TypeScript",code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/classes/api/ButtonComponent" class="ng-doc-code-anchor ngde">ButtonComponent</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'src/app/components/atoms/button/button.component'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/classes/api/CardComponent" class="ng-doc-code-anchor ngde">CardComponent</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../../card.component'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@internal</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'lib-card-demo'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  template</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"ng-demo"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"w-full text-2xl mb-3"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Default card</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-container"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-list"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">lib-card</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [cardTitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"title"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [cardSubtitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"subtitle"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">                {{ </span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">description</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">lib-card</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"w-full text-2xl mb-3"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Card with close button &#x26; footer</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">h3</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-container"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> class</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"examples-list"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">lib-card</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">              closable</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">              (closed)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"close()"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">              [cardTitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"title"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">              [cardSubtitle]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"subtitle"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            ></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">                {{ </span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">description</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">ng-template</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> #cardFooter</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">                &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> lib-button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> appearance</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"stroked"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Cancel</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">                &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> lib-button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> color</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"primary"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Confirm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">              &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">ng-template</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">            &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">lib-card</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">          &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">        &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">section</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"><a href="api/classes/api/CardComponent" class="ng-doc-code-anchor ngde">CardComponent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> <a href="api/classes/api/ButtonComponent" class="ng-doc-code-anchor ngde">ButtonComponent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> CardDemoComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  title</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'Hello friend.'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  subtitle</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'Nice to meet you.'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  description</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">                veritatis modi eum corporis, rem officia natus omnis ullam ut</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">                repudiandae, accusantium ipsum eveniet quibusdam obcaecati sint</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">                pariatur tempore amet. Voluptates!\`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  close</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">() {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    alert</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">'Closed'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`}]},hs=X;export{ds as a,Bs as b,hs as c};
