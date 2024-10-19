import{a as l}from"./chunk-7RISZJZQ.js";import"./chunk-Z2FHHOXK.js";import"./chunk-IPDICHVY.js";import{a}from"./chunk-RKFO4VWC.js";import"./chunk-3UKWRJJD.js";import"./chunk-I2HX4KIN.js";import{Ba as i,Ra as t,U as d,nb as c,ob as o}from"./chunk-O3E5E7SX.js";import"./chunk-TWZW5B45.js";var r=`<p class="ngde">Simple notification service that allows to send notifications to the user. They are stored in local storage and available through signal. Checkout out Notification interface to see how to customize them.</p><h2 id="properties" href="api/classes/api/NotificationService" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="error" data-slugtype="member" id="error"><td indexable="false" class="ngde"><span class="ngde">error</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">(opt: <a href="api/type-aliases/api/NotifyOptions" class="ng-doc-code-anchor ngde">NotifyOptions</a>) => void</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send Error notification with given params to the user.</p></td></tr><tr class="ngde" data-slug="success" data-slugtype="member" id="success"><td indexable="false" class="ngde"><span class="ngde">success</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">(opt: <a href="api/type-aliases/api/NotifyOptions" class="ng-doc-code-anchor ngde">NotifyOptions</a>) => void</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send Success notification with given params to the user.</p></td></tr><tr class="ngde" data-slug="warn" data-slugtype="member" id="warn"><td indexable="false" class="ngde"><span class="ngde">warn</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">(opt: <a href="api/type-aliases/api/NotifyOptions" class="ng-doc-code-anchor ngde">NotifyOptions</a>) => void</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send Warning notification with given params to the user.</p></td></tr></tbody></table></div><h2 id="methods" href="api/classes/api/NotificationService" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="clearallnotifications" href="api/classes/api/NotificationService" headinglink="true" class="ngde">clearAllNotifications()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="clearallnotifications"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Clears local notifications list.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">clearAllNotifications</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getnotifications" href="api/classes/api/NotificationService" headinglink="true" class="ngde">getNotifications()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="getnotifications"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send all current notifications.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">getNotifications</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): WritableSignal</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"><a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a>[]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link">WritableSignal&#x3C;<a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a>[]></code> <span class="ngde">-</span><p class="ngde">all notifications as Signal.</p></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="notify" href="api/classes/api/NotificationService" headinglink="true" class="ngde">notify()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="notify"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send notification with given params to the user.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">notify</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({ summary</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> details</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> severity </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'info'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> life </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 4000</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> }: <a href="api/type-aliases/api/NotifyOptions" class="ng-doc-code-anchor ngde">NotifyOptions</a>): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">{ summary, details, severity = 'info', life = 4000 }<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/type-aliases/api/NotifyOptions" class="ng-doc-code-anchor ngde">NotifyOptions</a></code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="seennotification" href="api/classes/api/NotificationService" headinglink="true" class="ngde">seenNotification()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="seennotification"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Marks notification as seen.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">seenNotification</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(uuid: string): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">uuid<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div>`,n=class s extends a{pageType="api";pageContent=r;constructor(){super()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=d({type:s,selectors:[["ng-doc-page-iyviojpt"]],standalone:!0,features:[c([{provide:a,useExisting:s}]),i,o],decls:1,vars:0,template:function(e,h){e&1&&t(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})},p=[{path:"",component:n,title:"NotificationService"}],u=p;export{n as PageComponent,u as default};