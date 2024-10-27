import{a as l}from"./chunk-4USHH2GB.js";import"./chunk-2ZFB5XQQ.js";import"./chunk-UZJ76Y2H.js";import{a}from"./chunk-V536U723.js";import"./chunk-I6JK2FMR.js";import"./chunk-BADPLUKI.js";import{Ba as i,Ra as c,U as d,nb as t,ob as o}from"./chunk-6UTZZ65G.js";import"./chunk-TWZW5B45.js";var r='<p class="ngde">Simple notification service that allows to send notifications to the user. They are stored in local storage and available through signal. Checkout out Notification interface to see how to customize them.</p><section indexable="false" class="ngde"><h2 id="see-also" href="api/classes/api/NotificationService" headinglink="true" class="ngde">See Also<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="see-also"></ng-doc-heading-anchor></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="api/classes/api/LocalStorageService" class="ng-doc-code-anchor ngde">LocalStorageService</a></code> to understand how notifications are stored.</p></li><li class="ngde"><p class="ngde"><code class="ngde">uuid</code> npm package to generate unique identifiers.</p></li></ul></section><h2 id="methods" href="api/classes/api/NotificationService" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="clearallnotifications" href="api/classes/api/NotificationService" headinglink="true" class="ngde">clearAllNotifications()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="clearallnotifications"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Clears local notifications list.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">clearAllNotifications</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getnotifications" href="api/classes/api/NotificationService" headinglink="true" class="ngde">getNotifications()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="getnotifications"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Send all current notifications.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">getNotifications</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): WritableSignal</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"><a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a>[]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde ng-doc-code-with-link">WritableSignal&#x3C;<a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a>[]></code> <span class="ngde">-</span><p class="ngde">all notifications as Signal.</p></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="notify" href="api/classes/api/NotificationService" headinglink="true" class="ngde">notify()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="notify"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Add given notification to the list of stored notifications. Can be accessed through <code class="ngde">getNotifications()</code>.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">notify</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({ summary</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> details }: Pick</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"><a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> "details"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> |</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> "summary"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">{ summary, details }<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">Pick&#x3C;<a href="api/type-aliases/api/Notification" class="ng-doc-code-anchor ngde">Notification</a>, "details" | "summary"></code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="removenotification" href="api/classes/api/NotificationService" headinglink="true" class="ngde">removeNotification()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="removenotification"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ng-doc-no-content ngde" indexable="false">No documentation has been provided.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">removeNotification</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(uuid: string): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">uuid<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="seennotification" href="api/classes/api/NotificationService" headinglink="true" class="ngde">seenNotification()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="seennotification"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Marks notification as seen.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">seenNotification</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(uuid: string): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">uuid<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><div class="ng-doc-returns ngde"><code indexable="false" class="ngde">void</code></div></td></tr></tbody></table></div>',n=class e extends a{pageType="api";pageContent=r;constructor(){super()}static \u0275fac=function(s){return new(s||e)};static \u0275cmp=d({type:e,selectors:[["ng-doc-page-svymd3wi"]],standalone:!0,features:[t([{provide:a,useExisting:e}]),i,o],decls:1,vars:0,template:function(s,p){s&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})},h=[{path:"",component:n,title:"NotificationService"}],u=h;export{n as PageComponent,u as default};
