(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Se={},Hr=[],Wt=()=>{},gd=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yo=n=>n.startsWith("onUpdate:"),Ze=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},P_=Object.prototype.hasOwnProperty,Te=(n,e)=>P_.call(n,e),re=Array.isArray,zr=n=>_i(n)==="[object Map]",md=n=>_i(n)==="[object Set]",th=n=>_i(n)==="[object Date]",le=n=>typeof n=="function",He=n=>typeof n=="string",wt=n=>typeof n=="symbol",we=n=>n!==null&&typeof n=="object",_d=n=>(we(n)||le(n))&&le(n.then)&&le(n.catch),yd=Object.prototype.toString,_i=n=>yd.call(n),C_=n=>_i(n).slice(8,-1),vd=n=>_i(n)==="[object Object]",Zo=n=>He(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},V_=/-\w/g,Nt=ea(n=>n.replace(V_,e=>e.slice(1).toUpperCase())),k_=/\B([A-Z])/g,Ar=ea(n=>n.replace(k_,"-$1").toLowerCase()),Ed=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=ea(n=>n?`on${Ed(n)}`:""),zt=(n,e)=>!Object.is(n,e),oo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Td=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nh;const ta=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=He(r)?x_(r):cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(n)||we(n))return n}const D_=/;(?![^(]*\))/g,N_=/:([^]+)/,O_=/\/\*[^]*?\*\//g;function x_(n){const e={};return n.replace(O_,"").split(D_).forEach(t=>{if(t){const r=t.split(N_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tl(n){let e="";if(He(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=tl(n[t]);r&&(e+=r+" ")}else if(we(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const M_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",L_=Yc(M_);function Id(n){return!!n||n===""}function F_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ni(n[r],e[r]);return t}function ni(n,e){if(n===e)return!0;let t=th(n),r=th(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=wt(n),r=wt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?F_(n,e):!1;if(t=we(n),r=we(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ni(n[a],e[a]))return!1}}return String(n)===String(e)}const wd=n=>!!(n&&n.__v_isRef===!0),kn=n=>He(n)?n:n==null?"":re(n)||we(n)&&(n.toString===yd||!le(n.toString))?wd(n)?kn(n.value):JSON.stringify(n,Ad,2):String(n),Ad=(n,e)=>wd(e)?Ad(n,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[za(r,i)+" =>"]=s,t),{})}:md(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>za(t))}:wt(e)?za(e):we(e)&&!re(e)&&!vd(e)?String(e):e,za=(n,e="")=>{var t;return wt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class bd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sd(n){return new bd(n)}function Rd(){return it}function U_(n,e=!1){it&&it.cleanups.push(n)}let Re;const Wa=new WeakSet;class Pd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rh(this),kd(this);const e=Re,t=Ot;Re=this,Ot=!0;try{return this.fn()}finally{Dd(this),Re=e,Ot=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sl(e);this.deps=this.depsTail=void 0,rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dc(this)&&this.run()}get dirty(){return dc(this)}}let Cd=0,qs,Hs;function Vd(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=qs,qs=n}function nl(){Cd++}function rl(){if(--Cd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function kd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),sl(r),B_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function dc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ri)||(n.globalVersion=ri,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!dc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=Ot;Re=n,Ot=!0;try{kd(n);const s=n.fn(n._value);(e.version===0||zt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,Ot=r,Dd(n),n.flags&=-3}}function sl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)sl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function B_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ot=!0;const Od=[];function mn(){Od.push(Ot),Ot=!1}function _n(){const n=Od.pop();Ot=n===void 0?!0:n}function rh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let ri=0;class j_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Ot||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new j_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,xd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,ri++,this.notify(e)}notify(e){nl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{rl()}}}function xd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Io=new WeakMap,pr=Symbol(""),pc=Symbol(""),si=Symbol("");function at(n,e,t){if(Ot&&Re){let r=Io.get(n);r||Io.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new il),s.map=r,s.key=t),s.track()}}function ln(n,e,t,r,s,i){const a=Io.get(n);if(!a){ri++;return}const c=l=>{l&&l.trigger()};if(nl(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Zo(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===si||!wt(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(si)),e){case"add":l?h&&c(a.get("length")):(c(a.get(pr)),zr(n)&&c(a.get(pc)));break;case"delete":l||(c(a.get(pr)),zr(n)&&c(a.get(pc)));break;case"set":zr(n)&&c(a.get(pr));break}}rl()}function $_(n,e){const t=Io.get(n);return t&&t.get(e)}function Mr(n){const e=ye(n);return e===n?e:(at(e,"iterate",si),Tt(n)?e:e.map(Mt))}function na(n){return at(n=ye(n),"iterate",si),n}function qt(n,e){return yn(n)?Zr(pn(n)?Mt(e):e):Mt(e)}const q_={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>qt(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>re(e)?Mr(e):e))},entries(){return Ka(this,"entries",n=>(n[1]=qt(this,n[1]),n))},every(n,e){return on(this,"every",n,e,void 0,arguments)},filter(n,e){return on(this,"filter",n,e,t=>t.map(r=>qt(this,r)),arguments)},find(n,e){return on(this,"find",n,e,t=>qt(this,t),arguments)},findIndex(n,e){return on(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return on(this,"findLast",n,e,t=>qt(this,t),arguments)},findLastIndex(n,e){return on(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return on(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ga(this,"includes",n)},indexOf(...n){return Ga(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Ga(this,"lastIndexOf",n)},map(n,e){return on(this,"map",n,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...n){return Ds(this,"push",n)},reduce(n,...e){return sh(this,"reduce",n,e)},reduceRight(n,...e){return sh(this,"reduceRight",n,e)},shift(){return Ds(this,"shift")},some(n,e){return on(this,"some",n,e,void 0,arguments)},splice(...n){return Ds(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return Ds(this,"unshift",n)},values(){return Ka(this,"values",n=>qt(this,n))}};function Ka(n,e,t){const r=na(n),s=r[e]();return r!==n&&!Tt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const H_=Array.prototype;function on(n,e,t,r,s,i){const a=na(n),c=a!==n&&!Tt(n),l=a[e];if(l!==H_[e]){const p=l.apply(n,i);return c?Mt(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,qt(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function sh(n,e,t,r){const s=na(n),i=s!==n&&!Tt(n);let a=t,c=!1;s!==n&&(i?(c=r.length===0,a=function(h,d,p){return c&&(c=!1,h=qt(n,h)),t.call(this,h,qt(n,d),p,n)}):t.length>3&&(a=function(h,d,p){return t.call(this,h,d,p,n)}));const l=s[e](a,...r);return c?qt(n,l):l}function Ga(n,e,t){const r=ye(n);at(r,"iterate",si);const s=r[e](...t);return(s===-1||s===!1)&&sa(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function Ds(n,e,t=[]){mn(),nl();const r=ye(n)[e].apply(n,t);return rl(),_n(),r}const z_=Yc("__proto__,__v_isRef,__isVue"),Md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wt));function W_(n){wt(n)||(n=String(n));const e=ye(this);return at(e,"has",n),e.hasOwnProperty(n)}class Ld{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?ny:jd:i?Bd:Ud).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=q_[t]))return l;if(t==="hasOwnProperty")return W_}const c=Reflect.get(e,t,Me(e)?e:r);if((wt(t)?Md.has(t):z_(t))||(s||at(e,"get",t),i))return c;if(Me(c)){const l=a&&Zo(t)?c:c.value;return s&&we(l)?mc(l):l}return we(c)?s?mc(c):ra(c):c}}class Fd extends Ld{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&Zo(t);if(!this._isShallow){const h=yn(i);if(!Tt(r)&&!yn(r)&&(i=ye(i),r=ye(r)),!a&&Me(i)&&!Me(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Te(e,t),l=Reflect.set(e,t,r,Me(e)?e:s);return e===ye(s)&&(c?zt(r,i)&&ln(e,"set",t,r):ln(e,"add",t,r)),l}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&ln(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!wt(t)||!Md.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":pr),Reflect.ownKeys(e)}}class K_ extends Ld{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const G_=new Fd,Q_=new K_,J_=new Fd(!0);const gc=n=>n,Qi=n=>Reflect.getPrototypeOf(n);function X_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=zr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?gc:e?Zr:Mt;return!e&&at(i,"iterate",l?pc:pr),Ze(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}}})}}function Ji(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Y_(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);n||(zt(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=Qi(a),h=e?gc:n?Zr:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(ye(s),"iterate",pr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return n||(zt(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?gc:n?Zr:Mt;return!n&&at(l,"iterate",pr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(t,n?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){const i=ye(this),a=Qi(i),c=ye(s),l=!e&&!Tt(s)&&!yn(s)?c:s;return a.has.call(i,l)||zt(s,l)&&a.has.call(i,s)||zt(c,l)&&a.has.call(i,c)||(i.add(l),ln(i,"add",l,l)),this},set(s,i){!e&&!Tt(i)&&!yn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Qi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?zt(i,d)&&ln(a,"set",s,i):ln(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Qi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&ln(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&ln(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=X_(s,n,e)}),t}function ol(n,e){const t=Y_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const Z_={get:ol(!1,!1)},ey={get:ol(!1,!0)},ty={get:ol(!0,!1)};const Ud=new WeakMap,Bd=new WeakMap,jd=new WeakMap,ny=new WeakMap;function ry(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sy(n){return n.__v_skip||!Object.isExtensible(n)?0:ry(C_(n))}function ra(n){return yn(n)?n:al(n,!1,G_,Z_,Ud)}function iy(n){return al(n,!1,J_,ey,Bd)}function mc(n){return al(n,!0,Q_,ty,jd)}function al(n,e,t,r,s){if(!we(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=sy(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function pn(n){return yn(n)?pn(n.__v_raw):!!(n&&n.__v_isReactive)}function yn(n){return!!(n&&n.__v_isReadonly)}function Tt(n){return!!(n&&n.__v_isShallow)}function sa(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function cl(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&Td(n,"__v_skip",!0),n}const Mt=n=>we(n)?ra(n):n,Zr=n=>we(n)?mc(n):n;function Me(n){return n?n.__v_isRef===!0:!1}function oy(n){return ay(n,!1)}function ay(n,e){return Me(n)?n:new cy(n,e)}class cy{constructor(e,t){this.dep=new il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Tt(e)||yn(e);e=r?e:ye(e),zt(e,t)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function he(n){return Me(n)?n.value:n}const ly={get:(n,e,t)=>e==="__v_raw"?n:he(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Me(s)&&!Me(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function $d(n){return pn(n)?n:new Proxy(n,ly)}function uy(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=fy(n,t);return e}class hy{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=wt(t)?t:String(t),this._raw=ye(e);let s=!0,i=e;if(!re(e)||wt(this._key)||!Zo(this._key))do s=!sa(i)||Tt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=he(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Me(this._raw[this._key])){const t=this._object[this._key];if(Me(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return $_(this._raw,this._key)}}function fy(n,e,t){return new hy(n,e,t)}class dy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Vd(this,!0),!0}get value(){const e=this.dep.track();return Nd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function py(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new dy(r,s,t)}const Xi={},wo=new WeakMap;let lr;function gy(n,e=!1,t=lr){if(t){let r=wo.get(t);r||wo.set(t,r=[]),r.push(n)}}function my(n,e,t=Se){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:Tt(z)||s===!1||s===0?un(z,1):un(z);let d,p,_,b,V=!1,N=!1;if(Me(n)?(p=()=>n.value,V=Tt(n)):pn(n)?(p=()=>h(n),V=!0):re(n)?(N=!0,V=n.some(z=>pn(z)||Tt(z)),p=()=>n.map(z=>{if(Me(z))return z.value;if(pn(z))return h(z);if(le(z))return l?l(z,2):z()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){mn();try{_()}finally{_n()}}const z=lr;lr=d;try{return l?l(n,3,[b]):n(b)}finally{lr=z}}:p=Wt,e&&s){const z=p,oe=s===!0?1/0:s;p=()=>un(z(),oe)}const x=Rd(),Q=()=>{d.stop(),x&&x.active&&Zc(x.effects,d)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),Q()}}let $=N?new Array(n.length).fill(Xi):Xi;const G=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const oe=d.run();if(s||V||(N?oe.some((ve,I)=>zt(ve,$[I])):zt(oe,$))){_&&_();const ve=lr;lr=d;try{const I=[oe,$===Xi?void 0:N&&$[0]===Xi?[]:$,b];$=oe,l?l(e,3,I):e(...I)}finally{lr=ve}}}else d.run()};return c&&c(G),d=new Pd(p),d.scheduler=a?()=>a(G,!1):G,b=z=>gy(z,!1,d),_=d.onStop=()=>{const z=wo.get(d);if(z){if(l)l(z,4);else for(const oe of z)oe();wo.delete(d)}},e?r?G(!0):$=d.run():a?a(G.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function un(n,e=1/0,t){if(e<=0||!we(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Me(n))un(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)un(n[r],e,t);else if(md(n)||zr(n))n.forEach(r=>{un(r,e,t)});else if(vd(n)){for(const r in n)un(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&un(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(n,e,t,r){try{return r?n(...r):n()}catch(s){ia(s,e,t)}}function Yt(n,e,t,r){if(le(n)){const s=yi(n,e,t,r);return s&&_d(s)&&s.catch(i=>{ia(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Yt(n[i],e,t,r));return s}}function ia(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){mn(),yi(i,null,10,[n,l,h]),_n();return}}_y(n,t,s,r,a)}function _y(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let jt=-1;const Wr=[];let Nn=null,Fr=0;const qd=Promise.resolve();let Ao=null;function Hd(n){const e=Ao||qd;return n?e.then(this?n.bind(this):n):e}function yy(n){let e=jt+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=ii(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ll(n){if(!(n.flags&1)){const e=ii(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=ii(t)?pt.push(n):pt.splice(yy(e),0,n),n.flags|=1,zd()}}function zd(){Ao||(Ao=qd.then(Kd))}function vy(n){re(n)?Wr.push(...n):Nn&&n.id===-1?Nn.splice(Fr+1,0,n):n.flags&1||(Wr.push(n),n.flags|=1),zd()}function ih(n,e,t=jt+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wd(n){if(Wr.length){const e=[...new Set(Wr)].sort((t,r)=>ii(t)-ii(r));if(Wr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Fr=0;Fr<Nn.length;Fr++){const t=Nn[Fr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Nn=null,Fr=0}}const ii=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Kd(n){try{for(jt=0;jt<pt.length;jt++){const e=pt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<pt.length;jt++){const e=pt[jt];e&&(e.flags&=-2)}jt=-1,pt.length=0,Wd(),Ao=null,(pt.length||Wr.length)&&Kd()}}let lt=null,Gd=null;function bo(n){const e=lt;return lt=n,Gd=n&&n.type.__scopeId||null,e}function Ms(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&mh(-1);const i=bo(e);let a;try{a=n(...s)}finally{bo(i),r._d&&mh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ns(n,e){if(lt===null)return n;const t=la(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Se]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&un(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function ar(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(mn(),Yt(l,t,8,[n.el,c,n,e]),_n())}}function Ey(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function zs(n,e,t=!1){const r=Tp();if(r||gr){let s=gr?gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Ty(){return!!(Tp()||gr)}const Iy=Symbol.for("v-scx"),wy=()=>zs(Iy);function ao(n,e,t){return Qd(n,e,t)}function Qd(n,e,t=Se){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ze({},t),l=e&&r||!e&&i!=="post";let h;if(ai){if(i==="sync"){const b=wy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Wt,b.resume=Wt,b.pause=Wt,b}}const d=gt;c.call=(b,V,N)=>Yt(b,d,V,N);let p=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():ll(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=my(n,e,c);return ai&&(h?h.push(_):l&&_()),_}function Ay(n,e,t){const r=this.proxy,s=He(n)?n.includes(".")?Jd(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ei(this),c=Qd(s,i.bind(r),t);return a(),c}function Jd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const by=Symbol("_vte"),Sy=n=>n.__isTeleport,Ry=Symbol("_leaveCb");function ul(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ul(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vi(n,e){return le(n)?Ze({name:n.name},e,{setup:n}):n}function Xd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const So=new WeakMap;function Ws(n,e,t,r,s=!1){if(re(n)){n.forEach((N,x)=>Ws(N,e&&(re(e)?e[x]:e),t,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Se?c.refs={}:c.refs,p=c.setupState,_=ye(p),b=p===Se?gd:N=>oh(d,N)?!1:Te(_,N),V=(N,x)=>!(x&&oh(d,x));if(h!=null&&h!==l){if(ah(e),He(h))d[h]=null,b(h)&&(p[h]=null);else if(Me(h)){const N=e;V(h,N.k)&&(h.value=null),N.k&&(d[N.k]=null)}}if(le(l))yi(l,c,12,[a,d]);else{const N=He(l),x=Me(l);if(N||x){const Q=()=>{if(n.f){const $=N?b(l)?p[l]:d[l]:V()||!n.k?l.value:d[n.k];if(s)re($)&&Zc($,i);else if(re($))$.includes(i)||$.push(i);else if(N)d[l]=[i],b(l)&&(p[l]=d[l]);else{const G=[i];V(l,n.k)&&(l.value=G),n.k&&(d[n.k]=G)}}else N?(d[l]=a,b(l)&&(p[l]=a)):x&&(V(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{Q(),So.delete(n)};$.id=-1,So.set(n,$),_t($,t)}else ah(n),Q()}}}function ah(n){const e=So.get(n);e&&(e.flags|=8,So.delete(n))}ta().requestIdleCallback;ta().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,Yd=n=>n.type.__isKeepAlive;function Py(n,e){Zd(n,"a",e)}function Cy(n,e){Zd(n,"da",e)}function Zd(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(oa(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Yd(s.parent.vnode)&&Vy(r,e,t,s),s=s.parent}}function Vy(n,e,t,r){const s=oa(e,n,r,!0);ep(()=>{Zc(r[e],s)},t)}function oa(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{mn();const c=Ei(t),l=Yt(e,t,n,a);return c(),_n(),l});return r?s.unshift(i):s.push(i),i}}const An=n=>(e,t=gt)=>{(!ai||n==="sp")&&oa(n,(...r)=>e(...r),t)},ky=An("bm"),Dy=An("m"),Ny=An("bu"),Oy=An("u"),xy=An("bum"),ep=An("um"),My=An("sp"),Ly=An("rtg"),Fy=An("rtc");function Uy(n,e=gt){oa("ec",n,e)}const By=Symbol.for("v-ndc");function On(n,e,t,r){let s;const i=t,a=re(n);if(a||He(n)){const c=a&&pn(n);let l=!1,h=!1;c&&(l=!Tt(n),h=yn(n),n=na(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Zr(Mt(n[d])):Mt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(we(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function co(n,e,t={},r,s){if(lt.ce||lt.parent&&Kr(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),pe(),xn(Be,null,[It("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),pe();const a=i&&tp(i(t)),c=t.key||a&&a.key,l=xn(Be,{key:(c&&!wt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function tp(n){return n.some(e=>dl(e)?!(e.type===vn||e.type===Be&&!tp(e.children)):!0)?n:null}const _c=n=>n?Ip(n)?la(n):_c(n.parent):null,Ks=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_c(n.parent),$root:n=>_c(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rp(n),$forceUpdate:n=>n.f||(n.f=()=>{ll(n.update)}),$nextTick:n=>n.n||(n.n=Hd.bind(n.proxy)),$watch:n=>Ay.bind(n)}),Qa=(n,e)=>n!==Se&&!n.__isScriptSetup&&Te(n,e),jy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Qa(r,e))return a[e]=1,r[e];if(s!==Se&&Te(s,e))return a[e]=2,s[e];if(Te(i,e))return a[e]=3,i[e];if(t!==Se&&Te(t,e))return a[e]=4,t[e];yc&&(a[e]=0)}}const h=Ks[e];let d,p;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==Se&&Te(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Te(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Qa(s,e)?(s[e]=t,!0):r!==Se&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==Se&&c[0]!=="$"&&Te(n,c)||Qa(e,c)||Te(i,c)||Te(r,c)||Te(Ks,c)||Te(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ch(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let yc=!0;function $y(n){const e=rp(n),t=n.proxy,r=n.ctx;yc=!1,e.beforeCreate&&lh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:N,deactivated:x,beforeDestroy:Q,beforeUnmount:$,destroyed:G,unmounted:z,render:oe,renderTracked:ve,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ht}=e;if(h&&qy(h,r,null),a)for(const ce in a){const me=a[ce];le(me)&&(r[ce]=me.bind(t))}if(s){const ce=s.call(t,t);we(ce)&&(n.data=ra(ce))}if(yc=!0,i)for(const ce in i){const me=i[ce],Pt=le(me)?me.bind(t,t):le(me.get)?me.get.bind(t,t):Wt,er=!le(me)&&le(me.set)?me.set.bind(t):Wt,tn=Ap({get:Pt,set:er});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>tn.value,set:ze=>tn.value=ze})}if(c)for(const ce in c)np(c[ce],r,t,ce);if(l){const ce=le(l)?l.call(t):l;Reflect.ownKeys(ce).forEach(me=>{Ey(me,ce[me])})}d&&lh(d,n,"c");function ke(ce,me){re(me)?me.forEach(Pt=>ce(Pt.bind(t))):me&&ce(me.bind(t))}if(ke(ky,p),ke(Dy,_),ke(Ny,b),ke(Oy,V),ke(Py,N),ke(Cy,x),ke(Uy,m),ke(Fy,ve),ke(Ly,I),ke(xy,$),ke(ep,z),ke(My,y),re(T))if(T.length){const ce=n.exposed||(n.exposed={});T.forEach(me=>{Object.defineProperty(ce,me,{get:()=>t[me],set:Pt=>t[me]=Pt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Wt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),E&&(n.directives=E),y&&Xd(n)}function qy(n,e,t=Wt){re(n)&&(n=vc(n));for(const r in n){const s=n[r];let i;we(s)?"default"in s?i=zs(s.from||r,s.default,!0):i=zs(s.from||r):i=zs(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function lh(n,e,t){Yt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function np(n,e,t,r){let s=r.includes(".")?Jd(t,r):()=>t[r];if(He(n)){const i=e[n];le(i)&&ao(s,i)}else if(le(n))ao(s,n.bind(t));else if(we(n))if(re(n))n.forEach(i=>np(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&ao(s,i,n)}}function rp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Ro(l,h,a,!0)),Ro(l,e,a)),we(e)&&i.set(e,l),l}function Ro(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Ro(n,i,t,!0),s&&s.forEach(a=>Ro(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Hy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Hy={data:uh,props:hh,emits:hh,methods:Ls,computed:Ls,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ls,directives:Ls,watch:Wy,provide:uh,inject:zy};function uh(n,e){return e?n?function(){return Ze(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function zy(n,e){return Ls(vc(n),vc(e))}function vc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ls(n,e){return n?Ze(Object.create(null),n,e):e}function hh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:Ze(Object.create(null),ch(n),ch(e??{})):e}function Wy(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function sp(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function Gy(n,e){return function(r,s=null){le(r)||(r=Ze({},r)),s!=null&&!we(s)&&(s=null);const i=sp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Ky++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||It(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,d,_),l=!0,h._container=d,d.__vue_app__=h,la(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Yt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=gr;gr=h;try{return d()}finally{gr=p}}};return h}}let gr=null;const Qy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nt(e)}Modifiers`]||n[`${Ar(e)}Modifiers`];function Jy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),a=i&&Qy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>He(d)?d.trim():d)),a.number&&(s=t.map(el)));let c,l=r[c=Ha(e)]||r[c=Ha(Nt(e))];!l&&i&&(l=r[c=Ha(Ar(e))]),l&&Yt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Yt(h,n,6,s)}}const Xy=new WeakMap;function ip(n,e,t=!1){const r=t?Xy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=ip(h,e,!0);d&&(c=!0,Ze(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(we(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):Ze(a,i),we(n)&&r.set(n,a),a)}function aa(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,Ar(e))||Te(n,e))}function fh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:N}=n,x=bo(n);let Q,$;try{if(t.shapeFlag&4){const z=s||r,oe=z;Q=Ht(h.call(oe,z,d,p,b,_,V)),$=c}else{const z=e;Q=Ht(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),$=e.props?c:Yy(c)}}catch(z){Gs.length=0,ia(z,n,1),Q=It(vn)}let G=Q;if($&&N!==!1){const z=Object.keys($),{shapeFlag:oe}=G;z.length&&oe&7&&(i&&z.some(Yo)&&($=Zy($,i)),G=es(G,$,!1,!0))}return t.dirs&&(G=es(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&ul(G,t.transition),Q=G,bo(x),Q}const Yy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},Zy=(n,e)=>{const t={};for(const r in n)(!Yo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function ev(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?dh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(op(a,r,_)&&!aa(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?dh(r,a,h):!0:!!a;return!1}function dh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(op(e,n,i)&&!aa(t,i))return!0}return!1}function op(n,e,t){const r=n[t],s=e[t];return t==="style"&&we(r)&&we(s)?!ni(r,s):r!==s}function tv({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const ap={},cp=()=>Object.create(ap),lp=n=>Object.getPrototypeOf(n)===ap;function nv(n,e,t,r=!1){const s={},i=cp();n.propsDefaults=Object.create(null),up(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:iy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function rv(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ye(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(aa(n.emitsOptions,_))continue;const b=e[_];if(l)if(Te(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=Nt(_);s[V]=Ec(l,c,V,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{up(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=Ar(p))===p||!Te(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Ec(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&ln(n.attrs,"set","")}function up(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if($s(l))continue;const h=e[l];let d;s&&Te(s,d=Nt(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:aa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(t),h=c||Se;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Ec(s,l,p,h[p],n,!Te(h,p))}}return a}function Ec(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Ei(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Ar(t))&&(r=!0))}return r}const sv=new WeakMap;function hp(n,e,t=!1){const r=t?sv:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[_,b]=hp(p,e,!0);Ze(a,_),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return we(n)&&r.set(n,Hr),Hr;if(re(i))for(let d=0;d<i.length;d++){const p=Nt(i[d]);ph(p)&&(a[p]=Se)}else if(i)for(const d in i){const p=Nt(d);if(ph(p)){const _=i[d],b=a[p]=re(_)||le(_)?{type:_}:Ze({},_),V=b.type;let N=!1,x=!0;if(re(V))for(let Q=0;Q<V.length;++Q){const $=V[Q],G=le($)&&$.name;if(G==="Boolean"){N=!0;break}else G==="String"&&(x=!1)}else N=le(V)&&V.name==="Boolean";b[0]=N,b[1]=x,(N||Te(b,"default"))&&c.push(p)}}const h=[a,c];return we(n)&&r.set(n,h),h}function ph(n){return n[0]!=="$"&&!$s(n)}const hl=n=>n==="_"||n==="_ctx"||n==="$stable",fl=n=>re(n)?n.map(Ht):[Ht(n)],iv=(n,e,t)=>{if(e._n)return e;const r=Ms((...s)=>fl(e(...s)),t);return r._c=!1,r},fp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(hl(s))continue;const i=n[s];if(le(i))e[s]=iv(s,i,r);else if(i!=null){const a=fl(i);e[s]=()=>a}}},dp=(n,e)=>{const t=fl(e);n.slots.default=()=>t},pp=(n,e,t)=>{for(const r in e)(t||!hl(r))&&(n[r]=e[r])},ov=(n,e,t)=>{const r=n.slots=cp();if(n.vnode.shapeFlag&32){const s=e._;s?(pp(r,e,t),t&&Td(r,"_",s,!0)):fp(e,r)}else e&&dp(n,e)},av=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Se;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:pp(s,e,t):(i=!e.$stable,fp(e,s)),a=e}else e&&(dp(n,e),a={default:1});if(i)for(const c in s)!hl(c)&&a[c]==null&&delete s[c]},_t=fv;function cv(n){return lv(n)}function lv(n,e){const t=ta();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Wt,insertStaticContent:V}=n,N=(v,w,C,F=null,O=null,L=null,q=void 0,j=null,U=!!w.dynamicChildren)=>{if(v===w)return;v&&!Os(v,w)&&(F=nn(v),ze(v,O,L,!0),v=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:H}=w;switch(M){case ca:x(v,w,C,F);break;case vn:Q(v,w,C,F);break;case Xa:v==null&&$(w,C,F,q);break;case Be:S(v,w,C,F,O,L,q,j,U);break;default:H&1?oe(v,w,C,F,O,L,q,j,U):H&6?E(v,w,C,F,O,L,q,j,U):(H&64||H&128)&&M.process(v,w,C,F,O,L,q,j,U,Ut)}Y!=null&&O?Ws(Y,v&&v.ref,L,w||v,!w):Y==null&&v&&v.ref!=null&&Ws(v.ref,null,L,v,!0)},x=(v,w,C,F)=>{if(v==null)r(w.el=c(w.children),C,F);else{const O=w.el=v.el;w.children!==v.children&&h(O,w.children)}},Q=(v,w,C,F)=>{v==null?r(w.el=l(w.children||""),C,F):w.el=v.el},$=(v,w,C,F)=>{[v.el,v.anchor]=V(v.children,w,C,F,v.el,v.anchor)},G=({el:v,anchor:w},C,F)=>{let O;for(;v&&v!==w;)O=_(v),r(v,C,F),v=O;r(w,C,F)},z=({el:v,anchor:w})=>{let C;for(;v&&v!==w;)C=_(v),s(v),v=C;s(w)},oe=(v,w,C,F,O,L,q,j,U)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),v==null)ve(w,C,F,O,L,q,j,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,w,O,L,q,j,U)}finally{M&&M._endPatch()}}},ve=(v,w,C,F,O,L,q,j)=>{let U,M;const{props:Y,shapeFlag:H,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,L,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&m(v.children,U,null,F,O,Ja(v,L),q,j),Z&&ar(v,null,F,"created"),I(U,v,v.scopeId,q,F),Y){for(const ae in Y)ae!=="value"&&!$s(ae)&&i(U,ae,null,Y[ae],L,F);"value"in Y&&i(U,"value",null,Y.value,L),(M=Y.onVnodeBeforeMount)&&Bt(M,F,v)}Z&&ar(v,null,F,"beforeMount");const ee=uv(O,J);ee&&J.beforeEnter(U),r(U,w,C),((M=Y&&Y.onVnodeMounted)||ee||Z)&&_t(()=>{try{M&&Bt(M,F,v),ee&&J.enter(U),Z&&ar(v,null,F,"mounted")}finally{}},O)},I=(v,w,C,F,O)=>{if(C&&b(v,C),F)for(let L=0;L<F.length;L++)b(v,F[L]);if(O){let L=O.subTree;if(w===L||yp(L.type)&&(L.ssContent===w||L.ssFallback===w)){const q=O.vnode;I(v,q,q.scopeId,q.slotScopeIds,O.parent)}}},m=(v,w,C,F,O,L,q,j,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=j?cn(v[M]):Ht(v[M]);N(null,Y,w,C,F,O,L,q,j)}},y=(v,w,C,F,O,L,q)=>{const j=w.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=w;U|=v.patchFlag&16;const H=v.props||Se,J=w.props||Se;let Z;if(C&&cr(C,!1),(Z=J.onVnodeBeforeUpdate)&&Bt(Z,C,w,v),Y&&ar(w,v,C,"beforeUpdate"),C&&cr(C,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(j,""),M?T(v.dynamicChildren,M,j,C,F,Ja(w,O),L):q||me(v,w,j,null,C,F,Ja(w,O),L,!1),U>0){if(U&16)A(j,H,J,C,O);else if(U&2&&H.class!==J.class&&i(j,"class",null,J.class,O),U&4&&i(j,"style",H.style,J.style,O),U&8){const ee=w.dynamicProps;for(let ae=0;ae<ee.length;ae++){const Ee=ee[ae],De=H[Ee],Fe=J[Ee];(Fe!==De||Ee==="value")&&i(j,Ee,De,Fe,O,C)}}U&1&&v.children!==w.children&&d(j,w.children)}else!q&&M==null&&A(j,H,J,C,O);((Z=J.onVnodeUpdated)||Y)&&_t(()=>{Z&&Bt(Z,C,w,v),Y&&ar(w,v,C,"updated")},F)},T=(v,w,C,F,O,L,q)=>{for(let j=0;j<w.length;j++){const U=v[j],M=w[j],Y=U.el&&(U.type===Be||!Os(U,M)||U.shapeFlag&198)?p(U.el):C;N(U,M,Y,null,F,O,L,q,!0)}},A=(v,w,C,F,O)=>{if(w!==C){if(w!==Se)for(const L in w)!$s(L)&&!(L in C)&&i(v,L,w[L],null,O,F);for(const L in C){if($s(L))continue;const q=C[L],j=w[L];q!==j&&L!=="value"&&i(v,L,j,q,O,F)}"value"in C&&i(v,"value",w.value,C.value,O)}},S=(v,w,C,F,O,L,q,j,U)=>{const M=w.el=v?v.el:c(""),Y=w.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:Z}=w;Z&&(j=j?j.concat(Z):Z),v==null?(r(M,C,F),r(Y,C,F),m(w.children||[],C,Y,O,L,q,j,U)):H>0&&H&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(T(v.dynamicChildren,J,C,O,L,q,j),(w.key!=null||O&&w===O.subTree)&&gp(v,w,!0)):me(v,w,C,Y,O,L,q,j,U)},E=(v,w,C,F,O,L,q,j,U)=>{w.slotScopeIds=j,v==null?w.shapeFlag&512?O.ctx.activate(w,C,F,q,U):ht(w,C,F,O,L,q,U):Ft(v,w,U)},ht=(v,w,C,F,O,L,q)=>{const j=v.component=vv(v,F,O);if(Yd(v)&&(j.ctx.renderer=Ut),Ev(j,!1,q),j.asyncDep){if(O&&O.registerDep(j,ke,q),!v.el){const U=j.subTree=It(vn);Q(null,U,w,C),v.placeholder=U.el}}else ke(j,v,w,C,O,L,q)},Ft=(v,w,C)=>{const F=w.component=v.component;if(ev(v,w,C))if(F.asyncDep&&!F.asyncResolved){ce(F,w,C);return}else F.next=w,F.update();else w.el=v.el,F.vnode=w},ke=(v,w,C,F,O,L,q)=>{const j=()=>{if(v.isMounted){let{next:H,bu:J,u:Z,parent:ee,vnode:ae}=v;{const tt=mp(v);if(tt){H&&(H.el=ae.el,ce(v,H,q)),tt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||M()},O)});return}}let Ee=H,De;cr(v,!1),H?(H.el=ae.el,ce(v,H,q)):H=ae,J&&oo(J),(De=H.props&&H.props.onVnodeBeforeUpdate)&&Bt(De,ee,H,ae),cr(v,!0);const Fe=fh(v),At=v.subTree;v.subTree=Fe,N(At,Fe,p(At.el),nn(At),v,O,L),H.el=Fe.el,Ee===null&&tv(v,Fe.el),Z&&_t(Z,O),(De=H.props&&H.props.onVnodeUpdated)&&_t(()=>Bt(De,ee,H,ae),O)}else{let H;const{el:J,props:Z}=w,{bm:ee,m:ae,parent:Ee,root:De,type:Fe}=v,At=Kr(w);cr(v,!1),ee&&oo(ee),!At&&(H=Z&&Z.onVnodeBeforeMount)&&Bt(H,Ee,w),cr(v,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(Fe,v.parent?v.parent.type:void 0);const tt=v.subTree=fh(v);N(null,tt,C,F,v,O,L),w.el=tt.el}if(ae&&_t(ae,O),!At&&(H=Z&&Z.onVnodeMounted)){const tt=w;_t(()=>Bt(H,Ee,tt),O)}(w.shapeFlag&256||Ee&&Kr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&_t(v.a,O),v.isMounted=!0,w=C=F=null}};v.scope.on();const U=v.effect=new Pd(j);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>ll(Y),cr(v,!0),M()},ce=(v,w,C)=>{w.component=v;const F=v.vnode.props;v.vnode=w,v.next=null,rv(v,w.props,F,C),av(v,w.children,C),mn(),ih(v),_n()},me=(v,w,C,F,O,L,q,j,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,H=w.children,{patchFlag:J,shapeFlag:Z}=w;if(J>0){if(J&128){er(M,H,C,F,O,L,q,j,U);return}else if(J&256){Pt(M,H,C,F,O,L,q,j,U);return}}Z&8?(Y&16&&nr(M,O,L),H!==M&&d(C,H)):Y&16?Z&16?er(M,H,C,F,O,L,q,j,U):nr(M,O,L,!0):(Y&8&&d(C,""),Z&16&&m(H,C,F,O,L,q,j,U))},Pt=(v,w,C,F,O,L,q,j,U)=>{v=v||Hr,w=w||Hr;const M=v.length,Y=w.length,H=Math.min(M,Y);let J;for(J=0;J<H;J++){const Z=w[J]=U?cn(w[J]):Ht(w[J]);N(v[J],Z,C,null,O,L,q,j,U)}M>Y?nr(v,O,L,!0,!1,H):m(w,C,F,O,L,q,j,U,H)},er=(v,w,C,F,O,L,q,j,U)=>{let M=0;const Y=w.length;let H=v.length-1,J=Y-1;for(;M<=H&&M<=J;){const Z=v[M],ee=w[M]=U?cn(w[M]):Ht(w[M]);if(Os(Z,ee))N(Z,ee,C,null,O,L,q,j,U);else break;M++}for(;M<=H&&M<=J;){const Z=v[H],ee=w[J]=U?cn(w[J]):Ht(w[J]);if(Os(Z,ee))N(Z,ee,C,null,O,L,q,j,U);else break;H--,J--}if(M>H){if(M<=J){const Z=J+1,ee=Z<Y?w[Z].el:F;for(;M<=J;)N(null,w[M]=U?cn(w[M]):Ht(w[M]),C,ee,O,L,q,j,U),M++}}else if(M>J)for(;M<=H;)ze(v[M],O,L,!0),M++;else{const Z=M,ee=M,ae=new Map;for(M=ee;M<=J;M++){const Qe=w[M]=U?cn(w[M]):Ht(w[M]);Qe.key!=null&&ae.set(Qe.key,M)}let Ee,De=0;const Fe=J-ee+1;let At=!1,tt=0;const Sn=new Array(Fe);for(M=0;M<Fe;M++)Sn[M]=0;for(M=Z;M<=H;M++){const Qe=v[M];if(De>=Fe){ze(Qe,O,L,!0);continue}let bt;if(Qe.key!=null)bt=ae.get(Qe.key);else for(Ee=ee;Ee<=J;Ee++)if(Sn[Ee-ee]===0&&Os(Qe,w[Ee])){bt=Ee;break}bt===void 0?ze(Qe,O,L,!0):(Sn[bt-ee]=M+1,bt>=tt?tt=bt:At=!0,N(Qe,w[bt],C,null,O,L,q,j,U),De++)}const vs=At?hv(Sn):Hr;for(Ee=vs.length-1,M=Fe-1;M>=0;M--){const Qe=ee+M,bt=w[Qe],Ni=w[Qe+1],kr=Qe+1<Y?Ni.el||_p(Ni):F;Sn[M]===0?N(null,bt,C,kr,O,L,q,j,U):At&&(Ee<0||M!==vs[Ee]?tn(bt,C,kr,2):Ee--)}}},tn=(v,w,C,F,O=null)=>{const{el:L,type:q,transition:j,children:U,shapeFlag:M}=v;if(M&6){tn(v.component.subTree,w,C,F);return}if(M&128){v.suspense.move(w,C,F);return}if(M&64){q.move(v,w,C,Ut);return}if(q===Be){r(L,w,C);for(let H=0;H<U.length;H++)tn(U[H],w,C,F);r(v.anchor,w,C);return}if(q===Xa){G(v,w,C);return}if(F!==2&&M&1&&j)if(F===0)j.beforeEnter(L),r(L,w,C),_t(()=>j.enter(L),O);else{const{leave:H,delayLeave:J,afterLeave:Z}=j,ee=()=>{v.ctx.isUnmounted?s(L):r(L,w,C)},ae=()=>{L._isLeaving&&L[Ry](!0),H(L,()=>{ee(),Z&&Z()})};J?J(L,ee,ae):ae()}else r(L,w,C)},ze=(v,w,C,F=!1,O=!1)=>{const{type:L,props:q,ref:j,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:Z,memo:ee}=v;if(H===-2&&(O=!1),j!=null&&(mn(),Ws(j,null,C,v,!0),_n()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(v);return}const ae=Y&1&&J,Ee=!Kr(v);let De;if(Ee&&(De=q&&q.onVnodeBeforeUnmount)&&Bt(De,w,v),Y&6)tr(v.component,C,F);else{if(Y&128){v.suspense.unmount(C,F);return}ae&&ar(v,null,w,"beforeUnmount"),Y&64?v.type.remove(v,w,C,Ut,F):M&&!M.hasOnce&&(L!==Be||H>0&&H&64)?nr(M,w,C,!1,!0):(L===Be&&H&384||!O&&Y&16)&&nr(U,w,C),F&&We(v)}const Fe=ee!=null&&Z==null;(Ee&&(De=q&&q.onVnodeUnmounted)||ae||Fe)&&_t(()=>{De&&Bt(De,w,v),ae&&ar(v,null,w,"unmounted"),Fe&&(v.el=null)},C)},We=v=>{const{type:w,el:C,anchor:F,transition:O}=v;if(w===Be){Ca(C,F);return}if(w===Xa){z(v);return}const L=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:j}=O,U=()=>q(C,L);j?j(v.el,L,U):U()}else L()},Ca=(v,w)=>{let C;for(;v!==w;)C=_(v),s(v),v=C;s(w)},tr=(v,w,C)=>{const{bum:F,scope:O,job:L,subTree:q,um:j,m:U,a:M}=v;gh(U),gh(M),F&&oo(F),O.stop(),L&&(L.flags|=8,ze(q,v,w,C)),j&&_t(j,w),_t(()=>{v.isUnmounted=!0},w)},nr=(v,w,C,F=!1,O=!1,L=0)=>{for(let q=L;q<v.length;q++)ze(v[q],w,C,F,O)},nn=v=>{if(v.shapeFlag&6)return nn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=_(v.anchor||v.el),C=w&&w[by];return C?_(C):w};let _s=!1;const Di=(v,w,C)=>{let F;v==null?w._vnode&&(ze(w._vnode,null,null,!0),F=w._vnode.component):N(w._vnode||null,v,w,null,null,null,C),w._vnode=v,_s||(_s=!0,ih(F),Wd(),_s=!1)},Ut={p:N,um:ze,m:tn,r:We,mt:ht,mc:m,pc:me,pbc:T,n:nn,o:n};return{render:Di,hydrate:void 0,createApp:Gy(Di)}}function Ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function cr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function uv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=cn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&gp(a,c)),c.type===ca&&(c.patchFlag===-1&&(c=s[i]=cn(c)),c.el=a.el),c.type===vn&&!c.el&&(c.el=a.el)}}function hv(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function mp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function gh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _p(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?_p(e.subTree):null}const yp=n=>n.__isSuspense;function fv(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):vy(n)}const Be=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Gs=[];let Et=null;function pe(n=!1){Gs.push(Et=n?null:[])}function dv(){Gs.pop(),Et=Gs[Gs.length-1]||null}let oi=1;function mh(n,e=!1){oi+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function vp(n){return n.dynamicChildren=oi>0?Et||Hr:null,dv(),oi>0&&Et&&Et.push(n),n}function be(n,e,t,r,s,i){return vp(xe(n,e,t,r,s,i,!0))}function xn(n,e,t,r,s){return vp(It(n,e,t,r,s,!0))}function dl(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const Ep=({key:n})=>n??null,lo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?He(n)||Me(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function xe(n,e=null,t=null,r=0,s=null,i=n===Be?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ep(e),ref:e&&lo(e),scopeId:Gd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(pl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=He(t)?8:16),oi>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const It=pv;function pv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===By)&&(n=vn),dl(n)){const c=es(n,e,!0);return t&&pl(c,t),oi>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(n)]=c:Et.push(c)),c.patchFlag=-2,c}if(Av(n)&&(n=n.__vccOpts),e){e=gv(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=tl(c)),we(l)&&(sa(l)&&!re(l)&&(l=Ze({},l)),e.style=cs(l))}const a=He(n)?1:yp(n)?128:Sy(n)?64:we(n)?4:le(n)?2:0;return xe(n,e,t,r,s,a,i,!0)}function gv(n){return n?sa(n)||lp(n)?Ze({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?mv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Ep(h),ref:e&&e.ref?t&&i?re(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Be?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&ul(d,l.clone(d)),d}function Ur(n=" ",e=0){return It(ca,null,n,e)}function Po(n="",e=!1){return e?(pe(),xn(vn,null,n)):It(vn,null,n)}function Ht(n){return n==null||typeof n=="boolean"?It(vn):re(n)?It(Be,null,n.slice()):dl(n)?cn(n):It(ca,null,String(n))}function cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function pl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!lp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[Ur(e)]):t=8);n.children=e,n.shapeFlag|=t}function mv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tl([e.class,r.class]));else if(s==="style")e.style=cs([e.style,r.style]);else if(Xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Yo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Bt(n,e,t,r=null){Yt(n,e,7,[t,r])}const _v=sp();let yv=0;function vv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||_v,i={uid:yv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(r,s),emitsOptions:ip(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),n.ce&&n.ce(i),i}let gt=null;const Tp=()=>gt||lt;let Co,Tc;{const n=ta(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),Tc=e("__VUE_SSR_SETTERS__",t=>ai=t)}const Ei=n=>{const e=gt;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(e)}},_h=()=>{gt&&gt.scope.off(),Co(null)};function Ip(n){return n.vnode.shapeFlag&4}let ai=!1;function Ev(n,e=!1,t=!1){e&&Tc(e);const{props:r,children:s}=n.vnode,i=Ip(n);nv(n,r,i,e),ov(n,s,t||e);const a=i?Tv(n,e):void 0;return e&&Tc(!1),a}function Tv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jy);const{setup:r}=t;if(r){mn();const s=n.setupContext=r.length>1?wv(n):null,i=Ei(n),a=yi(r,n,0,[n.props,s]),c=_d(a);if(_n(),i(),(c||n.sp)&&!Kr(n)&&Xd(n),c){if(a.then(_h,_h),e)return a.then(l=>{yh(n,l)}).catch(l=>{ia(l,n,0)});n.asyncDep=a}else yh(n,a)}else wp(n)}function yh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:we(e)&&(n.setupState=$d(e)),wp(n)}function wp(n,e,t){const r=n.type;n.render||(n.render=r.render||Wt);{const s=Ei(n);mn();try{$y(n)}finally{_n(),s()}}}const Iv={get(n,e){return at(n,"get",""),n[e]}};function wv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Iv),slots:n.slots,emit:n.emit,expose:e}}function la(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(cl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function Av(n){return le(n)&&"__vccOpts"in n}const Ap=(n,e)=>py(n,e,ai),bv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ic;const vh=typeof window<"u"&&window.trustedTypes;if(vh)try{Ic=vh.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=Ic?n=>Ic.createHTML(n):n=>n,Sv="http://www.w3.org/2000/svg",Rv="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,Eh=an&&an.createElement("template"),Pv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?an.createElementNS(Sv,n):e==="mathml"?an.createElementNS(Rv,n):t?an.createElement(n,{is:t}):an.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>an.createTextNode(n),createComment:n=>an.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>an.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Eh.innerHTML=bp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Eh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Cv=Symbol("_vtc");function Vv(n,e,t){const r=n[Cv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Th=Symbol("_vod"),kv=Symbol("_vsh"),Dv=Symbol(""),Nv=/(?:^|;)\s*display\s*:/;function Ov(n,e,t){const r=n.style,s=He(t);let i=!1;if(t&&!s){if(e)if(He(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&uo(r,c,"")}else for(const a in e)t[a]==null&&uo(r,a,"");for(const a in t)a==="display"&&(i=!0),uo(r,a,t[a])}else if(s){if(e!==t){const a=r[Dv];a&&(t+=";"+a),r.cssText=t,i=Nv.test(t)}}else e&&n.removeAttribute("style");Th in n&&(n[Th]=i?r.display:"",n[kv]&&(r.display="none"))}const Ih=/\s*!important$/;function uo(n,e,t){if(re(t))t.forEach(r=>uo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=xv(n,e);Ih.test(t)?n.setProperty(Ar(r),t.replace(Ih,""),"important"):n[r]=t}}const wh=["Webkit","Moz","ms"],Ya={};function xv(n,e){const t=Ya[e];if(t)return t;let r=Nt(e);if(r!=="filter"&&r in n)return Ya[e]=r;r=Ed(r);for(let s=0;s<wh.length;s++){const i=wh[s]+r;if(i in n)return Ya[e]=i}return e}const Ah="http://www.w3.org/1999/xlink";function bh(n,e,t,r,s,i=L_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ah,e.slice(6,e.length)):n.setAttributeNS(Ah,e,t):t==null||i&&!Id(t)?n.removeAttribute(e):n.setAttribute(e,i?"":wt(t)?String(t):t)}function Sh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Id(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function hr(n,e,t,r){n.addEventListener(e,t,r)}function Mv(n,e,t,r){n.removeEventListener(e,t,r)}const Rh=Symbol("_vei");function Lv(n,e,t,r,s=null){const i=n[Rh]||(n[Rh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Fv(e);if(r){const h=i[e]=jv(r,s);hr(n,c,h,l)}else a&&(Mv(n,c,a,l),i[e]=void 0)}}const Ph=/(?:Once|Passive|Capture)$/;function Fv(n){let e;if(Ph.test(n)){e={};let r;for(;r=n.match(Ph);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ar(n.slice(2)),e]}let Za=0;const Uv=Promise.resolve(),Bv=()=>Za||(Uv.then(()=>Za=0),Za=Date.now());function jv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Yt($v(r,t.value),e,5,[r])};return t.value=n,t.attached=Bv(),t}function $v(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Vv(n,r,a):e==="style"?Ov(n,t,r):Xo(e)?Yo(e)||Lv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hv(n,e,r,a))?(Sh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bh(n,e,r,a,i,e!=="value")):n._isVueCE&&(zv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!He(r)))?Sh(n,Nt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),bh(n,e,r,a))};function Hv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ch(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&He(t)?!1:e in n}function zv(n,e){const t=n._def.props;if(!t)return!1;const r=Nt(e);return Array.isArray(t)?t.some(s=>Nt(s)===r):Object.keys(t).some(s=>Nt(s)===r)}const Vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>oo(e,t):e};function Wv(n){n.target.composing=!0}function Vh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign");function kh(n,e,t){return e&&(n=n.trim()),t&&(n=el(n)),n}const Kv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Gr]=Vo(s);const i=r||s.props&&s.props.type==="number";hr(n,e?"change":"input",a=>{a.target.composing||n[Gr](kh(n.value,t,i))}),(t||i)&&hr(n,"change",()=>{n.value=kh(n.value,t,i)}),e||(hr(n,"compositionstart",Wv),hr(n,"compositionend",Vh),hr(n,"change",Vh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Gr]=Vo(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,l=e??"";if(c===l)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Yi={created(n,{value:e},t){n.checked=ni(e,t.props.value),n[Gr]=Vo(t),hr(n,"change",()=>{n[Gr](Gv(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Gr]=Vo(r),e!==t&&(n.checked=ni(e,r.props.value))}};function Gv(n){return"_value"in n?n._value:n.value}const Qv=Ze({patchProp:qv},Pv);let Dh;function Jv(){return Dh||(Dh=cv(Qv))}const Xv=((...n)=>{const e=Jv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Zv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Yv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Yv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zv(n){return He(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sp;const ua=n=>Sp=n,Rp=Symbol();function wc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Qs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Qs||(Qs={}));function eE(){const n=Sd(!0),e=n.run(()=>oy({}));let t=[],r=[];const s=cl({install(i){ua(s),s._a=i,i.provide(Rp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Pp=()=>{};function Nh(n,e,t,r=Pp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Rd()&&U_(s),s}function Lr(n,...e){n.forEach(t=>{t(...e)})}const tE=n=>n(),Oh=Symbol(),ec=Symbol();function Ac(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];wc(s)&&wc(r)&&n.hasOwnProperty(t)&&!Me(r)&&!pn(r)?n[t]=Ac(s,r):n[t]=r}return n}const nE=Symbol();function rE(n){return!wc(n)||!Object.prototype.hasOwnProperty.call(n,nE)}const{assign:Dn}=Object;function sE(n){return!!(Me(n)&&n.effect)}function iE(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=uy(t.state.value[n]);return Dn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=cl(Ap(()=>{ua(t);const b=t._s.get(n);return a[_].call(b,b)})),p),{}))}return l=Cp(n,h,e,t,r,!0),l}function Cp(n,e,t={},r,s,i){let a;const c=Dn({actions:{}},t),l={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={});let N;function x(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:Qs.patchFunction,storeId:n,events:b}):(Ac(r.state.value[n],m),y={type:Qs.patchObject,payload:m,storeId:n,events:b});const T=N=Symbol();Hd().then(()=>{N===T&&(h=!0)}),d=!0,Lr(p,y,r.state.value[n])}const Q=i?function(){const{state:y}=t,T=y?y():{};this.$patch(A=>{Dn(A,T)})}:Pp;function $(){a.stop(),p.clear(),_.clear(),r._s.delete(n)}const G=(m,y="")=>{if(Oh in m)return m[ec]=y,m;const T=function(){ua(r);const A=Array.from(arguments),S=new Set,E=new Set;function ht(ce){S.add(ce)}function Ft(ce){E.add(ce)}Lr(_,{args:A,name:T[ec],store:oe,after:ht,onError:Ft});let ke;try{ke=m.apply(this&&this.$id===n?this:oe,A)}catch(ce){throw Lr(E,ce),ce}return ke instanceof Promise?ke.then(ce=>(Lr(S,ce),ce)).catch(ce=>(Lr(E,ce),Promise.reject(ce))):(Lr(S,ke),ke)};return T[Oh]=!0,T[ec]=y,T},z={_p:r,$id:n,$onAction:Nh.bind(null,_),$patch:x,$reset:Q,$subscribe(m,y={}){const T=Nh(p,m,y.detached,()=>A()),A=a.run(()=>ao(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:Qs.direct,events:b},S)},Dn({},l,y)));return T},$dispose:$},oe=ra(z);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||tE)(()=>r._e.run(()=>(a=Sd()).run(()=>e({action:G}))));for(const m in I){const y=I[m];if(Me(y)&&!sE(y)||pn(y))i||(V&&rE(y)&&(Me(y)?y.value=V[m]:Ac(y,V[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=G(y,m);I[m]=T,c.actions[m]=y}}return Dn(oe,I),Dn(ye(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{x(y=>{Dn(y,m)})}}),r._p.forEach(m=>{Dn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function oE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Ty();return a=a||(l?zs(Rp,null):null),a&&ua(a),a=Sp,a._s.has(n)||(s?Cp(n,e,r,a):iE(n,r,a)),a._s.get(n)}return i.$id=n,i}function aE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function gl(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=gl(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Vp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return gl(n,Vp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function kp(n,e){return e.map(t=>t.split(".")).map(t=>[t,aE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>gl(t,r[1],r[0]),{})}function Dp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Vp(t,r),n)}function xh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=t.deserialize(p),b=i?kp(_,i):_,V=a?Dp(b,a):b;n.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Mh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?kp(n,i):n,l=a?Dp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function cE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function lE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{xh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{Mh(s.$state,c)})},a.forEach(c=>{xh(s,c,n),s.$subscribe((l,h)=>Mh(h,c),{detached:!0})})}function uE(n={}){return function(e){lE(e,t=>{const r=cE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var hE=uE();const fE=()=>{};var Lh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(t[d],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Np(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new pE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(n){const e=Np(n);return Op.encodeByteArray(e,!0)},ko=function(n){return gE(n).replace(/\./g,"")},xp=function(n){try{return Op.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=()=>mE().__FIREBASE_DEFAULTS__,yE=()=>{if(typeof process>"u"||typeof Lh>"u")return;const n=Lh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xp(n[1]);return e&&JSON.parse(e)},ha=()=>{try{return fE()||_E()||yE()||vE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mp=n=>{var e,t;return(t=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},EE=n=>{const e=Mp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lp=()=>{var n;return(n=ha())===null||n===void 0?void 0:n.config},Fp=n=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Up(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ko(JSON.stringify(t)),ko(JSON.stringify(a)),""].join(".")}const Js={};function wE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?n.emulator.push(e):n.prod.push(e);return n}function AE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Fh=!1;function Bp(n,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Js[n]===e||Js[n]||Fh)return;Js[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=wE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Fh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=AE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),x=document.getElementById(N)||document.createElement("a"),Q=t("preprendIcon"),$=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const G=_.element;c(G),d(x,N);const z=h();l($,Q),G.append($,V,x,z),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function SE(){var n;const e=(n=ha())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function CE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VE(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kE(){return!SE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DE(){try{return typeof indexedDB=="object"}catch{return!1}}function NE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=OE,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?xE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new bn(s,c,r)}}function xE(n,e){return n.replace(ME,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ME=/\{\$([^}]+)}/g;function LE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Uh(i)&&Uh(a)){if(!vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Uh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function FE(n,e){const t=new UE(n,e);return t.subscribe.bind(t)}class UE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");BE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){return n&&n._delegate?n._delegate:n}class Er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new TE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qE(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(n){return n===ur?void 0:n}function qE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const zE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},WE=fe.INFO,KE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},GE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=KE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=WE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const QE=(n,e)=>e.some(t=>n instanceof t);let Bh,jh;function JE(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jp=new WeakMap,bc=new WeakMap,$p=new WeakMap,nc=new WeakMap,_l=new WeakMap;function YE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Bn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jp.set(t,n)}).catch(()=>{}),_l.set(e,n),e}function ZE(n){if(bc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});bc.set(n,e)}let Sc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$p.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eT(n){Sc=n(Sc)}function tT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(rc(this),e,...t);return $p.set(r,e.sort?e.sort():[e]),Bn(r)}:XE().includes(n)?function(...e){return n.apply(rc(this),e),Bn(jp.get(this))}:function(...e){return Bn(n.apply(rc(this),e))}}function nT(n){return typeof n=="function"?tT(n):(n instanceof IDBTransaction&&ZE(n),QE(n,JE())?new Proxy(n,Sc):n)}function Bn(n){if(n instanceof IDBRequest)return YE(n);if(nc.has(n))return nc.get(n);const e=nT(n);return e!==n&&(nc.set(n,e),_l.set(e,n)),e}const rc=n=>_l.get(n);function rT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const sT=["get","getKey","getAll","getAllKeys","count"],iT=["put","add","delete","clear"],sc=new Map;function $h(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=iT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return sc.set(e,i),i}eT(n=>({...n,get:(e,t,r)=>$h(e,t)||n.get(e,t,r),has:(e,t)=>!!$h(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function aT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",qh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new ml("@firebase/app"),cT="@firebase/app-compat",lT="@firebase/analytics-compat",uT="@firebase/analytics",hT="@firebase/app-check-compat",fT="@firebase/app-check",dT="@firebase/auth",pT="@firebase/auth-compat",gT="@firebase/database",mT="@firebase/data-connect",_T="@firebase/database-compat",yT="@firebase/functions",vT="@firebase/functions-compat",ET="@firebase/installations",TT="@firebase/installations-compat",IT="@firebase/messaging",wT="@firebase/messaging-compat",AT="@firebase/performance",bT="@firebase/performance-compat",ST="@firebase/remote-config",RT="@firebase/remote-config-compat",PT="@firebase/storage",CT="@firebase/storage-compat",VT="@firebase/firestore",kT="@firebase/ai",DT="@firebase/firestore-compat",NT="firebase",OT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="[DEFAULT]",xT={[Rc]:"fire-core",[cT]:"fire-core-compat",[uT]:"fire-analytics",[lT]:"fire-analytics-compat",[fT]:"fire-app-check",[hT]:"fire-app-check-compat",[dT]:"fire-auth",[pT]:"fire-auth-compat",[gT]:"fire-rtdb",[mT]:"fire-data-connect",[_T]:"fire-rtdb-compat",[yT]:"fire-fn",[vT]:"fire-fn-compat",[ET]:"fire-iid",[TT]:"fire-iid-compat",[IT]:"fire-fcm",[wT]:"fire-fcm-compat",[AT]:"fire-perf",[bT]:"fire-perf-compat",[ST]:"fire-rc",[RT]:"fire-rc-compat",[PT]:"fire-gcs",[CT]:"fire-gcs-compat",[VT]:"fire-fst",[DT]:"fire-fst-compat",[kT]:"fire-vertex","fire-js":"fire-js",[NT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,MT=new Map,Cc=new Map;function Hh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(Cc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,n);for(const t of Do.values())Hh(t,n);for(const t of MT.values())Hh(t,n);return!0}function yl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ti("app","Firebase",LT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=OT;function qp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(t||(t=Lp()),!t)throw jn.create("no-options");const i=Do.get(s);if(i){if(vr(t,i.options)&&vr(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new HE(s);for(const l of Cc.values())a.addComponent(l);const c=new FT(t,r,a);return Do.set(s,c),c}function Hp(n=Pc){const e=Do.get(n);if(!e&&n===Pc&&Lp())return qp();if(!e)throw jn.create("no-app",{appName:n});return e}function $n(n,e,t){var r;let s=(r=xT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}ts(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebase-heartbeat-database",BT=1,ci="firebase-heartbeat-store";let ic=null;function zp(){return ic||(ic=rT(UT,BT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ci)}catch(t){console.warn(t)}}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),ic}async function jT(n){try{const t=(await zp()).transaction(ci),r=await t.objectStore(ci).get(Wp(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function zh(n,e){try{const r=(await zp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Wp(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Wp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=1024,qT=30;class HT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qT){const a=KT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wh(),{heartbeatsToSend:r,unsentEntries:s}=zT(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function zT(n,e=$T){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Kh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Kh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class WT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?NE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(n){return ko(JSON.stringify({version:2,heartbeats:n})).length}function KT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n){ts(new Er("platform-logger",e=>new oT(e),"PRIVATE")),ts(new Er("heartbeat",e=>new HT(e),"PRIVATE")),$n(Rc,qh,n),$n(Rc,qh,"esm2017"),$n("fire-js","")}GT("");function vl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Kp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QT=Kp,Gp=new Ti("auth","Firebase",Kp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new ml("@firebase/auth");function JT(n,...e){No.logLevel<=fe.WARN&&No.warn(`Auth (${us}): ${n}`,...e)}function ho(n,...e){No.logLevel<=fe.ERROR&&No.error(`Auth (${us}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,...e){throw Tl(n,...e)}function xt(n,...e){return Tl(n,...e)}function El(n,e,t){const r=Object.assign(Object.assign({},QT()),{[e]:t});return new Ti("auth","Firebase",r).create(e,{appName:n.name})}function mr(n){return El(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Zt(n,"argument-error"),El(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gp.create(n,...e)}function ne(n,e,...t){if(!n)throw Tl(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ho(e),new Error(e)}function Tn(n,e){n||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function YT(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YT()||PE()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tn(t>e,"Short delay should be less than long delay!"),this.isMobile=bE()||CE()}get(){return ZT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,e){Tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rI=new wi(3e4,6e4);function wl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hs(n,e,t,r,s={}){return Jp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ii(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return RE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ls(n.emulatorConfig.host)&&(h.credentials="include"),Qp.fetch()(await Xp(n,n.config.apiHost,t,c),h)})}async function Jp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},tI),e);try{const s=new iI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw El(n,d,h);Zt(n,d)}}catch(s){if(s instanceof bn)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function sI(n,e,t,r,s={}){const i=await hs(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Il(n.config,s):`${n.config.apiScheme}://${s}`;return nI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class iI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),rI.get())})}}function Zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n,e){return hs(n,"POST","/v1/accounts:delete",e)}async function Oo(n,e){return hs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aI(n,e=!1){const t=mt(n),r=await t.getIdToken(e),s=Al(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(oc(s.auth_time)),issuedAtTime:Xs(oc(s.iat)),expirationTime:Xs(oc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(n){return Number(n)*1e3}function Al(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=xp(t);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qh(n){const e=Al(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&cI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await li(n,Oo(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yp(i.providerUserInfo):[],c=hI(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function uI(n){const e=mt(n);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yp(n){return n.map(e=>{var{providerId:t}=e,r=vl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(n,e){const t=await Jp(n,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Xp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ls(n.emulatorConfig.host)&&(l.credentials="include"),Qp.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dI(n,e){return hs(n,"POST","/v2/accounts:revokeToken",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Qh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await fI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Qr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return aI(this,e)}reload(){return uI(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await li(this,oI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:z,isAnonymous:oe,providerData:ve,stsTokenManager:I}=t;ne(G&&I,e,"internal-error");const m=Qr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),Vn(p,e.name),Vn(_,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Vn(b,e.name),Vn(V,e.name),Vn(N,e.name),Vn(x,e.name),Vn(Q,e.name),Vn($,e.name);const y=new kt({uid:G,auth:e,email:_,emailVerified:z,displayName:p,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:Q,lastLoginAt:$});return ve&&Array.isArray(ve)&&(y.providerData=ve.map(T=>Object.assign({},T))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qr;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function dn(n){Tn(n instanceof Function,"Expected a class definition");let e=Jh.get(n);return e?(Tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Jh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zp.type="NONE";const Xh=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oo(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(dn(Xh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(Xh);const a=fo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Oo(e,{idToken:d}).catch(()=>{});if(!_)break;p=await kt._fromGetAccountInfoResponse(e,_,d)}else p=kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(og(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(sg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eg(n=ut()){return/firefox\//i.test(n)}function tg(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(n=ut()){return/crios\//i.test(n)}function rg(n=ut()){return/iemobile/i.test(n)}function sg(n=ut()){return/android/i.test(n)}function ig(n=ut()){return/blackberry/i.test(n)}function og(n=ut()){return/webos/i.test(n)}function bl(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pI(n=ut()){var e;return bl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gI(){return VE()&&document.documentMode===10}function ag(n=ut()){return bl(n)||sg(n)||og(n)||ig(n)||/windows phone/i.test(n)||rg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e=[]){let t;switch(n){case"Browser":t=Yh(ut());break;case"Worker":t=`${Yh(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(n,e={}){return hs(n,"GET","/v2/passwordPolicy",wl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=6;class vI{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:yI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zh(this),this.idTokenSubscription=new Zh(this),this.beforeStateQueue=new mI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(mr(this));const t=e?mt(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _I(this),t=new vI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await dI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&JT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fa(n){return mt(n)}class Zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TI(n){Sl=n}function II(n){return Sl.loadJS(n)}function wI(){return Sl.gapiScript}function AI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n,e){const t=yl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(vr(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function SI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RI(n,e,t){const r=fa(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lg(e),{host:a,port:c}=PI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(vr(h,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(a)?(Up(`${i}//${a}${l}`),Bp("Auth",!0)):CI()}function lg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PI(n){const e=lg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ef(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ef(a)}}}function ef(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function CI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(n,e){return sI(n,"POST","/v1/accounts:signInWithIdp",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="http://localhost";class Tr extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Tr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ii(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ai{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hn.credential(t,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ai{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ai{constructor(){super("twitter.com")}static credential(e,t){return Tr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fn.credential(t,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=tf(r);return new ns({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tf(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends bn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Mo(e,t,r,s)}}function hg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(n,i,e,r):i})}async function kI(n,e,t=!1){const r=await li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await li(n,hg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Al(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),ns._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(n,e,t=!1){if(Vt(n.app))return Promise.reject(mr(n));const r="signIn",s=await hg(n,r,e),i=await ns._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function OI(n,e,t,r){return mt(n).onIdTokenChanged(e,t,r)}function xI(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function MI(n,e,t,r){return mt(n).onAuthStateChanged(e,t,r)}function LI(n){return mt(n).signOut()}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1e3,UI=10;class dg extends fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);gI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dg.type="LOCAL";const BI=dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pg.type="SESSION";const gg=pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await jI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Pl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function qI(n){Kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function WI(){return mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",KI=1,Fo="firebaseLocalStorage",yg="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pa(n,e){return n.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function GI(){const n=indexedDB.deleteDatabase(_g);return new bi(n).toPromise()}function Dc(){const n=indexedDB.open(_g,KI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fo,{keyPath:yg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await GI(),e(await Dc()))})})}async function nf(n,e,t){const r=pa(n,!0).put({[yg]:e,value:t});return new bi(r).toPromise()}async function QI(n,e){const t=pa(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function rf(n,e){const t=pa(n,!0).delete(e);return new bi(t).toPromise()}const JI=800,XI=3;class vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(WI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await nf(e,Lo,"1"),await rf(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>QI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vg.type="LOCAL";const YI=vg;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,e){return e?dn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZI(n){return NI(n.auth,new Cl(n),n.bypassAuthState)}function ew(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),DI(t,new Cl(n),n.bypassAuthState)}async function tw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),kI(t,new Cl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return tw;case"reauthViaPopup":case"reauthViaRedirect":return ew;default:Zt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new wi(2e3,1e4);async function rw(n,e,t){if(Vt(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=fa(n);XT(n,e,Rl);const s=Eg(r,t);return new fr(r,"signInViaPopup",e,s).executeNotNull()}class fr extends Tg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nw.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="pendingRedirect",po=new Map;class iw extends Tg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(n,e){const t=lw(e),r=cw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function aw(n,e){po.set(n._key(),e)}function cw(n){return dn(n._redirectPersistence)}function lw(n){return fo(sw,n.config.apiKey,n.name)}async function uw(n,e,t=!1){if(Vt(n.app))return Promise.reject(mr(n));const r=fa(n),s=Eg(r,e),a=await new iw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=600*1e3;class fw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hw&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ig({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ig(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e={}){return hs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function _w(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pw(n);for(const t of e)try{if(yw(t))return}catch{}Zt(n,"unauthorized-domain")}function yw(n){const e=Vc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!mw.test(t))return!1;if(gw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new wi(3e4,6e4);function of(){const n=Kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ew(n){return new Promise((e,t)=>{var r,s,i;function a(){of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{of(),t(xt(n,"network-request-failed"))},timeout:vw.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const c=AI("iframefcb");return Kt()[c]=()=>{gapi.load?a():t(xt(n,"network-request-failed"))},II(`${wI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw go=null,e})}let go=null;function Tw(n){return go=go||Ew(n),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new wi(5e3,15e3),ww="__/auth/iframe",Aw="emulator/auth/iframe",bw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rw(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Il(e,Aw):`https://${n.config.authDomain}/${ww}`,r={apiKey:e.apiKey,appName:n.name,v:us},s=Sw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ii(r).slice(1)}`}async function Pw(n){const e=await Tw(n),t=Kt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Rw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(n,"network-request-failed"),c=Kt().setTimeout(()=>{i(a)},Iw.get());function l(){Kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vw=500,kw=600,Dw="_blank",Nw="http://localhost";class af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ow(n,e,t,r=Vw,s=kw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Cw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(c=ng(h)?Dw:t),eg(h)&&(e=e||Nw,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(pI(h)&&c!=="_self")return xw(e||"",c),new af(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new af(p)}function xw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="__/auth/handler",Lw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function cf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:s};if(e instanceof Rl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",LE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ai){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${Fw}=${encodeURIComponent(l)}`:"";return`${Uw(n)}?${Ii(c).slice(1)}${h}`}function Uw({config:n}){return n.emulator?Il(n,Lw):`https://${n.authDomain}/${Mw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class Bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=uw,this._overrideRedirectResult=aw}async _openPopup(e,t,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cf(e,t,r,Vc(),s);return Ow(e,a,Pl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cf(e,t,r,Vc(),s);return qI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pw(e),r=new fw(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ac,{type:ac},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ac];a!==void 0&&t(!!a),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_w(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ag()||tg()||bl()}}const jw=Bw;var lf="@firebase/auth",uf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hw(n){ts(new Er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cg(n)},h=new EI(r,s,i,l);return SI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Er("auth-internal",e=>{const t=fa(e.getProvider("auth").getImmediate());return(r=>new $w(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(lf,uf,qw(n)),$n(lf,uf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=300,Ww=Fp("authIdTokenMaxAge")||zw;let hf=null;const Kw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ww)return;const s=t==null?void 0:t.token;hf!==s&&(hf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gw(n=Hp()){const e=yl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bI(n,{popupRedirectResolver:jw,persistence:[YI,BI,gg]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Kw(i.toString());xI(t,a,()=>a(t.currentUser)),OI(t,c=>a(c))}}const s=Mp("auth");return s&&RI(t,`http://${s}`),t}function Qw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hw("Browser");const br=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Jw={},Xw={class:"carafe"};function Yw(n,e){return pe(),be("div",Xw,[co(n.$slots,"top",{},void 0,!0),co(n.$slots,"mid",{},void 0,!0),co(n.$slots,"bottom",{},void 0,!0)])}const Zw=br(Jw,[["render",Yw],["__scopeId","data-v-43d2bfc5"]]),eA={},tA={class:"mug"};function nA(n,e){return pe(),be("div",tA,[co(n.$slots,"default")])}const rA=br(eA,[["render",nA]]),ff=["Hot","Cold"];var sA="firebase",iA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(sA,iA,"app");var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,wg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^y&(A^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(y[A]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return x(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-x(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(N(this))return"-"+x(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var A=z(y,m).g;y=Q(y,A.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=Q(this,I),N(I)?-1:V(I)?0:1};function x(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}n.abs=function(){return N(this)?x(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Q(I,m){return I.add(x(m))}n.j=function(I){if(V(this)||V(I))return p;if(N(this))return N(I)?x(this).j(x(I)):x(x(this).j(I));if(N(I))return x(this.j(x(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(A)>>>16,Ft=I.i(A)&65535;y[2*T+2*A]+=E*Ft,$(y,2*T+2*A),y[2*T+2*A+1]+=S*Ft,$(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ht,$(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ht,$(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function $(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function z(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(p,p);if(N(I))return m=z(x(I),m),new G(x(m.g),x(m.h));if(N(m))return m=z(I,x(m)),new G(x(m.g),m.h);if(30<I.g.length){if(N(I)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=oe(y),T=oe(T);var A=ve(y,1),S=ve(T,1);for(T=ve(T,2),y=ve(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=ve(T,1),y=ve(y,1)}return m=Q(I,A.j(m)),new G(A,m)}for(A=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);N(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),A=A.add(S),I=Q(I,E)}return new G(A,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ve(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,qn=a}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ag,Fs,bg,mo,Nc,Sg,Rg,Pg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,P){for(var B=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)B[Ae-2]=arguments[Ae];return u.prototype[R].apply(g,B)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function x(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,P=g.length||0;o.length=R+P;for(let B=0;B<P;B++)o[R+B]=g[B]}else o.push(g)}}class Q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ve(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Ft.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new Q(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Pt=new ht,er=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(tn)}};var tn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ft;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Ca=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function tr(o,u){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tr.aa.h.call(this)}}V(tr,We);var nr={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),_s=0;function Di(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++_s,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o){this.src=o,this.g={},this.h=0}ys.prototype.add=function(o,u,f,g,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var B=w(o,u,g,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Di(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Ut(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)O(o,u[P],f,g,R);return null}return f=Z(f),o&&o[nn]?o.K(u,f,h(g)?!!g.capture:!1,R):L(o,u,f,!1,g,R)}function L(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Ae=H(o);if(Ae||(o[C]=Ae=new ys(o)),f=Ae.add(u,f,g,B,P),f.proxy)return f;if(g=q(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Ca||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function j(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=Z(f),o&&o[nn]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=w(P,f,g,R),-1<f&&(Ut(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[nn])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):Ut(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new tr(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function H(o){return o=o[C],o instanceof ys?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){ze.call(this),this.i=new ys(this),this.M=this,this.F=null}V(ee,ze),ee.prototype[nn]=!0,ee.prototype.removeEventListener=function(o,u,f,g){j(this,o,u,f,g)};function ae(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new We(u,o);else if(u instanceof We)u.target=u.target||o;else{var R=u;u=new We(g,o),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var B=u.g=f[P];R=Ee(B,g,!0,u)&&R}if(B=u.g=o,R=Ee(B,g,!0,u)&&R,R=Ee(B,g,!1,u)&&R,f)for(P=0;P<f.length;P++)B=u.g=f[P],R=Ee(B,g,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ut(f[g]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ee.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ee(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var B=u[P];if(B&&!B.da&&B.capture==f){var Ae=B.listener,Je=B.ha||B.src;B.fa&&v(o.i,B),R=Ae.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function De(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Fe(o){o.g=De(()=>{o.g=null,o.i&&(o.i=!1,Fe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends ze{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){ze.call(this),this.h=o,this.g={}}V(tt,ze);var Sn=[];function vs(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),vs(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,bt=c.JSON.parse,Ni=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function uu(o){return o.h||(o.h=o.i())}function hu(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Va(){We.call(this,"d")}V(Va,We);function ka(){We.call(this,"c")}V(ka,We);var rr={},fu=null;function Oi(){return fu=fu||new ee}rr.La="serverreachability";function du(o){We.call(this,rr.La,o)}V(du,We);function Ts(o){const u=Oi();ae(u,new du(u))}rr.STAT_EVENT="statevent";function pu(o,u){We.call(this,rr.STAT_EVENT,o),this.stat=u}V(pu,We);function ft(o){const u=Oi();ae(u,new pu(u,o))}rr.Ma="timingevent";function gu(o,u){We.call(this,rr.Ma,o),this.size=u}V(gu,We);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function i_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P)for(var B="",Ae=P.split("&"),Je=0;Je<Ae.length;Je++){var _e=Ae[Je].split("=");if(1<_e.length){var nt=_e[0];_e=_e[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+_e+"&"):B+(nt+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function o_(o,u,f,g,R,P,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+B})}function Dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+c_(o,f)+(g?" "+g:"")})}function a_(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function c_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Qe(f)}catch{return u}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Mi(){}V(Mi,kr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Da=new Mi;function Rn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var yu={},Na={};function Oa(o,u,f){o.L=1,o.v=Bi(rn(u)),o.m=f,o.P=!0,vu(o,null)}function vu(o,u){o.F=Date.now(),Li(o),o.A=rn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Nu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new _u,o.g=Xu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new At(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Sn[0]=R.toString()),R=Sn);for(var P=0;P<R.length;P++){var B=O(f,R[P],g||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),i_(o.i,o.u,o.A,o.l,o.R,o.m)}Rn.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=sn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Bu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=xr?Ts(3):Ts(2)),xa(this);var f=this.g.Z();this.X=f;t:if(Eu(this)){var g=Bu(this.g);o="";var R=g.length,P=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),As(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,o_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,Je=this.g;if((Ae=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ae)){var _e=Ae;break t}}_e=null}if(f=_e)Dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,f);else{this.o=!1,this.s=3,ft(12),sr(this),As(this);break e}}if(this.P){f=!0;let Ct;for(;!this.J&&this.C<B.length;)if(Ct=l_(this,B),Ct==Na){rt==4&&(this.s=4,ft(14),f=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==yu){this.s=4,ft(15),Dr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Dr(this.i,this.l,Ct,null),Ma(this,Ct);if(Eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Dr(this.i,this.l,B,"[Invalid Chunked Response]"),sr(this),As(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),$a(nt),nt.M=!0,ft(11))}}else Dr(this.i,this.l,B,null),Ma(this,B);rt==4&&sr(this),this.o&&!this.J&&(rt==4?Ku(this.j,this):(this.o=!1,Li(this)))}else S_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),sr(this),As(this)}}}catch{}finally{}};function Eu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function l_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Na:(f=Number(u.substring(f,g)),isNaN(f)?yu:(g+=1,g+f>u.length?Na:(u=u.slice(g,g+f),o.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,sr(this)};function Li(o){o.S=Date.now()+o.I,Tu(o,o.I)}function Tu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(_(o.ba,o),u)}function xa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Rn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(a_(this.i,this.A),this.L!=2&&(Ts(),ft(17)),sr(this),this.s=2,As(this)):Tu(this,this.S-o)};function As(o){o.j.G==0||o.J||Ku(o.j,o)}function sr(o){xa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ma(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||La(f.h,o))){if(!o.K&&La(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),Hi(f);else break e;ja(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Is(_(f.Za,f),6e3));if(1>=Au(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else or(f,11)}else if((o.K||f.g==o)&&Wi(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const nt=_e[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=_e[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const xr=_e[5];xr!=null&&typeof xr=="number"&&0<xr&&(g=1.5*xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ct=o.g;if(Ct){const Gi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var P=g.h;P.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Fa(P,P.h),P.h=null))}if(g.D){const qa=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(g.ya=qa,Ce(g.I,g.D,qa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=o;if(g.qa=Ju(g,g.J?g.ia:null,g.W),B.K){bu(g.h,B);var Ae=B,Je=g.L;Je&&(Ae.I=Je),Ae.B&&(xa(Ae),Li(Ae)),g.g=B}else zu(g);0<f.i.length&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||or(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?or(f,7):Ba(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}Ts(4)}catch{}}var u_=class{constructor(o,u){this.g=o,this.map=u}};function Iu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Au(o){return o.h?1:o.g?o.g.size:0}function La(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Fa(o,u){o.g?o.g.add(u):o.h=u}function bu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Iu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Su(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function h_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function f_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Ru(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=f_(o),g=h_(o),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],o)}var Pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var P=o[f].substring(0,g);R=o[f].substring(g+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,f=new Rs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Cu(this,f),this.m=o.m}else o&&(u=String(o).match(Pu))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),Ui(this,u[4]),this.l=bs(u[5]||"",!0),Cu(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,Vu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,Vu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ss(f,f.charAt(0)=="/"?m_:g_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ss(f,y_)),o.join("")};function rn(o){return new ir(o)}function Fi(o,u,f){o.j=f?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Cu(o,u,f){u instanceof Rs?(o.i=u,v_(o.i,o.h)):(f||(u=Ss(u,__)),o.i=new Rs(u,o.h))}function Ce(o,u,f){o.i.set(u,f)}function Bi(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,p_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function p_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Vu=/[#\/\?@]/g,g_=/[#\?:]/g,m_=/[#\?]/g,__=/[#\?@]/g,y_=/#/g;function Rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&d_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Rs.prototype,n.add=function(o,u){Pn(this),this.i=null,o=Nr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function ku(o,u){Pn(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Du(o,u){return Pn(o),u=Nr(o,u),o.g.has(u)}n.forEach=function(o,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},n.V=function(o){Pn(this);let u=[];if(typeof o=="string")Du(this,o)&&(u=u.concat(this.g.get(Nr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Pn(this),this.i=null,o=Nr(this,o),Du(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Nu(o,u,f){ku(o,u),0<f.length&&(o.i=null,o.g.set(Nr(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=P;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),o.push(R)}}return this.i=o.join("&")};function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function v_(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(ku(this,g),Nu(this,R,f))},o)),o.j=u}function E_(o,u){const f=new ws;if(c.Image){const g=new Image;g.onload=b(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Cn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function T_(o,u){const f=new ws,g=new AbortController,R=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Cn(f,"TestPingServer: error",!1,u)})}function Cn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function I_(){this.g=new Ni}function w_(o,u,f){const g=f||"";try{Ru(o,function(R,P){let B=R;h(R)&&(B=Qe(R)),u.push(g+P+"="+encodeURIComponent(B))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ji,kr),ji.prototype.g=function(){return new $i(this.l,this.j)},ji.prototype.i=(function(o){return function(){return o}})({});function $i(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V($i,ee),n=$i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ou(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ou(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ps(this):Cs(this),this.readyState==3&&Ou(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ps(this))},n.Qa=function(o){this.g&&(this.response=o,Ps(this))},n.ga=function(){this.g&&Ps(this)};function Ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xu(o){let u="";return ve(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ua(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=xu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ce(o,u,f))}function Oe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Oe,ee);var A_=/^https?$/i,b_=["POST","PUT"];n=Oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?uu(this.o):uu(Da),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Mu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(b_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of f)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Mu(this,P)}};function Mu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Lu(o),qi(o)}function Lu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fu(this):this.bb())},n.bb=function(){Fu(this)};function Fu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)De(o.Ea,0,o);else if(ae(o,"readystatechange"),sn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=B===0){var R=String(o.D).match(Pu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!A_.test(R?R.toLowerCase():"")}f=g}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var P=2<sn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Lu(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Uu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=g}catch{}}}function Uu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function Bu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function S_(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function ju(o){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Iu(o&&o.concurrentRequestLimit),this.Da=new I_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ju.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ju(this,null,this.W),zi(this)};function Ba(o){if($u(o),o.G==3){var u=o.U++,f=rn(o.I);if(Ce(f,"SID",o.K),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),ks(o,f),u=new Rn(o,o.j,u),u.L=2,u.v=Bi(rn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Xu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}Qu(o)}function Hi(o){o.g&&($a(o),o.g.cancel(),o.g=null)}function $u(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zi(o){if(!wu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||er(),me||(ce(),me=!0),Pt.add(u,o),o.B=0}}function R_(o,u){return Au(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(_(o.Ga,o,u),Gu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Rn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Hu(this,R,u),f=rn(this.I),Ce(f,"RID",o),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),ks(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(xu(P)))+"&"+u:this.m&&Ua(f,this.m,P)),Fa(this.h,R),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",u),Ce(f,"SID","null"),R.T=!0,Oa(R,f,null)):Oa(R,f,u),this.G=2}}else this.G==3&&(o?qu(this,o):this.i.length==0||wu(this.h)||qu(this))};function qu(o,u){var f;u?f=u.l:f=o.U++;const g=rn(o.I);Ce(g,"SID",o.K),Ce(g,"RID",f),Ce(g,"AID",o.T),ks(o,g),o.m&&o.o&&Ua(g,o.m,o.o),f=new Rn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Hu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fa(o.h,f),Oa(f,g,u)}function ks(o,u){o.H&&ve(o.H,function(f,g){Ce(u,g,f)}),o.l&&Ru({},function(f,g){Ce(u,g,f)})}function Hu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const B=["count="+f];P==-1?0<f?(P=R[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Ae=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const nt=R[Je].map;if(_e-=P,0>_e)P=Math.max(0,R[Je].g-100),Ae=!1;else try{w_(nt,B,"req"+_e+"_")}catch{g&&g(nt)}}if(Ae){g=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function zu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||er(),me||(ce(),me=!0),Pt.add(u,o),o.v=0}}function ja(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(_(o.Fa,o),Gu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Hi(this),Wu(this))};function $a(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Wu(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Ce(u,"RID","rpc"),Ce(u,"SID",o.K),Ce(u,"AID",o.T),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(u,"TO",o.ja),Ce(u,"TYPE","xmlhttp"),ks(o,u),o.m&&o.o&&Ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(rn(u)),f.m=null,f.P=!0,vu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Hi(this),ja(this),ft(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ku(o,u){var f=null;if(o.g==u){Wi(o),$a(o),o.g=null;var g=2}else if(La(o.h,u))f=u.D,bu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Oi(),ae(g,new gu(g,f)),zi(o)}else zu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&R_(o,u)||g==2&&ja(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function Gu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new ir(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(g,"https"),Bi(g),R?E_(g.toString(),f):T_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),Qu(o),$u(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Qu(o){if(o.G=0,o.ka=[],o.l){const u=Su(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Ju(o,u,f){var g=f instanceof ir?rn(f):new ir(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ui(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new ir(null);g&&Fi(P,g),u&&(P.g=u),R&&Ui(P,R),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Ce(g,f,u),Ce(g,"VER",o.la),ks(o,g),g}function Xu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Oe(new ji({eb:f})):new Oe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yu(){}n=Yu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ee.call(this),this.g=new ju(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Or(this)}V(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ba(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new u_(u.Ya++,o)),u.G==3&&zi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,vt.aa.N.call(this)};function Zu(o){Va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Zu,Va);function eh(){ka.call(this),this.status=1}V(eh,ka);function Or(o){this.g=o}V(Or,Yu),Or.prototype.ua=function(){ae(this.g,"a")},Or.prototype.ta=function(o){ae(this.g,new Zu(o))},Or.prototype.sa=function(o){ae(this.g,new eh)},Or.prototype.ra=function(){ae(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Pg=function(){return new Ki},Rg=function(){return Oi()},Sg=rr,Nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,mo=xi,mu.COMPLETE="complete",bg=mu,hu.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Fs=hu,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Ag=Oe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const pf="@firebase/firestore",gf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new ml("@firebase/firestore");function Br(){return Ir.logLevel}function W(n,...e){if(Ir.logLevel<=fe.DEBUG){const t=e.map(Vl);Ir.debug(`Firestore (${fs}): ${n}`,...t)}}function In(n,...e){if(Ir.logLevel<=fe.ERROR){const t=e.map(Vl);Ir.error(`Firestore (${fs}): ${n}`,...t)}}function Kn(n,...e){if(Ir.logLevel<=fe.WARN){const t=e.map(Vl);Ir.warn(`Firestore (${fs}): ${n}`,...t)}}function Vl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Cg(n,r,t)}function Cg(n,e,t){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Cg(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class cA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Vg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class lA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new lA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Oc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=kg(),a=dA(i.encode(_f(n,t)),i.encode(_f(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function _f(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function dA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function rs(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):Oc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class Pe extends $t{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Pe(t)}static emptyPath(){return new Pe([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends $t{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yf}static keyField(){return new Ye([yf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gA(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vf(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ef(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ng(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ga(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function zn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ga(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Si(n,e){if(!Ng(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=-62135596800,If=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*If);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Tf)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/If}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Si(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:$e("string",Ve._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=-1;function mA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Gn(s,X.empty(),e)}function _A(n){return new Gn(n.readTime,n.key,ui)}class Gn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gn(se.min(),X.empty(),ui)}static max(){return new Gn(se.max(),X.empty(),ui)}}function yA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==vA)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function TA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ps(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ma.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-1;function _a(n){return n==null}function Uo(n){return n===0&&1/n==-1/0}function IA(n){return typeof n=="number"&&Number.isInteger(n)&&!Uo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="";function wA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wf(e)),e=AA(n.get(t),e);return wf(e)}function AA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Og:t+="";break;default:t+=i}}return t}function wf(n){return n+Og+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(e){return new bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Ke(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mg("Invalid base64 string: "+i):i}})(e);return new et(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const bA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=bA.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="server_timestamp",Fg="__type__",Ug="__previous_value__",Bg="__local_write_time__";function Nl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fg])===null||t===void 0?void 0:t.stringValue)===Lg}function ya(n){const e=n.mapValue.fields[Ug];return Nl(e)?ya(e):e}function hi(n){const e=Qn(n.mapValue.fields[Bg].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Bo="(default)";class fi{constructor(e,t){this.projectId=e,this.database=t||Bo}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===Bo}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="__type__",RA="__max__",no={mapValue:{}},$g="__vector__",jo="value";function Xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nl(n)?4:CA(n)?9007199254740991:PA(n)?10:11:te(28295,{value:n})}function en(n,e){if(n===e)return!0;const t=Xn(n);if(t!==Xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hi(n).isEqual(hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qn(s.timestampValue),c=Qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?Uo(a)===Uo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Af(a)!==Af(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!en(a[l],c[l])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function di(n,e){return(n.values||[]).find((t=>en(t,e)))!==void 0}function ss(n,e){if(n===e)return 0;const t=Xn(n),r=Xn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Sf(n.timestampValue,e.timestampValue);case 4:return Sf(hi(n),hi(e));case 5:return Oc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Jn(i),l=Jn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Le(i.latitude),Le(a.latitude));return c!==0?c:ue(Le(i.longitude),Le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Rf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[jo])===null||c===void 0?void 0:c.arrayValue,V=(l=_[jo])===null||l===void 0?void 0:l.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Rf(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Oc(l[p],d[p]);if(_!==0)return _;const b=ss(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function Sf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Qn(n),r=Qn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Rf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function is(n){return xc(n)}function xc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Qn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Jn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=xc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${xc(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function _o(n){switch(Xn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ya(n);return e?16+_o(e):16;case 5:return 2*n.stringValue.length;case 6:return Jn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+_o(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Sr(r.fields,((i,a)=>{s+=i.length+_o(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function Pf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mc(n){return!!n&&"integerValue"in n}function Ol(n){return!!n&&"arrayValue"in n}function Cf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yo(n){return!!n&&"mapValue"in n}function PA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jg])===null||t===void 0?void 0:t.stringValue)===$g}function Ys(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ys(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ys(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===RA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!yo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ys(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());yo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(Ys(this.value))}}function qg(n){const e=[];return Sr(n.fields,((t,r)=>{const s=new Ye([t]);if(yo(r)){const i=qg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),St.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.position=e,this.inclusive=t}}function kf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=ss(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Df(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!en(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function VA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{}class je extends Hg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new DA(e,t,r):t==="array-contains"?new xA(e,r):t==="in"?new MA(e,r):t==="not-in"?new LA(e,r):t==="array-contains-any"?new FA(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new NA(e,r):new OA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ss(t,this.value)):t!==null&&Xn(this.value)===Xn(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Hg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Lt(e,t)}matches(e){return zg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function zg(n){return n.op==="and"}function Wg(n){return kA(n)&&zg(n)}function kA(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Lc(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+is(n.value);if(Wg(n))return n.filters.map((e=>Lc(e))).join(",");{const e=n.filters.map((t=>Lc(t))).join(",");return`${n.op}(${e})`}}function Kg(n,e){return n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)})(n,e):n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Kg(a,s.filters[c])),!0):!1})(n,e):void te(19439)}function Gg(n){return n instanceof je?(function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gg).join(" ,")+"}"})(n):"Filter"}class DA extends je{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class NA extends je{constructor(e,t){super(e,"in",t),this.keys=Qg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class OA extends je{constructor(e,t){super(e,"not-in",t),this.keys=Qg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class xA extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ol(t)&&di(t.arrayValue,this.value)}}class MA extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class LA extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!di(this.value.arrayValue,t)}}class FA extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>di(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Nf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new UA(n,e,t,r,s,i,a)}function xl(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Lc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),_a(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>is(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>is(r))).join(",")),e.Pe=t}return e.Pe}function Ml(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Df(n.startAt,e.startAt)&&Df(n.endAt,e.endAt)}function Fc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function BA(n,e,t,r,s,i,a,c){return new Ri(n,e,t,r,s,i,a,c)}function Ll(n){return new Ri(n)}function Of(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jg(n){return n.collectionGroup!==null}function Zs(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new qo(i,r))})),t.has(Ye.keyField().canonicalString())||e.Te.push(new qo(Ye.keyField(),r))}return e.Te}function Gt(n){const e=ie(n);return e.Ie||(e.Ie=jA(e,Zs(n))),e.Ie}function jA(n,e){if(n.limitType==="F")return Nf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)}));const t=n.endAt?new $o(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $o(n.startAt.position,n.startAt.inclusive):null;return Nf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uc(n,e){const t=n.filters.concat([e]);return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bc(n,e,t){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function va(n,e){return Ml(Gt(n),Gt(e))&&n.limitType===e.limitType}function Xg(n){return`${xl(Gt(n))}|lt:${n.limitType}`}function jr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Gg(s))).join(", ")}]`),_a(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>is(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>is(s))).join(",")),`Target(${r})`})(Gt(n))}; limitType=${n.limitType})`}function Ea(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=kf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Zs(r),s)||r.endAt&&!(function(a,c,l){const h=kf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Zs(r),s))})(n,e)}function $A(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yg(n){return(e,t)=>{let r=!1;for(const s of Zs(n)){const i=qA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qA(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ss(l,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return xg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new Ne(X.comparator);function wn(){return HA}const Zg=new Ne(X.comparator);function Us(...n){let e=Zg;for(const t of n)e=e.insert(t.key,t);return e}function em(n){let e=Zg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function dr(){return ei()}function tm(){return ei()}function ei(){return new Rr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const zA=new Ne(X.comparator),WA=new Ke(X.comparator);function de(...n){let e=WA;for(const t of n)e=e.add(t);return e}const KA=new Ke(ue);function GA(){return KA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function nm(n){return{integerValue:""+n}}function QA(n,e){return IA(e)?nm(e):Fl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this._=void 0}}function JA(n,e,t){return n instanceof Ho?(function(s,i){const a={fields:{[Fg]:{stringValue:Lg},[Bg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nl(i)&&(i=ya(i)),i&&(a.fields[Ug]=i),{mapValue:a}})(t,e):n instanceof pi?sm(n,e):n instanceof gi?im(n,e):(function(s,i){const a=rm(s,i),c=xf(a)+xf(s.Ee);return Mc(a)&&Mc(s.Ee)?nm(c):Fl(s.serializer,c)})(n,e)}function XA(n,e,t){return n instanceof pi?sm(n,e):n instanceof gi?im(n,e):t}function rm(n,e){return n instanceof zo?(function(r){return Mc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ho extends Ta{}class pi extends Ta{constructor(e){super(),this.elements=e}}function sm(n,e){const t=om(e);for(const r of n.elements)t.some((s=>en(s,r)))||t.push(r);return{arrayValue:{values:t}}}class gi extends Ta{constructor(e){super(),this.elements=e}}function im(n,e){let t=om(e);for(const r of n.elements)t=t.filter((s=>!en(s,r)));return{arrayValue:{values:t}}}class zo extends Ta{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function xf(n){return Le(n.integerValue||n.doubleValue)}function om(n){return Ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function YA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof pi&&s instanceof pi||r instanceof gi&&s instanceof gi?rs(r.elements,s.elements,en):r instanceof zo&&s instanceof zo?en(r.Ee,s.Ee):r instanceof Ho&&s instanceof Ho})(n.transform,e.transform)}class ZA{constructor(e,t){this.version=e,this.transformResults=t}}class gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ia{}function am(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lm(n.key,gn.none()):new Pi(n.key,n.data,gn.none());{const t=n.data,r=St.empty();let s=new Ke(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pr(n.key,r,new Dt(s.toArray()),gn.none())}}function eb(n,e,t){n instanceof Pi?(function(s,i,a){const c=s.value.clone(),l=Lf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Pr?(function(s,i,a){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Lf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(cm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ti(n,e,t,r){return n instanceof Pi?(function(i,a,c,l){if(!vo(i.precondition,a))return c;const h=i.value.clone(),d=Ff(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Pr?(function(i,a,c,l){if(!vo(i.precondition,a))return c;const h=Ff(i.fieldTransforms,l,a),d=a.data;return d.setAll(cm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return vo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function tb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=rm(r.transform,s||null);i!=null&&(t===null&&(t=St.empty()),t.set(r.field,i))}return t||null}function Mf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,((i,a)=>YA(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pi extends Ia{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends Ia{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Lf(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,XA(a,c,t[s]))}return r}function Ff(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,JA(i,a,e))}return r}class lm extends Ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nb extends Ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=am(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),de())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,((t,r)=>Mf(t,r)))&&rs(this.baseMutations,e.baseMutations,((t,r)=>Mf(t,r)))}}class Ul{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return zA})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ul(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ge;function ob(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function um(n){if(n===void 0)return In("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ue.OK:return k.OK;case Ue.CANCELLED:return k.CANCELLED;case Ue.UNKNOWN:return k.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return k.INTERNAL;case Ue.UNAVAILABLE:return k.UNAVAILABLE;case Ue.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ue.NOT_FOUND:return k.NOT_FOUND;case Ue.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ue.ABORTED:return k.ABORTED;case Ue.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ue.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(ge=Ue||(Ue={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new qn([4294967295,4294967295],0);function Uf(n){const e=kg().encode(n),t=new wg;return t.update(e),new Uint8Array(t.digest())}function Bf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([t,r],0),new qn([s,i],0)]}class Bl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=qn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(qn.fromNumber(r)));return s.compare(ab)===1&&(s=new qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Uf(e),[r,s]=Bf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Uf(e),[r,s]=Bf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new wa(se.min(),s,new Ne(ue),wn(),de())}}class Ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ci(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class hm{constructor(e,t){this.targetId=e,this.De=t}}class fm{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jf{constructor(){this.ve=0,this.Ce=$f(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=de(),t=de(),r=de();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Ci(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=$f()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class cb{constructor(e){this.We=e,this.Ge=new Map,this.ze=wn(),this.je=ro(),this.Je=ro(),this.He=new Ne(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Fc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Jn(r).toUint8Array()}catch(l){if(l instanceof Mg)return Kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Bl(a,s,i)}catch(l){return Kn(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Fc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=de();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new wa(e,t,this.He,this.ze,r);return this.ze=wn(),this.je=ro(),this.Je=ro(),this.He=new Ne(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new jf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ke(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ke(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new jf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ro(){return new Ne(X.comparator)}function $f(){return new Ne(X.comparator)}const lb={asc:"ASCENDING",desc:"DESCENDING"},ub={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hb={and:"AND",or:"OR"};class fb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jc(n,e){return n.useProto3Json||_a(e)?e:{value:e}}function Wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function db(n,e){return Wo(n,e.toTimestamp())}function Qt(n){return Ie(!!n,49232),se.fromTimestamp((function(t){const r=Qn(t);return new Ve(r.seconds,r.nanos)})(n))}function jl(n,e){return $c(n,e).canonicalString()}function $c(n,e){const t=(function(s){return new Pe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function pm(n){const e=Pe.fromString(n);return Ie(vm(e),10190,{key:e.toString()}),e}function qc(n,e){return jl(n.databaseId,e.path)}function cc(n,e){const t=pm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(mm(t))}function gm(n,e){return jl(n.databaseId,e)}function pb(n){const e=pm(n);return e.length===4?Pe.emptyPath():mm(e)}function Hc(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mm(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qf(n,e,t){return{name:qc(n,e),fields:t.value.mapValue.fields}}function gb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:um(h.code);return new K(d,h.message||"")})(a);t=new fm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cc(n,r.document.name),i=Qt(r.document.updateTime),a=r.document.createTime?Qt(r.document.createTime):se.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Eo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cc(n,r.document),i=r.readTime?Qt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Eo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cc(n,r.document),i=r.removedTargetIds||[];t=new Eo([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ib(s,i),c=r.targetId;t=new hm(c,a)}}return t}function mb(n,e){let t;if(e instanceof Pi)t={update:qf(n,e.key,e.value)};else if(e instanceof lm)t={delete:qc(n,e.key)};else if(e instanceof Pr)t={update:qf(n,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof nb))return te(16599,{Rt:e.type});t={verify:qc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function _b(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Qt(s.updateTime):Qt(i);return a.isEqual(se.min())&&(a=Qt(i)),new ZA(a,s.transformResults||[])})(t,e)))):[]}function yb(n,e){return{documents:[gm(n,e.path)]}}function vb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gm(n,s);const i=(function(h){if(h.length!==0)return ym(Lt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:$r(_.field),direction:Ib(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=jc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function Eb(n){let e=pb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=_m(p);return _ instanceof Lt&&Wg(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new qo(qr(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,_a(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new $o(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new $o(b,_)})(t.endAt)),BA(e,s,a,i,c,"F",l,h)}function Tb(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _m(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qr(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qr(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qr(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return je.create(qr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((r=>_m(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function Ib(n){return lb[n]}function wb(n){return ub[n]}function Ab(n){return hb[n]}function $r(n){return{fieldPath:n.canonicalString()}}function qr(n){return Ye.fromServerFormat(n.fieldPath)}function ym(n){return n instanceof je?(function(t){if(t.op==="=="){if(Vf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(Cf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(Cf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:wb(t.op),value:t.value}}})(n):n instanceof Lt?(function(t){const r=t.getFilters().map((s=>ym(s)));return r.length===1?r[0]:{compositeFilter:{op:Ab(t.op),filters:r}}})(n):te(54877,{filter:n})}function bb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.gt=e}}function Rb(n){const e=Eb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.Dn=new Cb}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Gn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Cb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ke(Pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Em=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Em,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new os(0)}static ur(){return new os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="LruGarbageCollector",Vb=1048576;function Wf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class kb{constructor(e){this.Tr=e,this.buffer=new Ke(Wf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Wf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Db{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(zf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ps(t)?W(zf,"Ignoring IndexedDB error during garbage collection: ",t):await ds(t)}await this.Rr(3e5)}))}}class Nb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(ma.ue);const r=new kb(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Hf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Br()<=fe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Ob(n,e){return new Nb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changes=new Rr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ti(r.mutation,s,Dt.empty(),Ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,de()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=de()){const s=dr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Us();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=dr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,de())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=wn();const a=ei(),c=(function(){return ei()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ti(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Mb(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ei();let s=new Ne(((a,c)=>a-c)),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=tm();d.forEach((_=>{if(!i.has(_)){const b=am(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(dr());let c=ui,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,de()))).next((d=>({batchId:c,changes:em(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,_){return new Ri(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=Us();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ti(d.mutation,h,Dt.empty(),Ve.now()),Ea(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Rb(s.bundledQuery),readTime:Qt(s.readTime)}})(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.overlays=new Ne(X.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=dr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ne(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new sb(t,r));let i=this.kr.get(t);i===void 0&&(i=de(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Pe([])),r=new Ge(t,e),s=new Ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Pe([])),r=new Ge(t,e),s=new Ge(t,e+1);let i=de();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rb(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Dl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ge(t,0),s=new Ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(ue);return t.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new X(i),0);let c=new Ke(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ie(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ge(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.ni=e,this.docs=(function(){return new Ne(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=wn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=wn();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yA(_A(d),r)<=0||(s.has(d.key)||Ea(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new qb(this)}getSize(e){return D.resolve(this.size)}}class qb extends xb{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.persistence=e,this.ii=new Rr((t=>xl(t)),Ml),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new $l,this.targetCount=0,this._i=os.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new os(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.ai={},this.overlays={},this.ui=new ma(0),this.ci=!1,this.ci=!0,this.li=new Bb,this.referenceDelegate=e(this),this.hi=new Hb(this),this.indexManager=new Pb,this.remoteDocumentCache=(function(s){return new $b(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Sb(t),this.Ti=new Fb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ub,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new jb(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new zb(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class zb extends EA{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Ai=new $l,this.Ri=null}static Vi(e){return new ql(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ko{constructor(e,t){this.persistence=e,this.gi=new Rr((r=>wA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ob(this,t)}static Vi(e,t){return new Ko(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_o(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return kE()?8:TA(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Wb;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Br()<=fe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Br()<=fe.DEBUG&&W("QueryEngine","Query:",jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Br()<=fe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):D.resolve())}ps(e,t){if(Of(t))return D.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Bc(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=de(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,Bc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return Of(t)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(Br()<=fe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(t)),this.vs(e,a,t,mA(s,ui)).next((c=>c)))}))}bs(e,t){let r=new Ke(Yg(e));return t.forEach(((s,i)=>{Ea(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Br()<=fe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jr(t)),this.gs.getDocumentsMatchingQuery(e,t,Gn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="LocalStore",Gb=3e8;class Qb{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ne(ue),this.Ms=new Rr((i=>xl(i)),Ml),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Jb(n,e,t,r){return new Qb(n,e,t,r)}async function Im(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=de();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Xb(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=D.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((N=>{const x=h.docVersions.get(V);Ie(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function wm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Yb(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(N,x,Q){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Gb?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(_,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=wn(),h=de();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(Zb(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Zb(n,e,t){let r=de(),s=de();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=wn();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function e0(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Dl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function t0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function zc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ps(a))throw a;W(zl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Kf(n,e,t){const r=ie(n);let s=se.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?D.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Gt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:de()))).next((c=>(n0(r,$A(e),c),{documents:c,qs:i})))))}function n0(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Gf{constructor(){this.activeTargetIds=GA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r0{constructor(){this.Fo=new Gf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Gf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="ConnectivityMonitor";class Jf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Qf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Qf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function Wc(){return so===null?so=(function(){return 268435456+Math.round(2147483648*Math.random())})():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="RestConnection",i0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Wc(),c=this.Go(e,t.toUriEncodedString());W(lc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=ls(h);return this.jo(e,c,l,r,d).then((p=>(W(lc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Kn(lc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=i0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class c0 extends o0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Wc();return new Promise(((c,l)=>{const h=new Ag;h.setWithCredentials(!0),h.listenOnce(bg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case mo.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case mo.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=(function(Q){const $=Q.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN})(V.status);l(new K(N,V.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Wc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),c=Rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const V=new a0({Ho:x=>{b?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Yo:()=>p.close()}),N=(x,Q,$)=>{x.listen(Q,(G=>{try{$(G)}catch(z){setTimeout((()=>{throw z}),0)}}))};return N(p,Fs.EventType.OPEN,(()=>{b||(W(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(p,Fs.EventType.CLOSE,(()=>{b||(b=!0,W(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),N(p,Fs.EventType.ERROR,(x=>{b||(b=!0,Kn(st,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),N(p,Fs.EventType.MESSAGE,(x=>{var Q;if(!b){const $=x.data[0];Ie(!!$,16349);const G=$,z=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(z){W(st,`RPC '${e}' stream ${s} received error:`,z);const oe=z.status;let ve=(function(y){const T=Ue[y];if(T!==void 0)return um(T)})(oe),I=z.message;ve===void 0&&(ve=k.INTERNAL,I="Unknown error status: "+oe+" with message "+z.message),b=!0,V.__(new K(ve,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),N(c,Sg.STAT_EVENT,(x=>{x.stat===Nc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Nc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){return new fb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="PersistentStream";class bm{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Am(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class l0 extends bm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=gb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Qt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Hc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Fc(l)?{documents:yb(i,l)}:{query:vb(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dm(i,a.resumeToken);const h=jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Wo(i,a.snapshotVersion.toTimestamp());const h=jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Tb(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Hc(this.serializer),t.removeTarget=e,this.k_(t)}}class u0 extends bm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=_b(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Hc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>mb(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{}class f0 extends h0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,$c(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,$c(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class d0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(In(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="RemoteStore";class p0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Cr(this)&&(W(wr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Vi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ba(h)})(this))}))})),this.Aa=new d0(r,s)}}async function ba(n){if(Cr(n))for(const e of n.da)await e(!0)}async function Vi(n){for(const e of n.da)await e(!1)}function Sm(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ql(t)?Gl(t):gs(t).x_()&&Kl(t,e))}function Wl(n,e){const t=ie(n),r=gs(t);t.Ta.delete(e),r.x_()&&Rm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Cr(t)&&t.Aa.set("Unknown"))}function Kl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gs(n).H_(e)}function Rm(n,e){n.Ra.$e(e),gs(n).Y_(e)}function Gl(n){n.Ra=new cb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),gs(n).start(),n.Aa.aa()}function Ql(n){return Cr(n)&&!gs(n).M_()&&n.Ta.size>0}function Cr(n){return ie(n).Ia.size===0}function Pm(n){n.Ra=void 0}async function g0(n){n.Aa.set("Online")}async function m0(n){n.Ta.forEach(((e,t)=>{Kl(n,e)}))}async function _0(n,e){Pm(n),Ql(n)?(n.Aa.la(e),Gl(n)):n.Aa.set("Unknown")}async function y0(n,e,t){if(n.Aa.set("Online"),e instanceof fm&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(n,r)}else if(e instanceof Eo?n.Ra.Ye(e):e instanceof hm?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await wm(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Rm(i,l);const p=new Un(d.target,l,h,d.sequenceNumber);Kl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(wr,"Failed to raise snapshot:",r),await Go(n,r)}}async function Go(n,e,t){if(!ps(e))throw e;n.Ia.add(1),await Vi(n),n.Aa.set("Offline"),t||(t=()=>wm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(wr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ba(n)}))}function Cm(n,e){return e().catch((t=>Go(n,t,e)))}async function Sa(n){const e=ie(n),t=Yn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Dl;for(;v0(e);)try{const s=await e0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,E0(e,s)}catch(s){await Go(e,s)}Vm(e)&&km(e)}function v0(n){return Cr(n)&&n.Pa.length<10}function E0(n,e){n.Pa.push(e);const t=Yn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Vm(n){return Cr(n)&&!Yn(n).M_()&&n.Pa.length>0}function km(n){Yn(n).start()}async function T0(n){Yn(n).na()}async function I0(n){const e=Yn(n);for(const t of n.Pa)e.X_(t.mutations)}async function w0(n,e,t){const r=n.Pa.shift(),s=Ul.from(r,e,t);await Cm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Sa(n)}async function A0(n,e){e&&Yn(n).Z_&&await(async function(r,s){if((function(a){return ob(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Yn(r).N_(),await Cm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Sa(r)}})(n,e),Vm(n)&&km(n)}async function Yf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(wr,"RemoteStore received new credentials");const r=Cr(t);t.Ia.add(3),await Vi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ba(t)}async function b0(n,e){const t=ie(n);e?(t.Ia.delete(2),await ba(t)):e||(t.Ia.add(2),await Vi(t),t.Aa.set("Unknown"))}function gs(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new l0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:g0.bind(null,n),e_:m0.bind(null,n),n_:_0.bind(null,n),J_:y0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ql(n)?Gl(n):n.Aa.set("Unknown")):(await n.Va.stop(),Pm(n))}))),n.Va}function Yn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new u0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:T0.bind(null,n),n_:A0.bind(null,n),ea:I0.bind(null,n),ta:w0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Sa(n)):(await n.ma.stop(),n.Pa.length>0&&(W(wr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Jl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(n,e){if(In("AsyncQueue",`${e}: ${n}`),ps(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static emptySet(e){return new Yr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.fa=new Ne(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class as{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new as(e,t,Yr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class R0{constructor(){this.queries=ed(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=ed(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function ed(){return new Rr((n=>Xg(n)),va)}async function Dm(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new S0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Xl(a,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Yl(t)}async function Nm(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function P0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Yl(t)}function C0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Yl(n){n.Da.forEach((e=>{e.next()}))}var Kc,td;(td=Kc||(Kc={})).Fa="default",td.Cache="cache";class Om{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.key=e}}class Mm{constructor(e){this.key=e}}class V0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=de(),this.mutatedKeys=de(),this.Xa=Yg(e),this.eu=new Yr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Zf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=Ea(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;_&&b?_.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),x=!0):this.iu(_,b)||(r.track({type:2,doc:b}),x=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),x=!0):_&&!b&&(r.track({type:1,doc:_}),x=!0,(l||h)&&(c=!0)),x&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:x})}};return N(b)-N(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new as(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=de(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Mm(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new xm(r))})),t}uu(e){this.Ha=e.qs,this.Za=de();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return as.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zl="SyncEngine";class k0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class D0{constructor(e){this.key=e,this.lu=!1}}class N0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Rr((c=>Xg(c)),va),this.Tu=new Map,this.Iu=new Set,this.du=new Ne(X.comparator),this.Eu=new Map,this.Au=new $l,this.Ru={},this.Vu=new Map,this.mu=os.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function O0(n,e,t=!0){const r=$m(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Lm(r,e,t,!0),s}async function x0(n,e){const t=$m(n);await Lm(t,e,!0,!1)}async function Lm(n,e,t,r){const s=await t0(n.localStore,Gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await M0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Sm(n.remoteStore,s),c}async function M0(n,e,t,r,s){n.gu=(p,_,b)=>(async function(N,x,Q,$){let G=x.view.nu(Q);G.Ds&&(G=await Kf(N.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,G))));const z=$&&$.targetChanges.get(x.targetId),oe=$&&$.targetMismatches.get(x.targetId)!=null,ve=x.view.applyChanges(G,N.isPrimaryClient,z,oe);return rd(N,x.targetId,ve._u),ve.snapshot})(n,p,_,b);const i=await Kf(n.localStore,e,!0),a=new V0(e,i.qs),c=a.nu(i.documents),l=Ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);rd(n,t,h._u);const d=new k0(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function L0(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!va(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wl(r.remoteStore,s.targetId),Gc(r,s.targetId)})).catch(ds)):(Gc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function F0(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(t.remoteStore,r.targetId))}async function U0(n,e,t){const r=W0(n);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,V)=>b.add(V.key)),de());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=wn(),N=de();return l.Os.getEntries(b,d).next((x=>{V=x,V.forEach(((Q,$)=>{$.isValidDocument()||(N=N.add(Q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((x=>{p=x;const Q=[];for(const $ of c){const G=tb($,p.get($.key).overlayedDocument);G!=null&&Q.push(new Pr($.key,G,qg(G.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,Q,c)})).next((x=>{_=x;const Q=x.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,x.batchId,Q)}))})).then((()=>({batchId:_.batchId,changes:em(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ne(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await ki(r,s.changes),await Sa(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");t.reject(i)}}async function Fm(n,e){const t=ie(n);try{const r=await Yb(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ie(a.lu,14607):s.removedDocuments.size>0&&(Ie(a.lu,42227),a.lu=!1))})),await ki(t,r,e)}catch(r){await ds(r)}}function nd(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&Yl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ne(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=de().add(i),l=new wa(se.min(),new Map,new Ne(ue),a,c);await Fm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),eu(r)}else await zc(r.localStore,e,!1).then((()=>Gc(r,e,t))).catch(ds)}async function j0(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Xb(t.localStore,e);Bm(t,r,null),Um(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await ds(s)}}async function $0(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Bm(r,e,t),Um(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await ds(s)}}function Um(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Bm(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Gc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||jm(n,r)}))}function jm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Wl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),eu(n))}function rd(n,e,t){for(const r of t)r instanceof xm?(n.Au.addReference(r.key,e),q0(n,r)):r instanceof Mm?(W(Zl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||jm(n,r.key)):te(19791,{yu:r})}function q0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Zl,"New document in limbo: "+t),n.Iu.add(r),eu(n))}function eu(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Pe.fromString(e)),r=n.mu.next();n.Eu.set(r,new D0(t)),n.du=n.du.insert(t,r),Sm(n.remoteStore,new Un(Gt(Ll(t.path)),r,"TargetPurposeLimboResolution",ma.ue))}}async function ki(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hl.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(_=>D.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>D.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!ps(p))throw p;W(zl,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,N)}}})(r.localStore,i))}async function H0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Zl,"User change. New user:",e.toKey());const r=await Im(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Bs)}}function z0(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return de().add(r.key);{let s=de();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function $m(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B0.bind(null,e),e.hu.J_=P0.bind(null,e.eventManager),e.hu.pu=C0.bind(null,e.eventManager),e}function W0(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$0.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Jb(this.persistence,new Kb,e.initialUser,this.serializer)}Du(e){return new Tm(ql.Vi,this.serializer)}bu(e){return new r0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class K0 extends Qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ie(this.persistence.referenceDelegate instanceof Ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Db(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Tm((r=>Ko.Vi(r,t)),this.serializer)}}class Qc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H0.bind(null,this.syncEngine),await b0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new R0})()}createDatastore(e){const t=Aa(e.databaseInfo.databaseId),r=(function(i){return new c0(i)})(e.databaseInfo);return(function(i,a,c,l){return new f0(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new p0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>nd(this.syncEngine,t,0)),(function(){return Jf.C()?new Jf:new s0})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new N0(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(wr,"RemoteStore shutting down."),i.Ia.add(5),await Vi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qc.provider={build:()=>new Qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class G0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Xl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function hc(n,e){n.asyncQueue.verifyOperationInProgress(),W(Zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Im(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Kn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Kn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function sd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Q0(n);W(Zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Yf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Yf(e.remoteStore,s))),n._onlineComponents=e}async function Q0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Zn,"Using user provided OfflineComponentProvider");try{await hc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await hc(n,new Qo)}}else W(Zn,"Using default OfflineComponentProvider"),await hc(n,new K0(void 0));return n._offlineComponents}async function Hm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Zn,"Using user provided OnlineComponentProvider"),await sd(n,n._uninitializedComponentsProvider._online)):(W(Zn,"Using default OnlineComponentProvider"),await sd(n,new Qc))),n._onlineComponents}function J0(n){return Hm(n).then((e=>e.syncEngine))}async function Jc(n){const e=await Hm(n),t=e.eventManager;return t.onListen=O0.bind(null,e.syncEngine),t.onUnlisten=L0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=x0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=F0.bind(null,e.syncEngine),t}function X0(n,e,t={}){const r=new Hn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new qm({next:_=>{d.Ou(),a.enqueueAndForget((()=>Nm(i,p))),_.fromCache&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Om(c,d,{includeMetadataChanges:!0,ka:!0});return Dm(i,p)})(await Jc(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firestore.googleapis.com",od=!0;class ad{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wm,this.ssl=od}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:od;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Em;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vb)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new oA;switch(r.type){case"firstParty":return new uA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=id.get(t);r&&(W("ComponentProvider","Removing Datastore"),id.delete(t),r.terminate())})(this),Promise.resolve()}}function Y0(n,e,t,r={}){var s;n=zn(n,Ra);const i=ls(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Up(`https://${l}`),Bp("Firestore",!0)),a.host!==Wm&&a.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!vr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=IE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}n._authCredentials=new aA(new Vg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Si(t,qe._jsonSchema))return new qe(e,r||null,new X(Pe.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class Wn extends Vr{constructor(e,t,r){super(e,t,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new X(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function io(n,e,...t){if(n=mt(n),Dg("collection","path",e),n instanceof Ra){const r=Pe.fromString(e,...t);return Ef(r),new Wn(n,null,r)}{if(!(n instanceof qe||n instanceof Wn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Ef(r),new Wn(n.firestore,null,r)}}function Z0(n,e,...t){if(n=mt(n),arguments.length===1&&(e=kl.newId()),Dg("doc","path",e),n instanceof Ra){const r=Pe.fromString(e,...t);return vf(r),new qe(n,null,new X(r))}{if(!(n instanceof qe||n instanceof Wn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return vf(r),new qe(n.firestore,n instanceof Wn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="AsyncQueue";class ld{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Am(this,"async_queue_retry"),this.oc=()=>{const r=uc();r&&W(cd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Hn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ps(e))throw e;W(cd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,In("INTERNAL UNHANDLED ERROR: ",ud(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Jl.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:ud(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ud(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class mi extends Ra{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ld,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ld(e),this._firestoreClient=void 0,await e}}}function eS(n,e){const t=typeof n=="object"?n:Hp(),r=typeof n=="string"?n:Bo,s=yl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=EE("firestore");i&&Y0(s,...i)}return s}function tu(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tS(n),n._firestoreClient}function tS(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new SA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,zm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new G0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(et.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Si(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:$e("string",Rt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(Si(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:$e("string",Jt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Si(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:$e("string",Xt._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=/^__.*__$/;class rS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pi(e,this.data,t,this.fieldTransforms)}}function Gm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class ru{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Jo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Gm(this.Ec)&&nS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class sS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Aa(e)}Dc(e,t,r,s=!1){return new ru({Ec:e,methodName:t,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qm(n){const e=n._freezeSettings(),t=Aa(n._databaseId);return new sS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iS(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Ym("Data must be an object, but it was:",a,r);const c=Jm(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=aS(e,p,t);if(!a.contains(_))throw new K(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);lS(d,_)||d.push(_)}l=new Dt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new rS(new St(c),l,h)}function oS(n,e,t,r=!1){return su(t,n.Dc(r?4:3,e))}function su(n,e){if(Xm(n=mt(n)))return Ym("Unsupported field value:",e,n),Jm(n,e);if(n instanceof Km)return(function(r,s){if(!Gm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=su(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:dm(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return(function(a,c){return{mapValue:{fields:{[jg]:{stringValue:$g},[jo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Fl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ga(r)}`)})(n,e)}function Jm(n,e){const t={};return xg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(n,((r,s)=>{const i=su(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Xm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Jt||n instanceof Rt||n instanceof qe||n instanceof Km||n instanceof Xt)}function Ym(n,e,t){if(!Xm(t)||!Ng(t)){const r=ga(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function aS(n,e,t){if((e=mt(e))instanceof nu)return e._internalPath;if(typeof e=="string")return Zm(n,e);throw Jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const cS=new RegExp("[~\\*/\\[\\]]");function Zm(n,e,t){if(e.search(cS)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nu(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+n+l)}function lS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(iu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uS extends e_{data(){return super.data()}}function iu(n,e){return typeof e=="string"?Zm(n,e):e instanceof nu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class hS extends ou{}function fS(n,e,...t){let r=[];e instanceof ou&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof au)).length,c=i.filter((l=>l instanceof Pa)).length;if(a>1||a>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Pa extends hS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Pa(e,t,r)}_apply(e){const t=this._parse(e);return n_(e._query,t),new Vr(e.firestore,e.converter,Uc(e._query,t))}_parse(e){const t=Qm(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){dd(p,d);const V=[];for(const N of p)V.push(fd(l,i,N));_={arrayValue:{values:V}}}else _=fd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||dd(p,d),_=oS(c,a,p,d==="in"||d==="not-in");return je.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function dS(n,e,t){const r=e,s=iu("where",n);return Pa._create(s,r,t)}class au extends ou{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new au(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)n_(a,l),a=Uc(a,l)})(e._query,t),new Vr(e.firestore,e.converter,Uc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fd(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jg(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Pe.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pf(n,new X(r))}if(t instanceof qe)return Pf(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ga(t)}.`)}function dd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function n_(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pS{convertValue(e,t="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[jo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Xt(i)}convertGeoPoint(e){return new Jt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ya(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=Qn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);Ie(vm(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _r extends e_{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_r._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_r._jsonSchemaVersion="firestore/documentSnapshot/1.0",_r._jsonSchema={type:$e("string",_r._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class To extends _r{data(e={}){return super.data(e)}}class yr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new To(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new To(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new To(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:mS(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:$e("string",yr._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class cu extends pS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function fc(n){n=zn(n,Vr);const e=zn(n.firestore,mi),t=tu(e),r=new cu(e);return t_(n._query),X0(t,n._query).then((s=>new yr(e,r,n,s)))}function _S(n,e,t){n=zn(n,qe);const r=zn(n.firestore,mi),s=gS(n.converter,e);return vS(r,[iS(Qm(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,gn.none())])}function yS(n,...e){var t,r,s;n=mt(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||hd(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hd(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof qe)h=zn(n.firestore,mi),d=Ll(n._key.path),l={next:p=>{e[a]&&e[a](ES(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=zn(n,Vr);h=zn(p.firestore,mi),d=p._query;const _=new cu(h);l={next:b=>{e[a]&&e[a](new yr(h,_,p,b))},error:e[a+1],complete:e[a+2]},t_(n._query)}return(function(_,b,V,N){const x=new qm(N),Q=new Om(b,x,V);return _.asyncQueue.enqueueAndForget((async()=>Dm(await Jc(_),Q))),()=>{x.Ou(),_.asyncQueue.enqueueAndForget((async()=>Nm(await Jc(_),Q)))}})(tu(h),d,c,l)}function vS(n,e){return(function(r,s){const i=new Hn;return r.asyncQueue.enqueueAndForget((async()=>U0(await J0(r),s,i))),i.promise})(tu(n),e)}function ES(n,e,t){const r=t.docs.get(e._key),s=new cu(n);return new _r(n,s,e._key,r,new js(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){fs=s})(us),ts(new Er("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new mi(new cA(r.getProvider("auth-internal")),new hA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$n(pf,gf,e),$n(pf,gf,"esm2017")})();const TS={},r_=qp(TS),xs=eS(r_),Xc=Gw(r_),ms=oE("BeverageStore",{state:()=>({temps:ff,currentTemp:ff[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",user:null,message:"",unsubscribeBeverages:null}),actions:{async init(){const n=await fc(io(xs,"bases"));this.bases=n.docs.map(r=>r.data());const e=await fc(io(xs,"syrups"));this.syrups=e.docs.map(r=>r.data());const t=await fc(io(xs,"creamers"));this.creamers=t.docs.map(r=>r.data()),this.bases.length>0&&this.currentBase===null&&(this.currentBase=this.bases[0]),this.syrups.length>0&&this.currentSyrup===null&&(this.currentSyrup=this.syrups[0]),this.creamers.length>0&&this.currentCreamer===null&&(this.currentCreamer=this.creamers[0])},async withGoogle(){this.message="";const n=new hn;try{await rw(Xc,n)}catch{this.message="Google sign in failed."}},async logout(){await LI(Xc)},setUser(n){if(this.user=n,this.unsubscribeBeverages&&(this.unsubscribeBeverages(),this.unsubscribeBeverages=null),!n){this.beverages=[],this.currentBeverage=null,this.message="";return}const e=fS(io(xs,"beverages"),dS("uid","==",n.uid));this.unsubscribeBeverages=yS(e,t=>{if(this.beverages=t.docs.map(r=>r.data()),this.beverages.length===0){this.currentBeverage=null;return}if(this.currentBeverage&&this.beverages.find(r=>{var s;return r.id===((s=this.currentBeverage)==null?void 0:s.id)})){const r=this.beverages.find(s=>{var i;return s.id===((i=this.currentBeverage)==null?void 0:i.id)});r&&this.showBeverage(r.id)}else this.showBeverage(this.beverages[0].id)})},async makeBeverage(){if(!this.user){this.message="No user logged in, please sign in first.";return}if(this.currentName.trim()===""||this.currentBase===null||this.currentSyrup===null||this.currentCreamer===null){this.message="Please complete all beverage options and the name before making a beverage.";return}const n=Date.now().toString(),e={id:n,name:this.currentName.trim(),temp:this.currentTemp,base:this.currentBase,syrup:this.currentSyrup,creamer:this.currentCreamer,uid:this.user.uid};await _S(Z0(xs,"beverages",n),e),this.currentBeverage={id:e.id,name:e.name,temp:e.temp,base:e.base,syrup:e.syrup,creamer:e.creamer},this.message=`Beverage ${e.name} made successfully!`,this.currentName=""},showBeverage(n){const e=this.beverages.find(t=>t.id===n);e&&(this.currentBeverage=e,this.currentTemp=e.temp,this.currentBase=e.base,this.currentSyrup=e.syrup,this.currentCreamer=e.creamer)}}}),IS=vi({__name:"Syrup",setup(n){const e=ms();return(t,r)=>{var s;return pe(),be("div",{class:"syrup",style:cs({"--texture-color":(s=he(e).currentSyrup)==null?void 0:s.color})},null,4)}}}),wS=br(IS,[["__scopeId","data-v-969d30c3"]]),AS=vi({__name:"Base",setup(n){const e=ms();return(t,r)=>{var s;return pe(),be("div",{class:"baseBeverage",style:cs({backgroundColor:(s=he(e).currentBase)==null?void 0:s.color})},null,4)}}}),bS=br(AS,[["__scopeId","data-v-f853ce7d"]]),SS={class:"froth"},RS=vi({__name:"Creamer",setup(n){const e=ms();return(t,r)=>(pe(),be("div",SS,[(pe(),be(Be,null,On(5,()=>{var s;return xe("div",{class:"foam",style:cs({backgroundColor:(s=he(e).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),PS=br(RS,[["__scopeId","data-v-416a324e"]]),CS={},VS={id:"steam"},kS={class:"stream"};function DS(n,e){return pe(),be("div",VS,[(pe(),be(Be,null,On(3,()=>xe("div",kS)),64))])}const NS=br(CS,[["render",DS]]),OS={},xS={id:"condensation"},MS={class:"flake"};function LS(n,e){return pe(),be("div",xS,[(pe(),be(Be,null,On(3,()=>xe("div",MS)),64))])}const FS=br(OS,[["render",LS]]),US=vi({__name:"Beverage",props:{isIced:{type:Boolean}},setup(n){const e=ms();return(t,r)=>(pe(),xn(rA,null,{default:Ms(()=>[n.isIced?(pe(),xn(FS,{key:0})):(pe(),xn(NS,{key:1})),It(Zw,null,{top:Ms(()=>{var s;return[((s=he(e).currentCreamer)==null?void 0:s.name)!=="No Cream"?(pe(),xn(PS,{key:0})):Po("",!0)]}),mid:Ms(()=>{var s;return[((s=he(e).currentSyrup)==null?void 0:s.name)!=="No Syrup"?(pe(),xn(wS,{key:0})):Po("",!0)]}),bottom:Ms(()=>[It(bS)]),_:1})]),_:1}))}}),BS={class:"auth-bar"},jS={key:0},$S={key:1},qS={key:0,class:"message"},HS=["id","value"],zS=["id","value"],WS=["id","value"],KS=["id","value"],GS=["disabled"],QS={id:"beverage-container",style:{"margin-top":"20px"}},JS={key:0},XS=["value","checked","onChange"],YS=vi({__name:"App",setup(n){const e=ms();return(t,r)=>(pe(),be("div",null,[xe("div",BS,[he(e).user?(pe(),be("div",jS," Signed in as "+kn(he(e).user.displayName||he(e).user.email),1)):(pe(),be("div",$S,"Not signed in")),he(e).user?(pe(),be("button",{key:3,onClick:r[1]||(r[1]=s=>he(e).logout())},"Sign out")):(pe(),be("button",{key:2,onClick:r[0]||(r[0]=s=>he(e).withGoogle())}," Sign in with Google "))]),he(e).message?(pe(),be("div",qS,kn(he(e).message),1)):Po("",!0),It(US,{isIced:he(e).currentTemp==="Cold"},null,8,["isIced"]),xe("ul",null,[xe("li",null,[(pe(!0),be(Be,null,On(he(e).temps,s=>(pe(),be("label",{key:s},[Ns(xe("input",{type:"radio",name:"temperature",id:`r${s}`,value:s,"onUpdate:modelValue":r[2]||(r[2]=i=>he(e).currentTemp=i)},null,8,HS),[[Yi,he(e).currentTemp]]),Ur(" "+kn(s),1)]))),128))])]),xe("ul",null,[xe("li",null,[(pe(!0),be(Be,null,On(he(e).bases,s=>(pe(),be("label",{key:s.id},[Ns(xe("input",{type:"radio",name:"bases",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[3]||(r[3]=i=>he(e).currentBase=i)},null,8,zS),[[Yi,he(e).currentBase]]),Ur(" "+kn(s.name),1)]))),128))])]),xe("ul",null,[xe("li",null,[(pe(!0),be(Be,null,On(he(e).syrups,s=>(pe(),be("label",{key:s.id},[Ns(xe("input",{type:"radio",name:"syrups",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[4]||(r[4]=i=>he(e).currentSyrup=i)},null,8,WS),[[Yi,he(e).currentSyrup]]),Ur(" "+kn(s.name),1)]))),128))])]),xe("ul",null,[xe("li",null,[(pe(!0),be(Be,null,On(he(e).creamers,s=>(pe(),be("label",{key:s.id},[Ns(xe("input",{type:"radio",name:"creamers",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[5]||(r[5]=i=>he(e).currentCreamer=i)},null,8,KS),[[Yi,he(e).currentCreamer]]),Ur(" "+kn(s.name),1)]))),128))])]),Ns(xe("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":r[6]||(r[6]=s=>he(e).currentName=s)},null,512),[[Kv,he(e).currentName]]),xe("button",{onClick:r[7]||(r[7]=s=>he(e).makeBeverage()),disabled:!he(e).user}," 🍺 Make Beverage ",8,GS),xe("div",QS,[he(e).user?(pe(),be("div",JS,[(pe(!0),be(Be,null,On(he(e).beverages,s=>{var i;return pe(),be("label",{key:s.id,class:"bev-item"},[xe("input",{type:"radio",name:"savedBeverages",value:s.id,checked:((i=he(e).currentBeverage)==null?void 0:i.id)===s.id,onChange:a=>he(e).showBeverage(s.id)},null,40,XS),Ur(" "+kn(s.name),1)])}),128))])):Po("",!0)])]))}}),lu=eE();lu.use(hE);const s_=Xv(YS);s_.use(lu);const pd=ms(lu);pd.init().then(()=>{MI(Xc,n=>{pd.setUser(n)}),s_.mount("#app")});
