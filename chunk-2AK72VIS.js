import{a as s,b as B,c as F}from"./chunk-WL7NANCB.js";import"./chunk-CF5CYCWG.js";import"./chunk-OF5FRMXH.js";import{a as t}from"./chunk-NGOLEB3M.js";import"./chunk-EFT3UOO7.js";import"./chunk-YIFVF66K.js";import{a as l}from"./chunk-OAZG3KV2.js";import{aa as D}from"./chunk-TVJZK64K.js";import"./chunk-NULE3QRY.js";import{Fa as p,Va as r,W as c,rb as d,sb as k}from"./chunk-3LZAVVBI.js";import{a as i,b as o,h as y}from"./chunk-TWZW5B45.js";var h=y(D());var A=`<h2 id="sources" href="pipes/since/sources" headinglink="true" class="ngde">Sources<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sources"></ng-doc-heading-anchor></h2><ng-doc-tab group="comp" name="since.pipe.ts" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { PipeTransform } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { Pipe } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/type-aliases/api/nullish" class="ng-doc-code-anchor ngde">nullish</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'src/app/types/nullish.type'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/variables/api/timeFactors" class="ng-doc-code-anchor ngde">timeFactors</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../../constants/time.const'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/type-aliases/api/TimeUnit" class="ng-doc-code-anchor ngde">TimeUnit</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../../types/time-unit.type'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Convert a timestamp to a human-readable string representing the time since the timestamp.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Also works with future dates.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@param</span><span style="color:#24292E;--shiki-dark:#BFBDB6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> value</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> The date used to estimate time distance with today's date.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@returns</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> The human-readable string representing the time since the timestamp.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@see</span><span style="color:#6F42C1;--shiki-dark:#59C2FF;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> \`<a href="api/variables/api/timeFactors" class="ng-doc-code-anchor ngde">timeFactors</a>\`</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> for the conversion factors.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@author</span><span style="color:#6F42C1;--shiki-dark:#59C2FF;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> louiiuol</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Pipe</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'since'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/api/SincePipe" class="ng-doc-code-anchor ngde">SincePipe</a></span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> implements</span><span style="color:#6F42C1;--shiki-dark:#39BAE6" class="ngde"> PipeTransform</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  transform</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">value</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> number</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> |</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/type-aliases/api/nullish" class="ng-doc-code-anchor ngde">nullish</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">!</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">value) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">return</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'never'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> dateValue</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(value)</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">getTime</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">isNaN</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(dateValue)) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">return</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'never'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> secondsElapsed</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Math</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">floor</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">((Date</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">now</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">() </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> dateValue) </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">/</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1000</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (Math</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">abs</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(secondsElapsed) </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 30</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">return</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'Just now'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> isFuture</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> secondsElapsed </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 0</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> elapsedSeconds</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Math</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">abs</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(secondsElapsed)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    for</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> unit</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> of</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Object</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">keys</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(<a href="api/variables/api/timeFactors" class="ng-doc-code-anchor ngde">timeFactors</a>) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">as</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/type-aliases/api/TimeUnit" class="ng-doc-code-anchor ngde">TimeUnit</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">      const</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { </span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> } </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> <a href="api/variables/api/timeFactors" class="ng-doc-code-anchor ngde">timeFactors</a>[unit]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">      const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> count</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Math</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">floor</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(elapsedSeconds </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">/</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> seconds)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">      if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (count </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">>=</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">        const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> time</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">count</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde"> \${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">name</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">count</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> ></span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> ?</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 's'</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> :</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> ''</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">\`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">        return</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> !</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">isFuture </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">?</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`in </span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">time</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">\`</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> :</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">time</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> ago\`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    return</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'Just now'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre></ng-doc-tab><ng-doc-tab group="comp" name="time.const.ts" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/type-aliases/api/TimeUnit" class="ng-doc-code-anchor ngde">TimeUnit</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '../types/time-unit.type'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Factors for converting between time units.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="api/variables/api/timeFactors" class="ng-doc-code-anchor ngde">timeFactors</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Record</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">  <a href="api/type-aliases/api/TimeUnit" class="ng-doc-code-anchor ngde">TimeUnit</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  { </span><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">seconds</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> number</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  year</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 31_536_000</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'y'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'year'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> // Assuming 365-day year</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  month</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 2_592_000</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'mo'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'month'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> // Assuming 30-day month</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  week</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 604_800</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'w'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'week'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  day</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 86_400</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'd'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'day'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  hour</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 3600</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'h'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'hour'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  minute</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 60</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'min'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'minute'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  second</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'sec'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'second'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  millisecond</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { seconds</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 0.001</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> label</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'ms'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> name</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'millisecond'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></ng-doc-tab>`,e=class a extends l{pageType="guide";pageContent=A;page=s;demoAssets=F;constructor(){super()}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=c({type:a,selectors:[["ng-doc-page-n0lo9nue"]],standalone:!0,features:[d([{provide:l,useExisting:a},B,s.providers??[]]),p,k],decls:1,vars:0,template:function(n,C){n&1&&r(0,"ng-doc-page")},dependencies:[t],encapsulation:2,changeDetection:0})},E=[o(i({},(0,h.isRoute)(s.route)?s.route:{}),{path:"",component:e,title:"Sources"})],S=E;export{e as PageComponent,S as default};