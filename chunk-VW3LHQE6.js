import{a as s,b as B,c as h}from"./chunk-CIJ6VLNP.js";import"./chunk-GM4LL73H.js";import{a as t}from"./chunk-NGOLEB3M.js";import"./chunk-EFT3UOO7.js";import"./chunk-YIFVF66K.js";import{a as l}from"./chunk-OAZG3KV2.js";import{aa as D}from"./chunk-TVJZK64K.js";import"./chunk-NULE3QRY.js";import{Fa as c,Va as r,W as p,rb as d,sb as k}from"./chunk-3LZAVVBI.js";import{a as i,b as o,h as y}from"./chunk-TWZW5B45.js";var F=y(D());var E=`<h2 id="sources" href="components/colorPicker/sources" headinglink="true" class="ngde">Sources<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sources"></ng-doc-heading-anchor></h2><ng-doc-tab group="comp" name="color-picker.component.ts" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { OnDestroy } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  forwardRef</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  input</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ControlValueAccessor } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/forms'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  FormControl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  NG_VALUE_ACCESSOR</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ReactiveFormsModule</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/forms'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { Subscription } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'rxjs'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * Simple color picker component that implements ControlValueAccessor.</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> *</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@author</span><span style="color:#6F42C1;--shiki-dark:#59C2FF;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> louiiuol</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> * </span><span style="color:#D73A49;--shiki-dark:#FF8F40;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">@version</span><span style="color:#24292E;--shiki-dark:#BFBDB6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> 1.0.0</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> */</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'lib-color-picker'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  template</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    @if (label()) {</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      &#x3C;label</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">        for="hs-color-input"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">        class="block text-sm font-medium mb-2 dark:text-white"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      ></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">        Color picker</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      &#x3C;/label></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    }</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    &#x3C;input</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      type="color"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      class="p-1 h-10 w-14 block bg-none border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      id="hs-color-input"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      [formControl]="colorControl"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">      title="Choose your color"</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">    /></span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      provide</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#E6B673" class="ngde"> NG_VALUE_ACCESSOR</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      useExisting</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> forwardRef</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(() </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> <a href="api/classes/api/ColorPickerComponent" class="ng-doc-code-anchor ngde">ColorPickerComponent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      multi</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">ReactiveFormsModule</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/api/ColorPickerComponent" class="ng-doc-code-anchor ngde">ColorPickerComponent</a></span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> implements</span><span style="color:#6F42C1;--shiki-dark:#39BAE6" class="ngde"> ControlValueAccessor</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#39BAE6" class="ngde"> OnDestroy</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  label</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> input</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  colorControl</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> FormControl</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  subscriptions</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Subscription</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Subscription</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  onChange</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">value</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> () </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  onTouched</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> () </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> () </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  constructor</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">() {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">subscriptions</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">add</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">      this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">colorControl</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">valueChanges</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">subscribe</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">((</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">value</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">        this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">onChange</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(value)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      })</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    )</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  writeValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">value</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">colorControl</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">setValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(value</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { emitEvent</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> })</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  registerOnChange</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">fn</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">value</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">onChange </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> fn</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  registerOnTouched</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">fn</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> () </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">onTouched </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> fn</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  setDisabledState</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">isDisabled</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> boolean</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">    if</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (isDisabled) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">      this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">colorControl</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">disable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">else</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">      this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">colorControl</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">enable</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  ngOnDestroy</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">() {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">subscriptions</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">unsubscribe</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre></ng-doc-tab>`,e=class a extends l{pageType="guide";pageContent=E;page=s;demoAssets=h;constructor(){super()}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["ng-doc-page-ocd30fxe"]],standalone:!0,features:[d([{provide:l,useExisting:a},B,s.providers??[]]),c,k],decls:1,vars:0,template:function(n,A){n&1&&r(0,"ng-doc-page")},dependencies:[t],encapsulation:2,changeDetection:0})},C=[o(i({},(0,F.isRoute)(s.route)?s.route:{}),{path:"",component:e,title:"Sources"})],O=C;export{e as PageComponent,O as default};