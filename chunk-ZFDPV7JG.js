import{a as ne,b as re,c as ae,d as oe,e as ce,f as se,g as me,h as le,i as de,j as pe,k as ue}from"./chunk-CHDIBN4M.js";import"./chunk-OQ2H45M4.js";import{b as ie}from"./chunk-DTKHEBNH.js";import"./chunk-LA6YYEEI.js";import{a as ee,b as te}from"./chunk-C4GAS2UF.js";import{a as J,b as X,d as Y}from"./chunk-SY7IAV3K.js";import"./chunk-LXKCWBRE.js";import{b as q,c as K}from"./chunk-IKHJXAHC.js";import{C as Z,z as U}from"./chunk-YOIC3XAW.js";import{c as G}from"./chunk-F4H3OG4F.js";import"./chunk-GYIPRNUU.js";import"./chunk-ZHGL63VC.js";import{$a as y,Da as a,Db as N,Eb as C,Fb as $,Gb as j,Hb as s,Ib as m,Jb as w,Oa as M,Pa as W,Ta as u,Vb as l,W as I,Wb as d,Y as L,Yb as F,_ as f,ab as D,bb as O,ca as E,da as T,ea as P,fa as B,fb as _,gb as i,hb as r,ib as g,jc as k,mb as h,nb as v,ob as x,pb as A,rb as b,rc as Q,tb as S,ua as R,xb as z,yb as H,zb as V}from"./chunk-P7UKLSNY.js";import"./chunk-7CGTOI24.js";var ye=["determinateSpinner"];function be(e,o){if(e&1&&(P(),i(0,"svg",11),g(1,"circle",12),r()),e&2){let t=S();y("viewBox",t._viewBox()),a(),C("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),y("r",t._circleRadius())}}var Se=new L("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:_e})}),_e=100,Me=10,fe=(()=>{class e{_elementRef=f(R);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=f(Se),c=U(),n=this._elementRef.nativeElement;this._noopAnimations=c==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&c==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=_e;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-Me)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(c){return new(c||e)};static \u0275cmp=M({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(c,n){if(c&1&&z(ye,5),c&2){let p;H(p=V())&&(n._determinateCircle=p.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(c,n){c&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),j("mat-"+n.color),C("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),$("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",k],diameter:[2,"diameter","diameter",k],strokeWidth:[2,"strokeWidth","strokeWidth",k]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(c,n){if(c&1&&(u(0,be,2,8,"ng-template",null,0,F),i(2,"div",2,1),P(),i(4,"svg",3),g(5,"circle",4),r()(),B(),i(6,"div",5)(7,"div",6)(8,"div",7),x(9,8),r(),i(10,"div",9),x(11,8),r(),i(12,"div",10),x(13,8),r()()()),c&2){let p=N(1);a(4),y("viewBox",n._viewBox()),a(),C("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),y("r",n._circleRadius()),a(4),_("ngTemplateOutlet",p),a(2),_("ngTemplateOutlet",p),a(2),_("ngTemplateOutlet",p)}},dependencies:[Q],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var ge=(()=>{class e{static \u0275fac=function(c){return new(c||e)};static \u0275mod=W({type:e});static \u0275inj=I({imports:[Z]})}return e})();function Ce(e,o){e&1&&(i(0,"div",5),g(1,"mat-spinner",19),r())}function we(e,o){e&1&&(i(0,"div",6)(1,"mat-icon"),s(2,"error_outline"),r(),i(3,"p"),s(4),r()()),e&2&&(a(4),m(o))}function ke(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.id")))}function Ee(e,o){if(e&1&&(i(0,"td",21),s(1),r()),e&2){let t=o.$implicit;a(),m(t.id)}}function Te(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.title")))}function Pe(e,o){if(e&1&&(i(0,"td",21),s(1),r()),e&2){let t=o.$implicit;a(),m(t.title)}}function De(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.difficulty")))}function Oe(e,o){if(e&1&&(i(0,"td",21)(1,"span",22),s(2),r()()),e&2){let t=o.$implicit;a(2),m(t.difficulty)}}function Ie(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.duration")))}function Le(e,o){if(e&1&&(i(0,"td",21),s(1),r()),e&2){let t=o.$implicit;a(),w("",t.durationMinutes," min")}}function Be(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.status")))}function Re(e,o){if(e&1&&(i(0,"td",21)(1,"span",23),s(2),r()()),e&2){let t=o.$implicit;a(2),m(t.status)}}function We(e,o){e&1&&(i(0,"th",20),s(1),l(2,"translate"),r()),e&2&&(a(),m(d(2,1,"common.actions")))}function Ae(e,o){if(e&1){let t=A();i(0,"td",21)(1,"button",24),b("click",function(){let n=E(t).$implicit,p=S();return T(p.edit(n.id))}),i(2,"mat-icon"),s(3,"edit"),r()(),i(4,"button",24),b("click",function(){let n=E(t).$implicit,p=S();return T(p.delete(n.id))}),i(5,"mat-icon"),s(6,"delete"),r()()()}}function ze(e,o){e&1&&g(0,"tr",25)}function He(e,o){e&1&&g(0,"tr",26)}var he=class e{store=f(ie);router=f(G);translate=f(q);displayedColumns=["id","title","difficulty","duration","status","actions"];add(){this.router.navigate(["/app/simulations/admin/new"])}edit(o){this.router.navigate(["/app/simulations/admin/edit",o])}delete(o){window.confirm(this.translate.instant("admin.confirmDeleteSimulation"))&&this.store.deleteSimulation(o)}back(){this.router.navigate(["/app/simulations"])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-medical-simulation-list"]],decls:44,vars:17,consts:[[1,"crud-page"],[1,"eyebrow"],[1,"header-actions"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],[1,"loading-wrap"],[1,"error-banner"],[1,"table-wrap"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","difficulty"],["matColumnDef","duration"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["diameter","40"],["mat-header-cell",""],["mat-cell",""],[1,"chip","chip-blue"],[1,"chip"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,c){if(t&1&&(i(0,"section",0)(1,"header")(2,"div")(3,"p",1),s(4),l(5,"translate"),r(),i(6,"h2"),s(7),l(8,"translate"),r()(),i(9,"div",2)(10,"button",3),b("click",function(){return c.back()}),i(11,"mat-icon"),s(12,"arrow_back"),r(),s(13),l(14,"translate"),r(),i(15,"button",4),b("click",function(){return c.add()}),i(16,"mat-icon"),s(17,"add"),r(),s(18),l(19,"translate"),r()()(),D(20,Ce,2,0,"div",5),D(21,we,5,1,"div",6),i(22,"div",7)(23,"table",8),h(24,9),u(25,ke,3,3,"th",10)(26,Ee,2,1,"td",11),v(),h(27,12),u(28,Te,3,3,"th",10)(29,Pe,2,1,"td",11),v(),h(30,13),u(31,De,3,3,"th",10)(32,Oe,3,1,"td",11),v(),h(33,14),u(34,Ie,3,3,"th",10)(35,Le,2,1,"td",11),v(),h(36,15),u(37,Be,3,3,"th",10)(38,Re,3,1,"td",11),v(),h(39,16),u(40,We,3,3,"th",10)(41,Ae,7,0,"td",11),v(),u(42,ze,1,0,"tr",17)(43,He,1,0,"tr",18),r()()()),t&2){let n;a(4),m(d(5,9,"admin.administration")),a(3),m(d(8,11,"admin.simulationsTitle")),a(6),w(" ",d(14,13,"common.back")," "),a(5),w(" ",d(19,15,"admin.addSimulation")," "),a(2),O(c.store.loading()?20:-1),a(),O((n=c.store.error())?21:-1,n),a(2),_("dataSource",c.store.simulations()),a(19),_("matHeaderRowDef",c.displayedColumns),a(),_("matRowDefColumns",c.displayedColumns)}},dependencies:[Y,X,J,te,ee,ge,fe,ue,ne,ae,me,oe,re,le,ce,se,de,pe,K],styles:[".crud-page[_ngcontent-%COMP%]{padding:var(--space-6);display:grid;gap:var(--space-5)}header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:var(--space-4)}header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--font-display);font-weight:600;font-size:1.5rem;margin:0;color:var(--safe-gray-900)}.eyebrow[_ngcontent-%COMP%]{margin:0 0 2px;color:var(--safe-primary-dark);font-family:var(--font-body);font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em}.header-actions[_ngcontent-%COMP%]{display:flex;gap:var(--space-2)}.loading-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:var(--space-6)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3) var(--space-4);background:#fef2f2;border:1px solid #fecaca;border-radius:var(--radius-md)}.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--safe-danger);flex-shrink:0}.error-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#991b1b;font-family:var(--font-body);font-size:.875rem}.table-wrap[_ngcontent-%COMP%]{overflow:auto;border:1px solid var(--safe-gray-200);border-radius:var(--radius-md)}table[_ngcontent-%COMP%]{width:100%}.chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:2px var(--space-3);border-radius:var(--radius-full);font-family:var(--font-body);font-weight:500;font-size:.75rem;background:var(--safe-gray-100);color:var(--safe-gray-700);width:fit-content}.chip-blue[_ngcontent-%COMP%]{background:#0ea5e91f;color:var(--safe-primary-dark)}@media(max-width:700px){header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.header-actions[_ngcontent-%COMP%]{width:100%}.header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;justify-content:center}}"]})};export{he as MedicalSimulationList};
