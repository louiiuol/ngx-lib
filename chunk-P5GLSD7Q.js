import{a as B,b as T,c as G}from"./chunk-PK2S5CKJ.js";import{a as $}from"./chunk-FRQHQZY3.js";import"./chunk-V6OKWLLU.js";import"./chunk-UGXKMGFK.js";import{A as R}from"./chunk-KLEKA63L.js";import"./chunk-5RSCYRGJ.js";import{$a as z,F as S,Fa as d,Na as L,Sa as _,Ta as N,b as V,c as W,db as P,h as g,mb as i}from"./chunk-2YKPSI5H.js";import{a as k,h as I,j as M}from"./chunk-TWZW5B45.js";var lt=I(V(),1),st=I(W(),1);var E=s=>L.sanitizeText(s,i()),D={dividerMargin:10,padding:5,textHeight:10,curve:void 0},J=function(s,e,y,a){let t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(r){var o,c;let l=s[r],p={shape:"rect",id:l.id,domId:l.domId,labelText:E(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=i().flowchart)==null?void 0:o.padding)??((c=i().class)==null?void 0:c.padding)};e.setNode(l.id,p),F(l.classes,e,y,a,l.id),d.info("setNode",p)})},F=function(s,e,y,a,t){let r=Object.keys(s);d.info("keys:",r),d.info(s),r.filter(o=>s[o].parent==t).forEach(function(o){var c,l;let n=s[o],p=n.cssClasses.join(" "),f=N(n.styles),m=n.label??n.id,u=0,b={labelStyle:f.labelStyle,shape:"class_box",labelText:E(m),classData:n,rx:u,ry:u,class:p,style:f.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,t)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((c=i().flowchart)==null?void 0:c.padding)??((l=i().class)==null?void 0:l.padding)};e.setNode(n.id,b),t&&e.setParent(n.id,t),d.info("setNode",b)})},K=function(s,e,y,a){d.info(s),s.forEach(function(t,r){var o,c;let l=t,n="",p={labelStyle:"",style:""},f=l.text,m=0,h={labelStyle:p.labelStyle,shape:"note",labelText:E(f),noteData:l,rx:m,ry:m,class:n,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=i().flowchart)==null?void 0:o.padding)??((c=i().class)==null?void 0:c.padding)};if(e.setNode(l.id,h),d.info("setNode",h),!l.class||!(l.class in a))return;let b=y+r,x={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:_(D.curve,S)};e.setEdge(l.id,l.class,x,b)})},Q=function(s,e){let y=i().flowchart,a=0;s.forEach(function(t){var r;a++;let o={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${a}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:q(t.relation.type1),arrowTypeEnd:q(t.relation.type2),style:"fill:none",labelStyle:"",curve:_(y?.curve,S)};if(d.info(o,t),t.style!==void 0){let c=N(t.style);o.style=c.style,o.labelStyle=c.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((r=i().flowchart)==null?void 0:r.htmlLabels)??i().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+t.text+"</span>"):(o.labelType="text",o.label=t.text.replace(L.lineBreakRegex,`
`),t.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),e.setEdge(t.id1,t.id2,o,a)})},U=function(s){D=k(k({},D),s)},X=function(s,e,y,a){return M(this,null,function*(){d.info("Drawing class - ",e);let t=i().flowchart??i().class,r=i().securityLevel;d.info("config:",t);let o=t?.nodeSpacing??50,c=t?.rankSpacing??50,l=new R({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:o,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),p=a.db.getClasses(),f=a.db.getRelations(),m=a.db.getNotes();d.info(f),J(n,l,e,a),F(p,l,e,a),Q(f,l),K(m,l,f.length+1,p);let u;r==="sandbox"&&(u=g("#i"+e));let h=r==="sandbox"?g(u.nodes()[0].contentDocument.body):g("body"),b=h.select(`[id="${e}"]`),x=h.select("#"+e+" g");if(yield $(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),z.insertTitle(b,"classTitleText",t?.titleTopMargin??5,a.db.getDiagramTitle()),P(l,b,t?.diagramPadding,t?.useMaxWidth),!t?.htmlLabels){let C=r==="sandbox"?u.nodes()[0].contentDocument:document,H=C.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(let w of H){let A=w.getBBox(),v=C.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",A.width),v.setAttribute("height",A.height),w.insertBefore(v,w.firstChild)}}})};function q(s){let e;switch(s){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}var Y={setConf:U,draw:X},rt={parser:B,db:T,renderer:Y,styles:G,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,T.clear()}};export{rt as diagram};