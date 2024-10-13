import{A as b,a as N,c as vr,d as K,e as _r,f as P,g as s,h as I,i as z,j as _,k as wr,l as Er,m as l,n as C,o as y,p as V,q as x,r as T,s as B,t as A,u as k,v as F,w as br,x as L,y as D,z as Q}from"./chunk-KLEKA63L.js";import{Aa as Y,ga as mr,wa as G}from"./chunk-2YKPSI5H.js";function g(r,e,n,o){var t;do t=D(o);while(r.hasNode(t));return n.dummy=e,r.setNode(t,n),t}function yr(r){var e=new b().setGraph(r.graph());return s(r.nodes(),function(n){e.setNode(n,r.node(n))}),s(r.edges(),function(n){var o=e.edge(n.v,n.w)||{weight:0,minlen:1},t=r.edge(n);e.setEdge(n.v,n.w,{weight:o.weight+t.weight,minlen:Math.max(o.minlen,t.minlen)})}),e}function q(r){var e=new b({multigraph:r.isMultigraph()}).setGraph(r.graph());return s(r.nodes(),function(n){r.children(n).length||e.setNode(n,r.node(n))}),s(r.edges(),function(n){e.setEdge(n,r.edge(n))}),e}function Z(r,e){var n=r.x,o=r.y,t=e.x-n,i=e.y-o,a=r.width/2,f=r.height/2;if(!t&&!i)throw new Error("Not possible to find intersection inside of the rectangle");var u,d;return Math.abs(i)*a>Math.abs(t)*f?(i<0&&(f=-f),u=f*t/i,d=f):(t<0&&(a=-a),u=a,d=a*i/t),{x:n+u,y:o+d}}function R(r){var e=_(k(rr(r)+1),function(){return[]});return s(r.nodes(),function(n){var o=r.node(n),t=o.rank;y(t)||(e[t][o.order]=n)}),e}function xr(r){var e=T(_(r.nodes(),function(n){return r.node(n).rank}));s(r.nodes(),function(n){var o=r.node(n);l(o,"rank")&&(o.rank-=e)})}function kr(r){var e=T(_(r.nodes(),function(i){return r.node(i).rank})),n=[];s(r.nodes(),function(i){var a=r.node(i).rank-e;n[a]||(n[a]=[]),n[a].push(i)});var o=0,t=r.graph().nodeRankFactor;s(n,function(i,a){y(i)&&a%t!==0?--o:o&&s(i,function(f){r.node(f).rank+=o})})}function $(r,e,n,o){var t={width:0,height:0};return arguments.length>=4&&(t.rank=n,t.order=o),g(r,"border",t,e)}function rr(r){return x(_(r.nodes(),function(e){var n=r.node(e).rank;if(!y(n))return n}))}function gr(r,e){var n={lhs:[],rhs:[]};return s(r,function(o){e(o)?n.lhs.push(o):n.rhs.push(o)}),n}function Nr(r,e){var n=K();try{return e()}finally{console.log(r+" time: "+(K()-n)+"ms")}}function Ir(r,e){return e()}function Cr(r){function e(n){var o=r.children(n),t=r.node(n);if(o.length&&s(o,e),l(t,"minRank")){t.borderLeft=[],t.borderRight=[];for(var i=t.minRank,a=t.maxRank+1;i<a;++i)Lr(r,"borderLeft","_bl",n,t,i),Lr(r,"borderRight","_br",n,t,i)}}s(r.children(),e)}function Lr(r,e,n,o,t,i){var a={width:0,height:0,rank:i,borderType:e},f=t[e][i-1],u=g(r,"border",a,n);t[e][i]=u,r.setParent(u,o),f&&r.setEdge(f,u,{weight:1})}function Rr(r){var e=r.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&Mr(r)}function Sr(r){var e=r.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&le(r),(e==="lr"||e==="rl")&&(pe(r),Mr(r))}function Mr(r){s(r.nodes(),function(e){Tr(r.node(e))}),s(r.edges(),function(e){Tr(r.edge(e))})}function Tr(r){var e=r.width;r.width=r.height,r.height=e}function le(r){s(r.nodes(),function(e){er(r.node(e))}),s(r.edges(),function(e){var n=r.edge(e);s(n.points,er),l(n,"y")&&er(n)})}function er(r){r.y=-r.y}function pe(r){s(r.nodes(),function(e){nr(r.node(e))}),s(r.edges(),function(e){var n=r.edge(e);s(n.points,nr),l(n,"x")&&nr(n)})}function nr(r){var e=r.x;r.x=r.y,r.y=e}var X=class{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return Pr(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&Pr(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,o=n._prev;o!==n;)e.push(JSON.stringify(o,ve)),o=o._prev;return"["+e.join(", ")+"]"}};function Pr(r){r._prev._next=r._next,r._next._prev=r._prev,delete r._next,delete r._prev}function ve(r,e){if(r!=="_next"&&r!=="_prev")return e}var _e=G(1);function Fr(r,e){if(r.nodeCount()<=1)return[];var n=Ee(r,e||_e),o=we(n.graph,n.buckets,n.zeroIdx);return N(_(o,function(t){return r.outEdges(t.v,t.w)}))}function we(r,e,n){for(var o=[],t=e[e.length-1],i=e[0],a;r.nodeCount();){for(;a=i.dequeue();)or(r,e,n,a);for(;a=t.dequeue();)or(r,e,n,a);if(r.nodeCount()){for(var f=e.length-2;f>0;--f)if(a=e[f].dequeue(),a){o=o.concat(or(r,e,n,a,!0));break}}}return o}function or(r,e,n,o,t){var i=t?[]:void 0;return s(r.inEdges(o.v),function(a){var f=r.edge(a),u=r.node(a.v);t&&i.push({v:a.v,w:a.w}),u.out-=f,tr(e,n,u)}),s(r.outEdges(o.v),function(a){var f=r.edge(a),u=a.w,d=r.node(u);d.in-=f,tr(e,n,d)}),r.removeNode(o.v),i}function Ee(r,e){var n=new b,o=0,t=0;s(r.nodes(),function(f){n.setNode(f,{v:f,in:0,out:0})}),s(r.edges(),function(f){var u=n.edge(f.v,f.w)||0,d=e(f),c=u+d;n.setEdge(f.v,f.w,c),t=Math.max(t,n.node(f.v).out+=d),o=Math.max(o,n.node(f.w).in+=d)});var i=k(t+o+3).map(function(){return new X}),a=o+1;return s(n.nodes(),function(f){tr(i,a,n.node(f))}),{graph:n,buckets:i,zeroIdx:a}}function tr(r,e,n){n.out?n.in?r[n.out-n.in+e].enqueue(n):r[r.length-1].enqueue(n):r[0].enqueue(n)}function Or(r){var e=r.graph().acyclicer==="greedy"?Fr(r,n(r)):be(r);s(e,function(o){var t=r.edge(o);r.removeEdge(o),t.forwardName=o.name,t.reversed=!0,r.setEdge(o.w,o.v,t,D("rev"))});function n(o){return function(t){return o.edge(t).weight}}}function be(r){var e=[],n={},o={};function t(i){l(o,i)||(o[i]=!0,n[i]=!0,s(r.outEdges(i),function(a){l(n,a.w)?e.push(a):t(a.w)}),delete n[i])}return s(r.nodes(),t),e}function Gr(r){s(r.edges(),function(e){var n=r.edge(e);if(n.reversed){r.removeEdge(e);var o=n.forwardName;delete n.reversed,delete n.forwardName,r.setEdge(e.w,e.v,n,o)}})}function Br(r){r.graph().dummyChains=[],s(r.edges(),function(e){ye(r,e)})}function ye(r,e){var n=e.v,o=r.node(n).rank,t=e.w,i=r.node(t).rank,a=e.name,f=r.edge(e),u=f.labelRank;if(i!==o+1){r.removeEdge(e);var d,c,h;for(h=0,++o;o<i;++h,++o)f.points=[],c={width:0,height:0,edgeLabel:f,edgeObj:e,rank:o},d=g(r,"edge",c,"_d"),o===u&&(c.width=f.width,c.height=f.height,c.dummy="edge-label",c.labelpos=f.labelpos),r.setEdge(n,d,{weight:f.weight},a),h===0&&r.graph().dummyChains.push(d),n=d;r.setEdge(n,t,{weight:f.weight},a)}}function Ar(r){s(r.graph().dummyChains,function(e){var n=r.node(e),o=n.edgeLabel,t;for(r.setEdge(n.edgeObj,o);n.dummy;)t=r.successors(e)[0],r.removeNode(e),o.points.push({x:n.x,y:n.y}),n.dummy==="edge-label"&&(o.x=n.x,o.y=n.y,o.width=n.width,o.height=n.height),e=t,n=r.node(e)})}function U(r){var e={};function n(o){var t=r.node(o);if(l(e,o))return t.rank;e[o]=!0;var i=T(_(r.outEdges(o),function(a){return n(a.w)-r.edge(a).minlen}));return(i===Number.POSITIVE_INFINITY||i===void 0||i===null)&&(i=0),t.rank=i}s(r.sources(),n)}function O(r,e){return r.node(e.w).rank-r.node(e.v).rank-r.edge(e).minlen}function H(r){var e=new b({directed:!1}),n=r.nodes()[0],o=r.nodeCount();e.setNode(n,{});for(var t,i;xe(e,r)<o;)t=ke(e,r),i=e.hasNode(t.v)?O(r,t):-O(r,t),ge(e,r,i);return e}function xe(r,e){function n(o){s(e.nodeEdges(o),function(t){var i=t.v,a=o===i?t.w:i;!r.hasNode(a)&&!O(e,t)&&(r.setNode(a,{}),r.setEdge(o,a,{}),n(a))})}return s(r.nodes(),n),r.nodeCount()}function ke(r,e){return B(e.edges(),function(n){if(r.hasNode(n.v)!==r.hasNode(n.w))return O(e,n)})}function ge(r,e,n){s(r.nodes(),function(o){e.node(o).rank+=n})}var Wn=G(1);var Zn=G(1);ir.CycleException=W;function ir(r){var e={},n={},o=[];function t(i){if(l(n,i))throw new W;l(e,i)||(n[i]=!0,e[i]=!0,s(r.predecessors(i),t),delete n[i],o.push(i))}if(s(r.sinks(),t),br(e)!==r.nodeCount())throw new W;return o}function W(){}W.prototype=new Error;function J(r,e,n){mr(e)||(e=[e]);var o=(r.isDirected()?r.successors:r.neighbors).bind(r),t=[],i={};return s(e,function(a){if(!r.hasNode(a))throw new Error("Graph does not have node: "+a);jr(r,a,n==="post",i,o,t)}),t}function jr(r,e,n,o,t,i){l(o,e)||(o[e]=!0,n||i.push(e),s(t(e),function(a){jr(r,a,n,o,t,i)}),n&&i.push(e))}function ar(r,e){return J(r,e,"post")}function fr(r,e){return J(r,e,"pre")}M.initLowLimValues=ur;M.initCutValues=sr;M.calcCutValue=zr;M.leaveEdge=Wr;M.enterEdge=qr;M.exchangeEdges=Xr;function M(r){r=yr(r),U(r);var e=H(r);ur(e),sr(e,r);for(var n,o;n=Wr(e);)o=qr(e,r,n),Xr(e,r,n,o)}function sr(r,e){var n=ar(r,r.nodes());n=n.slice(0,n.length-1),s(n,function(o){Te(r,e,o)})}function Te(r,e,n){var o=r.node(n),t=o.parent;r.edge(n,t).cutvalue=zr(r,e,n)}function zr(r,e,n){var o=r.node(n),t=o.parent,i=!0,a=e.edge(n,t),f=0;return a||(i=!1,a=e.edge(t,n)),f=a.weight,s(e.nodeEdges(n),function(u){var d=u.v===n,c=d?u.w:u.v;if(c!==t){var h=d===i,p=e.edge(u).weight;if(f+=h?p:-p,Se(r,n,c)){var m=r.edge(n,c).cutvalue;f+=h?-m:m}}}),f}function ur(r,e){arguments.length<2&&(e=r.nodes()[0]),Ur(r,{},1,e)}function Ur(r,e,n,o,t){var i=n,a=r.node(o);return e[o]=!0,s(r.neighbors(o),function(f){l(e,f)||(n=Ur(r,e,n,f,o))}),a.low=i,a.lim=n++,t?a.parent=t:delete a.parent,n}function Wr(r){return z(r.edges(),function(e){return r.edge(e).cutvalue<0})}function qr(r,e,n){var o=n.v,t=n.w;e.hasEdge(o,t)||(o=n.w,t=n.v);var i=r.node(o),a=r.node(t),f=i,u=!1;i.lim>a.lim&&(f=a,u=!0);var d=I(e.edges(),function(c){return u===Yr(r,r.node(c.v),f)&&u!==Yr(r,r.node(c.w),f)});return B(d,function(c){return O(e,c)})}function Xr(r,e,n,o){var t=n.v,i=n.w;r.removeEdge(t,i),r.setEdge(o.v,o.w,{}),ur(r),sr(r,e),Re(r,e)}function Re(r,e){var n=z(r.nodes(),function(t){return!e.node(t).parent}),o=fr(r,n);o=o.slice(1),s(o,function(t){var i=r.node(t).parent,a=e.edge(t,i),f=!1;a||(a=e.edge(i,t),f=!0),e.node(t).rank=e.node(i).rank+(f?a.minlen:-a.minlen)})}function Se(r,e,n){return r.hasEdge(e,n)}function Yr(r,e,n){return n.low<=e.lim&&e.lim<=n.lim}function dr(r){switch(r.graph().ranker){case"network-simplex":Hr(r);break;case"tight-tree":Pe(r);break;case"longest-path":Me(r);break;default:Hr(r)}}var Me=U;function Pe(r){U(r),H(r)}function Hr(r){M(r)}function Jr(r){var e=g(r,"root",{},"_root"),n=Fe(r),o=x(C(n))-1,t=2*o+1;r.graph().nestingRoot=e,s(r.edges(),function(a){r.edge(a).minlen*=t});var i=Oe(r)+1;s(r.children(),function(a){Kr(r,e,t,i,o,n,a)}),r.graph().nodeRankFactor=t}function Kr(r,e,n,o,t,i,a){var f=r.children(a);if(!f.length){a!==e&&r.setEdge(e,a,{weight:0,minlen:n});return}var u=$(r,"_bt"),d=$(r,"_bb"),c=r.node(a);r.setParent(u,a),c.borderTop=u,r.setParent(d,a),c.borderBottom=d,s(f,function(h){Kr(r,e,n,o,t,i,h);var p=r.node(h),m=p.borderTop?p.borderTop:h,v=p.borderBottom?p.borderBottom:h,E=p.borderTop?o:2*o,j=m!==v?1:t-i[a]+1;r.setEdge(u,m,{weight:E,minlen:j,nestingEdge:!0}),r.setEdge(v,d,{weight:E,minlen:j,nestingEdge:!0})}),r.parent(a)||r.setEdge(e,u,{weight:0,minlen:t+i[a]})}function Fe(r){var e={};function n(o,t){var i=r.children(o);i&&i.length&&s(i,function(a){n(a,t+1)}),e[o]=t}return s(r.children(),function(o){n(o,1)}),e}function Oe(r){return F(r.edges(),function(e,n){return e+r.edge(n).weight},0)}function Qr(r){var e=r.graph();r.removeNode(e.nestingRoot),delete e.nestingRoot,s(r.edges(),function(n){var o=r.edge(n);o.nestingEdge&&r.removeEdge(n)})}function Zr(r,e,n){var o={},t;s(n,function(i){for(var a=r.parent(i),f,u;a;){if(f=r.parent(a),f?(u=o[f],o[f]=a):(u=t,t=a),u&&u!==a){e.setEdge(u,a);return}a=f}})}function $r(r,e,n){var o=Ve(r),t=new b({compound:!0}).setGraph({root:o}).setDefaultNodeLabel(function(i){return r.node(i)});return s(r.nodes(),function(i){var a=r.node(i),f=r.parent(i);(a.rank===e||a.minRank<=e&&e<=a.maxRank)&&(t.setNode(i),t.setParent(i,f||o),s(r[n](i),function(u){var d=u.v===i?u.w:u.v,c=t.edge(d,i),h=y(c)?0:c.weight;t.setEdge(d,i,{weight:r.edge(u).weight+h})}),l(a,"minRank")&&t.setNode(i,{borderLeft:a.borderLeft[e],borderRight:a.borderRight[e]}))}),t}function Ve(r){for(var e;r.hasNode(e=D("_root")););return e}function re(r,e){for(var n=0,o=1;o<e.length;++o)n+=Be(r,e[o-1],e[o]);return n}function Be(r,e,n){for(var o=Q(n,_(n,function(d,c){return c})),t=N(_(e,function(d){return L(_(r.outEdges(d),function(c){return{pos:o[c.w],weight:r.edge(c).weight}}),"pos")})),i=1;i<n.length;)i<<=1;var a=2*i-1;i-=1;var f=_(new Array(a),function(){return 0}),u=0;return s(t.forEach(function(d){var c=d.pos+i;f[c]+=d.weight;for(var h=0;c>0;)c%2&&(h+=f[c+1]),c=c-1>>1,f[c]+=d.weight;u+=d.weight*h})),u}function ee(r){var e={},n=I(r.nodes(),function(f){return!r.children(f).length}),o=x(_(n,function(f){return r.node(f).rank})),t=_(k(o+1),function(){return[]});function i(f){if(!l(e,f)){e[f]=!0;var u=r.node(f);t[u.rank].push(f),s(r.successors(f),i)}}var a=L(n,function(f){return r.node(f).rank});return s(a,i),t}function ne(r,e){return _(e,function(n){var o=r.inEdges(n);if(o.length){var t=F(o,function(i,a){var f=r.edge(a),u=r.node(a.v);return{sum:i.sum+f.weight*u.order,weight:i.weight+f.weight}},{sum:0,weight:0});return{v:n,barycenter:t.sum/t.weight,weight:t.weight}}else return{v:n}})}function oe(r,e){var n={};s(r,function(t,i){var a=n[t.v]={indegree:0,in:[],out:[],vs:[t.v],i};y(t.barycenter)||(a.barycenter=t.barycenter,a.weight=t.weight)}),s(e.edges(),function(t){var i=n[t.v],a=n[t.w];!y(i)&&!y(a)&&(a.indegree++,i.out.push(n[t.w]))});var o=I(n,function(t){return!t.indegree});return Ae(o)}function Ae(r){var e=[];function n(i){return function(a){a.merged||(y(a.barycenter)||y(i.barycenter)||a.barycenter>=i.barycenter)&&De(i,a)}}function o(i){return function(a){a.in.push(i),--a.indegree===0&&r.push(a)}}for(;r.length;){var t=r.pop();e.push(t),s(t.in.reverse(),n(t)),s(t.out,o(t))}return _(I(e,function(i){return!i.merged}),function(i){return A(i,["vs","i","barycenter","weight"])})}function De(r,e){var n=0,o=0;r.weight&&(n+=r.barycenter*r.weight,o+=r.weight),e.weight&&(n+=e.barycenter*e.weight,o+=e.weight),r.vs=e.vs.concat(r.vs),r.barycenter=n/o,r.weight=o,r.i=Math.min(e.i,r.i),e.merged=!0}function ie(r,e){var n=gr(r,function(c){return l(c,"barycenter")}),o=n.lhs,t=L(n.rhs,function(c){return-c.i}),i=[],a=0,f=0,u=0;o.sort(je(!!e)),u=te(i,t,u),s(o,function(c){u+=c.vs.length,i.push(c.vs),a+=c.barycenter*c.weight,f+=c.weight,u=te(i,t,u)});var d={vs:N(i)};return f&&(d.barycenter=a/f,d.weight=f),d}function te(r,e,n){for(var o;e.length&&(o=P(e)).i<=n;)e.pop(),r.push(o.vs),n++;return n}function je(r){return function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:r?n.i-e.i:e.i-n.i}}function cr(r,e,n,o){var t=r.children(e),i=r.node(e),a=i?i.borderLeft:void 0,f=i?i.borderRight:void 0,u={};a&&(t=I(t,function(v){return v!==a&&v!==f}));var d=ne(r,t);s(d,function(v){if(r.children(v.v).length){var E=cr(r,v.v,n,o);u[v.v]=E,l(E,"barycenter")&&ze(v,E)}});var c=oe(d,n);Ye(c,u);var h=ie(c,o);if(a&&(h.vs=N([a,h.vs,f]),r.predecessors(a).length)){var p=r.node(r.predecessors(a)[0]),m=r.node(r.predecessors(f)[0]);l(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+p.order+m.order)/(h.weight+2),h.weight+=2}return h}function Ye(r,e){s(r,function(n){n.vs=N(n.vs.map(function(o){return e[o]?e[o].vs:o}))})}function ze(r,e){y(r.barycenter)?(r.barycenter=e.barycenter,r.weight=e.weight):(r.barycenter=(r.barycenter*r.weight+e.barycenter*e.weight)/(r.weight+e.weight),r.weight+=e.weight)}function se(r){var e=rr(r),n=ae(r,k(1,e+1),"inEdges"),o=ae(r,k(e-1,-1,-1),"outEdges"),t=ee(r);fe(r,t);for(var i=Number.POSITIVE_INFINITY,a,f=0,u=0;u<4;++f,++u){Ue(f%2?n:o,f%4>=2),t=R(r);var d=re(r,t);d<i&&(u=0,a=vr(t),i=d)}fe(r,a)}function ae(r,e,n){return _(e,function(o){return $r(r,o,n)})}function Ue(r,e){var n=new b;s(r,function(o){var t=o.graph().root,i=cr(o,t,n,e);s(i.vs,function(a,f){o.node(a).order=f}),Zr(o,n,i.vs)})}function fe(r,e){s(e,function(n){s(n,function(o,t){r.node(o).order=t})})}function ue(r){var e=qe(r);s(r.graph().dummyChains,function(n){for(var o=r.node(n),t=o.edgeObj,i=We(r,e,t.v,t.w),a=i.path,f=i.lca,u=0,d=a[u],c=!0;n!==t.w;){if(o=r.node(n),c){for(;(d=a[u])!==f&&r.node(d).maxRank<o.rank;)u++;d===f&&(c=!1)}if(!c){for(;u<a.length-1&&r.node(d=a[u+1]).minRank<=o.rank;)u++;d=a[u]}r.setParent(n,d),n=r.successors(n)[0]}})}function We(r,e,n,o){var t=[],i=[],a=Math.min(e[n].low,e[o].low),f=Math.max(e[n].lim,e[o].lim),u,d;u=n;do u=r.parent(u),t.push(u);while(u&&(e[u].low>a||f>e[u].lim));for(d=u,u=o;(u=r.parent(u))!==d;)i.push(u);return{path:t.concat(i.reverse()),lca:d}}function qe(r){var e={},n=0;function o(t){var i=n;s(r.children(t),o),e[t]={low:i,lim:n++}}return s(r.children(),o),e}function Xe(r,e){var n={};function o(t,i){var a=0,f=0,u=t.length,d=P(i);return s(i,function(c,h){var p=Je(r,c),m=p?r.node(p).order:u;(p||c===d)&&(s(i.slice(f,h+1),function(v){s(r.predecessors(v),function(E){var j=r.node(E),pr=j.order;(pr<a||m<pr)&&!(j.dummy&&r.node(v).dummy)&&de(n,E,v)})}),f=h+1,a=m)}),i}return F(e,o),n}function He(r,e){var n={};function o(i,a,f,u,d){var c;s(k(a,f),function(h){c=i[h],r.node(c).dummy&&s(r.predecessors(c),function(p){var m=r.node(p);m.dummy&&(m.order<u||m.order>d)&&de(n,p,c)})})}function t(i,a){var f=-1,u,d=0;return s(a,function(c,h){if(r.node(c).dummy==="border"){var p=r.predecessors(c);p.length&&(u=r.node(p[0]).order,o(a,d,h,f,u),d=h,f=u)}o(a,d,a.length,u,i.length)}),a}return F(e,t),n}function Je(r,e){if(r.node(e).dummy)return z(r.predecessors(e),function(n){return r.node(n).dummy})}function de(r,e,n){if(e>n){var o=e;e=n,n=o}var t=r[e];t||(r[e]=t={}),t[n]=!0}function Ke(r,e,n){if(e>n){var o=e;e=n,n=o}return l(r[e],n)}function Qe(r,e,n,o){var t={},i={},a={};return s(e,function(f){s(f,function(u,d){t[u]=u,i[u]=u,a[u]=d})}),s(e,function(f){var u=-1;s(f,function(d){var c=o(d);if(c.length){c=L(c,function(E){return a[E]});for(var h=(c.length-1)/2,p=Math.floor(h),m=Math.ceil(h);p<=m;++p){var v=c[p];i[d]===d&&u<a[v]&&!Ke(n,d,v)&&(i[v]=d,i[d]=t[d]=t[v],u=a[v])}}})}),{root:t,align:i}}function Ze(r,e,n,o,t){var i={},a=$e(r,e,n,t),f=t?"borderLeft":"borderRight";function u(h,p){for(var m=a.nodes(),v=m.pop(),E={};v;)E[v]?h(v):(E[v]=!0,m.push(v),m=m.concat(p(v))),v=m.pop()}function d(h){i[h]=a.inEdges(h).reduce(function(p,m){return Math.max(p,i[m.v]+a.edge(m))},0)}function c(h){var p=a.outEdges(h).reduce(function(v,E){return Math.min(v,i[E.w]-a.edge(E))},Number.POSITIVE_INFINITY),m=r.node(h);p!==Number.POSITIVE_INFINITY&&m.borderType!==f&&(i[h]=Math.max(i[h],p))}return u(d,a.predecessors.bind(a)),u(c,a.successors.bind(a)),s(o,function(h){i[h]=i[n[h]]}),i}function $e(r,e,n,o){var t=new b,i=r.graph(),a=on(i.nodesep,i.edgesep,o);return s(e,function(f){var u;s(f,function(d){var c=n[d];if(t.setNode(c),u){var h=n[u],p=t.edge(h,c);t.setEdge(h,c,Math.max(a(r,d,u),p||0))}u=d})}),t}function rn(r,e){return B(C(e),function(n){var o=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return wr(n,function(i,a){var f=tn(r,a)/2;o=Math.max(i+f,o),t=Math.min(i-f,t)}),o-t})}function en(r,e){var n=C(e),o=T(n),t=x(n);s(["u","d"],function(i){s(["l","r"],function(a){var f=i+a,u=r[f],d;if(u!==e){var c=C(u);d=a==="l"?o-T(c):t-x(c),d&&(r[f]=V(u,function(h){return h+d}))}})})}function nn(r,e){return V(r.ul,function(n,o){if(e)return r[e.toLowerCase()][o];var t=L(_(r,o));return(t[1]+t[2])/2})}function ce(r){var e=R(r),n=Y(Xe(r,e),He(r,e)),o={},t;s(["u","d"],function(a){t=a==="u"?e:C(e).reverse(),s(["l","r"],function(f){f==="r"&&(t=_(t,function(h){return C(h).reverse()}));var u=(a==="u"?r.predecessors:r.successors).bind(r),d=Qe(r,t,n,u),c=Ze(r,t,d.root,d.align,f==="r");f==="r"&&(c=V(c,function(h){return-h})),o[a+f]=c})});var i=rn(r,o);return en(o,i),nn(o,r.graph().align)}function on(r,e,n){return function(o,t,i){var a=o.node(t),f=o.node(i),u=0,d;if(u+=a.width/2,l(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":d=-a.width/2;break;case"r":d=a.width/2;break}if(d&&(u+=n?d:-d),d=0,u+=(a.dummy?e:r)/2,u+=(f.dummy?e:r)/2,u+=f.width/2,l(f,"labelpos"))switch(f.labelpos.toLowerCase()){case"l":d=f.width/2;break;case"r":d=-f.width/2;break}return d&&(u+=n?d:-d),d=0,u}}function tn(r,e){return r.node(e).width}function he(r){r=q(r),an(r),Er(ce(r),function(e,n){r.node(n).x=e})}function an(r){var e=R(r),n=r.graph().ranksep,o=0;s(e,function(t){var i=x(_(t,function(a){return r.node(a).height}));s(t,function(a){r.node(a).y=o+i/2}),o+=i+n})}function fn(r,e){var n=e&&e.debugTiming?Nr:Ir;n("layout",function(){var o=n("  buildLayoutGraph",function(){return wn(r)});n("  runLayout",function(){sn(o,n)}),n("  updateInputGraph",function(){un(r,o)})})}function sn(r,e){e("    makeSpaceForEdgeLabels",function(){En(r)}),e("    removeSelfEdges",function(){Cn(r)}),e("    acyclic",function(){Or(r)}),e("    nestingGraph.run",function(){Jr(r)}),e("    rank",function(){dr(q(r))}),e("    injectEdgeLabelProxies",function(){bn(r)}),e("    removeEmptyRanks",function(){kr(r)}),e("    nestingGraph.cleanup",function(){Qr(r)}),e("    normalizeRanks",function(){xr(r)}),e("    assignRankMinMax",function(){yn(r)}),e("    removeEdgeLabelProxies",function(){xn(r)}),e("    normalize.run",function(){Br(r)}),e("    parentDummyChains",function(){ue(r)}),e("    addBorderSegments",function(){Cr(r)}),e("    order",function(){se(r)}),e("    insertSelfEdges",function(){Tn(r)}),e("    adjustCoordinateSystem",function(){Rr(r)}),e("    position",function(){he(r)}),e("    positionSelfEdges",function(){Rn(r)}),e("    removeBorderNodes",function(){Ln(r)}),e("    normalize.undo",function(){Ar(r)}),e("    fixupEdgeLabelCoords",function(){Nn(r)}),e("    undoCoordinateSystem",function(){Sr(r)}),e("    translateGraph",function(){kn(r)}),e("    assignNodeIntersects",function(){gn(r)}),e("    reversePoints",function(){In(r)}),e("    acyclic.undo",function(){Gr(r)})}function un(r,e){s(r.nodes(),function(n){var o=r.node(n),t=e.node(n);o&&(o.x=t.x,o.y=t.y,e.children(n).length&&(o.width=t.width,o.height=t.height))}),s(r.edges(),function(n){var o=r.edge(n),t=e.edge(n);o.points=t.points,l(t,"x")&&(o.x=t.x,o.y=t.y)}),r.graph().width=e.graph().width,r.graph().height=e.graph().height}var dn=["nodesep","edgesep","ranksep","marginx","marginy"],cn={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},hn=["acyclicer","ranker","rankdir","align"],ln=["width","height"],pn={width:0,height:0},mn=["minlen","weight","width","height","labeloffset"],vn={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},_n=["labelpos"];function wn(r){var e=new b({multigraph:!0,compound:!0}),n=lr(r.graph());return e.setGraph(Y({},cn,hr(n,dn),A(n,hn))),s(r.nodes(),function(o){var t=lr(r.node(o));e.setNode(o,_r(hr(t,ln),pn)),e.setParent(o,r.parent(o))}),s(r.edges(),function(o){var t=lr(r.edge(o));e.setEdge(o,Y({},vn,hr(t,mn),A(t,_n)))}),e}function En(r){var e=r.graph();e.ranksep/=2,s(r.edges(),function(n){var o=r.edge(n);o.minlen*=2,o.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?o.width+=o.labeloffset:o.height+=o.labeloffset)})}function bn(r){s(r.edges(),function(e){var n=r.edge(e);if(n.width&&n.height){var o=r.node(e.v),t=r.node(e.w),i={rank:(t.rank-o.rank)/2+o.rank,e};g(r,"edge-proxy",i,"_ep")}})}function yn(r){var e=0;s(r.nodes(),function(n){var o=r.node(n);o.borderTop&&(o.minRank=r.node(o.borderTop).rank,o.maxRank=r.node(o.borderBottom).rank,e=x(e,o.maxRank))}),r.graph().maxRank=e}function xn(r){s(r.nodes(),function(e){var n=r.node(e);n.dummy==="edge-proxy"&&(r.edge(n.e).labelRank=n.rank,r.removeNode(e))})}function kn(r){var e=Number.POSITIVE_INFINITY,n=0,o=Number.POSITIVE_INFINITY,t=0,i=r.graph(),a=i.marginx||0,f=i.marginy||0;function u(d){var c=d.x,h=d.y,p=d.width,m=d.height;e=Math.min(e,c-p/2),n=Math.max(n,c+p/2),o=Math.min(o,h-m/2),t=Math.max(t,h+m/2)}s(r.nodes(),function(d){u(r.node(d))}),s(r.edges(),function(d){var c=r.edge(d);l(c,"x")&&u(c)}),e-=a,o-=f,s(r.nodes(),function(d){var c=r.node(d);c.x-=e,c.y-=o}),s(r.edges(),function(d){var c=r.edge(d);s(c.points,function(h){h.x-=e,h.y-=o}),l(c,"x")&&(c.x-=e),l(c,"y")&&(c.y-=o)}),i.width=n-e+a,i.height=t-o+f}function gn(r){s(r.edges(),function(e){var n=r.edge(e),o=r.node(e.v),t=r.node(e.w),i,a;n.points?(i=n.points[0],a=n.points[n.points.length-1]):(n.points=[],i=t,a=o),n.points.unshift(Z(o,i)),n.points.push(Z(t,a))})}function Nn(r){s(r.edges(),function(e){var n=r.edge(e);if(l(n,"x"))switch((n.labelpos==="l"||n.labelpos==="r")&&(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset;break}})}function In(r){s(r.edges(),function(e){var n=r.edge(e);n.reversed&&n.points.reverse()})}function Ln(r){s(r.nodes(),function(e){if(r.children(e).length){var n=r.node(e),o=r.node(n.borderTop),t=r.node(n.borderBottom),i=r.node(P(n.borderLeft)),a=r.node(P(n.borderRight));n.width=Math.abs(a.x-i.x),n.height=Math.abs(t.y-o.y),n.x=i.x+n.width/2,n.y=o.y+n.height/2}}),s(r.nodes(),function(e){r.node(e).dummy==="border"&&r.removeNode(e)})}function Cn(r){s(r.edges(),function(e){if(e.v===e.w){var n=r.node(e.v);n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e,label:r.edge(e)}),r.removeEdge(e)}})}function Tn(r){var e=R(r);s(e,function(n){var o=0;s(n,function(t,i){var a=r.node(t);a.order=i+o,s(a.selfEdges,function(f){g(r,"selfedge",{width:f.label.width,height:f.label.height,rank:a.rank,order:i+ ++o,e:f.e,label:f.label},"_se")}),delete a.selfEdges})})}function Rn(r){s(r.nodes(),function(e){var n=r.node(e);if(n.dummy==="selfedge"){var o=r.node(n.e.v),t=o.x+o.width/2,i=o.y,a=n.x-t,f=o.height/2;r.setEdge(n.e,n.label),r.removeNode(e),n.label.points=[{x:t+2*a/3,y:i-f},{x:t+5*a/6,y:i-f},{x:t+a,y:i},{x:t+5*a/6,y:i+f},{x:t+2*a/3,y:i+f}],n.label.x=n.x,n.label.y=n.y}})}function hr(r,e){return V(A(r,e),Number)}function lr(r){var e={};return s(r,function(n,o){e[o.toLowerCase()]=n}),e}export{fn as a};
