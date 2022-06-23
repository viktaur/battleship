const Ko=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ko();function Pr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vo=Pr(qo);function hi(e){return!!e||e===""}function Ir(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?Go(r):Ir(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(Z(e))return e}}const Xo=/;(?![^(]*\))/g,Jo=/:(.+)/;function Go(e){const t={};return e.split(Xo).forEach(n=>{if(n){const r=n.split(Jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qt(e){let t="";if(te(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=qt(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cn=e=>te(e)?e:e==null?"":F(e)||Z(e)&&(e.toString===yi||!L(e.toString))?JSON.stringify(e,vi,2):String(e),vi=(e,t)=>t&&t.__v_isRef?vi(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:gi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!F(t)&&!_i(t)?String(t):t,K={},gt=[],xe=()=>{},Zo=()=>!1,Qo=/^on[^a-z]/,kn=e=>Qo.test(e),Tr=e=>e.startsWith("onUpdate:"),se=Object.assign,Sr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},es=Object.prototype.hasOwnProperty,D=(e,t)=>es.call(e,t),F=Array.isArray,bt=e=>Cn(e)==="[object Map]",gi=e=>Cn(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",Nr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",bi=e=>Z(e)&&L(e.then)&&L(e.catch),yi=Object.prototype.toString,Cn=e=>yi.call(e),ts=e=>Cn(e).slice(8,-1),_i=e=>Cn(e)==="[object Object]",Mr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),An=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ns=/-(\w)/g,Te=An(e=>e.replace(ns,(t,n)=>n?n.toUpperCase():"")),rs=/\B([A-Z])/g,st=An(e=>e.replace(rs,"-$1").toLowerCase()),On=An(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=An(e=>e?`on${On(e)}`:""),un=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},as=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ga;const is=()=>ga||(ga=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Oe;class os{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ss(e,t=Oe){t&&t.active&&t.effects.push(e)}const $r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},xi=e=>(e.w&Ve)>0,wi=e=>(e.n&Ve)>0,ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},fs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];xi(a)&&!wi(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},er=new WeakMap;let St=0,Ve=1;const tr=30;let be;const nt=Symbol(""),nr=Symbol("");class Fr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ss(this,r)}run(){if(!this.active)return this.fn();let t=be,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=be,be=this,Ke=!0,Ve=1<<++St,St<=tr?ls(this):ba(this),this.fn()}finally{St<=tr&&fs(this),Ve=1<<--St,be=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const ki=[];function kt(){ki.push(Ke),Ke=!1}function Ct(){const e=ki.pop();Ke=e===void 0?!0:e}function pe(e,t,n){if(Ke&&be){let r=er.get(e);r||er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=$r()),Ci(a)}}function Ci(e,t){let n=!1;St<=tr?wi(e)||(e.n|=Ve,n=!xi(e)):n=!e.has(be),n&&(e.add(be),be.deps.push(e))}function Fe(e,t,n,r,a,i){const o=er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Mr(n)&&s.push(o.get("length")):(s.push(o.get(nt)),bt(e)&&s.push(o.get(nr)));break;case"delete":F(e)||(s.push(o.get(nt)),bt(e)&&s.push(o.get(nr)));break;case"set":bt(e)&&s.push(o.get(nt));break}if(s.length===1)s[0]&&rr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);rr($r(l))}}function rr(e,t){for(const n of F(e)?e:[...e])(n!==be||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const cs=Pr("__proto__,__v_isRef,__isVue"),Ai=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Nr)),us=Lr(),ds=Lr(!1,!0),ms=Lr(!0),ya=ps();function ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kt();const r=H(this)[t].apply(this,n);return Ct(),r}}),e}function Lr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ts:Ti:t?Ii:Pi).get(r))return r;const o=F(r);if(!e&&o&&D(ya,a))return Reflect.get(ya,a,i);const s=Reflect.get(r,a,i);return(Nr(a)?Ai.has(a):cs(a))||(e||pe(r,"get",a),t)?s:ae(s)?!o||!Mr(a)?s.value:s:Z(s)?e?Si(s):Dr(s):s}}const hs=Oi(),vs=Oi(!0);function Oi(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&ae(o)&&!ae(a))return!1;if(!e&&!Bt(a)&&(Ni(a)||(a=H(a),o=H(o)),!F(n)&&ae(o)&&!ae(a)))return o.value=a,!0;const s=F(n)&&Mr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?un(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function gs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function bs(e,t){const n=Reflect.has(e,t);return(!Nr(t)||!Ai.has(t))&&pe(e,"has",t),n}function ys(e){return pe(e,"iterate",F(e)?"length":nt),Reflect.ownKeys(e)}const Ei={get:us,set:hs,deleteProperty:gs,has:bs,ownKeys:ys},_s={get:ms,set(e,t){return!0},deleteProperty(e,t){return!0}},xs=se({},Ei,{get:ds,set:vs}),Rr=e=>e,En=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);t!==i&&!n&&pe(a,"get",t),!n&&pe(a,"get",i);const{has:o}=En(a),s=r?Rr:n?Ur:Br;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Zt(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return e!==a&&!t&&pe(r,"has",e),!t&&pe(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Qt(e,t=!1){return e=e.__v_raw,!t&&pe(H(e),"iterate",nt),Reflect.get(e,"size",e)}function _a(e){e=H(e);const t=H(this);return En(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function xa(e,t){t=H(t);const n=H(this),{has:r,get:a}=En(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?un(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function wa(e){const t=H(this),{has:n,get:r}=En(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function ka(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function en(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Rr:e?Ur:Br;return!e&&pe(s,"iterate",nt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function tn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Rr:t?Ur:Br;return!t&&pe(i,"iterate",l?nr:nt),{next(){const{value:m,done:g}=u.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function ws(){const e={get(i){return Gt(this,i)},get size(){return Qt(this)},has:Zt,add:_a,set:xa,delete:wa,clear:ka,forEach:en(!1,!1)},t={get(i){return Gt(this,i,!1,!0)},get size(){return Qt(this)},has:Zt,add:_a,set:xa,delete:wa,clear:ka,forEach:en(!1,!0)},n={get(i){return Gt(this,i,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!1)},r={get(i){return Gt(this,i,!0,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tn(i,!1,!1),n[i]=tn(i,!0,!1),t[i]=tn(i,!1,!0),r[i]=tn(i,!0,!0)}),[e,n,t,r]}const[ks,Cs,As,Os]=ws();function zr(e,t){const n=t?e?Os:As:e?Cs:ks;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Es={get:zr(!1,!1)},Ps={get:zr(!1,!0)},Is={get:zr(!0,!1)},Pi=new WeakMap,Ii=new WeakMap,Ti=new WeakMap,Ts=new WeakMap;function Ss(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ns(e){return e.__v_skip||!Object.isExtensible(e)?0:Ss(ts(e))}function Dr(e){return Bt(e)?e:jr(e,!1,Ei,Es,Pi)}function Ms(e){return jr(e,!1,xs,Ps,Ii)}function Si(e){return jr(e,!0,_s,Is,Ti)}function jr(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ns(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Bt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Ni(e){return!!(e&&e.__v_isShallow)}function Mi(e){return yt(e)||Bt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function $i(e){return dn(e,"__v_skip",!0),e}const Br=e=>Z(e)?Dr(e):e,Ur=e=>Z(e)?Si(e):e;function $s(e){Ke&&be&&(e=H(e),Ci(e.dep||(e.dep=$r())))}function Fs(e,t){e=H(e),e.dep&&rr(e.dep)}function ae(e){return!!(e&&e.__v_isRef===!0)}function Ls(e){return ae(e)?e.value:e}const Rs={get:(e,t,n)=>Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Fi(e){return yt(e)?e:new Proxy(e,Rs)}class zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Fr(t,()=>{this._dirty||(this._dirty=!0,Fs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return $s(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ds(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=xe):(r=e.get,a=e.set),new zs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Pn(i,t,n)}return a}function we(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&bi(i)&&i.catch(o=>{Pn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function Pn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}js(e,n,a,r)}function js(e,t,n,r=!0){console.error(e)}let mn=!1,ar=!1;const me=[];let $e=0;const Ft=[];let Nt=null,dt=0;const Lt=[];let Ye=null,mt=0;const Li=Promise.resolve();let Hr=null,ir=null;function Bs(e){const t=Hr||Li;return e?t.then(this?e.bind(this):e):t}function Us(e){let t=$e+1,n=me.length;for(;t<n;){const r=t+n>>>1;Ut(me[r])<e?t=r+1:n=r}return t}function Ri(e){(!me.length||!me.includes(e,mn&&e.allowRecurse?$e+1:$e))&&e!==ir&&(e.id==null?me.push(e):me.splice(Us(e.id),0,e),zi())}function zi(){!mn&&!ar&&(ar=!0,Hr=Li.then(Bi))}function Hs(e){const t=me.indexOf(e);t>$e&&me.splice(t,1)}function Di(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),zi()}function Ys(e){Di(e,Nt,Ft,dt)}function Ws(e){Di(e,Ye,Lt,mt)}function Yr(e,t=null){if(Ft.length){for(ir=t,Nt=[...new Set(Ft)],Ft.length=0,dt=0;dt<Nt.length;dt++)Nt[dt]();Nt=null,dt=0,ir=null,Yr(e,t)}}function ji(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>Ut(n)-Ut(r)),mt=0;mt<Ye.length;mt++)Ye[mt]();Ye=null,mt=0}}const Ut=e=>e.id==null?1/0:e.id;function Bi(e){ar=!1,mn=!0,Yr(e),me.sort((n,r)=>Ut(n)-Ut(r));const t=xe;try{for($e=0;$e<me.length;$e++){const n=me[$e];n&&n.active!==!1&&qe(n,null,14)}}finally{$e=0,me.length=0,ji(),mn=!1,Hr=null,(me.length||Ft.length||Lt.length)&&Bi(e)}}function Ks(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||K;g?a=n.map(A=>A.trim()):m&&(a=n.map(as))}let s,l=r[s=Yn(t)]||r[s=Yn(Te(t))];!l&&i&&(l=r[s=Yn(st(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function Ui(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Ui(u,t,!0);d&&(s=!0,se(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):se(o,i),r.set(e,o),o)}function In(e,t){return!e||!kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,st(t))||D(e,t))}let Pe=null,Tn=null;function pn(e){const t=Pe;return Pe=e,Tn=e&&e.type.__scopeId||null,t}function Sn(e){Tn=e}function Nn(){Tn=null}function qs(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ma(-1);const i=pn(t),o=e(...a);return pn(i),r._d&&Ma(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:g,setupState:A,ctx:M,inheritAttrs:R}=e;let S,y;const O=pn(e);try{if(n.shapeFlag&4){const z=a||r;S=Ee(d.call(z,z,m,i,A,g,M)),y=l}else{const z=t;S=Ee(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:Vs(l)}}catch(z){Rt.length=0,Pn(z,e,1),S=U(Ht)}let $=S;if(y&&R!==!1){const z=Object.keys(y),{shapeFlag:W}=$;z.length&&W&7&&(o&&z.some(Tr)&&(y=Xs(y,o)),$=Yt($,y))}return n.dirs&&($.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),S=$,pn(O),S}const Vs=e=>{let t;for(const n in e)(n==="class"||n==="style"||kn(n))&&((t||(t={}))[n]=e[n]);return t},Xs=(e,t)=>{const n={};for(const r in e)(!Tr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Js(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ca(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!In(u,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ca(r,o,u):!0:!!o;return!1}function Ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!In(n,i))return!0}return!1}function Gs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zs=e=>e.__isSuspense;function Qs(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ws(e)}function el(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function qn(e,t,n=!1){const r=re||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Aa={};function an(e,t,n){return Hi(e,t,n)}function Hi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=re;let l,u=!1,d=!1;if(ae(e)?(l=()=>e.value,u=Ni(e)):yt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(yt),l=()=>e.map(y=>{if(ae(y))return y.value;if(yt(y))return pt(y);if(L(y))return qe(y,s,2)})):L(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[g])}:l=xe,t&&r){const y=l;l=()=>pt(y())}let m,g=y=>{m=S.onStop=()=>{qe(y,s,4)}};if(Wt)return g=xe,t?n&&we(t,s,3,[l(),d?[]:void 0,g]):l(),xe;let A=d?[]:Aa;const M=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((O,$)=>un(O,A[$])):un(y,A)))&&(m&&m(),we(t,s,3,[y,A===Aa?void 0:A,g]),A=y)}else S.run()};M.allowRecurse=!!t;let R;a==="sync"?R=M:a==="post"?R=()=>ce(M,s&&s.suspense):R=()=>{!s||s.isMounted?Ys(M):M()};const S=new Fr(l,R);return t?n?M():A=S.run():a==="post"?ce(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Sr(s.scope.effects,S)}}function tl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?Yi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;wt(this);const s=Hi(a,i.bind(r),n);return o?wt(o):at(),s}function Yi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))pt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(gi(e)||bt(e))e.forEach(n=>{pt(n,t)});else if(_i(e))for(const n in e)pt(e[n],t);return e}function Wr(e){return L(e)?{setup:e,name:e.name}:e}const or=e=>!!e.type.__asyncLoader,Wi=e=>e.type.__isKeepAlive;function nl(e,t){Ki(e,"a",t)}function rl(e,t){Ki(e,"da",t)}function Ki(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Mn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Wi(a.parent.vnode)&&al(r,t,n,a),a=a.parent}}function al(e,t,n,r){const a=Mn(t,e,r,!0);qi(()=>{Sr(r[t],a)},n)}function Mn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kt(),wt(n);const s=we(t,n,e,o);return at(),Ct(),s});return r?a.unshift(i):a.push(i),i}}const De=e=>(t,n=re)=>(!Wt||e==="sp")&&Mn(e,t,n),il=De("bm"),ol=De("m"),sl=De("bu"),ll=De("u"),fl=De("bum"),qi=De("um"),cl=De("sp"),ul=De("rtg"),dl=De("rtc");function ml(e,t=re){Mn("ec",e,t)}let sr=!0;function pl(e){const t=Xi(e),n=e.proxy,r=e.ctx;sr=!1,t.beforeCreate&&Oa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:g,beforeUpdate:A,updated:M,activated:R,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:$,unmounted:z,render:W,renderTracked:ie,renderTriggered:ue,errorCaptured:ke,serverPrefetch:le,expose:Ot,inheritAttrs:lt,components:Et,directives:Xt,filters:ua}=t;if(u&&hl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const q=o[G];L(q)&&(r[G]=q.bind(n))}if(a){const G=a.call(n,n);Z(G)&&(e.data=Dr(G))}if(sr=!0,i)for(const G in i){const q=i[G],Ne=L(q)?q.bind(n,n):L(q.get)?q.get.bind(n,n):xe,Bn=!L(q)&&L(q.set)?q.set.bind(n):xe,Pt=ve({get:Ne,set:Bn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ft=>Pt.value=ft})}if(s)for(const G in s)Vi(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{el(q,G[q])})}d&&Oa(d,e,"c");function fe(G,q){F(q)?q.forEach(Ne=>G(Ne.bind(n))):q&&G(q.bind(n))}if(fe(il,m),fe(ol,g),fe(sl,A),fe(ll,M),fe(nl,R),fe(rl,S),fe(ml,ke),fe(dl,ie),fe(ul,ue),fe(fl,O),fe(qi,z),fe(cl,le),F(Ot))if(Ot.length){const G=e.exposed||(e.exposed={});Ot.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:Ne=>n[q]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===xe&&(e.render=W),lt!=null&&(e.inheritAttrs=lt),Et&&(e.components=Et),Xt&&(e.directives=Xt)}function hl(e,t,n=xe,r=!1){F(e)&&(e=lr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=qn(i.from||a,i.default,!0):o=qn(i.from||a):o=qn(i),ae(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Oa(e,t,n){we(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vi(e,t,n,r){const a=r.includes(".")?Yi(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&an(a,i)}else if(L(e))an(a,e.bind(n));else if(Z(e))if(F(e))e.forEach(i=>Vi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&an(a,i,e)}}function Xi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>hn(l,u,o,!0)),hn(l,t,o)),i.set(t,l),l}function hn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&hn(e,i,n,!0),a&&a.forEach(o=>hn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=vl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const vl={data:Ea,props:Qe,emits:Qe,methods:Qe,computed:Qe,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Qe,directives:Qe,watch:bl,provide:Ea,inject:gl};function Ea(e,t){return t?e?function(){return se(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function gl(e,t){return Qe(lr(e),lr(t))}function lr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?se(se(Object.create(null),e),t):t}function bl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function yl(e,t,n,r=!1){const a={},i={};dn(i,$n,1),e.propsDefaults=Object.create(null),Ji(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ms(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function _l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(In(e.emitsOptions,g))continue;const A=t[g];if(l)if(D(i,g))A!==i[g]&&(i[g]=A,u=!0);else{const M=Te(g);a[M]=fr(l,s,M,A,e,!1)}else A!==i[g]&&(i[g]=A,u=!0)}}}else{Ji(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=st(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function Ji(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rn(l))continue;const u=t[l];let d;a&&D(a,d=Te(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:In(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=fr(a,l,m,u[m],e,!D(u,m))}}return o}function fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(wt(a),r=u[n]=l.call(null,t),at())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===st(n))&&(r=!0))}return r}function Gi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,A]=Gi(m,t,!0);se(o,g),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,gt),gt;if(F(i))for(let d=0;d<i.length;d++){const m=Te(i[d]);Pa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Te(d);if(Pa(m)){const g=i[d],A=o[m]=F(g)||L(g)?{type:g}:g;if(A){const M=Sa(Boolean,A.type),R=Sa(String,A.type);A[0]=M>-1,A[1]=R<0||M<R,(M>-1||D(A,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Pa(e){return e[0]!=="$"}function Ia(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ta(e,t){return Ia(e)===Ia(t)}function Sa(e,t){return F(t)?t.findIndex(n=>Ta(n,e)):L(t)&&Ta(t,e)?0:-1}const Zi=e=>e[0]==="_"||e==="$stable",Kr=e=>F(e)?e.map(Ee):[Ee(e)],xl=(e,t,n)=>{const r=qs((...a)=>Kr(t(...a)),n);return r._c=!1,r},Qi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Zi(a))continue;const i=e[a];if(L(i))t[a]=xl(a,i,r);else if(i!=null){const o=Kr(i);t[a]=()=>o}}},eo=(e,t)=>{const n=Kr(t);e.slots.default=()=>n},wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),dn(t,"_",n)):Qi(t,e.slots={})}else e.slots={},t&&eo(e,t);dn(e.slots,$n,1)},kl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Qi(t,a)),o=t}else t&&(eo(e,t),o={default:1});if(i)for(const s in a)!Zi(s)&&!(s in o)&&delete a[s]};function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(kt(),we(l,n,8,[e.el,s,e,t]),Ct())}}function to(){return{app:null,config:{isNativeTag:Zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function Al(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=to(),o=new Set;let s=!1;const l=i.app={_uid:Cl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Vl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const g=U(r,a);return g.appContext=i,d&&t?t(g,u):e(g,u,m),s=!0,l._container=u,u.__vue_app__=l,Xr(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function cr(e,t,n,r,a=!1){if(F(e)){e.forEach((g,A)=>cr(g,t&&(F(t)?t[A]:t),n,r,a));return}if(or(r)&&!a)return;const i=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(te(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ae(u)&&(u.value=null)),L(l))qe(l,s,12,[o,d]);else{const g=te(l),A=ae(l);if(g||A){const M=()=>{if(e.f){const R=g?d[l]:l.value;a?F(R)&&Sr(R,i):F(R)?R.includes(i)||R.push(i):g?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,D(m,l)&&(m[l]=o)):ae(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,ce(M,n)):M()}}}const ce=Qs;function Ol(e){return El(e)}function El(e,t){const n=is();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:g,setScopeId:A=xe,cloneNode:M,insertStaticContent:R}=e,S=(f,c,p,v=null,h=null,x=null,k=!1,_=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Tt(f,c)&&(v=Jt(f),Be(f,h,x,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:b,ref:P,shapeFlag:E}=c;switch(b){case qr:y(f,c,p,v);break;case Ht:O(f,c,p,v);break;case Vn:f==null&&$(c,p,v,k);break;case ne:Xt(f,c,p,v,h,x,k,_,w);break;default:E&1?ie(f,c,p,v,h,x,k,_,w):E&6?ua(f,c,p,v,h,x,k,_,w):(E&64||E&128)&&b.process(f,c,p,v,h,x,k,_,w,ct)}P!=null&&h&&cr(P,f&&f.ref,x,c||f,!c)},y=(f,c,p,v)=>{if(f==null)r(c.el=s(c.children),p,v);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,v)=>{f==null?r(c.el=l(c.children||""),p,v):c.el=f.el},$=(f,c,p,v)=>{[f.el,f.anchor]=R(f.children,c,p,v,f.el,f.anchor)},z=({el:f,anchor:c},p,v)=>{let h;for(;f&&f!==c;)h=g(f),r(f,p,v),f=h;r(c,p,v)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=g(f),a(f),f=p;a(c)},ie=(f,c,p,v,h,x,k,_,w)=>{k=k||c.type==="svg",f==null?ue(c,p,v,h,x,k,_,w):Ot(f,c,h,x,k,_,w)},ue=(f,c,p,v,h,x,k,_)=>{let w,b;const{type:P,props:E,shapeFlag:I,transition:N,patchFlag:B,dirs:J}=f;if(f.el&&M!==void 0&&B===-1)w=f.el=M(f.el);else{if(w=f.el=o(f.type,x,E&&E.is,E),I&8?d(w,f.children):I&16&&le(f.children,w,null,v,h,x&&P!=="foreignObject",k,_),J&&Ge(f,null,v,"created"),E){for(const V in E)V!=="value"&&!rn(V)&&i(w,V,null,E[V],x,f.children,v,h,Me);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Ae(b,v,f)}ke(w,f,f.scopeId,k,v)}J&&Ge(f,null,v,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;Y&&N.beforeEnter(w),r(w,c,p),((b=E&&E.onVnodeMounted)||Y||J)&&ce(()=>{b&&Ae(b,v,f),Y&&N.enter(w),J&&Ge(f,null,v,"mounted")},h)},ke=(f,c,p,v,h)=>{if(p&&A(f,p),v)for(let x=0;x<v.length;x++)A(f,v[x]);if(h){let x=h.subTree;if(c===x){const k=h.vnode;ke(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},le=(f,c,p,v,h,x,k,_,w=0)=>{for(let b=w;b<f.length;b++){const P=f[b]=_?We(f[b]):Ee(f[b]);S(null,P,c,p,v,h,x,k,_)}},Ot=(f,c,p,v,h,x,k)=>{const _=c.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=c;w|=f.patchFlag&16;const E=f.props||K,I=c.props||K;let N;p&&Ze(p,!1),(N=I.onVnodeBeforeUpdate)&&Ae(N,p,c,f),P&&Ge(c,f,p,"beforeUpdate"),p&&Ze(p,!0);const B=h&&c.type!=="foreignObject";if(b?lt(f.dynamicChildren,b,_,p,v,B,x):k||Ne(f,c,_,null,p,v,B,x,!1),w>0){if(w&16)Et(_,c,E,I,p,v,h);else if(w&2&&E.class!==I.class&&i(_,"class",null,I.class,h),w&4&&i(_,"style",E.style,I.style,h),w&8){const J=c.dynamicProps;for(let Y=0;Y<J.length;Y++){const V=J[Y],ge=E[V],ut=I[V];(ut!==ge||V==="value")&&i(_,V,ge,ut,h,f.children,p,v,Me)}}w&1&&f.children!==c.children&&d(_,c.children)}else!k&&b==null&&Et(_,c,E,I,p,v,h);((N=I.onVnodeUpdated)||P)&&ce(()=>{N&&Ae(N,p,c,f),P&&Ge(c,f,p,"updated")},v)},lt=(f,c,p,v,h,x,k)=>{for(let _=0;_<c.length;_++){const w=f[_],b=c[_],P=w.el&&(w.type===ne||!Tt(w,b)||w.shapeFlag&70)?m(w.el):p;S(w,b,P,null,v,h,x,k,!0)}},Et=(f,c,p,v,h,x,k)=>{if(p!==v){for(const _ in v){if(rn(_))continue;const w=v[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,k,c.children,h,x,Me)}if(p!==K)for(const _ in p)!rn(_)&&!(_ in v)&&i(f,_,p[_],null,k,c.children,h,x,Me);"value"in v&&i(f,"value",p.value,v.value)}},Xt=(f,c,p,v,h,x,k,_,w)=>{const b=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:N}=c;N&&(_=_?_.concat(N):N),f==null?(r(b,p,v),r(P,p,v),le(c.children,p,P,h,x,k,_,w)):E>0&&E&64&&I&&f.dynamicChildren?(lt(f.dynamicChildren,I,p,h,x,k,_),(c.key!=null||h&&c===h.subTree)&&no(f,c,!0)):Ne(f,c,p,P,h,x,k,_,w)},ua=(f,c,p,v,h,x,k,_,w)=>{c.slotScopeIds=_,f==null?c.shapeFlag&512?h.ctx.activate(c,p,v,k,w):jn(c,p,v,h,x,k,w):fe(f,c,w)},jn=(f,c,p,v,h,x,k)=>{const _=f.component=Bl(f,v,h);if(Wi(f)&&(_.ctx.renderer=ct),Ul(_),_.asyncDep){if(h&&h.registerDep(_,G),!f.el){const w=_.subTree=U(Ht);O(null,w,c,p)}return}G(_,f,c,p,h,x,k)},fe=(f,c,p)=>{const v=c.component=f.component;if(Js(f,c,p))if(v.asyncDep&&!v.asyncResolved){q(v,c,p);return}else v.next=c,Hs(v.update),v.update();else c.component=f.component,c.el=f.el,v.vnode=c},G=(f,c,p,v,h,x,k)=>{const _=()=>{if(f.isMounted){let{next:P,bu:E,u:I,parent:N,vnode:B}=f,J=P,Y;Ze(f,!1),P?(P.el=B.el,q(f,P,k)):P=B,E&&Wn(E),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(Y,N,P,B),Ze(f,!0);const V=Kn(f),ge=f.subTree;f.subTree=V,S(ge,V,m(ge.el),Jt(ge),f,h,x),P.el=V.el,J===null&&Gs(f,V.el),I&&ce(I,h),(Y=P.props&&P.props.onVnodeUpdated)&&ce(()=>Ae(Y,N,P,B),h)}else{let P;const{el:E,props:I}=c,{bm:N,m:B,parent:J}=f,Y=or(c);if(Ze(f,!1),N&&Wn(N),!Y&&(P=I&&I.onVnodeBeforeMount)&&Ae(P,J,c),Ze(f,!0),E&&Hn){const V=()=>{f.subTree=Kn(f),Hn(E,f.subTree,f,h,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Kn(f);S(null,V,p,v,f,h,x),c.el=V.el}if(B&&ce(B,h),!Y&&(P=I&&I.onVnodeMounted)){const V=c;ce(()=>Ae(P,J,V),h)}c.shapeFlag&256&&f.a&&ce(f.a,h),f.isMounted=!0,c=p=v=null}},w=f.effect=new Fr(_,()=>Ri(f.update),f.scope),b=f.update=w.run.bind(w);b.id=f.uid,Ze(f,!0),b()},q=(f,c,p)=>{c.component=f;const v=f.vnode.props;f.vnode=c,f.next=null,_l(f,c.props,v,p),kl(f,c.children,p),kt(),Yr(void 0,f.update),Ct()},Ne=(f,c,p,v,h,x,k,_,w=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:N}=c;if(I>0){if(I&128){Pt(b,E,p,v,h,x,k,_,w);return}else if(I&256){Bn(b,E,p,v,h,x,k,_,w);return}}N&8?(P&16&&Me(b,h,x),E!==b&&d(p,E)):P&16?N&16?Pt(b,E,p,v,h,x,k,_,w):Me(b,h,x,!0):(P&8&&d(p,""),N&16&&le(E,p,v,h,x,k,_,w))},Bn=(f,c,p,v,h,x,k,_,w)=>{f=f||gt,c=c||gt;const b=f.length,P=c.length,E=Math.min(b,P);let I;for(I=0;I<E;I++){const N=c[I]=w?We(c[I]):Ee(c[I]);S(f[I],N,p,null,h,x,k,_,w)}b>P?Me(f,h,x,!0,!1,E):le(c,p,v,h,x,k,_,w,E)},Pt=(f,c,p,v,h,x,k,_,w)=>{let b=0;const P=c.length;let E=f.length-1,I=P-1;for(;b<=E&&b<=I;){const N=f[b],B=c[b]=w?We(c[b]):Ee(c[b]);if(Tt(N,B))S(N,B,p,null,h,x,k,_,w);else break;b++}for(;b<=E&&b<=I;){const N=f[E],B=c[I]=w?We(c[I]):Ee(c[I]);if(Tt(N,B))S(N,B,p,null,h,x,k,_,w);else break;E--,I--}if(b>E){if(b<=I){const N=I+1,B=N<P?c[N].el:v;for(;b<=I;)S(null,c[b]=w?We(c[b]):Ee(c[b]),p,B,h,x,k,_,w),b++}}else if(b>I)for(;b<=E;)Be(f[b],h,x,!0),b++;else{const N=b,B=b,J=new Map;for(b=B;b<=I;b++){const de=c[b]=w?We(c[b]):Ee(c[b]);de.key!=null&&J.set(de.key,b)}let Y,V=0;const ge=I-B+1;let ut=!1,pa=0;const It=new Array(ge);for(b=0;b<ge;b++)It[b]=0;for(b=N;b<=E;b++){const de=f[b];if(V>=ge){Be(de,h,x,!0);continue}let Ce;if(de.key!=null)Ce=J.get(de.key);else for(Y=B;Y<=I;Y++)if(It[Y-B]===0&&Tt(de,c[Y])){Ce=Y;break}Ce===void 0?Be(de,h,x,!0):(It[Ce-B]=b+1,Ce>=pa?pa=Ce:ut=!0,S(de,c[Ce],p,null,h,x,k,_,w),V++)}const ha=ut?Pl(It):gt;for(Y=ha.length-1,b=ge-1;b>=0;b--){const de=B+b,Ce=c[de],va=de+1<P?c[de+1].el:v;It[b]===0?S(null,Ce,p,va,h,x,k,_,w):ut&&(Y<0||b!==ha[Y]?ft(Ce,p,va,2):Y--)}}},ft=(f,c,p,v,h=null)=>{const{el:x,type:k,transition:_,children:w,shapeFlag:b}=f;if(b&6){ft(f.component.subTree,c,p,v);return}if(b&128){f.suspense.move(c,p,v);return}if(b&64){k.move(f,c,p,ct);return}if(k===ne){r(x,c,p);for(let E=0;E<w.length;E++)ft(w[E],c,p,v);r(f.anchor,c,p);return}if(k===Vn){z(f,c,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(x),r(x,c,p),ce(()=>_.enter(x),h);else{const{leave:E,delayLeave:I,afterLeave:N}=_,B=()=>r(x,c,p),J=()=>{E(x,()=>{B(),N&&N()})};I?I(x,B,J):J()}else r(x,c,p)},Be=(f,c,p,v=!1,h=!1)=>{const{type:x,props:k,ref:_,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:E,dirs:I}=f;if(_!=null&&cr(_,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const N=P&1&&I,B=!or(f);let J;if(B&&(J=k&&k.onVnodeBeforeUnmount)&&Ae(J,c,f),P&6)Wo(f.component,p,v);else{if(P&128){f.suspense.unmount(p,v);return}N&&Ge(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,ct,v):b&&(x!==ne||E>0&&E&64)?Me(b,c,p,!1,!0):(x===ne&&E&384||!h&&P&16)&&Me(w,c,p),v&&da(f)}(B&&(J=k&&k.onVnodeUnmounted)||N)&&ce(()=>{J&&Ae(J,c,f),N&&Ge(f,null,c,"unmounted")},p)},da=f=>{const{type:c,el:p,anchor:v,transition:h}=f;if(c===ne){Yo(p,v);return}if(c===Vn){W(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:_}=h,w=()=>k(p,x);_?_(f.el,x,w):w()}else x()},Yo=(f,c)=>{let p;for(;f!==c;)p=g(f),a(f),f=p;a(c)},Wo=(f,c,p)=>{const{bum:v,scope:h,update:x,subTree:k,um:_}=f;v&&Wn(v),h.stop(),x&&(x.active=!1,Be(k,f,c,p)),_&&ce(_,c),ce(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Me=(f,c,p,v=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)Be(f[k],c,p,v,h)},Jt=f=>f.shapeFlag&6?Jt(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),ma=(f,c,p)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),ji(),c._vnode=f},ct={p:S,um:Be,m:ft,r:da,mt:jn,mc:le,pc:Ne,pbc:lt,n:Jt,o:e};let Un,Hn;return t&&([Un,Hn]=t(ct)),{render:ma,hydrate:Un,createApp:Al(ma,Un)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function no(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||no(o,s))}}function Pl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Il=e=>e.__isTeleport,ro="components";function ye(e,t){return Sl(ro,e,!0,t)||e}const Tl=Symbol();function Sl(e,t,n=!0,r=!1){const a=Pe||re;if(a){const i=a.type;if(e===ro){const s=Kl(i);if(s&&(s===t||s===Te(t)||s===On(Te(t))))return i}const o=Na(a[e]||i[e],t)||Na(a.appContext[e],t);return!o&&r?i:o}}function Na(e,t){return e&&(e[t]||e[Te(t)]||e[On(Te(t))])}const ne=Symbol(void 0),qr=Symbol(void 0),Ht=Symbol(void 0),Vn=Symbol(void 0),Rt=[];let rt=null;function Q(e=!1){Rt.push(rt=e?null:[])}function Nl(){Rt.pop(),rt=Rt[Rt.length-1]||null}let vn=1;function Ma(e){vn+=e}function Ml(e){return e.dynamicChildren=vn>0?rt||gt:null,Nl(),vn>0&&rt&&rt.push(e),e}function ee(e,t,n,r,a,i){return Ml(j(e,t,n,r,a,i,!0))}function ur(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const $n="__vInternal",ao=({key:e})=>e!=null?e:null,on=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ae(e)||L(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function j(e,t=null,n=null,r=0,a=null,i=e===ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ao(t),ref:t&&on(t),scopeId:Tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Vr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),vn>0&&!o&&rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&rt.push(l),l}const U=$l;function $l(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Ht),ur(e)){const s=Yt(e,t,!0);return n&&Vr(s,n),s}if(ql(e)&&(e=e.__vccOpts),t){t=Fl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=qt(s)),Z(l)&&(Mi(l)&&!F(l)&&(l=se({},l)),t.style=Ir(l))}const o=te(e)?1:Zs(e)?128:Il(e)?64:Z(e)?4:L(e)?2:0;return j(e,t,n,r,a,o,i,!0)}function Fl(e){return e?Mi(e)||$n in e?se({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Rl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ao(s),ref:t&&t.ref?n&&a?F(a)?a.concat(on(t)):[a,on(t)]:on(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ll(e=" ",t=0){return U(qr,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?U(Ht):F(e)?U(ne,null,e.slice()):typeof e=="object"?We(e):U(qr,null,String(e))}function We(e){return e.el===null||e.memo?e:Yt(e)}function Vr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Vr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!($n in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Ll(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qt([t.class,r.class]));else if(a==="style")t.style=Ir([t.style,r.style]);else if(kn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}function _t(e,t,n,r){let a;const i=n&&n[r];if(F(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const dr=e=>e?io(e)?Xr(e)||e.proxy:dr(e.parent):null,gn=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dr(e.parent),$root:e=>dr(e.root),$emit:e=>e.emit,$options:e=>Xi(e),$forceUpdate:e=>()=>Ri(e.update),$nextTick:e=>Bs.bind(e.proxy),$watch:e=>tl.bind(e)}),zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&D(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];sr&&(o[t]=0)}}const d=gn[t];let m,g;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,D(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&D(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||t!==K&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(gn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Dl=to();let jl=0;function Bl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Dl,i={uid:jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gi(r,a),emitsOptions:Ui(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ks.bind(null,i),e.ce&&e.ce(i),i}let re=null;const wt=e=>{re=e,e.scope.on()},at=()=>{re&&re.scope.off(),re=null};function io(e){return e.vnode.shapeFlag&4}let Wt=!1;function Ul(e,t=!1){Wt=t;const{props:n,children:r}=e.vnode,a=io(e);yl(e,n,a,t),wl(e,r);const i=a?Hl(e,t):void 0;return Wt=!1,i}function Hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Wl(e):null;wt(e),kt();const i=qe(r,e,0,[e.props,a]);if(Ct(),at(),bi(i)){if(i.then(at,at),t)return i.then(o=>{$a(e,o,t)}).catch(o=>{Pn(o,e,0)});e.asyncDep=i}else $a(e,i,t)}else oo(e,t)}function $a(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Fi(t)),oo(e,n)}let Fa;function oo(e,t,n){const r=e.type;if(!e.render){if(!t&&Fa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=se(se({isCustomElement:i,delimiters:s},o),l);r.render=Fa(a,u)}}e.render=r.render||xe}wt(e),kt(),pl(e),Ct(),at()}function Yl(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function Wl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Yl(e))},slots:e.slots,emit:e.emit,expose:t}}function Xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fi($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)}}))}function Kl(e){return L(e)&&e.displayName||e.name}function ql(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Ds(e,t,Wt);function so(e,t,n){const r=arguments.length;return r===2?Z(t)&&!F(t)?ur(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ur(n)&&(n=[n]),U(e,t,n))}const Vl="3.2.33",Xl="http://www.w3.org/2000/svg",et=typeof document!="undefined"?document:null,La=et&&et.createElement("template"),Jl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?et.createElementNS(Xl,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zl(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)mr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&mr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ra=/\s*!important$/;function mr(e,t,n){if(F(n))n.forEach(r=>mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ql(e,t);Ra.test(n)?e.setProperty(st(r),n.replace(Ra,""),"important"):e[r]=n}}const za=["Webkit","Moz","ms"],Xn={};function Ql(e,t){const n=Xn[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return Xn[t]=r;r=On(r);for(let a=0;a<za.length;a++){const i=za[a]+r;if(i in e)return Xn[t]=i}return t}const Da="http://www.w3.org/1999/xlink";function ef(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Da,t.slice(6,t.length)):e.setAttributeNS(Da,t,n);else{const i=Vo(t);n==null||i&&!hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=hi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[lo,nf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let pr=0;const rf=Promise.resolve(),af=()=>{pr=0},of=()=>pr||(rf.then(af),pr=lo());function sf(e,t,n,r){e.addEventListener(t,n,r)}function lf(e,t,n,r){e.removeEventListener(t,n,r)}function ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=cf(t);if(r){const u=i[t]=uf(r,a);sf(e,s,u,l)}else o&&(lf(e,s,o,l),i[t]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function cf(e){let t;if(ja.test(e)){t={};let n;for(;n=e.match(ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[st(e.slice(2)),t]}function uf(e,t){const n=r=>{const a=r.timeStamp||lo();(nf||a>=n.attached-1)&&we(df(r,n.value),t,5,[r])};return n.value=e,n.attached=of(),n}function df(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ba=/^on[a-z]/,mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Gl(e,r,a):t==="style"?Zl(e,n,r):kn(t)?Tr(t)||ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pf(e,t,r,a))?tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ef(e,t,r,a))};function pf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ba.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ba.test(t)&&te(n)?!1:t in e}const hf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vf=(e,t)=>n=>{if(!("key"in n))return;const r=st(n.key);if(t.some(a=>a===r||hf[a]===r))return e(n)},gf=se({patchProp:mf},Jl);let Ua;function bf(){return Ua||(Ua=Ol(gf))}const yf=(...e)=>{const t=bf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=_f(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function _f(e){return te(e)?document.querySelector(e):e}var Se=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const xf={name:"OwnBoard",data(){return{letters:["A","B","C","D","E","F","G","H","I","J"]}},components:{}},wf=e=>(Sn("data-v-37f879e8"),e=e(),Nn(),e),kf={class:"board own-board wrapper"},Cf=wf(()=>j("div",{class:""},null,-1)),Af={class:"letter"};function Of(e,t,n,r,a,i){return Q(),ee("div",kf,[Cf,(Q(),ee(ne,null,_t(10,o=>j("div",{key:o,class:"number"},cn(o),1)),64)),(Q(),ee(ne,null,_t(10,o=>(Q(),ee(ne,{key:o},[j("div",Af,cn(a.letters[o-1]),1),(Q(),ee(ne,null,_t(10,s=>j("div",{id:"{{m-1}}{{n-1}}",class:qt(["cell",{"bottom-border":o%10!=0,"right-border":s%10!=0}]),key:s},null,2)),64))],64))),64))])}var Ef=Se(xf,[["render",Of],["__scopeId","data-v-37f879e8"]]);const Pf={name:"PurpleBoat"},If={width:"500",height:"100",viewBox:"0 0 500 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Tf=j("rect",{width:"500",height:"100",rx:"50",fill:"rgba(236,240,241,0.5)"},null,-1),Sf=j("rect",{x:"16",y:"13",width:"468",height:"74",rx:"37",fill:"rgba(236,240,241,1)"},null,-1),Nf=[Tf,Sf];function Mf(e,t,n,r,a,i){return Q(),ee("svg",If,Nf)}var $f=Se(Pf,[["render",Mf]]);const Ff={name:"PurpleBoat"},Lf={width:"400",height:"100",viewBox:"0 0 400 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Rf=j("rect",{width:"400",height:"100",rx:"50",fill:"rgba(236,240,241,0.5)"},null,-1),zf=j("rect",{x:"16",y:"14",width:"368",height:"73",rx:"36.5",fill:"rgba(236,240,241,1)"},null,-1),Df=[Rf,zf];function jf(e,t,n,r,a,i){return Q(),ee("svg",Lf,Df)}var Bf=Se(Ff,[["render",jf]]);const Uf={name:"OrangeBoat"},Hf={width:"300",height:"100",viewBox:"0 0 300 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Yf=j("rect",{x:"17",y:"17",width:"266",height:"66",rx:"33",fill:"rgba(236,240,241,0.25)"},null,-1),Wf=j("rect",{width:"300",height:"100",rx:"50",fill:"rgba(236,240,241,0.125)"},null,-1),Kf=[Yf,Wf];function qf(e,t,n,r,a,i){return Q(),ee("svg",Hf,Kf)}var Vf=Se(Uf,[["render",qf]]);const Xf={name:"OrangeBoat"},Jf={width:"200",height:"100",viewBox:"0 0 200 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Gf=j("rect",{width:"200",height:"100",rx:"50",fill:"rgba(236,240,241,0.5)"},null,-1),Zf=j("rect",{x:"20",y:"19",width:"160",height:"63",rx:"31.5",fill:"rgba(236,240,241,1)"},null,-1),Qf=[Gf,Zf];function ec(e,t,n,r,a,i){return Q(),ee("svg",Jf,Qf)}var tc=Se(Xf,[["render",ec]]);const nc={name:"PlayersInfo",components:{FiveBoat:$f,FourBoat:Bf,ThreeBoat:Vf,TwoBoat:tc}},rc={class:"board boats-board"},ac={class:"own-boats boats"},ic=j("h1",{class:"boats-text"},"Player1",-1),oc={class:"opponent-boats boats"},sc=j("h1",{class:"boats-text"},"Player2",-1);function lc(e,t,n,r,a,i){const o=ye("FiveBoat"),s=ye("FourBoat"),l=ye("ThreeBoat"),u=ye("TwoBoat");return Q(),ee("div",rc,[j("div",ac,[ic,U(o,{class:"boat"}),U(s,{class:"boat"}),U(l,{class:"boat"}),U(l,{class:"boat"}),U(u,{class:"boat"})]),j("div",oc,[sc,U(o,{class:"boat"}),U(s,{class:"boat"}),U(l,{class:"boat"}),U(l,{class:"boat"}),U(u,{class:"boat"})])])}var fc=Se(nc,[["render",lc]]);const cc={name:"ControlPanel"},uc=e=>(Sn("data-v-05331a0a"),e=e(),Nn(),e),dc={class:"panel"},mc={class:"board icon-board play-button"},pc={class:"board icon-board name"},hc={class:"board icon-board about"},vc=uc(()=>j("div",{class:"prompt-panel board"},[j("div",{class:"prompt-box"},"GAME READY TO START")],-1)),gc={class:"board icon-board sound"},bc={class:"board icon-board effects"},yc={class:"board icon-board theme"};function _c(e,t,n,r,a,i){const o=ye("font-awesome-icon");return Q(),ee("div",dc,[j("div",mc,[U(o,{class:"icon",icon:"play"})]),j("div",pc,[U(o,{class:"icon",icon:"pen"})]),j("div",hc,[U(o,{class:"icon",icon:"info"})]),vc,j("div",gc,[U(o,{class:"icon",icon:"volume-high"})]),j("div",bc,[U(o,{class:"icon",icon:"bolt"})]),j("div",yc,[U(o,{class:"icon",icon:"moon"})])])}var xc=Se(cc,[["render",_c],["__scopeId","data-v-05331a0a"]]);class wc{constructor(t){switch(this.id=t,t){case 1:this.size=2;case 2:this.size=3;case 3:this.size=3;case 4:this.size=4;case 5:this.size=5}this.partsLeft=this.size}removePart(){this.partsLeft--}}class Ha{constructor(t){this.name=t;for(var n=0;n<10;n++)for(var r=0;r<10;r++)this.positions[n][r]=0,this.targets[n][r]=0;for(var a=0;a<=5;a++)this.boats[a]=new wc(a)}}var fo,co;const kc={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9};function Cc(e){fo=new Ha("Tom"),co=new Ha("Jerry")}function hr(e){var t=e.toUpperCase().split(" ");if(!e.toUpperCase().startsWith("P1NAME")){if(!e.toUpperCase().startsWith("P2NAME"))if(e.toUpperCase().startsWith("AIM")){var n=t[1],r,a;if(parseInt(n).toString()!="NaN")r=parseInt(n.split("")[0]),a=parseInt(n.split("")[1]);else{var i=n.split(""),o=i[0],s=i.length==2?i[1]:i[1]+i[2];r=kc[o],a=parseInt(s)-1}return r.toString()+a.toString()}else return e.toUpperCase().trim()==="LAUNCH"?"Please choose an aim first":`Command not found: ${e.toUpperCase()}`}}const Ac={name:"Console",methods:{submit(){const e=this.$el.querySelector(".console-input"),t=this.$el.querySelector(".console-history"),n=document.createElement("div"),r=document.createElement("div");if(n.classList.add("console-input-log"),r.classList.add("console-output-log"),e.value.toUpperCase()==="CLEAR")for(;t.hasChildNodes();)t.removeChild(t.firstChild);else e.value.toUpperCase()===""?(n.textContent="> ",t.append(n)):(n.textContent=`> ${e.value}`,r.textContent=hr(e.value),t.append(n,r));console.log(e.value),e.value="",e.focus(),t.scrollTop=t.scrollHeight}}},uo=e=>(Sn("data-v-648e9cb7"),e=e(),Nn(),e),Oc={class:"board console-board"},Ec=uo(()=>j("div",{class:"top title"},"CONSOLE",-1)),Pc=uo(()=>j("div",{class:"top console-history"},null,-1));function Ic(e,t,n,r,a,i){const o=ye("font-awesome-icon");return Q(),ee("div",Oc,[Ec,Pc,j("input",{class:"top console-input",type:"text",autofocus:"",spellcheck:"false",onKeyup:t[0]||(t[0]=vf((...s)=>i.submit&&i.submit(...s),["enter"]))},null,32),j("div",{class:"top enter-button",onClick:t[1]||(t[1]=(...s)=>i.submit&&i.submit(...s))},[U(o,{class:"icon",icon:"right-to-bracket"})])])}var Tc=Se(Ac,[["render",Ic],["__scopeId","data-v-648e9cb7"]]);var Sc=1;const Nc={name:"OpponentBoard",data(){return{letters:["A","B","C","D","E","F","G","H","I","J"],player1:fo,player2:co,nClick:Sc}},components:{},methods:{execute:hr,handleClick(e,t){hr(`AIM ${e}${t}`),this.handleClick--}}},Mc=e=>(Sn("data-v-2ef53420"),e=e(),Nn(),e),$c={class:"board opponent-board wrapper"},Fc=Mc(()=>j("div",{class:""},null,-1)),Lc={class:"letter"},Rc=["onClick"];function zc(e,t,n,r,a,i){return Q(),ee("div",$c,[Fc,(Q(),ee(ne,null,_t(10,o=>j("div",{key:o,class:"number"},cn(o),1)),64)),(Q(),ee(ne,null,_t(10,o=>(Q(),ee(ne,{key:o},[j("div",Lc,cn(a.letters[o-1]),1),(Q(),ee(ne,null,_t(10,s=>j("div",{id:"{{m-1}}{{n-1}}",class:qt(["cell",{"bottom-border":o%10!=0,"right-border":s%10!=0}]),key:s,onClick:l=>i.handleClick(`${o-1}, ${s-1}`)},null,10,Rc)),64))],64))),64))])}var Dc=Se(Nc,[["render",zc],["__scopeId","data-v-2ef53420"]]);const jc={name:"App",components:{OwnBoard:Ef,PlayersInfo:fc,ControlPanel:xc,Console:Tc,OpponentBoard:Dc}},Bc={class:"main-grid"};function Uc(e,t,n,r,a,i){const o=ye("OwnBoard"),s=ye("PlayersInfo"),l=ye("ControlPanel"),u=ye("Console"),d=ye("OpponentBoard");return Q(),ee("div",Bc,[U(o),U(s),U(l),U(u),U(d)])}var Hc=Se(jc,[["render",Uc]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(n),!0).forEach(function(r){Kc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ya(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bn(e){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bn(e)}function Yc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wc(e,t,n){return t&&Wa(e.prototype,t),n&&Wa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Kc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(e,t){return Vc(e)||Jc(e,t)||mo(e,t)||Zc()}function Fn(e){return qc(e)||Xc(e)||mo(e)||Gc()}function qc(e){if(Array.isArray(e))return vr(e)}function Vc(e){if(Array.isArray(e))return e}function Xc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jc(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function mo(e,t){if(!!e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(e,t)}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ka=function(){},Gr={},po={},ho=null,vo={mark:Ka,measure:Ka};try{typeof window!="undefined"&&(Gr=window),typeof document!="undefined"&&(po=document),typeof MutationObserver!="undefined"&&(ho=MutationObserver),typeof performance!="undefined"&&(vo=performance)}catch{}var Qc=Gr.navigator||{},qa=Qc.userAgent,Va=qa===void 0?"":qa,Xe=Gr,X=po,Xa=ho,nn=vo;Xe.document;var je=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",go=~Va.indexOf("MSIE")||~Va.indexOf("Trident/"),Le="___FONT_AWESOME___",gr=16,bo="fa",yo="svg-inline--fa",it="data-fa-i2svg",br="data-fa-pseudo-element",eu="data-fa-pseudo-element-pending",Zr="data-prefix",Qr="data-icon",Ja="fontawesome-i2svg",tu="async",nu=["HTML","HEAD","STYLE","SCRIPT"],_o=function(){try{return!0}catch{return!1}}(),ea={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},yn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},xo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ru={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},au=/fa[srltdbk\-\ ]/,wo="fa-layers-text",iu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ou={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ko=[1,2,3,4,5,6,7,8,9,10],su=ko.concat([11,12,13,14,15,16,17,18,19,20]),lu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fu=[].concat(Fn(Object.keys(yn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY]).concat(ko.map(function(e){return"".concat(e,"x")})).concat(su.map(function(e){return"w-".concat(e)})),Co=Xe.FontAwesomeConfig||{};function cu(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function uu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var du=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];du.forEach(function(e){var t=Jr(e,2),n=t[0],r=t[1],a=uu(cu(n));a!=null&&(Co[r]=a)})}var mu={familyPrefix:bo,styleDefault:"solid",replacementClass:yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=C(C({},mu),Co);zt.autoReplaceSvg||(zt.observeMutations=!1);var T={};Object.keys(zt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){zt[e]=n,sn.forEach(function(r){return r(T)})},get:function(){return zt[e]}})});Xe.FontAwesomeConfig=T;var sn=[];function pu(e){return sn.push(e),function(){sn.splice(sn.indexOf(e),1)}}var He=gr,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hu(e){if(!(!e||!je)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var vu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var e=12,t="";e-- >0;)t+=vu[Math.random()*62|0];return t}function At(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ta(e){return e.classList?At(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ao(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ao(e[n]),'" ')},"").trim()}function Ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function na(e){return e.size!==Ie.size||e.x!==Ie.x||e.y!==Ie.y||e.rotate!==Ie.rotate||e.flipX||e.flipY}function bu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function yu(e){var t=e.transform,n=e.width,r=n===void 0?gr:n,a=e.height,i=a===void 0?gr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&go?l+="translate(".concat(t.x/He-r/2,"em, ").concat(t.y/He-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/He,"em), calc(-50% + ").concat(t.y/He,"em)) "):l+="translate(".concat(t.x/He,"em, ").concat(t.y/He,"em) "),l+="scale(".concat(t.size/He*(t.flipX?-1:1),", ").concat(t.size/He*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var _u=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Oo(){var e=bo,t=yo,n=T.familyPrefix,r=T.replacementClass,a=_u;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ga=!1;function Jn(){T.autoAddCss&&!Ga&&(hu(Oo()),Ga=!0)}var xu={mixout:function(){return{dom:{css:Oo,insertCss:Jn}}},hooks:function(){return{beforeDOMElementCreation:function(){Jn()},beforeI2svg:function(){Jn()}}}},Re=Xe||{};Re[Le]||(Re[Le]={});Re[Le].styles||(Re[Le].styles={});Re[Le].hooks||(Re[Le].hooks={});Re[Le].shims||(Re[Le].shims=[]);var _e=Re[Le],Eo=[],wu=function e(){X.removeEventListener("DOMContentLoaded",e),_n=1,Eo.map(function(t){return t()})},_n=!1;je&&(_n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),_n||X.addEventListener("DOMContentLoaded",wu));function ku(e){!je||(_n?setTimeout(e,0):Eo.push(e))}function Vt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ao(e):"<".concat(t," ").concat(gu(r),">").concat(i.map(Vt).join(""),"</").concat(t,">")}function Za(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Gn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Cu(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function yr(e){var t=Au(e);return t.length===1?t[0].toString(16):null}function Ou(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Qa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Qa(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,Qa(t)):_e.styles[e]=C(C({},_e.styles[e]||{}),i),e==="fas"&&_r("fa",t)}var Dt=_e.styles,Eu=_e.shims,Pu=Object.values(xo),ra=null,Po={},Io={},To={},So={},No={},Iu=Object.keys(ea);function Tu(e){return~fu.indexOf(e)}function Su(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Tu(a)?a:null}var Mo=function(){var t=function(i){return Gn(Dt,function(o,s,l){return o[l]=Gn(s,i,{}),o},{})};Po=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Io=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),No=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||T.autoFetchSvg,r=Gn(Eu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,So=r.unicodes,ra=Rn(T.styleDefault)};pu(function(e){ra=Rn(e.styleDefault)});Mo();function aa(e,t){return(Po[e]||{})[t]}function Nu(e,t){return(Io[e]||{})[t]}function ht(e,t){return(No[e]||{})[t]}function $o(e){return To[e]||{prefix:null,iconName:null}}function Mu(e){var t=So[e],n=aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ra}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function Rn(e){var t=ea[e],n=yn[e]||yn[t],r=e in _e.styles?e:null;return n||r||null}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Su(T.familyPrefix,s);if(Dt[s]?(s=Pu.includes(s)?ru[s]:s,a=s,o.prefix=s):Iu.indexOf(s)>-1?(a=s,o.prefix=Rn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?$o(o.iconName):{},d=ht(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Dt.far&&Dt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ia());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var $u=function(){function e(){Yc(this,e),this.definitions={}}return Wc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),_r(s,o[s]);var l=xo[s];l&&_r(l,o[s]),Mo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ei=[],vt={},xt={},Fu=Object.keys(xt);function Lu(e,t){var n=t.mixoutsTo;return ei=e,vt={},Object.keys(xt).forEach(function(r){Fu.indexOf(r)===-1&&delete xt[r]}),ei.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function xr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function wr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=ht(n,t)||t,Za(Fo.definitions,n,t)||Za(_e.styles,n,t)}var Fo=new $u,Ru=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,ot("noAuto")},zu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return je?(ot("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ku(function(){ju({autoReplaceSvgRoot:n}),ot("watch",t)})}},Du={icon:function(t){if(t===null)return null;if(bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rn(t[0]);return{prefix:r,iconName:ht(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(au))){var a=zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:ht(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:ht(i,t)||t}}}},he={noAuto:Ru,config:T,dom:zu,parse:Du,library:Fo,findIconDefinition:wr,toHtml:Vt},ju=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(_e.styles).length>0||T.autoFetchSvg)&&je&&T.autoReplaceSvg&&he.dom.i2svg({node:r})};function Dn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Vt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!je){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Bu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(na(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Ln(C(C({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Uu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,A=g===void 0?!1:g,M=r.found?r:n,R=M.width,S=M.height,y=a==="fak",O=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(le){return m.classes.indexOf(le)===-1}).filter(function(le){return le!==""||!!le}).concat(m.classes).join(" "),$={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(S)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/S*16*.0625,"em")}:{};A&&($.attributes[it]=""),l&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(d||Kt())},children:[l]}),delete $.attributes.title);var W=C(C({},$),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:C(C({},z),m.styles)}),ie=r.found&&n.found?ze("generateAbstractMask",W)||{children:[],attributes:{}}:ze("generateAbstractIcon",W)||{children:[],attributes:{}},ue=ie.children,ke=ie.attributes;return W.children=ue,W.attributes=ke,s?Uu(W):Bu(W)}function ti(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[it]="");var d=C({},o.styles);na(a)&&(d.transform=yu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Ln(d);m.length>0&&(u.style=m);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Hu(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ln(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=_e.styles;function kr(e){var t=e[0],n=e[1],r=e.slice(4),a=Jr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(tt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(tt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Yu={found:!1,width:512,height:512};function Wu(e,t){!_o&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=$o(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Zn[t]&&Zn[t][e]){var o=Zn[t][e];return r(kr(o))}Wu(e,t),r(C(C({},Yu),{},{icon:T.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var ni=function(){},Ar=T.measurePerformance&&nn&&nn.mark&&nn.measure?nn:{mark:ni,measure:ni},Mt='FA "6.1.1"',Ku=function(t){return Ar.mark("".concat(Mt," ").concat(t," begins")),function(){return Lo(t)}},Lo=function(t){Ar.mark("".concat(Mt," ").concat(t," ends")),Ar.measure("".concat(Mt," ").concat(t),"".concat(Mt," ").concat(t," begins"),"".concat(Mt," ").concat(t," ends"))},sa={begin:Ku,end:Lo},ln=function(){};function ri(e){var t=e.getAttribute?e.getAttribute(it):null;return typeof t=="string"}function qu(e){var t=e.getAttribute?e.getAttribute(Zr):null,n=e.getAttribute?e.getAttribute(Qr):null;return t&&n}function Vu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Xu(){if(T.autoReplaceSvg===!0)return fn.replace;var e=fn[T.autoReplaceSvg];return e||fn.replace}function Ju(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Gu(e){return X.createElement(e)}function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ju:Gu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ro(o,{ceFn:r}))}),a}function Zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ro(a),n)}),n.getAttribute(it)===null&&T.keepOriginalSource){var r=X.createComment(Zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ta(n).indexOf(T.replacementClass))return fn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Vt(s)}).join(`
`);n.setAttribute(it,""),n.innerHTML=o}};function ai(e){e()}function zo(e,t){var n=typeof t=="function"?t:ln;if(e.length===0)n();else{var r=ai;T.mutateApproach===tu&&(r=Xe.requestAnimationFrame||ai),r(function(){var a=Xu(),i=sa.begin("mutate");e.map(a),i(),n()})}}var la=!1;function Do(){la=!0}function Or(){la=!1}var xn=null;function ii(e){if(!!Xa&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?ln:t,r=e.nodeCallback,a=r===void 0?ln:r,i=e.pseudoElementsCallback,o=i===void 0?ln:i,s=e.observeMutationsRoot,l=s===void 0?X:s;xn=new Xa(function(u){if(!la){var d=Je();At(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ri(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ri(m.target)&&~lu.indexOf(m.attributeName))if(m.attributeName==="class"&&qu(m.target)){var g=zn(ta(m.target)),A=g.prefix,M=g.iconName;m.target.setAttribute(Zr,A||d),M&&m.target.setAttribute(Qr,M)}else Vu(m.target)&&a(m.target)})}}),je&&xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qu(){!xn||xn.disconnect()}function ed(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function td(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zn(ta(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Nu(a.prefix,e.innerText)||aa(a.prefix,yr(e.innerText))),a}function nd(e){var t=At(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function rd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=td(e),r=n.iconName,a=n.prefix,i=n.rest,o=nd(e),s=xr("parseNodeAttributes",{},e),l=t.styleParser?ed(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ad=_e.styles;function jo(e){var t=T.autoReplaceSvg==="nest"?oi(e,{styleParser:!1}):oi(e);return~t.extra.classes.indexOf(wo)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!je)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ja,"-").concat(m))},a=function(m){return n.remove("".concat(Ja,"-").concat(m))},i=T.autoFetchSvg?Object.keys(ea):Object.keys(ad),o=[".".concat(wo,":not([").concat(it,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(it,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=At(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=sa.begin("onTree"),u=s.reduce(function(d,m){try{var g=jo(m);g&&d.push(g)}catch(A){_o||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(g){zo(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function id(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jo(e).then(function(n){n&&zo([n],t)})}function od(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var sd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ie:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,g=m===void 0?null:m,A=n.titleId,M=A===void 0?null:A,R=n.classes,S=R===void 0?[]:R,y=n.attributes,O=y===void 0?{}:y,$=n.styles,z=$===void 0?{}:$;if(!!t){var W=t.prefix,ie=t.iconName,ue=t.icon;return Dn(C({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(g?O["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(M||Kt()):(O["aria-hidden"]="true",O.focusable="false")),oa({icons:{main:kr(ue),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ie,transform:C(C({},Ie),a),symbol:o,title:g,maskId:d,titleId:M,extra:{attributes:O,styles:z,classes:S}})})}},ld={mixout:function(){return{icon:od(sd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=si,n.nodeCallback=id,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return si(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(A,M){Promise.all([Cr(a,s),d.iconName?Cr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var S=Jr(R,2),y=S[0],O=S[1];A([n,oa({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ln(s);l.length>0&&(a.style=l);var u;return na(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},fd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Dn({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},cd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Dn({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Hu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},ud={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ie:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,A=g===void 0?{}:g;return Dn({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),ti({content:n,transform:C(C({},Ie),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Fn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(go){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ti({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},dd=new RegExp('"',"ug"),li=[1105920,1112319];function md(e){var t=e.replace(dd,""),n=Ou(t,0),r=n>=li[0]&&n<=li[1],a=t.length===2?t[0]===t[1]:!1;return{value:yr(a?t[0]:t),isSecondary:r||a}}function fi(e,t){var n="".concat(eu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=At(e.children),o=i.filter(function(ie){return ie.getAttribute(br)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(iu),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yn[l[2].toLowerCase()]:ou[u],A=md(m),M=A.value,R=A.isSecondary,S=l[0].startsWith("FontAwesome"),y=aa(g,M),O=y;if(S){var $=Mu(M);$.iconName&&$.prefix&&(y=$.iconName,g=$.prefix)}if(y&&!R&&(!o||o.getAttribute(Zr)!==g||o.getAttribute(Qr)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var z=rd(),W=z.extra;W.attributes[br]=t,Cr(y,g).then(function(ie){var ue=oa(C(C({},z),{},{icons:{main:ie,mask:ia()},prefix:g,iconName:O,extra:W,watchable:!0})),ke=X.createElement("svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=ue.map(function(le){return Vt(le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pd(e){return Promise.all([fi(e,"::before"),fi(e,"::after")])}function hd(e){return e.parentNode!==document.head&&!~nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ci(e){if(!!je)return new Promise(function(t,n){var r=At(e.querySelectorAll("*")).filter(hd).map(pd),a=sa.begin("searchPseudoElements");Do(),Promise.all(r).then(function(){a(),Or(),t()}).catch(function(){a(),Or(),n()})})}var vd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ci,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ci(a)}}},ui=!1,gd={mixout:function(){return{dom:{unwatch:function(){Do(),ui=!0}}}},hooks:function(){return{bootstrap:function(){ii(xr("mutationObserverCallbacks",{}))},noAuto:function(){Qu()},watch:function(n){var r=n.observeMutationsRoot;ui?Or():ii(xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bd={mixout:function(){return{parse:{transform:function(n){return di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:g};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},Qn={x:0,y:0,width:"100%",height:"100%"};function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yd(e){return e.tag==="g"?e.children:[e]}var _d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zn(a.split(" ").map(function(o){return o.trim()})):ia();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,g=o.icon,A=bu({transform:l,containerWidth:m,iconWidth:u}),M={tag:"rect",attributes:C(C({},Qn),{},{fill:"white"})},R=d.children?{children:d.children.map(mi)}:{},S={tag:"g",attributes:C({},A.inner),children:[mi(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},R))]},y={tag:"g",attributes:C({},A.outer),children:[S]},O="mask-".concat(s||Kt()),$="clip-".concat(s||Kt()),z={tag:"mask",attributes:C(C({},Qn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:yd(g)},z]};return r.push(W,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(O,")")},Qn)}),{children:r,attributes:a}}}},xd={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},kd=[xu,ld,fd,cd,ud,vd,gd,bd,_d,xd,wd];Lu(kd,{mixoutsTo:he});he.noAuto;var Bo=he.config,Cd=he.library;he.dom;var Uo=he.parse;he.findIconDefinition;he.toHtml;var Ad=he.icon;he.layer;var Od=he.text;he.counter;var Ed=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Pd(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Id=Pd(function(e){(function(t){var n=function(y,O,$){if(!u(O)||m(O)||g(O)||A(O)||l(O))return O;var z,W=0,ie=0;if(d(O))for(z=[],ie=O.length;W<ie;W++)z.push(n(y,O[W],$));else{z={};for(var ue in O)Object.prototype.hasOwnProperty.call(O,ue)&&(z[y(ue,$)]=n(y,O[ue],$))}return z},r=function(y,O){O=O||{};var $=O.separator||"_",z=O.split||/(?=[A-Z])/;return y.split(z).join($)},a=function(y){return M(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,$){return $?$.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},g=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},M=function(y){return y=y-0,y===y},R=function(y,O){var $=O&&"process"in O?O.process:O;return typeof $!="function"?y:function(z,W){return $(z,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(R(a,O),y)},decamelizeKeys:function(y,O){return n(R(o,O),y,O)},pascalizeKeys:function(y,O){return n(R(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(Ed)}),Td=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sd=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Er=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Nd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Md(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Md(d);break;case"style":l.style=Nd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Sd(n,["class","style"]);return so(e.tag,wn({},t,{class:a.class,style:wn({},a.style,o)},a.attrs,s),r)}var Ho=!1;try{Ho=!0}catch{}function $d(){if(!Ho&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$t({},e,t):{}}function Fd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},$t(t,"fa-"+e.size,e.size!==null),$t(t,"fa-rotate-"+e.rotation,e.rotation!==null),$t(t,"fa-pull-"+e.pull,e.pull!==null),$t(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function pi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Td(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ld=Wr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return pi(t.icon)}),i=ve(function(){return jt("classes",Fd(t))}),o=ve(function(){return jt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=ve(function(){return jt("mask",pi(t.mask))}),l=ve(function(){return Ad(a.value,wn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});an(l,function(d){if(!d)return $d("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?fa(l.value.abstract[0],{},r):null});return function(){return u.value}}});Wr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=ve(function(){return[a+"-layers"].concat(Er(t.fixedWidth?[a+"-fw"]:[]))});return function(){return so("div",{class:i.value},r.default?r.default():[])}}});Wr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=ve(function(){return jt("classes",[].concat(Er(t.counter?[a+"-layers-counter"]:[]),Er(t.position?[a+"-layers-"+t.position]:[])))}),o=ve(function(){return jt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=ve(function(){var u=Od(t.value.toString(),wn({},o.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return fa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Rd={prefix:"fas",iconName:"bolt",icon:[384,512,[9889,"zap"],"f0e7","M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"]},zd={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"]},Dd={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"]},jd={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"]},Bd={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]},Ud={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"]},Hd={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z"]};const ca=yf(Hc);Cd.add(Bd,Hd,jd,zd,Rd,Dd,Ud);ca.component("font-awesome-icon",Ld);ca.config.productionTip=!1;ca.mount("#app");Cc();
