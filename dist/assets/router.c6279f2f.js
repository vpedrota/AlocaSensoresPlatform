import{S as j,p as h,l as P,U as Ne,V as Ie,W as ue,a as ce,X as Ve,v as Oe,d as c,h as f,m as l,Y as K,z as de,T as ve,s as E,r as Q,x as A,B as De,D as me,Z as J,_ as He,F as fe,$ as We,a0 as w,Q as V,a1 as ge,a2 as Z,P as ee,a3 as Ae,n as he,q as pe,a4 as je,t as ye,a5 as Fe,e as Me,a6 as Xe,a7 as te,u as be,y as Ye,a8 as qe,a9 as ne,aa as Ue,ab as Ke}from"./index.d96f2f61.js";const _e=["top","bottom"],Qe=["start","end","left","right"];function Ge(e,t){let[n,a]=e.split(" ");return a||(a=j(_e,n)?"start":j(Qe,n)?"top":"center"),{side:ae(n,t),align:ae(a,t)}}function ae(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Lt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Tt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Et(e){return{side:e.align,align:e.side}}function Pt(e){return j(_e,e.side)?"y":"x"}const O=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return P()({name:n!=null?n:Ne(Ie(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...O()},setup(a,r){let{slots:s}=r;return()=>{var i;return ue(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function M(e){const t=ce("useRender");t.render=e}const Je=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},"v-defaults-provider"),zt=P(!1)({name:"VDefaultsProvider",props:Je(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=Ve(e);return Oe(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const Ze=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function et(e){return{dimensionStyles:c(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function tt(e){return{aspectStyles:c(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Se=h({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...O(),...Ze()},"v-responsive"),se=P()({name:"VResponsive",props:Se(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=tt(e),{dimensionStyles:r}=et(e);return M(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function nt(e,t){if(!K)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var p;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const v=(p=e._observe)==null?void 0:p[t.instance.$.uid];if(!v)return;const g=o.some(y=>y.isIntersecting);r&&(!n.quiet||v.init)&&(!n.once||g||v.init)&&r(g,o,u),g&&n.once?Ce(e,t):v.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ce(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const at={mounted:nt,unmounted:Ce},st=at,rt=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,...s}=e,{component:i=ve,...o}=typeof a=="object"?a:{};return ue(i,de(typeof a=="string"?{name:r?"":a}:o,s,{disabled:r}),n)},it=h({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Se(),...O(),...rt()},"v-img"),Bt=P()({name:"VImg",directives:{intersect:st},props:it(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const r=E(""),s=Q(),i=E(e.eager?"loading":"idle"),o=E(),u=E(),v=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=c(()=>v.value.aspect||o.value/u.value||0);A(()=>e.src,()=>{p(i.value!=="idle")}),A(g,(d,m)=>{!d&&m&&s.value&&x(s.value)}),De(()=>p());function p(d){if(!(e.eager&&d)&&!(K&&!d&&!e.eager)){if(i.value="loading",v.value.lazySrc){const m=new Image;m.src=v.value.lazySrc,x(m,null)}!v.value.src||me(()=>{var m,S;if(n("loadstart",((m=s.value)==null?void 0:m.currentSrc)||v.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||b(),i.value==="error")return;g.value||x(s.value,null),y()}else g.value||x(s.value),D()})}}function y(){var d;D(),i.value="loaded",n("load",((d=s.value)==null?void 0:d.currentSrc)||v.value.src)}function b(){var d;i.value="error",n("error",((d=s.value)==null?void 0:d.currentSrc)||v.value.src)}function D(){const d=s.value;d&&(r.value=d.currentSrc||d.src)}let k=-1;function x(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(k);const{naturalHeight:H,naturalWidth:T}=d;H||T?(o.value=T,u.value=H):!d.complete&&i.value==="loading"&&m!=null?k=window.setTimeout(S,m):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};S()}const $=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var S;if(!v.value.src||i.value==="idle")return null;const d=l("img",{class:["v-img__img",$.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:y,onError:b},null),m=(S=a.sources)==null?void 0:S.call(a);return l(W,{transition:e.transition,appear:!0},{default:()=>[J(m?l("picture",{class:"v-img__picture"},[m,d]):d,[[We,i.value==="loaded"]])]})},R=()=>l(W,{transition:e.transition},{default:()=>[v.value.lazySrc&&i.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",$.value],src:v.value.lazySrc,alt:e.alt},null)]}),z=()=>a.placeholder?l(W,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,L=()=>a.error?l(W,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,X=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=E(!1);{const d=A(g,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),d())})}return M(()=>{const[d]=se.filterProps(e);return J(l(se,de({class:["v-img",{"v-img--booting":!B.value},e.class],style:e.style},d,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(fe,null,[l(C,null,null),l(R,null,null),l(X,null,null),l(z,null,null),l(L,null,null)]),default:a.default}),[[He("intersect"),{handler:p,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:s,state:i,naturalWidth:o,naturalHeight:u}}}),we=h({tag:{type:String,default:"div"}},"tag"),Nt=h({border:[Boolean,Number,String]},"border");function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{borderClasses:c(()=>{const a=V(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const Vt=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ot(e){return{elevationClasses:c(()=>{const n=V(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const ot=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{roundedClasses:c(()=>{const a=V(e)?e.value:e.rounded,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`rounded-${s}`);return r})}}function G(e){return ge(()=>{const t=[],n={};return e.value.background&&(Z(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(Z(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function ke(e,t){const n=c(()=>({text:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=G(n);return{textColorClasses:a,textColorStyles:r}}function re(e,t){const n=c(()=>({background:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=G(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const ut=[null,"default","comfortable","compact"],Dt=h({density:{type:String,default:"default",validator:e=>ut.includes(e)}},"density");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const ct=["elevated","flat","tonal","outlined","text","plain"];function Wt(e,t){return l(fe,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const At=h({color:String,variant:{type:String,default:"elevated",validator:e=>ct.includes(e)}},"variant");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const n=c(()=>{const{variant:s}=ee(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=G(c(()=>{const{variant:s,color:i}=ee(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const dt=["x-small","small","default","large","x-large"],vt=h({size:{type:[String,Number],default:"default"}},"size");function mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return ge(()=>{let n,a;return j(dt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:a}})}const ft=h({color:String,start:Boolean,end:Boolean,icon:Ae,...O(),...vt(),...we({tag:"i"}),...he()},"v-icon"),Ft=P()({name:"VIcon",props:ft(),setup(e,t){let{attrs:n,slots:a}=t;const r=Q(),{themeClasses:s}=pe(e),{iconData:i}=je(c(()=>r.value||e.icon)),{sizeClasses:o}=mt(e),{textColorClasses:u,textColorStyles:v}=ke(ye(e,"color"));return M(()=>{var p,y;const g=(p=a.default)==null?void 0:p.call(a);return g&&(r.value=(y=g.filter(b=>b.type===Fe&&b.children&&typeof b.children=="string")[0])==null?void 0:y.children),l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},v.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[g]})}),{}}});function gt(e,t){const n=Q(),a=E(!1);if(K){const r=new IntersectionObserver(s=>{e==null||e(s,r),a.value=!!s.find(i=>i.isIntersecting)},t);Me(()=>{r.disconnect()}),A(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const q=Symbol("rippleStop"),ht=80;function ie(e,t){e.style.transform=t,e.style.webkitTransform=t}function U(e){return e.constructor.name==="TouchEvent"}function xe(e){return e.constructor.name==="KeyboardEvent"}const pt=function(e,t){var p;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!xe(e)){const y=t.getBoundingClientRect(),b=U(e)?e.touches[e.touches.length-1]:e;a=b.clientX-y.left,r=b.clientY-y.top}let s=0,i=.3;(p=t._ripple)!=null&&p.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,v=n.center?o:`${a-s}px`,g=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:v,y:g,centerX:o,centerY:u}},F={show(e,t){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=t==null?void 0:t._ripple)!=null&&b.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:u,centerX:v,centerY:g}=pt(e,t,n),p=`${s*2}px`;r.className="v-ripple__animation",r.style.width=p,r.style.height=p,t.appendChild(a);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ie(r,`translate(${o}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ie(r,`translate(${v}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function $e(e){return typeof e>"u"||!!e}function N(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[q])){if(e[q]=!0,U(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||xe(e),n._ripple.class&&(t.class=n._ripple.class),U(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{F.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ht)}else F.show(e,n,t)}}function oe(e){e[q]=!0}function _(e){const t=e.currentTarget;if(!!(t!=null&&t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),F.hide(t)}}function Le(e){const t=e.currentTarget;!(t!=null&&t._ripple)||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let I=!1;function Te(e){!I&&(e.keyCode===te.enter||e.keyCode===te.space)&&(I=!0,N(e))}function Ee(e){I=!1,_(e)}function Pe(e){I&&(I=!1,_(e))}function Re(e,t,n){var i;const{value:a,modifiers:r}=t,s=$e(a);if(s||F.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,Xe(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",oe,{passive:!0}),e.addEventListener("mousedown",oe);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Le,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",N),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Te),e.addEventListener("keyup",Ee),e.addEventListener("blur",Pe),e.addEventListener("dragstart",_,{passive:!0})}else!s&&n&&ze(e)}function ze(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Le),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Te),e.removeEventListener("keyup",Ee),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Pe)}function yt(e,t){Re(e,t,!1)}function bt(e){delete e._ripple,ze(e)}function _t(e,t){if(t.value===t.oldValue)return;const n=$e(t.oldValue);Re(e,t,n)}const Mt={mounted:yt,unmounted:bt,updated:_t};const le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},St=h({location:String},"location");function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=be();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:i}=Ge(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(v){return n?n(v):0}const u={};return s!=="center"&&(t?u[le[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),i!=="center"?t?u[le[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const wt=h({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...St({location:"top"}),...ot(),...we(),...he()},"v-progress-linear"),kt=P()({name:"VProgressLinear",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Ye(e,"modelValue"),{isRtl:r,rtlClasses:s}=be(),{themeClasses:i}=pe(e),{locationStyles:o}=Ct(e),{textColorClasses:u,textColorStyles:v}=ke(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:p}=re(c(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:b}=re(e,"color"),{roundedClasses:D}=lt(e),{intersectionRef:k,isIntersecting:x}=gt(),$=c(()=>parseInt(e.max,10)),C=c(()=>parseInt(e.height,10)),R=c(()=>parseFloat(e.bufferValue)/$.value*100),z=c(()=>parseFloat(a.value)/$.value*100),L=c(()=>r.value!==e.reverse),X=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),B=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function d(m){if(!k.value)return;const{left:S,right:H,width:T}=k.value.getBoundingClientRect(),Be=L.value?T-m.clientX+(H-T):m.clientX-S;a.value=Math.round(Be/T*$.value)}return M(()=>l(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},D.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:z.value,onClick:e.clickable&&d},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...v.value,[L.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:B.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-R.value,"%"),"--v-progress-linear-stream-to":f(C.value*(L.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",g.value],style:[p.value,{opacity:B.value,width:f(e.stream?R.value:100,"%")}]},null),l(ve,{name:X.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>l("div",{key:m,class:["v-progress-linear__indeterminate",m,y.value],style:b.value},null))]):l("div",{class:["v-progress-linear__determinate",y.value],style:[b.value,{width:f(z.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:z.value,buffer:R.value})])]})),{}}}),Xt=h({loading:[Boolean,String]},"loader");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function qt(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(kt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const xt=["static","relative","fixed","absolute","sticky"],Ut=h({position:{type:String,validator:e=>xt.includes(e)}},"position");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Qt(){var e,t;return(t=(e=ce("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Gt(e,t){const n=qe("RouterLink"),a=c(()=>!!(e.href||e.to)),r=c(()=>(a==null?void 0:a.value)||ne(t,"click")||ne(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:r,href:ye(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var i,o;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(o=s.isActive)==null?void 0:o.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Jt=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Y=!1;function Zt(e,t){let n=!1,a,r;Ue&&(me(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,o,u)=>{Y?n?t(u):u():setTimeout(()=>n?t(u):u()),Y=!0}),r=e==null?void 0:e.afterEach(()=>{Y=!1})}),Ke(()=>{window.removeEventListener("popstate",s),a==null||a(),r==null||r()}));function s(i){var o;(o=i.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}export{Jt as A,jt as B,et as C,Yt as D,Ct as E,Kt as F,Gt as G,Wt as H,Ge as I,Lt as J,Tt as K,Et as L,Pt as M,rt as N,W as O,Zt as P,qt as Q,Mt as R,st as S,Bt as V,we as a,Nt as b,Vt as c,ot as d,re as e,It as f,Ot as g,lt as h,zt as i,Qt as j,Ft as k,Rt as l,O as m,Dt as n,At as o,Ht as p,vt as q,mt as r,ke as s,ae as t,M as u,gt as v,Ze as w,Xt as x,St as y,Ut as z};
