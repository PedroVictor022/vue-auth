(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function bs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ac=bs(Sc);function wo(t){return!!t||t===""}function Is(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Pc(r):Is(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(te(t))return t}}const Oc=/;(?![^(]*\))/g,Cc=/:(.+)/;function Pc(t){const e={};return t.split(Oc).forEach(n=>{if(n){const r=n.split(Cc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Es(t){let e="";if(ce(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Es(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc=t=>ce(t)?t:t==null?"":$(t)||te(t)&&(t.toString===Ao||!F(t.toString))?JSON.stringify(t,To,2):String(t),To=(t,e)=>e&&e.__v_isRef?To(t,e.value):$t(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ro(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!$(e)&&!Oo(e)?String(e):e,Y={},Ut=[],Pe=()=>{},Dc=()=>!1,Nc=/^on[^a-z]/,gr=t=>Nc.test(t),ws=t=>t.startsWith("onUpdate:"),he=Object.assign,Ts=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mc=Object.prototype.hasOwnProperty,H=(t,e)=>Mc.call(t,e),$=Array.isArray,$t=t=>mr(t)==="[object Map]",Ro=t=>mr(t)==="[object Set]",F=t=>typeof t=="function",ce=t=>typeof t=="string",Rs=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",So=t=>te(t)&&F(t.then)&&F(t.catch),Ao=Object.prototype.toString,mr=t=>Ao.call(t),xc=t=>mr(t).slice(8,-1),Oo=t=>mr(t)==="[object Object]",Ss=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lc=/-(\w)/g,He=_r(t=>t.replace(Lc,(e,n)=>n?n.toUpperCase():"")),Uc=/\B([A-Z])/g,Qt=_r(t=>t.replace(Uc,"-$1").toLowerCase()),vr=_r(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nr=_r(t=>t?`on${vr(t)}`:""),_n=(t,e)=>!Object.is(t,e),qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},nr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Jr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let si;const $c=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class Fc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Bc(t,e=Ue){e&&e.active&&e.effects.push(t)}const As=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Co=t=>(t.w&dt)>0,Po=t=>(t.n&dt)>0,jc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dt},Hc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Co(s)&&!Po(s)?s.delete(t):e[n++]=s,s.w&=~dt,s.n&=~dt}e.length=n}},Yr=new WeakMap;let cn=0,dt=1;const Xr=30;let Ae;const Tt=Symbol(""),Qr=Symbol("");class Os{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bc(this,r)}run(){if(!this.active)return this.fn();let e=Ae,n=ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,ct=!0,dt=1<<++cn,cn<=Xr?jc(this):ii(this),this.fn()}finally{cn<=Xr&&Hc(this),dt=1<<--cn,Ae=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(ii(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ct=!0;const ko=[];function Zt(){ko.push(ct),ct=!1}function en(){const t=ko.pop();ct=t===void 0?!0:t}function ve(t,e,n){if(ct&&Ae){let r=Yr.get(t);r||Yr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=As()),Do(s)}}function Do(t,e){let n=!1;cn<=Xr?Po(t)||(t.n|=dt,n=!Co(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Ge(t,e,n,r,s,i){const o=Yr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ss(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),$t(t)&&a.push(o.get(Qr)));break;case"delete":$(t)||(a.push(o.get(Tt)),$t(t)&&a.push(o.get(Qr)));break;case"set":$t(t)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&Zr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Zr(As(c))}}function Zr(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&oi(r);for(const r of n)r.computed||oi(r)}function oi(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wc=bs("__proto__,__v_isRef,__isVue"),No=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rs)),Vc=Cs(),zc=Cs(!1,!0),Kc=Cs(!0),ai=qc();function qc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zt();const r=K(this)[e].apply(this,n);return en(),r}}),t}function Cs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ll:$o:e?Uo:Lo).get(r))return r;const o=$(r);if(!t&&o&&H(ai,s))return Reflect.get(ai,s,i);const a=Reflect.get(r,s,i);return(Rs(s)?No.has(s):Wc(s))||(t||ve(r,"get",s),e)?a:ue(a)?o&&Ss(s)?a:a.value:te(a)?t?Fo(a):Cn(a):a}}const Gc=Mo(),Jc=Mo(!0);function Mo(t=!1){return function(n,r,s,i){let o=n[r];if(Kt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!rr(s)&&!Kt(s)&&(o=K(o),s=K(s)),!$(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=$(n)&&Ss(r)?Number(r)<n.length:H(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?_n(s,o)&&Ge(n,"set",r,s):Ge(n,"add",r,s)),c}}function Yc(t,e){const n=H(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ge(t,"delete",e,void 0),r}function Xc(t,e){const n=Reflect.has(t,e);return(!Rs(e)||!No.has(e))&&ve(t,"has",e),n}function Qc(t){return ve(t,"iterate",$(t)?"length":Tt),Reflect.ownKeys(t)}const xo={get:Vc,set:Gc,deleteProperty:Yc,has:Xc,ownKeys:Qc},Zc={get:Kc,set(t,e){return!0},deleteProperty(t,e){return!0}},el=he({},xo,{get:zc,set:Jc}),Ps=t=>t,yr=t=>Reflect.getPrototypeOf(t);function Fn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&ve(s,"get",e),ve(s,"get",i));const{has:o}=yr(s),a=r?Ps:n?Ns:vn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Bn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&ve(r,"has",t),ve(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jn(t,e=!1){return t=t.__v_raw,!e&&ve(K(t),"iterate",Tt),Reflect.get(t,"size",t)}function ci(t){t=K(t);const e=K(this);return yr(e).has.call(e,t)||(e.add(t),Ge(e,"add",t,t)),this}function li(t,e){e=K(e);const n=K(this),{has:r,get:s}=yr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?_n(e,o)&&Ge(n,"set",t,e):Ge(n,"add",t,e),this}function ui(t){const e=K(this),{has:n,get:r}=yr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ge(e,"delete",t,void 0),i}function fi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Ge(t,"clear",void 0,void 0),n}function Hn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Ps:t?Ns:vn;return!t&&ve(a,"iterate",Tt),o.forEach((u,f)=>r.call(s,c(u),c(f),i))}}function Wn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=$t(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Ps:e?Ns:vn;return!e&&ve(i,"iterate",c?Qr:Tt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function tl(){const t={get(i){return Fn(this,i)},get size(){return jn(this)},has:Bn,add:ci,set:li,delete:ui,clear:fi,forEach:Hn(!1,!1)},e={get(i){return Fn(this,i,!1,!0)},get size(){return jn(this)},has:Bn,add:ci,set:li,delete:ui,clear:fi,forEach:Hn(!1,!0)},n={get(i){return Fn(this,i,!0)},get size(){return jn(this,!0)},has(i){return Bn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Hn(!0,!1)},r={get(i){return Fn(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Bn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),e[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[t,n,e,r]}const[nl,rl,sl,il]=tl();function ks(t,e){const n=e?t?il:sl:t?rl:nl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(H(n,s)&&s in r?n:r,s,i)}const ol={get:ks(!1,!1)},al={get:ks(!1,!0)},cl={get:ks(!0,!1)},Lo=new WeakMap,Uo=new WeakMap,$o=new WeakMap,ll=new WeakMap;function ul(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fl(t){return t.__v_skip||!Object.isExtensible(t)?0:ul(xc(t))}function Cn(t){return Kt(t)?t:Ds(t,!1,xo,ol,Lo)}function dl(t){return Ds(t,!1,el,al,Uo)}function Fo(t){return Ds(t,!0,Zc,cl,$o)}function Ds(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=fl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ft(t){return Kt(t)?Ft(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function rr(t){return!!(t&&t.__v_isShallow)}function Bo(t){return Ft(t)||Kt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function jo(t){return nr(t,"__v_skip",!0),t}const vn=t=>te(t)?Cn(t):t,Ns=t=>te(t)?Fo(t):t;function Ho(t){ct&&Ae&&(t=K(t),Do(t.dep||(t.dep=As())))}function Wo(t,e){t=K(t),t.dep&&Zr(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Vo(t){return zo(t,!1)}function hl(t){return zo(t,!0)}function zo(t,e){return ue(t)?t:new pl(t,e)}class pl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:vn(e)}get value(){return Ho(this),this._value}set value(e){const n=this.__v_isShallow||rr(e)||Kt(e);e=n?e:K(e),_n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vn(e),Wo(this))}}function Bt(t){return ue(t)?t.value:t}const gl={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ko(t){return Ft(t)?t:new Proxy(t,gl)}var qo;class ml{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qo]=!1,this._dirty=!0,this.effect=new Os(e,()=>{this._dirty||(this._dirty=!0,Wo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ho(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qo="__v_isReadonly";function _l(t,e,n=!1){let r,s;const i=F(t);return i?(r=t,s=Pe):(r=t.get,s=t.set),new ml(r,s,i||!s,n)}function lt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){br(i,e,n)}return s}function ke(t,e,n,r){if(F(t)){const i=lt(t,e,n,r);return i&&So(i)&&i.catch(o=>{br(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ke(t[i],e,n,r));return s}function br(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){lt(c,null,10,[t,o,a]);return}}vl(t,n,s,r)}function vl(t,e,n,r=!0){console.error(t)}let yn=!1,es=!1;const le=[];let Fe=0;const jt=[];let Ve=null,bt=0;const Go=Promise.resolve();let Ms=null;function Jo(t){const e=Ms||Go;return t?e.then(this?t.bind(this):t):e}function yl(t){let e=Fe+1,n=le.length;for(;e<n;){const r=e+n>>>1;bn(le[r])<t?e=r+1:n=r}return e}function xs(t){(!le.length||!le.includes(t,yn&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?le.push(t):le.splice(yl(t.id),0,t),Yo())}function Yo(){!yn&&!es&&(es=!0,Ms=Go.then(Qo))}function bl(t){const e=le.indexOf(t);e>Fe&&le.splice(e,1)}function Il(t){$(t)?jt.push(...t):(!Ve||!Ve.includes(t,t.allowRecurse?bt+1:bt))&&jt.push(t),Yo()}function di(t,e=yn?Fe+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function Xo(t){if(jt.length){const e=[...new Set(jt)];if(jt.length=0,Ve){Ve.push(...e);return}for(Ve=e,Ve.sort((n,r)=>bn(n)-bn(r)),bt=0;bt<Ve.length;bt++)Ve[bt]();Ve=null,bt=0}}const bn=t=>t.id==null?1/0:t.id,El=(t,e)=>{const n=bn(t)-bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qo(t){es=!1,yn=!0,le.sort(El);const e=Pe;try{for(Fe=0;Fe<le.length;Fe++){const n=le[Fe];n&&n.active!==!1&&lt(n,null,14)}}finally{Fe=0,le.length=0,Xo(),yn=!1,Ms=null,(le.length||jt.length)&&Qo()}}function wl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Y;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Y;p&&(s=n.map(v=>v.trim())),h&&(s=n.map(Jr))}let a,c=r[a=Nr(e)]||r[a=Nr(He(e))];!c&&i&&(c=r[a=Nr(Qt(e))]),c&&ke(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ke(u,t,6,s)}}function Zo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!F(t)){const c=u=>{const f=Zo(u,e,!0);f&&(a=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):he(o,i),te(t)&&r.set(t,o),o)}function Ir(t,e){return!t||!gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Qt(e))||H(t,e))}let Oe=null,Er=null;function sr(t){const e=Oe;return Oe=t,Er=t&&t.type.__scopeId||null,e}function Tl(t){Er=t}function Rl(){Er=null}function ln(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ei(-1);const i=sr(e);let o;try{o=t(...s)}finally{sr(i),r._d&&Ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:h,data:p,setupState:v,ctx:S,inheritAttrs:P}=t;let M,A;const U=sr(t);try{if(n.shapeFlag&4){const z=s||r;M=$e(f.call(z,z,h,i,v,p,S)),A=c}else{const z=e;M=$e(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),A=e.props?c:Sl(c)}}catch(z){hn.length=0,br(z,t,1),M=se(At)}let W=M;if(A&&P!==!1){const z=Object.keys(A),{shapeFlag:ie}=W;z.length&&ie&7&&(o&&z.some(ws)&&(A=Al(A,o)),W=qt(W,A))}return n.dirs&&(W=qt(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),M=W,sr(U),M}const Sl=t=>{let e;for(const n in t)(n==="class"||n==="style"||gr(n))&&((e||(e={}))[n]=t[n]);return e},Al=(t,e)=>{const n={};for(const r in t)(!ws(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hi(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Ir(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hi(r,o,u):!0:!!o;return!1}function hi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function Cl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pl=t=>t.__isSuspense;function kl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Il(t)}function Gn(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function qe(t,e,n=!1){const r=ae||Oe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&F(e)?e.call(r.proxy):e}}const pi={};function Jn(t,e,n){return ea(t,e,n)}function ea(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Y){const a=ae;let c,u=!1,f=!1;if(ue(t)?(c=()=>t.value,u=rr(t)):Ft(t)?(c=()=>t,r=!0):$(t)?(f=!0,u=t.some(A=>Ft(A)||rr(A)),c=()=>t.map(A=>{if(ue(A))return A.value;if(Ft(A))return Et(A);if(F(A))return lt(A,a,2)})):F(t)?e?c=()=>lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ke(t,a,3,[p])}:c=Pe,e&&r){const A=c;c=()=>Et(A())}let h,p=A=>{h=M.onStop=()=>{lt(A,a,4)}};if(En)return p=Pe,e?n&&ke(e,a,3,[c(),f?[]:void 0,p]):c(),Pe;let v=f?[]:pi;const S=()=>{if(!!M.active)if(e){const A=M.run();(r||u||(f?A.some((U,W)=>_n(U,v[W])):_n(A,v)))&&(h&&h(),ke(e,a,3,[A,v===pi?void 0:v,p]),v=A)}else M.run()};S.allowRecurse=!!e;let P;s==="sync"?P=S:s==="post"?P=()=>ge(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),P=()=>xs(S));const M=new Os(c,P);return e?n?S():v=M.run():s==="post"?ge(M.run.bind(M),a&&a.suspense):M.run(),()=>{M.stop(),a&&a.scope&&Ts(a.scope.effects,M)}}function Dl(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?ta(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=ae;Gt(this);const a=ea(s,i.bind(r),n);return o?Gt(o):Rt(),a}function ta(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Et(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Et(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Et(t[n],e);else if(Ro(t)||$t(t))t.forEach(n=>{Et(n,e)});else if(Oo(t))for(const n in t)Et(t[n],e);return t}function na(t){return F(t)?{setup:t,name:t.name}:t}const Yn=t=>!!t.type.__asyncLoader,ra=t=>t.type.__isKeepAlive;function Nl(t,e){sa(t,"a",e)}function Ml(t,e){sa(t,"da",e)}function sa(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ra(s.parent.vnode)&&xl(r,e,n,s),s=s.parent}}function xl(t,e,n,r){const s=wr(e,t,r,!0);oa(()=>{Ts(r[e],s)},n)}function wr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Gt(n);const a=ke(e,n,t,o);return Rt(),en(),a});return r?s.unshift(i):s.push(i),i}}const Ye=t=>(e,n=ae)=>(!En||t==="sp")&&wr(t,(...r)=>e(...r),n),Ll=Ye("bm"),ia=Ye("m"),Ul=Ye("bu"),$l=Ye("u"),Fl=Ye("bum"),oa=Ye("um"),Bl=Ye("sp"),jl=Ye("rtg"),Hl=Ye("rtc");function Wl(t,e=ae){wr("ec",t,e)}function lm(t,e){const n=Oe;if(n===null)return t;const r=Rr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Y]=e[i];F(o)&&(o={mounted:o,updated:o}),o.deep&&Et(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zt(),ke(c,n,8,[t.el,a,t,e]),en())}}const aa="components";function ts(t,e){return zl(aa,t,!0,e)||t}const Vl=Symbol();function zl(t,e,n=!0,r=!1){const s=Oe||ae;if(s){const i=s.type;if(t===aa){const a=Eu(i,!1);if(a&&(a===e||a===He(e)||a===vr(He(e))))return i}const o=gi(s[t]||i[t],e)||gi(s.appContext[t],e);return!o&&r?i:o}}function gi(t,e){return t&&(t[e]||t[He(e)]||t[vr(He(e))])}const ns=t=>t?va(t)?Rr(t)||t.proxy:ns(t.parent):null,ir=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ns(t.parent),$root:t=>ns(t.root),$emit:t=>t.emit,$options:t=>Ls(t),$forceUpdate:t=>t.f||(t.f=()=>xs(t.update)),$nextTick:t=>t.n||(t.n=Jo.bind(t.proxy)),$watch:t=>Dl.bind(t)}),Kl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Y&&H(r,e))return o[e]=1,r[e];if(s!==Y&&H(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&H(u,e))return o[e]=3,i[e];if(n!==Y&&H(n,e))return o[e]=4,n[e];rs&&(o[e]=0)}}const f=ir[e];let h,p;if(f)return e==="$attrs"&&ve(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Y&&H(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,H(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Y&&H(s,e)?(s[e]=n,!0):r!==Y&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Y&&H(t,o)||e!==Y&&H(e,o)||(a=i[0])&&H(a,o)||H(r,o)||H(ir,o)||H(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let rs=!0;function ql(t){const e=Ls(t),n=t.proxy,r=t.ctx;rs=!1,e.beforeCreate&&mi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:S,activated:P,deactivated:M,beforeDestroy:A,beforeUnmount:U,destroyed:W,unmounted:z,render:ie,renderTracked:oe,renderTriggered:me,errorCaptured:Ee,serverPrefetch:Ne,expose:ye,inheritAttrs:Qe,components:Me,directives:kt,filters:pt}=e;if(u&&Gl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const X in o){const G=o[X];F(G)&&(r[X]=G.bind(n))}if(s){const X=s.call(n,n);te(X)&&(t.data=Cn(X))}if(rs=!0,i)for(const X in i){const G=i[X],we=F(G)?G.bind(n,n):F(G.get)?G.get.bind(n,n):Pe,gt=!F(G)&&F(G.set)?G.set.bind(n):Pe,Te=be({get:we,set:gt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Te.value,set:pe=>Te.value=pe})}if(a)for(const X in a)ca(a[X],r,n,X);if(c){const X=F(c)?c.call(n):c;Reflect.ownKeys(X).forEach(G=>{Gn(G,X[G])})}f&&mi(f,t,"c");function ne(X,G){$(G)?G.forEach(we=>X(we.bind(n))):G&&X(G.bind(n))}if(ne(Ll,h),ne(ia,p),ne(Ul,v),ne($l,S),ne(Nl,P),ne(Ml,M),ne(Wl,Ee),ne(Hl,oe),ne(jl,me),ne(Fl,U),ne(oa,z),ne(Bl,Ne),$(ye))if(ye.length){const X=t.exposed||(t.exposed={});ye.forEach(G=>{Object.defineProperty(X,G,{get:()=>n[G],set:we=>n[G]=we})})}else t.exposed||(t.exposed={});ie&&t.render===Pe&&(t.render=ie),Qe!=null&&(t.inheritAttrs=Qe),Me&&(t.components=Me),kt&&(t.directives=kt)}function Gl(t,e,n=Pe,r=!1){$(t)&&(t=ss(t));for(const s in t){const i=t[s];let o;te(i)?"default"in i?o=qe(i.from||s,i.default,!0):o=qe(i.from||s):o=qe(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function mi(t,e,n){ke($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ca(t,e,n,r){const s=r.includes(".")?ta(n,r):()=>n[r];if(ce(t)){const i=e[t];F(i)&&Jn(s,i)}else if(F(t))Jn(s,t.bind(n));else if(te(t))if($(t))t.forEach(i=>ca(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&Jn(s,i,t)}}function Ls(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>or(c,u,o,!0)),or(c,e,o)),te(e)&&i.set(e,c),c}function or(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&or(t,i,n,!0),s&&s.forEach(o=>or(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Jl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jl={data:_i,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:vt,directives:vt,watch:Xl,provide:_i,inject:Yl};function _i(t,e){return e?t?function(){return he(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Yl(t,e){return vt(ss(t),ss(e))}function ss(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function vt(t,e){return t?he(he(Object.create(null),t),e):e}function Xl(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Ql(t,e,n,r=!1){const s={},i={};nr(i,Tr,1),t.propsDefaults=Object.create(null),la(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Ir(t.emitsOptions,p))continue;const v=e[p];if(c)if(H(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const S=He(p);s[S]=is(c,a,S,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{la(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!H(e,h)&&((f=Qt(h))===h||!H(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=is(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!H(e,h)&&!0)&&(delete i[h],u=!0)}u&&Ge(t,"set","$attrs")}function la(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Kn(c))continue;const u=e[c];let f;s&&H(s,f=He(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Ir(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=K(n),u=a||Y;for(let f=0;f<i.length;f++){const h=i[f];n[h]=is(s,c,h,u[h],t,!H(u,h))}}return o}function is(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&F(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Gt(s),r=u[n]=c.call(null,e),Rt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function ua(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!F(t)){const f=h=>{c=!0;const[p,v]=ua(h,e,!0);he(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return te(t)&&r.set(t,Ut),Ut;if($(i))for(let f=0;f<i.length;f++){const h=He(i[f]);vi(h)&&(o[h]=Y)}else if(i)for(const f in i){const h=He(f);if(vi(h)){const p=i[f],v=o[h]=$(p)||F(p)?{type:p}:p;if(v){const S=Ii(Boolean,v.type),P=Ii(String,v.type);v[0]=S>-1,v[1]=P<0||S<P,(S>-1||H(v,"default"))&&a.push(h)}}}const u=[o,a];return te(t)&&r.set(t,u),u}function vi(t){return t[0]!=="$"}function yi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function bi(t,e){return yi(t)===yi(e)}function Ii(t,e){return $(e)?e.findIndex(n=>bi(n,t)):F(e)&&bi(e,t)?0:-1}const fa=t=>t[0]==="_"||t==="$stable",Us=t=>$(t)?t.map($e):[$e(t)],eu=(t,e,n)=>{if(e._n)return e;const r=ln((...s)=>Us(e(...s)),n);return r._c=!1,r},da=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fa(s))continue;const i=t[s];if(F(i))e[s]=eu(s,i,r);else if(i!=null){const o=Us(i);e[s]=()=>o}}},ha=(t,e)=>{const n=Us(e);t.slots.default=()=>n},tu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),nr(e,"_",n)):da(e,t.slots={})}else t.slots={},e&&ha(t,e);nr(t.slots,Tr,1)},nu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Y;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(he(s,e),!n&&a===1&&delete s._):(i=!e.$stable,da(e,s)),o=e}else e&&(ha(t,e),o={default:1});if(i)for(const a in s)!fa(a)&&!(a in o)&&delete s[a]};function pa(){return{app:null,config:{isNativeTag:Dc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ru=0;function su(t,e){return function(r,s=null){F(r)||(r=Object.assign({},r)),s!=null&&!te(s)&&(s=null);const i=pa(),o=new Set;let a=!1;const c=i.app={_uid:ru++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tu,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(c,...f)):F(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,h){if(!a){const p=se(r,s);return p.appContext=i,f&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Rr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c}};return c}}function os(t,e,n,r,s=!1){if($(t)){t.forEach((p,v)=>os(p,e&&($(e)?e[v]:e),n,r,s));return}if(Yn(r)&&!s)return;const i=r.shapeFlag&4?Rr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===Y?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(ce(u)?(f[u]=null,H(h,u)&&(h[u]=null)):ue(u)&&(u.value=null)),F(c))lt(c,a,12,[o,f]);else{const p=ce(c),v=ue(c);if(p||v){const S=()=>{if(t.f){const P=p?H(h,c)?h[c]:f[c]:c.value;s?$(P)&&Ts(P,i):$(P)?P.includes(i)||P.push(i):p?(f[c]=[i],H(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,H(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,ge(S,n)):S()}}}const ge=kl;function iu(t){return ou(t)}function ou(t,e){const n=$c();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=Pe,insertStaticContent:S}=t,P=(l,d,g,m=null,y=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(l===d)return;l&&!on(l,d)&&(m=T(l),pe(l,y,E,!0),l=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:D,shapeFlag:C}=d;switch(b){case $s:M(l,d,g,m);break;case At:A(l,d,g,m);break;case xr:l==null&&U(d,g,m,R);break;case Se:Me(l,d,g,m,y,E,R,I,w);break;default:C&1?ie(l,d,g,m,y,E,R,I,w):C&6?kt(l,d,g,m,y,E,R,I,w):(C&64||C&128)&&b.process(l,d,g,m,y,E,R,I,w,V)}D!=null&&y&&os(D,l&&l.ref,E,d||l,!d)},M=(l,d,g,m)=>{if(l==null)r(d.el=a(d.children),g,m);else{const y=d.el=l.el;d.children!==l.children&&u(y,d.children)}},A=(l,d,g,m)=>{l==null?r(d.el=c(d.children||""),g,m):d.el=l.el},U=(l,d,g,m)=>{[l.el,l.anchor]=S(l.children,d,g,m,l.el,l.anchor)},W=({el:l,anchor:d},g,m)=>{let y;for(;l&&l!==d;)y=p(l),r(l,g,m),l=y;r(d,g,m)},z=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),s(l),l=g;s(d)},ie=(l,d,g,m,y,E,R,I,w)=>{R=R||d.type==="svg",l==null?oe(d,g,m,y,E,R,I,w):Ne(l,d,y,E,R,I,w)},oe=(l,d,g,m,y,E,R,I)=>{let w,b;const{type:D,props:C,shapeFlag:N,transition:L,dirs:j}=l;if(w=l.el=o(l.type,E,C&&C.is,C),N&8?f(w,l.children):N&16&&Ee(l.children,w,null,m,y,E&&D!=="foreignObject",R,I),j&&mt(l,null,m,"created"),C){for(const J in C)J!=="value"&&!Kn(J)&&i(w,J,null,C[J],E,l.children,m,y,O);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Le(b,m,l)}me(w,l,l.scopeId,R,m),j&&mt(l,null,m,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&L&&!L.persisted;Q&&L.beforeEnter(w),r(w,d,g),((b=C&&C.onVnodeMounted)||Q||j)&&ge(()=>{b&&Le(b,m,l),Q&&L.enter(w),j&&mt(l,null,m,"mounted")},y)},me=(l,d,g,m,y)=>{if(g&&v(l,g),m)for(let E=0;E<m.length;E++)v(l,m[E]);if(y){let E=y.subTree;if(d===E){const R=y.vnode;me(l,R,R.scopeId,R.slotScopeIds,y.parent)}}},Ee=(l,d,g,m,y,E,R,I,w=0)=>{for(let b=w;b<l.length;b++){const D=l[b]=I?nt(l[b]):$e(l[b]);P(null,D,d,g,m,y,E,R,I)}},Ne=(l,d,g,m,y,E,R)=>{const I=d.el=l.el;let{patchFlag:w,dynamicChildren:b,dirs:D}=d;w|=l.patchFlag&16;const C=l.props||Y,N=d.props||Y;let L;g&&_t(g,!1),(L=N.onVnodeBeforeUpdate)&&Le(L,g,d,l),D&&mt(d,l,g,"beforeUpdate"),g&&_t(g,!0);const j=y&&d.type!=="foreignObject";if(b?ye(l.dynamicChildren,b,I,g,m,j,E):R||G(l,d,I,null,g,m,j,E,!1),w>0){if(w&16)Qe(I,d,C,N,g,m,y);else if(w&2&&C.class!==N.class&&i(I,"class",null,N.class,y),w&4&&i(I,"style",C.style,N.style,y),w&8){const Q=d.dynamicProps;for(let J=0;J<Q.length;J++){const re=Q[J],Re=C[re],Nt=N[re];(Nt!==Re||re==="value")&&i(I,re,Re,Nt,y,l.children,g,m,O)}}w&1&&l.children!==d.children&&f(I,d.children)}else!R&&b==null&&Qe(I,d,C,N,g,m,y);((L=N.onVnodeUpdated)||D)&&ge(()=>{L&&Le(L,g,d,l),D&&mt(d,l,g,"updated")},m)},ye=(l,d,g,m,y,E,R)=>{for(let I=0;I<d.length;I++){const w=l[I],b=d[I],D=w.el&&(w.type===Se||!on(w,b)||w.shapeFlag&70)?h(w.el):g;P(w,b,D,null,m,y,E,R,!0)}},Qe=(l,d,g,m,y,E,R)=>{if(g!==m){if(g!==Y)for(const I in g)!Kn(I)&&!(I in m)&&i(l,I,g[I],null,R,d.children,y,E,O);for(const I in m){if(Kn(I))continue;const w=m[I],b=g[I];w!==b&&I!=="value"&&i(l,I,b,w,R,d.children,y,E,O)}"value"in m&&i(l,"value",g.value,m.value)}},Me=(l,d,g,m,y,E,R,I,w)=>{const b=d.el=l?l.el:a(""),D=d.anchor=l?l.anchor:a("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:L}=d;L&&(I=I?I.concat(L):L),l==null?(r(b,g,m),r(D,g,m),Ee(d.children,g,D,y,E,R,I,w)):C>0&&C&64&&N&&l.dynamicChildren?(ye(l.dynamicChildren,N,g,y,E,R,I),(d.key!=null||y&&d===y.subTree)&&ga(l,d,!0)):G(l,d,g,D,y,E,R,I,w)},kt=(l,d,g,m,y,E,R,I,w)=>{d.slotScopeIds=I,l==null?d.shapeFlag&512?y.ctx.activate(d,g,m,R,w):pt(d,g,m,y,E,R,w):rn(l,d,w)},pt=(l,d,g,m,y,E,R)=>{const I=l.component=_u(l,m,y);if(ra(l)&&(I.ctx.renderer=V),vu(I),I.asyncDep){if(y&&y.registerDep(I,ne),!l.el){const w=I.subTree=se(At);A(null,w,d,g)}return}ne(I,l,d,g,y,E,R)},rn=(l,d,g)=>{const m=d.component=l.component;if(Ol(l,d,g))if(m.asyncDep&&!m.asyncResolved){X(m,d,g);return}else m.next=d,bl(m.update),m.update();else d.el=l.el,m.vnode=d},ne=(l,d,g,m,y,E,R)=>{const I=()=>{if(l.isMounted){let{next:D,bu:C,u:N,parent:L,vnode:j}=l,Q=D,J;_t(l,!1),D?(D.el=j.el,X(l,D,R)):D=j,C&&qn(C),(J=D.props&&D.props.onVnodeBeforeUpdate)&&Le(J,L,D,j),_t(l,!0);const re=Mr(l),Re=l.subTree;l.subTree=re,P(Re,re,h(Re.el),T(Re),l,y,E),D.el=re.el,Q===null&&Cl(l,re.el),N&&ge(N,y),(J=D.props&&D.props.onVnodeUpdated)&&ge(()=>Le(J,L,D,j),y)}else{let D;const{el:C,props:N}=d,{bm:L,m:j,parent:Q}=l,J=Yn(d);if(_t(l,!1),L&&qn(L),!J&&(D=N&&N.onVnodeBeforeMount)&&Le(D,Q,d),_t(l,!0),C&&B){const re=()=>{l.subTree=Mr(l),B(C,l.subTree,l,y,null)};J?d.type.__asyncLoader().then(()=>!l.isUnmounted&&re()):re()}else{const re=l.subTree=Mr(l);P(null,re,g,m,l,y,E),d.el=re.el}if(j&&ge(j,y),!J&&(D=N&&N.onVnodeMounted)){const re=d;ge(()=>Le(D,Q,re),y)}(d.shapeFlag&256||Q&&Yn(Q.vnode)&&Q.vnode.shapeFlag&256)&&l.a&&ge(l.a,y),l.isMounted=!0,d=g=m=null}},w=l.effect=new Os(I,()=>xs(b),l.scope),b=l.update=()=>w.run();b.id=l.uid,_t(l,!0),b()},X=(l,d,g)=>{d.component=l;const m=l.vnode.props;l.vnode=d,l.next=null,Zl(l,d.props,m,g),nu(l,d.children,g),Zt(),di(),en()},G=(l,d,g,m,y,E,R,I,w=!1)=>{const b=l&&l.children,D=l?l.shapeFlag:0,C=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){gt(b,C,g,m,y,E,R,I,w);return}else if(N&256){we(b,C,g,m,y,E,R,I,w);return}}L&8?(D&16&&O(b,y,E),C!==b&&f(g,C)):D&16?L&16?gt(b,C,g,m,y,E,R,I,w):O(b,y,E,!0):(D&8&&f(g,""),L&16&&Ee(C,g,m,y,E,R,I,w))},we=(l,d,g,m,y,E,R,I,w)=>{l=l||Ut,d=d||Ut;const b=l.length,D=d.length,C=Math.min(b,D);let N;for(N=0;N<C;N++){const L=d[N]=w?nt(d[N]):$e(d[N]);P(l[N],L,g,null,y,E,R,I,w)}b>D?O(l,y,E,!0,!1,C):Ee(d,g,m,y,E,R,I,w,C)},gt=(l,d,g,m,y,E,R,I,w)=>{let b=0;const D=d.length;let C=l.length-1,N=D-1;for(;b<=C&&b<=N;){const L=l[b],j=d[b]=w?nt(d[b]):$e(d[b]);if(on(L,j))P(L,j,g,null,y,E,R,I,w);else break;b++}for(;b<=C&&b<=N;){const L=l[C],j=d[N]=w?nt(d[N]):$e(d[N]);if(on(L,j))P(L,j,g,null,y,E,R,I,w);else break;C--,N--}if(b>C){if(b<=N){const L=N+1,j=L<D?d[L].el:m;for(;b<=N;)P(null,d[b]=w?nt(d[b]):$e(d[b]),g,j,y,E,R,I,w),b++}}else if(b>N)for(;b<=C;)pe(l[b],y,E,!0),b++;else{const L=b,j=b,Q=new Map;for(b=j;b<=N;b++){const _e=d[b]=w?nt(d[b]):$e(d[b]);_e.key!=null&&Q.set(_e.key,b)}let J,re=0;const Re=N-j+1;let Nt=!1,ti=0;const sn=new Array(Re);for(b=0;b<Re;b++)sn[b]=0;for(b=L;b<=C;b++){const _e=l[b];if(re>=Re){pe(_e,y,E,!0);continue}let xe;if(_e.key!=null)xe=Q.get(_e.key);else for(J=j;J<=N;J++)if(sn[J-j]===0&&on(_e,d[J])){xe=J;break}xe===void 0?pe(_e,y,E,!0):(sn[xe-j]=b+1,xe>=ti?ti=xe:Nt=!0,P(_e,d[xe],g,null,y,E,R,I,w),re++)}const ni=Nt?au(sn):Ut;for(J=ni.length-1,b=Re-1;b>=0;b--){const _e=j+b,xe=d[_e],ri=_e+1<D?d[_e+1].el:m;sn[b]===0?P(null,xe,g,ri,y,E,R,I,w):Nt&&(J<0||b!==ni[J]?Te(xe,g,ri,2):J--)}}},Te=(l,d,g,m,y=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:b}=l;if(b&6){Te(l.component.subTree,d,g,m);return}if(b&128){l.suspense.move(d,g,m);return}if(b&64){R.move(l,d,g,V);return}if(R===Se){r(E,d,g);for(let C=0;C<w.length;C++)Te(w[C],d,g,m);r(l.anchor,d,g);return}if(R===xr){W(l,d,g);return}if(m!==2&&b&1&&I)if(m===0)I.beforeEnter(E),r(E,d,g),ge(()=>I.enter(E),y);else{const{leave:C,delayLeave:N,afterLeave:L}=I,j=()=>r(E,d,g),Q=()=>{C(E,()=>{j(),L&&L()})};N?N(E,j,Q):Q()}else r(E,d,g)},pe=(l,d,g,m=!1,y=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:b,shapeFlag:D,patchFlag:C,dirs:N}=l;if(I!=null&&os(I,null,g,l,!0),D&256){d.ctx.deactivate(l);return}const L=D&1&&N,j=!Yn(l);let Q;if(j&&(Q=R&&R.onVnodeBeforeUnmount)&&Le(Q,d,l),D&6)_(l.component,g,m);else{if(D&128){l.suspense.unmount(g,m);return}L&&mt(l,null,d,"beforeUnmount"),D&64?l.type.remove(l,d,g,y,V,m):b&&(E!==Se||C>0&&C&64)?O(b,d,g,!1,!0):(E===Se&&C&384||!y&&D&16)&&O(w,d,g),m&&Dt(l)}(j&&(Q=R&&R.onVnodeUnmounted)||L)&&ge(()=>{Q&&Le(Q,d,l),L&&mt(l,null,d,"unmounted")},g)},Dt=l=>{const{type:d,el:g,anchor:m,transition:y}=l;if(d===Se){$n(g,m);return}if(d===xr){z(l);return}const E=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(l.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:I}=y,w=()=>R(g,E);I?I(l.el,E,w):w()}else E()},$n=(l,d)=>{let g;for(;l!==d;)g=p(l),s(l),l=g;s(d)},_=(l,d,g)=>{const{bum:m,scope:y,update:E,subTree:R,um:I}=l;m&&qn(m),y.stop(),E&&(E.active=!1,pe(R,l,d,g)),I&&ge(I,d),ge(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},O=(l,d,g,m=!1,y=!1,E=0)=>{for(let R=E;R<l.length;R++)pe(l[R],d,g,m,y)},T=l=>l.shapeFlag&6?T(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),k=(l,d,g)=>{l==null?d._vnode&&pe(d._vnode,null,null,!0):P(d._vnode||null,l,d,null,null,null,g),di(),Xo(),d._vnode=l},V={p:P,um:pe,m:Te,r:Dt,mt:pt,mc:Ee,pc:G,pbc:ye,n:T,o:t};let ee,B;return e&&([ee,B]=e(V)),{render:k,hydrate:ee,createApp:su(k,ee)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ga(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nt(s[i]),a.el=o.el),n||ga(o,a))}}function au(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const cu=t=>t.__isTeleport,Se=Symbol(void 0),$s=Symbol(void 0),At=Symbol(void 0),xr=Symbol(void 0),hn=[];let Ce=null;function ar(t=!1){hn.push(Ce=t?null:[])}function lu(){hn.pop(),Ce=hn[hn.length-1]||null}let In=1;function Ei(t){In+=t}function ma(t){return t.dynamicChildren=In>0?Ce||Ut:null,lu(),In>0&&Ce&&Ce.push(t),t}function as(t,e,n,r,s,i){return ma(Ht(t,e,n,r,s,i,!0))}function uu(t,e,n,r,s){return ma(se(t,e,n,r,s,!0))}function cs(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Tr="__vInternal",_a=({key:t})=>t!=null?t:null,Xn=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||ue(t)||F(t)?{i:Oe,r:t,k:e,f:!!n}:t:null;function Ht(t,e=null,n=null,r=0,s=null,i=t===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_a(e),ref:e&&Xn(e),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Fs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),In>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const se=fu;function fu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vl)&&(t=At),cs(t)){const a=qt(t,e,!0);return n&&Fs(a,n),In>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(wu(t)&&(t=t.__vccOpts),e){e=du(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=Es(a)),te(c)&&(Bo(c)&&!$(c)&&(c=he({},c)),e.style=Is(c))}const o=ce(t)?1:Pl(t)?128:cu(t)?64:te(t)?4:F(t)?2:0;return Ht(t,e,n,r,s,o,i,!0)}function du(t){return t?Bo(t)||Tr in t?he({},t):t:null}function qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_a(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Xn(e)):[s,Xn(e)]:Xn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor}}function un(t=" ",e=0){return se($s,null,t,e)}function hu(t="",e=!1){return e?(ar(),uu(At,null,t)):se(At,null,t)}function $e(t){return t==null||typeof t=="boolean"?se(At):$(t)?se(Se,null,t.slice()):typeof t=="object"?nt(t):se($s,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function Fs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Tr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function pu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Es([e.class,r.class]));else if(s==="style")e.style=Is([e.style,r.style]);else if(gr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){ke(t,e,7,[n,r])}const gu=pa();let mu=0;function _u(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gu,i={uid:mu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ua(r,s),emitsOptions:Zo(r,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wl.bind(null,i),t.ce&&t.ce(i),i}let ae=null;const Gt=t=>{ae=t,t.scope.on()},Rt=()=>{ae&&ae.scope.off(),ae=null};function va(t){return t.vnode.shapeFlag&4}let En=!1;function vu(t,e=!1){En=e;const{props:n,children:r}=t.vnode,s=va(t);Ql(t,n,s,e),tu(t,r);const i=s?yu(t,e):void 0;return En=!1,i}function yu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jo(new Proxy(t.ctx,Kl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Iu(t):null;Gt(t),Zt();const i=lt(r,t,0,[t.props,s]);if(en(),Rt(),So(i)){if(i.then(Rt,Rt),e)return i.then(o=>{wi(t,o,e)}).catch(o=>{br(o,t,0)});t.asyncDep=i}else wi(t,i,e)}else ya(t,e)}function wi(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=Ko(e)),ya(t,n)}let Ti;function ya(t,e,n){const r=t.type;if(!t.render){if(!e&&Ti&&!r.render){const s=r.template||Ls(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=he(he({isCustomElement:i,delimiters:a},o),c);r.render=Ti(s,u)}}t.render=r.render||Pe}Gt(t),Zt(),ql(t),en(),Rt()}function bu(t){return new Proxy(t.attrs,{get(e,n){return ve(t,"get","$attrs"),e[n]}})}function Iu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=bu(t))},slots:t.slots,emit:t.emit,expose:e}}function Rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ko(jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)}}))}function Eu(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function wu(t){return F(t)&&"__vccOpts"in t}const be=(t,e)=>_l(t,e,En);function ba(t,e,n){const r=arguments.length;return r===2?te(e)&&!$(e)?cs(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cs(n)&&(n=[n]),se(t,e,n))}const Tu="3.2.41",Ru="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Ri=It&&It.createElement("template"),Su={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?It.createElementNS(Ru,t):It.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ri.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ri.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Au(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ou(t,e,n){const r=t.style,s=ce(n);if(n&&!s){for(const i in n)ls(r,i,n[i]);if(e&&!ce(e))for(const i in e)n[i]==null&&ls(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Si=/\s*!important$/;function ls(t,e,n){if($(n))n.forEach(r=>ls(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Cu(t,e);Si.test(n)?t.setProperty(Qt(r),n.replace(Si,""),"important"):t[r]=n}}const Ai=["Webkit","Moz","ms"],Lr={};function Cu(t,e){const n=Lr[e];if(n)return n;let r=He(e);if(r!=="filter"&&r in t)return Lr[e]=r;r=vr(r);for(let s=0;s<Ai.length;s++){const i=Ai[s]+r;if(i in t)return Lr[e]=i}return e}const Oi="http://www.w3.org/1999/xlink";function Pu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Oi,e.slice(6,e.length)):t.setAttributeNS(Oi,e,n);else{const i=Ac(e);n==null||i&&!wo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ku(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xt(t,e,n,r){t.addEventListener(e,n,r)}function Du(t,e,n,r){t.removeEventListener(e,n,r)}function Nu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Mu(e);if(r){const u=i[e]=Uu(r,s);xt(t,a,u,c)}else o&&(Du(t,a,o,c),i[e]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function Mu(t){let e;if(Ci.test(t)){e={};let r;for(;r=t.match(Ci);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Ur=0;const xu=Promise.resolve(),Lu=()=>Ur||(xu.then(()=>Ur=0),Ur=Date.now());function Uu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke($u(r,n.value),e,5,[r])};return n.value=t,n.attached=Lu(),n}function $u(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pi=/^on[a-z]/,Fu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Au(t,r,s):e==="style"?Ou(t,n,r):gr(e)?ws(e)||Nu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bu(t,e,r,s))?ku(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pu(t,e,r,s))};function Bu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Pi.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pi.test(e)&&ce(n)?!1:e in t}const ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>qn(e,n):e};function ju(t){t.target.composing=!0}function Di(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const um={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ki(s);const i=r||s.props&&s.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Jr(a)),t._assign(a)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",ju),xt(t,"compositionend",Di),xt(t,"change",Di))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ki(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Jr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Hu=he({patchProp:Fu},Su);let Ni;function Wu(){return Ni||(Ni=iu(Hu))}const Vu=(...t)=>{const e=Wu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zu(r);if(!s)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zu(t){return ce(t)?document.querySelector(t):t}/**
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
 */const Ia=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ku=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),r.push(n[f],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ia(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ku(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const S=u<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qu=function(t){const e=Ia(t);return Ea.encodeByteArray(e,!0)},wa=function(t){return qu(t).replace(/\./g,"")},Ta=function(t){try{return Ea.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Ju(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xu(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qu(){return typeof indexedDB=="object"}function Zu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tf=()=>ef().__FIREBASE_DEFAULTS__,nf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ta(t[1]);return e&&JSON.parse(e)},Bs=()=>{try{return tf()||nf()||rf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sf=t=>{var e,n;return(n=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},of=()=>{var t;return(t=Bs())===null||t===void 0?void 0:t.config},Ra=t=>{var e;return(e=Bs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */const cf="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cf,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function lf(t,e){return t.replace(uf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uf=/\{\$([^}]+)}/g;function ff(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mi(i)&&Mi(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mi(t){return t!==null&&typeof t=="object"}/**
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
 */function kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function df(t,e){const n=new hf(t,e);return n.subscribe.bind(n)}class hf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$r),s.error===void 0&&(s.error=$r),s.complete===void 0&&(s.complete=$r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class gf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new af;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_f(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mf(t){return t===yt?void 0:t}function _f(t){return t.instantiationMode==="EAGER"}/**
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
 */class vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const yf={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},bf=Z.INFO,If={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Ef=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=If[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=bf,this._logHandler=Ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const wf=(t,e)=>e.some(n=>t instanceof n);let xi,Li;function Tf(){return xi||(xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rf(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,us=new WeakMap,Oa=new WeakMap,Fr=new WeakMap,js=new WeakMap;function Sf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aa.set(n,t)}).catch(()=>{}),js.set(e,t),e}function Af(t){if(us.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});us.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return us.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Of(t){fs=t(fs)}function Cf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Br(this),e,...n);return Oa.set(r,e.sort?e.sort():[e]),ut(r)}:Rf().includes(t)?function(...e){return t.apply(Br(this),e),ut(Aa.get(this))}:function(...e){return ut(t.apply(Br(this),e))}}function Pf(t){return typeof t=="function"?Cf(t):(t instanceof IDBTransaction&&Af(t),wf(t,Tf())?new Proxy(t,fs):t)}function ut(t){if(t instanceof IDBRequest)return Sf(t);if(Fr.has(t))return Fr.get(t);const e=Pf(t);return e!==t&&(Fr.set(t,e),js.set(e,t)),e}const Br=t=>js.get(t);function kf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Df=["get","getKey","getAll","getAllKeys","count"],Nf=["put","add","delete","clear"],jr=new Map;function Ui(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Df.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return jr.set(e,i),i}Of(t=>({...t,get:(e,n,r)=>Ui(e,n)||t.get(e,n,r),has:(e,n)=>!!Ui(e,n)||t.has(e,n)}));/**
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
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ds="@firebase/app",$i="0.8.3";/**
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
 */const Ot=new Sa("@firebase/app"),Lf="@firebase/app-compat",Uf="@firebase/analytics-compat",$f="@firebase/analytics",Ff="@firebase/app-check-compat",Bf="@firebase/app-check",jf="@firebase/auth",Hf="@firebase/auth-compat",Wf="@firebase/database",Vf="@firebase/database-compat",zf="@firebase/functions",Kf="@firebase/functions-compat",qf="@firebase/installations",Gf="@firebase/installations-compat",Jf="@firebase/messaging",Yf="@firebase/messaging-compat",Xf="@firebase/performance",Qf="@firebase/performance-compat",Zf="@firebase/remote-config",ed="@firebase/remote-config-compat",td="@firebase/storage",nd="@firebase/storage-compat",rd="@firebase/firestore",sd="@firebase/firestore-compat",id="firebase",od="9.13.0";/**
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
 */const hs="[DEFAULT]",ad={[ds]:"fire-core",[Lf]:"fire-core-compat",[$f]:"fire-analytics",[Uf]:"fire-analytics-compat",[Bf]:"fire-app-check",[Ff]:"fire-app-check-compat",[jf]:"fire-auth",[Hf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Vf]:"fire-rtdb-compat",[zf]:"fire-fn",[Kf]:"fire-fn-compat",[qf]:"fire-iid",[Gf]:"fire-iid-compat",[Jf]:"fire-fcm",[Yf]:"fire-fcm-compat",[Xf]:"fire-perf",[Qf]:"fire-perf-compat",[Zf]:"fire-rc",[ed]:"fire-rc-compat",[td]:"fire-gcs",[nd]:"fire-gcs-compat",[rd]:"fire-fst",[sd]:"fire-fst-compat","fire-js":"fire-js",[id]:"fire-js-all"};/**
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
 */const lr=new Map,ps=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(ps.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const n of lr.values())cd(n,t);return!0}function Ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ld={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new Pn("app","Firebase",ld);/**
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
 */class ud{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=od;function Pa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ft.create("bad-app-name",{appName:String(s)});if(n||(n=of()),!n)throw ft.create("no-options");const i=lr.get(s);if(i){if(cr(n,i.options)&&cr(r,i.config))return i;throw ft.create("duplicate-app",{appName:s})}const o=new vf(s);for(const c of ps.values())o.addComponent(c);const a=new ud(n,r,o);return lr.set(s,a),a}function fd(t=hs){const e=lr.get(t);if(!e&&t===hs)return Pa();if(!e)throw ft.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=ad[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}wn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dd="firebase-heartbeat-database",hd=1,Tn="firebase-heartbeat-store";let Hr=null;function ka(){return Hr||(Hr=kf(dd,hd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tn)}}}).catch(t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})})),Hr}async function pd(t){var e;try{return(await ka()).transaction(Tn).objectStore(Tn).get(Da(t))}catch(n){if(n instanceof ht)Ot.warn(n.message);else{const r=ft.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ot.warn(r.message)}}}async function Fi(t,e){var n;try{const s=(await ka()).transaction(Tn,"readwrite");return await s.objectStore(Tn).put(e,Da(t)),s.done}catch(r){if(r instanceof ht)Ot.warn(r.message);else{const s=ft.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ot.warn(s.message)}}}function Da(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gd=1024,md=30*24*60*60*1e3;class _d{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=md}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bi(),{heartbeatsToSend:n,unsentEntries:r}=vd(this._heartbeatsCache.heartbeats),s=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bi(){return new Date().toISOString().substring(0,10)}function vd(t,e=gd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ji(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ji(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qu()?Zu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ji(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bd(t){wn(new Jt("platform-logger",e=>new Mf(e),"PRIVATE")),wn(new Jt("heartbeat",e=>new _d(e),"PRIVATE")),Wt(ds,$i,t),Wt(ds,$i,"esm2017"),Wt("fire-js","")}bd("");function Hs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Na(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Id=Na,Ma=new Pn("auth","Firebase",Na());/**
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
 */const Hi=new Sa("@firebase/auth");function Qn(t,...e){Hi.logLevel<=Z.ERROR&&Hi.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function Ie(t,...e){throw Ws(t,...e)}function Be(t,...e){return Ws(t,...e)}function xa(t,e,n){const r=Object.assign(Object.assign({},Id()),{[e]:n});return new Pn("auth","Firebase",r).create(e,{appName:t.name})}function Ed(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(t,"argument-error"),xa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ws(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ma.create(t,...e)}function x(t,e,...n){if(!t)throw Ws(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qn(e),new Error(e)}function Je(t,e){t||ze(e)}/**
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
 */const Wi=new Map;function Ke(t){Je(t instanceof Function,"Expected a class definition");let e=Wi.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wi.set(t,e),e)}/**
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
 */function wd(t,e){const n=Ca(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cr(i,e!=null?e:{}))return s;Ie(s,"already-initialized")}return n.initialize({options:e})}function Td(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function gs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rd(){return Vi()==="http:"||Vi()==="https:"}function Vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rd()||Ju()||"connection"in navigator)?navigator.onLine:!0}function Ad(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=Gu()||Yu()}get(){return Sd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vs(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class La{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Od={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Cd=new Dn(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,s={}){return Ua(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=kn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),La.fetch()($a(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ua(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Od),e);try{const s=new Pd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xa(t,f,u);Ie(t,f)}}catch(s){if(s instanceof ht)throw s;Ie(t,"network-request-failed")}}async function xn(t,e,n,r,s={}){const i=await Mn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ie(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $a(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vs(t.config,s):`${t.config.apiScheme}://${s}`}class Pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Cd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function kd(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function Dd(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nd(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=zs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(Wr(s.auth_time)),issuedAtTime:pn(Wr(s.iat)),expirationTime:pn(Wr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function zs(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ta(r);return i?JSON.parse(i):(Qn("Failed to decode base64 JWT payload"),null)}catch(i){return Qn("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Md(t){const e=zs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&xd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ld{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rn(t,Dd(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fd(i.providerUserInfo):[],a=$d(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Ud(t){const e=Xe(t);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fd(t){return t.map(e=>{var{providerId:n}=e,r=Hs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bd(t,e){const n=await Ua(t,{},async()=>{const r=kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$a(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",La.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Sn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
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
 */function et(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ld(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nd(this,e)}reload(){return Ud(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rn(this,kd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:W,emailVerified:z,isAnonymous:ie,providerData:oe,stsTokenManager:me}=n;x(W&&me,e,"internal-error");const Ee=Sn.fromJSON(this.name,me);x(typeof W=="string",e,"internal-error"),et(h,e.name),et(p,e.name),x(typeof z=="boolean",e,"internal-error"),x(typeof ie=="boolean",e,"internal-error"),et(v,e.name),et(S,e.name),et(P,e.name),et(M,e.name),et(A,e.name),et(U,e.name);const Ne=new St({uid:W,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ie,photoURL:S,phoneNumber:v,tenantId:P,stsTokenManager:Ee,createdAt:A,lastLoginAt:U});return oe&&Array.isArray(oe)&&(Ne.providerData=oe.map(ye=>Object.assign({},ye))),M&&(Ne._redirectEventId=M),Ne}static async _fromIdTokenResponse(e,n,r=!1){const s=new Sn;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ur(i),i}}/**
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
 */class Ba{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ba.type="NONE";const zi=Ba;/**
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
 */function Zn(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(Ke(zi),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ke(zi);const o=Zn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=St._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vt(i,e,r))}}/**
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
 */function Ki(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(za(e))return"Blackberry";if(Ka(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||Ha(e))&&!e.includes("edge/"))return"Chrome";if(Va(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ja(t=fe()){return/firefox\//i.test(t)}function Ks(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ha(t=fe()){return/crios\//i.test(t)}function Wa(t=fe()){return/iemobile/i.test(t)}function Va(t=fe()){return/android/i.test(t)}function za(t=fe()){return/blackberry/i.test(t)}function Ka(t=fe()){return/webos/i.test(t)}function Ar(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jd(t=fe()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hd(){return Xu()&&document.documentMode===10}function qa(t=fe()){return Ar(t)||Va(t)||Ka(t)||za(t)||/windows phone/i.test(t)||Wa(t)}function Wd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ga(t,e=[]){let n;switch(t){case"Browser":n=Ki(fe());break;case"Worker":n=`${Ki(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class Vd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class zd{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qi(this),this.idTokenSubscription=new qi(this),this.beforeStateQueue=new Vd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ma,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ur(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ad()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ga(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function tn(t){return Xe(t)}class qi{constructor(e){this.auth=e,this.observer=null,this.addObserver=df(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Kd(t,e,n){const r=tn(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ja(e),{host:o,port:a}=qd(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Gd()}function Ja(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qd(t){const e=Ja(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gi(o)}}}function Gi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function Jd(t,e){return Mn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Yd(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",Nn(t,e))}/**
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
 */async function Xd(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}async function Qd(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}/**
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
 */class An extends qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new An(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Yd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xd(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qd(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zt(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
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
 */const Zd="http://localhost";class Ct extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ct(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zt(e,n)}buildRequest(){const e={requestUri:Zd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kn(n)}return e}}/**
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
 */function eh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function th(t){const e=fn(dn(t)).link,n=e?fn(dn(e)).deep_link_id:null,r=fn(dn(t)).deep_link_id;return(r?fn(dn(r)).link:null)||r||n||e||t}class Gs{constructor(e){var n,r,s,i,o,a;const c=fn(dn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=eh((s=c.mode)!==null&&s!==void 0?s:null);x(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=th(e);try{return new Gs(n)}catch{return null}}}/**
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
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gs.parseLink(n);return x(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Js{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ln extends Js{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class st extends Ln{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
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
 */class it extends Ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ct._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class ot extends Ln{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */class at extends Ln{constructor(){super("twitter.com")}static credential(e,n){return Ct._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return at.credential(n,r)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */async function nh(t,e){return xn(t,"POST","/v1/accounts:signUp",Nn(t,e))}/**
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
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=Ji(r);return new Pt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ji(r);return new Pt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ji(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fr extends ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fr(e,n,r,s)}}function Ya(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fr._fromErrorAndOperation(t,i,e,r):i})}async function rh(t,e,n=!1){const r=await Rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pt._forOperation(t,"link",r)}/**
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
 */async function sh(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Rn(t,Ya(s,i,e,t),n);x(o.idToken,s,"internal-error");const a=zs(o.idToken);x(a,s,"internal-error");const{sub:c}=a;return x(t.uid===c,s,"user-mismatch"),Pt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ie(s,"user-mismatch"),o}}/**
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
 */async function Xa(t,e,n=!1){const r="signIn",s=await Ya(t,r,e),i=await Pt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ih(t,e){return Xa(tn(t),e)}async function fm(t,e,n){const r=tn(t),s=await nh(r,{returnSecureToken:!0,email:e,password:n}),i=await Pt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function dm(t,e,n){return ih(Xe(t),nn.credential(e,n))}function oh(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function ah(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Qa(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function ch(t){return Xe(t).signOut()}const dr="__sak";/**
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
 */class Za{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lh(){const t=fe();return Ks(t)||Ar(t)}const uh=1e3,fh=10;class ec extends Za{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lh()&&Wd(),this.fallbackToPolling=qa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ec.type="LOCAL";const dh=ec;/**
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
 */class tc extends Za{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tc.type="SESSION";const nc=tc;/**
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
 */function hh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Or(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await hh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
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
 */function Ys(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ph{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ys("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function gh(t){je().location.href=t}/**
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
 */function rc(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function mh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _h(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vh(){return rc()?self:null}/**
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
 */const sc="firebaseLocalStorageDb",yh=1,hr="firebaseLocalStorage",ic="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cr(t,e){return t.transaction([hr],e?"readwrite":"readonly").objectStore(hr)}function bh(){const t=indexedDB.deleteDatabase(sc);return new Un(t).toPromise()}function ms(){const t=indexedDB.open(sc,yh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hr,{keyPath:ic})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hr)?e(r):(r.close(),await bh(),e(await ms()))})})}async function Yi(t,e,n){const r=Cr(t,!0).put({[ic]:e,value:n});return new Un(r).toPromise()}async function Ih(t,e){const n=Cr(t,!1).get(e),r=await new Un(n).toPromise();return r===void 0?null:r.value}function Xi(t,e){const n=Cr(t,!0).delete(e);return new Un(n).toPromise()}const Eh=800,wh=3;class oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(vh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mh(),!this.activeServiceWorker)return;this.sender=new ph(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_h()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ms();return await Yi(e,dr,"1"),await Xi(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ih(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cr(s,!1).getAll();return new Un(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oc.type="LOCAL";const Th=oc;/**
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
 */function Rh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Sh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rh().appendChild(r)})}function Ah(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Dn(3e4,6e4);/**
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
 */function ac(t,e){return e?Ke(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xs extends qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Oh(t){return Xa(t.auth,new Xs(t),t.bypassAuthState)}function Ch(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),sh(n,new Xs(t),t.bypassAuthState)}async function Ph(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),rh(n,new Xs(t),t.bypassAuthState)}/**
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
 */class cc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oh;case"linkViaPopup":case"linkViaRedirect":return Ph;case"reauthViaPopup":case"reauthViaRedirect":return Ch;default:Ie(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kh=new Dn(2e3,1e4);async function hm(t,e,n){const r=tn(t);Ed(t,e,Js);const s=ac(r,n);return new wt(r,"signInViaPopup",e,s).executeNotNull()}class wt extends cc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kh.get())};e()}}wt.currentPopupAction=null;/**
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
 */const Dh="pendingRedirect",er=new Map;class Nh extends cc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=er.get(this.auth._key());if(!e){try{const r=await Mh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}er.set(this.auth._key(),e)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mh(t,e){const n=Uh(e),r=Lh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xh(t,e){er.set(t._key(),e)}function Lh(t){return Ke(t._redirectPersistence)}function Uh(t){return Zn(Dh,t.config.apiKey,t.name)}async function $h(t,e,n=!1){const r=tn(t),s=ac(r,e),o=await new Nh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Fh=10*60*1e3;class Bh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qi(e))}saveEventToCache(e){this.cachedEventUids.add(Qi(e)),this.lastProcessedEventTime=Date.now()}}function Qi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lc(t);default:return!1}}/**
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
 */async function Hh(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
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
 */const Wh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vh=/^https?/;async function zh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hh(t);for(const n of e)try{if(Kh(n))return}catch{}Ie(t,"unauthorized-domain")}function Kh(t){const e=gs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vh.test(n))return!1;if(Wh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qh=new Dn(3e4,6e4);function Zi(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gh(t){return new Promise((e,n)=>{var r,s,i;function o(){Zi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zi(),n(Be(t,"network-request-failed"))},timeout:qh.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=Ah("iframefcb");return je()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},Sh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw tr=null,e})}let tr=null;function Jh(t){return tr=tr||Gh(t),tr}/**
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
 */const Yh=new Dn(5e3,15e3),Xh="__/auth/iframe",Qh="emulator/auth/iframe",Zh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ep=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tp(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vs(e,Qh):`https://${t.config.authDomain}/${Xh}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=ep.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${kn(r).slice(1)}`}async function np(t){const e=await Jh(t),n=je().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:tp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},Yh.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sp=500,ip=600,op="_blank",ap="http://localhost";class eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cp(t,e,n,r=sp,s=ip){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rp),{width:r.toString(),height:s.toString(),top:i,left:o}),u=fe().toLowerCase();n&&(a=Ha(u)?op:n),ja(u)&&(e=e||ap,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[v,S])=>`${p}${v}=${S},`,"");if(jd(u)&&a!=="_self")return lp(e||"",a),new eo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new eo(h)}function lp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const up="__/auth/handler",fp="emulator/auth/handler";function to(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof Js){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ff(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ln){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${dp(t)}?${kn(a).slice(1)}`}function dp({config:t}){return t.emulator?Vs(t,fp):`https://${t.authDomain}/${up}`}/**
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
 */const Vr="webStorageSupport";class hp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nc,this._completeRedirectFn=$h,this._overrideRedirectResult=xh}async _openPopup(e,n,r,s){var i;Je((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=to(e,n,r,gs(),s);return cp(e,o,Ys())}async _openRedirect(e,n,r,s){return await this._originValidation(e),gh(to(e,n,r,gs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await np(e),r=new Bh(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vr];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qa()||Ks()||Ar()}}const pp=hp;var no="@firebase/auth",ro="0.20.11";/**
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
 */class gp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _p(t){wn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ga(t)},f=new zd(a,c,u);return Td(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Jt("auth-internal",e=>{const n=tn(e.getProvider("auth").getImmediate());return(r=>new gp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(no,ro,mp(t)),Wt(no,ro,"esm2017")}/**
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
 */const vp=5*60,yp=Ra("authIdTokenMaxAge")||vp;let so=null;const bp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yp)return;const s=n==null?void 0:n.token;so!==s&&(so=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uc(t=fd()){const e=Ca(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wd(t,{popupRedirectResolver:pp,persistence:[Th,dh,nc]}),r=Ra("authTokenSyncURL");if(r){const i=bp(r);ah(n,i,()=>i(n.currentUser)),oh(n,o=>i(o))}const s=sf("auth");return s&&Kd(n,`http://${s}`),n}_p("Browser");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window<"u";function Ip(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function zr(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const gn=()=>{},De=Array.isArray,Ep=/\/$/,wp=t=>t.replace(Ep,"");function Kr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ap(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Tp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yt(e.matched[r],n.matched[s])&&fc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sp(t[n],e[n]))return!1;return!0}function Sp(t,e){return De(t)?oo(t,e):De(e)?oo(e,t):t===e}function oo(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ap(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var mn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mn||(mn={}));function Op(t){if(!t)if(Lt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wp(t)}const Cp=/^[^#]+#/;function Pp(t,e){return t.replace(Cp,"#")+e}function kp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ao(t,e){return(history.state?history.state.position-e:-1)+t}const _s=new Map;function Np(t,e){_s.set(t,e)}function Mp(t){const e=_s.get(t);return _s.delete(t),e}let xp=()=>location.protocol+"//"+location.host;function dc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),io(c,"")}return io(n,t)+r+s}function Lp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const v=dc(t,location),S=n.value,P=e.value;let M=0;if(p){if(n.value=v,e.value=p,o&&o===S){o=null;return}M=P?p.position-P.position:0}else r(v);s.forEach(A=>{A(n.value,S,{delta:M,type:On.pop,direction:M?M>0?mn.forward:mn.back:mn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){const{history:p}=window;!p.state||p.replaceState(q({},p.state,{scroll:Pr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:u,destroy:h}}function co(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pr():null}}function Up(t){const{history:e,location:n}=window,r={value:dc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:xp()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](p)}}function o(c,u){const f=q({},e.state,co(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=q({},s.value,e.state,{forward:c,scroll:Pr()});i(f.current,f,!0);const h=q({},co(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $p(t){t=Op(t);const e=Up(t),n=Lp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:Pp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fp(t){return typeof t=="string"||t&&typeof t=="object"}function hc(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pc=Symbol("");var lo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lo||(lo={}));function Xt(t,e){return q(new Error,{type:t,[pc]:!0},e)}function We(t,e){return t instanceof Error&&pc in t&&(e==null||!!(t.type&e))}const uo="[^/]+?",Bp={sensitive:!1,strict:!1,start:!0,end:!0},jp=/[.+*?^${}()[\]/\\]/g;function Hp(t,e){const n=q({},Bp,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(jp,"\\$&"),v+=40;else if(p.type===1){const{value:S,repeatable:P,optional:M,regexp:A}=p;i.push({name:S,repeatable:P,optional:M});const U=A||uo;if(U!==uo){v+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+z.message)}}let W=P?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(W=M&&u.length<2?`(?:/${W})`:"/"+W),M&&(W+="?"),s+=W,v+=20,M&&(v+=-8),P&&(v+=-20),U===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const v=f[p]||"",S=i[p-1];h[S.name]=v&&S.repeatable?v.split("/"):v}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of p)if(v.type===0)f+=v.value;else if(v.type===1){const{value:S,repeatable:P,optional:M}=v,A=S in u?u[S]:"";if(De(A)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=De(A)?A.join("/"):A;if(!U)if(M)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Wp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Vp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Wp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fo(r))return 1;if(fo(s))return-1}return s.length-r.length}function fo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zp={type:0,value:""},Kp=/[a-zA-Z0-9_]/;function qp(t){if(!t)return[[]];if(t==="/")return[[zp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Kp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Gp(t,e,n){const r=Hp(qp(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jp(t,e){const n=[],r=new Map;e=go({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const v=!p,S=Yp(f);S.aliasOf=p&&p.record;const P=go(e,f),M=[S];if("alias"in f){const W=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of W)M.push(q({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let A,U;for(const W of M){const{path:z}=W;if(h&&z[0]!=="/"){const ie=h.record.path,oe=ie[ie.length-1]==="/"?"":"/";W.path=h.record.path+(z&&oe+z)}if(A=Gp(W,h,P),p?p.alias.push(A):(U=U||A,U!==A&&U.alias.push(A),v&&f.name&&!po(A)&&o(f.name)),S.children){const ie=S.children;for(let oe=0;oe<ie.length;oe++)i(ie[oe],A,p&&p.children[oe])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return U?()=>{o(U)}:gn}function o(f){if(hc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Vp(f,n[h])>=0&&(f.record.path!==n[h].record.path||!gc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!po(f)&&r.set(f.record.name,f)}function u(f,h){let p,v={},S,P;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Xt(1,{location:f});P=p.record.name,v=q(ho(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params&&ho(f.params,p.keys.map(U=>U.name))),S=p.stringify(v)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(v=p.parse(S),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw Xt(1,{location:f,currentLocation:h});P=p.record.name,v=q({},h.params,f.params),S=p.stringify(v)}const M=[];let A=p;for(;A;)M.unshift(A.record),A=A.parent;return{name:P,path:S,params:v,matched:M,meta:Qp(M)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ho(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function po(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qp(t){return t.reduce((e,n)=>q(e,n.meta),{})}function go(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gc(t,e){return e.children.some(n=>n===t||gc(t,n))}const mc=/#/g,Zp=/&/g,eg=/\//g,tg=/=/g,ng=/\?/g,_c=/\+/g,rg=/%5B/g,sg=/%5D/g,vc=/%5E/g,ig=/%60/g,yc=/%7B/g,og=/%7C/g,bc=/%7D/g,ag=/%20/g;function Qs(t){return encodeURI(""+t).replace(og,"|").replace(rg,"[").replace(sg,"]")}function cg(t){return Qs(t).replace(yc,"{").replace(bc,"}").replace(vc,"^")}function vs(t){return Qs(t).replace(_c,"%2B").replace(ag,"+").replace(mc,"%23").replace(Zp,"%26").replace(ig,"`").replace(yc,"{").replace(bc,"}").replace(vc,"^")}function lg(t){return vs(t).replace(tg,"%3D")}function ug(t){return Qs(t).replace(mc,"%23").replace(ng,"%3F")}function fg(t){return t==null?"":ug(t).replace(eg,"%2F")}function pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_c," "),o=i.indexOf("="),a=pr(o<0?i:i.slice(0,o)),c=o<0?null:pr(i.slice(o+1));if(a in e){let u=e[a];De(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function mo(t){let e="";for(let n in t){const r=t[n];if(n=lg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&vs(i)):[r&&vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pg=Symbol(""),_o=Symbol(""),kr=Symbol(""),Ic=Symbol(""),ys=Symbol("");function an(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xt(4,{from:n,to:e})):h instanceof Error?a(h):Fp(h)?a(Xt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function qr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gg(a)){const u=(a.__vccOpts||a)[e];u&&s.push(rt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Ip(u)?u.default:u;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&rt(p,n,r,i,o)()}))}}return s}function gg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vo(t){const e=qe(kr),n=qe(Ic),r=be(()=>e.resolve(Bt(t.to))),s=be(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Yt.bind(null,f));if(p>-1)return p;const v=yo(c[u-2]);return u>1&&yo(f)===v&&h[h.length-1].path!==v?h.findIndex(Yt.bind(null,c[u-2])):p}),i=be(()=>s.value>-1&&yg(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&fc(n.params,r.value.params));function a(c={}){return vg(c)?e[Bt(t.replace)?"replace":"push"](Bt(t.to)).catch(gn):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mg=na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vo,setup(t,{slots:e}){const n=Cn(vo(t)),{options:r}=qe(kr),s=be(()=>({[bo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_g=mg;function vg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bo=(t,e,n)=>t!=null?t:e!=null?e:n,bg=na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qe(ys),s=be(()=>t.route||r.value),i=qe(_o,0),o=be(()=>{let u=Bt(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=be(()=>s.value.matched[o.value]);Gn(_o,be(()=>o.value+1)),Gn(pg,a),Gn(ys,s);const c=Vo();return Jn(()=>[c.value,a.value,t.name],([u,f,h],[p,v,S])=>{f&&(f.instances[h]=u,v&&v!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Yt(f,v)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Io(n.default,{Component:p,route:u});const v=h.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,M=ba(p,q({},S,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return Io(n.default,{Component:M,route:u})||M}}});function Io(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ig=bg;function Eg(t){const e=Jp(t.routes,t),n=t.parseQuery||dg,r=t.stringifyQuery||mo,s=t.history,i=an(),o=an(),a=an(),c=hl(tt);let u=tt;Lt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zr.bind(null,_=>""+_),h=zr.bind(null,fg),p=zr.bind(null,pr);function v(_,O){let T,k;return hc(_)?(T=e.getRecordMatcher(_),k=O):k=_,e.addRoute(k,T)}function S(_){const O=e.getRecordMatcher(_);O&&e.removeRoute(O)}function P(){return e.getRoutes().map(_=>_.record)}function M(_){return!!e.getRecordMatcher(_)}function A(_,O){if(O=q({},O||c.value),typeof _=="string"){const l=Kr(n,_,O.path),d=e.resolve({path:l.path},O),g=s.createHref(l.fullPath);return q(l,d,{params:p(d.params),hash:pr(l.hash),redirectedFrom:void 0,href:g})}let T;if("path"in _)T=q({},_,{path:Kr(n,_.path,O.path).path});else{const l=q({},_.params);for(const d in l)l[d]==null&&delete l[d];T=q({},_,{params:h(_.params)}),O.params=h(O.params)}const k=e.resolve(T,O),V=_.hash||"";k.params=f(p(k.params));const ee=Tp(r,q({},_,{hash:cg(V),path:k.path})),B=s.createHref(ee);return q({fullPath:ee,hash:V,query:r===mo?hg(_.query):_.query||{}},k,{redirectedFrom:void 0,href:B})}function U(_){return typeof _=="string"?Kr(n,_,c.value.path):q({},_)}function W(_,O){if(u!==_)return Xt(8,{from:O,to:_})}function z(_){return me(_)}function ie(_){return z(q(U(_),{replace:!0}))}function oe(_){const O=_.matched[_.matched.length-1];if(O&&O.redirect){const{redirect:T}=O;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),q({query:_.query,hash:_.hash,params:"path"in k?{}:_.params},k)}}function me(_,O){const T=u=A(_),k=c.value,V=_.state,ee=_.force,B=_.replace===!0,l=oe(T);if(l)return me(q(U(l),{state:typeof l=="object"?q({},V,l.state):V,force:ee,replace:B}),O||T);const d=T;d.redirectedFrom=O;let g;return!ee&&Rp(r,k,T)&&(g=Xt(16,{to:d,from:k}),gt(k,k,!0,!1)),(g?Promise.resolve(g):Ne(d,k)).catch(m=>We(m)?We(m,2)?m:we(m):X(m,d,k)).then(m=>{if(m){if(We(m,2))return me(q({replace:B},U(m.to),{state:typeof m.to=="object"?q({},V,m.to.state):V,force:ee}),O||d)}else m=Qe(d,k,!0,B,V);return ye(d,k,m),m})}function Ee(_,O){const T=W(_,O);return T?Promise.reject(T):Promise.resolve()}function Ne(_,O){let T;const[k,V,ee]=wg(_,O);T=qr(k.reverse(),"beforeRouteLeave",_,O);for(const l of k)l.leaveGuards.forEach(d=>{T.push(rt(d,_,O))});const B=Ee.bind(null,_,O);return T.push(B),Mt(T).then(()=>{T=[];for(const l of i.list())T.push(rt(l,_,O));return T.push(B),Mt(T)}).then(()=>{T=qr(V,"beforeRouteUpdate",_,O);for(const l of V)l.updateGuards.forEach(d=>{T.push(rt(d,_,O))});return T.push(B),Mt(T)}).then(()=>{T=[];for(const l of _.matched)if(l.beforeEnter&&!O.matched.includes(l))if(De(l.beforeEnter))for(const d of l.beforeEnter)T.push(rt(d,_,O));else T.push(rt(l.beforeEnter,_,O));return T.push(B),Mt(T)}).then(()=>(_.matched.forEach(l=>l.enterCallbacks={}),T=qr(ee,"beforeRouteEnter",_,O),T.push(B),Mt(T))).then(()=>{T=[];for(const l of o.list())T.push(rt(l,_,O));return T.push(B),Mt(T)}).catch(l=>We(l,8)?l:Promise.reject(l))}function ye(_,O,T){for(const k of a.list())k(_,O,T)}function Qe(_,O,T,k,V){const ee=W(_,O);if(ee)return ee;const B=O===tt,l=Lt?history.state:{};T&&(k||B?s.replace(_.fullPath,q({scroll:B&&l&&l.scroll},V)):s.push(_.fullPath,V)),c.value=_,gt(_,O,T,B),we()}let Me;function kt(){Me||(Me=s.listen((_,O,T)=>{if(!$n.listening)return;const k=A(_),V=oe(k);if(V){me(q(V,{replace:!0}),k).catch(gn);return}u=k;const ee=c.value;Lt&&Np(ao(ee.fullPath,T.delta),Pr()),Ne(k,ee).catch(B=>We(B,12)?B:We(B,2)?(me(B.to,k).then(l=>{We(l,20)&&!T.delta&&T.type===On.pop&&s.go(-1,!1)}).catch(gn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),X(B,k,ee))).then(B=>{B=B||Qe(k,ee,!1),B&&(T.delta&&!We(B,8)?s.go(-T.delta,!1):T.type===On.pop&&We(B,20)&&s.go(-1,!1)),ye(k,ee,B)}).catch(gn)}))}let pt=an(),rn=an(),ne;function X(_,O,T){we(_);const k=rn.list();return k.length?k.forEach(V=>V(_,O,T)):console.error(_),Promise.reject(_)}function G(){return ne&&c.value!==tt?Promise.resolve():new Promise((_,O)=>{pt.add([_,O])})}function we(_){return ne||(ne=!_,kt(),pt.list().forEach(([O,T])=>_?T(_):O()),pt.reset()),_}function gt(_,O,T,k){const{scrollBehavior:V}=t;if(!Lt||!V)return Promise.resolve();const ee=!T&&Mp(ao(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Jo().then(()=>V(_,O,ee)).then(B=>B&&Dp(B)).catch(B=>X(B,_,O))}const Te=_=>s.go(_);let pe;const Dt=new Set,$n={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,hasRoute:M,getRoutes:P,resolve:A,options:t,push:z,replace:ie,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:rn.add,isReady:G,install(_){const O=this;_.component("RouterLink",_g),_.component("RouterView",Ig),_.config.globalProperties.$router=O,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),Lt&&!pe&&c.value===tt&&(pe=!0,z(s.location).catch(V=>{}));const T={};for(const V in tt)T[V]=be(()=>c.value[V]);_.provide(kr,O),_.provide(Ic,Cn(T)),_.provide(ys,c);const k=_.unmount;Dt.add(_),_.unmount=function(){Dt.delete(_),Dt.size<1&&(u=tt,Me&&Me(),Me=null,c.value=tt,pe=!1,ne=!1),k()}}};return $n}function Mt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Yt(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Yt(u,c))||s.push(c))}return[n,r,s]}function Tg(){return qe(kr)}const Ec=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rg=t=>(Tl("data-v-49d23848"),t=t(),Rl(),t),Sg=Rg(()=>Ht("h1",null,"Bem vindo ao Portal.org",-1)),Ag={__name:"Header",setup(t){const e=Tg(),n=Vo(!1);let r;ia(()=>{r=uc(),Qa(r,i=>{i?n.value=!0:n.value=!1})});const s=()=>{ch(r).then(()=>{e.push("/")})};return(i,o)=>{const a=ts("router-link");return ar(),as(Se,null,[Ht("header",null,[Sg,Ht("nav",null,[se(a,{to:"/"},{default:ln(()=>[un("Home")]),_:1}),se(a,{to:"/register"},{default:ln(()=>[un("Register")]),_:1}),se(a,{to:"/feed"},{default:ln(()=>[un("Feed")]),_:1}),se(a,{to:"/sing-in"},{default:ln(()=>[un("Sing In")]),_:1}),n.value?(ar(),as("button",{key:0,onClick:o[0]||(o[0]=c=>s())},"Sing Out")):hu("",!0)])]),Ht("p",null,kc(n.value?"Usuario online":"Nao logado"),1)],64)}}},Og=Ec(Ag,[["__scopeId","data-v-49d23848"]]);const Cg={components:{Header:Og}};function Pg(t,e,n,r,s,i){const o=ts("Header"),a=ts("router-view");return ar(),as(Se,null,[se(o),se(a)],64)}const kg=Ec(Cg,[["render",Pg]]),Dg="modulepreload",Ng=function(t){return"/"+t},Eo={},zn=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ng(i),i in Eo)return;Eo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Dg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},wc=Eg({history:$p(),routes:[{path:"/",component:()=>zn(()=>import("./Home.8870b751.js"),[])},{path:"/register",component:()=>zn(()=>import("./Register.dc2dfb93.js"),["assets/Register.dc2dfb93.js","assets/Register.8cbe2898.css"])},{path:"/sing-in",component:()=>zn(()=>import("./SingIn.17fd3628.js"),["assets/SingIn.17fd3628.js","assets/SingIn.8cbe2898.css"])},{path:"/feed",component:()=>zn(()=>import("./Feed.08e3c5d4.js"),[]),meta:{requiresAuth:!0}}]}),Mg=()=>new Promise((t,e)=>{const n=Qa(uc(),r=>{n(),t(r)},e)});wc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Mg()?n():(alert("Your dont have access"),n("/")):n()});function xg(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Zs={exports:{}};const Lg={},Ug=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),ei=xg(Ug),$g="dotenv",Fg="16.0.3",Bg="Loads environment variables from .env file",jg="lib/main.js",Hg="lib/main.d.ts",Wg={".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},Vg={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},zg={type:"git",url:"git://github.com/motdotla/dotenv.git"},Kg=["dotenv","env",".env","environment","variables","config","settings"],qg="README.md",Gg="BSD-2-Clause",Jg={"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},Yg={node:">=12"},Xg={name:$g,version:Fg,description:Bg,main:jg,types:Hg,exports:Wg,scripts:Vg,repository:zg,keywords:Kg,readmeFilename:qg,license:Gg,devDependencies:Jg,engines:Yg},Qg=ei,Tc=ei,Zg=ei,em=Xg,tm=em.version,nm=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function rm(t){const e={};let n=t.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=nm.exec(n))!=null;){const s=r[1];let i=r[2]||"";i=i.trim();const o=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),o==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),e[s]=i}return e}function Gr(t){console.log(`[dotenv@${tm}][DEBUG] ${t}`)}function sm(t){return t[0]==="~"?Tc.join(Zg.homedir(),t.slice(1)):t}function im(t){let e=Tc.resolve(process.cwd(),".env"),n="utf8";const r=Boolean(t&&t.debug),s=Boolean(t&&t.override);t&&(t.path!=null&&(e=sm(t.path)),t.encoding!=null&&(n=t.encoding));try{const i=Dr.parse(Qg.readFileSync(e,{encoding:n}));return Object.keys(i).forEach(function(o){Object.prototype.hasOwnProperty.call(process.env,o)?(s===!0&&(process.env[o]=i[o]),r&&Gr(s===!0?`"${o}" is already defined in \`process.env\` and WAS overwritten`:`"${o}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[o]=i[o]}),{parsed:i}}catch(i){return r&&Gr(`Failed to load ${e} ${i.message}`),{error:i}}}const Dr={config:im,parse:rm};Zs.exports.config=Dr.config;Zs.exports.parse=Dr.parse;Zs.exports=Dr;var om="firebase",am="9.13.0";/**
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
 */Wt(om,am,"app");const cm={apiKey:"AIzaSyCipkol844gtKOFbAQbkEC5oKYIXhi3yiM",authDomain:"testando-login.firebaseapp.com",projectId:"testando-login",storageBucket:"testando-login.appspot.com",messagingSenderId:"210116723729",appId:"1:210116723729:web:7cf451485fa7ee66551db0",measurementId:"G-SVTXFPE14Q"};Pa(cm);const Rc=Vu(kg);Rc.use(wc);Rc.mount("#app");export{Se as F,it as G,Ec as _,Ht as a,fm as b,as as c,hu as d,dm as e,uc as g,ar as o,Vo as r,hm as s,kc as t,Tg as u,um as v,lm as w};
