import{a as Fi,b as Ri}from"./chunk-HLQT6O4G.js";import{c as Yi,e as Zi,f as Xi,h as Ji,i as er,j as tr}from"./chunk-X2FDMOXW.js";import{a as Hi}from"./chunk-QIGM6TSW.js";import{d as $i,g as rr,h as qe,i as ar,k as mn}from"./chunk-OQ2H45M4.js";import{a as dr}from"./chunk-Y6H55YQJ.js";import{a as Wi}from"./chunk-P6HCEW7Z.js";import{d as sr}from"./chunk-L4U2PMEM.js";import{a as lr,b as cr}from"./chunk-4OOXOBPZ.js";import"./chunk-BLOVMM2Y.js";import{a as nr,b as ir}from"./chunk-CZHYTDVP.js";import{a as Di}from"./chunk-LA6YYEEI.js";import{a as qi,b as Ui}from"./chunk-C4GAS2UF.js";import{a as zi,b as Vi,d as Gi}from"./chunk-SY7IAV3K.js";import"./chunk-LXKCWBRE.js";import{a as ji,c as Qi,h as Ki}from"./chunk-7D7BGS3L.js";import{a as Pi,b as wt,c as St,d as Ai}from"./chunk-IKHJXAHC.js";import{A as Ct,B as Mt,C as nt,J as De,N as Bi,O as Li,a as Ke,d as xi,g as un,i as Et,j as Oi,o as Ii,p as Ni,s as Tt,v as hn}from"./chunk-YOIC3XAW.js";import{b as vt,c as Ti,d as Ci,e as Mi,f as ki}from"./chunk-F4H3OG4F.js";import"./chunk-GYIPRNUU.js";import"./chunk-ZHGL63VC.js";import{$a as q,$b as cn,Ac as wi,B as ai,Bc as Si,C as oi,Cc as Ei,D as rn,Da as E,Db as et,Ea as di,Eb as _t,Fa as ln,Fb as $,Gb as fi,Ha as ui,Hb as P,Hc as or,Ia as hi,Ib as de,Jb as tt,Kb as yt,N as an,Oa as I,P as ce,Pa as Qe,Qa as pt,Qb as Se,S as C,Sa as Xe,Sb as _i,U as si,V as Le,Vb as V,W as ze,Wb as G,Xa as mi,Y as fe,Z as ht,_ as m,_a as pi,ab as J,bb as ee,bc as yi,ca as _e,cb as gi,da as ye,db as gt,e as ge,eb as ft,fb as H,ga as on,gb as v,gc as Ae,ha as Ve,hb as S,ib as te,ic as ie,ka as be,la as Ge,m as ni,oa as li,p as nn,pa as je,pb as we,rb as U,sa as mt,tb as z,ua as ve,ub as ne,va as ci,vb as F,w as ii,wb as Pe,wc as bi,x as Ze,xb as Je,xc as vi,ya as sn,yb as Y,yc as dn,z as ri,zb as Z,zc as bt}from"./chunk-P7UKLSNY.js";import{a as Be,c as ti}from"./chunk-7CGTOI24.js";var b=(function(r){return r[r.State=0]="State",r[r.Transition=1]="Transition",r[r.Sequence=2]="Sequence",r[r.Group=3]="Group",r[r.Animate=4]="Animate",r[r.Keyframes=5]="Keyframes",r[r.Style=6]="Style",r[r.Trigger=7]="Trigger",r[r.Reference=8]="Reference",r[r.AnimateChild=9]="AnimateChild",r[r.AnimateRef=10]="AnimateRef",r[r.Query=11]="Query",r[r.Stagger=12]="Stagger",r})(b||{}),re="*";function ur(r,t=null){return{type:b.Sequence,steps:r,options:t}}function pn(r){return{type:b.Style,styles:r,offset:null}}var he=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Ue=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,n=0,i=0,a=this.players.length;a==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==a&&this._onFinish()}),o.onDestroy(()=>{++n==a&&this._onDestroy()}),o.onStart(()=>{++i==a&&this._onStart()})}),this.totalTime=this.players.reduce((o,s)=>Math.max(o,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(i)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},it="!";function hr(r){return new C(3e3,!1)}function wa(){return new C(3100,!1)}function Sa(){return new C(3101,!1)}function Ea(r){return new C(3001,!1)}function Ta(r){return new C(3003,!1)}function Ca(r){return new C(3004,!1)}function pr(r,t){return new C(3005,!1)}function gr(){return new C(3006,!1)}function fr(){return new C(3007,!1)}function _r(r,t){return new C(3008,!1)}function yr(r){return new C(3002,!1)}function br(r,t,e,n,i){return new C(3010,!1)}function vr(){return new C(3011,!1)}function wr(){return new C(3012,!1)}function Sr(){return new C(3200,!1)}function Er(){return new C(3202,!1)}function Tr(){return new C(3013,!1)}function Cr(r){return new C(3014,!1)}function Mr(r){return new C(3015,!1)}function kr(r){return new C(3016,!1)}function Pr(r,t){return new C(3404,!1)}function Ma(r){return new C(3502,!1)}function Ar(r){return new C(3503,!1)}function Dr(){return new C(3300,!1)}function xr(r){return new C(3504,!1)}function Or(r){return new C(3301,!1)}function Ir(r,t){return new C(3302,!1)}function Nr(r){return new C(3303,!1)}function Fr(r,t){return new C(3400,!1)}function Rr(r){return new C(3401,!1)}function Br(r){return new C(3402,!1)}function Lr(r,t){return new C(3505,!1)}function me(r){switch(r.length){case 0:return new he;case 1:return r[0];default:return new Ue(r)}}function yn(r,t,e=new Map,n=new Map){let i=[],a=[],o=-1,s=null;if(t.forEach(l=>{let c=l.get("offset"),u=c==o,d=u&&s||new Map;l.forEach((w,y)=>{let p=y,_=w;if(y!=="offset")switch(p=r.normalizePropertyName(p,i),_){case it:_=e.get(y);break;case re:_=n.get(y);break;default:_=r.normalizeStyleValue(y,p,_,i);break}d.set(p,_)}),u||a.push(d),s=d,o=c}),i.length)throw Ma(i);return a}function kt(r,t,e,n){switch(t){case"start":r.onStart(()=>n(e&&gn(e,"start",r)));break;case"done":r.onDone(()=>n(e&&gn(e,"done",r)));break;case"destroy":r.onDestroy(()=>n(e&&gn(e,"destroy",r)));break}}function gn(r,t,e){let n=e.totalTime,i=!!e.disabled,a=Pt(r.element,r.triggerName,r.fromState,r.toState,t||r.phaseName,n??r.totalTime,i),o=r._data;return o!=null&&(a._data=o),a}function Pt(r,t,e,n,i="",a=0,o){return{element:r,triggerName:t,fromState:e,toState:n,phaseName:i,totalTime:a,disabled:!!o}}function j(r,t,e){let n=r.get(t);return n||r.set(t,n=e),n}function bn(r){let t=r.indexOf(":"),e=r.substring(1,t),n=r.slice(t+1);return[e,n]}var ka=typeof document>"u"?null:document.documentElement;function At(r){let t=r.parentNode||r.host||null;return t===ka?null:t}function Pa(r){return r.substring(1,6)=="ebkit"}var xe=null,mr=!1;function zr(r){xe||(xe=Aa()||{},mr=xe.style?"WebkitAppearance"in xe.style:!1);let t=!0;return xe.style&&!Pa(r)&&(t=r in xe.style,!t&&mr&&(t="Webkit"+r.charAt(0).toUpperCase()+r.slice(1)in xe.style)),t}function Aa(){return typeof document<"u"?document.body:null}function vn(r,t){for(;t;){if(t===r)return!0;t=At(t)}return!1}function wn(r,t,e){if(e)return Array.from(r.querySelectorAll(t));let n=r.querySelector(t);return n?[n]:[]}var Da=1e3,Sn="{{",xa="}}",En="ng-enter",Dt="ng-leave",rt="ng-trigger",at=".ng-trigger",Tn="ng-animating",xt=".ng-animating";function ue(r){if(typeof r=="number")return r;let t=r.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:fn(parseFloat(t[1]),t[2])}function fn(r,t){return t==="s"?r*Da:r}function ot(r,t,e){return r.hasOwnProperty("duration")?r:Ia(r,t,e)}var Oa=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Ia(r,t,e){let n,i=0,a="";if(typeof r=="string"){let o=r.match(Oa);if(o===null)return t.push(hr(r)),{duration:0,delay:0,easing:""};n=fn(parseFloat(o[1]),o[2]);let s=o[3];s!=null&&(i=fn(parseFloat(s),o[4]));let l=o[5];l&&(a=l)}else n=r;if(!e){let o=!1,s=t.length;n<0&&(t.push(wa()),o=!0),i<0&&(t.push(Sa()),o=!0),o&&t.splice(s,0,hr(r))}return{duration:n,delay:i,easing:a}}function Vr(r){return r.length?r[0]instanceof Map?r:r.map(t=>new Map(Object.entries(t))):[]}function ae(r,t,e){t.forEach((n,i)=>{let a=Ot(i);e&&!e.has(i)&&e.set(i,r.style[a]),r.style[a]=n})}function Ee(r,t){t.forEach((e,n)=>{let i=Ot(n);r.style[i]=""})}function $e(r){return Array.isArray(r)?r.length==1?r[0]:ur(r):r}function Gr(r,t,e){let n=t.params||{},i=Cn(r);i.length&&i.forEach(a=>{n.hasOwnProperty(a)||e.push(Ea(a))})}var _n=new RegExp(`${Sn}\\s*(.+?)\\s*${xa}`,"g");function Cn(r){let t=[];if(typeof r=="string"){let e;for(;e=_n.exec(r);)t.push(e[1]);_n.lastIndex=0}return t}function We(r,t,e){let n=`${r}`,i=n.replace(_n,(a,o)=>{let s=t[o];return s==null&&(e.push(Ta(o)),s=""),s.toString()});return i==n?r:i}var Na=/-+([a-z0-9])/g;function Ot(r){return r.replace(Na,(...t)=>t[1].toUpperCase())}function jr(r,t){return r===0||t===0}function Qr(r,t,e){if(e.size&&t.length){let n=t[0],i=[];if(e.forEach((a,o)=>{n.has(o)||i.push(o),n.set(o,a)}),i.length)for(let a=1;a<t.length;a++){let o=t[a];i.forEach(s=>o.set(s,It(r,s)))}}return t}function Q(r,t,e){switch(t.type){case b.Trigger:return r.visitTrigger(t,e);case b.State:return r.visitState(t,e);case b.Transition:return r.visitTransition(t,e);case b.Sequence:return r.visitSequence(t,e);case b.Group:return r.visitGroup(t,e);case b.Animate:return r.visitAnimate(t,e);case b.Keyframes:return r.visitKeyframes(t,e);case b.Style:return r.visitStyle(t,e);case b.Reference:return r.visitReference(t,e);case b.AnimateChild:return r.visitAnimateChild(t,e);case b.AnimateRef:return r.visitAnimateRef(t,e);case b.Query:return r.visitQuery(t,e);case b.Stagger:return r.visitStagger(t,e);default:throw Ca(t.type)}}function It(r,t){return window.getComputedStyle(r)[t]}var jn=(()=>{class r{validateStyleProperty(e){return zr(e)}containsElement(e,n){return vn(e,n)}getParentElement(e){return At(e)}query(e,n,i){return wn(e,n,i)}computeStyle(e,n,i){return i||""}animate(e,n,i,a,o,s=[],l){return new he(i,a)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=Le({token:r,factory:r.\u0275fac})}return r})(),Ie=class{static NOOP=new jn},Ne=class{};var Fa=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Lt=class extends Ne{normalizePropertyName(t,e){return Ot(t)}normalizeStyleValue(t,e,n,i){let a="",o=n.toString().trim();if(Fa.has(e)&&n!==0&&n!=="0")if(typeof n=="number")a="px";else{let s=n.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&i.push(pr(t,n))}return o+a}};var zt="*";function Ra(r,t){let e=[];return typeof r=="string"?r.split(/\s*,\s*/).forEach(n=>Ba(n,e,t)):e.push(r),e}function Ba(r,t,e){if(r[0]==":"){let l=La(r,e);if(typeof l=="function"){t.push(l);return}r=l}let n=r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return e.push(Mr(r)),t;let i=n[1],a=n[2],o=n[3];t.push(Kr(i,o));let s=i==zt&&o==zt;a[0]=="<"&&!s&&t.push(Kr(o,i))}function La(r,t){switch(r){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,n)=>parseFloat(n)>parseFloat(e);case":decrement":return(e,n)=>parseFloat(n)<parseFloat(e);default:return t.push(kr(r)),"* => *"}}var Nt=new Set(["true","1"]),Ft=new Set(["false","0"]);function Kr(r,t){let e=Nt.has(r)||Ft.has(r),n=Nt.has(t)||Ft.has(t);return(i,a)=>{let o=r==zt||r==i,s=t==zt||t==a;return!o&&e&&typeof i=="boolean"&&(o=i?Nt.has(r):Ft.has(r)),!s&&n&&typeof a=="boolean"&&(s=a?Nt.has(t):Ft.has(t)),o&&s}}var ea=":self",za=new RegExp(`s*${ea}s*,?`,"g");function ta(r,t,e,n){return new xn(r).build(t,e,n)}var qr="",xn=class{_driver;constructor(t){this._driver=t}build(t,e,n){let i=new On(e);return this._resetContextStyleTimingState(i),Q(this,$e(t),i)}_resetContextStyleTimingState(t){t.currentQuerySelector=qr,t.collectedStyles=new Map,t.collectedStyles.set(qr,new Map),t.currentTime=0}visitTrigger(t,e){let n=e.queryCount=0,i=e.depCount=0,a=[],o=[];return t.name.charAt(0)=="@"&&e.errors.push(gr()),t.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==b.State){let l=s,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,a.push(this.visitState(l,e))}),l.name=c}else if(s.type==b.Transition){let l=this.visitTransition(s,e);n+=l.queryCount,i+=l.depCount,o.push(l)}else e.errors.push(fr())}),{type:b.Trigger,name:t.name,states:a,transitions:o,queryCount:n,depCount:i,options:null}}visitState(t,e){let n=this.visitStyle(t.styles,e),i=t.options&&t.options.params||null;if(n.containsDynamicStyles){let a=new Set,o=i||{};n.styles.forEach(s=>{s instanceof Map&&s.forEach(l=>{Cn(l).forEach(c=>{o.hasOwnProperty(c)||a.add(c)})})}),a.size&&e.errors.push(_r(t.name,[...a.values()]))}return{type:b.State,name:t.name,style:n,options:i?{params:i}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;let n=Q(this,$e(t.animation),e),i=Ra(t.expr,e.errors);return{type:b.Transition,matchers:i,animation:n,queryCount:e.queryCount,depCount:e.depCount,options:Oe(t.options)}}visitSequence(t,e){return{type:b.Sequence,steps:t.steps.map(n=>Q(this,n,e)),options:Oe(t.options)}}visitGroup(t,e){let n=e.currentTime,i=0,a=t.steps.map(o=>{e.currentTime=n;let s=Q(this,o,e);return i=Math.max(i,e.currentTime),s});return e.currentTime=i,{type:b.Group,steps:a,options:Oe(t.options)}}visitAnimate(t,e){let n=Qa(t.timings,e.errors);e.currentAnimateTimings=n;let i,a=t.styles?t.styles:pn({});if(a.type==b.Keyframes)i=this.visitKeyframes(a,e);else{let o=t.styles,s=!1;if(!o){s=!0;let c={};n.easing&&(c.easing=n.easing),o=pn(c)}e.currentTime+=n.duration+n.delay;let l=this.visitStyle(o,e);l.isEmptyStep=s,i=l}return e.currentAnimateTimings=null,{type:b.Animate,timings:n,style:i,options:null}}visitStyle(t,e){let n=this._makeStyleAst(t,e);return this._validateStyleAst(n,e),n}_makeStyleAst(t,e){let n=[],i=Array.isArray(t.styles)?t.styles:[t.styles];for(let s of i)typeof s=="string"?s===re?n.push(s):e.errors.push(yr(s)):n.push(new Map(Object.entries(s)));let a=!1,o=null;return n.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(o=s.get("easing"),s.delete("easing")),!a)){for(let l of s.values())if(l.toString().indexOf(Sn)>=0){a=!0;break}}}),{type:b.Style,styles:n,easing:o,offset:t.offset,containsDynamicStyles:a,options:null}}_validateStyleAst(t,e){let n=e.currentAnimateTimings,i=e.currentTime,a=e.currentTime;n&&a>0&&(a-=n.duration+n.delay),t.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),u=c.get(l),d=!0;u&&(a!=i&&a>=u.startTime&&i<=u.endTime&&(e.errors.push(br(l,u.startTime,u.endTime,a,i)),d=!1),a=u.startTime),d&&c.set(l,{startTime:a,endTime:i}),e.options&&Gr(s,e.options,e.errors)})})}visitKeyframes(t,e){let n={type:b.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(vr()),n;let i=1,a=0,o=[],s=!1,l=!1,c=0,u=t.steps.map(A=>{let D=this._makeStyleAst(A,e),R=D.offset!=null?D.offset:ja(D.styles),O=0;return R!=null&&(a++,O=D.offset=R),l=l||O<0||O>1,s=s||O<c,c=O,o.push(O),D});l&&e.errors.push(wr()),s&&e.errors.push(Sr());let d=t.steps.length,w=0;a>0&&a<d?e.errors.push(Er()):a==0&&(w=i/(d-1));let y=d-1,p=e.currentTime,_=e.currentAnimateTimings,M=_.duration;return u.forEach((A,D)=>{let R=w>0?D==y?1:w*D:o[D],O=R*M;e.currentTime=p+_.delay+O,_.duration=O,this._validateStyleAst(A,e),A.offset=R,n.styles.push(A)}),n}visitReference(t,e){return{type:b.Reference,animation:Q(this,$e(t.animation),e),options:Oe(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:b.AnimateChild,options:Oe(t.options)}}visitAnimateRef(t,e){return{type:b.AnimateRef,animation:this.visitReference(t.animation,e),options:Oe(t.options)}}visitQuery(t,e){let n=e.currentQuerySelector,i=t.options||{};e.queryCount++,e.currentQuery=t;let[a,o]=Va(t.selector);e.currentQuerySelector=n.length?n+" "+a:a,j(e.collectedStyles,e.currentQuerySelector,new Map);let s=Q(this,$e(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=n,{type:b.Query,selector:a,limit:i.limit||0,optional:!!i.optional,includeSelf:o,animation:s,originalSelector:t.selector,options:Oe(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push(Tr());let n=t.timings==="full"?{duration:0,delay:0,easing:"full"}:ot(t.timings,e.errors,!0);return{type:b.Stagger,animation:Q(this,$e(t.animation),e),timings:n,options:null}}};function Va(r){let t=!!r.split(/\s*,\s*/).find(e=>e==ea);return t&&(r=r.replace(za,"")),r=r.replace(/@\*/g,at).replace(/@\w+/g,e=>at+"-"+e.slice(1)).replace(/:animating/g,xt),[r,t]}function Ga(r){return r?Be({},r):null}var On=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(t){this.errors=t}};function ja(r){if(typeof r=="string")return null;let t=null;if(Array.isArray(r))r.forEach(e=>{if(e instanceof Map&&e.has("offset")){let n=e;t=parseFloat(n.get("offset")),n.delete("offset")}});else if(r instanceof Map&&r.has("offset")){let e=r;t=parseFloat(e.get("offset")),e.delete("offset")}return t}function Qa(r,t){if(r.hasOwnProperty("duration"))return r;if(typeof r=="number"){let a=ot(r,t).duration;return Mn(a,0,"")}let e=r;if(e.split(/\s+/).some(a=>a.charAt(0)=="{"&&a.charAt(1)=="{")){let a=Mn(0,0,"");return a.dynamic=!0,a.strValue=e,a}let i=ot(e,t);return Mn(i.duration,i.delay,i.easing)}function Oe(r){return r?(r=Be({},r),r.params&&(r.params=Ga(r.params))):r={},r}function Mn(r,t,e){return{duration:r,delay:t,easing:e}}function Qn(r,t,e,n,i,a,o=null,s=!1){return{type:1,element:r,keyframes:t,preStyleProps:e,postStyleProps:n,duration:i,delay:a,totalTime:i+a,easing:o,subTimeline:s}}var lt=class{_map=new Map;get(t){return this._map.get(t)||[]}append(t,e){let n=this._map.get(t);n||this._map.set(t,n=[]),n.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}},Ka=1,qa=":enter",Ua=new RegExp(qa,"g"),$a=":leave",Wa=new RegExp($a,"g");function na(r,t,e,n,i,a=new Map,o=new Map,s,l,c=[]){return new In().buildKeyframes(r,t,e,n,i,a,o,s,l,c)}var In=class{buildKeyframes(t,e,n,i,a,o,s,l,c,u=[]){c=c||new lt;let d=new Nn(t,e,c,i,a,u,[]);d.options=l;let w=l.delay?ue(l.delay):0;d.currentTimeline.delayNextStep(w),d.currentTimeline.setStyles([o],null,d.errors,l),Q(this,n,d);let y=d.timelines.filter(p=>p.containsAnimation());if(y.length&&s.size){let p;for(let _=y.length-1;_>=0;_--){let M=y[_];if(M.element===e){p=M;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([s],null,d.errors,l)}return y.length?y.map(p=>p.buildKeyframes()):[Qn(e,[],[],[],0,w,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){let n=e.subInstructions.get(e.element);if(n){let i=e.createSubContext(t.options),a=e.currentTimeline.currentTime,o=this._visitSubInstructions(n,i,i.options);a!=o&&e.transformIntoNewTimeline(o)}e.previousNode=t}visitAnimateRef(t,e){let n=e.createSubContext(t.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([t.options,t.animation.options],e,n),this.visitReference(t.animation,n),e.transformIntoNewTimeline(n.currentTimeline.currentTime),e.previousNode=t}_applyAnimationRefDelays(t,e,n){for(let i of t){let a=i?.delay;if(a){let o=typeof a=="number"?a:ue(We(a,i?.params??{},e.errors));n.delayNextStep(o)}}}_visitSubInstructions(t,e,n){let a=e.currentTimeline.currentTime,o=n.duration!=null?ue(n.duration):null,s=n.delay!=null?ue(n.delay):null;return o!==0&&t.forEach(l=>{let c=e.appendInstructionToTimeline(l,o,s);a=Math.max(a,c.duration+c.delay)}),a}visitReference(t,e){e.updateOptions(t.options,!0),Q(this,t.animation,e),e.previousNode=t}visitSequence(t,e){let n=e.subContextCount,i=e,a=t.options;if(a&&(a.params||a.delay)&&(i=e.createSubContext(a),i.transformIntoNewTimeline(),a.delay!=null)){i.previousNode.type==b.Style&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=Vt);let o=ue(a.delay);i.delayNextStep(o)}t.steps.length&&(t.steps.forEach(o=>Q(this,o,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>n&&i.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){let n=[],i=e.currentTimeline.currentTime,a=t.options&&t.options.delay?ue(t.options.delay):0;t.steps.forEach(o=>{let s=e.createSubContext(t.options);a&&s.delayNextStep(a),Q(this,o,s),i=Math.max(i,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(o=>e.currentTimeline.mergeTimelineCollectedStyles(o)),e.transformIntoNewTimeline(i),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){let n=t.strValue,i=e.params?We(n,e.params,e.errors):n;return ot(i,e.errors)}else return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){let n=e.currentAnimateTimings=this._visitTiming(t.timings,e),i=e.currentTimeline;n.delay&&(e.incrementTime(n.delay),i.snapshotCurrentStyles());let a=t.style;a.type==b.Keyframes?this.visitKeyframes(a,e):(e.incrementTime(n.duration),this.visitStyle(a,e),i.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){let n=e.currentTimeline,i=e.currentAnimateTimings;!i&&n.hasCurrentStyleProperties()&&n.forwardFrame();let a=i&&i.easing||t.easing;t.isEmptyStep?n.applyEmptyStep(a):n.setStyles(t.styles,a,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){let n=e.currentAnimateTimings,i=e.currentTimeline.duration,a=n.duration,s=e.createSubContext().currentTimeline;s.easing=n.easing,t.styles.forEach(l=>{let c=l.offset||0;s.forwardTime(c*a),s.setStyles(l.styles,l.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(i+a),e.previousNode=t}visitQuery(t,e){let n=e.currentTimeline.currentTime,i=t.options||{},a=i.delay?ue(i.delay):0;a&&(e.previousNode.type===b.Style||n==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Vt);let o=n,s=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!i.optional,e.errors);e.currentQueryTotal=s.length;let l=null;s.forEach((c,u)=>{e.currentQueryIndex=u;let d=e.createSubContext(t.options,c);a&&d.delayNextStep(a),c===e.element&&(l=d.currentTimeline),Q(this,t.animation,d),d.currentTimeline.applyStylesToKeyframe();let w=d.currentTimeline.currentTime;o=Math.max(o,w)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(o),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){let n=e.parentContext,i=e.currentTimeline,a=t.timings,o=Math.abs(a.duration),s=o*(e.currentQueryTotal-1),l=o*e.currentQueryIndex;switch(a.duration<0?"reverse":a.easing){case"reverse":l=s-l;break;case"full":l=n.currentStaggerTime;break}let u=e.currentTimeline;l&&u.delayNextStep(l);let d=u.currentTime;Q(this,t.animation,e),e.previousNode=t,n.currentStaggerTime=i.currentTime-d+(i.startTime-n.currentTimeline.startTime)}},Vt={},Nn=class r{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Vt;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(t,e,n,i,a,o,s,l){this._driver=t,this.element=e,this.subInstructions=n,this._enterClassName=i,this._leaveClassName=a,this.errors=o,this.timelines=s,this.currentTimeline=l||new Gt(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;let n=t,i=this.options;n.duration!=null&&(i.duration=ue(n.duration)),n.delay!=null&&(i.delay=ue(n.delay));let a=n.params;if(a){let o=i.params;o||(o=this.options.params={}),Object.keys(a).forEach(s=>{(!e||!o.hasOwnProperty(s))&&(o[s]=We(a[s],o,this.errors))})}}_copyOptions(){let t={};if(this.options){let e=this.options.params;if(e){let n=t.params={};Object.keys(e).forEach(i=>{n[i]=e[i]})}}return t}createSubContext(t=null,e,n){let i=e||this.element,a=new r(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,n||0));return a.previousNode=this.previousNode,a.currentAnimateTimings=this.currentAnimateTimings,a.options=this._copyOptions(),a.updateOptions(t),a.currentQueryIndex=this.currentQueryIndex,a.currentQueryTotal=this.currentQueryTotal,a.parentContext=this,this.subContextCount++,a}transformIntoNewTimeline(t){return this.previousNode=Vt,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,n){let i={duration:e??t.duration,delay:this.currentTimeline.currentTime+(n??0)+t.delay,easing:""},a=new Fn(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,i,t.stretchStartingKeyframe);return this.timelines.push(a),i}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,n,i,a,o){let s=[];if(i&&s.push(this.element),t.length>0){t=t.replace(Ua,"."+this._enterClassName),t=t.replace(Wa,"."+this._leaveClassName);let l=n!=1,c=this._driver.query(this.element,t,l);n!==0&&(c=n<0?c.slice(c.length+n,c.length):c.slice(0,n)),s.push(...c)}return!a&&s.length==0&&o.push(Cr(e)),s}},Gt=class r{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(t,e,n,i){this._driver=t,this.element=e,this.startTime=n,this._elementTimelineStylesLookup=i,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(t){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new r(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ka,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles.set(t,e),this._globalTimelineStyles.set(t,e),this._styleSummary.set(t,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&this._previousKeyframe.set("easing",t);for(let[e,n]of this._globalTimelineStyles)this._backFill.set(e,n||re),this._currentKeyframe.set(e,re);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,n,i){e&&this._previousKeyframe.set("easing",e);let a=i&&i.params||{},o=Ha(t,this._globalTimelineStyles);for(let[s,l]of o){let c=We(l,a,n);this._pendingStyles.set(s,c),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??re),this._updateStyle(s,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((t,e)=>{this._currentKeyframe.set(e,t)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((t,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,t)}))}snapshotCurrentStyles(){for(let[t,e]of this._localTimelineStyles)this._pendingStyles.set(t,e),this._updateStyle(t,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){t._styleSummary.forEach((e,n)=>{let i=this._styleSummary.get(n);(!i||e.time>i.time)&&this._updateStyle(n,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let t=new Set,e=new Set,n=this._keyframes.size===1&&this.duration===0,i=[];this._keyframes.forEach((s,l)=>{let c=new Map([...this._backFill,...s]);c.forEach((u,d)=>{u===it?t.add(d):u===re&&e.add(d)}),n||c.set("offset",l/this.duration),i.push(c)});let a=[...t.values()],o=[...e.values()];if(n){let s=i[0],l=new Map(s);s.set("offset",0),l.set("offset",1),i=[s,l]}return Qn(this.element,i,a,o,this.duration,this.startTime,this.easing,!1)}},Fn=class extends Gt{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(t,e,n,i,a,o,s=!1){super(t,e,o.delay),this.keyframes=n,this.preStyleProps=i,this.postStyleProps=a,this._stretchStartingKeyframe=s,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:n,easing:i}=this.timings;if(this._stretchStartingKeyframe&&e){let a=[],o=n+e,s=e/o,l=new Map(t[0]);l.set("offset",0),a.push(l);let c=new Map(t[0]);c.set("offset",Ur(s)),a.push(c);let u=t.length-1;for(let d=1;d<=u;d++){let w=new Map(t[d]),y=w.get("offset"),p=e+y*n;w.set("offset",Ur(p/o)),a.push(w)}n=o,e=0,i="",t=a}return Qn(this.element,t,this.preStyleProps,this.postStyleProps,n,e,i,!0)}};function Ur(r,t=3){let e=Math.pow(10,t-1);return Math.round(r*e)/e}function Ha(r,t){let e=new Map,n;return r.forEach(i=>{if(i==="*"){n??=t.keys();for(let a of n)e.set(a,re)}else for(let[a,o]of i)e.set(a,o)}),e}function $r(r,t,e,n,i,a,o,s,l,c,u,d,w){return{type:0,element:r,triggerName:t,isRemovalTransition:i,fromState:e,fromStyles:a,toState:n,toStyles:o,timelines:s,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:w}}var kn={},jt=class{_triggerName;ast;_stateStyles;constructor(t,e,n){this._triggerName=t,this.ast=e,this._stateStyles=n}match(t,e,n,i){return Ya(this.ast.matchers,t,e,n,i)}buildStyles(t,e,n){let i=this._stateStyles.get("*");return t!==void 0&&(i=this._stateStyles.get(t?.toString())||i),i?i.buildStyles(e,n):new Map}build(t,e,n,i,a,o,s,l,c,u){let d=[],w=this.ast.options&&this.ast.options.params||kn,y=s&&s.params||kn,p=this.buildStyles(n,y,d),_=l&&l.params||kn,M=this.buildStyles(i,_,d),A=new Set,D=new Map,R=new Map,O=i==="void",Fe={params:ia(_,w),delay:this.ast.options?.delay},se=u?[]:na(t,e,this.ast.animation,a,o,p,M,Fe,c,d),B=0;return se.forEach(L=>{B=Math.max(L.duration+L.delay,B)}),d.length?$r(e,this._triggerName,n,i,O,p,M,[],[],D,R,B,d):(se.forEach(L=>{let Ce=L.element,Re=j(D,Ce,new Set);L.preStyleProps.forEach(Me=>Re.add(Me));let Zn=j(R,Ce,new Set);L.postStyleProps.forEach(Me=>Zn.add(Me)),Ce!==e&&A.add(Ce)}),$r(e,this._triggerName,n,i,O,p,M,se,[...A.values()],D,R,B))}};function Ya(r,t,e,n,i){return r.some(a=>a(t,e,n,i))}function ia(r,t){let e=Be({},t);return Object.entries(r).forEach(([n,i])=>{i!=null&&(e[n]=i)}),e}var Rn=class{styles;defaultParams;normalizer;constructor(t,e,n){this.styles=t,this.defaultParams=e,this.normalizer=n}buildStyles(t,e){let n=new Map,i=ia(t,this.defaultParams);return this.styles.styles.forEach(a=>{typeof a!="string"&&a.forEach((o,s)=>{o&&(o=We(o,i,e));let l=this.normalizer.normalizePropertyName(s,e);o=this.normalizer.normalizeStyleValue(s,l,o,e),n.set(s,o)})}),n}};function Za(r,t,e){return new Bn(r,t,e)}var Bn=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(t,e,n){this.name=t,this.ast=e,this._normalizer=n,e.states.forEach(i=>{let a=i.options&&i.options.params||{};this.states.set(i.name,new Rn(i.style,a,n))}),Wr(this.states,"true","1"),Wr(this.states,"false","0"),e.transitions.forEach(i=>{this.transitionFactories.push(new jt(t,i,this.states))}),this.fallbackTransition=Xa(t,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,n,i){return this.transitionFactories.find(o=>o.match(t,e,n,i))||null}matchStyles(t,e,n){return this.fallbackTransition.buildStyles(t,e,n)}};function Xa(r,t,e){let n=[(o,s)=>!0],i={type:b.Sequence,steps:[],options:null},a={type:b.Transition,animation:i,matchers:n,options:null,queryCount:0,depCount:0};return new jt(r,a,t)}function Wr(r,t,e){r.has(t)?r.has(e)||r.set(e,r.get(t)):r.has(e)&&r.set(t,r.get(e))}var Ja=new lt,Ln=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(t,e,n){this.bodyNode=t,this._driver=e,this._normalizer=n}register(t,e){let n=[],i=[],a=ta(this._driver,e,n,i);if(n.length)throw Ar(n);this._animations.set(t,a)}_buildPlayer(t,e,n){let i=t.element,a=yn(this._normalizer,t.keyframes,e,n);return this._driver.animate(i,a,t.duration,t.delay,t.easing,[],!0)}create(t,e,n={}){let i=[],a=this._animations.get(t),o,s=new Map;if(a?(o=na(this._driver,e,a,En,Dt,new Map,new Map,n,Ja,i),o.forEach(u=>{let d=j(s,u.element,new Map);u.postStyleProps.forEach(w=>d.set(w,null))})):(i.push(Dr()),o=[]),i.length)throw xr(i);s.forEach((u,d)=>{u.forEach((w,y)=>{u.set(y,this._driver.computeStyle(d,y,re))})});let l=o.map(u=>{let d=s.get(u.element);return this._buildPlayer(u,new Map,d)}),c=me(l);return this._playersById.set(t,c),c.onDestroy(()=>this.destroy(t)),this.players.push(c),c}destroy(t){let e=this._getPlayer(t);e.destroy(),this._playersById.delete(t);let n=this.players.indexOf(e);n>=0&&this.players.splice(n,1)}_getPlayer(t){let e=this._playersById.get(t);if(!e)throw Or(t);return e}listen(t,e,n,i){let a=Pt(e,"","","");return kt(this._getPlayer(t),n,a,i),()=>{}}command(t,e,n,i){if(n=="register"){this.register(t,i[0]);return}if(n=="create"){let o=i[0]||{};this.create(t,e,o);return}let a=this._getPlayer(t);switch(n){case"play":a.play();break;case"pause":a.pause();break;case"reset":a.reset();break;case"restart":a.restart();break;case"finish":a.finish();break;case"init":a.init();break;case"setPosition":a.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(t);break}}},Hr="ng-animate-queued",eo=".ng-animate-queued",Pn="ng-animate-disabled",to=".ng-animate-disabled",no="ng-star-inserted",io=".ng-star-inserted",ro=[],ra={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ao={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},oe="__ng_removed",ct=class{namespaceId;value;options;get params(){return this.options.params}constructor(t,e=""){this.namespaceId=e;let n=t&&t.hasOwnProperty("value"),i=n?t.value:t;if(this.value=so(i),n){let a=t,{value:o}=a,s=ti(a,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(t){let e=t.params;if(e){let n=this.options.params;Object.keys(e).forEach(i=>{n[i]==null&&(n[i]=e[i])})}}},st="void",An=new ct(st),zn=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(t,e,n){this.id=t,this.hostElement=e,this._engine=n,this._hostClassName="ng-tns-"+t,X(e,this._hostClassName)}listen(t,e,n,i){if(!this._triggers.has(e))throw Ir(n,e);if(n==null||n.length==0)throw Nr(e);if(!lo(n))throw Fr(n,e);let a=j(this._elementListeners,t,[]),o={name:e,phase:n,callback:i};a.push(o);let s=j(this._engine.statesByElement,t,new Map);return s.has(e)||(X(t,rt),X(t,rt+"-"+e),s.set(e,An)),()=>{this._engine.afterFlush(()=>{let l=a.indexOf(o);l>=0&&a.splice(l,1),this._triggers.has(e)||s.delete(e)})}}register(t,e){return this._triggers.has(t)?!1:(this._triggers.set(t,e),!0)}_getTrigger(t){let e=this._triggers.get(t);if(!e)throw Rr(t);return e}trigger(t,e,n,i=!0){let a=this._getTrigger(e),o=new dt(this.id,e,t),s=this._engine.statesByElement.get(t);s||(X(t,rt),X(t,rt+"-"+e),this._engine.statesByElement.set(t,s=new Map));let l=s.get(e),c=new ct(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),s.set(e,c),l||(l=An),!(c.value===st)&&l.value===c.value){if(!ho(l.params,c.params)){let _=[],M=a.matchStyles(l.value,l.params,_),A=a.matchStyles(c.value,c.params,_);_.length?this._engine.reportError(_):this._engine.afterFlush(()=>{Ee(t,M),ae(t,A)})}return}let w=j(this._engine.playersByElement,t,[]);w.forEach(_=>{_.namespaceId==this.id&&_.triggerName==e&&_.queued&&_.destroy()});let y=a.matchTransition(l.value,c.value,t,c.params),p=!1;if(!y){if(!i)return;y=a.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:y,fromState:l,toState:c,player:o,isFallbackTransition:p}),p||(X(t,Hr),o.onStart(()=>{He(t,Hr)})),o.onDone(()=>{let _=this.players.indexOf(o);_>=0&&this.players.splice(_,1);let M=this._engine.playersByElement.get(t);if(M){let A=M.indexOf(o);A>=0&&M.splice(A,1)}}),this.players.push(o),w.push(o),o}deregister(t){this._triggers.delete(t),this._engine.statesByElement.forEach(e=>e.delete(t)),this._elementListeners.forEach((e,n)=>{this._elementListeners.set(n,e.filter(i=>i.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);let e=this._engine.playersByElement.get(t);e&&(e.forEach(n=>n.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){let n=this._engine.driver.query(t,at,!0);n.forEach(i=>{if(i[oe])return;let a=this._engine.fetchNamespacesByElement(i);a.size?a.forEach(o=>o.triggerLeaveAnimation(i,e,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(t,e,n,i){let a=this._engine.statesByElement.get(t),o=new Map;if(a){let s=[];if(a.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let u=this.trigger(t,c,st,i);u&&s.push(u)}}),s.length)return this._engine.markElementAsRemoved(this.id,t,!0,e,o),n&&me(s).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){let e=this._elementListeners.get(t),n=this._engine.statesByElement.get(t);if(e&&n){let i=new Set;e.forEach(a=>{let o=a.name;if(i.has(o))return;i.add(o);let l=this._triggers.get(o).fallbackTransition,c=n.get(o)||An,u=new ct(st),d=new dt(this.id,o,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(t,e){let n=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let i=!1;if(n.totalAnimations){let a=n.players.length?n.playersByQueriedElement.get(t):[];if(a&&a.length)i=!0;else{let o=t;for(;o=o.parentNode;)if(n.statesByElement.get(o)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(t),i)n.markElementAsRemoved(this.id,t,!1,e);else{let a=t[oe];(!a||a===ra)&&(n.afterFlush(()=>this.clearElementCache(t)),n.destroyInnerAnimations(t),n._onRemovalComplete(t,e))}}insertNode(t,e){X(t,this._hostClassName)}drainQueuedTransitions(t){let e=[];return this._queue.forEach(n=>{let i=n.player;if(i.destroyed)return;let a=n.element,o=this._elementListeners.get(a);o&&o.forEach(s=>{if(s.name==n.triggerName){let l=Pt(a,n.triggerName,n.fromState.value,n.toState.value);l._data=t,kt(n.player,s.phase,l,s.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):e.push(n)}),this._queue=[],e.sort((n,i)=>{let a=n.transition.ast.depCount,o=i.transition.ast.depCount;return a==0||o==0?a-o:this._engine.driver.containsElement(n.element,i.element)?1:-1})}destroy(t){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}},Vn=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(t,e)=>{};_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}constructor(t,e,n){this.bodyNode=t,this.driver=e,this._normalizer=n}get queuedPlayers(){let t=[];return this._namespaceList.forEach(e=>{e.players.forEach(n=>{n.queued&&t.push(n)})}),t}createNamespace(t,e){let n=new zn(t,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(n,e):(this.newHostElements.set(e,n),this.collectEnterElement(e)),this._namespaceLookup[t]=n}_balanceNamespaceList(t,e){let n=this._namespaceList,i=this.namespacesByHostElement;if(n.length-1>=0){let o=!1,s=this.driver.getParentElement(e);for(;s;){let l=i.get(s);if(l){let c=n.indexOf(l);n.splice(c+1,0,t),o=!0;break}s=this.driver.getParentElement(s)}o||n.unshift(t)}else n.push(t);return i.set(e,t),t}register(t,e){let n=this._namespaceLookup[t];return n||(n=this.createNamespace(t,e)),n}registerTrigger(t,e,n){let i=this._namespaceLookup[t];i&&i.register(e,n)&&this.totalAnimations++}destroy(t,e){t&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(t);this.namespacesByHostElement.delete(n.hostElement);let i=this._namespaceList.indexOf(n);i>=0&&this._namespaceList.splice(i,1),n.destroy(e),delete this._namespaceLookup[t]}))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){let e=new Set,n=this.statesByElement.get(t);if(n){for(let i of n.values())if(i.namespaceId){let a=this._fetchNamespace(i.namespaceId);a&&e.add(a)}}return e}trigger(t,e,n,i){if(Rt(e)){let a=this._fetchNamespace(t);if(a)return a.trigger(e,n,i),!0}return!1}insertNode(t,e,n,i){if(!Rt(e))return;let a=e[oe];if(a&&a.setForRemoval){a.setForRemoval=!1,a.setForMove=!0;let o=this.collectedLeaveElements.indexOf(e);o>=0&&this.collectedLeaveElements.splice(o,1)}if(t){let o=this._fetchNamespace(t);o&&o.insertNode(e,n)}i&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),X(t,Pn)):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),He(t,Pn))}removeNode(t,e,n){if(Rt(e)){let i=t?this._fetchNamespace(t):null;i?i.removeNode(e,n):this.markElementAsRemoved(t,e,!1,n);let a=this.namespacesByHostElement.get(e);a&&a.id!==t&&a.removeNode(e,n)}else this._onRemovalComplete(e,n)}markElementAsRemoved(t,e,n,i,a){this.collectedLeaveElements.push(e),e[oe]={namespaceId:t,setForRemoval:i,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:a}}listen(t,e,n,i,a){return Rt(e)?this._fetchNamespace(t).listen(e,n,i,a):()=>{}}_buildInstruction(t,e,n,i,a){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,n,i,t.fromState.options,t.toState.options,e,a)}destroyInnerAnimations(t){let e=this.driver.query(t,at,!0);e.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(t,xt,!0),e.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(t){let e=this.playersByElement.get(t);e&&e.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(t){let e=this.playersByQueriedElement.get(t);e&&e.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return me(this.players).onDone(()=>t());t()})}processLeaveNode(t){let e=t[oe];if(e&&e.setForRemoval){if(t[oe]=ra,e.namespaceId){this.destroyInnerAnimations(t);let n=this._fetchNamespace(e.namespaceId);n&&n.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}t.classList?.contains(Pn)&&this.markElementAsDisabled(t,!1),this.driver.query(t,to,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,i)=>this._balanceNamespaceList(n,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let i=this.collectedEnterElements[n];X(i,no)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{e=this._flushAnimations(n,t)}finally{for(let i=0;i<n.length;i++)n[i]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let i=this.collectedLeaveElements[n];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],e.length?me(e).onDone(()=>{n.forEach(i=>i())}):n.forEach(i=>i())}}reportError(t){throw Br(t)}_flushAnimations(t,e){let n=new lt,i=[],a=new Map,o=[],s=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(h=>{u.add(h);let g=this.driver.query(h,eo,!0);for(let f=0;f<g.length;f++)u.add(g[f])});let d=this.bodyNode,w=Array.from(this.statesByElement.keys()),y=Xr(w,this.collectedEnterElements),p=new Map,_=0;y.forEach((h,g)=>{let f=En+_++;p.set(g,f),h.forEach(T=>X(T,f))});let M=[],A=new Set,D=new Set;for(let h=0;h<this.collectedLeaveElements.length;h++){let g=this.collectedLeaveElements[h],f=g[oe];f&&f.setForRemoval&&(M.push(g),A.add(g),f.hasAnimation?this.driver.query(g,io,!0).forEach(T=>A.add(T)):D.add(g))}let R=new Map,O=Xr(w,Array.from(A));O.forEach((h,g)=>{let f=Dt+_++;R.set(g,f),h.forEach(T=>X(T,f))}),t.push(()=>{y.forEach((h,g)=>{let f=p.get(g);h.forEach(T=>He(T,f))}),O.forEach((h,g)=>{let f=R.get(g);h.forEach(T=>He(T,f))}),M.forEach(h=>{this.processLeaveNode(h)})});let Fe=[],se=[];for(let h=this._namespaceList.length-1;h>=0;h--)this._namespaceList[h].drainQueuedTransitions(e).forEach(f=>{let T=f.player,x=f.element;if(Fe.push(T),this.collectedEnterElements.length){let N=x[oe];if(N&&N.setForMove){if(N.previousTriggersValues&&N.previousTriggersValues.has(f.triggerName)){let ke=N.previousTriggersValues.get(f.triggerName),W=this.statesByElement.get(f.element);if(W&&W.has(f.triggerName)){let ut=W.get(f.triggerName);ut.value=ke,W.set(f.triggerName,ut)}}T.destroy();return}}let le=!d||!this.driver.containsElement(d,x),K=R.get(x),pe=p.get(x),k=this._buildInstruction(f,n,pe,K,le);if(k.errors&&k.errors.length){se.push(k);return}if(le){T.onStart(()=>Ee(x,k.fromStyles)),T.onDestroy(()=>ae(x,k.toStyles)),i.push(T);return}if(f.isFallbackTransition){T.onStart(()=>Ee(x,k.fromStyles)),T.onDestroy(()=>ae(x,k.toStyles)),i.push(T);return}let ei=[];k.timelines.forEach(N=>{N.stretchStartingKeyframe=!0,this.disabledNodes.has(N.element)||ei.push(N)}),k.timelines=ei,n.append(x,k.timelines);let va={instruction:k,player:T,element:x};o.push(va),k.queriedElements.forEach(N=>j(s,N,[]).push(T)),k.preStyleProps.forEach((N,ke)=>{if(N.size){let W=l.get(ke);W||l.set(ke,W=new Set),N.forEach((ut,tn)=>W.add(tn))}}),k.postStyleProps.forEach((N,ke)=>{let W=c.get(ke);W||c.set(ke,W=new Set),N.forEach((ut,tn)=>W.add(tn))})});if(se.length){let h=[];se.forEach(g=>{h.push(Lr(g.triggerName,g.errors))}),Fe.forEach(g=>g.destroy()),this.reportError(h)}let B=new Map,L=new Map;o.forEach(h=>{let g=h.element;n.has(g)&&(L.set(g,g),this._beforeAnimationBuild(h.player.namespaceId,h.instruction,B))}),i.forEach(h=>{let g=h.element;this._getPreviousPlayers(g,!1,h.namespaceId,h.triggerName,null).forEach(T=>{j(B,g,[]).push(T),T.destroy()})});let Ce=M.filter(h=>Jr(h,l,c)),Re=new Map;Zr(Re,this.driver,D,c,re).forEach(h=>{Jr(h,l,c)&&Ce.push(h)});let Me=new Map;y.forEach((h,g)=>{Zr(Me,this.driver,new Set(h),l,it)}),Ce.forEach(h=>{let g=Re.get(h),f=Me.get(h);Re.set(h,new Map([...g?.entries()??[],...f?.entries()??[]]))});let en=[],Xn=[],Jn={};o.forEach(h=>{let{element:g,player:f,instruction:T}=h;if(n.has(g)){if(u.has(g)){f.onDestroy(()=>ae(g,T.toStyles)),f.disabled=!0,f.overrideTotalTime(T.totalTime),i.push(f);return}let x=Jn;if(L.size>1){let K=g,pe=[];for(;K=K.parentNode;){let k=L.get(K);if(k){x=k;break}pe.push(K)}pe.forEach(k=>L.set(k,x))}let le=this._buildAnimation(f.namespaceId,T,B,a,Me,Re);if(f.setRealPlayer(le),x===Jn)en.push(f);else{let K=this.playersByElement.get(x);K&&K.length&&(f.parentPlayer=me(K)),i.push(f)}}else Ee(g,T.fromStyles),f.onDestroy(()=>ae(g,T.toStyles)),Xn.push(f),u.has(g)&&i.push(f)}),Xn.forEach(h=>{let g=a.get(h.element);if(g&&g.length){let f=me(g);h.setRealPlayer(f)}}),i.forEach(h=>{h.parentPlayer?h.syncPlayerEvents(h.parentPlayer):h.destroy()});for(let h=0;h<M.length;h++){let g=M[h],f=g[oe];if(He(g,Dt),f&&f.hasAnimation)continue;let T=[];if(s.size){let le=s.get(g);le&&le.length&&T.push(...le);let K=this.driver.query(g,xt,!0);for(let pe=0;pe<K.length;pe++){let k=s.get(K[pe]);k&&k.length&&T.push(...k)}}let x=T.filter(le=>!le.destroyed);x.length?co(this,g,x):this.processLeaveNode(g)}return M.length=0,en.forEach(h=>{this.players.push(h),h.onDone(()=>{h.destroy();let g=this.players.indexOf(h);this.players.splice(g,1)}),h.play()}),en}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,n,i,a){let o=[];if(e){let s=this.playersByQueriedElement.get(t);s&&(o=s)}else{let s=this.playersByElement.get(t);if(s){let l=!a||a==st;s.forEach(c=>{c.queued||!l&&c.triggerName!=i||o.push(c)})}}return(n||i)&&(o=o.filter(s=>!(n&&n!=s.namespaceId||i&&i!=s.triggerName))),o}_beforeAnimationBuild(t,e,n){let i=e.triggerName,a=e.element,o=e.isRemovalTransition?void 0:t,s=e.isRemovalTransition?void 0:i;for(let l of e.timelines){let c=l.element,u=c!==a,d=j(n,c,[]);this._getPreviousPlayers(c,u,o,s,e.toState).forEach(y=>{let p=y.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),y.destroy(),d.push(y)})}Ee(a,e.fromStyles)}_buildAnimation(t,e,n,i,a,o){let s=e.triggerName,l=e.element,c=[],u=new Set,d=new Set,w=e.timelines.map(p=>{let _=p.element;u.add(_);let M=_[oe];if(M&&M.removedBeforeQueried)return new he(p.duration,p.delay);let A=_!==l,D=uo((n.get(_)||ro).map(B=>B.getRealPlayer())).filter(B=>{let L=B;return L.element?L.element===_:!1}),R=a.get(_),O=o.get(_),Fe=yn(this._normalizer,p.keyframes,R,O),se=this._buildPlayer(p,Fe,D);if(p.subTimeline&&i&&d.add(_),A){let B=new dt(t,s,_);B.setRealPlayer(se),c.push(B)}return se});c.forEach(p=>{j(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>oo(this.playersByQueriedElement,p.element,p))}),u.forEach(p=>X(p,Tn));let y=me(w);return y.onDestroy(()=>{u.forEach(p=>He(p,Tn)),ae(l,e.toStyles)}),d.forEach(p=>{j(i,p,[]).push(y)}),y}_buildPlayer(t,e,n){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,n):new he(t.duration,t.delay)}},dt=class{namespaceId;triggerName;element;_player=new he;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(t,e,n){this.namespaceId=t,this.triggerName=e,this.element=n}setRealPlayer(t){this._containsRealPlayer||(this._player=t,this._queuedCallbacks.forEach((e,n)=>{e.forEach(i=>kt(t,n,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){let e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){j(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){let e=this._player;e.triggerCallback&&e.triggerCallback(t)}};function oo(r,t,e){let n=r.get(t);if(n){if(n.length){let i=n.indexOf(e);n.splice(i,1)}n.length==0&&r.delete(t)}return n}function so(r){return r??null}function Rt(r){return r&&r.nodeType===1}function lo(r){return r=="start"||r=="done"}function Yr(r,t){let e=r.style.display;return r.style.display=t??"none",e}function Zr(r,t,e,n,i){let a=[];e.forEach(l=>a.push(Yr(l)));let o=[];n.forEach((l,c)=>{let u=new Map;l.forEach(d=>{let w=t.computeStyle(c,d,i);u.set(d,w),(!w||w.length==0)&&(c[oe]=ao,o.push(c))}),r.set(c,u)});let s=0;return e.forEach(l=>Yr(l,a[s++])),o}function Xr(r,t){let e=new Map;if(r.forEach(s=>e.set(s,[])),t.length==0)return e;let n=1,i=new Set(t),a=new Map;function o(s){if(!s)return n;let l=a.get(s);if(l)return l;let c=s.parentNode;return e.has(c)?l=c:i.has(c)?l=n:l=o(c),a.set(s,l),l}return t.forEach(s=>{let l=o(s);l!==n&&e.get(l).push(s)}),e}function X(r,t){r.classList?.add(t)}function He(r,t){r.classList?.remove(t)}function co(r,t,e){me(e).onDone(()=>r.processLeaveNode(t))}function uo(r){let t=[];return aa(r,t),t}function aa(r,t){for(let e=0;e<r.length;e++){let n=r[e];n instanceof Ue?aa(n.players,t):t.push(n)}}function ho(r,t){let e=Object.keys(r),n=Object.keys(t);if(e.length!=n.length)return!1;for(let i=0;i<e.length;i++){let a=e[i];if(!t.hasOwnProperty(a)||r[a]!==t[a])return!1}return!0}function Jr(r,t,e){let n=e.get(r);if(!n)return!1;let i=t.get(r);return i?n.forEach(a=>i.add(a)):t.set(r,n),e.delete(r),!0}var Ye=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(t,e)=>{};constructor(t,e,n){this._driver=e,this._normalizer=n,this._transitionEngine=new Vn(t.body,e,n),this._timelineEngine=new Ln(t.body,e,n),this._transitionEngine.onRemovalComplete=(i,a)=>this.onRemovalComplete(i,a)}registerTrigger(t,e,n,i,a){let o=t+"-"+i,s=this._triggerCache[o];if(!s){let l=[],c=[],u=ta(this._driver,a,l,c);if(l.length)throw Pr(i,l);s=Za(i,u,this._normalizer),this._triggerCache[o]=s}this._transitionEngine.registerTrigger(e,i,s)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,n,i){this._transitionEngine.insertNode(t,e,n,i)}onRemove(t,e,n){this._transitionEngine.removeNode(t,e,n)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,n,i){if(n.charAt(0)=="@"){let[a,o]=bn(n),s=i;this._timelineEngine.command(a,e,o,s)}else this._transitionEngine.trigger(t,e,n,i)}listen(t,e,n,i,a){if(n.charAt(0)=="@"){let[o,s]=bn(n);return this._timelineEngine.listen(o,e,s,a)}return this._transitionEngine.listen(t,e,n,i,a)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(t){this._transitionEngine.afterFlushAnimationsDone(t)}};function mo(r,t){let e=null,n=null;return Array.isArray(t)&&t.length?(e=Dn(t[0]),t.length>1&&(n=Dn(t[t.length-1]))):t instanceof Map&&(e=Dn(t)),e||n?new po(r,e,n):null}var po=(()=>{class r{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,n,i){this._element=e,this._startStyles=n,this._endStyles=i;let a=r.initialStylesByElement.get(e);a||r.initialStylesByElement.set(e,a=new Map),this._initialStyles=a}start(){this._state<1&&(this._startStyles&&ae(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ae(this._element,this._initialStyles),this._endStyles&&(ae(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(r.initialStylesByElement.delete(this._element),this._startStyles&&(Ee(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ee(this._element,this._endStyles),this._endStyles=null),ae(this._element,this._initialStyles),this._state=3)}}return r})();function Dn(r){let t=null;return r.forEach((e,n)=>{go(n)&&(t=t||new Map,t.set(n,e))}),t}function go(r){return r==="display"||r==="position"}var Qt=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(t,e,n,i){this.element=t,this.keyframes=e,this.options=n,this._specialStyles=i,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let t=this.keyframes,e=this._triggerWebAnimation(this.element,t,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=t.length?t[t.length-1]:new Map;let n=()=>this._onFinish();return e.addEventListener("finish",n),this.onDestroy(()=>{e.removeEventListener("finish",n)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(t){let e=[];return t.forEach(n=>{e.push(Object.fromEntries(n))}),e}_triggerWebAnimation(t,e,n){let i=this._convertKeyframesToObject(e);try{return t.animate(i,n)}catch{return null}}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){let t=this._buildPlayer();t&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),t.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=t*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let t=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,i)=>{i!=="offset"&&t.set(i,this._finished?n:It(this.element,i))}),this.currentSnapshot=t}triggerCallback(t){let e=t==="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Kt=class{validateStyleProperty(t){return!0}validateAnimatableStyleProperty(t){return!0}containsElement(t,e){return vn(t,e)}getParentElement(t){return At(t)}query(t,e,n){return wn(t,e,n)}computeStyle(t,e,n){return It(t,e)}animate(t,e,n,i,a,o=[]){let s=i==0?"both":"forwards",l={duration:n,delay:i,fill:s};a&&(l.easing=a);let c=new Map,u=o.filter(y=>y instanceof Qt);jr(n,i)&&u.forEach(y=>{y.currentSnapshot.forEach((p,_)=>c.set(_,p))});let d=Vr(e).map(y=>new Map(y));d=Qr(t,d,c);let w=mo(t,d);return new Qt(t,d,l,w)}};var Bt="@",oa="@.disabled",qt=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(t,e,n,i){this.namespaceId=t,this.delegate=e,this.engine=n,this._onDestroy=i}get data(){return this.delegate.data}destroyNode(t){this.delegate.destroyNode?.(t)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n,i=!0){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,i)}removeChild(t,e,n,i){if(i){this.delegate.removeChild(t,e,n,i);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){e.charAt(0)==Bt&&e==oa?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,i){return this.delegate.listen(t,e,n,i)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}},Gn=class extends qt{factory;constructor(t,e,n,i,a){super(e,n,i,a),this.factory=t,this.namespaceId=e}setProperty(t,e,n){e.charAt(0)==Bt?e.charAt(1)=="."&&e==oa?(n=n===void 0?!0:!!n,this.disableAnimations(t,n)):this.engine.process(this.namespaceId,t,e.slice(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n,i){if(e.charAt(0)==Bt){let a=fo(t),o=e.slice(1),s="";return o.charAt(0)!=Bt&&([o,s]=_o(o)),this.engine.listen(this.namespaceId,a,o,s,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,n,l)})}return this.delegate.listen(t,e,n,i)}};function fo(r){switch(r){case"body":return document.body;case"document":return document;case"window":return window;default:return r}}function _o(r){let t=r.indexOf("."),e=r.substring(0,t),n=r.slice(t+1);return[e,n]}var Ut=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(t,e,n){this.delegate=t,this.engine=e,this._zone=n,e.onRemovalComplete=(i,a)=>{a?.removeChild(null,i)}}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(!t||!e?.data?.animation){let c=this._rendererCache,u=c.get(i);if(!u){let d=()=>c.delete(i);u=new qt("",i,this.engine,d),c.set(i,u)}return u}let a=e.id,o=e.id+"-"+this._currentId;this._currentId++,this.engine.register(o,t);let s=c=>{Array.isArray(c)?c.forEach(s):this.engine.registerTrigger(a,o,t,c.name,c)};return e.data.animation.forEach(s),new Gn(this,o,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,n){if(t>=0&&t<this._microtaskId){this._zone.run(()=>e(n));return}let i=this._animationCallbacksBuffer;i.length==0&&queueMicrotask(()=>{this._zone.run(()=>{i.forEach(a=>{let[o,s]=a;o(s)}),this._animationCallbacksBuffer=[]})}),i.push([e,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(t){this.engine.flush(),this.delegate.componentReplaced?.(t)}};var bo=(()=>{class r extends Ye{constructor(e,n,i){super(e,n,i)}ngOnDestroy(){this.flush()}static \u0275fac=function(n){return new(n||r)(ht(Ve),ht(Ie),ht(Ne))};static \u0275prov=Le({token:r,factory:r.\u0275fac})}return r})();function vo(){return new Lt}function wo(){return new Ut(m(bi),m(Ye),m(Ge))}var sa=[{provide:Ne,useFactory:vo},{provide:Ye,useClass:bo},{provide:ui,useFactory:wo}],Ts=[{provide:Ie,useClass:jn},{provide:sn,useValue:"NoopAnimations"},...sa],So=[{provide:Ie,useFactory:()=>new Kt},{provide:sn,useFactory:()=>"BrowserAnimations"},...sa];function la(){return di("NgEagerAnimations"),[...So]}var Kn=new fe("TRANSLATE_HTTP_LOADER_CONFIG"),Eo=(()=>{class r{http;config;constructor(){this.config=Be({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},m(Kn)),this.http=this.config.useHttpBackend?new bt(m(dn)):m(bt)}getTranslation(e){let n=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${e}${this.config.suffix}${n}`)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=Le({token:r,factory:r.\u0275fac})}return r})();function ca(r={}){let t=r.useHttpBackend??!1;return[{provide:Kn,useValue:r},{provide:Pi,useClass:Eo,deps:[t?dn:bt,Kn]}]}var Ht=["*"],Co=["content"],Mo=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ko=["mat-drawer","mat-drawer-content","*"];function Po(r,t){if(r&1){let e=we();v(0,"div",1),U("click",function(){_e(e);let i=z();return ye(i._onBackdropClicked())}),S()}if(r&2){let e=z();$("mat-drawer-shown",e._isShowingBackdrop())}}function Ao(r,t){r&1&&(v(0,"mat-drawer-content"),F(1,2),S())}var Do=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],xo=["mat-sidenav","mat-sidenav-content","*"];function Oo(r,t){if(r&1){let e=we();v(0,"div",1),U("click",function(){_e(e);let i=z();return ye(i._onBackdropClicked())}),S()}if(r&2){let e=z();$("mat-drawer-shown",e._isShowingBackdrop())}}function Io(r,t){r&1&&(v(0,"mat-sidenav-content"),F(1,2),S())}var No=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Fo=new fe("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),$n=new fe("MAT_DRAWER_CONTAINER"),$t=(()=>{class r extends qe{_platform=m(Ke);_changeDetectorRef=m(Ae);_container=m(Un);constructor(){let e=m(ve),n=m(rr),i=m(Ge);super(e,n,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=I({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,i){n&2&&(_t("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),$("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Se([{provide:qe,useExisting:r}]),Xe],ngContentSelectors:Ht,decls:1,vars:0,template:function(n,i){n&1&&(ne(),F(0))},encapsulation:2,changeDetection:0})}return r})(),qn=(()=>{class r{_elementRef=m(ve);_focusTrapFactory=m(Ni);_focusMonitor=m(Et);_platform=m(Ke);_ngZone=m(Ge);_renderer=m(hi);_interactivityChecker=m(Ii);_doc=m(Ve);_container=m($n,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=De(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=De(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(De(e))}_opened=je(!1);_openedVia=null;_animationStarted=new ge;_animationEnd=new ge;openedChange=new be(!0);_openedStream=this.openedChange.pipe(Ze(e=>e),nn(()=>{}));openedStart=this._animationStarted.pipe(Ze(()=>this.opened),rn(void 0));_closedStream=this.openedChange.pipe(Ze(e=>!e),nn(()=>{}));closedStart=this._animationStarted.pipe(Ze(()=>!this.opened),rn(void 0));_destroyed=new ge;onPositionChanged=new be;_content;_modeChanged=new ge;_injector=m(on);_changeDetectorRef=m(Ae);constructor(){this.openedChange.pipe(ce(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Tt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),o=this._renderer.listen(e,"mousedown",i)})),e.focus(n)}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ln(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,n,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(oi(1)).subscribe(o=>a(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=I({type:r,selectors:[["mat-drawer"]],viewQuery:function(n,i){if(n&1&&Je(Co,5),n&2){let a;Y(a=Z())&&(i._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,i){n&2&&(q("align",null)("tabIndex",i.mode!=="side"?"-1":null),_t("visibility",!i._container&&!i.opened?"hidden":null),$("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(ne(),v(0,"div",1,0),F(2),S())},dependencies:[qe],encapsulation:2,changeDetection:0})}return r})(),Un=(()=>{class r{_dir=m(Mt,{optional:!0});_element=m(ve);_ngZone=m(Ge);_changeDetectorRef=m(Ae);_animationDisabled=Ct();_transitionsEnabled=!1;_allDrawers;_drawers=new ci;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=De(e)}_autosize=m(Fo);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:De(e)}_backdropOverride=null;backdropClick=new be;_start=null;_end=null;_left=null;_right=null;_destroyed=new ge;_doCheckSubject=new ge;_contentMargins={left:null,right:null};_contentMarginChanges=new ge;get scrollable(){return this._userContent||this._content}_injector=m(on);constructor(){let e=m(Ke),n=m(ar);this._dir?.change.pipe(ce(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(ce(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(an(this._allDrawers),ce(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(an(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ai(10),ce(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ce(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ce(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ce(this._drawers.changes)).subscribe(()=>{ln({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ce(ii(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=I({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(n,i,a){if(n&1&&Pe(a,$t,5)(a,qn,5),n&2){let o;Y(o=Z())&&(i._content=o.first),Y(o=Z())&&(i._allDrawers=o)}},viewQuery:function(n,i){if(n&1&&Je($t,5),n&2){let a;Y(a=Z())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,i){n&2&&$("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Se([{provide:$n,useExisting:r}])],ngContentSelectors:ko,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(ne(Mo),J(0,Po,1,2,"div",0),F(1),F(2,1),J(3,Ao,2,0,"mat-drawer-content")),n&2&&(ee(i.hasBackdrop?0:-1),E(3),ee(i._content?-1:3))},dependencies:[$t],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})(),Wt=(()=>{class r extends $t{static \u0275fac=(()=>{let e;return function(i){return(e||(e=mt(r)))(i||r)}})();static \u0275cmp=I({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Se([{provide:qe,useExisting:r}]),Xe],ngContentSelectors:Ht,decls:1,vars:0,template:function(n,i){n&1&&(ne(),F(0))},encapsulation:2,changeDetection:0})}return r})(),Wn=(()=>{class r extends qn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=De(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=un(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=un(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=mt(r)))(i||r)}})();static \u0275cmp=I({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,i){n&2&&(q("tabIndex",i.mode!=="side"?"-1":null)("align",null),_t("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),$("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Se([{provide:qn,useExisting:r}]),Xe],ngContentSelectors:Ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(ne(),v(0,"div",1,0),F(2),S())},dependencies:[qe],encapsulation:2,changeDetection:0})}return r})(),da=(()=>{class r extends Un{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=mt(r)))(i||r)}})();static \u0275cmp=I({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(n,i,a){if(n&1&&Pe(a,Wt,5)(a,Wn,5),n&2){let o;Y(o=Z())&&(i._content=o.first),Y(o=Z())&&(i._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,i){n&2&&$("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Se([{provide:$n,useExisting:r},{provide:Un,useExisting:r}]),Xe],ngContentSelectors:xo,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(ne(Do),J(0,Oo,1,2,"div",0),F(1),F(2,1),J(3,Io,2,0,"mat-sidenav-content")),n&2&&(ee(i.hasBackdrop?0:-1),E(3),ee(i._content?-1:3))},dependencies:[Wt],styles:[No],encapsulation:2,changeDetection:0})}return r})(),ua=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Qe({type:r});static \u0275inj=ze({imports:[mn,nt,mn]})}return r})();var Bo=["*",[["mat-toolbar-row"]]],Lo=["*","mat-toolbar-row"],zo=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=pt({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),ha=(()=>{class r{_elementRef=m(ve);_platform=m(Ke);_document=m(Ve);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=I({type:r,selectors:[["mat-toolbar"]],contentQueries:function(n,i,a){if(n&1&&Pe(a,zo,5),n&2){let o;Y(o=Z())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){n&2&&(fi(i.color?"mat-"+i.color:""),$("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Lo,decls:2,vars:0,template:function(n,i){n&1&&(ne(Bo),F(0),F(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var ma=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Qe({type:r});static \u0275inj=ze({imports:[nt]})}return r})();var $o=["button"],Wo=["*"];function Ho(r,t){if(r&1&&(v(0,"div",2),te(1,"mat-pseudo-checkbox",6),S()),r&2){let e=z();E(),H("disabled",e.disabled)}}var pa=new fe("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ga=new fe("MatButtonToggleGroup"),Yo={provide:Wi,useExisting:si(()=>Hn),multi:!0},Yt=class{source;value;constructor(t,e){this.source=t,this.value=e}},Hn=(()=>{class r{_changeDetector=m(Ae);_dir=m(Mt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=m(hn).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(n=>n.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new be;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new be;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=m(pa,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new $i(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Tt(e))return;let i=e.target.id,a=this._buttonToggles.toArray().findIndex(s=>s.buttonId===i),o=null;switch(e.keyCode){case 32:case 13:o=this._buttonToggles.get(a)||null;break;case 38:o=this._getNextButton(a,-1);break;case 37:o=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:o=this._getNextButton(a,1);break;case 39:o=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}o&&(e.preventDefault(),o._onButtonClick(),o.focus())}_emitChangeEvent(e){let n=new Yt(e,this.value);this._rawValue=n.value,this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(e,n,i=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?n?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(n=>e.value!=null&&n===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let n=this._buttonToggles.get(e);if(!n.disabled){n.tabIndex=0;break}}}_getNextButton(e,n){let i=this._buttonToggles;for(let a=1;a<=i.length;a++){let o=(e+n*a+i.length)%i.length,s=i.get(o);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let n=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(i=>this._selectValue(i,n))):(this._clearSelection(),this._selectValue(e,n)),!this.multiple&&n.every(i=>i.tabIndex===-1)){for(let i of n)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,n){for(let i of n)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,n){n&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(n){return new(n||r)};static \u0275dir=pt({type:r,selectors:[["mat-button-toggle-group"]],contentQueries:function(n,i,a){if(n&1&&Pe(a,Yn,5),n&2){let o;Y(o=Z())&&(i._buttonToggles=o)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(n,i){n&1&&U("keydown",function(o){return i._keydown(o)}),n&2&&(q("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),$("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",ie],value:"value",multiple:[2,"multiple","multiple",ie],disabled:[2,"disabled","disabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ie],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",ie]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Se([Yo,{provide:ga,useExisting:r}])]})}return r})(),Yn=(()=>{class r{_changeDetectorRef=m(Ae);_elementRef=m(ve);_focusMonitor=m(Et);_idGenerator=m(hn);_animationDisabled=Ct();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new be;constructor(){m(Oi).load(Li);let e=m(ga,{optional:!0}),n=m(new yi("tabindex"),{optional:!0})||"",i=m(pa,{optional:!0});this._tabIndex=je(parseInt(n)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new Yt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=I({type:r,selectors:[["mat-button-toggle"]],viewQuery:function(n,i){if(n&1&&Je($o,5),n&2){let a;Y(a=Z())&&(i._buttonElement=a.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(n,i){n&1&&U("focus",function(){return i.focus()}),n&2&&(q("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),$("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",ie],appearance:"appearance",checked:[2,"checked","checked",ie],disabled:[2,"disabled","disabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Wo,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(n,i){if(n&1&&(ne(),v(0,"button",1,0),U("click",function(){return i._onButtonClick()}),J(2,Ho,2,1,"div",2),v(3,"span",3),F(4),S()(),te(5,"span",4)(6,"span",5)),n&2){let a=et(1);H("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),q("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),E(2),ee(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),E(4),H("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Bi,Hi],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return r})();function Zo(r,t){if(r&1){let e=we();v(0,"mat-button-toggle",2),U("click",function(){let i=_e(e).$implicit,a=z();return ye(a.useLanguage(i))}),P(1),S()}if(r&2){let e=t.$implicit;H("value",e),pi("aria-label",e),E(),tt(" ",e.toUpperCase()," ")}}var Zt=class r{currentLang="en";languages=["en","es"];translate;constructor(){this.translate=m(wt),this.currentLang=this.translate.getCurrentLang()}useLanguage(t){this.translate.use(t),this.currentLang=t}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=I({type:r,selectors:[["app-language-switcher"]],decls:4,vars:4,consts:[["appearance","standard","name","language",3,"value"],[3,"value","aria-label"],[3,"click","value","aria-label"]],template:function(e,n){e&1&&(v(0,"mat-button-toggle-group",0),V(1,"translate"),gt(2,Zo,2,3,"mat-button-toggle",1,gi),S()),e&2&&(H("value",n.currentLang),q("aria-label",G(1,2,"languageSwitcher.preferredLanguage")),E(2),ft(n.languages))},dependencies:[Hn,Yn,St],styles:[".language-switcher[_ngcontent-%COMP%]{height:40px;margin-left:12px;border-radius:999px;overflow:hidden;background:#f8fafc}.mat-button-toggle-button[_ngcontent-%COMP%]{height:40px;font-weight:900}"]})};var Xo=r=>({exact:r}),Jo=(r,t)=>t.path;function es(r,t){if(r&1&&(v(0,"span",18),P(1),S()),r&2){let e=z(2);E(),de(e.cartCount())}}function ts(r,t){if(r&1){let e=we();v(0,"a",15),U("click",function(){_e(e);let i=z(),a=et(2);return ye(i.closeNavigation(a))}),v(1,"mat-icon",16),P(2),S(),v(3,"span",17),P(4),V(5,"translate"),S(),J(6,es,2,1,"span",18),S()}if(r&2){let e=t.$implicit,n=z();H("routerLink",e.path)("routerLinkActiveOptions",_i(7,Xo,e.path.endsWith("dashboard"))),E(2),de(e.icon),E(2),de(G(5,5,e.label)),E(2),ee(e.label==="nav.store"&&n.cartCount()>0?6:-1)}}function ns(r,t){if(r&1&&(v(0,"mat-card",6)(1,"mat-card-content")(2,"div",19)(3,"div",20),P(4),S(),v(5,"div")(6,"p"),P(7),S(),v(8,"small"),P(9),V(10,"translate"),S()()(),v(11,"strong"),P(12),S(),te(13,"mat-progress-bar",21),v(14,"small"),P(15),V(16,"translate"),S()()()),r&2){let e=t,n=z();E(4),de(e.fullName.slice(0,1)),E(3),de(e.fullName),E(2),yt("",G(10,8,"shell.level")," ",e.level),E(3),tt("",e.xp," XP"),E(),H("value",e.xp/e.nextLevelXp*100),E(2),yt("",n.identityAccessStore.safeCoins()," ",G(16,10,"shell.safeCoinsAvailable"))}}function is(r,t){if(r&1&&(v(0,"a",13)(1,"mat-icon"),P(2,"account_circle"),S(),P(3),S()),r&2){let e=t;H("matBadge",e.streakDays),E(3),tt(" ",e.fullName," ")}}var Xt=class r{identityAccessStore=m(cr);ecommerceStore=m(sr);breakpointObserver=m(xi);user=cn(()=>this.identityAccessStore.getCurrentUser());cartCount=cn(()=>{let e=this.identityAccessStore.authenticatedUser()?.username??this.identityAccessStore.getCurrentUser()?.id??"",n=this.ecommerceStore.getCartItemsForUser(this.ecommerceStore.cartItems(),e);return this.ecommerceStore.getCartItemCount(n)});isMobile=je(!1);navItems=[{label:"nav.dashboard",path:"/app/dashboard",icon:"dashboard"},{label:"nav.simulations",path:"/app/simulations",icon:"health_and_safety"},{label:"nav.progress",path:"/app/statistics",icon:"trending_up"},{label:"nav.gamification",path:"/app/gamification",icon:"emoji_events"},{label:"nav.store",path:"/app/store",icon:"shopping_bag"}];constructor(){this.breakpointObserver.observe("(max-width: 1024px)").pipe(Di()).subscribe(t=>this.isMobile.set(t.matches))}closeNavigation(t){this.isMobile()&&t.close()}logout(){this.identityAccessStore.logout().subscribe({next:()=>{window.location.assign("/auth")}})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=I({type:r,selectors:[["app-shell"]],decls:44,vars:30,consts:[["drawer",""],[1,"app-frame"],[1,"sidebar",3,"mode","opened","fixedInViewport"],["routerLink","/app/dashboard",1,"brand"],["src","assets/images/design/safestep-logo.png","alt","SafeStep",1,"brand-logo"],["mat-list-item","","routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],["appearance","outlined",1,"sidebar-card"],[1,"content-area"],[1,"topbar"],["mat-icon-button","","type","button",1,"menu-button",3,"click"],[1,"eyebrow"],[1,"toolbar-spacer"],["mat-stroked-button","","routerLink","/app/store",1,"coin-chip"],["mat-stroked-button","","routerLink","/app/profile","matBadgeColor","accent","matBadgeOverlap","false",1,"user-chip",3,"matBadge"],["mat-icon-button","","type","button","aria-label","Cerrar sesion",3,"click"],["mat-list-item","","routerLinkActive","active",3,"click","routerLink","routerLinkActiveOptions"],["matListItemIcon",""],["matListItemTitle",""],["matListItemMeta","",1,"nav-badge"],[1,"profile-mini"],[1,"profile-avatar"],["mode","determinate",3,"value"]],template:function(e,n){if(e&1){let i=we();v(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"a",3),V(4,"translate"),te(5,"img",4),v(6,"span")(7,"strong"),P(8),V(9,"translate"),S(),v(10,"small"),P(11),V(12,"translate"),S()()(),v(13,"mat-nav-list"),V(14,"translate"),gt(15,ts,7,9,"a",5,Jo),S(),J(17,ns,17,12,"mat-card",6),S(),v(18,"mat-sidenav-content",7)(19,"mat-toolbar",8)(20,"button",9),V(21,"translate"),U("click",function(){_e(i);let o=et(2);return ye(o.toggle())}),v(22,"mat-icon"),P(23,"menu"),S()(),v(24,"div")(25,"h1"),P(26),V(27,"translate"),S(),v(28,"p",10),P(29),V(30,"translate"),S()(),te(31,"span",11),v(32,"a",12)(33,"mat-icon"),P(34,"paid"),S(),P(35),V(36,"translate"),S(),te(37,"app-language-switcher"),J(38,is,4,2,"a",13),v(39,"button",14),U("click",function(){return n.logout()}),v(40,"mat-icon"),P(41,"logout"),S()()(),v(42,"main"),te(43,"router-outlet"),S()()()}if(e&2){let i,a;E(),H("mode",n.isMobile()?"over":"side")("opened",!n.isMobile())("fixedInViewport",n.isMobile()),E(2),q("aria-label",G(4,14,"shell.goToDashboard")),E(5),de(G(9,16,"shell.safeStep")),E(3),de(G(12,18,"shell.appTagline")),E(2),q("aria-label",G(14,20,"shell.mainNavigation")),E(2),ft(n.navItems),E(2),ee((i=n.user())?17:-1,i),E(3),q("aria-label",G(21,22,"shell.openMenu")),E(6),de(G(27,24,"shell.title")),E(3),de(G(30,26,"shell.subtitle")),E(6),yt(" ",n.identityAccessStore.safeCoins()," ",G(36,28,"shell.safeCoins")," "),E(3),ee((a=n.user())?38:-1,a)}},dependencies:[vt,Ci,Mi,Ri,Fi,Gi,Vi,zi,Ki,ji,Qi,Ui,qi,tr,er,Ji,Xi,Yi,Zi,ir,nr,ua,Wn,da,Wt,ma,ha,Zt,St],styles:['.app-frame[_ngcontent-%COMP%]{min-height:100vh;background:var(--safe-gray-50)}.sidebar[_ngcontent-%COMP%]{width:288px;padding:0;background:var(--safe-white);color:var(--safe-gray-900);border-right:1px solid var(--safe-gray-200)}.menu-button[_ngcontent-%COMP%]{display:none;flex:0 0 auto}.brand[_ngcontent-%COMP%]{height:92px;display:flex;align-items:center;gap:var(--space-3);padding:0 var(--space-6);color:var(--safe-gray-900);text-decoration:none;border-bottom:1px solid var(--safe-gray-100)}.brand-logo[_ngcontent-%COMP%]{width:48px;height:48px;object-fit:contain;flex:0 0 auto}.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:0;font-family:var(--font-display);font-weight:800}.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before{content:"Safe";color:var(--safe-gray-900);font-size:1.45rem}.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{content:"Step";color:var(--safe-green);font-size:1.45rem}.brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin-top:2px;color:var(--safe-gray-500);font-size:.78rem}mat-nav-list[_ngcontent-%COMP%]{padding:var(--space-4)}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{--mdc-list-list-item-label-text-color: var(--safe-gray-600);--mdc-list-list-item-leading-icon-color: var(--safe-gray-400);--mdc-list-list-item-hover-label-text-color: var(--safe-primary-dark);--mdc-list-list-item-hover-leading-icon-color: var(--safe-primary-dark);border-radius:var(--radius-md);margin-bottom:var(--space-2);padding:var(--space-2) var(--space-3);transition:background-color .2s ease,color .2s ease,transform .2s ease}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--safe-gray-50);transform:translate(2px)}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{transform:translate(1px)}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--safe-primary);outline-offset:2px}mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#f0f9ff;--mdc-list-list-item-label-text-color: var(--safe-primary-dark);--mdc-list-list-item-leading-icon-color: var(--safe-primary-dark);font-weight:800}.nav-badge[_ngcontent-%COMP%]{min-width:22px;height:22px;border-radius:var(--radius-full);display:grid;place-items:center;background:var(--safe-warning);color:var(--safe-white);font-size:.75rem;font-weight:900}.sidebar-card[_ngcontent-%COMP%]{margin:var(--space-4);background:var(--safe-white);border-color:var(--safe-gray-100);box-shadow:none}.profile-mini[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-3);margin-bottom:14px}.profile-avatar[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--safe-primary-light),var(--safe-primary-dark));color:var(--safe-white);font-family:var(--font-display);font-weight:700}.sidebar-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sidebar-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .sidebar-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin:0}.sidebar-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--safe-gray-900);font-weight:800;font-family:var(--font-display)}.sidebar-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:4px 0 12px;color:var(--safe-gray-900);font-size:1.35rem;font-family:var(--font-display)}.sidebar-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--safe-gray-500);margin-top:12px}.content-area[_ngcontent-%COMP%]{min-width:0;background:url(/assets/images/design/fondodashboard.png) center / cover fixed no-repeat}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;height:64px;min-height:64px;padding:0 var(--space-8);display:flex;align-items:center;gap:var(--space-3);background:#ffffffe0;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid var(--safe-gray-200);box-shadow:0 1px 3px #0f172a0f}.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--safe-gray-900);font-size:clamp(1.15rem,2vw,1.5rem);font-family:var(--font-display);font-weight:600;white-space:nowrap}.eyebrow[_ngcontent-%COMP%]{color:var(--safe-gray-500);font-size:.8125rem;font-weight:500;display:none}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.user-chip[_ngcontent-%COMP%], .coin-chip[_ngcontent-%COMP%]{margin-left:var(--space-3);text-decoration:none;max-width:220px;overflow:hidden;text-overflow:ellipsis;transition:background-color .2s ease,border-color .2s ease,box-shadow .2s ease;min-height:40px;font-family:var(--font-body);font-weight:600;font-size:.8125rem}.user-chip[_ngcontent-%COMP%]:hover, .coin-chip[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-sm)}.user-chip[_ngcontent-%COMP%]:active, .coin-chip[_ngcontent-%COMP%]:active{transform:scale(.97)}.user-chip[_ngcontent-%COMP%]:focus-visible, .coin-chip[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--safe-primary);outline-offset:2px}.user-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .coin-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px;font-size:1.25rem}.coin-chip[_ngcontent-%COMP%]{border-color:#facc15;color:#92400e;background:#fffbeb;font-weight:700}.coin-chip[_ngcontent-%COMP%]:hover{background:#fef3c7;border-color:#f59e0b}main[_ngcontent-%COMP%]{padding:var(--space-7) var(--space-8) var(--space-12);overflow-x:hidden;min-height:calc(100vh - 64px)}@media(max-width:1024px){.topbar[_ngcontent-%COMP%]{height:auto;min-height:60px;flex-wrap:wrap;gap:var(--space-2);padding:var(--space-3) var(--space-4)}.menu-button[_ngcontent-%COMP%]{display:inline-flex}.toolbar-spacer[_ngcontent-%COMP%]{display:none}.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.1rem}.topbar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;flex:1 1 180px}.user-chip[_ngcontent-%COMP%], .coin-chip[_ngcontent-%COMP%]{margin-left:0}main[_ngcontent-%COMP%]{padding:var(--space-4)}}@media(max-width:640px){.sidebar[_ngcontent-%COMP%]{width:min(84vw,288px)}.brand[_ngcontent-%COMP%]{height:78px;padding:0 var(--space-4)}mat-nav-list[_ngcontent-%COMP%]{padding:var(--space-2)}.topbar[_ngcontent-%COMP%]{align-items:flex-start}.topbar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-basis:calc(100% - 58px)}.eyebrow[_ngcontent-%COMP%]{font-size:.75rem}.coin-chip[_ngcontent-%COMP%]{flex:1 1 auto}.user-chip[_ngcontent-%COMP%]{max-width:100%;flex:1 1 100%}main[_ngcontent-%COMP%]{padding:var(--space-3)}}']})};var _a=[{path:"auth",loadChildren:()=>import("./chunk-MARDHPOB.js").then(r=>r.identityAccessRoutes)},{path:"app",component:Xt,canActivate:[dr],children:[{path:"",loadChildren:()=>import("./chunk-AY5XBSVI.js").then(r=>r.sharedRoutes)},{path:"",loadChildren:()=>import("./chunk-MUIHF4C7.js").then(r=>r.medicalSimulationRoutes)},{path:"",loadChildren:()=>import("./chunk-6GWBU47O.js").then(r=>r.gamificationRoutes)},{path:"",loadChildren:()=>import("./chunk-IJYLWY4Z.js").then(r=>r.ecommerceRoutes)},{path:"",loadChildren:()=>import("./chunk-XL3AMMFF.js").then(r=>r.statisticsRoutes)},{path:"",loadChildren:()=>import("./chunk-MARDHPOB.js").then(r=>r.identityAccessProtectedRoutes)},{path:"",pathMatch:"full",redirectTo:"dashboard"}]},{path:"",pathMatch:"full",redirectTo:"auth"},{path:"payment/success",pathMatch:"full",redirectTo:"app/payment/success"},{path:"payment/cancel",pathMatch:"full",redirectTo:"app/payment/cancel"},{path:"**",redirectTo:"auth"}];var rs=["/authentication/sign-in","/authentication/sign-up"],ya=(r,t)=>{let e=m(lr),n=m(Ti),i=r.url.startsWith(or.platformProviderApiBaseUrl),a=rs.some(l=>r.url.includes(l)),o=e.getAccessToken(),s=i&&!a&&o?r.clone({setHeaders:{Authorization:`Bearer ${o}`}}):r;return t(s).pipe(ri(l=>(i&&typeof l=="object"&&l!==null&&"status"in l&&l.status===401&&(e.clear(),n.navigate(["/auth"])),ni(()=>l))))};var ba={providers:[li(),wi(Ei(),Si([ya])),ki(_a),la(),Ai({loader:ca({prefix:"./assets/i18n/",suffix:".json"}),lang:"en",fallbackLang:"en"}),mi(()=>{let r=m(wt),t=r.getBrowserLang();r.use(t==="en"?"en":"es")})]};var Jt=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=I({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&te(0,"router-outlet")},dependencies:[vt],styles:["[_nghost-%COMP%]{display:block;min-height:100vh}"]})};vi(Jt,ba).catch(r=>console.error(r));
