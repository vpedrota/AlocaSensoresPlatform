import{p as P,i as be,c as r,r as W,a as G,b as H,g as He,s as C,o as Q,d as ze,e as Ke,f as Ge,h as Je,j as ve,k as Qe,l as z,m as v,n as de,t as X,q as me,u as pe,v as De,w as et,x as $,y as Oe,z as fe,C as tt,A as at,B as nt,D as Ye,T as lt,F as oe,E as we,G as N,H as le,I as A,J,K as ue,L as $e,M as Pe,N as j,O as ie,P as ot,Q as ut,R as st}from"./index.cea91902.js";import{u as We,m as K,a as ee,b as D,c as Se,d as _e,e as xe,f as re,g as Ve,h as Te,i as ke,V as it,j as ye,k as rt,l as Be,n as ct,o as se,p as vt,t as dt,q as mt,r as ft}from"./VBtn.1af8aa34.js";import{_ as Fe}from"./_plugin-vue_export-helper.cdc0426e.js";const ce=Symbol.for("vuetify:layout"),Xe=Symbol.for("vuetify:layout-item"),Re=1e3,gt=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ie=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ht(){const e=be(ce);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ce(e){var c;const u=be(ce);if(!u)throw new Error("[Vuetify] Could not find injected layout");const t=(c=e.id)!=null?c:`layout-item-${Ke()}`,l=He("useLayoutItem");ze(Xe,{id:t});const n=C(!1);Ge(()=>n.value=!0),Je(()=>n.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=u.register(l,{...e,active:r(()=>n.value?!1:e.active.value),id:t});return ve(()=>u.unregister(t)),{layoutItemStyles:a,layoutRect:u.layoutRect,layoutItemScrimStyles:i}}const yt=(e,u,t,l)=>{let n={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...n}}];for(const i of e){const c=u.get(i),b=t.get(i),h=l.get(i);if(!c||!b||!h)continue;const o={...n,[c.value]:parseInt(n[c.value],10)+(h.value?parseInt(b.value,10):0)};a.push({id:i,layer:o}),n=o}return a};function bt(e){const u=be(ce,null),t=r(()=>u?u.rootZIndex.value-100:Re),l=W([]),n=G(new Map),a=G(new Map),i=G(new Map),c=G(new Map),b=G(new Map),{resizeRef:h,contentRect:o}=We(),y=r(()=>{var g;const s=new Map,f=(g=e.overlaps)!=null?g:[];for(const V of f.filter(_=>_.includes(":"))){const[_,M]=V.split(":");if(!l.value.includes(_)||!l.value.includes(M))continue;const R=n.get(_),F=n.get(M),O=a.get(_),q=a.get(M);!R||!F||!O||!q||(s.set(M,{position:R.value,amount:parseInt(O.value,10)}),s.set(_,{position:F.value,amount:-parseInt(q.value,10)}))}return s}),m=r(()=>{const s=[...new Set([...i.values()].map(g=>g.value))].sort((g,V)=>g-V),f=[];for(const g of s){const V=l.value.filter(_=>{var M;return((M=i.get(_))==null?void 0:M.value)===g});f.push(...V)}return yt(f,n,a,c)}),d=r(()=>!Array.from(b.values()).some(s=>s.value)),w=r(()=>m.value[m.value.length-1].layer),T=r(()=>({"--v-layout-left":H(w.value.left),"--v-layout-right":H(w.value.right),"--v-layout-top":H(w.value.top),"--v-layout-bottom":H(w.value.bottom),...d.value?void 0:{transition:"none"}})),B=r(()=>m.value.slice(1).map((s,f)=>{let{id:g}=s;const{layer:V}=m.value[f],_=a.get(g),M=n.get(g);return{id:g,...V,size:Number(_.value),position:M.value}})),I=s=>B.value.find(f=>f.id===s),S=He("createLayout"),k=C(!1);Q(()=>{k.value=!0}),ze(ce,{register:(s,f)=>{let{id:g,order:V,position:_,layoutSize:M,elementSize:R,active:F,disableTransitions:O,absolute:q}=f;i.set(g,V),n.set(g,_),a.set(g,M),c.set(g,F),O&&b.set(g,O);const te=Qe(Xe,S==null?void 0:S.vnode).indexOf(s);te>-1?l.value.splice(te,0,g):l.value.push(g);const E=r(()=>B.value.findIndex(Y=>Y.id===g)),U=r(()=>t.value+m.value.length*2-E.value*2),ae=r(()=>{const Y=_.value==="left"||_.value==="right",ge=_.value==="right",je=_.value==="bottom",Me={[_.value]:0,zIndex:U.value,transform:`translate${Y?"X":"Y"}(${(F.value?0:-110)*(ge||je?-1:1)}%)`,position:q.value||t.value!==Re?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(!k.value)return Me;const L=B.value[E.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${g}"`);const he=y.value.get(g);return he&&(L[he.position]+=he.amount),{...Me,height:Y?`calc(100% - ${L.top}px - ${L.bottom}px)`:R.value?`${R.value}px`:void 0,left:ge?void 0:`${L.left}px`,right:ge?`${L.right}px`:void 0,top:_.value!=="bottom"?`${L.top}px`:void 0,bottom:_.value!=="top"?`${L.bottom}px`:void 0,width:Y?R.value?`${R.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),ne=r(()=>({zIndex:U.value-1}));return{layoutItemStyles:ae,layoutItemScrimStyles:ne,zIndex:U}},unregister:s=>{i.delete(s),n.delete(s),a.delete(s),c.delete(s),b.delete(s),l.value=l.value.filter(f=>f!==s)},mainRect:w,mainStyles:T,getLayoutItem:I,items:B,layoutRect:o,rootZIndex:t});const x=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),p=r(()=>({zIndex:t.value,position:u?"relative":void 0,overflow:u?"hidden":void 0}));return{layoutClasses:x,layoutStyles:p,getLayoutItem:I,items:B,layoutRect:o,layoutRef:h}}const qe=P({text:String,...K(),...ee()},"v-toolbar-title"),Ue=z()({name:"VToolbarTitle",props:qe(),setup(e,u){let{slots:t}=u;return D(()=>{const l=!!(t.default||t.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[l&&v("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),pt=[null,"prominent","default","comfortable","compact"],Ze=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>pt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Se(),...K(),..._e(),...xe(),...ee({tag:"header"}),...de()},"v-toolbar"),Le=z()({name:"VToolbar",props:Ze(),setup(e,u){var d;let{slots:t}=u;const{backgroundColorClasses:l,backgroundColorStyles:n}=re(X(e,"color")),{borderClasses:a}=Ve(e),{elevationClasses:i}=Te(e),{roundedClasses:c}=ke(e),{themeClasses:b}=me(e),{rtlClasses:h}=pe(),o=C(!!(e.extended||((d=t.extension)==null?void 0:d.call(t)))),y=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=r(()=>o.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return De({VBtn:{variant:"text"}}),D(()=>{var I;const w=!!(e.title||t.title),T=!!(t.image||e.image),B=(I=t.extension)==null?void 0:I.call(t);return o.value=!!(e.extended||B),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,a.value,i.value,c.value,b.value,h.value,e.class],style:[n.value,e.style]},{default:()=>[T&&v("div",{key:"image",class:"v-toolbar__image"},[t.image?v(ye,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):v(it,{key:"image-img",cover:!0,src:e.image},null)]),v(ye,{defaults:{VTabs:{height:H(y.value)}}},{default:()=>{var S,k,x;return[v("div",{class:"v-toolbar__content",style:{height:H(y.value)}},[t.prepend&&v("div",{class:"v-toolbar__prepend"},[(S=t.prepend)==null?void 0:S.call(t)]),w&&v(Ue,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&v("div",{class:"v-toolbar__append"},[(x=t.append)==null?void 0:x.call(t)])])]}}),v(ye,{defaults:{VTabs:{height:H(m.value)}}},{default:()=>[v(rt,null,{default:()=>[o.value&&v("div",{class:"v-toolbar__extension",style:{height:H(m.value)}},[B])]})]})]})}),{contentHeight:y,extensionHeight:m}}}),wt=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function St(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let l=0;const n=W(null),a=C(0),i=C(0),c=C(0),b=C(!1),h=C(!1),o=r(()=>Number(e.scrollThreshold)),y=r(()=>et((o.value-a.value)/o.value||0)),m=()=>{const d=n.value;!d||t&&!t.value||(l=a.value,a.value="window"in d?d.pageYOffset:d.scrollTop,h.value=a.value<l,c.value=Math.abs(a.value-o.value))};return $(h,()=>{i.value=i.value||a.value}),$(b,()=>{i.value=0}),Q(()=>{$(()=>e.scrollTarget,d=>{var T;const w=d?document.querySelector(d):window;!w||w!==n.value&&((T=n.value)==null||T.removeEventListener("scroll",m),n.value=w,n.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ve(()=>{var d;(d=n.value)==null||d.removeEventListener("scroll",m)}),t&&$(t,m,{immediate:!0}),{scrollThreshold:o,currentScroll:a,currentThreshold:c,isScrollActive:b,scrollRatio:y,isScrollingUp:h,savedScroll:i}}const _t=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ze(),...Ie(),...wt(),height:{type:[Number,String],default:64}},"v-app-bar"),xt=z()({name:"VAppBar",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const l=W(),n=Oe(e,"modelValue"),a=r(()=>{var k,x;const S=new Set((x=(k=e.scrollBehavior)==null?void 0:k.split(" "))!=null?x:[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),i=r(()=>{const S=a.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!n.value}),{currentScroll:c,scrollThreshold:b,isScrollingUp:h,scrollRatio:o}=St(e,{canScroll:i}),y=r(()=>e.collapse||a.value.collapse&&(a.value.inverted?o.value>0:o.value===0)),m=r(()=>e.flat||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),d=r(()=>a.value.fadeImage?a.value.inverted?1-o.value:o.value:void 0),w=r(()=>{var x,p,s,f;if(a.value.hide&&a.value.inverted)return 0;const S=(p=(x=l.value)==null?void 0:x.contentHeight)!=null?p:0,k=(f=(s=l.value)==null?void 0:s.extensionHeight)!=null?f:0;return S+k});function T(){a.value.hide?a.value.inverted?n.value=c.value>b.value:n.value=h.value||c.value<b.value:n.value=!0}$(c,T,{immediate:!0}),$(a,T);const{ssrBootStyles:B}=Be(),{layoutItemStyles:I}=Ce({id:e.name,order:r(()=>parseInt(e.order,10)),position:X(e,"location"),layoutSize:w,elementSize:C(void 0),active:n,absolute:X(e,"absolute")});return D(()=>{const[S]=Le.filterProps(e);return v(Le,fe({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":d.value,height:void 0,...B.value},e.style]},S,{collapse:y.value,flat:m.value}),t)}),{}}}),Vt=P({...ct({icon:"$menu",variant:"text"})},"v-app-bar-nav-icon"),Tt=z()({name:"VAppBarNavIcon",props:Vt(),setup(e,u){let{slots:t}=u;return D(()=>v(se,fe(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),kt=z()({name:"VAppBarTitle",props:qe(),setup(e,u){let{slots:t}=u;return D(()=>v(Ue,fe(e,{class:"v-app-bar-title"}),t)),{}}});function Bt(e){let{rootEl:u,isSticky:t,layoutItemStyles:l}=e;const n=C(!1),a=C(0),i=r(()=>{const h=typeof n.value=="boolean"?"top":n.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[h]:H(a.value)}:{top:l.value.top}]});Q(()=>{$(t,h=>{h?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),ve(()=>{document.removeEventListener("scroll",b)});let c=0;function b(){var T;const h=c>window.scrollY?"up":"down",o=u.value.getBoundingClientRect(),y=parseFloat((T=l.value.top)!=null?T:0),m=window.scrollY-Math.max(0,a.value-y),d=o.height+Math.max(a.value,y)-window.scrollY-window.innerHeight,w=parseFloat(getComputedStyle(u.value).getPropertyValue("--v-body-scroll-y"))||0;o.height<window.innerHeight-y?(n.value="top",a.value=y):h==="up"&&n.value==="bottom"||h==="down"&&n.value==="top"?(a.value=window.scrollY+o.top-w,n.value=!0):h==="down"&&d<=0?(a.value=0,n.value="bottom"):h==="up"&&m<=0&&(w?n.value!=="top"&&(a.value=-m+w+y,n.value="top"):(a.value=o.top+m,n.value="top")),c=window.scrollY}return{isStuck:n,stickyStyles:i}}const It=100,Ct=20;function Ne(e){const u=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*u}function Ae(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let u=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const l=Ne(u),n=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);u+=(n-l)*Math.abs(n),t===e.length-1&&(u*=.5)}return Ne(u)*1e3}function Et(){const e={};function u(n){Array.from(n.changedTouches).forEach(a=>{var c;((c=e[a.identifier])!=null?c:e[a.identifier]=new tt(Ct)).push([n.timeStamp,a])})}function t(n){Array.from(n.changedTouches).forEach(a=>{delete e[a.identifier]})}function l(n){var h;const a=(h=e[n])==null?void 0:h.values().reverse();if(!a)throw new Error(`No samples for touch id ${n}`);const i=a[0],c=[],b=[];for(const o of a){if(i[0]-o[0]>It)break;c.push({t:o[0],d:o[1].clientX}),b.push({t:o[0],d:o[1].clientY})}return{x:Ae(c),y:Ae(b),get direction(){const{x:o,y}=this,[m,d]=[Math.abs(o),Math.abs(y)];return m>d&&o>=0?"right":m>d&&o<=0?"left":d>m&&y>=0?"down":d>m&&y<=0?"up":Mt()}}}return{addMovement:u,endTouch:t,getVelocity:l}}function Mt(){throw new Error}function $t(e){let{isActive:u,isTemporary:t,width:l,touchless:n,position:a}=e;Q(()=>{window.addEventListener("touchstart",I,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),ve(()=>{window.removeEventListener("touchstart",I),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",k)});const i=r(()=>["left","right"].includes(a.value)),{addMovement:c,endTouch:b,getVelocity:h}=Et();let o=!1;const y=C(!1),m=C(0),d=C(0);let w;function T(p,s){return(a.value==="left"?p:a.value==="right"?document.documentElement.clientWidth-p:a.value==="top"?p:a.value==="bottom"?document.documentElement.clientHeight-p:Z())-(s?l.value:0)}function B(p){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=a.value==="left"?(p-d.value)/l.value:a.value==="right"?(document.documentElement.clientWidth-p-d.value)/l.value:a.value==="top"?(p-d.value)/l.value:a.value==="bottom"?(document.documentElement.clientHeight-p-d.value)/l.value:Z();return s?Math.max(0,Math.min(1,f)):f}function I(p){if(n.value)return;const s=p.changedTouches[0].clientX,f=p.changedTouches[0].clientY,g=25,V=a.value==="left"?s<g:a.value==="right"?s>document.documentElement.clientWidth-g:a.value==="top"?f<g:a.value==="bottom"?f>document.documentElement.clientHeight-g:Z(),_=u.value&&(a.value==="left"?s<l.value:a.value==="right"?s>document.documentElement.clientWidth-l.value:a.value==="top"?f<l.value:a.value==="bottom"?f>document.documentElement.clientHeight-l.value:Z());(V||_||u.value&&t.value)&&(o=!0,w=[s,f],d.value=T(i.value?s:f,u.value),m.value=B(i.value?s:f),b(p),c(p))}function S(p){const s=p.changedTouches[0].clientX,f=p.changedTouches[0].clientY;if(o){if(!p.cancelable){o=!1;return}const V=Math.abs(s-w[0]),_=Math.abs(f-w[1]);(i.value?V>_&&V>3:_>V&&_>3)?(y.value=!0,o=!1):(i.value?_:V)>3&&(o=!1)}if(!y.value)return;p.preventDefault(),c(p);const g=B(i.value?s:f,!1);m.value=Math.max(0,Math.min(1,g)),g>1?d.value=T(i.value?s:f,!0):g<0&&(d.value=T(i.value?s:f,!1))}function k(p){if(o=!1,!y.value)return;c(p),y.value=!1;const s=h(p.changedTouches[0].identifier),f=Math.abs(s.x),g=Math.abs(s.y);(i.value?f>g&&f>400:g>f&&g>3)?u.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||Z()):u.value=m.value>.5}const x=r(()=>y.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*l.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*l.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*l.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*l.value}px))`:Z(),transition:"none"}:void 0);return{isDragging:y,dragProgress:m,dragStyles:x}}function Z(){throw new Error}const Pt=["start","end","left","right","top","bottom"],Rt=P({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Pt.includes(e)},sticky:Boolean,...Se(),...K(),..._e(),...Ie(),...xe(),...ee({tag:"nav"}),...de()},"v-navigation-drawer"),Lt=z()({name:"VNavigationDrawer",props:Rt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,u){let{attrs:t,emit:l,slots:n}=u;const{isRtl:a}=pe(),{themeClasses:i}=me(e),{borderClasses:c}=Ve(e),{backgroundColorClasses:b,backgroundColorStyles:h}=re(X(e,"color")),{elevationClasses:o}=Te(e),{mobile:y}=at(),{roundedClasses:m}=ke(e),d=vt(),w=Oe(e,"modelValue",null,E=>!!E),{ssrBootStyles:T}=Be(),B=W(),I=C(!1),S=r(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),k=r(()=>dt(e.location,a.value)),x=r(()=>!e.permanent&&(y.value||e.temporary)),p=r(()=>e.sticky&&!x.value&&k.value!=="bottom");e.expandOnHover&&e.rail!=null&&$(I,E=>l("update:rail",!E)),e.disableResizeWatcher||$(x,E=>!e.permanent&&nt(()=>w.value=!E)),!e.disableRouteWatcher&&d&&$(d.currentRoute,()=>x.value&&(w.value=!1)),$(()=>e.permanent,E=>{E&&(w.value=!0)}),Ye(()=>{e.modelValue!=null||x.value||(w.value=e.permanent||!y.value)});const{isDragging:s,dragProgress:f,dragStyles:g}=$t({isActive:w,isTemporary:x,width:S,touchless:X(e,"touchless"),position:k}),V=r(()=>{const E=x.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):S.value;return s.value?E*f.value:E}),{layoutItemStyles:_,layoutItemScrimStyles:M}=Ce({id:e.name,order:r(()=>parseInt(e.order,10)),position:k,layoutSize:V,elementSize:S,active:r(()=>w.value||s.value),disableTransitions:r(()=>s.value),absolute:r(()=>e.absolute||p.value&&typeof R.value!="string")}),{isStuck:R,stickyStyles:F}=Bt({rootEl:B,isSticky:p,layoutItemStyles:_}),O=re(r(()=>typeof e.scrim=="string"?e.scrim:null)),q=r(()=>({...s.value?{opacity:f.value*.2,transition:"none"}:void 0,...M.value}));De({VList:{bgColor:"transparent"}});function Ee(){I.value=!0}function te(){I.value=!1}return D(()=>{const E=n.image||e.image;return v(oe,null,[v(e.tag,fe({ref:B,onMouseenter:Ee,onMouseleave:te,class:["v-navigation-drawer",`v-navigation-drawer--${k.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":x.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":p.value},i.value,b.value,c.value,o.value,m.value,e.class],style:[h.value,_.value,g.value,T.value,F.value,e.style]},t),{default:()=>{var U,ae,ne,Y;return[E&&v("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(U=n.image)==null?void 0:U.call(n,{image:e.image}):v("img",{src:e.image,alt:""},null)]),n.prepend&&v("div",{class:"v-navigation-drawer__prepend"},[(ae=n.prepend)==null?void 0:ae.call(n)]),v("div",{class:"v-navigation-drawer__content"},[(ne=n.default)==null?void 0:ne.call(n)]),n.append&&v("div",{class:"v-navigation-drawer__append"},[(Y=n.append)==null?void 0:Y.call(n)])]}}),v(lt,{name:"fade-transition"},{default:()=>[x.value&&(s.value||w.value)&&!!e.scrim&&v("div",{class:["v-navigation-drawer__scrim",O.backgroundColorClasses.value],style:[q.value,O.backgroundColorStyles.value],onClick:()=>w.value=!1},null)]})])}),{isStuck:R}}}),Nt={key:0,class:"nav-buttons"},At={class:"nav-buttons-list"},Ht=we({__name:"AppBar",setup(e){const t=W({title:"AlocaSensores",status:!0}),l=W(window.innerWidth),n=W([{nome:"P\xE1gina Inicial",href:"/"},{nome:"Sobre",href:"about"}]);let a=W(!1);Ye(()=>{l.value<600?t.value.status=!1:(t.value.status=!0,a.value=!1)}),Q(()=>{window.addEventListener("resize",i)});const i=()=>{l.value=window.innerWidth},c=()=>{a.value=!a.value};return $(l,b=>{l.value<600?t.value.status=!1:(t.value.status=!0,a.value=!1)}),(b,h)=>(N(),le(oe,null,[v(xt,{flat:""},{default:A(()=>[v(Tt,null,{default:A(()=>[v(mt,{icon:"mdi-circle-slice-6"})]),_:1}),v(kt,null,{default:A(()=>[J(ue(t.value.title),1)]),_:1}),t.value.status?(N(),le("div",Nt,[(N(!0),le(oe,null,$e(n.value,o=>(N(),j(se,{variant:"tonal",onClick:y=>b.$router.push(o.href)},{default:A(()=>[J(ue(o.nome),1)]),_:2},1032,["onClick"]))),256))])):Pe("",!0),t.value.status?Pe("",!0):(N(),j(se,{key:1,onClick:c,variant:"tonal"},{default:A(()=>[J(" Menu ")]),_:1}))]),_:1}),v(Lt,{modelValue:ot(a),"onUpdate:modelValue":h[0]||(h[0]=o=>ut(a)?a.value=o:a=o),location:"top",temporary:""},{default:A(()=>[ie("div",At,[(N(!0),le(oe,null,$e(n.value,o=>(N(),j(se,{onClick:y=>b.$router.push(o.href),variant:"tonal"},{default:A(()=>[J(ue(o.nome),1)]),_:2},1032,["onClick"]))),256))])]),_:1},8,["modelValue"])],64))}});const zt=Fe(Ht,[["__scopeId","data-v-39300578"]]);const Dt=P({scrollable:Boolean,...K(),...ee({tag:"main"})},"v-main"),Ot=z()({name:"VMain",props:Dt(),setup(e,u){let{slots:t}=u;const{mainStyles:l}=ht(),{ssrBootStyles:n}=Be();return D(()=>v(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,n.value,e.style]},{default:()=>{var a,i;return[e.scrollable?v("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Yt=we({__name:"View",setup(e){return(u,t)=>{const l=st("router-view");return N(),j(Ot,null,{default:A(()=>[v(l)]),_:1})}}});const Wt=P({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Se(),...K(),..._e(),...Ie(),...xe(),...ee({tag:"footer"}),...de()},"v-footer"),Ft=z()({name:"VFooter",props:Wt(),setup(e,u){let{slots:t}=u;const{themeClasses:l}=me(e),{backgroundColorClasses:n,backgroundColorStyles:a}=re(X(e,"color")),{borderClasses:i}=Ve(e),{elevationClasses:c}=Te(e),{roundedClasses:b}=ke(e),h=C(32),{resizeRef:o}=We(d=>{!d.length||(h.value=d[0].target.clientHeight)}),y=r(()=>e.height==="auto"?h.value:parseInt(e.height,10)),{layoutItemStyles:m}=Ce({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:y,elementSize:r(()=>e.height==="auto"?void 0:y.value),active:r(()=>e.app),absolute:X(e,"absolute")});return D(()=>v(e.tag,{ref:o,class:["v-footer",l.value,n.value,i.value,c.value,b.value,e.class],style:[a.value,e.app?m.value:void 0,e.style]},t)),{}}}),Xt=ft("flex-grow-1","div","VSpacer"),qt={},Ut={class:"bg-teal d-flex w-100 align-center px-4"},Zt={class:"px-4 py-2 text-center w-100"},jt=ie("strong",null,"AlocaS",-1);function Kt(e,u){return N(),j(Ft,{border:"",class:"d-flex flex-column"},{default:A(()=>[ie("div",Ut,[v(Xt)]),ie("div",Zt,[J(ue(new Date().getFullYear())+" \u2014 ",1),jt])]),_:1})}const Gt=Fe(qt,[["render",Kt]]);const Jt=P({...K(),...gt({fullHeight:!0}),...de()},"v-app"),Qt=z()({name:"VApp",props:Jt(),setup(e,u){let{slots:t}=u;const l=me(e),{layoutClasses:n,layoutStyles:a,getLayoutItem:i,items:c,layoutRef:b}=bt(e),{rtlClasses:h}=pe();return D(()=>{var o;return v("div",{ref:b,class:["v-application",l.themeClasses.value,n.value,h.value,e.class],style:[a.value,e.style]},[v("div",{class:"v-application__wrap"},[(o=t.default)==null?void 0:o.call(t)])])}),{getLayoutItem:i,items:c,theme:l}}}),na=we({__name:"Default",setup(e){return(u,t)=>(N(),j(Qt,null,{default:A(()=>[v(zt),v(Yt),v(Gt)]),_:1}))}});export{na as default};