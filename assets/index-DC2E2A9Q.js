(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},mr=[],On=()=>{},Ch=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wl=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Xl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ph=Object.prototype.hasOwnProperty,dt=(n,e)=>Ph.call(n,e),qe=Array.isArray,gr=n=>Ra(n)==="[object Map]",Tf=n=>Ra(n)==="[object Set]",Ze=n=>typeof n=="function",Rt=n=>typeof n=="string",si=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Af=n=>(St(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),wf=Object.prototype.toString,Ra=n=>wf.call(n),Lh=n=>Ra(n).slice(8,-1),Rf=n=>Ra(n)==="[object Object]",ql=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Jr=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Dh=/-(\w)/g,yi=Ca(n=>n.replace(Dh,(e,t)=>t?t.toUpperCase():"")),Ih=/\B([A-Z])/g,Ki=Ca(n=>n.replace(Ih,"-$1").toLowerCase()),Cf=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Ca(n=>n?`on${Cf(n)}`:""),Ei=(n,e)=>!Object.is(n,e),Xa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ko=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Uh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Nh=n=>{const e=Rt(n)?Number(n):NaN;return isNaN(e)?n:e};let Bc;const Pa=()=>Bc||(Bc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hs(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Rt(i)?kh(i):hs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(n)||St(n))return n}const Fh=/;(?![^(]*\))/g,Oh=/:([^]+)/,Bh=/\/\*[^]*?\*\//g;function kh(n){const e={};return n.replace(Bh,"").split(Fh).forEach(t=>{if(t){const i=t.split(Oh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Un(n){let e="";if(Rt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Un(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hh=Gl(zh);function Pf(n){return!!n||n===""}const Lf=n=>!!(n&&n.__v_isRef===!0),nt=n=>Rt(n)?n:n==null?"":qe(n)||St(n)&&(n.toString===wf||!Ze(n.toString))?Lf(n)?nt(n.value):JSON.stringify(n,Df,2):String(n),Df=(n,e)=>Lf(e)?Df(n,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[qa(i,s)+" =>"]=r,t),{})}:Tf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:si(e)?qa(e):St(e)&&!qe(e)&&!Rf(e)?String(e):e,qa=(n,e="")=>{var t;return si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class Vh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gh(){return Qt}let vt;const $a=new WeakSet;class If{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kc(this),Ff(this);const e=vt,t=Sn;vt=this,Sn=!0;try{return this.fn()}finally{Of(this),vt=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kl(e);this.deps=this.depsTail=void 0,kc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zo(this)&&this.run()}get dirty(){return zo(this)}}let Uf=0,Qr,jr;function Nf(n,e=!1){if(n.flags|=8,e){n.next=jr,jr=n;return}n.next=Qr,Qr=n}function $l(){Uf++}function Yl(){if(--Uf>0)return;if(jr){let e=jr;for(jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qr;){let e=Qr;for(Qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ff(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Of(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Kl(i),Wh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function zo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===is)||(n.globalVersion=is,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!zo(n))))return;n.flags|=2;const e=n.dep,t=vt,i=Sn;vt=n,Sn=!0;try{Ff(n);const r=n.fn(n._value);(e.version===0||Ei(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=t,Sn=i,Of(n),n.flags&=-3}}function Kl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Kl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const kf=[];function ei(){kf.push(Sn),Sn=!1}function ti(){const n=kf.pop();Sn=n===void 0?!0:n}function kc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let is=0;class Xh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!Sn||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new Xh(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,zf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,is++,this.notify(e)}notify(e){$l();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yl()}}}function zf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ho=new WeakMap,Wi=Symbol(""),Vo=Symbol(""),rs=Symbol("");function zt(n,e,t){if(Sn&&vt){let i=Ho.get(n);i||Ho.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Zl),r.map=i,r.key=t),r.track()}}function Kn(n,e,t,i,r,s){const a=Ho.get(n);if(!a){is++;return}const o=l=>{l&&l.trigger()};if($l(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&ql(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===rs||!si(f)&&f>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(rs)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Wi)),gr(n)&&o(a.get(Vo)));break;case"delete":l||(o(a.get(Wi)),gr(n)&&o(a.get(Vo)));break;case"set":gr(n)&&o(a.get(Wi));break}}Yl()}function ji(n){const e=ct(n);return e===n?e:(zt(e,"iterate",rs),pn(n)?e:e.map(Nt))}function La(n){return zt(n=ct(n),"iterate",rs),n}const qh={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,Nt)},concat(...n){return ji(this).concat(...n.map(e=>qe(e)?ji(e):e))},entries(){return Ya(this,"entries",n=>(n[1]=Nt(n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(Nt),arguments)},find(n,e){return Hn(this,"find",n,e,Nt,arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,Nt,arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return Br(this,"pop")},push(...n){return Br(this,"push",n)},reduce(n,...e){return zc(this,"reduce",n,e)},reduceRight(n,...e){return zc(this,"reduceRight",n,e)},shift(){return Br(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return Br(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Br(this,"unshift",n)},values(){return Ya(this,"values",Nt)}};function Ya(n,e,t){const i=La(n),r=i[e]();return i!==n&&!pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const $h=Array.prototype;function Hn(n,e,t,i,r,s){const a=La(n),o=a!==n&&!pn(n),l=a[e];if(l!==$h[e]){const d=l.apply(n,s);return o?Nt(d):d}let c=t;a!==n&&(o?c=function(d,f){return t.call(this,Nt(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function zc(n,e,t,i){const r=La(n);let s=t;return r!==n&&(pn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Nt(o),l,n)}),r[e](s,...i)}function Ka(n,e,t){const i=ct(n);zt(i,"iterate",rs);const r=i[e](...t);return(r===-1||r===!1)&&ec(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function Br(n,e,t=[]){ei(),$l();const i=ct(n)[e].apply(n,t);return Yl(),ti(),i}const Yh=Gl("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function Kh(n){si(n)||(n=String(n));const e=ct(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sp:qf:s?Xf:Wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!r){let l;if(a&&(l=qh[t]))return l;if(t==="hasOwnProperty")return Kh}const o=Reflect.get(e,t,Wt(e)?e:i);return(si(t)?Hf.has(t):Yh(t))||(r||zt(e,"get",t),s)?o:Wt(o)?a&&ql(t)?o:o.value:St(o)?r?$f(o):Ql(o):o}}class Gf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ti(s);if(!pn(i)&&!Ti(i)&&(s=ct(s),i=ct(i)),!qe(e)&&Wt(s)&&!Wt(i))return l?!1:(s.value=i,!0)}const a=qe(e)&&ql(t)?Number(t)<e.length:dt(e,t),o=Reflect.set(e,t,i,Wt(e)?e:r);return e===ct(r)&&(a?Ei(i,s)&&Kn(e,"set",t,i):Kn(e,"add",t,i)),o}deleteProperty(e,t){const i=dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!si(t)||!Hf.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",qe(e)?"length":Wi),Reflect.ownKeys(e)}}class Zh extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jh=new Gf,Qh=new Zh,jh=new Gf(!0);const Go=n=>n,Es=n=>Reflect.getPrototypeOf(n);function ep(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),a=gr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Go:e?ua:Nt;return!e&&zt(s,"iterate",l?Vo:Wi),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ys(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tp(n,e){const t={get(r){const s=this.__v_raw,a=ct(s),o=ct(r);n||(Ei(r,o)&&zt(a,"get",r),zt(a,"get",o));const{has:l}=Es(a),c=e?Go:n?ua:Nt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(ct(r),"iterate",Wi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=ct(s),o=ct(r);return n||(Ei(r,o)&&zt(a,"has",r),zt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ct(o),c=e?Go:n?ua:Nt;return!n&&zt(l,"iterate",Wi),o.forEach((u,d)=>r.call(s,c(u),c(d),a))}};return Ut(t,n?{add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear")}:{add(r){!e&&!pn(r)&&!Ti(r)&&(r=ct(r));const s=ct(this);return Es(s).has.call(s,r)||(s.add(r),Kn(s,"add",r,r)),this},set(r,s){!e&&!pn(s)&&!Ti(s)&&(s=ct(s));const a=ct(this),{has:o,get:l}=Es(a);let c=o.call(a,r);c||(r=ct(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ei(s,u)&&Kn(a,"set",r,s):Kn(a,"add",r,s),this},delete(r){const s=ct(this),{has:a,get:o}=Es(s);let l=a.call(s,r);l||(r=ct(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Kn(s,"delete",r,void 0),c},clear(){const r=ct(this),s=r.size!==0,a=r.clear();return s&&Kn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ep(r,n,e)}),t}function Jl(n,e){const t=tp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(dt(t,r)&&r in i?t:i,r,s)}const np={get:Jl(!1,!1)},ip={get:Jl(!1,!0)},rp={get:Jl(!0,!1)};const Wf=new WeakMap,Xf=new WeakMap,qf=new WeakMap,sp=new WeakMap;function ap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(n){return n.__v_skip||!Object.isExtensible(n)?0:ap(Lh(n))}function Ql(n){return Ti(n)?n:jl(n,!1,Jh,np,Wf)}function lp(n){return jl(n,!1,jh,ip,Xf)}function $f(n){return jl(n,!0,Qh,rp,qf)}function jl(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=op(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function _r(n){return Ti(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function Ti(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function ec(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function cp(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&ko(n,"__v_skip",!0),n}const Nt=n=>St(n)?Ql(n):n,ua=n=>St(n)?$f(n):n;function Wt(n){return n?n.__v_isRef===!0:!1}function tc(n){return up(n,!1)}function up(n,e){return Wt(n)?n:new fp(n,e)}class fp{constructor(e,t){this.dep=new Zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||Ti(e);e=i?e:ct(e),Ei(e,t)&&(this._rawValue=e,this._value=i?e:Nt(e),this.dep.trigger())}}function je(n){return Wt(n)?n.value:n}const dp={get:(n,e,t)=>e==="__v_raw"?n:je(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Wt(r)&&!Wt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Yf(n){return _r(n)?n:new Proxy(n,dp)}class hp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pp(n,e,t=!1){let i,r;return Ze(n)?i=n:(i=n.get,r=n.set),new hp(i,r,t)}const Ts={},fa=new WeakMap;let Oi;function mp(n,e=!1,t=Oi){if(t){let i=fa.get(t);i||fa.set(t,i=[]),i.push(n)}}function gp(n,e,t=Mt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=M=>r?M:pn(M)||r===!1||r===0?Mi(M,1):Mi(M);let u,d,f,p,x=!1,S=!1;if(Wt(n)?(d=()=>n.value,x=pn(n)):_r(n)?(d=()=>c(n),x=!0):qe(n)?(S=!0,x=n.some(M=>_r(M)||pn(M)),d=()=>n.map(M=>{if(Wt(M))return M.value;if(_r(M))return c(M);if(Ze(M))return l?l(M,2):M()})):Ze(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ei();try{f()}finally{ti()}}const M=Oi;Oi=u;try{return l?l(n,3,[p]):n(p)}finally{Oi=M}}:d=On,e&&r){const M=d,A=r===!0?1/0:r;d=()=>Mi(M(),A)}const g=Gh(),h=()=>{u.stop(),g&&g.active&&Xl(g.effects,u)};if(s&&e){const M=e;e=(...A)=>{M(...A),h()}}let w=S?new Array(n.length).fill(Ts):Ts;const C=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const A=u.run();if(r||x||(S?A.some((y,L)=>Ei(y,w[L])):Ei(A,w))){f&&f();const y=Oi;Oi=u;try{const L=[A,w===Ts?void 0:S&&w[0]===Ts?[]:w,p];w=A,l?l(e,3,L):e(...L)}finally{Oi=y}}}else u.run()};return o&&o(C),u=new If(d),u.scheduler=a?()=>a(C,!1):C,p=M=>mp(M,!1,u),f=u.onStop=()=>{const M=fa.get(u);if(M){if(l)l(M,4);else for(const A of M)A();fa.delete(u)}},e?i?C(!0):w=u.run():a?a(C.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Mi(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Wt(n))Mi(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)Mi(n[i],e,t);else if(Tf(n)||gr(n))n.forEach(i=>{Mi(i,e,t)});else if(Rf(n)){for(const i in n)Mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Mi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(n,e,t,i){try{return i?n(...i):n()}catch(r){Da(r,e,t)}}function En(n,e,t,i){if(Ze(n)){const r=ps(n,e,t,i);return r&&Af(r)&&r.catch(s=>{Da(s,e,t)}),r}if(qe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function Da(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Mt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(s){ei(),ps(s,null,10,[n,l,c]),ti();return}}_p(n,t,r,i,a)}function _p(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $t=[];let Ln=-1;const xr=[];let _i=null,pr=0;const Kf=Promise.resolve();let da=null;function xp(n){const e=da||Kf;return n?e.then(this?n.bind(this):n):e}function vp(n){let e=Ln+1,t=$t.length;for(;e<t;){const i=e+t>>>1,r=$t[i],s=ss(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function nc(n){if(!(n.flags&1)){const e=ss(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=ss(t)?$t.push(n):$t.splice(vp(e),0,n),n.flags|=1,Zf()}}function Zf(){da||(da=Kf.then(Qf))}function Mp(n){qe(n)?xr.push(...n):_i&&n.id===-1?_i.splice(pr+1,0,n):n.flags&1||(xr.push(n),n.flags|=1),Zf()}function Hc(n,e,t=Ln+1){for(;t<$t.length;t++){const i=$t[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$t.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jf(n){if(xr.length){const e=[...new Set(xr)].sort((t,i)=>ss(t)-ss(i));if(xr.length=0,_i){_i.push(...e);return}for(_i=e,pr=0;pr<_i.length;pr++){const t=_i[pr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_i=null,pr=0}}const ss=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qf(n){try{for(Ln=0;Ln<$t.length;Ln++){const e=$t[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ps(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<$t.length;Ln++){const e=$t[Ln];e&&(e.flags&=-2)}Ln=-1,$t.length=0,Jf(),da=null,($t.length||xr.length)&&Qf()}}let Yt=null,jf=null;function ha(n){const e=Yt;return Yt=n,jf=n&&n.type.__scopeId||null,e}function pa(n,e=Yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Jc(-1);const s=ha(e);let a;try{a=n(...r)}finally{ha(s),i._d&&Jc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ei(),En(l,t,8,[n.el,o,n,e]),ti())}}const Sp=Symbol("_vte"),ed=n=>n.__isTeleport,xi=Symbol("_leaveCb"),As=Symbol("_enterCb");function bp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ic(()=>{n.isMounted=!0}),ld(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],td={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},nd=n=>{const e=n.subTree;return e.component?nd(e.component):e},Ep={name:"BaseTransition",props:td,setup(n,{slots:e}){const t=Mm(),i=bp();return()=>{const r=e.default&&sd(e.default(),!0);if(!r||!r.length)return;const s=id(r),a=ct(n),{mode:o}=a;if(i.isLeaving)return Za(s);const l=Vc(s);if(!l)return Za(s);let c=Wo(l,a,i,t,d=>c=d);l.type!==Ht&&as(l,c);let u=t.subTree&&Vc(t.subTree);if(u&&u.type!==Ht&&!ki(l,u)&&nd(t).type!==Ht){let d=Wo(u,a,i,t);if(as(u,d),o==="out-in"&&l.type!==Ht)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Za(s);o==="in-out"&&l.type!==Ht?d.delayLeave=(f,p,x)=>{const S=rd(i,u);S[String(u.key)]=u,f[xi]=()=>{p(),f[xi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function id(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ht){e=t;break}}return e}const yp=Ep;function rd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Wo(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:g,onAppear:h,onAfterAppear:w,onAppearCancelled:C}=e,M=String(n.key),A=rd(t,n),y=(b,U)=>{b&&En(b,i,9,U)},L=(b,U)=>{const D=U[1];y(b,U),qe(b)?b.every(I=>I.length<=1)&&D():b.length<=1&&D()},_={mode:a,persisted:o,beforeEnter(b){let U=l;if(!t.isMounted)if(s)U=g||l;else return;b[xi]&&b[xi](!0);const D=A[M];D&&ki(n,D)&&D.el[xi]&&D.el[xi](),y(U,[b])},enter(b){let U=c,D=u,I=d;if(!t.isMounted)if(s)U=h||c,D=w||u,I=C||d;else return;let X=!1;const Q=b[As]=k=>{X||(X=!0,k?y(I,[b]):y(D,[b]),_.delayedLeave&&_.delayedLeave(),b[As]=void 0)};U?L(U,[b,Q]):Q()},leave(b,U){const D=String(n.key);if(b[As]&&b[As](!0),t.isUnmounting)return U();y(f,[b]);let I=!1;const X=b[xi]=Q=>{I||(I=!0,U(),Q?y(S,[b]):y(x,[b]),b[xi]=void 0,A[D]===n&&delete A[D])};A[D]=n,p?L(p,[b,X]):X()},clone(b){const U=Wo(b,e,t,i,r);return r&&r(U),U}};return _}function Za(n){if(Ia(n))return n=Ai(n),n.children=null,n}function Vc(n){if(!Ia(n))return ed(n.type)&&n.children?id(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function as(n,e){n.shapeFlag&6&&n.component?(n.transition=e,as(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function sd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Pt?(a.patchFlag&128&&r++,i=i.concat(sd(a.children,e,o))):(e||a.type!==Ht)&&i.push(o!=null?Ai(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function en(n,e){return Ze(n)?Ut({name:n.name},e,{setup:n}):n}function ad(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function es(n,e,t,i,r=!1){if(qe(n)){n.forEach((x,S)=>es(x,e&&(qe(e)?e[S]:e),t,i,r));return}if(vr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&es(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?cc(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Mt?o.refs={}:o.refs,d=o.setupState,f=ct(d),p=d===Mt?()=>!1:x=>dt(f,x);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,p(c)&&(d[c]=null)):Wt(c)&&(c.value=null)),Ze(l))ps(l,o,12,[a,u]);else{const x=Rt(l),S=Wt(l);if(x||S){const g=()=>{if(n.f){const h=x?p(l)?d[l]:u[l]:l.value;r?qe(h)&&Xl(h,s):qe(h)?h.includes(s)||h.push(s):x?(u[l]=[s],p(l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else x?(u[l]=a,p(l)&&(d[l]=a)):S&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,sn(g,t)):g()}}}Pa().requestIdleCallback;Pa().cancelIdleCallback;const vr=n=>!!n.type.__asyncLoader,Ia=n=>n.type.__isKeepAlive;function Tp(n,e){od(n,"a",e)}function Ap(n,e){od(n,"da",e)}function od(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ua(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ia(r.parent.vnode)&&wp(i,e,t,r),r=r.parent}}function wp(n,e,t,i){const r=Ua(e,n,i,!0);Na(()=>{Xl(i[e],r)},t)}function Ua(n,e,t=Vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{ei();const o=gs(t),l=En(e,t,n,a);return o(),ti(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(e,t=Vt)=>{(!cs||n==="sp")&&Ua(n,(...i)=>e(...i),t)},Rp=ai("bm"),ic=ai("m"),Cp=ai("bu"),Pp=ai("u"),ld=ai("bum"),Na=ai("um"),Lp=ai("sp"),Dp=ai("rtg"),Ip=ai("rtc");function Up(n,e=Vt){Ua("ec",n,e)}const Np=Symbol.for("v-ndc");function ms(n,e,t,i){let r;const s=t,a=qe(n);if(a||Rt(n)){const o=a&&_r(n);let l=!1,c=!1;o&&(l=!pn(n),c=Ti(n),n=La(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?ua(Nt(n[u])):Nt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Fp(n,e,t={},i,r){if(Yt.ce||Yt.parent&&vr(Yt.parent)&&Yt.parent.ce)return t.name=e,st(),Ko(Pt,null,[tt("slot",t,i)],64);let s=n[e];s&&s._c&&(s._d=!1),st();const a=s&&cd(s(t)),o=t.key||a&&a.key,l=Ko(Pt,{key:(o&&!si(o)?o:`_${e}`)+""},a||[],a&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function cd(n){return n.some(e=>ls(e)?!(e.type===Ht||e.type===Pt&&!cd(e.children)):!0)?n:null}const Xo=n=>n?Rd(n)?cc(n):Xo(n.parent):null,ts=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xo(n.parent),$root:n=>Xo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fd(n),$forceUpdate:n=>n.f||(n.f=()=>{nc(n.update)}),$nextTick:n=>n.n||(n.n=xp.bind(n.proxy)),$watch:n=>sm.bind(n)}),Ja=(n,e)=>n!==Mt&&!n.__isScriptSetup&&dt(n,e),Op={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ja(i,e))return a[e]=1,i[e];if(r!==Mt&&dt(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&dt(c,e))return a[e]=3,s[e];if(t!==Mt&&dt(t,e))return a[e]=4,t[e];qo&&(a[e]=0)}}const u=ts[e];let d,f;if(u)return e==="$attrs"&&zt(n.attrs,"get",""),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==Mt&&dt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ja(r,e)?(r[e]=t,!0):i!==Mt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Mt&&dt(n,a)||Ja(e,a)||(o=s[0])&&dt(o,a)||dt(i,a)||dt(ts,a)||dt(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gc(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qo=!0;function Bp(n){const e=fd(n),t=n.proxy,i=n.ctx;qo=!1,e.beforeCreate&&Wc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:x,activated:S,deactivated:g,beforeDestroy:h,beforeUnmount:w,destroyed:C,unmounted:M,render:A,renderTracked:y,renderTriggered:L,errorCaptured:_,serverPrefetch:b,expose:U,inheritAttrs:D,components:I,directives:X,filters:Q}=e;if(c&&kp(c,i,null),a)for(const B in a){const K=a[B];Ze(K)&&(i[B]=K.bind(t))}if(r){const B=r.call(t,t);St(B)&&(n.data=Ql(B))}if(qo=!0,s)for(const B in s){const K=s[B],ae=Ze(K)?K.bind(t,t):Ze(K.get)?K.get.bind(t,t):On,ge=!Ze(K)&&Ze(K.set)?K.set.bind(t):On,_e=Pd({get:ae,set:ge});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>_e.value,set:be=>_e.value=be})}if(o)for(const B in o)ud(o[B],i,t,B);if(l){const B=Ze(l)?l.call(t):l;Reflect.ownKeys(B).forEach(K=>{Xp(K,B[K])})}u&&Wc(u,n,"c");function Y(B,K){qe(K)?K.forEach(ae=>B(ae.bind(t))):K&&B(K.bind(t))}if(Y(Rp,d),Y(ic,f),Y(Cp,p),Y(Pp,x),Y(Tp,S),Y(Ap,g),Y(Up,_),Y(Ip,y),Y(Dp,L),Y(ld,w),Y(Na,M),Y(Lp,b),qe(U))if(U.length){const B=n.exposed||(n.exposed={});U.forEach(K=>{Object.defineProperty(B,K,{get:()=>t[K],set:ae=>t[K]=ae})})}else n.exposed||(n.exposed={});A&&n.render===On&&(n.render=A),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),X&&(n.directives=X),b&&ad(n)}function kp(n,e,t=On){qe(n)&&(n=$o(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=ea(r.from||i,r.default,!0):s=ea(r.from||i):s=ea(r),Wt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Wc(n,e,t){En(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ud(n,e,t,i){let r=i.includes(".")?Ed(t,i):()=>t[i];if(Rt(n)){const s=e[n];Ze(s)&&ta(r,s)}else if(Ze(n))ta(r,n.bind(t));else if(St(n))if(qe(n))n.forEach(s=>ud(s,e,t,i));else{const s=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(s)&&ta(r,s,n)}}function fd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ma(l,c,a,!0)),ma(l,e,a)),St(e)&&s.set(e,l),l}function ma(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ma(n,s,t,!0),r&&r.forEach(a=>ma(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=zp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const zp={data:Xc,props:qc,emits:qc,methods:Yr,computed:Yr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Yr,directives:Yr,watch:Vp,provide:Xc,inject:Hp};function Xc(n,e){return e?n?function(){return Ut(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function Hp(n,e){return Yr($o(n),$o(e))}function $o(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function Yr(n,e){return n?Ut(Object.create(null),n,e):e}function qc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Gc(n),Gc(e??{})):e}function Vp(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function dd(){return{app:null,config:{isNativeTag:Ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gp=0;function Wp(n,e){return function(i,r=null){Ze(i)||(i=Ut({},i)),r!=null&&!St(r)&&(r=null);const s=dd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Gp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wm,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&Ze(u.install)?(a.add(u),u.install(c,...d)):Ze(u)&&(a.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||tt(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,cc(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Mr;Mr=c;try{return u()}finally{Mr=d}}};return c}}let Mr=null;function Xp(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function ea(n,e,t=!1){const i=Vt||Yt;if(i||Mr){let r=Mr?Mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const hd={},pd=()=>Object.create(hd),md=n=>Object.getPrototypeOf(n)===hd;function qp(n,e,t,i=!1){const r={},s=pd();n.propsDefaults=Object.create(null),gd(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:lp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $p(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=ct(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Fa(n.emitsOptions,f))continue;const p=e[f];if(l)if(dt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const x=yi(f);r[x]=Yo(l,o,x,p,n,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{gd(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!dt(e,d)&&((u=Ki(d))===d||!dt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Yo(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!dt(e,d))&&(delete s[d],c=!0)}c&&Kn(n.attrs,"set","")}function gd(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let u;r&&dt(r,u=yi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=ct(t),c=o||Mt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Yo(r,l,d,c[d],n,!dt(c,d))}}return a}function Yo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=dt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=gs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ki(t))&&(i=!0))}return i}const Yp=new WeakMap;function _d(n,e,t=!1){const i=t?Yp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ze(n)){const u=d=>{l=!0;const[f,p]=_d(d,e,!0);Ut(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,mr),mr;if(qe(s))for(let u=0;u<s.length;u++){const d=yi(s[u]);$c(d)&&(a[d]=Mt)}else if(s)for(const u in s){const d=yi(u);if($c(d)){const f=s[u],p=a[d]=qe(f)||Ze(f)?{type:f}:Ut({},f),x=p.type;let S=!1,g=!0;if(qe(x))for(let h=0;h<x.length;++h){const w=x[h],C=Ze(w)&&w.name;if(C==="Boolean"){S=!0;break}else C==="String"&&(g=!1)}else S=Ze(x)&&x.name==="Boolean";p[0]=S,p[1]=g,(S||dt(p,"default"))&&o.push(d)}}const c=[a,o];return St(n)&&i.set(n,c),c}function $c(n){return n[0]!=="$"&&!Jr(n)}const rc=n=>n[0]==="_"||n==="$stable",sc=n=>qe(n)?n.map(Dn):[Dn(n)],Kp=(n,e,t)=>{if(e._n)return e;const i=pa((...r)=>sc(e(...r)),t);return i._c=!1,i},xd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(rc(r))continue;const s=n[r];if(Ze(s))e[r]=Kp(r,s,i);else if(s!=null){const a=sc(s);e[r]=()=>a}}},vd=(n,e)=>{const t=sc(e);n.slots.default=()=>t},Md=(n,e,t)=>{for(const i in e)(t||!rc(i))&&(n[i]=e[i])},Zp=(n,e,t)=>{const i=n.slots=pd();if(n.vnode.shapeFlag&32){const r=e.__;r&&ko(i,"__",r,!0);const s=e._;s?(Md(i,e,t),t&&ko(i,"_",s,!0)):xd(e,i)}else e&&vd(n,e)},Jp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Md(r,e,t):(s=!e.$stable,xd(e,r)),a=e}else e&&(vd(n,e),a={default:1});if(s)for(const o in r)!rc(o)&&a[o]==null&&delete r[o]},sn=dm;function Qp(n){return jp(n)}function jp(n,e){const t=Pa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=On,insertStaticContent:x}=n,S=(R,P,W,j=null,Z=null,ie=null,fe=void 0,le=null,oe=!!P.dynamicChildren)=>{if(R===P)return;R&&!ki(R,P)&&(j=me(R),be(R,Z,ie,!0),R=null),P.patchFlag===-2&&(oe=!1,P.dynamicChildren=null);const{type:re,ref:Te,shapeFlag:T}=P;switch(re){case Oa:g(R,P,W,j);break;case Ht:h(R,P,W,j);break;case ja:R==null&&w(P,W,j,fe);break;case Pt:I(R,P,W,j,Z,ie,fe,le,oe);break;default:T&1?A(R,P,W,j,Z,ie,fe,le,oe):T&6?X(R,P,W,j,Z,ie,fe,le,oe):(T&64||T&128)&&re.process(R,P,W,j,Z,ie,fe,le,oe,Xe)}Te!=null&&Z?es(Te,R&&R.ref,ie,P||R,!P):Te==null&&R&&R.ref!=null&&es(R.ref,null,ie,R,!0)},g=(R,P,W,j)=>{if(R==null)i(P.el=o(P.children),W,j);else{const Z=P.el=R.el;P.children!==R.children&&c(Z,P.children)}},h=(R,P,W,j)=>{R==null?i(P.el=l(P.children||""),W,j):P.el=R.el},w=(R,P,W,j)=>{[R.el,R.anchor]=x(R.children,P,W,j,R.el,R.anchor)},C=({el:R,anchor:P},W,j)=>{let Z;for(;R&&R!==P;)Z=f(R),i(R,W,j),R=Z;i(P,W,j)},M=({el:R,anchor:P})=>{let W;for(;R&&R!==P;)W=f(R),r(R),R=W;r(P)},A=(R,P,W,j,Z,ie,fe,le,oe)=>{P.type==="svg"?fe="svg":P.type==="math"&&(fe="mathml"),R==null?y(P,W,j,Z,ie,fe,le,oe):b(R,P,Z,ie,fe,le,oe)},y=(R,P,W,j,Z,ie,fe,le)=>{let oe,re;const{props:Te,shapeFlag:T,transition:Pe,dirs:Ee}=R;if(oe=R.el=a(R.type,ie,Te&&Te.is,Te),T&8?u(oe,R.children):T&16&&_(R.children,oe,null,j,Z,Qa(R,ie),fe,le),Ee&&Ci(R,null,j,"created"),L(oe,R,R.scopeId,fe,j),Te){for(const m in Te)m!=="value"&&!Jr(m)&&s(oe,m,null,Te[m],ie,j);"value"in Te&&s(oe,"value",null,Te.value,ie),(re=Te.onVnodeBeforeMount)&&Rn(re,j,R)}Ee&&Ci(R,null,j,"beforeMount");const E=em(Z,Pe);E&&Pe.beforeEnter(oe),i(oe,P,W),((re=Te&&Te.onVnodeMounted)||E||Ee)&&sn(()=>{re&&Rn(re,j,R),E&&Pe.enter(oe),Ee&&Ci(R,null,j,"mounted")},Z)},L=(R,P,W,j,Z)=>{if(W&&p(R,W),j)for(let ie=0;ie<j.length;ie++)p(R,j[ie]);if(Z){let ie=Z.subTree;if(P===ie||Td(ie.type)&&(ie.ssContent===P||ie.ssFallback===P)){const fe=Z.vnode;L(R,fe,fe.scopeId,fe.slotScopeIds,Z.parent)}}},_=(R,P,W,j,Z,ie,fe,le,oe=0)=>{for(let re=oe;re<R.length;re++){const Te=R[re]=le?vi(R[re]):Dn(R[re]);S(null,Te,P,W,j,Z,ie,fe,le)}},b=(R,P,W,j,Z,ie,fe)=>{const le=P.el=R.el;let{patchFlag:oe,dynamicChildren:re,dirs:Te}=P;oe|=R.patchFlag&16;const T=R.props||Mt,Pe=P.props||Mt;let Ee;if(W&&Pi(W,!1),(Ee=Pe.onVnodeBeforeUpdate)&&Rn(Ee,W,P,R),Te&&Ci(P,R,W,"beforeUpdate"),W&&Pi(W,!0),(T.innerHTML&&Pe.innerHTML==null||T.textContent&&Pe.textContent==null)&&u(le,""),re?U(R.dynamicChildren,re,le,W,j,Qa(P,Z),ie):fe||K(R,P,le,null,W,j,Qa(P,Z),ie,!1),oe>0){if(oe&16)D(le,T,Pe,W,Z);else if(oe&2&&T.class!==Pe.class&&s(le,"class",null,Pe.class,Z),oe&4&&s(le,"style",T.style,Pe.style,Z),oe&8){const E=P.dynamicProps;for(let m=0;m<E.length;m++){const N=E[m],z=T[N],$=Pe[N];($!==z||N==="value")&&s(le,N,z,$,Z,W)}}oe&1&&R.children!==P.children&&u(le,P.children)}else!fe&&re==null&&D(le,T,Pe,W,Z);((Ee=Pe.onVnodeUpdated)||Te)&&sn(()=>{Ee&&Rn(Ee,W,P,R),Te&&Ci(P,R,W,"updated")},j)},U=(R,P,W,j,Z,ie,fe)=>{for(let le=0;le<P.length;le++){const oe=R[le],re=P[le],Te=oe.el&&(oe.type===Pt||!ki(oe,re)||oe.shapeFlag&198)?d(oe.el):W;S(oe,re,Te,null,j,Z,ie,fe,!0)}},D=(R,P,W,j,Z)=>{if(P!==W){if(P!==Mt)for(const ie in P)!Jr(ie)&&!(ie in W)&&s(R,ie,P[ie],null,Z,j);for(const ie in W){if(Jr(ie))continue;const fe=W[ie],le=P[ie];fe!==le&&ie!=="value"&&s(R,ie,le,fe,Z,j)}"value"in W&&s(R,"value",P.value,W.value,Z)}},I=(R,P,W,j,Z,ie,fe,le,oe)=>{const re=P.el=R?R.el:o(""),Te=P.anchor=R?R.anchor:o("");let{patchFlag:T,dynamicChildren:Pe,slotScopeIds:Ee}=P;Ee&&(le=le?le.concat(Ee):Ee),R==null?(i(re,W,j),i(Te,W,j),_(P.children||[],W,Te,Z,ie,fe,le,oe)):T>0&&T&64&&Pe&&R.dynamicChildren?(U(R.dynamicChildren,Pe,W,Z,ie,fe,le),(P.key!=null||Z&&P===Z.subTree)&&Sd(R,P,!0)):K(R,P,W,Te,Z,ie,fe,le,oe)},X=(R,P,W,j,Z,ie,fe,le,oe)=>{P.slotScopeIds=le,R==null?P.shapeFlag&512?Z.ctx.activate(P,W,j,fe,oe):Q(P,W,j,Z,ie,fe,oe):k(R,P,oe)},Q=(R,P,W,j,Z,ie,fe)=>{const le=R.component=vm(R,j,Z);if(Ia(R)&&(le.ctx.renderer=Xe),Sm(le,!1,fe),le.asyncDep){if(Z&&Z.registerDep(le,Y,fe),!R.el){const oe=le.subTree=tt(Ht);h(null,oe,P,W)}}else Y(le,R,P,W,Z,ie,fe)},k=(R,P,W)=>{const j=P.component=R.component;if(um(R,P,W))if(j.asyncDep&&!j.asyncResolved){B(j,P,W);return}else j.next=P,j.update();else P.el=R.el,j.vnode=P},Y=(R,P,W,j,Z,ie,fe)=>{const le=()=>{if(R.isMounted){let{next:T,bu:Pe,u:Ee,parent:E,vnode:m}=R;{const pe=bd(R);if(pe){T&&(T.el=m.el,B(R,T,fe)),pe.asyncDep.then(()=>{R.isUnmounted||le()});return}}let N=T,z;Pi(R,!1),T?(T.el=m.el,B(R,T,fe)):T=m,Pe&&Xa(Pe),(z=T.props&&T.props.onVnodeBeforeUpdate)&&Rn(z,E,T,m),Pi(R,!0);const $=Kc(R),ce=R.subTree;R.subTree=$,S(ce,$,d(ce.el),me(ce),R,Z,ie),T.el=$.el,N===null&&fm(R,$.el),Ee&&sn(Ee,Z),(z=T.props&&T.props.onVnodeUpdated)&&sn(()=>Rn(z,E,T,m),Z)}else{let T;const{el:Pe,props:Ee}=P,{bm:E,m,parent:N,root:z,type:$}=R,ce=vr(P);Pi(R,!1),E&&Xa(E),!ce&&(T=Ee&&Ee.onVnodeBeforeMount)&&Rn(T,N,P),Pi(R,!0);{z.ce&&z.ce._def.shadowRoot!==!1&&z.ce._injectChildStyle($);const pe=R.subTree=Kc(R);S(null,pe,W,j,R,Z,ie),P.el=pe.el}if(m&&sn(m,Z),!ce&&(T=Ee&&Ee.onVnodeMounted)){const pe=P;sn(()=>Rn(T,N,pe),Z)}(P.shapeFlag&256||N&&vr(N.vnode)&&N.vnode.shapeFlag&256)&&R.a&&sn(R.a,Z),R.isMounted=!0,P=W=j=null}};R.scope.on();const oe=R.effect=new If(le);R.scope.off();const re=R.update=oe.run.bind(oe),Te=R.job=oe.runIfDirty.bind(oe);Te.i=R,Te.id=R.uid,oe.scheduler=()=>nc(Te),Pi(R,!0),re()},B=(R,P,W)=>{P.component=R;const j=R.vnode.props;R.vnode=P,R.next=null,$p(R,P.props,j,W),Jp(R,P.children,W),ei(),Hc(R),ti()},K=(R,P,W,j,Z,ie,fe,le,oe=!1)=>{const re=R&&R.children,Te=R?R.shapeFlag:0,T=P.children,{patchFlag:Pe,shapeFlag:Ee}=P;if(Pe>0){if(Pe&128){ge(re,T,W,j,Z,ie,fe,le,oe);return}else if(Pe&256){ae(re,T,W,j,Z,ie,fe,le,oe);return}}Ee&8?(Te&16&&ee(re,Z,ie),T!==re&&u(W,T)):Te&16?Ee&16?ge(re,T,W,j,Z,ie,fe,le,oe):ee(re,Z,ie,!0):(Te&8&&u(W,""),Ee&16&&_(T,W,j,Z,ie,fe,le,oe))},ae=(R,P,W,j,Z,ie,fe,le,oe)=>{R=R||mr,P=P||mr;const re=R.length,Te=P.length,T=Math.min(re,Te);let Pe;for(Pe=0;Pe<T;Pe++){const Ee=P[Pe]=oe?vi(P[Pe]):Dn(P[Pe]);S(R[Pe],Ee,W,null,Z,ie,fe,le,oe)}re>Te?ee(R,Z,ie,!0,!1,T):_(P,W,j,Z,ie,fe,le,oe,T)},ge=(R,P,W,j,Z,ie,fe,le,oe)=>{let re=0;const Te=P.length;let T=R.length-1,Pe=Te-1;for(;re<=T&&re<=Pe;){const Ee=R[re],E=P[re]=oe?vi(P[re]):Dn(P[re]);if(ki(Ee,E))S(Ee,E,W,null,Z,ie,fe,le,oe);else break;re++}for(;re<=T&&re<=Pe;){const Ee=R[T],E=P[Pe]=oe?vi(P[Pe]):Dn(P[Pe]);if(ki(Ee,E))S(Ee,E,W,null,Z,ie,fe,le,oe);else break;T--,Pe--}if(re>T){if(re<=Pe){const Ee=Pe+1,E=Ee<Te?P[Ee].el:j;for(;re<=Pe;)S(null,P[re]=oe?vi(P[re]):Dn(P[re]),W,E,Z,ie,fe,le,oe),re++}}else if(re>Pe)for(;re<=T;)be(R[re],Z,ie,!0),re++;else{const Ee=re,E=re,m=new Map;for(re=E;re<=Pe;re++){const de=P[re]=oe?vi(P[re]):Dn(P[re]);de.key!=null&&m.set(de.key,re)}let N,z=0;const $=Pe-E+1;let ce=!1,pe=0;const J=new Array($);for(re=0;re<$;re++)J[re]=0;for(re=Ee;re<=T;re++){const de=R[re];if(z>=$){be(de,Z,ie,!0);continue}let Le;if(de.key!=null)Le=m.get(de.key);else for(N=E;N<=Pe;N++)if(J[N-E]===0&&ki(de,P[N])){Le=N;break}Le===void 0?be(de,Z,ie,!0):(J[Le-E]=re+1,Le>=pe?pe=Le:ce=!0,S(de,P[Le],W,null,Z,ie,fe,le,oe),z++)}const te=ce?tm(J):mr;for(N=te.length-1,re=$-1;re>=0;re--){const de=E+re,Le=P[de],ve=de+1<Te?P[de+1].el:j;J[re]===0?S(null,Le,W,ve,Z,ie,fe,le,oe):ce&&(N<0||re!==te[N]?_e(Le,W,ve,2):N--)}}},_e=(R,P,W,j,Z=null)=>{const{el:ie,type:fe,transition:le,children:oe,shapeFlag:re}=R;if(re&6){_e(R.component.subTree,P,W,j);return}if(re&128){R.suspense.move(P,W,j);return}if(re&64){fe.move(R,P,W,Xe);return}if(fe===Pt){i(ie,P,W);for(let T=0;T<oe.length;T++)_e(oe[T],P,W,j);i(R.anchor,P,W);return}if(fe===ja){C(R,P,W);return}if(j!==2&&re&1&&le)if(j===0)le.beforeEnter(ie),i(ie,P,W),sn(()=>le.enter(ie),Z);else{const{leave:T,delayLeave:Pe,afterLeave:Ee}=le,E=()=>{R.ctx.isUnmounted?r(ie):i(ie,P,W)},m=()=>{T(ie,()=>{E(),Ee&&Ee()})};Pe?Pe(ie,E,m):m()}else i(ie,P,W)},be=(R,P,W,j=!1,Z=!1)=>{const{type:ie,props:fe,ref:le,children:oe,dynamicChildren:re,shapeFlag:Te,patchFlag:T,dirs:Pe,cacheIndex:Ee}=R;if(T===-2&&(Z=!1),le!=null&&(ei(),es(le,null,W,R,!0),ti()),Ee!=null&&(P.renderCache[Ee]=void 0),Te&256){P.ctx.deactivate(R);return}const E=Te&1&&Pe,m=!vr(R);let N;if(m&&(N=fe&&fe.onVnodeBeforeUnmount)&&Rn(N,P,R),Te&6)Je(R.component,W,j);else{if(Te&128){R.suspense.unmount(W,j);return}E&&Ci(R,null,P,"beforeUnmount"),Te&64?R.type.remove(R,P,W,Xe,j):re&&!re.hasOnce&&(ie!==Pt||T>0&&T&64)?ee(re,P,W,!1,!0):(ie===Pt&&T&384||!Z&&Te&16)&&ee(oe,P,W),j&&we(R)}(m&&(N=fe&&fe.onVnodeUnmounted)||E)&&sn(()=>{N&&Rn(N,P,R),E&&Ci(R,null,P,"unmounted")},W)},we=R=>{const{type:P,el:W,anchor:j,transition:Z}=R;if(P===Pt){ze(W,j);return}if(P===ja){M(R);return}const ie=()=>{r(W),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(R.shapeFlag&1&&Z&&!Z.persisted){const{leave:fe,delayLeave:le}=Z,oe=()=>fe(W,ie);le?le(R.el,ie,oe):oe()}else ie()},ze=(R,P)=>{let W;for(;R!==P;)W=f(R),r(R),R=W;r(P)},Je=(R,P,W)=>{const{bum:j,scope:Z,job:ie,subTree:fe,um:le,m:oe,a:re,parent:Te,slots:{__:T}}=R;Yc(oe),Yc(re),j&&Xa(j),Te&&qe(T)&&T.forEach(Pe=>{Te.renderCache[Pe]=void 0}),Z.stop(),ie&&(ie.flags|=8,be(fe,R,P,W)),le&&sn(le,P),sn(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ee=(R,P,W,j=!1,Z=!1,ie=0)=>{for(let fe=ie;fe<R.length;fe++)be(R[fe],P,W,j,Z)},me=R=>{if(R.shapeFlag&6)return me(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const P=f(R.anchor||R.el),W=P&&P[Sp];return W?f(W):P};let ue=!1;const Ge=(R,P,W)=>{R==null?P._vnode&&be(P._vnode,null,null,!0):S(P._vnode||null,R,P,null,null,null,W),P._vnode=R,ue||(ue=!0,Hc(),Jf(),ue=!1)},Xe={p:S,um:be,m:_e,r:we,mt:Q,mc:_,pc:K,pbc:U,n:me,o:n};return{render:Ge,hydrate:void 0,createApp:Wp(Ge)}}function Qa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function em(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sd(n,e,t=!1){const i=n.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=vi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Sd(a,o)),o.type===Oa&&(o.el=a.el),o.type===Ht&&!o.el&&(o.el=a.el)}}function tm(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function bd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bd(e)}function Yc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const nm=Symbol.for("v-scx"),im=()=>ea(nm);function rm(n,e){return ac(n,null,e)}function ta(n,e,t){return ac(n,e,t)}function ac(n,e,t=Mt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Ut({},t),l=e&&i||!e&&s!=="post";let c;if(cs){if(s==="sync"){const p=im();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=On,p.resume=On,p.pause=On,p}}const u=Vt;o.call=(p,x,S)=>En(p,u,x,S);let d=!1;s==="post"?o.scheduler=p=>{sn(p,u&&u.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(p,x)=>{x?p():nc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=gp(n,e,o);return cs&&(c?c.push(f):l&&f()),f}function sm(n,e,t){const i=this.proxy,r=Rt(n)?n.includes(".")?Ed(i,n):()=>i[n]:n.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,t=e);const a=gs(this),o=ac(r,s.bind(i),t);return a(),o}function Ed(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const am=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yi(e)}Modifiers`]||n[`${Ki(e)}Modifiers`];function om(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let r=t;const s=e.startsWith("update:"),a=s&&am(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Rt(u)?u.trim():u)),a.number&&(r=t.map(Uh)));let o,l=i[o=Wa(e)]||i[o=Wa(yi(e))];!l&&s&&(l=i[o=Wa(Ki(e))]),l&&En(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,r)}}function yd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ze(n)){const l=c=>{const u=yd(c,e,!0);u&&(o=!0,Ut(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(St(n)&&i.set(n,null),null):(qe(s)?s.forEach(l=>a[l]=null):Ut(a,s),St(n)&&i.set(n,a),a)}function Fa(n,e){return!n||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,Ki(e))||dt(n,e))}function Kc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:x,inheritAttrs:S}=n,g=ha(n);let h,w;try{if(t.shapeFlag&4){const M=r||i,A=M;h=Dn(c.call(A,M,u,d,p,f,x)),w=o}else{const M=e;h=Dn(M.length>1?M(d,{attrs:o,slots:a,emit:l}):M(d,null)),w=e.props?o:lm(o)}}catch(M){ns.length=0,Da(M,n,1),h=tt(Ht)}let C=h;if(w&&S!==!1){const M=Object.keys(w),{shapeFlag:A}=C;M.length&&A&7&&(s&&M.some(Wl)&&(w=cm(w,s)),C=Ai(C,w,!1,!0))}return t.dirs&&(C=Ai(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&as(C,t.transition),h=C,ha(g),h}const lm=n=>{let e;for(const t in n)(t==="class"||t==="style"||wa(t))&&((e||(e={}))[t]=n[t]);return e},cm=(n,e)=>{const t={};for(const i in n)(!Wl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function um(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Zc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!Fa(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Zc(i,a,c):!0:!!a;return!1}function Zc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Fa(t,s))return!0}return!1}function fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Td=n=>n.__isSuspense;function dm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Mp(n)}const Pt=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),ns=[];let an=null;function st(n=!1){ns.push(an=n?null:[])}function hm(){ns.pop(),an=ns[ns.length-1]||null}let os=1;function Jc(n,e=!1){os+=n,n<0&&an&&e&&(an.hasOnce=!0)}function Ad(n){return n.dynamicChildren=os>0?an||mr:null,hm(),os>0&&an&&an.push(n),n}function ut(n,e,t,i,r,s){return Ad(he(n,e,t,i,r,s,!0))}function Ko(n,e,t,i,r){return Ad(tt(n,e,t,i,r,!0))}function ls(n){return n?n.__v_isVNode===!0:!1}function ki(n,e){return n.type===e.type&&n.key===e.key}const wd=({key:n})=>n??null,na=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Wt(n)||Ze(n)?{i:Yt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===Pt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wd(e),ref:e&&na(e),scopeId:jf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return o?(lc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),os>0&&!a&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const tt=pm;function pm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Np)&&(n=Ht),ls(n)){const o=Ai(n,e,!0);return t&&lc(o,t),os>0&&!s&&an&&(o.shapeFlag&6?an[an.indexOf(n)]=o:an.push(o)),o.patchFlag=-2,o}if(Tm(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:o,style:l}=e;o&&!Rt(o)&&(e.class=Un(o)),St(l)&&(ec(l)&&!qe(l)&&(l=Ut({},l)),e.style=hs(l))}const a=Rt(n)?1:Td(n)?128:ed(n)?64:St(n)?4:Ze(n)?2:0;return he(n,e,t,i,r,a,s,!0)}function mm(n){return n?ec(n)||md(n)?Ut({},n):n:null}function Ai(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?gm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wd(c),ref:e&&e.ref?t&&s?qe(s)?s.concat(na(e)):[s,na(e)]:na(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ai(n.ssContent),ssFallback:n.ssFallback&&Ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&as(u,l.clone(u)),u}function oc(n=" ",e=0){return tt(Oa,null,n,e)}function Sr(n="",e=!1){return e?(st(),Ko(Ht,null,n)):tt(Ht,null,n)}function Dn(n){return n==null||typeof n=="boolean"?tt(Ht):qe(n)?tt(Pt,null,n.slice()):ls(n)?vi(n):tt(Oa,null,String(n))}function vi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ai(n)}function lc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),lc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!md(e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[oc(e)]):t=8);n.children=e,n.shapeFlag|=t}function gm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Un([e.class,i.class]));else if(r==="style")e.style=hs([e.style,i.style]);else if(wa(r)){const s=e[r],a=i[r];a&&s!==a&&!(qe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Rn(n,e,t,i=null){En(n,e,7,[t,i])}const _m=dd();let xm=0;function vm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||_m,s={uid:xm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(i,r),emitsOptions:yd(i,r),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=om.bind(null,s),n.ce&&n.ce(s),s}let Vt=null;const Mm=()=>Vt||Yt;let ga,Zo;{const n=Pa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ga=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),Zo=e("__VUE_SSR_SETTERS__",t=>cs=t)}const gs=n=>{const e=Vt;return ga(n),n.scope.on(),()=>{n.scope.off(),ga(e)}},Qc=()=>{Vt&&Vt.scope.off(),ga(null)};function Rd(n){return n.vnode.shapeFlag&4}let cs=!1;function Sm(n,e=!1,t=!1){e&&Zo(e);const{props:i,children:r}=n.vnode,s=Rd(n);qp(n,i,s,e),Zp(n,r,t||e);const a=s?bm(n,e):void 0;return e&&Zo(!1),a}function bm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Op);const{setup:i}=t;if(i){ei();const r=n.setupContext=i.length>1?ym(n):null,s=gs(n),a=ps(i,n,0,[n.props,r]),o=Af(a);if(ti(),s(),(o||n.sp)&&!vr(n)&&ad(n),o){if(a.then(Qc,Qc),e)return a.then(l=>{jc(n,l)}).catch(l=>{Da(l,n,0)});n.asyncDep=a}else jc(n,a)}else Cd(n)}function jc(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Yf(e)),Cd(n)}function Cd(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const r=gs(n);ei();try{Bp(n)}finally{ti(),r()}}}const Em={get(n,e){return zt(n,"get",""),n[e]}};function ym(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:e}}function cc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yf(cp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ts)return ts[t](n)},has(e,t){return t in e||t in ts}})):n.proxy}function Tm(n){return Ze(n)&&"__vccOpts"in n}const Pd=(n,e)=>pp(n,e,cs);function Am(n,e,t){const i=arguments.length;return i===2?St(e)&&!qe(e)?ls(e)?tt(n,null,[e]):tt(n,e):tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ls(t)&&(t=[t]),tt(n,e,t))}const wm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jo;const eu=typeof window<"u"&&window.trustedTypes;if(eu)try{Jo=eu.createPolicy("vue",{createHTML:n=>n})}catch{}const Ld=Jo?n=>Jo.createHTML(n):n=>n,Rm="http://www.w3.org/2000/svg",Cm="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,tu=Yn&&Yn.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Yn.createElementNS(Rm,n):e==="mathml"?Yn.createElementNS(Cm,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tu.innerHTML=Ld(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=tu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ui="transition",kr="animation",us=Symbol("_vtc"),Dd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lm=Ut({},td,Dd),Dm=n=>(n.displayName="Transition",n.props=Lm,n),nu=Dm((n,{slots:e})=>Am(yp,Im(n),e)),Li=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},iu=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function Im(n){const e={};for(const I in n)I in Dd||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=Um(r),S=x&&x[0],g=x&&x[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:C,onLeave:M,onLeaveCancelled:A,onBeforeAppear:y=h,onAppear:L=w,onAppearCancelled:_=C}=e,b=(I,X,Q,k)=>{I._enterCancelled=k,Di(I,X?u:o),Di(I,X?c:a),Q&&Q()},U=(I,X)=>{I._isLeaving=!1,Di(I,d),Di(I,p),Di(I,f),X&&X()},D=I=>(X,Q)=>{const k=I?L:w,Y=()=>b(X,I,Q);Li(k,[X,Y]),ru(()=>{Di(X,I?l:s),Vn(X,I?u:o),iu(k)||su(X,i,S,Y)})};return Ut(e,{onBeforeEnter(I){Li(h,[I]),Vn(I,s),Vn(I,a)},onBeforeAppear(I){Li(y,[I]),Vn(I,l),Vn(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,X){I._isLeaving=!0;const Q=()=>U(I,X);Vn(I,d),I._enterCancelled?(Vn(I,f),lu()):(lu(),Vn(I,f)),ru(()=>{I._isLeaving&&(Di(I,d),Vn(I,p),iu(M)||su(I,i,g,Q))}),Li(M,[I,Q])},onEnterCancelled(I){b(I,!1,void 0,!0),Li(C,[I])},onAppearCancelled(I){b(I,!0,void 0,!0),Li(_,[I])},onLeaveCancelled(I){U(I),Li(A,[I])}})}function Um(n){if(n==null)return null;if(St(n))return[eo(n.enter),eo(n.leave)];{const e=eo(n);return[e,e]}}function eo(n){return Nh(n)}function Vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[us]||(n[us]=new Set)).add(e)}function Di(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[us];t&&(t.delete(e),t.size||(n[us]=void 0))}function ru(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Nm=0;function su(n,e,t,i){const r=n._endId=++Nm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=Fm(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function Fm(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${ui}Delay`),s=i(`${ui}Duration`),a=au(r,s),o=i(`${kr}Delay`),l=i(`${kr}Duration`),c=au(o,l);let u=null,d=0,f=0;e===ui?a>0&&(u=ui,d=a,f=s.length):e===kr?c>0&&(u=kr,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?ui:kr:null,f=u?u===ui?s.length:l.length:0);const p=u===ui&&/\b(transform|all)(,|$)/.test(i(`${ui}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function au(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ou(t)+ou(n[i])))}function ou(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function lu(){return document.body.offsetHeight}function Om(n,e,t){const i=n[us];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const cu=Symbol("_vod"),Bm=Symbol("_vsh"),km=Symbol(""),zm=/(^|;)\s*display\s*:/;function Hm(n,e,t){const i=n.style,r=Rt(t);let s=!1;if(t&&!r){if(e)if(Rt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ia(i,o,"")}else for(const a in e)t[a]==null&&ia(i,a,"");for(const a in t)a==="display"&&(s=!0),ia(i,a,t[a])}else if(r){if(e!==t){const a=i[km];a&&(t+=";"+a),i.cssText=t,s=zm.test(t)}}else e&&n.removeAttribute("style");cu in n&&(n[cu]=s?i.display:"",n[Bm]&&(i.display="none"))}const uu=/\s*!important$/;function ia(n,e,t){if(qe(t))t.forEach(i=>ia(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vm(n,e);uu.test(t)?n.setProperty(Ki(i),t.replace(uu,""),"important"):n[i]=t}}const fu=["Webkit","Moz","ms"],to={};function Vm(n,e){const t=to[e];if(t)return t;let i=yi(e);if(i!=="filter"&&i in n)return to[e]=i;i=Cf(i);for(let r=0;r<fu.length;r++){const s=fu[r]+i;if(s in n)return to[e]=s}return e}const du="http://www.w3.org/1999/xlink";function hu(n,e,t,i,r,s=Hh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(du,e.slice(6,e.length)):n.setAttributeNS(du,e,t):t==null||s&&!Pf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":si(t)?String(t):t)}function pu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ld(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Pf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Gm(n,e,t,i){n.addEventListener(e,t,i)}function Wm(n,e,t,i){n.removeEventListener(e,t,i)}const mu=Symbol("_vei");function Xm(n,e,t,i,r=null){const s=n[mu]||(n[mu]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=qm(e);if(i){const c=s[e]=Km(i,r);Gm(n,o,c,l)}else a&&(Wm(n,o,a,l),s[e]=void 0)}}const gu=/(?:Once|Passive|Capture)$/;function qm(n){let e;if(gu.test(n)){e={};let i;for(;i=n.match(gu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ki(n.slice(2)),e]}let no=0;const $m=Promise.resolve(),Ym=()=>no||($m.then(()=>no=0),no=Date.now());function Km(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Zm(i,t.value),e,5,[i])};return t.value=n,t.attached=Ym(),t}function Zm(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _u=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Om(n,i,a):e==="style"?Hm(n,t,i):wa(e)?Wl(e)||Xm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qm(n,e,i,a))?(pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hu(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?pu(n,yi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),hu(n,e,i,a))};function Qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_u(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _u(e)&&Rt(t)?!1:e in n}const jm=["ctrl","shift","alt","meta"],eg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>jm.some(t=>n[`${t}Key`]&&!e.includes(t))},tg=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=eg[e[a]];if(o&&o(r,e))return}return n(r,...s)})},ng=Ut({patchProp:Jm},Pm);let xu;function ig(){return xu||(xu=Qp(ng))}const rg=(...n)=>{const e=ig().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ag(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,sg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function sg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ag(n){return Rt(n)?document.querySelector(n):n}const Id="/picture.webp",og=789022,uc="Denis Kuznetsov",lg="I like building things that work. Some of them write, draw, and see.",vu="ML Engineer and Researcher · Software Engineer",cg=`ML ENGINEER · FULL-STACK DEV
AALTO UNIVERSITY`,ug="I'm an M.Sc. student in Machine Learning, Data Science & AI at Aalto University, with hands-on experience deploying AI features to production systems used by thousands of people. I've built and shipped end-to-end ML pipelines, from data preprocessing and model training to integration into real applications, and bring several years of full-stack engineering experience building scalable, production-grade systems. I like working across the whole lifecycle of applied ML: ideation, implementation, deployment, and iteration.",Ud=encodeURI("/Resume.pdf"),Ar="denisk399@gmail.com",wr="dereden399",Rr="dereden",fg=[{id:"thesis",title:"Real-Time Methods for Enhancing Image Quality in Computer Graphics",subtitle:"Bachelor's Thesis · Aalto University · 2025",description:"Literature review of different approaches for real-time image quality enhancement in computer graphics, including both older traditional techniques and newer ML approaches. Reviewed how these methods trade off quality, latency, and compute for production real-time use.",tags:["Computer Graphics","Real-Time Rendering","Super-Resolution"],highlight:"Supervised by Jaakko Lehtinen (Aalto / NVIDIA) · top grade",link:null},{id:"toxicity",title:"Multilingual Toxicity Detection",subtitle:"Aalto University · Course Project · 2026",description:"Team research project investigating toxicity detection for languages absent from standard training corpora, under strict compute constraints. Explored cross-lingual transfer learning with multilingual models (mBERT, XLM-R) in zero-shot and few-shot settings - target languages had zero labeled training samples. Compared performance of different methods.",tags:["Python","NLP","HuggingFace","Zero-shot","XLM-RoBERTa"],highlight:"Zero labeled samples in target languages",link:null},{id:"emotion",title:"Voice Emotion Recognition",subtitle:"Course Project · 2023",description:"Built a neural network model achieving 80% accuracy classifying 8 emotions from voice samples.",tags:["Audio ML","Python"],highlight:"~80% accuracy across 7 emotion classes",link:"https://github.com/Dereden399/voice-emotion-recognition"}],dg=[{title:"BeamexAR",description:"AR mobile app guiding industrial calibration specialists. Team project over a full academic year, using Scrum; received excellent grade.",tags:["React Native","TypeScript","AR"]},{title:"OpenGL Renderer",description:"Graphics engine with texture maps, hierarchical modelling, bloom, and custom GLSL shaders.",tags:["C++","OpenGL","GLSL"],link:"https://github.com/Dereden399/simple-opengl-renderer"},{title:"Metal Renderer",description:"macOS/iOS graphics with multipass rendering and shadow mapping in Swift and Metal.",tags:["Swift","Metal","SwiftUI"],link:"https://github.com/Dereden399/simple-metal-renderer"},{title:"Study Schedule",description:"Full-stack app with automated testing, containerised development, and Redux state management.",tags:["TypeScript","React","MongoDB","CI/CD"],link:"https://github.com/Dereden399/study-schedule-project"},{title:"Procedural Image Gen.",description:"ScalaFX app generating procedural images from user-defined JSON rules and assets",tags:["Scala","ScalaFX","UML"],link:"https://github.com/Dereden399/procedural-image-generator"}],hg=[{year:"2025 –",role:"M.Sc. Machine Learning, Data Science & AI",org:"Aalto University",detail:"Master's Programme",badge:"M.Sc."},{year:"2022 – 25",role:"B.Sc. Computer Science",org:"Aalto University",detail:"GPA 4.85 / 5.0",badge:"B.Sc."},{year:"2024",role:"Exchange Semester",org:"Nanyang Technological University",detail:"Singapore",badge:"Exchange"},{year:"2021 – 22",role:"B.Sc. Applied Mathematics & Informatics",org:"Saint-Petersburg State University",detail:"Transferred to Aalto",badge:"Dropped"}],io=[{role:"Launchpad Software Engineer",org:"Smartly",detail:"Building and shipping ad-platform integrations for Snapchat and LinkedIn used by advertisers managing large-scale campaigns",dateLabel:"05/2026 – present",start:2026.33,end:2026.58},{role:"Software Developer",org:"Nordic Fun Gaming",detail:"Owned web games end-to-end - frontend, backend, infrastructure, deployment - supporting tens of thousands of concurrent players; delivered products generating 80%+ of company revenue",dateLabel:"12/2024 – present",start:2024.92,end:2026.58},{role:"Research Assistant",org:"Aalto University",detail:"AI-powered TA assistant integrating model APIs with custom prompt pipelines, chatbot and helping features, and a file submission system that significantly cut memory usage - production platform serving thousands of students",dateLabel:"11/2023 – 07/2024, 01/2025 – 05/2026",start:2023.83,end:2026.4},{role:"Teaching Assistant",org:"Aalto University",detail:"Coached student groups in programming courses, one team delivering a notable course project. Also supported students across various math courses, including Calculus, Probability, and Discrete Math in Aalto's Laskutupa",dateLabel:"09/2023 – 04/2024, 01/2025 – 04/2025, 01/2026 - 04/2026",start:2023.67,end:2026.4}],pg=(n,e=24)=>{const t=document.getElementById(n);if(!t)return;const i=t.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:i,behavior:"smooth"})},mg={class:"font-display text-subheader font-medium text-ink dark:text-ink-dark"},gg={class:"nav-role mt-1.5 whitespace-pre-line font-mono text-caption leading-[1.75] tracking-wide text-accent-500 dark:text-accent-400"},_g={class:"flex flex-col"},xg=["href","onClick"],vg={class:"flex flex-col gap-[var(--nav-link-gap)]"},Mg=["href"],Sg=["href"],bg=["href"],Eg={class:"mt-[var(--nav-link-gap)] flex items-center gap-2"},yg=["href"],Nd=en({__name:"NavContent",props:{scrollOffset:{default:24}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{label:"About",id:"about"},{label:"ML & Research",id:"ml"},{label:"Engineering",id:"engineering"},{label:"Experience",id:"experience"},{label:"Education",id:"education"},{label:"Contact",id:"contact"}],r=(s,a)=>{pg(s,a),t("navigate")};return(s,a)=>(st(),ut(Pt,null,[he("div",null,[a[0]||(a[0]=he("div",{class:"photo-treated mb-[var(--nav-avatar-mb)] h-[var(--nav-avatar)] w-[var(--nav-avatar)] rounded-full border-2 border-accent2-300"},[he("img",{src:Id,alt:"",width:"128",height:"128",class:"h-full w-full object-cover",style:{"object-position":"50% 20%"}})],-1)),he("div",mg,nt(je(uc)),1),he("div",gg,nt(je(cg)),1)]),a[1]||(a[1]=he("div",{class:"my-[var(--nav-gap)] h-px bg-line dark:bg-line-dark"},null,-1)),he("nav",_g,[(st(),ut(Pt,null,ms(i,o=>he("a",{key:o.id,href:"#"+o.id,class:"border-b border-line py-[var(--nav-item-pad)] font-mono text-label tracking-[0.08em] text-ink-mut transition-colors hover:text-accent-500 dark:border-line-dark dark:text-ink-mut-dark dark:hover:text-accent-400",onClick:tg(l=>r(o.id,s.scrollOffset),["prevent"])},nt(o.label),9,xg)),64))]),a[2]||(a[2]=he("div",{class:"flex-1"},null,-1)),a[3]||(a[3]=he("div",{class:"my-[var(--nav-gap)] h-px bg-line dark:bg-line-dark"},null,-1)),he("div",vg,[he("a",{href:"mailto:"+je(Ar),class:"break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"},nt(je(Ar)),9,Mg),he("a",{href:"https://github.com/"+je(wr),class:"break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"},"github/"+nt(je(wr)),9,Sg),he("a",{href:"https://linkedin.com/in/"+je(Rr),class:"break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"},"linkedin/"+nt(je(Rr)),9,bg),he("div",Eg,[he("a",{href:je(Ud),download:"",class:"hover:bg-accent-500/8 flex-1 border border-accent-500/35 py-[var(--nav-cv-pad)] text-center font-mono text-label tracking-[0.08em] text-accent-500 transition-colors dark:border-accent-400/35 dark:text-accent-400 dark:hover:bg-accent-400/10"},"↓  Download CV",8,yg),Fp(s.$slots,"action")])])],64))}}),fc="theme",br=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,dc=()=>br!=null&&br.matches?"dark":"light",Tg=()=>{const n=dc();try{const e=localStorage.getItem(fc);if(e){const t=JSON.parse(e);if(t.system===n&&(t.theme==="light"||t.theme==="dark"))return t.theme}}catch{}return n},Xi=tc(Tg());br==null||br.addEventListener("change",()=>{Xi.value=dc();try{localStorage.removeItem(fc)}catch{}});rm(()=>{const n=document.documentElement;n.classList.toggle("dark",Xi.value==="dark"),n.style.colorScheme=Xi.value});const Ag=()=>{Xi.value=Xi.value==="dark"?"light":"dark";try{localStorage.setItem(fc,JSON.stringify({theme:Xi.value,system:dc()}))}catch{}},wg=()=>({theme:Xi,toggleTheme:Ag}),Rg=["aria-label","title"],Cg={key:0,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Pg={key:1,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Fd=en({__name:"ThemeToggle",setup(n){const{theme:e,toggleTheme:t}=wg(),i=Pd(()=>`Switch to ${e.value==="dark"?"light":"dark"} theme`);return(r,s)=>(st(),ut("button",{type:"button","aria-label":i.value,title:i.value,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-mut transition-colors hover:border-accent-500 hover:text-accent-500 dark:border-line-dark dark:text-ink-mut-dark dark:hover:border-accent-400 dark:hover:text-accent-400",onClick:s[0]||(s[0]=(...a)=>je(t)&&je(t)(...a))},[je(e)==="dark"?(st(),ut("svg",Cg,s[1]||(s[1]=[he("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"},null,-1)]))):(st(),ut("svg",Pg,s[2]||(s[2]=[he("circle",{cx:"12",cy:"12",r:"4"},null,-1),he("path",{d:"M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"},null,-1)])))],8,Rg))}}),Lg={class:"nav-shell px-6.5 3xl:px-8 sticky top-0 hidden h-dvh shrink-0 flex-col overflow-hidden border-r border-line bg-rail py-[var(--nav-pad)] dark:border-line-dark dark:bg-rail-dark lg:flex"},Dg=en({__name:"Sidebar",setup(n){return(e,t)=>(st(),ut("aside",Lg,[tt(Nd,null,{action:pa(()=>[tt(Fd)]),_:1})]))}}),Ig={class:"lg:hidden"},Ug={class:"sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-page/85 px-4 backdrop-blur-md dark:border-line-dark dark:bg-page-dark/85 sm:px-6"},Ng={class:"truncate font-display text-[15px] font-medium text-ink dark:text-ink-dark"},Fg=["aria-expanded"],Og={key:0,id:"mobile-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation",class:"nav-shell fixed right-0 top-0 z-[70] flex h-dvh w-[min(20rem,85vw)] flex-col overflow-y-auto border-l border-line bg-rail px-6 py-[var(--nav-pad)] dark:border-line-dark dark:bg-rail-dark"},Bg=56,kg=en({__name:"MobileNav",setup(n){const e=tc(!1),t=()=>{e.value=!1},i=r=>{r.key==="Escape"&&t()};return ta(e,r=>{document.documentElement.classList.toggle("overflow-hidden",r),r?window.addEventListener("keydown",i):window.removeEventListener("keydown",i)}),Na(()=>{document.documentElement.classList.remove("overflow-hidden"),window.removeEventListener("keydown",i)}),(r,s)=>(st(),ut("div",Ig,[he("header",Ug,[s[2]||(s[2]=he("img",{src:Id,alt:"",width:"32",height:"32",class:"h-8 w-8 shrink-0 rounded-full border border-accent2-300 object-cover",style:{"object-position":"50% 20%"}},null,-1)),he("span",Ng,nt(je(uc)),1),s[3]||(s[3]=he("div",{class:"flex-1"},null,-1)),tt(Fd),he("button",{type:"button","aria-label":"Open navigation menu","aria-controls":"mobile-drawer","aria-expanded":e.value,class:"flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink dark:border-line-dark dark:text-ink-dark",onClick:s[0]||(s[0]=a=>e.value=!0)},s[1]||(s[1]=[he("svg",{class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","aria-hidden":"true"},[he("path",{d:"M4 7h16M4 12h16M4 17h16"})],-1)]),8,Fg)]),tt(nu,{"enter-active-class":"motion-reduce:transition-none transition-opacity duration-200 ease-out","leave-active-class":"motion-reduce:transition-none transition-opacity duration-200 ease-in","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:pa(()=>[e.value?(st(),ut("div",{key:0,class:"fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]",onClick:t})):Sr("",!0)]),_:1}),tt(nu,{"enter-active-class":"motion-reduce:transition-none transition-transform duration-300 ease-out","leave-active-class":"motion-reduce:transition-none transition-transform duration-200 ease-in","enter-from-class":"translate-x-full","leave-to-class":"translate-x-full"},{default:pa(()=>[e.value?(st(),ut("aside",Og,[he("button",{type:"button","aria-label":"Close navigation menu",class:"mb-4 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full border border-line text-ink-mut dark:border-line-dark dark:text-ink-mut-dark",onClick:t},s[4]||(s[4]=[he("svg",{class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","aria-hidden":"true"},[he("path",{d:"M6 6l12 12M18 6L6 18"})],-1)])),tt(Nd,{"scroll-offset":Bg+16,onNavigate:t},null,8,["scroll-offset"])])):Sr("",!0)]),_:1})]))}});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="185",zg=0,Mu=1,Hg=2,ra=1,Vg=2,Kr=3,wi=0,jt=1,Zn=2,Qn=0,Er=1,_a=2,Su=3,bu=4,Gg=5,zi=100,Wg=101,Xg=102,qg=103,$g=104,Yg=200,Kg=201,Zg=202,Jg=203,Qo=204,jo=205,Qg=206,jg=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,a_=214,el=0,tl=1,nl=2,Cr=3,il=4,rl=5,sl=6,al=7,Od=0,o_=1,l_=2,Bn=0,Bd=1,kd=2,zd=3,Hd=4,Vd=5,Gd=6,Wd=7,Xd=300,qi=301,Pr=302,ro=303,so=304,Ba=306,ol=1e3,Jn=1001,ll=1002,Ft=1003,c_=1004,ws=1005,Gt=1006,ao=1007,Vi=1008,hn=1009,qd=1010,$d=1011,fs=1012,pc=1013,zn=1014,Nn=1015,ni=1016,mc=1017,gc=1018,ds=1020,Yd=35902,Kd=35899,Zd=1021,Jd=1022,Mn=1023,ii=1026,Gi=1027,Qd=1028,_c=1029,$i=1030,xc=1031,vc=1033,sa=33776,aa=33777,oa=33778,la=33779,cl=35840,ul=35841,fl=35842,dl=35843,hl=36196,pl=37492,ml=37496,gl=37488,_l=37489,xa=37490,xl=37491,vl=37808,Ml=37809,Sl=37810,bl=37811,El=37812,yl=37813,Tl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Dl=37821,Il=36492,Ul=36494,Nl=36495,Fl=36283,Ol=36284,va=36285,Bl=36286,u_=3200,Eu=0,f_=1,Si="",fn="srgb",Ma="srgb-linear",Sa="linear",ht="srgb",er=7680,yu=519,d_=512,h_=513,p_=514,Mc=515,m_=516,g_=517,Sc=518,__=519,Tu=35044,Au=35048,wu="300 es",Fn=2e3,ba=2001;function x_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v_(){const n=Ea("canvas");return n.style.display="block",n}const Ru={};function Cu(...n){const e="THREE."+n.shift();console.log(e,...n)}function jd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=jd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=jd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function yr(...n){const e=n.join(" ");e in Ru||(Ru[e]=!0,We(...n))}function M_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const S_={[el]:tl,[nl]:sl,[il]:al,[Cr]:rl,[tl]:el,[sl]:nl,[al]:il,[rl]:Cr};class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oo=Math.PI/180,kl=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function b_(n,e){return(n%e+e)%e}function lo(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yc=class yc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yc.prototype.isVector2=!0;let ft=yc;class Ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],x=s[a+2],S=s[a+3];if(d!==S||l!==f||c!==p||u!==x){let g=l*f+c*p+u*x+d*S;g<0&&(f=-f,p=-p,x=-x,S=-S,g=-g);let h=1-o;if(g<.9995){const w=Math.acos(g),C=Math.sin(w);h=Math.sin(h*w)/C,o=Math.sin(o*w)/C,l=l*h+f*o,c=c*h+p*o,u=u*h+x*o,d=d*h+S*o}else{l=l*h+f*o,c=c*h+p*o,u=u*h+x*o,d=d*h+S*o;const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*d+l*p-c*f,e[t+1]=l*x+u*f+c*d-o*p,e[t+2]=c*x+u*p+o*f-l*d,e[t+3]=u*x-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"YZX":this._x=f*u*d+c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d-f*p*x;break;case"XZY":this._x=f*u*d-c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d+f*p*x;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tc=class Tc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;let H=Tc;const co=new H,Pu=new Ir,Ac=class Ac{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],x=i[8],S=r[0],g=r[3],h=r[6],w=r[1],C=r[4],M=r[7],A=r[2],y=r[5],L=r[8];return s[0]=a*S+o*w+l*A,s[3]=a*g+o*C+l*y,s[6]=a*h+o*M+l*L,s[1]=c*S+u*w+d*A,s[4]=c*g+u*C+d*y,s[7]=c*h+u*M+d*L,s[2]=f*S+p*w+x*A,s[5]=f*g+p*C+x*y,s[8]=f*h+p*M+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,x=t*d+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uo.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;let $e=Ac;const uo=new $e,Lu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:e,whitePoint:i,transfer:Sa,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const it=E_();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class y_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=Ea("canvas")),tr.width=e.width,tr.height=e.height;const r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fo(r[a].image)):s.push(fo(r[a]))}else s=fo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let A_=0;const ho=new H;class Kt extends Zi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Jn,r=Jn,s=Gt,a=Vi,o=Mn,l=hn,c=Kt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=_s(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Xd;Kt.DEFAULT_ANISOTROPY=1;const wc=class wc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],x=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,M=(p+1)/2,A=(h+1)/2,y=(u+f)/4,L=(d+S)/4,_=(x+g)/4;return C>M&&C>A?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=y/i,s=L/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=y/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=L/s,r=_/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-x)*(g-x)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(d-S)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wc.prototype.isVector4=!0;let yt=wc;class w_ extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class eh extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Aa=class Aa{constructor(e,t,i,r,s,a,o,l,c,u,d,f,p,x,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,p,x,S,g)}set(e,t,i,r,s,a,o,l,c,u,d,f,p,x,S,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+x*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,x=c*u,S=c*d;t[0]=f+S*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,x=c*u,S=c*d;t[0]=f-S*o,t[4]=-a*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-f*d,t[8]=x*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+x,t[10]=f-S*d}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+S,t[5]=a*u,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,P_)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),fi.crossVectors(i,nn),fi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),fi.crossVectors(i,nn)),fi.normalize(),Rs.crossVectors(nn,fi),r[0]=fi.x,r[4]=Rs.x,r[8]=nn.x,r[1]=fi.y,r[5]=Rs.y,r[9]=nn.y,r[2]=fi.z,r[6]=Rs.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],x=i[2],S=i[6],g=i[10],h=i[14],w=i[3],C=i[7],M=i[11],A=i[15],y=r[0],L=r[4],_=r[8],b=r[12],U=r[1],D=r[5],I=r[9],X=r[13],Q=r[2],k=r[6],Y=r[10],B=r[14],K=r[3],ae=r[7],ge=r[11],_e=r[15];return s[0]=a*y+o*U+l*Q+c*K,s[4]=a*L+o*D+l*k+c*ae,s[8]=a*_+o*I+l*Y+c*ge,s[12]=a*b+o*X+l*B+c*_e,s[1]=u*y+d*U+f*Q+p*K,s[5]=u*L+d*D+f*k+p*ae,s[9]=u*_+d*I+f*Y+p*ge,s[13]=u*b+d*X+f*B+p*_e,s[2]=x*y+S*U+g*Q+h*K,s[6]=x*L+S*D+g*k+h*ae,s[10]=x*_+S*I+g*Y+h*ge,s[14]=x*b+S*X+g*B+h*_e,s[3]=w*y+C*U+M*Q+A*K,s[7]=w*L+C*D+M*k+A*ae,s[11]=w*_+C*I+M*Y+A*ge,s[15]=w*b+C*X+M*B+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],x=e[3],S=e[7],g=e[11],h=e[15],w=l*p-c*f,C=o*p-c*d,M=o*f-l*d,A=a*p-c*u,y=a*f-l*u,L=a*d-o*u;return t*(S*w-g*C+h*M)-i*(x*w-g*A+h*y)+r*(x*C-S*A+h*L)-s*(x*M-S*y+g*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],x=e[12],S=e[13],g=e[14],h=e[15],w=t*o-i*a,C=t*l-r*a,M=t*c-s*a,A=i*l-r*o,y=i*c-s*o,L=r*c-s*l,_=u*S-d*x,b=u*g-f*x,U=u*h-p*x,D=d*g-f*S,I=d*h-p*S,X=f*h-p*g,Q=w*X-C*I+M*D+A*U-y*b+L*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Q;return e[0]=(o*X-l*I+c*D)*k,e[1]=(r*I-i*X-s*D)*k,e[2]=(S*L-g*y+h*A)*k,e[3]=(f*y-d*L-p*A)*k,e[4]=(l*U-a*X-c*b)*k,e[5]=(t*X-r*U+s*b)*k,e[6]=(g*M-x*L-h*C)*k,e[7]=(u*L-f*M+p*C)*k,e[8]=(a*I-o*U+c*_)*k,e[9]=(i*U-t*I-s*_)*k,e[10]=(x*y-S*M+h*w)*k,e[11]=(d*M-u*y-p*w)*k,e[12]=(o*b-a*D-l*_)*k,e[13]=(t*D-i*b+r*_)*k,e[14]=(S*C-x*A-g*w)*k,e[15]=(u*A-d*C+f*w)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,x=s*d,S=a*u,g=a*d,h=o*d,w=l*c,C=l*u,M=l*d,A=i.x,y=i.y,L=i.z;return r[0]=(1-(S+h))*A,r[1]=(p+M)*A,r[2]=(x-C)*A,r[3]=0,r[4]=(p-M)*y,r[5]=(1-(f+h))*y,r[6]=(g+w)*y,r[7]=0,r[8]=(x+C)*L,r[9]=(g-w)*L,r[10]=(1-(f+S))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=nr.set(r[0],r[1],r[2]).length();const o=nr.set(r[4],r[5],r[6]).length(),l=nr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gn.copy(this);const c=1/a,u=1/o,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Fn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===Fn)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ba)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Fn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===Fn)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===ba)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Aa.prototype.isMatrix4=!0;let Tt=Aa;const nr=new H,gn=new Tt,C_=new H(0,0,0),P_=new H(1,1,1),fi=new H,Rs=new H,nn=new H,Iu=new Tt,Uu=new Ir;class Yi{constructor(e=0,t=0,i=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const Nu=new H,ir=new Ir,Gn=new Tt,Cs=new H,Hr=new H,D_=new H,I_=new Ir,Fu=new H(1,0,0),Ou=new H(0,1,0),Bu=new H(0,0,1),ku={type:"added"},U_={type:"removed"},rr={type:"childadded",child:null},po={type:"childremoved",child:null};class Zt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new H,t=new Yi,i=new Ir,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new $e}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hr,Cs,this.up):Gn.lookAt(Cs,Hr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Gn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),rr.child=e,this.dispatchEvent(rr),rr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U_),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new H(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ps extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),h=this._getHandJoint(c,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=b_(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=go(a,s,e+1/3),this.g=go(a,s,e),this.b=go(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return it.workingToColorSpace(kt.copy(this),e),Math.round(rt(kt.r*255,0,255))*65536+Math.round(rt(kt.g*255,0,255))*256+Math.round(rt(kt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=fn){it.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Ls);const i=lo(di.h,Ls.h,t),r=lo(di.s,Ls.s,t),s=lo(di.l,Ls.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new lt;lt.NAMES=nh;class F_ extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new H,Wn=new H,_o=new H,Xn=new H,sr=new H,ar=new H,zu=new H,xo=new H,vo=new H,Mo=new H,So=new yt,bo=new yt,Eo=new yt;class vn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Wn.subVectors(i,t),_o.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Wn),l=_n.dot(_o),c=Wn.dot(Wn),u=Wn.dot(_o),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return So.setScalar(0),bo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,i),Eo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(bo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Wn.subVectors(e,t),_n.cross(Wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;sr.subVectors(r,i),ar.subVectors(s,i),xo.subVectors(e,i);const l=sr.dot(xo),c=ar.dot(xo);if(l<=0&&c<=0)return t.copy(i);vo.subVectors(e,r);const u=sr.dot(vo),d=ar.dot(vo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(sr,a);Mo.subVectors(e,s);const p=sr.dot(Mo),x=ar.dot(Mo);if(x>=0&&p<=x)return t.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ar,o);const g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return zu.subVectors(s,r),o=(d-u)/(d-u+(p-x)),t.copy(r).addScaledVector(zu,o);const h=1/(g+S+f);return a=S*h,o=f*h,t.copy(i).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Is.subVectors(this.max,Vr),or.subVectors(e.a,Vr),lr.subVectors(e.b,Vr),cr.subVectors(e.c,Vr),hi.subVectors(lr,or),pi.subVectors(cr,lr),Ii.subVectors(or,cr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!yo(t,or,lr,cr,Is)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,or,lr,cr,Is))?!1:(Us.crossVectors(hi,pi),t=[Us.x,Us.y,Us.z],yo(t,or,lr,cr,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,Ds=new xs,or=new H,lr=new H,cr=new H,hi=new H,pi=new H,Ii=new H,Vr=new H,Is=new H,Us=new H,Ui=new H;function yo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ct=new H,Ns=new ft;let O_=0;class mn extends Zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ih extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rh extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const B_=new xs,Gr=new H,To=new H;class vs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(To)),this.expandByPoint(Gr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k_=0;const un=new Tt,Ao=new Zt,ur=new H,rn=new xs,Wr=new xs,It=new H;class on extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?rh:ih)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(rn.min,Wr.min),rn.expandByPoint(It),It.addVectors(rn.max,Wr.max),rn.expandByPoint(It)):(rn.expandByPoint(Wr.min),rn.expandByPoint(Wr.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),It.add(ur)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new H,l[_]=new H;const c=new H,u=new H,d=new H,f=new ft,p=new ft,x=new ft,S=new H,g=new H;function h(_,b,U){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,U),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,U),u.sub(c),d.sub(c),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),o[_].add(S),o[b].add(S),o[U].add(S),l[_].add(g),l[b].add(g),l[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,b=w.length;_<b;++_){const U=w[_],D=U.start,I=U.count;for(let X=D,Q=D+I;X<Q;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const C=new H,M=new H,A=new H,y=new H;function L(_){A.fromBufferAttribute(r,_),y.copy(A);const b=o[_];C.copy(b),C.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(y,b);const D=M.dot(l[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,D)}for(let _=0,b=w.length;_<b;++_){const U=w[_],D=U.start,I=U.count;for(let X=D,Q=D+I;X<Q;X+=3)L(e.getX(X+0)),L(e.getX(X+1)),L(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let h=0;h<u;h++)f[x++]=c[p++]}return new mn(f,u,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let z_=0;class Ur extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Er,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=jo,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new H,wo=new H,Fs=new H,mi=new H,Ro=new H,Os=new H,Co=new H;class Ec{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wo.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(wo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=mi.dot(this.direction),l=-mi.dot(Fs),c=mi.lengthSq(),u=Math.abs(1-a*a);let d,f,p,x;if(u>0)if(d=a*l-o,f=a*o-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const S=1/u;d*=S,f*=S,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wo).addScaledVector(Fs,f),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){Ro.subVectors(t,e),Os.subVectors(i,e),Co.crossVectors(Ro,Os);let a=this.direction.dot(Co),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(Os.crossVectors(mi,Os));if(l<0)return null;const c=o*this.direction.dot(Ro.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(Co);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sh extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hu=new Tt,Ni=new Ec,Bs=new vs,Vu=new H,ks=new H,zs=new H,Hs=new H,Po=new H,Vs=new H,Gu=new H,Gs=new H;class ri extends Zt{constructor(e=new on,t=new sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Po.fromBufferAttribute(d,e),a?Vs.addScaledVector(Po,u):Vs.addScaledVector(Po.sub(t),u))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(Bs.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Bs,Vu)===null||Ni.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){const g=f[x],h=a[g.materialIndex],w=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=C;M<A;M+=3){const y=o.getX(M),L=o.getX(M+1),_=o.getX(M+2);r=Ws(this,h,e,i,c,u,d,y,L,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,h=S;g<h;g+=3){const w=o.getX(g),C=o.getX(g+1),M=o.getX(g+2);r=Ws(this,a,e,i,c,u,d,w,C,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){const g=f[x],h=a[g.materialIndex],w=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=C;M<A;M+=3){const y=M,L=M+1,_=M+2;r=Ws(this,h,e,i,c,u,d,y,L,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,h=S;g<h;g+=3){const w=g,C=g+1,M=g+2;r=Ws(this,a,e,i,c,u,d,w,C,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function H_(n,e,t,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===wi,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:n}}function Ws(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ks),n.getVertexPosition(l,zs),n.getVertexPosition(c,Hs);const u=H_(n,e,t,i,ks,zs,Hs,Gu);if(u){const d=new H;vn.getBarycoord(Gu,ks,zs,Hs,d),r&&(u.uv=vn.getInterpolatedAttribute(r,o,l,c,d,new ft)),s&&(u.uv1=vn.getInterpolatedAttribute(s,o,l,c,d,new ft)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};vn.getNormal(ks,zs,Hs,f.normal),u.face=f,u.barycoord=d}return u}class V_ extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ft,u=Ft,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=new H,G_=new H,W_=new $e;class Bi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lo.subVectors(i,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Lo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W_.getNormalMatrix(e),r=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new vs,X_=new ft(.5,.5),Xs=new H;class ah{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],x=s[8],S=s[9],g=s[10],h=s[11],w=s[12],C=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,h-x,A-w).normalize(),r[1].setComponents(c+a,p+u,h+x,A+w).normalize(),r[2].setComponents(c+o,p+d,h+S,A+C).normalize(),r[3].setComponents(c-o,p-d,h-S,A-C).normalize(),i)r[4].setComponents(l,f,g,M).normalize(),r[5].setComponents(c-l,p-f,h-g,A-M).normalize();else if(r[4].setComponents(c-l,p-f,h-g,A-M).normalize(),t===Fn)r[5].setComponents(c+l,p+f,h+g,A+M).normalize();else if(t===ba)r[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=X_.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oh extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new H,Ta=new H,Wu=new Tt,Xr=new Ec,qs=new vs,Do=new H,Xu=new H;class q_ extends Zt{constructor(e=new on,t=new oh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ya.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ya.distanceTo(Ta);e.setAttribute("lineDistance",new bn(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Wu.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Wu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=p,g=x-1;S<g;S+=c){const h=u.getX(S),w=u.getX(S+1),C=$s(this,e,Xr,l,h,w,S);C&&t.push(C)}if(this.isLineLoop){const S=u.getX(x-1),g=u.getX(p),h=$s(this,e,Xr,l,S,g,x-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let S=p,g=x-1;S<g;S+=c){const h=$s(this,e,Xr,l,S,S+1,S);h&&t.push(h)}if(this.isLineLoop){const S=$s(this,e,Xr,l,x-1,p,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $s(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ya.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,s),t.distanceSqToSegment(ya,Ta,Do,Xu)>i)return;Do.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Do);if(!(c<e.near||c>e.far))return{distance:c,point:Xu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const qu=new H,$u=new H;class $_ extends q_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)qu.fromBufferAttribute(t,r),$u.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qu.distanceTo($u);e.setAttribute("lineDistance",new bn(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y_ extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new Tt,zl=new Ec,Ys=new vs,Ks=new H;class K_ extends Zt{constructor(e=new on,t=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Yu.copy(r).invert(),zl.copy(e.ray).applyMatrix4(Yu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=f,S=p;x<S;x++){const g=c.getX(x);Ks.fromBufferAttribute(d,g),Ku(Ks,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,S=p;x<S;x++)Ks.fromBufferAttribute(d,x),Ku(Ks,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ku(n,e,t,i,r,s,a){const o=zl.distanceSqToPoint(n);if(o<t){const l=new H;zl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class lh extends Kt{constructor(e=[],t=qi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lr extends Kt{constructor(e,t,i=zn,r,s,a,o=Ft,l=Ft,c,u=ii,d=1){if(u!==ii&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z_ extends Lr{constructor(e,t=zn,i=qi,r,s,a=Ft,o=Ft,l,c=ii){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ch extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends on{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(d,2));function x(S,g,h,w,C,M,A,y,L,_,b){const U=M/L,D=A/_,I=M/2,X=A/2,Q=y/2,k=L+1,Y=_+1;let B=0,K=0;const ae=new H;for(let ge=0;ge<Y;ge++){const _e=ge*D-X;for(let be=0;be<k;be++){const we=be*U-I;ae[S]=we*w,ae[g]=_e*C,ae[h]=Q,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[g]=0,ae[h]=y>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(be/L),d.push(1-ge/_),B+=1}}for(let ge=0;ge<_;ge++)for(let _e=0;_e<L;_e++){const be=f+_e+k*ge,we=f+_e+k*(ge+1),ze=f+(_e+1)+k*(ge+1),Je=f+(_e+1)+k*ge;l.push(be,we,Je),l.push(we,ze,Je),K+=6}o.addGroup(p,K,b),p+=K,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ka extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,p=[],x=[],S=[],g=[];for(let h=0;h<u;h++){const w=h*f-a;for(let C=0;C<c;C++){const M=C*d-s;x.push(M,-w,0),S.push(0,0,1),g.push(C/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const C=w+c*h,M=w+c*(h+1),A=w+1+c*(h+1),y=w+1+c*h;p.push(C,M,y),p.push(M,A,y)}this.setIndex(p),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(S,3)),this.setAttribute("uv",new bn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function Dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Zu(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Zu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Dr(n[t]);for(const r in i)e[r]=i[r]}return e}function Zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function J_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Q_={clone:Dr,merge:qt};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class t0 extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n0 extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i0 extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zs=new H,Js=new Ir,Cn=new H;class fh extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zs,Js,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Js,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zs,Js,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Js,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new H,Ju=new ft,Qu=new ft;class dn extends fh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Qu),t.subVectors(Qu,Ju)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dh extends fh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=-90,dr=1;class r0 extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(fr,dr,e,t);r.layers=this.layers,this.add(r);const s=new dn(fr,dr,e,t);s.layers=this.layers,this.add(s);const a=new dn(fr,dr,e,t);a.layers=this.layers,this.add(a);const o=new dn(fr,dr,e,t);o.layers=this.layers,this.add(o);const l=new dn(fr,dr,e,t);l.layers=this.layers,this.add(l);const c=new dn(fr,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class s0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rc=class Rc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Rc.prototype.isMatrix2=!0;let ju=Rc;function ef(n,e,t,i){const r=a0(i);switch(t){case Zd:return n*e;case Qd:return n*e/r.components*r.byteLength;case _c:return n*e/r.components*r.byteLength;case $i:return n*e*2/r.components*r.byteLength;case xc:return n*e*2/r.components*r.byteLength;case Jd:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case vc:return n*e*4/r.components*r.byteLength;case sa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case dl:return Math.max(n,16)*Math.max(e,8)/4;case cl:case fl:return Math.max(n,8)*Math.max(e,8)/2;case hl:case pl:case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ml:case xa:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Il:case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case va:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(n){switch(n){case hn:case qd:return{byteLength:1,components:1};case fs:case $d:case ni:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case zn:case pc:case Nn:return{byteLength:4,components:1};case Yd:case Kd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function o0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],S=d[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const S=d[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ax=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ux=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:u0,alphamap_pars_fragment:f0,alphatest_fragment:d0,alphatest_pars_fragment:h0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:_0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:w0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:L0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:I0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:k0,envmap_fragment:z0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:ex,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:$0,fog_pars_fragment:Y0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:Q0,lights_pars_begin:j0,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:sx,lights_physical_pars_fragment:ax,lights_fragment_begin:ox,lights_fragment_maps:lx,lights_fragment_end:cx,lightprobes_pars_fragment:ux,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:_x,map_particle_pars_fragment:xx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:bx,morphnormal_vertex:Ex,morphtarget_pars_vertex:yx,morphtarget_vertex:Tx,normal_fragment_begin:Ax,normal_fragment_maps:wx,normal_pars_fragment:Rx,normal_pars_vertex:Cx,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Nx,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:Bx,project_vertex:kx,dithering_fragment:zx,dithering_pars_fragment:Hx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:$x,skinbase_vertex:Yx,skinning_pars_vertex:Kx,skinning_vertex:Zx,skinnormal_vertex:Jx,specularmap_fragment:Qx,specularmap_pars_fragment:jx,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:sv,uv_vertex:av,worldpos_vertex:ov,background_vert:lv,background_frag:cv,backgroundCube_vert:uv,backgroundCube_frag:fv,cube_vert:dv,cube_frag:hv,depth_vert:pv,depth_frag:mv,distance_vert:gv,distance_frag:_v,equirect_vert:xv,equirect_frag:vv,linedashed_vert:Mv,linedashed_frag:Sv,meshbasic_vert:bv,meshbasic_frag:Ev,meshlambert_vert:yv,meshlambert_frag:Tv,meshmatcap_vert:Av,meshmatcap_frag:wv,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Iv,meshtoon_vert:Uv,meshtoon_frag:Nv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:kv,sprite_vert:zv,sprite_frag:Hv},ye={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},In={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};In.physical={uniforms:qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Qs={r:0,b:0,g:0},Vv=new Tt,ph=new $e;ph.set(-1,0,0,0,1,0,0,0,1);function Gv(n,e,t,i,r,s){const a=new lt(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function p(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){const M=w.backgroundBlurriness>0;C=e.get(C,M)}return C}function x(w){let C=!1;const M=p(w);M===null?g(a,o):M&&M.isColor&&(g(M,1),C=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(w,C){const M=p(C);M&&(M.isCubeTexture||M.mapping===Ba)?(c===void 0&&(c=new ri(new Ms(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Dr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,y,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ph),c.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ri(new ka(2,2),new yn({name:"BackgroundMaterial",uniforms:Dr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,C){w.getRGB(Qs,uh(n)),t.buffers.color.setClear(Qs.r,Qs.g,Qs.b,C,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:x,addToRenderList:S,dispose:h}}function Wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,I,X,Q,k){let Y=!1;const B=d(D,Q,X,I);s!==B&&(s=B,c(s.object)),Y=p(D,Q,X,k),Y&&x(D,Q,X,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(D,I,X,Q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,I,X,Q){const k=Q.wireframe===!0;let Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);const B=D.isInstancedMesh===!0?D.id:0;let K=Y[B];K===void 0&&(K={},Y[B]=K);let ae=K[X.id];ae===void 0&&(ae={},K[X.id]=ae);let ge=ae[k];return ge===void 0&&(ge=f(l()),ae[k]=ge),ge}function f(D){const I=[],X=[],Q=[];for(let k=0;k<t;k++)I[k]=0,X[k]=0,Q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:Q,object:D,attributes:{},index:null}}function p(D,I,X,Q){const k=s.attributes,Y=I.attributes;let B=0;const K=X.getAttributes();for(const ae in K)if(K[ae].location>=0){const _e=k[ae];let be=Y[ae];if(be===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;B++}return s.attributesNum!==B||s.index!==Q}function x(D,I,X,Q){const k={},Y=I.attributes;let B=0;const K=X.getAttributes();for(const ae in K)if(K[ae].location>=0){let _e=Y[ae];_e===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),k[ae]=be,B++}s.attributes=k,s.attributesNum=B,s.index=Q}function S(){const D=s.newAttributes;for(let I=0,X=D.length;I<X;I++)D[I]=0}function g(D){h(D,0)}function h(D,I){const X=s.newAttributes,Q=s.enabledAttributes,k=s.attributeDivisors;X[D]=1,Q[D]===0&&(n.enableVertexAttribArray(D),Q[D]=1),k[D]!==I&&(n.vertexAttribDivisor(D,I),k[D]=I)}function w(){const D=s.newAttributes,I=s.enabledAttributes;for(let X=0,Q=I.length;X<Q;X++)I[X]!==D[X]&&(n.disableVertexAttribArray(X),I[X]=0)}function C(D,I,X,Q,k,Y,B){B===!0?n.vertexAttribIPointer(D,I,X,k,Y):n.vertexAttribPointer(D,I,X,Q,k,Y)}function M(D,I,X,Q){S();const k=Q.attributes,Y=X.getAttributes(),B=I.defaultAttributeValues;for(const K in Y){const ae=Y[K];if(ae.location>=0){let ge=k[K];if(ge===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ge!==void 0){const _e=ge.normalized,be=ge.itemSize,we=e.get(ge);if(we===void 0)continue;const ze=we.buffer,Je=we.type,ee=we.bytesPerElement,me=Je===n.INT||Je===n.UNSIGNED_INT||ge.gpuType===pc;if(ge.isInterleavedBufferAttribute){const ue=ge.data,Ge=ue.stride,Xe=ge.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<ae.locationSize;He++)h(ae.location+He,ue.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<ae.locationSize;He++)g(ae.location+He);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let He=0;He<ae.locationSize;He++)C(ae.location+He,be/ae.locationSize,Je,_e,Ge*ee,(Xe+be/ae.locationSize*He)*ee,me)}else{if(ge.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)h(ae.location+ue,ge.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ue=0;ue<ae.locationSize;ue++)g(ae.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ue=0;ue<ae.locationSize;ue++)C(ae.location+ue,be/ae.locationSize,Je,_e,be*ee,be/ae.locationSize*ue*ee,me)}}else if(B!==void 0){const _e=B[K];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(ae.location,_e);break;case 3:n.vertexAttrib3fv(ae.location,_e);break;case 4:n.vertexAttrib4fv(ae.location,_e);break;default:n.vertexAttrib1fv(ae.location,_e)}}}}w()}function A(){b();for(const D in i){const I=i[D];for(const X in I){const Q=I[X];for(const k in Q){const Y=Q[k];for(const B in Y)u(Y[B].object),delete Y[B];delete Q[k]}}delete i[D]}}function y(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const X in I){const Q=I[X];for(const k in Q){const Y=Q[k];for(const B in Y)u(Y[B].object),delete Y[B];delete Q[k]}}delete i[D.id]}function L(D){for(const I in i){const X=i[I];for(const Q in X){const k=X[Q];if(k[D.id]===void 0)continue;const Y=k[D.id];for(const B in Y)u(Y[B].object),delete Y[B];delete k[D.id]}}}function _(D){for(const I in i){const X=i[I],Q=D.isInstancedMesh===!0?D.id:0,k=X[Q];if(k!==void 0){for(const Y in k){const B=k[Y];for(const K in B)u(B[K].object),delete B[K];delete k[Y]}delete X[Q],Object.keys(X).length===0&&delete i[I]}}}function b(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function Xv(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function qv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Mn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const _=L===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==hn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Nn&&!_)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,maxSamples:A,samples:y}}function $v(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const w=s?0:i,C=w*4;let M=h.clippingState||null;l.value=M,M=u(x,f,C,p);for(let A=0;A!==C;++A)M[A]=t[A];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,x){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const h=p+S*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<h)&&(g=new Float32Array(h));for(let C=0,M=p;C!==S;++C,M+=4)a.copy(d[C]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const bi=4,tf=[.125,.215,.35,.446,.526,.582],Hi=20,Yv=256,qr=new dh,nf=new lt;let Io=null,Uo=0,No=0,Fo=!1;const Kv=new H;class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Kv}=s;Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Uo,No),this._renderer.xr.enabled=Fo,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ni,format:Mn,colorSpace:Ma,depthBuffer:!1},r=sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zv(s)),this._blurMaterial=Qv(s,e,t),this._ggxMaterial=Jv(s,e,t)}return r}_compileMaterial(e){const t=new ri(new on,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,i,r,s){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(nf),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ms,new sh({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let h=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,h=!0):(g.color.copy(nf),h=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[C],s.y,s.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[C]));const A=this._cubeSize;hr(r,M*A,C>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-bi?i-x+bi:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,hr(s,g,h,3*S,2*S),r.setRenderTarget(s),r.render(o,qr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,hr(e,g,h,3*S,2*S),r.setRenderTarget(e),r.render(o,qr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),S=s/x,g=isFinite(s)?1+Math.floor(u*S):Hi;g>Hi&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const h=[];let w=0;for(let L=0;L<Hi;++L){const _=L/S,b=Math.exp(-_*_/2);h.push(b),L===0?w+=b:L<g&&(w+=2*b)}for(let L=0;L<h.length;L++)h[L]=h[L]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=x,f.mipInt.value=C-i;const M=this._sizeLods[r],A=3*M*(r>C-bi?r-C+bi:0),y=4*(this._cubeSize-M);hr(t,A,y,3*M,2*M),l.setRenderTarget(t),l.render(d,qr)}}function Zv(n){const e=[],t=[],i=[];let r=n;const s=n-bi+1+tf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-bi?l=tf[a-n+bi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,S=3,g=2,h=1,w=new Float32Array(S*x*p),C=new Float32Array(g*x*p),M=new Float32Array(h*x*p);for(let y=0;y<p;y++){const L=y%3*2/3-1,_=y>2?0:-1,b=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];w.set(b,S*x*y),C.set(f,g*x*y);const U=[y,y,y,y,y,y];M.set(U,h*x*y)}const A=new on;A.setAttribute("position",new mn(w,S)),A.setAttribute("uv",new mn(C,g)),A.setAttribute("faceIndex",new mn(M,h)),i.push(new ri(A,null)),r>bi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sf(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jv(n,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Qv(n,e,t){const i=new Float32Array(Hi),r=new H(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function af(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function of(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mh extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ms(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Qn});s.uniforms.tEquirect.value=t;const a=new ri(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Gt),new r0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function jv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===ro||p===so)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const S=new mh(x.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,x=p===ro||p===so,S=p===qi||p===Pr;if(x||S){let g=t.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new rf(n)),g=x?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const w=f.image;return x&&w&&w.height>0||S&&w&&l(w)?(i===null&&(i=new rf(n)),g=x?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,p){return p===ro?f.mapping=qi:p===so&&(f.mapping=Pr),f}function l(f){let p=0;const x=6;for(let S=0;S<x;S++)f[S]!==void 0&&p++;return p===x}function c(f){const p=f.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function eM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yr("WebGLRenderer: "+i+" extension not supported."),r}}}function tM(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,x=d.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const w=p.array;S=p.version;for(let C=0,M=w.length;C<M;C+=3){const A=w[C+0],y=w[C+1],L=w[C+2];f.push(A,y,y,L,L,A)}}else{const w=x.array;S=x.version;for(let C=0,M=w.length/3-1;C<M;C+=3){const A=C+0,y=C+1,L=C+2;f.push(A,y,y,L,L,A)}}const g=new(x.count>=65535?rh:ih)(f,1);g.version=S;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function nM(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*a,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let S=0;for(let g=0;g<p;g++)S+=f[g];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function iM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rM(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let U=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var p=U;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let A=o.attributes.position.count*M,y=1;A>e.maxTextureSize&&(y=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*y*4*d),_=new eh(L,A,y,d);_.type=Nn,_.needsUpdate=!0;const b=M*4;for(let D=0;D<d;D++){const I=h[D],X=w[D],Q=C[D],k=A*y*4*D;for(let Y=0;Y<I.count;Y++){const B=Y*b;x===!0&&(r.fromBufferAttribute(I,Y),L[k+B+0]=r.x,L[k+B+1]=r.y,L[k+B+2]=r.z,L[k+B+3]=0),S===!0&&(r.fromBufferAttribute(X,Y),L[k+B+4]=r.x,L[k+B+5]=r.y,L[k+B+6]=r.z,L[k+B+7]=0),g===!0&&(r.fromBufferAttribute(Q,Y),L[k+B+8]=r.x,L[k+B+9]=r.y,L[k+B+10]=r.z,L[k+B+11]=Q.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new ft(A,y)},i.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function sM(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const aM={[Bd]:"LINEAR_TONE_MAPPING",[kd]:"REINHARD_TONE_MAPPING",[zd]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[Gd]:"AGX_TONE_MAPPING",[Wd]:"NEUTRAL_TONE_MAPPING",[Vd]:"CUSTOM_TONE_MAPPING"};function oM(n,e,t,i,r,s){const a=new kn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Lr(e,t):void 0}),o=new kn(e,t,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new on;l.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new bn([0,2,0,0,2,0],2));const c=new t0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ri(l,c),d=new dh(-1,1,1,-1,0,1);let f=null,p=null,x=!1,S,g=null,h=[],w=!1;this.setSize=function(C,M){a.setSize(C,M),o.setSize(C,M);for(let A=0;A<h.length;A++){const y=h[A];y.setSize&&y.setSize(C,M)}},this.setEffects=function(C){h=C,w=h.length>0&&h[0].isRenderPass===!0;const M=a.width,A=a.height;for(let y=0;y<h.length;y++){const L=h[y];L.setSize&&L.setSize(M,A)}},this.begin=function(C,M){if(x||C.toneMapping===Bn&&h.length===0)return!1;if(g=M,M!==null){const A=M.width,y=M.height;(a.width!==A||a.height!==y)&&this.setSize(A,y)}return w===!1&&C.setRenderTarget(a),S=C.toneMapping,C.toneMapping=Bn,!0},this.hasRenderPass=function(){return w},this.end=function(C,M){C.toneMapping=S,x=!0;let A=a,y=o;for(let L=0;L<h.length;L++){const _=h[L];if(_.enabled!==!1&&(_.render(C,y,A,M),_.needsSwap!==!1)){const b=A;A=y,y=b}}if(f!==C.outputColorSpace||p!==C.toneMapping){f=C.outputColorSpace,p=C.toneMapping,c.defines={},it.getTransfer(f)===ht&&(c.defines.SRGB_TRANSFER="");const L=aM[p];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,C.setRenderTarget(g),C.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const gh=new Kt,Hl=new Lr(1,1),_h=new eh,xh=new R_,vh=new lh,lf=[],cf=[],uf=new Float32Array(16),ff=new Float32Array(9),df=new Float32Array(4);function Nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lf[r];if(s===void 0&&(s=new Float32Array(r),lf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ha(n,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;df.set(i),n.uniformMatrix2fv(this.addr,!1,df),Dt(t,i)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Dt(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),Dt(t,i)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function EM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hl.compareFunction=t.isReversedDepthBuffer()?Sc:Mc,s=Hl):s=gh,t.setTexture2D(e||s,r)}function yM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xh,r)}function TM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vh,r)}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_h,r)}function wM(n){switch(n){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return fM;case 35674:return dM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return MM;case 36295:return SM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(n,e){n.uniform1fv(this.addr,e)}function CM(n,e){const t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function PM(n,e){const t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){const t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){const t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IM(n,e){const t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UM(n,e){const t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function OM(n,e){n.uniform3iv(this.addr,e)}function BM(n,e){n.uniform4iv(this.addr,e)}function kM(n,e){n.uniform1uiv(this.addr,e)}function zM(n,e){n.uniform2uiv(this.addr,e)}function HM(n,e){n.uniform3uiv(this.addr,e)}function VM(n,e){n.uniform4uiv(this.addr,e)}function GM(n,e,t){const i=this.cache,r=e.length,s=Ha(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Hl:a=gh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function WM(n,e,t){const i=this.cache,r=e.length,s=Ha(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||xh,s[a])}function XM(n,e,t){const i=this.cache,r=e.length,s=Ha(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vh,s[a])}function qM(n,e,t){const i=this.cache,r=e.length,s=Ha(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_h,s[a])}function $M(n){switch(n){case 5126:return RM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return kM;case 36294:return zM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}class YM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wM(t.type)}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function hf(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,r=i.length;for(Oo.lastIndex=0;;){const s=Oo.exec(i),a=Oo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hf(t,c===void 0?new YM(o,n,e):new KM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ZM(o),hf(t,d)),t=d}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);JM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QM=37297;let jM=0;function eS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const mf=new $e;function tS(n){it._getMatrix(mf,it.workingColorSpace,n);const e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Sa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+eS(n.getShaderSource(e),o)}else return s}function nS(n,e){const t=tS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iS={[Bd]:"Linear",[kd]:"Reinhard",[zd]:"Cineon",[Hd]:"ACESFilmic",[Gd]:"AgX",[Wd]:"Neutral",[Vd]:"Custom"};function rS(n,e){const t=iS[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new H;function sS(){it.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function oS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zr(n){return n!==""}function _f(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(cS,fS)}const uS=new Map;function fS(n,e){let t=Qe[e];if(t===void 0){const i=uS.get(e);if(i!==void 0)t=Qe[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vl(t)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(dS,hS)}function hS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pS={[ra]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function mS(n){return pS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gS={[qi]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function _S(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xS={[Pr]:"ENVMAP_MODE_REFRACTION"};function vS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MS={[Od]:"ENVMAP_BLENDING_MULTIPLY",[o_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function SS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":MS[n.combine]||"ENVMAP_BLENDING_NONE"}function bS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ES(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mS(t),c=_S(t),u=vS(t),d=SS(t),f=bS(t),p=aS(t),x=oS(s),S=r.createProgram();let g,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zr).join(`
`),h.length>0&&(h+=`
`)):(g=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),h=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,nS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Vl(a),a=_f(a,t),a=xf(a,t),o=Vl(o),o=_f(o,t),o=xf(o,t),a=vf(a),o=vf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const C=w+g+a,M=w+h+o,A=pf(r,r.VERTEX_SHADER,C),y=pf(r,r.FRAGMENT_SHADER,M);r.attachShader(S,A),r.attachShader(S,y),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",X=r.getShaderInfoLog(A)||"",Q=r.getShaderInfoLog(y)||"",k=I.trim(),Y=X.trim(),B=Q.trim();let K=!0,ae=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,A,y);else{const ge=gf(r,A,"vertex"),_e=gf(r,y,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+ge+`
`+_e)}else k!==""?We("WebGLProgram: Program Info Log:",k):(Y===""||B==="")&&(ae=!1);ae&&(D.diagnostics={runnable:K,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:B,prefix:h}})}r.deleteShader(A),r.deleteShader(y),_=new ca(r,S),b=lS(r,S)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(S,QM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=y,this}let yS=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AS(e),t.set(e,i)),i}}class AS{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function wS(n){return n===$i||n===xa||n===va}function RS(n,e,t,i,r,s){const a=new th,o=new TS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,b,U,D,I,X){const Q=D.fog,k=I.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||Y,B),ae=K&&K.mapping===Ba?K.image.height:null,ge=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const _e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,be=_e!==void 0?_e.length:0;let we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let ze,Je,ee,me;if(ge){const Ue=In[ge];ze=Ue.vertexShader,Je=Ue.fragmentShader}else{ze=_.vertexShader,Je=_.fragmentShader;const Ue=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Ue,bt),ee=Ue.id,me=bt.id}const ue=n.getRenderTarget(),Ge=n.state.buffers.depth.getReversed(),Xe=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,R=!!_.map,P=!!_.matcap,W=!!K,j=!!_.aoMap,Z=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,fe=!!_.normalMap,le=!!_.displacementMap,oe=!!_.emissiveMap,re=!!_.metalnessMap,Te=!!_.roughnessMap,T=_.anisotropy>0,Pe=_.clearcoat>0,Ee=_.dispersion>0,E=_.iridescence>0,m=_.sheen>0,N=_.transmission>0,z=T&&!!_.anisotropyMap,$=Pe&&!!_.clearcoatMap,ce=Pe&&!!_.clearcoatNormalMap,pe=Pe&&!!_.clearcoatRoughnessMap,J=E&&!!_.iridescenceMap,te=E&&!!_.iridescenceThicknessMap,de=m&&!!_.sheenColorMap,Le=m&&!!_.sheenRoughnessMap,ve=!!_.specularMap,Me=!!_.specularColorMap,ke=!!_.specularIntensityMap,Ve=N&&!!_.transmissionMap,Ye=N&&!!_.thicknessMap,F=!!_.gradientMap,xe=!!_.alphaMap,ne=_.alphaTest>0,Se=!!_.alphaHash,Ce=!!_.extensions;let se=Bn;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(se=n.toneMapping);const Fe={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:Je,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:He,batchingColor:He&&I._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&I.instanceColor!==null,instancingMorph:Xe&&I.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:R,matcap:P,envMap:W,envMapMode:W&&K.mapping,envMapCubeUVHeight:ae,aoMap:j,lightMap:Z,bumpMap:ie,normalMap:fe,displacementMap:le,emissiveMap:oe,normalMapObjectSpace:fe&&_.normalMapType===f_,normalMapTangentSpace:fe&&_.normalMapType===Eu,packedNormalMap:fe&&_.normalMapType===Eu&&wS(_.normalMap.format),metalnessMap:re,roughnessMap:Te,anisotropy:T,anisotropyMap:z,clearcoat:Pe,clearcoatMap:$,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,dispersion:Ee,iridescence:E,iridescenceMap:J,iridescenceThicknessMap:te,sheen:m,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:Me,specularIntensityMap:ke,transmission:N,transmissionMap:Ve,thicknessMap:Ye,gradientMap:F,opaque:_.transparent===!1&&_.blending===Er&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:Se,combine:_.combine,mapUv:R&&x(_.map.channel),aoMapUv:j&&x(_.aoMap.channel),lightMapUv:Z&&x(_.lightMap.channel),bumpMapUv:ie&&x(_.bumpMap.channel),normalMapUv:fe&&x(_.normalMap.channel),displacementMapUv:le&&x(_.displacementMap.channel),emissiveMapUv:oe&&x(_.emissiveMap.channel),metalnessMapUv:re&&x(_.metalnessMap.channel),roughnessMapUv:Te&&x(_.roughnessMap.channel),anisotropyMapUv:z&&x(_.anisotropyMap.channel),clearcoatMapUv:$&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:Me&&x(_.specularColorMap.channel),specularIntensityMapUv:ke&&x(_.specularIntensityMap.channel),transmissionMapUv:Ve&&x(_.transmissionMap.channel),thicknessMapUv:Ye&&x(_.thicknessMap.channel),alphaMapUv:xe&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||T),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(R||xe),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ge,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:we,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:R&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(h(b,_),w(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function h(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function w(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){const b=p[_.type];let U;if(b){const D=In[b];U=Q_.clone(D.uniforms)}else U=_.uniforms;return U}function M(_,b){let U=u.get(b);return U!==void 0?++U.usedTimes:(U=new ES(n,b,_,r),c.push(U),u.set(b,U)),U}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:C,acquireProgram:M,releaseProgram:A,releaseShaderCache:y,programs:c,dispose:L}}function CS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function PS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,x,S,g,h){let w=n[e];return w===void 0?(w={id:f.id,object:f,geometry:p,material:x,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:h},n[e]=w):(w.id=f.id,w.object=f,w.geometry=p,w.material=x,w.materialVariant=a(f),w.groupOrder=S,w.renderOrder=f.renderOrder,w.z=g,w.group=h),e++,w}function l(f,p,x,S,g,h){const w=o(f,p,x,S,g,h);x.transmission>0?i.push(w):x.transparent===!0?r.push(w):t.push(w)}function c(f,p,x,S,g,h){const w=o(f,p,x,S,g,h);x.transmission>0?i.unshift(w):x.transparent===!0?r.unshift(w):t.unshift(w)}function u(f,p,x){t.length>1&&t.sort(f||PS),i.length>1&&i.sort(p||Sf),r.length>1&&r.sort(p||Sf),x&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=n.length;f<p;f++){const x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function LS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bf,n.set(i,[a])):r>=s.length?(a=new bf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function DS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new lt};break;case"SpotLight":t={position:new H,direction:new H,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function IS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let US=0;function NS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FS(n){const e=new DS,t=IS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Tt,a=new Tt;function o(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,S=0,g=0,h=0,w=0,C=0,M=0,A=0,y=0,L=0;c.sort(NS);for(let b=0,U=c.length;b<U;b++){const D=c[b],I=D.color,X=D.intensity,Q=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$i?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*X,d+=I.g*X,f+=I.b*X;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],X);L++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,K=t.get(D);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(I).multiplyScalar(X),Y.distance=Q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[S]=Y;const B=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,B.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[S]=B.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,i.spotShadow[S]=K,i.spotShadowMap[S]=k,M++}S++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(I).multiplyScalar(X),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=Y,g++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const B=D.shadow,K=t.get(D);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=D.shadow.matrix,C++}i.point[x]=Y,x++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(X),Y.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[h]=Y,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==p||_.pointLength!==x||_.spotLength!==S||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==w||_.numPointShadows!==C||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+A-y,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=L,_.directionalLength=p,_.pointLength=x,_.spotLength=S,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=w,_.numPointShadows=C,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=L,i.version=US++)}function l(c,u){let d=0,f=0,p=0,x=0,S=0;const g=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const C=c[h];if(C.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(C.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(C.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(C.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function Ef(n){const e=new FS(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function OS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ef(n),e.set(r,[o])):s>=a.length?(o=new Ef(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],HS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],yf=new Tt,$r=new H,Bo=new H;function VS(n,e,t){let i=new ah;const r=new ft,s=new ft,a=new yt,o=new n0,l=new i0,c={},u=t.maxTextureSize,d={[wi]:jt,[jt]:wi,[Zn]:Zn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:BS,fragmentShader:kS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new on;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ri(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let h=this.type;this.render=function(y,L,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Vg&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ra);const b=n.getRenderTarget(),U=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Qn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=h!==this.type;X&&L.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(k=>k.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,k=y.length;Q<k;Q++){const Y=y[Q],B=Y.shadow;if(B===void 0){We("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const K=B.getFrameExtents();r.multiply(K),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,B.mapSize.y=s.y));const ae=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ae,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Kr){if(Y.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(r.x,r.y,{format:$i,type:ni,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new Lr(r.x,r.y,Nn),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=ii,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft}else Y.isPointLight?(B.map=new mh(r.x),B.map.depthTexture=new Z_(r.x,zn)):(B.map=new kn(r.x,r.y),B.map.depthTexture=new Lr(r.x,r.y,zn)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=ii,this.type===ra?(B.map.depthTexture.compareFunction=ae?Sc:Mc,B.map.depthTexture.minFilter=Gt,B.map.depthTexture.magFilter=Gt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft);B.camera.updateProjectionMatrix()}const ge=B.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ge;_e++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(B.map),n.clear());const be=B.getViewport(_e);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),I.viewport(a)}if(Y.isPointLight){const be=B.camera,we=B.matrix,ze=Y.distance||be.far;ze!==be.far&&(be.far=ze,be.updateProjectionMatrix()),$r.setFromMatrixPosition(Y.matrixWorld),be.position.copy($r),Bo.copy(be.position),Bo.add(zS[_e]),be.up.copy(HS[_e]),be.lookAt(Bo),be.updateMatrixWorld(),we.makeTranslation(-$r.x,-$r.y,-$r.z),yf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),B._frustum.setFromProjectionMatrix(yf,be.coordinateSystem,be.reversedDepth)}else B.updateMatrices(Y);i=B.getFrustum(),M(L,_,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Kr&&w(B,_),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(b,U,D)};function w(y,L){const _=e.update(S);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new kn(r.x,r.y,{format:$i,type:ni})),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(L,null,_,f,S,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(L,null,_,p,S,null)}function C(y,L,_,b){let U=null;const D=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)U=D;else if(U=_.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const I=U.uuid,X=L.uuid;let Q=c[I];Q===void 0&&(Q={},c[I]=Q);let k=Q[X];k===void 0&&(k=U.clone(),Q[X]=k,L.addEventListener("dispose",A)),U=k}if(U.visible=L.visible,U.wireframe=L.wireframe,b===Kr?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=n.properties.get(U);I.light=_}return U}function M(y,L,_,b,U){if(y.visible===!1)return;if(y.layers.test(L.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&U===Kr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const X=e.update(y),Q=y.material;if(Array.isArray(Q)){const k=X.groups;for(let Y=0,B=k.length;Y<B;Y++){const K=k[Y],ae=Q[K.materialIndex];if(ae&&ae.visible){const ge=C(y,ae,b,U);y.onBeforeShadow(n,y,L,_,X,ge,K),n.renderBufferDirect(_,null,X,ge,y,K),y.onAfterShadow(n,y,L,_,X,ge,K)}}}else if(Q.visible){const k=C(y,Q,b,U);y.onBeforeShadow(n,y,L,_,X,k,null),n.renderBufferDirect(_,null,X,k,y,null),y.onAfterShadow(n,y,L,_,X,k,null)}}const I=y.children;for(let X=0,Q=I.length;X<Q;X++)M(I[X],L,_,b,U)}function A(y){y.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],U=y.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function GS(n,e){function t(){let F=!1;const xe=new yt;let ne=null;const Se=new yt(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,se,Fe,Ue,bt){bt===!0&&(Ce*=Ue,se*=Ue,Fe*=Ue),xe.set(Ce,se,Fe,Ue),Se.equals(xe)===!1&&(n.clearColor(Ce,se,Fe,Ue),Se.copy(xe))},reset:function(){F=!1,ne=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,ne=null,Se=null,Ce=null;return{setReversed:function(se){if(xe!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=se;const Ue=Ce;Ce=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(se){se?ue(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(se){ne!==se&&!F&&(n.depthMask(se),ne=se)},setFunc:function(se){if(xe&&(se=S_[se]),Se!==se){switch(se){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=se}},setLocked:function(se){F=se},setClear:function(se){Ce!==se&&(Ce=se,xe&&(se=1-se),n.clearDepth(se))},reset:function(){F=!1,ne=null,Se=null,Ce=null,xe=!1}}}function r(){let F=!1,xe=null,ne=null,Se=null,Ce=null,se=null,Fe=null,Ue=null,bt=null;return{setTest:function(_t){F||(_t?ue(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(_t){xe!==_t&&!F&&(n.stencilMask(_t),xe=_t)},setFunc:function(_t,Tn,An){(ne!==_t||Se!==Tn||Ce!==An)&&(n.stencilFunc(_t,Tn,An),ne=_t,Se=Tn,Ce=An)},setOp:function(_t,Tn,An){(se!==_t||Fe!==Tn||Ue!==An)&&(n.stencilOp(_t,Tn,An),se=_t,Fe=Tn,Ue=An)},setLocked:function(_t){F=_t},setClear:function(_t){bt!==_t&&(n.clearStencil(_t),bt=_t)},reset:function(){F=!1,xe=null,ne=null,Se=null,Ce=null,se=null,Fe=null,Ue=null,bt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,x=[],S=null,g=!1,h=null,w=null,C=null,M=null,A=null,y=null,L=null,_=new lt(0,0,0),b=0,U=!1,D=null,I=null,X=null,Q=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ae)[1]),B=K>=1):ae.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),B=K>=2);let ge=null,_e={};const be=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),ze=new yt().fromArray(be),Je=new yt().fromArray(we);function ee(F,xe,ne,Se){const Ce=new Uint8Array(4),se=n.createTexture();n.bindTexture(F,se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ne;Fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return se}const me={};me[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Cr),ie(!1),fe(Mu),ue(n.CULL_FACE),j(Qn);function ue(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ge(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Xe(F,xe){return f[F]!==xe?(n.bindFramebuffer(F,xe),f[F]=xe,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function He(F,xe){let ne=x,Se=!1;if(F){ne=p.get(xe),ne===void 0&&(ne=[],p.set(xe,ne));const Ce=F.textures;if(ne.length!==Ce.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Fe=Ce.length;se<Fe;se++)ne[se]=n.COLOR_ATTACHMENT0+se;ne.length=Ce.length,Se=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ne)}function R(F){return S!==F?(n.useProgram(F),S=F,!0):!1}const P={[zi]:n.FUNC_ADD,[Wg]:n.FUNC_SUBTRACT,[Xg]:n.FUNC_REVERSE_SUBTRACT};P[qg]=n.MIN,P[$g]=n.MAX;const W={[Yg]:n.ZERO,[Kg]:n.ONE,[Zg]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[n_]:n.SRC_ALPHA_SATURATE,[e_]:n.DST_COLOR,[Qg]:n.DST_ALPHA,[Jg]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[t_]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[i_]:n.CONSTANT_COLOR,[r_]:n.ONE_MINUS_CONSTANT_COLOR,[s_]:n.CONSTANT_ALPHA,[a_]:n.ONE_MINUS_CONSTANT_ALPHA};function j(F,xe,ne,Se,Ce,se,Fe,Ue,bt,_t){if(F===Qn){g===!0&&(Ge(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),F!==Gg){if(F!==h||_t!==U){if((w!==zi||A!==zi)&&(n.blendEquation(n.FUNC_ADD),w=zi,A=zi),_t)switch(F){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _a:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",F);break}else switch(F){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Su:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",F);break}C=null,M=null,y=null,L=null,_.set(0,0,0),b=0,h=F,U=_t}return}Ce=Ce||xe,se=se||ne,Fe=Fe||Se,(xe!==w||Ce!==A)&&(n.blendEquationSeparate(P[xe],P[Ce]),w=xe,A=Ce),(ne!==C||Se!==M||se!==y||Fe!==L)&&(n.blendFuncSeparate(W[ne],W[Se],W[se],W[Fe]),C=ne,M=Se,y=se,L=Fe),(Ue.equals(_)===!1||bt!==b)&&(n.blendColor(Ue.r,Ue.g,Ue.b,bt),_.copy(Ue),b=bt),h=F,U=!1}function Z(F,xe){F.side===Zn?Ge(n.CULL_FACE):ue(n.CULL_FACE);let ne=F.side===jt;xe&&(ne=!ne),ie(ne),F.blending===Er&&F.transparent===!1?j(Qn):j(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function fe(F){F!==zg?(ue(n.CULL_FACE),F!==I&&(F===Mu?n.cullFace(n.BACK):F===Hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),I=F}function le(F){F!==X&&(B&&n.lineWidth(F),X=F)}function oe(F,xe,ne){F?(ue(n.POLYGON_OFFSET_FILL),(Q!==xe||k!==ne)&&(Q=xe,k=ne,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,ne))):Ge(n.POLYGON_OFFSET_FILL)}function re(F){F?ue(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function Te(F){F===void 0&&(F=n.TEXTURE0+Y-1),ge!==F&&(n.activeTexture(F),ge=F)}function T(F,xe,ne){ne===void 0&&(ge===null?ne=n.TEXTURE0+Y-1:ne=ge);let Se=_e[ne];Se===void 0&&(Se={type:void 0,texture:void 0},_e[ne]=Se),(Se.type!==F||Se.texture!==xe)&&(ge!==ne&&(n.activeTexture(ne),ge=ne),n.bindTexture(F,xe||me[F]),Se.type=F,Se.texture=xe)}function Pe(){const F=_e[ge];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ee(){try{n.compressedTexImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function m(){try{n.texSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function N(){try{n.texSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function pe(){try{n.texStorage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function J(){try{n.texImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function te(){try{n.texImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function de(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Le(F,xe){d[F]!==xe&&(n.pixelStorei(F,xe),d[F]=xe)}function ve(F){ze.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Me(F){Je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Je.copy(F))}function ke(F,xe){let ne=c.get(xe);ne===void 0&&(ne=new WeakMap,c.set(xe,ne));let Se=ne.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(xe,F.name),ne.set(F,Se))}function Ve(F,xe){const Se=c.get(xe).get(F);l.get(xe)!==Se&&(n.uniformBlockBinding(xe,Se,F.__bindingPointIndex),l.set(xe,Se))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ge=null,_e={},f={},p=new WeakMap,x=[],S=null,g=!1,h=null,w=null,C=null,M=null,A=null,y=null,L=null,_=new lt(0,0,0),b=0,U=!1,D=null,I=null,X=null,Q=null,k=null,ze.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ge,bindFramebuffer:Xe,drawBuffers:He,useProgram:R,setBlending:j,setMaterial:Z,setFlipSided:ie,setCullFace:fe,setLineWidth:le,setPolygonOffset:oe,setScissorTest:re,activeTexture:Te,bindTexture:T,unbindTexture:Pe,compressedTexImage2D:Ee,compressedTexImage3D:E,texImage2D:J,texImage3D:te,pixelStorei:Le,getParameter:de,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:ce,texStorage3D:pe,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:z,compressedTexSubImage3D:$,scissor:ve,viewport:Me,reset:Ye}}function WS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,m){return x?new OffscreenCanvas(E,m):Ea("canvas")}function g(E,m,N){let z=1;const $=Ee(E);if(($.width>N||$.height>N)&&(z=N/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(z*$.width),pe=Math.floor(z*$.height);f===void 0&&(f=S(ce,pe));const J=m?S(ce,pe):f;return J.width=ce,J.height=pe,J.getContext("2d").drawImage(E,0,0,ce,pe),We("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+pe+")."),J}else return"data"in E&&We("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function h(E){return E.generateMipmaps}function w(E){n.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,m,N,z,$,ce=!1){if(E!==null){if(n[E]!==void 0)return n[E];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;z&&(pe=e.get("EXT_texture_norm16"),pe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=m;if(m===n.RED&&(N===n.FLOAT&&(J=n.R32F),N===n.HALF_FLOAT&&(J=n.R16F),N===n.UNSIGNED_BYTE&&(J=n.R8),N===n.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),N===n.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),m===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.R8UI),N===n.UNSIGNED_SHORT&&(J=n.R16UI),N===n.UNSIGNED_INT&&(J=n.R32UI),N===n.BYTE&&(J=n.R8I),N===n.SHORT&&(J=n.R16I),N===n.INT&&(J=n.R32I)),m===n.RG&&(N===n.FLOAT&&(J=n.RG32F),N===n.HALF_FLOAT&&(J=n.RG16F),N===n.UNSIGNED_BYTE&&(J=n.RG8),N===n.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),N===n.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RG8UI),N===n.UNSIGNED_SHORT&&(J=n.RG16UI),N===n.UNSIGNED_INT&&(J=n.RG32UI),N===n.BYTE&&(J=n.RG8I),N===n.SHORT&&(J=n.RG16I),N===n.INT&&(J=n.RG32I)),m===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RGB8UI),N===n.UNSIGNED_SHORT&&(J=n.RGB16UI),N===n.UNSIGNED_INT&&(J=n.RGB32UI),N===n.BYTE&&(J=n.RGB8I),N===n.SHORT&&(J=n.RGB16I),N===n.INT&&(J=n.RGB32I)),m===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),N===n.UNSIGNED_INT&&(J=n.RGBA32UI),N===n.BYTE&&(J=n.RGBA8I),N===n.SHORT&&(J=n.RGBA16I),N===n.INT&&(J=n.RGBA32I)),m===n.RGB&&(N===n.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),N===n.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),m===n.RGBA){const te=ce?Sa:it.getTransfer($);N===n.FLOAT&&(J=n.RGBA32F),N===n.HALF_FLOAT&&(J=n.RGBA16F),N===n.UNSIGNED_BYTE&&(J=te===ht?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),N===n.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(E,m){let N;return E?m===null||m===zn||m===ds?N=n.DEPTH24_STENCIL8:m===Nn?N=n.DEPTH32F_STENCIL8:m===fs&&(N=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===zn||m===ds?N=n.DEPTH_COMPONENT24:m===Nn?N=n.DEPTH_COMPONENT32F:m===fs&&(N=n.DEPTH_COMPONENT16),N}function y(E,m){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==Gt?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function L(E){const m=E.target;m.removeEventListener("dispose",L),b(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function _(E){const m=E.target;m.removeEventListener("dispose",_),D(m)}function b(E){const m=i.get(E);if(m.__webglInit===void 0)return;const N=E.source,z=p.get(N);if(z){const $=z[m.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(E),Object.keys(z).length===0&&p.delete(N)}i.remove(E)}function U(E){const m=i.get(E);n.deleteTexture(m.__webglTexture);const N=E.source,z=p.get(N);delete z[m.__cacheKey],a.memory.textures--}function D(E){const m=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(m.__webglFramebuffer[z]))for(let $=0;$<m.__webglFramebuffer[z].length;$++)n.deleteFramebuffer(m.__webglFramebuffer[z][$]);else n.deleteFramebuffer(m.__webglFramebuffer[z]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[z])}else{if(Array.isArray(m.__webglFramebuffer))for(let z=0;z<m.__webglFramebuffer.length;z++)n.deleteFramebuffer(m.__webglFramebuffer[z]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let z=0;z<m.__webglColorRenderbuffer.length;z++)m.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[z]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const N=E.textures;for(let z=0,$=N.length;z<$;z++){const ce=i.get(N[z]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(N[z])}i.remove(E)}let I=0;function X(){I=0}function Q(){return I}function k(E){I=E}function Y(){const E=I;return E>=r.maxTextures&&We("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function B(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function K(E,m){const N=i.get(E);if(E.isVideoTexture&&T(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const z=E.image;if(z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(N,E,m);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+m)}function ae(E,m){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ge(N,E,m);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+m)}function ge(E,m){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ge(N,E,m);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+m)}function _e(E,m){const N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Xe(N,E,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+m)}const be={[ol]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},we={[Ft]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},ze={[d_]:n.NEVER,[__]:n.ALWAYS,[h_]:n.LESS,[Mc]:n.LEQUAL,[p_]:n.EQUAL,[Sc]:n.GEQUAL,[m_]:n.GREATER,[g_]:n.NOTEQUAL};function Je(E,m){if(m.type===Nn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Gt||m.magFilter===ao||m.magFilter===ws||m.magFilter===Vi||m.minFilter===Gt||m.minFilter===ao||m.minFilter===ws||m.minFilter===Vi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,be[m.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,be[m.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,be[m.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,we[m.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,we[m.minFilter]),m.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ze[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ft||m.minFilter!==ws&&m.minFilter!==Vi||m.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ee(E,m){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",L));const z=m.source;let $=p.get(z);$===void 0&&($={},p.set(z,$));const ce=B(m);if(ce!==E.__cacheKey){$[ce]===void 0&&($[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[ce].usedTimes++;const pe=$[E.__cacheKey];pe!==void 0&&($[E.__cacheKey].usedTimes--,pe.usedTimes===0&&U(m)),E.__cacheKey=ce,E.__webglTexture=$[ce].texture}return N}function me(E,m,N){return Math.floor(Math.floor(E/N)/m)}function ue(E,m,N,z){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,N,z,m.data);else{ce.sort((Le,ve)=>Le.start-ve.start);let pe=0;for(let Le=1;Le<ce.length;Le++){const ve=ce[pe],Me=ce[Le],ke=ve.start+ve.count,Ve=me(Me.start,m.width,4),Ye=me(ve.start,m.width,4);Me.start<=ke+1&&Ve===Ye&&me(Me.start+Me.count-1,m.width,4)===Ve?ve.count=Math.max(ve.count,Me.start+Me.count-ve.start):(++pe,ce[pe]=Me)}ce.length=pe+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Le=0,ve=ce.length;Le<ve;Le++){const Me=ce[Le],ke=Math.floor(Me.start/4),Ve=Math.ceil(Me.count/4),Ye=ke%m.width,F=Math.floor(ke/m.width),xe=Ve,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ye,F,xe,ne,N,z,m.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Ge(E,m,N){let z=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(z=n.TEXTURE_3D);const $=ee(E,m),ce=m.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+N);const pe=i.get(ce);if(ce.version!==pe.__version||$===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const ne=it.getPrimaries(it.workingColorSpace),Se=m.colorSpace===Si?null:it.getPrimaries(m.colorSpace),Ce=m.colorSpace===Si||ne===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let te=g(m.image,!1,r.maxTextureSize);te=Pe(m,te);const de=s.convert(m.format,m.colorSpace),Le=s.convert(m.type);let ve=M(m.internalFormat,de,Le,m.normalized,m.colorSpace,m.isVideoTexture);Je(z,m);let Me;const ke=m.mipmaps,Ve=m.isVideoTexture!==!0,Ye=pe.__version===void 0||$===!0,F=ce.dataReady,xe=y(m,te);if(m.isDepthTexture)ve=A(m.format===Gi,m.type),Ye&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ve,te.width,te.height,0,de,Le,null));else if(m.isDataTexture)if(ke.length>0){Ve&&Ye&&t.texStorage2D(n.TEXTURE_2D,xe,ve,ke[0].width,ke[0].height);for(let ne=0,Se=ke.length;ne<Se;ne++)Me=ke[ne],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,de,Le,Me.data):t.texImage2D(n.TEXTURE_2D,ne,ve,Me.width,Me.height,0,de,Le,Me.data);m.generateMipmaps=!1}else Ve?(Ye&&t.texStorage2D(n.TEXTURE_2D,xe,ve,te.width,te.height),F&&ue(m,te,de,Le)):t.texImage2D(n.TEXTURE_2D,0,ve,te.width,te.height,0,de,Le,te.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ve&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,ke[0].width,ke[0].height,te.depth);for(let ne=0,Se=ke.length;ne<Se;ne++)if(Me=ke[ne],m.format!==Mn)if(de!==null)if(Ve){if(F)if(m.layerUpdates.size>0){const Ce=ef(Me.width,Me.height,m.format,m.type);for(const se of m.layerUpdates){const Fe=Me.data.subarray(se*Ce/Me.data.BYTES_PER_ELEMENT,(se+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,se,Me.width,Me.height,1,de,Fe)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,te.depth,de,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,ve,Me.width,Me.height,te.depth,0,Me.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,te.depth,de,Le,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,ve,Me.width,Me.height,te.depth,0,de,Le,Me.data)}else{Ve&&Ye&&t.texStorage2D(n.TEXTURE_2D,xe,ve,ke[0].width,ke[0].height);for(let ne=0,Se=ke.length;ne<Se;ne++)Me=ke[ne],m.format!==Mn?de!==null?Ve?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,ve,Me.width,Me.height,0,Me.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,de,Le,Me.data):t.texImage2D(n.TEXTURE_2D,ne,ve,Me.width,Me.height,0,de,Le,Me.data)}else if(m.isDataArrayTexture)if(Ve){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,te.width,te.height,te.depth),F)if(m.layerUpdates.size>0){const ne=ef(te.width,te.height,m.format,m.type);for(const Se of m.layerUpdates){const Ce=te.data.subarray(Se*ne/te.data.BYTES_PER_ELEMENT,(Se+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,te.width,te.height,1,de,Le,Ce)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,de,Le,te.data);else if(m.isData3DTexture)Ve?(Ye&&t.texStorage3D(n.TEXTURE_3D,xe,ve,te.width,te.height,te.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)):t.texImage3D(n.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,de,Le,te.data);else if(m.isFramebufferTexture){if(Ye)if(Ve)t.texStorage2D(n.TEXTURE_2D,xe,ve,te.width,te.height);else{let ne=te.width,Se=te.height;for(let Ce=0;Ce<xe;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,ve,ne,Se,0,de,Le,null),ne>>=1,Se>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),d.add(m),ne.onpaint=Se=>{const Ce=Se.changedElements;for(const se of d)Ce.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const Ce=n.RGBA,se=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,se,Fe,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ve&&Ye){const ne=Ee(ke[0]);t.texStorage2D(n.TEXTURE_2D,xe,ve,ne.width,ne.height)}for(let ne=0,Se=ke.length;ne<Se;ne++)Me=ke[ne],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de,Le,Me):t.texImage2D(n.TEXTURE_2D,ne,ve,de,Le,Me);m.generateMipmaps=!1}else if(Ve){if(Ye){const ne=Ee(te);t.texStorage2D(n.TEXTURE_2D,xe,ve,ne.width,ne.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Le,te)}else t.texImage2D(n.TEXTURE_2D,0,ve,de,Le,te);h(m)&&w(z),pe.__version=ce.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Xe(E,m,N){if(m.image.length!==6)return;const z=ee(E,m),$=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const ce=i.get($);if($.version!==ce.__version||z===!0){t.activeTexture(n.TEXTURE0+N);const pe=it.getPrimaries(it.workingColorSpace),J=m.colorSpace===Si?null:it.getPrimaries(m.colorSpace),te=m.colorSpace===Si||pe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const de=m.isCompressedTexture||m.image[0].isCompressedTexture,Le=m.image[0]&&m.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!de&&!Le?ve[se]=g(m.image[se],!0,r.maxCubemapSize):ve[se]=Le?m.image[se].image:m.image[se],ve[se]=Pe(m,ve[se]);const Me=ve[0],ke=s.convert(m.format,m.colorSpace),Ve=s.convert(m.type),Ye=M(m.internalFormat,ke,Ve,m.normalized,m.colorSpace),F=m.isVideoTexture!==!0,xe=ce.__version===void 0||z===!0,ne=$.dataReady;let Se=y(m,Me);Je(n.TEXTURE_CUBE_MAP,m);let Ce;if(de){F&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ye,Me.width,Me.height);for(let se=0;se<6;se++){Ce=ve[se].mipmaps;for(let Fe=0;Fe<Ce.length;Fe++){const Ue=Ce[Fe];m.format!==Mn?ke!==null?F?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Ue.width,Ue.height,ke,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ye,Ue.width,Ue.height,0,Ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Ue.width,Ue.height,ke,Ve,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ye,Ue.width,Ue.height,0,ke,Ve,Ue.data)}}}else{if(Ce=m.mipmaps,F&&xe){Ce.length>0&&Se++;const se=Ee(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ye,se.width,se.height)}for(let se=0;se<6;se++)if(Le){F?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,ke,Ve,ve[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,ve[se].width,ve[se].height,0,ke,Ve,ve[se].data);for(let Fe=0;Fe<Ce.length;Fe++){const bt=Ce[Fe].image[se].image;F?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,bt.width,bt.height,ke,Ve,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ye,bt.width,bt.height,0,ke,Ve,bt.data)}}else{F?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,Ve,ve[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,ke,Ve,ve[se]);for(let Fe=0;Fe<Ce.length;Fe++){const Ue=Ce[Fe];F?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,ke,Ve,Ue.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ye,ke,Ve,Ue.image[se])}}}h(m)&&w(n.TEXTURE_CUBE_MAP),ce.__version=$.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function He(E,m,N,z,$,ce){const pe=s.convert(N.format,N.colorSpace),J=s.convert(N.type),te=M(N.internalFormat,pe,J,N.normalized,N.colorSpace),de=i.get(m),Le=i.get(N);if(Le.__renderTarget=m,!de.__hasExternalTextures){const ve=Math.max(1,m.width>>ce),Me=Math.max(1,m.height>>ce);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ce,te,ve,Me,m.depth,0,pe,J,null):t.texImage2D($,ce,te,ve,Me,0,pe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Te(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,$,Le.__webglTexture,0,re(m)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,$,Le.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(E,m,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),m.depthBuffer){const z=m.depthTexture,$=z&&z.isDepthTexture?z.type:null,ce=A(m.stencilBuffer,$),pe=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(m),ce,m.width,m.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(m),ce,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,ce,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{const z=m.textures;for(let $=0;$<z.length;$++){const ce=z[$],pe=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),te=M(ce.internalFormat,pe,J,ce.normalized,ce.colorSpace);Te(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(m),te,m.width,m.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(m),te,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,te,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(E,m,N){const z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(m.depthTexture);if($.__renderTarget=m,(!$.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),z){if($.__webglInit===void 0&&($.__webglInit=!0,m.depthTexture.addEventListener("dispose",L)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Je(n.TEXTURE_CUBE_MAP,m.depthTexture);const de=s.convert(m.depthTexture.format),Le=s.convert(m.depthTexture.type);let ve;m.depthTexture.format===ii?ve=n.DEPTH_COMPONENT24:m.depthTexture.format===Gi&&(ve=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ve,m.width,m.height,0,de,Le,null)}}else K(m.depthTexture,0);const ce=$.__webglTexture,pe=re(m),J=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,te=m.depthTexture.format===Gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ii)Te(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ce,0);else if(m.depthTexture.format===Gi)Te(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(E){const m=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const z=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),z){const $=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),m.__depthDisposeCallback=$}m.__boundDepthTexture=z}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let z=0;z<6;z++)P(m.__webglFramebuffer[z],E,z);else{const z=E.texture.mipmaps;z&&z.length>0?P(m.__webglFramebuffer[0],E,0):P(m.__webglFramebuffer,E,0)}else if(N){m.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[z]),m.__webglDepthbuffer[z]===void 0)m.__webglDepthbuffer[z]=n.createRenderbuffer(),R(m.__webglDepthbuffer[z],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=m.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ce)}}else{const z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),R(m.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(E,m,N){const z=i.get(E);m!==void 0&&He(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&W(E)}function Z(E){const m=E.texture,N=i.get(E),z=i.get(m);E.addEventListener("dispose",_);const $=E.textures,ce=E.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=m.version,a.memory.textures++),ce){N.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[J]=[];for(let te=0;te<m.mipmaps.length;te++)N.__webglFramebuffer[J][te]=n.createFramebuffer()}else N.__webglFramebuffer[J]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)N.__webglFramebuffer[J]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)for(let J=0,te=$.length;J<te;J++){const de=i.get($[J]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Te(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const te=$[J];N.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[J]);const de=s.convert(te.format,te.colorSpace),Le=s.convert(te.type),ve=M(te.internalFormat,de,Le,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),Me=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ve,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,N.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),R(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Je(n.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let te=0;te<m.mipmaps.length;te++)He(N.__webglFramebuffer[J][te],E,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else He(N.__webglFramebuffer[J],E,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(m)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,te=$.length;J<te;J++){const de=$[J],Le=i.get(de);let ve=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Le.__webglTexture),Je(ve,de),He(N.__webglFramebuffer,E,de,n.COLOR_ATTACHMENT0+J,ve,0),h(de)&&w(ve)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),Je(J,m),m.mipmaps&&m.mipmaps.length>0)for(let te=0;te<m.mipmaps.length;te++)He(N.__webglFramebuffer[te],E,m,n.COLOR_ATTACHMENT0,J,te);else He(N.__webglFramebuffer,E,m,n.COLOR_ATTACHMENT0,J,0);h(m)&&w(J),t.unbindTexture()}E.depthBuffer&&W(E)}function ie(E){const m=E.textures;for(let N=0,z=m.length;N<z;N++){const $=m[N];if(h($)){const ce=C(E),pe=i.get($).__webglTexture;t.bindTexture(ce,pe),w(ce),t.unbindTexture()}}}const fe=[],le=[];function oe(E){if(E.samples>0){if(Te(E)===!1){const m=E.textures,N=E.width,z=E.height;let $=n.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),J=m.length>1;if(J)for(let de=0;de<m.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let de=0;de<m.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const Le=i.get(m[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,N,z,0,0,N,z,$,n.NEAREST),l===!0&&(fe.length=0,le.length=0,fe.push(n.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(fe.push(ce),le.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<m.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const Le=i.get(m[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const m=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function re(E){return Math.min(r.maxSamples,E.samples)}function Te(E){const m=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function T(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Pe(E,m){const N=E.colorSpace,z=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ma&&N!==Si&&(it.getTransfer(N)===ht?(z!==Mn||$!==hn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",N)),m}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=Q,this.setTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=ae,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=j,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XS(n,e){function t(i,r=Si){let s;const a=it.getTransfer(r);if(i===hn)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qd)return n.BYTE;if(i===$d)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===Zd)return n.ALPHA;if(i===Jd)return n.RGB;if(i===Mn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===Qd)return n.RED;if(i===_c)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===xc)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===sa||i===aa||i===oa||i===la)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===ul||i===fl||i===dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===pl||i===ml||i===gl||i===_l||i===xa||i===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hl||i===pl)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ml)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gl)return s.COMPRESSED_R11_EAC;if(i===_l)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return s.COMPRESSED_RG11_EAC;if(i===xl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vl||i===Ml||i===Sl||i===bl||i===El||i===yl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Ul||i===Nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Il)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===Ol||i===va||i===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$S=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ch(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:qS,fragmentShader:$S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends Zi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",g=new YS,h={},w=t.getContextAttributes();let C=null,M=null;const A=[],y=[],L=new ft;let _=null;const b=new dn;b.viewport=new yt;const U=new dn;U.viewport=new yt;const D=[b,U],I=new s0;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=A[ee];return me===void 0&&(me=new mo,A[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=A[ee];return me===void 0&&(me=new mo,A[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=A[ee];return me===void 0&&(me=new mo,A[ee]=me),me.getHandSpace()};function k(ee){const me=y.indexOf(ee.inputSource);if(me===-1)return;const ue=A[me];ue!==void 0&&(ue.update(ee.inputSource,ee.frame,c||a),ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",B);for(let ee=0;ee<A.length;ee++){const me=y[ee];me!==null&&(y[ee]=null,A[ee].disconnect(me))}X=null,Q=null,g.reset();for(const ee in h)delete h[ee];e.setRenderTarget(C),p=null,f=null,d=null,r=null,M=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ge=null,Xe=null;w.depth&&(Xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=w.stencil?Gi:ii,Ge=w.stencil?ds:zn);const He={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new kn(f.textureWidth,f.textureHeight,{format:Mn,type:hn,depthTexture:new Lr(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new kn(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(ee){for(let me=0;me<ee.removed.length;me++){const ue=ee.removed[me],Ge=y.indexOf(ue);Ge>=0&&(y[Ge]=null,A[Ge].disconnect(ue))}for(let me=0;me<ee.added.length;me++){const ue=ee.added[me];let Ge=y.indexOf(ue);if(Ge===-1){for(let He=0;He<A.length;He++)if(He>=y.length){y.push(ue),Ge=He;break}else if(y[He]===null){y[He]=ue,Ge=He;break}if(Ge===-1)break}const Xe=A[Ge];Xe&&Xe.connect(ue)}}const K=new H,ae=new H;function ge(ee,me,ue){K.setFromMatrixPosition(me.matrixWorld),ae.setFromMatrixPosition(ue.matrixWorld);const Ge=K.distanceTo(ae),Xe=me.projectionMatrix.elements,He=ue.projectionMatrix.elements,R=Xe[14]/(Xe[10]-1),P=Xe[14]/(Xe[10]+1),W=(Xe[9]+1)/Xe[5],j=(Xe[9]-1)/Xe[5],Z=(Xe[8]-1)/Xe[0],ie=(He[8]+1)/He[0],fe=R*Z,le=R*ie,oe=Ge/(-Z+ie),re=oe*-Z;if(me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(oe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Xe[10]===-1)ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Te=R+oe,T=P+oe,Pe=fe-re,Ee=le+(Ge-re),E=W*P/T*Te,m=j*P/T*Te;ee.projectionMatrix.makePerspective(Pe,Ee,E,m,Te,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function _e(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let me=ee.near,ue=ee.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),I.near=U.near=b.near=me,I.far=U.far=b.far=ue,(X!==I.near||Q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,Q=I.far),I.layers.mask=ee.layers.mask|6,b.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Ge=ee.parent,Xe=I.cameras;_e(I,Ge);for(let He=0;He<Xe.length;He++)_e(Xe[He],Ge);Xe.length===2?ge(I,b,U):I.projectionMatrix.copy(b.projectionMatrix),be(ee,I,Ge)};function be(ee,me,ue){ue===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(ue.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=kl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(ee){return h[ee]};let we=null;function ze(ee,me){if(u=me.getViewerPose(c||a),x=me,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ge=!1;ue.length!==I.cameras.length&&(I.cameras.length=0,Ge=!0);for(let P=0;P<ue.length;P++){const W=ue[P];let j=null;if(p!==null)j=p.getViewport(W);else{const ie=d.getViewSubImage(f,W);j=ie.viewport,P===0&&(e.setRenderTargetTextures(M,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(M))}let Z=D[P];Z===void 0&&(Z=new dn,Z.layers.enable(P),Z.viewport=new yt,D[P]=Z),Z.matrix.fromArray(W.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(W.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(j.x,j.y,j.width,j.height),P===0&&(I.matrix.copy(Z.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ge===!0&&I.cameras.push(Z)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const P=d.getDepthInformation(ue[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(Xe&&Xe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<ue.length;P++){const W=ue[P].camera;if(W){let j=h[W];j||(j=new ch,h[W]=j);const Z=d.getCameraImage(W);j.sourceTexture=Z}}}}for(let ue=0;ue<A.length;ue++){const Ge=y[ue],Xe=A[ue];Ge!==null&&Xe!==void 0&&Xe.update(Ge,me,c||a)}we&&we(ee,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Je=new hh;Je.setAnimationLoop(ze),this.setAnimationLoop=function(ee){we=ee},this.dispose=function(){}}}const ZS=new Tt,Mh=new $e;Mh.set(-1,0,0,0,1,0,0,0,1);function JS(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,uh(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,w,C,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),S(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,w,C):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===jt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===jt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const w=e.get(h),C=w.envMap,M=w.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Mh),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,w,C){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*w,g.scale.value=C*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,w){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){const w=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const y=A.program;i.uniformBlockBinding(M,y)}function c(M,A){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",w));const L=A.program;i.updateUBOMapping(M,L);const _=e.render.frame;s[M.id]!==_&&(f(M),s[M.id]=_)}function u(M){const A=d();M.__bindingPointIndex=A;const y=n.createBuffer(),L=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const A=r[M.id],y=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let _=0,b=y.length;_<b;_++){const U=y[_];if(Array.isArray(U))for(let D=0,I=U.length;D<I;D++)p(U[D],_,D,L);else p(U,_,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,A,y,L){if(S(M,A,y,L)===!0){const _=M.__offset,b=M.value;if(Array.isArray(b)){let U=0;for(let D=0;D<b.length;D++){const I=b[D],X=h(I);x(I,M.__data,U),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function x(M,A,y){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,y)}function S(M,A,y,L){const _=M.value,b=A+"_"+y;if(L[b]===void 0)return typeof _=="number"||typeof _=="boolean"?L[b]=_:ArrayBuffer.isView(_)?L[b]=_.slice():L[b]=_.clone(),!0;{const U=L[b];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return L[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function g(M){const A=M.uniforms;let y=0;const L=16;for(let b=0,U=A.length;b<U;b++){const D=Array.isArray(A[b])?A[b]:[A[b]];for(let I=0,X=D.length;I<X;I++){const Q=D[I],k=Array.isArray(Q.value)?Q.value:[Q.value];for(let Y=0,B=k.length;Y<B;Y++){const K=k[Y],ae=h(K),ge=y%L,_e=ge%ae.boundary,be=ge+_e;y+=_e,be!==0&&L-be<ae.storage&&(y+=L-be),Q.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=y,y+=ae.storage}}}const _=y%L;return _>0&&(y+=L-_),M.__size=y,M.__cache={},this}function h(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):We("WebGLRenderer: Unsupported uniform value type.",M),A}function w(M){const A=M.target;A.removeEventListener("dispose",w);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function C(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:C}}const jS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function eb(){return Pn===null&&(Pn=new V_(jS,16,16,$i,ni),Pn.name="DFG_LUT",Pn.minFilter=Gt,Pn.magFilter=Gt,Pn.wrapS=Jn,Pn.wrapT=Jn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class tb{constructor(e={}){const{canvas:t=v_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=hn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=p,g=new Set([vc,xc,_c]),h=new Set([hn,zn,fs,ds,mc,gc]),w=new Uint32Array(4),C=new Int32Array(4),M=new H;let A=null,y=null;const L=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let D=!1,I=null,X=null,Q=null,k=null;this._outputColorSpace=fn;let Y=0,B=0,K=null,ae=-1,ge=null;const _e=new yt,be=new yt;let we=null;const ze=new lt(0);let Je=0,ee=t.width,me=t.height,ue=1,Ge=null,Xe=null;const He=new yt(0,0,ee,me),R=new yt(0,0,ee,me);let P=!1;const W=new ah;let j=!1,Z=!1;const ie=new Tt,fe=new H,le=new yt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Te(){return K===null?ue:1}let T=i;function Pe(v,O){return t.getContext(v,O)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Tn,!1),T===null){const O="webgl2";if(T=Pe(O,v),T===null)throw Pe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw ot("WebGLRenderer: "+v.message),v}let Ee,E,m,N,z,$,ce,pe,J,te,de,Le,ve,Me,ke,Ve,Ye,F,xe,ne,Se,Ce,se;function Fe(){Ee=new eM(T),Ee.init(),Se=new XS(T,Ee),E=new qv(T,Ee,e,Se),m=new GS(T,Ee),E.reversedDepthBuffer&&f&&m.buffers.depth.setReversed(!0),X=T.createFramebuffer(),Q=T.createFramebuffer(),k=T.createFramebuffer(),N=new iM(T),z=new CS,$=new WS(T,Ee,m,z,E,Se,N),ce=new jv(U),pe=new o0(T),Ce=new Wv(T,pe),J=new tM(T,pe,N,Ce),te=new sM(T,J,pe,Ce,N),F=new rM(T,E,$),ke=new $v(z),de=new RS(U,ce,Ee,E,Ce,ke),Le=new JS(U,z),ve=new LS,Me=new OS(Ee),Ye=new Gv(U,ce,m,te,x,l),Ve=new VS(U,te,E),se=new QS(T,N,E,m),xe=new Xv(T,Ee,N),ne=new nM(T,Ee,N),N.programs=de.programs,U.capabilities=E,U.extensions=Ee,U.properties=z,U.renderLists=ve,U.shadowMap=Ve,U.state=m,U.info=N}Fe(),S!==hn&&(b=new oM(S,t.width,t.height,o,r,s));const Ue=new KS(U,T);this.xr=Ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=Ee.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ee.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(v){v!==void 0&&(ue=v,this.setSize(ee,me,!1))},this.getSize=function(v){return v.set(ee,me)},this.setSize=function(v,O,q=!0){if(Ue.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=v,me=O,t.width=Math.floor(v*ue),t.height=Math.floor(O*ue),q===!0&&(t.style.width=v+"px",t.style.height=O+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(ee*ue,me*ue).floor()},this.setDrawingBufferSize=function(v,O,q){ee=v,me=O,ue=q,t.width=Math.floor(v*q),t.height=Math.floor(O*q),this.setViewport(0,0,v,O)},this.setEffects=function(v){if(S===hn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let O=0;O<v.length;O++)if(v[O].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(_e)},this.getViewport=function(v){return v.copy(He)},this.setViewport=function(v,O,q,V){v.isVector4?He.set(v.x,v.y,v.z,v.w):He.set(v,O,q,V),m.viewport(_e.copy(He).multiplyScalar(ue).round())},this.getScissor=function(v){return v.copy(R)},this.setScissor=function(v,O,q,V){v.isVector4?R.set(v.x,v.y,v.z,v.w):R.set(v,O,q,V),m.scissor(be.copy(R).multiplyScalar(ue).round())},this.getScissorTest=function(){return P},this.setScissorTest=function(v){m.setScissorTest(P=v)},this.setOpaqueSort=function(v){Ge=v},this.setTransparentSort=function(v){Xe=v},this.getClearColor=function(v){return v.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(v=!0,O=!0,q=!0){let V=0;if(v){let G=!1;if(K!==null){const Re=K.texture.format;G=g.has(Re)}if(G){const Re=K.texture.type,Ie=h.has(Re),Ae=Ye.getClearColor(),Ne=Ye.getClearAlpha(),Oe=Ae.r,Ke=Ae.g,et=Ae.b;Ie?(w[0]=Oe,w[1]=Ke,w[2]=et,w[3]=Ne,T.clearBufferuiv(T.COLOR,0,w)):(C[0]=Oe,C[1]=Ke,C[2]=et,C[3]=Ne,T.clearBufferiv(T.COLOR,0,C))}else V|=T.COLOR_BUFFER_BIT}O&&(V|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),Ye.dispose(),ve.dispose(),Me.dispose(),z.dispose(),ce.dispose(),te.dispose(),Ce.dispose(),se.dispose(),de.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Pc),Ue.removeEventListener("sessionend",Lc),Ri.stop()};function bt(v){v.preventDefault(),Cu("WebGLRenderer: Context Lost."),D=!0}function _t(){Cu("WebGLRenderer: Context Restored."),D=!1;const v=N.autoReset,O=Ve.enabled,q=Ve.autoUpdate,V=Ve.needsUpdate,G=Ve.type;Fe(),N.autoReset=v,Ve.enabled=O,Ve.autoUpdate=q,Ve.needsUpdate=V,Ve.type=G}function Tn(v){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function An(v){const O=v.target;O.removeEventListener("dispose",An),bh(O)}function bh(v){Eh(v),z.remove(v)}function Eh(v){const O=z.get(v).programs;O!==void 0&&(O.forEach(function(q){de.releaseProgram(q)}),v.isShaderMaterial&&de.releaseShaderCache(v))}this.renderBufferDirect=function(v,O,q,V,G,Re){O===null&&(O=oe);const Ie=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ae=Ah(v,O,q,V,G);m.setMaterial(V,Ie);let Ne=q.index,Oe=1;if(V.wireframe===!0){if(Ne=J.getWireframeAttribute(q),Ne===void 0)return;Oe=2}const Ke=q.drawRange,et=q.attributes.position;let Be=Ke.start*Oe,pt=(Ke.start+Ke.count)*Oe;Re!==null&&(Be=Math.max(Be,Re.start*Oe),pt=Math.min(pt,(Re.start+Re.count)*Oe)),Ne!==null?(Be=Math.max(Be,0),pt=Math.min(pt,Ne.count)):et!=null&&(Be=Math.max(Be,0),pt=Math.min(pt,et.count));const At=pt-Be;if(At<0||At===1/0)return;Ce.setup(G,V,Ae,q,Ne);let Et,mt=xe;if(Ne!==null&&(Et=pe.get(Ne),mt=ne,mt.setIndex(Et)),G.isMesh)V.wireframe===!0?(m.setLineWidth(V.wireframeLinewidth*Te()),mt.setMode(T.LINES)):mt.setMode(T.TRIANGLES);else if(G.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),m.setLineWidth(Ot*Te()),G.isLineSegments?mt.setMode(T.LINES):G.isLineLoop?mt.setMode(T.LINE_LOOP):mt.setMode(T.LINE_STRIP)}else G.isPoints?mt.setMode(T.POINTS):G.isSprite&&mt.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,De=G._multiDrawCounts,tn=G._multiDrawCount,at=Ne?pe.get(Ne).bytesPerElement:1,ln=z.get(V).currentProgram.getUniforms();for(let wn=0;wn<tn;wn++)ln.setValue(T,"_gl_DrawID",wn),mt.render(Ot[wn]/at,De[wn])}else if(G.isInstancedMesh)mt.renderInstances(Be,At,G.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,De=Math.min(q.instanceCount,Ot);mt.renderInstances(Be,At,De)}else mt.render(Be,At)};function Cc(v,O,q){v.transparent===!0&&v.side===Zn&&v.forceSinglePass===!1?(v.side=jt,v.needsUpdate=!0,bs(v,O,q),v.side=wi,v.needsUpdate=!0,bs(v,O,q),v.side=Zn):bs(v,O,q)}this.compile=function(v,O,q=null){q===null&&(q=v),y=Me.get(q),y.init(O),_.push(y),q.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),v!==q&&v.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const V=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Re=G.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const Ae=Re[Ie];Cc(Ae,q,G),V.add(Ae)}else Cc(Re,q,G),V.add(Re)}),y=_.pop(),V},this.compileAsync=function(v,O,q=null){const V=this.compile(v,O,q);return new Promise(G=>{function Re(){if(V.forEach(function(Ie){z.get(Ie).currentProgram.isReady()&&V.delete(Ie)}),V.size===0){G(v);return}setTimeout(Re,10)}Ee.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Va=null;function yh(v){Va&&Va(v)}function Pc(){Ri.stop()}function Lc(){Ri.start()}const Ri=new hh;Ri.setAnimationLoop(yh),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(v){Va=v,Ue.setAnimationLoop(v),v===null?Ri.stop():Ri.start()},Ue.addEventListener("sessionstart",Pc),Ue.addEventListener("sessionend",Lc),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(v,O);const q=Ue.enabled===!0&&Ue.isPresenting===!0,V=b!==null&&(K===null||q)&&b.begin(U,K);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(O),O=Ue.getCamera()),v.isScene===!0&&v.onBeforeRender(U,v,O,K),y=Me.get(v,_.length),y.init(O),y.state.textureUnits=$.getTextureUnits(),_.push(y),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(ie,Fn,O.reversedDepth),Z=this.localClippingEnabled,j=ke.init(this.clippingPlanes,Z),A=ve.get(v,L.length),A.init(),L.push(A),Ue.enabled===!0&&Ue.isPresenting===!0){const Ie=U.xr.getDepthSensingMesh();Ie!==null&&Ga(Ie,O,-1/0,U.sortObjects)}Ga(v,O,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(Ge,Xe,O.reversedDepth),re=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,re&&Ye.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&ke.beginShadows();const G=y.state.shadowsArray;if(Ve.render(G,v,O),j===!0&&ke.endShadows(),(V&&b.hasRenderPass())===!1){const Ie=A.opaque,Ae=A.transmissive;if(y.setupLights(),O.isArrayCamera){const Ne=O.cameras;if(Ae.length>0)for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const et=Ne[Oe];Ic(Ie,Ae,v,et)}re&&Ye.render(v);for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const et=Ne[Oe];Dc(A,v,et,et.viewport)}}else Ae.length>0&&Ic(Ie,Ae,v,O),re&&Ye.render(v),Dc(A,v,O)}K!==null&&B===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),V&&b.end(U),v.isScene===!0&&v.onAfterRender(U,v,O),Ce.resetDefaultState(),ae=-1,ge=null,_.pop(),_.length>0?(y=_[_.length-1],$.setTextureUnits(y.state.textureUnits),j===!0&&ke.setGlobalState(U.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?A=L[L.length-1]:A=null,I!==null&&I.renderEnd()};function Ga(v,O,q,V){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(O);else if(v.isLightProbeGrid)y.pushLightProbeGrid(v);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){V&&le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ie);const Ie=te.update(v),Ae=v.material;Ae.visible&&A.push(v,Ie,Ae,q,le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const Ie=te.update(v),Ae=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),le.copy(v.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),le.copy(Ie.boundingSphere.center)),le.applyMatrix4(v.matrixWorld).applyMatrix4(ie)),Array.isArray(Ae)){const Ne=Ie.groups;for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const et=Ne[Oe],Be=Ae[et.materialIndex];Be&&Be.visible&&A.push(v,Ie,Be,q,le.z,et)}}else Ae.visible&&A.push(v,Ie,Ae,q,le.z,null)}}const Re=v.children;for(let Ie=0,Ae=Re.length;Ie<Ae;Ie++)Ga(Re[Ie],O,q,V)}function Dc(v,O,q,V){const{opaque:G,transmissive:Re,transparent:Ie}=v;y.setupLightsView(q),j===!0&&ke.setGlobalState(U.clippingPlanes,q),V&&m.viewport(_e.copy(V)),G.length>0&&Ss(G,O,q),Re.length>0&&Ss(Re,O,q),Ie.length>0&&Ss(Ie,O,q),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Ic(v,O,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[V.id]===void 0){const Be=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[V.id]=new kn(1,1,{generateMipmaps:!0,type:Be?ni:hn,minFilter:Vi,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Re=y.state.transmissionRenderTarget[V.id],Ie=V.viewport||_e;Re.setSize(Ie.z*U.transmissionResolutionScale,Ie.w*U.transmissionResolutionScale);const Ae=U.getRenderTarget(),Ne=U.getActiveCubeFace(),Oe=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(ze),Je=U.getClearAlpha(),Je<1&&U.setClearColor(16777215,.5),U.clear(),re&&Ye.render(q);const Ke=U.toneMapping;U.toneMapping=Bn;const et=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),j===!0&&ke.setGlobalState(U.clippingPlanes,V),Ss(v,q,V),$.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let pt=0,At=O.length;pt<At;pt++){const Et=O[pt],{object:mt,geometry:Ot,material:De,group:tn}=Et;if(De.side===Zn&&mt.layers.test(V.layers)){const at=De.side;De.side=jt,De.needsUpdate=!0,Uc(mt,q,V,Ot,De,tn),De.side=at,De.needsUpdate=!0,Be=!0}}Be===!0&&($.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re))}U.setRenderTarget(Ae,Ne,Oe),U.setClearColor(ze,Je),et!==void 0&&(V.viewport=et),U.toneMapping=Ke}function Ss(v,O,q){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,Re=v.length;G<Re;G++){const Ie=v[G],{object:Ae,geometry:Ne,group:Oe}=Ie;let Ke=Ie.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),Ae.layers.test(q.layers)&&Uc(Ae,O,q,Ne,Ke,Oe)}}function Uc(v,O,q,V,G,Re){v.onBeforeRender(U,O,q,V,G,Re),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(U,O,q,V,v,Re),G.transparent===!0&&G.side===Zn&&G.forceSinglePass===!1?(G.side=jt,G.needsUpdate=!0,U.renderBufferDirect(q,O,V,G,v,Re),G.side=wi,G.needsUpdate=!0,U.renderBufferDirect(q,O,V,G,v,Re),G.side=Zn):U.renderBufferDirect(q,O,V,G,v,Re),v.onAfterRender(U,O,q,V,G,Re)}function bs(v,O,q){O.isScene!==!0&&(O=oe);const V=z.get(v),G=y.state.lights,Re=y.state.shadowsArray,Ie=G.state.version,Ae=de.getParameters(v,G.state,Re,O,q,y.state.lightProbeGridArray),Ne=de.getProgramCacheKey(Ae);let Oe=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const Ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=ce.get(v.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,Oe===void 0&&(v.addEventListener("dispose",An),Oe=new Map,V.programs=Oe);let et=Oe.get(Ne);if(et!==void 0){if(V.currentProgram===et&&V.lightsStateVersion===Ie)return Fc(v,Ae),et}else Ae.uniforms=de.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,q,Ae),v.onBeforeCompile(Ae,U),et=de.acquireProgram(Ae,Ne),Oe.set(Ne,et),V.uniforms=Ae.uniforms;const Be=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Be.clippingPlanes=ke.uniform),Fc(v,Ae),V.needsLights=Rh(v),V.lightsStateVersion=Ie,V.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=y.state.lightProbeGridArray.length>0,V.currentProgram=et,V.uniformsList=null,et}function Nc(v){if(v.uniformsList===null){const O=v.currentProgram.getUniforms();v.uniformsList=ca.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function Fc(v,O){const q=z.get(v);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Th(v,O){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let q=0,V=v.length;q<V;q++){const G=v[q];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function Ah(v,O,q,V,G){O.isScene!==!0&&(O=oe),$.resetTextureUnits();const Re=O.fog,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Ae=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:it.workingColorSpace,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Oe=ce.get(V.envMap||Ie,Ne),Ke=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let Et=Bn;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Et=U.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=mt!==void 0?mt.length:0,De=z.get(V),tn=y.state.lights;if(j===!0&&(Z===!0||v!==ge)){const xt=v===ge&&V.id===ae;ke.setState(V,v,xt)}let at=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==tn.state.version||De.outputColorSpace!==Ae||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Oe||V.fog===!0&&De.fog!==Re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ke.numPlanes||De.numIntersection!==ke.numIntersection)||De.vertexAlphas!==Ke||De.vertexTangents!==et||De.morphTargets!==Be||De.morphNormals!==pt||De.morphColors!==At||De.toneMapping!==Et||De.morphTargetsCount!==Ot||!!De.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,De.__version=V.version);let ln=De.currentProgram;at===!0&&(ln=bs(V,O,G),I&&V.isNodeMaterial&&I.onUpdateProgram(V,ln,De));let wn=!1,oi=!1,Ji=!1;const gt=ln.getUniforms(),wt=De.uniforms;if(m.useProgram(ln.program)&&(wn=!0,oi=!0,Ji=!0),V.id!==ae&&(ae=V.id,oi=!0),De.needsLights){const xt=Th(y.state.lightProbeGridArray,G);De.lightProbeGrid!==xt&&(De.lightProbeGrid=xt,oi=!0)}if(wn||ge!==v){m.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),gt.setValue(T,"projectionMatrix",v.projectionMatrix),gt.setValue(T,"viewMatrix",v.matrixWorldInverse);const ci=gt.map.cameraPosition;ci!==void 0&&ci.setValue(T,fe.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&gt.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),ge!==v&&(ge=v,oi=!0,Ji=!0)}if(De.needsLights&&(tn.state.directionalShadowMap.length>0&&gt.setValue(T,"directionalShadowMap",tn.state.directionalShadowMap,$),tn.state.spotShadowMap.length>0&&gt.setValue(T,"spotShadowMap",tn.state.spotShadowMap,$),tn.state.pointShadowMap.length>0&&gt.setValue(T,"pointShadowMap",tn.state.pointShadowMap,$)),G.isSkinnedMesh){gt.setOptional(T,G,"bindMatrix"),gt.setOptional(T,G,"bindMatrixInverse");const xt=G.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue(T,"boneTexture",xt.boneTexture,$))}G.isBatchedMesh&&(gt.setOptional(T,G,"batchingTexture"),gt.setValue(T,"batchingTexture",G._matricesTexture,$),gt.setOptional(T,G,"batchingIdTexture"),gt.setValue(T,"batchingIdTexture",G._indirectTexture,$),gt.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(T,"batchingColorTexture",G._colorsTexture,$));const li=q.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&F.update(G,q,ln),(oi||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,gt.setValue(T,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(wt.envMapIntensity.value=O.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=eb()),oi){if(gt.setValue(T,"toneMappingExposure",U.toneMappingExposure),De.needsLights&&wh(wt,Ji),Re&&V.fog===!0&&Le.refreshFogUniforms(wt,Re),Le.refreshMaterialUniforms(wt,V,ue,me,y.state.transmissionRenderTarget[v.id]),De.needsLights&&De.lightProbeGrid){const xt=De.lightProbeGrid;wt.probesSH.value=xt.texture,wt.probesMin.value.copy(xt.boundingBox.min),wt.probesMax.value.copy(xt.boundingBox.max),wt.probesResolution.value.copy(xt.resolution)}ca.upload(T,Nc(De),wt,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ca.upload(T,Nc(De),wt,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(T,"center",G.center),gt.setValue(T,"modelViewMatrix",G.modelViewMatrix),gt.setValue(T,"normalMatrix",G.normalMatrix),gt.setValue(T,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const xt=V.uniformsGroups;for(let ci=0,Qi=xt.length;ci<Qi;ci++){const Oc=xt[ci];se.update(Oc,ln),se.bind(Oc,ln)}}return ln}function wh(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function Rh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(v,O,q){const V=z.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),z.get(v.texture).__webglTexture=O,z.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,O){const q=z.get(v);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(v,O=0,q=0){K=v,Y=O,B=q;let V=null,G=!1,Re=!1;if(v){const Ae=z.get(v);if(Ae.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(T.FRAMEBUFFER,Ae.__webglFramebuffer),_e.copy(v.viewport),be.copy(v.scissor),we=v.scissorTest,m.viewport(_e),m.scissor(be),m.setScissorTest(we),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)$.setupRenderTarget(v);else if(Ae.__hasExternalTextures)$.rebindTextures(v,z.get(v.texture).__webglTexture,z.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ke=v.depthTexture;if(Ae.__boundDepthTexture!==Ke){if(Ke!==null&&z.has(Ke)&&(v.width!==Ke.image.width||v.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(v)}}const Ne=v.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Oe=z.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?V=Oe[O][q]:V=Oe[O],G=!0):v.samples>0&&$.useMultisampledRTT(v)===!1?V=z.get(v).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[q]:V=Oe,_e.copy(v.viewport),be.copy(v.scissor),we=v.scissorTest}else _e.copy(He).multiplyScalar(ue).floor(),be.copy(R).multiplyScalar(ue).floor(),we=P;if(q!==0&&(V=X),m.bindFramebuffer(T.FRAMEBUFFER,V)&&m.drawBuffers(v,V),m.viewport(_e),m.scissor(be),m.setScissorTest(we),G){const Ae=z.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(Re){const Ae=O;for(let Ne=0;Ne<v.textures.length;Ne++){const Oe=z.get(v.textures[Ne]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,q,Ae)}}else if(v!==null&&q!==0){const Ae=z.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,q)}ae=-1},this.readRenderTargetPixels=function(v,O,q,V,G,Re,Ie,Ae=0){if(!(v&&v.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){m.bindFramebuffer(T.FRAMEBUFFER,Ne);try{const Oe=v.textures[Ae],Ke=Oe.format,et=Oe.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ae),!E.textureFormatReadable(Ke)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(et)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=v.width-V&&q>=0&&q<=v.height-G&&T.readPixels(O,q,V,G,Se.convert(Ke),Se.convert(et),Re)}finally{const Oe=K!==null?z.get(K).__webglFramebuffer:null;m.bindFramebuffer(T.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(v,O,q,V,G,Re,Ie,Ae=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(O>=0&&O<=v.width-V&&q>=0&&q<=v.height-G){m.bindFramebuffer(T.FRAMEBUFFER,Ne);const Oe=v.textures[Ae],Ke=Oe.format,et=Oe.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ae),!E.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Be),T.bufferData(T.PIXEL_PACK_BUFFER,Re.byteLength,T.STREAM_READ),T.readPixels(O,q,V,G,Se.convert(Ke),Se.convert(et),0);const pt=K!==null?z.get(K).__webglFramebuffer:null;m.bindFramebuffer(T.FRAMEBUFFER,pt);const At=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await M_(T,At,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Be),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Re),T.deleteBuffer(Be),T.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,O=null,q=0){const V=Math.pow(2,-q),G=Math.floor(v.image.width*V),Re=Math.floor(v.image.height*V),Ie=O!==null?O.x:0,Ae=O!==null?O.y:0;$.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Ie,Ae,G,Re),m.unbindTexture()},this.copyTextureToTexture=function(v,O,q=null,V=null,G=0,Re=0){let Ie,Ae,Ne,Oe,Ke,et,Be,pt,At;const Et=v.isCompressedTexture?v.mipmaps[Re]:v.image;if(q!==null)Ie=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,Ke=q.min.y,et=q.isBox3?q.min.z:0;else{const wt=Math.pow(2,-G);Ie=Math.floor(Et.width*wt),Ae=Math.floor(Et.height*wt),v.isDataArrayTexture?Ne=Et.depth:v.isData3DTexture?Ne=Math.floor(Et.depth*wt):Ne=1,Oe=0,Ke=0,et=0}V!==null?(Be=V.x,pt=V.y,At=V.z):(Be=0,pt=0,At=0);const mt=Se.convert(O.format),Ot=Se.convert(O.type);let De;O.isData3DTexture?($.setTexture3D(O,0),De=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),De=T.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),De=T.TEXTURE_2D),m.activeTexture(T.TEXTURE0),m.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),m.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),m.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const tn=m.getParameter(T.UNPACK_ROW_LENGTH),at=m.getParameter(T.UNPACK_IMAGE_HEIGHT),ln=m.getParameter(T.UNPACK_SKIP_PIXELS),wn=m.getParameter(T.UNPACK_SKIP_ROWS),oi=m.getParameter(T.UNPACK_SKIP_IMAGES);m.pixelStorei(T.UNPACK_ROW_LENGTH,Et.width),m.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Et.height),m.pixelStorei(T.UNPACK_SKIP_PIXELS,Oe),m.pixelStorei(T.UNPACK_SKIP_ROWS,Ke),m.pixelStorei(T.UNPACK_SKIP_IMAGES,et);const Ji=v.isDataArrayTexture||v.isData3DTexture,gt=O.isDataArrayTexture||O.isData3DTexture;if(v.isDepthTexture){const wt=z.get(v),li=z.get(O),xt=z.get(wt.__renderTarget),ci=z.get(li.__renderTarget);m.bindFramebuffer(T.READ_FRAMEBUFFER,xt.__webglFramebuffer),m.bindFramebuffer(T.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Qi=0;Qi<Ne;Qi++)Ji&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(v).__webglTexture,G,et+Qi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(O).__webglTexture,Re,At+Qi)),T.blitFramebuffer(Oe,Ke,Ie,Ae,Be,pt,Ie,Ae,T.DEPTH_BUFFER_BIT,T.NEAREST);m.bindFramebuffer(T.READ_FRAMEBUFFER,null),m.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||z.has(v)){const wt=z.get(v),li=z.get(O);m.bindFramebuffer(T.READ_FRAMEBUFFER,Q),m.bindFramebuffer(T.DRAW_FRAMEBUFFER,k);for(let xt=0;xt<Ne;xt++)Ji?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,wt.__webglTexture,G,et+xt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,wt.__webglTexture,G),gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,li.__webglTexture,Re,At+xt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,li.__webglTexture,Re),G!==0?T.blitFramebuffer(Oe,Ke,Ie,Ae,Be,pt,Ie,Ae,T.COLOR_BUFFER_BIT,T.NEAREST):gt?T.copyTexSubImage3D(De,Re,Be,pt,At+xt,Oe,Ke,Ie,Ae):T.copyTexSubImage2D(De,Re,Be,pt,Oe,Ke,Ie,Ae);m.bindFramebuffer(T.READ_FRAMEBUFFER,null),m.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else gt?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(De,Re,Be,pt,At,Ie,Ae,Ne,mt,Ot,Et.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(De,Re,Be,pt,At,Ie,Ae,Ne,mt,Et.data):T.texSubImage3D(De,Re,Be,pt,At,Ie,Ae,Ne,mt,Ot,Et):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Re,Be,pt,Ie,Ae,mt,Ot,Et.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Re,Be,pt,Et.width,Et.height,mt,Et.data):T.texSubImage2D(T.TEXTURE_2D,Re,Be,pt,Ie,Ae,mt,Ot,Et);m.pixelStorei(T.UNPACK_ROW_LENGTH,tn),m.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at),m.pixelStorei(T.UNPACK_SKIP_PIXELS,ln),m.pixelStorei(T.UNPACK_SKIP_ROWS,wn),m.pixelStorei(T.UNPACK_SKIP_IMAGES,oi),Re===0&&O.generateMipmaps&&T.generateMipmap(De),m.unbindTexture()},this.initRenderTarget=function(v){z.get(v).__webglFramebuffer===void 0&&$.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$.setTextureCube(v,0):v.isData3DTexture?$.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$.setTexture2DArray(v,0):$.setTexture2D(v,0),m.unbindTexture()},this.resetState=function(){Y=0,B=0,K=null,m.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const nb=.05,ib=6,rb=n=>{const{setup:e,fov:t=55,cameraZ:i=5,clearColor:r,pointer:s=!1,maxPixelRatio:a=1.5}=n;let o=null,l=null,c=null,u=null,d=null,f=null,p=null,x=0,S=0,g=0,h=0,w=0,C=!0,M=!1;const A={x:0,y:0,inside:!1},y={x:0,y:0,inside:!1},L=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=we=>{var ze;!l||!c||!u||(g+=we,(ze=d==null?void 0:d.update)==null||ze.call(d,we,g,A),l.render(c,u))},b=we=>{x=requestAnimationFrame(b);const ze=Math.min((we-S)/1e3,nb);if(S=we,s){const Je=Math.min(ze*ib,1);A.x+=(y.x-A.x)*Je,A.y+=(y.y-A.y)*Je,A.inside=y.inside}_(ze)},U=()=>{if(!(x||M||!C||document.hidden)){if(L()){_(0);return}S=performance.now(),x=requestAnimationFrame(b)}},D=()=>{x&&(cancelAnimationFrame(x),x=0)},I=()=>{var Je;if(!o||!l||!u)return;const we=Math.round(o.clientWidth),ze=Math.round(o.clientHeight);!we||!ze||we===h&&ze===w||(h=we,w=ze,u.aspect=we/ze,u.updateProjectionMatrix(),l.setSize(we,ze,!1),(Je=d==null?void 0:d.resize)==null||Je.call(d,we,ze),x||_(0))},X=we=>{if(!o)return;const ze=o.getBoundingClientRect();y.x=(we.clientX-ze.left)/ze.width*2-1,y.y=-((we.clientY-ze.top)/ze.height*2-1),y.inside=!0},Q=()=>{y.x=0,y.y=0,y.inside=!1},k=()=>{document.hidden?D():U()},Y=()=>{l&&(c=new F_,u=new dn(t,h/w,.1,100),u.position.z=i,d=e({scene:c,camera:u,renderer:l,width:h,height:w}))},B=()=>{var we;(we=d==null?void 0:d.dispose)==null||we.call(d),d=null,c=null,u=null},K=we=>{we.preventDefault(),M=!0,D()},ae=()=>{M=!1,B(),Y(),U()},ge=we=>{o=we,h=Math.round(we.clientWidth)||1,w=Math.round(we.clientHeight)||1,l=new tb({antialias:!1,alpha:r===void 0,powerPreference:"default"}),l.setPixelRatio(Math.min(window.devicePixelRatio,a)),l.setSize(h,w,!1),l.setClearColor(r??0,r===void 0?0:1);const ze=l.domElement;Object.assign(ze.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block"}),ze.addEventListener("webglcontextlost",K),ze.addEventListener("webglcontextrestored",ae),we.appendChild(ze),Y(),f=new ResizeObserver(I),f.observe(we),p=new IntersectionObserver(([Je])=>{C=Je.isIntersecting,C?U():D()},{threshold:0}),p.observe(we),document.addEventListener("visibilitychange",k),s&&(we.addEventListener("pointermove",X,{passive:!0}),we.addEventListener("pointerleave",Q,{passive:!0})),_(0),U()},_e=()=>{if(D(),f==null||f.disconnect(),f=null,p==null||p.disconnect(),p=null,document.removeEventListener("visibilitychange",k),o&&s&&(o.removeEventListener("pointermove",X),o.removeEventListener("pointerleave",Q)),B(),l){const we=l.domElement;we.removeEventListener("webglcontextlost",K),we.removeEventListener("webglcontextrestored",ae),l.dispose(),M||l.forceContextLoss(),we.remove(),l=null}o=null,g=0,h=0,w=0,C=!0,M=!1};return{setTarget:we=>{const ze=we===null?null:we instanceof Element?we:we.$el;ze!==o&&(o&&_e(),ze instanceof HTMLElement&&ge(ze))}}},sb={class:"relative min-h-[calc(100svh-3.5rem)] overflow-hidden bg-hero lg:h-[110vh]"},ab={class:"absolute bottom-16 left-5 right-5 sm:bottom-24 sm:left-8 sm:right-8 lg:bottom-36 lg:left-16 lg:right-16"},ob={class:"mx-auto max-w-[1400px]"},lb={class:"animate-fade-up mb-3.5 font-display text-display font-semibold leading-[1.05] tracking-tight text-white"},cb={class:"animate-fade-in mb-5 min-h-5 font-mono text-label uppercase tracking-[0.14em] text-accent-300"},ub={class:"animate-fade-up max-w-[520px] text-body text-white/70",style:{"animation-delay":"0.48s"}},fb={class:"animate-fade-up mt-6.5 gap-x-5.5 flex flex-wrap gap-y-3",style:{"animation-delay":"0.7s"}},db=["href"],hb=["href"],pb=["href"],mb=en({__name:"Hero",setup(n){const e=tc("");let t,i;const r=a=>a<400?55:a<640?70:a<1024?150:220,{setTarget:s}=rb({cameraZ:4.5,clearColor:og,setup:({scene:a,width:o})=>{const l=r(o),c=new Float32Array(l*3),u=new Float32Array(l*3);for(let _=0;_<l;_++)c[_*3]=(Math.random()-.5)*9,c[_*3+1]=(Math.random()-.5)*5.5,c[_*3+2]=(Math.random()-.5)*3,u[_*3]=(Math.random()-.5)*.42,u[_*3+1]=(Math.random()-.5)*.42,u[_*3+2]=(Math.random()-.5)*.24;const d=new on,f=new mn(c,3);f.setUsage(Au),d.setAttribute("position",f);const p=new yn({vertexShader:`
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 4.5 * (3.5 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.1, 0.5, d);
          gl_FragColor = vec4(0.655, 0.545, 0.980, a * 0.88);
        }`,transparent:!0,blending:_a,depthWrite:!1}),x=new K_(d,p);a.add(x);const S=l*8,g=new Float32Array(S*6),h=new on,w=new mn(g,3);w.setUsage(Au),h.setAttribute("position",w),h.setDrawRange(0,0);const C=new oh({color:9133302,transparent:!0,opacity:.22,blending:_a,depthWrite:!1}),M=new $_(h,C);a.add(M);const A=1.25*1.25;let y=0;const L=()=>{let _=0;e:for(let b=0;b<l;b++)for(let U=b+1;U<l;U++){const D=c[b*3]-c[U*3],I=c[b*3+1]-c[U*3+1],X=c[b*3+2]-c[U*3+2];if(D*D+I*I+X*X<A&&(g[_*6]=c[b*3],g[_*6+1]=c[b*3+1],g[_*6+2]=c[b*3+2],g[_*6+3]=c[U*3],g[_*6+4]=c[U*3+1],g[_*6+5]=c[U*3+2],++_>=S))break e}w.needsUpdate=!0,h.setDrawRange(0,_*2)};return L(),{update:_=>{for(let b=0;b<l;b++)c[b*3]+=u[b*3]*_,c[b*3+1]+=u[b*3+1]*_,c[b*3+2]+=u[b*3+2]*_,Math.abs(c[b*3])>4.5&&(u[b*3]*=-1),Math.abs(c[b*3+1])>2.75&&(u[b*3+1]*=-1),Math.abs(c[b*3+2])>1.5&&(u[b*3+2]*=-1);f.needsUpdate=!0,y++%2===0&&L()},dispose:()=>{d.dispose(),p.dispose(),h.dispose(),C.dispose()}}}});return ic(()=>{let a=0;t=setTimeout(()=>{i=setInterval(()=>{a++,e.value=vu.slice(0,a),a>=vu.length&&clearInterval(i)},52)},900)}),Na(()=>{clearTimeout(t),clearInterval(i)}),(a,o)=>(st(),ut("div",sb,[he("div",{ref:je(s),class:"absolute inset-0 h-full w-full"},null,512),o[1]||(o[1]=he("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-page dark:to-page-dark"},null,-1)),he("div",ab,[he("div",ob,[he("h1",lb,nt(je(uc)),1),he("div",cb,[oc(nt(e.value),1),o[0]||(o[0]=he("span",{class:"opacity-60"},"_",-1))]),he("p",ub,nt(je(lg)),1),he("div",fb,[he("a",{href:"mailto:"+je(Ar),class:"border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"},nt(je(Ar)),9,db),he("a",{href:"https://github.com/"+je(wr),class:"border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"},"github/"+nt(je(wr)),9,hb),he("a",{href:"https://linkedin.com/in/"+je(Rr),class:"border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"},"linkedin/"+nt(je(Rr)),9,pb)])])])]))}}),gb="/picture2.webp",_b={class:"mb-7 lg:mb-9"},xb={class:"font-display text-header font-semibold leading-none text-ink dark:text-ink-dark"},Fr=en({__name:"SectionHeader",props:{title:{}},setup(n){return(e,t)=>(st(),ut("div",_b,[he("h2",xb,nt(e.title),1)]))}}),Or=()=>{let n=null;return{setTarget:t=>{if(n==null||n.disconnect(),n=null,!t)return;const i=t instanceof Element?t:t.$el;n=new IntersectionObserver(([r])=>{r.isIntersecting&&(i.classList.add("is-visible"),n==null||n.disconnect())},{threshold:.07}),n.observe(i)}}},vb={id:"about",class:"mb-16 lg:mb-20"},Mb={class:"text-body leading-[1.88] text-ink-mut dark:text-ink-mut-dark"},Sb=en({__name:"AboutSection",setup(n){const{setTarget:e}=Or();return(t,i)=>(st(),ut("section",vb,[tt(Fr,{index:"01",title:"About"}),he("div",{ref:je(e),class:"scroll-reveal flex flex-col-reverse gap-8 sm:flex-row sm:items-start"},[he("p",Mb,nt(je(ug)),1),i[0]||(i[0]=he("div",{class:"photo-treated 3xl:w-[240px] w-40 shrink-0 self-center rounded-[38%_62%_58%_42%/48%_38%_62%_52%] border-2 border-page shadow-[0_10px_28px_-6px_rgba(23,17,51,0.28)] dark:border-line-dark dark:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.6)] sm:w-[200px] sm:self-start"},[he("img",{src:gb,alt:"Denis Kuznetsov",width:"240",height:"240",loading:"lazy",class:"aspect-square w-full object-cover",style:{"object-position":"50% 22%"}})],-1))],512)]))}}),bb={key:0,class:"mb-4 font-mono text-label tracking-wide text-ink-mut dark:text-ink-mut-dark"},Eb={key:1,class:"mb-4 flex items-center gap-2 font-mono text-label text-accent-500 dark:text-accent-400"},yb=["href"],Sh=en({__name:"ProjectCard",props:{title:{},subtitle:{default:void 0},highlight:{default:void 0},description:{},tags:{},link:{default:void 0},linkLabel:{default:void 0},variant:{default:"engineering"}},setup(n){return(e,t)=>(st(),ut("div",{class:Un(["proj-card h-full bg-accent-50/60 transition duration-200 ease-out hover:-translate-y-1 active:-translate-y-1 dark:bg-accent-900/35",e.variant==="ml"?"p-6 sm:p-8":"sm:p-5.5 p-5"]),style:hs({clipPath:e.variant==="ml"?"polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)":"polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)"})},[he("div",{class:Un(["mb-1 font-bold text-ink dark:text-ink-dark",e.variant==="ml"?"text-subheader":"text-title"])},nt(e.title),3),e.subtitle?(st(),ut("div",bb,nt(e.subtitle),1)):Sr("",!0),e.highlight?(st(),ut("div",Eb,[t[0]||(t[0]=he("span",{class:"mt-px h-1.5 w-1.5 shrink-0 bg-accent-500 dark:bg-accent-400"},null,-1)),oc(nt(e.highlight),1)])):Sr("",!0),he("p",{class:Un(["text-ink-mut dark:text-ink-mut-dark",e.variant==="ml"?"text-body leading-[1.85]":"text-body-sm leading-[1.65]"])},nt(e.description),3),he("div",{class:Un(["font-mono text-caption tracking-wide text-ink-dim dark:text-ink-dim-dark",e.variant==="ml"?"mt-3.5":"mt-2.5"])},nt(e.tags.join("  /  ")),3),e.link?(st(),ut("a",{key:2,href:e.link,class:Un(["mt-3 inline-block font-mono tracking-wide text-accent-500 hover:underline dark:text-accent-400",e.variant==="ml"?"text-label":"text-caption"])},nt(e.linkLabel??"GitHub →"),11,yb)):Sr("",!0)],6))}}),Tb={id:"ml",class:"mb-16 lg:mb-20"},Ab={class:"3xl:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2"},wb=en({__name:"MLSection",setup(n){const e=fg.map(t=>({project:t,...Or()}));return(t,i)=>(st(),ut("section",Tb,[tt(Fr,{index:"02",title:"ML and Research stuff"}),he("div",Ab,[(st(!0),ut(Pt,null,ms(je(e),r=>(st(),ut("div",{key:r.project.id,ref_for:!0,ref:r.setTarget,class:"scroll-reveal"},[tt(Sh,{variant:"ml",title:r.project.title,subtitle:r.project.subtitle,highlight:r.project.highlight,description:r.project.description,tags:r.project.tags,link:r.project.link,"link-label":"View on GitHub →"},null,8,["title","subtitle","highlight","description","tags","link"])]))),128))])]))}}),Rb={id:"engineering",class:"mb-16 lg:mb-20"},Cb={class:"3xl:grid-cols-3 grid grid-cols-1 gap-3 sm:grid-cols-2"},Pb=en({__name:"EngineeringSection",setup(n){const e=dg.map(t=>({project:t,...Or()}));return(t,i)=>(st(),ut("section",Rb,[tt(Fr,{index:"03",title:"Engineering"}),he("div",Cb,[(st(!0),ut(Pt,null,ms(je(e),r=>(st(),ut("div",{key:r.project.title,ref_for:!0,ref:r.setTarget,class:"scroll-reveal"},[tt(Sh,{variant:"engineering",title:r.project.title,description:r.project.description,tags:r.project.tags,link:r.project.link},null,8,["title","description","tags","link"])]))),128))])]))}}),Lb={id:"experience",class:"mb-16 lg:mb-20"},Db={class:"3xl:grid-cols-[1fr_220px] mb-2.5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_160px]"},Ib={class:"flex justify-between font-mono text-caption tracking-wide text-ink-dim dark:text-ink-dim-dark"},Ub={class:"mb-0.5 text-title font-semibold text-ink dark:text-ink-dark"},Nb={class:"mb-1 text-body-sm text-accent-500 dark:text-accent-400"},Fb={class:"mb-1 font-mono text-caption tracking-wide text-ink-dim dark:text-ink-dim-dark"},Ob={class:"text-body-sm text-ink-mut dark:text-ink-mut-dark"},Bb={class:"relative h-1 self-center rounded-full bg-line dark:bg-line-dark"},kb=en({__name:"ExperienceSection",setup(n){const e=Math.floor(Math.min(...io.map(s=>s.start))),t=Math.ceil(Math.max(...io.map(s=>s.end))),i=t-e,r=io.map(s=>({entry:s,left:(s.start-e)/i*100,width:(s.end-s.start)/i*100,...Or()}));return(s,a)=>(st(),ut("section",Lb,[tt(Fr,{index:"04",title:"Experience"}),he("div",Db,[a[0]||(a[0]=he("div",{class:"hidden lg:block"},null,-1)),he("div",Ib,[he("span",null,nt(je(e)),1),he("span",null,nt(je(t)),1)])]),(st(!0),ut(Pt,null,ms(je(r),o=>(st(),ut("div",{key:o.entry.role,ref_for:!0,ref:o.setTarget,class:"scroll-reveal 3xl:grid-cols-[1fr_220px] grid grid-cols-1 gap-3 border-b border-line py-4 dark:border-line-dark lg:grid-cols-[1fr_160px] lg:items-center lg:gap-5"},[he("div",null,[he("div",Ub,nt(o.entry.role),1),he("div",Nb,nt(o.entry.org),1),he("div",Fb,nt(o.entry.dateLabel),1),he("div",Ob,nt(o.entry.detail),1)]),he("div",Bb,[he("div",{class:"absolute top-0 h-1 rounded-full bg-accent-500 opacity-85 dark:bg-accent-400",style:hs({left:o.left+"%",width:o.width+"%"})},null,4)])]))),128))]))}}),zb={id:"education",class:"mb-16 lg:mb-20"},Hb={class:"-my-[18px]"},Vb={class:"flex gap-4 sm:gap-5"},Gb={class:"flex w-6 shrink-0 flex-col items-center"},Wb={class:"py-[18px]"},Xb={class:"mb-1 flex flex-wrap items-center gap-2.5"},qb={class:"font-mono text-title font-semibold text-accent-500 dark:text-accent-400"},$b={key:0,class:"border border-accent-100 bg-accent-50 px-2 py-0.5 font-mono text-caption text-ink-mut dark:border-accent-400/30 dark:bg-accent-900/40 dark:text-ink-mut-dark"},Yb={class:"mb-0.5 text-title font-semibold text-ink dark:text-ink-dark"},Kb={class:"text-body-sm text-ink-mut dark:text-ink-mut-dark"},Zb=en({__name:"EducationSection",setup(n){const e=hg.map(t=>({entry:t,...Or()}));return(t,i)=>(st(),ut("section",zb,[tt(Fr,{index:"05",title:"Education"}),he("div",Hb,[(st(!0),ut(Pt,null,ms(je(e),(r,s)=>(st(),ut("div",{key:r.entry.role,ref_for:!0,ref:r.setTarget,class:"scroll-reveal"},[he("div",Vb,[he("div",Gb,[he("div",{class:Un(["w-[5px] flex-1",s>0?"timeline-connector":""])},null,2),i[0]||(i[0]=he("div",{class:"timeline-circle h-6 w-6 shrink-0 rounded-full border-2 border-ink bg-page dark:border-ink-dark dark:bg-page-dark"},null,-1)),he("div",{class:Un(["w-[5px] flex-1",s<je(e).length-1?"timeline-connector":""])},null,2)]),he("div",Wb,[he("div",Xb,[he("span",qb,nt(r.entry.year),1),r.entry.badge?(st(),ut("span",$b,nt(r.entry.badge),1)):Sr("",!0)]),he("div",Yb,nt(r.entry.role),1),he("div",Kb,nt(r.entry.org)+" · "+nt(r.entry.detail),1)])])]))),128))])]))}}),Jb={id:"contact",class:"mb-16 lg:mb-20"},Qb=["href"],jb={class:"grid max-w-[460px] grid-cols-1 gap-2.5 sm:grid-cols-2"},eE=["href"],tE={class:"break-all text-body-sm text-accent-500 dark:text-accent-400"},nE=["href"],iE={class:"break-all text-body-sm text-accent-500 dark:text-accent-400"},rE=["href"],sE={class:"break-all text-body-sm text-accent-500 dark:text-accent-400"},aE=en({__name:"ContactSection",setup(n){const{setTarget:e}=Or();return(t,i)=>(st(),ut("section",Jb,[tt(Fr,{index:"06",title:"Contact"}),he("div",{ref:je(e),class:"scroll-reveal"},[he("a",{href:je(Ud),download:"",class:"border-accent-500/38 px-5.5 hover:bg-accent-500/8 mb-7 inline-flex items-center gap-2 border py-3 font-mono text-label tracking-[0.08em] text-accent-500 transition-colors dark:border-accent-400/40 dark:text-accent-400 dark:hover:bg-accent-400/10"},"↓  Download CV",8,Qb),he("div",jb,[he("a",{href:"mailto:"+je(Ar),class:"px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"},[i[0]||(i[0]=he("div",{class:"mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"}," Email ",-1)),he("div",tE,nt(je(Ar)),1)],8,eE),he("a",{href:"https://github.com/"+je(wr),class:"px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"},[i[1]||(i[1]=he("div",{class:"mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"}," GitHub ",-1)),he("div",iE," /"+nt(je(wr)),1)],8,nE),he("a",{href:"https://linkedin.com/in/"+je(Rr),class:"px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"},[i[2]||(i[2]=he("div",{class:"mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"}," LinkedIn ",-1)),he("div",sE," /in/"+nt(je(Rr)),1)],8,rE)])],512)]))}}),oE={class:"3xl:grid-cols-[280px_1fr] min-h-dvh bg-page dark:bg-page-dark lg:grid lg:grid-cols-[240px_1fr]"},lE={class:"lg:pt-18 lg:pb-30 3xl:max-w-[1100px] 4xl:max-w-[1280px] mx-auto max-w-[900px] px-5 pb-20 pt-12 sm:px-8 lg:px-16"},cE=en({__name:"App",setup(n){return(e,t)=>(st(),ut("div",oE,[tt(kg),tt(Dg),he("main",null,[tt(mb),he("div",lE,[tt(Sb),tt(wb),tt(Pb),tt(kb),tt(Zb),tt(aE)])])]))}});rg(cE).mount("#app");
