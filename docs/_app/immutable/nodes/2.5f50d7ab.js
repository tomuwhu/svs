import{s as ot,n as ie,o as it,r as at}from"../chunks/scheduler.e108d1fd.js";import{S as ut,i as ct,g as T,s as g,m as de,h as _,y as pe,c as N,j as he,n as me,f as S,k as U,a as R,x as ye,o as Ee,z as W,A as M}from"../chunks/index.bb8e188f.js";const Hn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),lt="https://inf.u-szeged.hu/~tnemeth/SOB/";function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:be}=Object,G=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:k}=Array,I=X("undefined");function dt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=C("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const ht=X("string"),x=X("function"),Ie=X("number"),Q=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,z=e=>{if(G(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=C("Date"),Et=C("File"),bt=C("Blob"),wt=C("FileList"),St=e=>Q(e)&&x(e.pipe),Rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=G(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},Ot=C("URLSearchParams"),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const He=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Me=e=>!I(e)&&e!==He;function ae(){const{caseless:e}=Me(this)&&this||{},t={},n=(r,s)=>{const i=e&&je(t,s)||s;z(t[i])&&z(r)?t[i]=ae(t[i],r):z(r)?t[i]=ae({},r):k(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const Tt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,i)=>{n&&x(s)?e[i]=ke(s,n):e[i]=s},{allOwnKeys:r}),e),_t=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nt=(e,t,n,r)=>{let s,i,a;const o={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!r||r(a,e,t))&&!o[a]&&(t[a]=e[a],o[a]=!0);e=n!==!1&&be(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ft=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Ie(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),Bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ut=C("HTMLFormElement"),Dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=C("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},kt=e=>{ze(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return k(e)?r(e):r(String(e).split(t)),n},It=()=>{},jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",Te="0123456789",qe={DIGIT:Te,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+Te},Ht=(e=16,t=qe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Mt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const zt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=k(r)?[]:{};return j(r,(a,o)=>{const m=n(a,s+1);!I(m)&&(i[o]=m)}),t[s]=void 0,i}}return r};return n(e,0)},qt=C("AsyncFunction"),Jt=e=>e&&(Q(e)||x(e))&&x(e.then)&&x(e.catch),p={isArray:k,isArrayBuffer:ve,isBuffer:dt,isFormData:Rt,isArrayBufferView:pt,isString:ht,isNumber:Ie,isBoolean:mt,isObject:Q,isPlainObject:z,isUndefined:I,isDate:yt,isFile:Et,isBlob:bt,isRegExp:Lt,isFunction:x,isStream:St,isURLSearchParams:Ot,isTypedArray:Ct,isFileList:wt,forEach:j,merge:ae,extend:Tt,trim:At,stripBOM:_t,inherits:gt,toFlatObject:Nt,kindOf:G,kindOfTest:C,endsWith:xt,toArray:Ft,forEachEntry:Bt,matchAll:Pt,isHTMLForm:Ut,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:ze,freezeMethods:kt,toObjectSet:vt,toCamelCase:Dt,noop:It,toFiniteNumber:jt,findKey:je,global:He,isContextDefined:Me,ALPHABET:qe,generateString:Ht,isSpecCompliantForm:Mt,toJSONObject:zt,isAsyncFn:qt,isThenable:Jt};function w(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}p.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Je=w.prototype,Ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ve[e]={value:e}});Object.defineProperties(w,Ve);Object.defineProperty(Je,"isAxiosError",{value:!0});w.from=(e,t,n,r,s,i)=>{const a=Object.create(Je);return p.toFlatObject(e,a,function(m){return m!==Error.prototype},o=>o!=="isAxiosError"),w.call(a,e.message,t,n,r,s),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Vt=null;function ue(e){return p.isPlainObject(e)||p.isArray(e)}function We(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function _e(e,t,n){return e?e.concat(t).map(function(s,i){return s=We(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Wt(e){return p.isArray(e)&&!e.some(ue)}const Kt=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=p.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,b){return!p.isUndefined(b[E])});const r=n.metaTokens,s=n.visitor||c,i=n.dots,a=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!m&&p.isBlob(h))throw new w("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?m&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,E,b){let y=h;if(h&&!b&&typeof h=="object"){if(p.endsWith(E,"{}"))E=r?E:E.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&Wt(h)||(p.isFileList(h)||p.endsWith(E,"[]"))&&(y=p.toArray(h)))return E=We(E),y.forEach(function(D,ee){!(p.isUndefined(D)||D===null)&&t.append(a===!0?_e([E],ee,i):a===null?E:E+"[]",u(D))}),!1}return ue(h)?!0:(t.append(_e(b,E,i),u(h)),!1)}const l=[],d=Object.assign(Kt,{defaultVisitor:c,convertValue:u,isVisitable:ue});function f(h,E){if(!p.isUndefined(h)){if(l.indexOf(h)!==-1)throw Error("Circular reference detected in "+E.join("."));l.push(h),p.forEach(h,function(y,O){(!(p.isUndefined(y)||y===null)&&s.call(t,y,p.isString(O)?O.trim():O,E,d))===!0&&f(y,E?E.concat(O):[O])}),l.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return f(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function we(e,t){this._pairs=[],e&&Z(e,this,t)}const Ke=we.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,ge)}:ge;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ge(e,t,n){if(!t)return e;const r=n&&n.encode||Gt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=p.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ne=Xt,Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qt=typeof URLSearchParams<"u"?URLSearchParams:we,Zt=typeof FormData<"u"?FormData:null,Yt=typeof Blob<"u"?Blob:null,$t=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),en=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),F={isBrowser:!0,classes:{URLSearchParams:Qt,FormData:Zt,Blob:Yt},isStandardBrowserEnv:$t,isStandardBrowserWebWorkerEnv:en,protocols:["http","https","file","blob","url","data"]};function tn(e,t){return Z(e,new F.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return F.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Qe(e){function t(n,r,s,i){let a=n[i++];const o=Number.isFinite(+a),m=i>=n.length;return a=!a&&p.isArray(s)?s.length:a,m?(p.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!o):((!s[a]||!p.isObject(s[a]))&&(s[a]=[]),t(n,r,s[a],i)&&p.isArray(s[a])&&(s[a]=rn(s[a])),!o)}if(p.isFormData(e)&&p.isFunction(e.entries)){const n={};return p.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}const sn={"Content-Type":void 0};function on(e,t,n){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:Xe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=p.isObject(t);if(i&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return s&&s?JSON.stringify(Qe(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((o=p.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Z(o?{"files[]":t}:t,m&&new m,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),on(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&p.isString(t)&&(r&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(o){if(a)throw o.name==="SyntaxError"?w.from(o,w.ERR_BAD_RESPONSE,this,null,this.response):o}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(t){Y.headers[t]={}});p.forEach(["post","put","patch"],function(t){Y.headers[t]=p.merge(sn)});const Se=Y,an=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),un=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||t[n]&&an[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:p.isArray(e)?e.map(q):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(p.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!p.isString(t)){if(p.isString(r))return t.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(t)}}function fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function dn(e,t){const n=p.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,a){return this[r].call(this,t,s,i,a)},configurable:!0})})}class ${constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(o,m,u){const c=v(m);if(!c)throw new Error("header name must be a non-empty string");const l=p.findKey(s,c);(!l||s[l]===void 0||u===!0||u===void 0&&s[l]!==!1)&&(s[l||m]=q(o))}const a=(o,m)=>p.forEach(o,(u,c)=>i(u,c,m));return p.isPlainObject(t)||t instanceof this.constructor?a(t,n):p.isString(t)&&(t=t.trim())&&!ln(t)?a(un(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=v(t),t){const r=p.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(p.isFunction(n))return n.call(this,s,r);if(p.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=p.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(a){if(a=v(a),a){const o=p.findKey(r,a);o&&(!n||ne(r,r[o],o,n))&&(delete r[o],s=!0)}}return p.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ne(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return p.forEach(this,(s,i)=>{const a=p.findKey(r,i);if(a){n[a]=q(s),delete n[i];return}const o=t?fn(i):String(i).trim();o!==i&&delete n[i],n[o]=q(s),r[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return p.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function i(a){const o=v(a);r[o]||(dn(s,a),r[o]=!0)}return p.isArray(t)?t.forEach(i):i(t),this}}$.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.freezeMethods($.prototype);p.freezeMethods($);const B=$;function re(e,t){const n=this||Se,r=t||n,s=B.from(r.headers);let i=r.data;return p.forEach(e,function(o){i=o.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ze(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}p.inherits(H,w,{__CANCEL__:!0});function pn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const hn=F.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,a,o){const m=[];m.push(n+"="+encodeURIComponent(r)),p.isNumber(s)&&m.push("expires="+new Date(s).toGMTString()),p.isString(i)&&m.push("path="+i),p.isString(a)&&m.push("domain="+a),o===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!mn(t)?yn(e,t):t}const En=F.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(a){const o=p.isString(a)?s(a):a;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}();function bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,a;return t=t!==void 0?t:1e3,function(m){const u=Date.now(),c=r[i];a||(a=u),n[s]=m,r[s]=u;let l=i,d=0;for(;l!==s;)d+=n[l++],l=l%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-a<t)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function Fe(e,t){let n=0;const r=wn(50,250);return s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,o=i-n,m=r(o),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:o,rate:m||void 0,estimated:m&&a&&u?(a-i)/m:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const Sn=typeof XMLHttpRequest<"u",Rn=Sn&&function(e){return new Promise(function(n,r){let s=e.data;const i=B.from(e.headers).normalize(),a=e.responseType;let o;function m(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}p.isFormData(s)&&(F.isStandardBrowserEnv||F.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+h))}const c=Ye(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ge(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function l(){if(!u)return;const f=B.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:e,request:u};pn(function(y){n(y),m()},function(y){r(y),m()},E),u=null}if("onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(l)},u.onabort=function(){u&&(r(new w("Request aborted",w.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Xe;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new w(h,E.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,u)),u=null},F.isStandardBrowserEnv){const f=(e.withCredentials||En(c))&&e.xsrfCookieName&&hn.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&p.forEach(i.toJSON(),function(h,E){u.setRequestHeader(E,h)}),p.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=f=>{u&&(r(!f||f.type?new H(null,e,u):f),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=bn(c);if(d&&F.protocols.indexOf(d)===-1){r(new w("Unsupported protocol "+d+":",w.ERR_BAD_REQUEST,e));return}u.send(s||null)})},J={http:Vt,xhr:Rn};p.forEach(J,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const On={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=p.isString(n)?J[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(J,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!p.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:J};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Ce(e){return se(e),e.headers=B.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),On.getAdapter(e.adapter||Se.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=B.from(r.headers),r},function(r){return Ze(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=B.from(r.response.headers))),Promise.reject(r)})}const Be=e=>e instanceof B?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(u,c,l){return p.isPlainObject(u)&&p.isPlainObject(c)?p.merge.call({caseless:l},u,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function s(u,c,l){if(p.isUndefined(c)){if(!p.isUndefined(u))return r(void 0,u,l)}else return r(u,c,l)}function i(u,c){if(!p.isUndefined(c))return r(void 0,c)}function a(u,c){if(p.isUndefined(c)){if(!p.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function o(u,c,l){if(l in t)return r(u,c);if(l in e)return r(void 0,u)}const m={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(u,c)=>s(Be(u),Be(c),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(c){const l=m[c]||s,d=l(e[c],t[c],c);p.isUndefined(d)&&l!==o||(n[c]=d)}),n}const $e="1.4.0",Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};Re.transitional=function(t,n,r){function s(i,a){return"[Axios v"+$e+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,o)=>{if(t===!1)throw new w(s(a," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!Pe[a]&&(Pe[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,o):!0}};function An(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],a=t[i];if(a){const o=e[i],m=o===void 0||a(o,i,e);if(m!==!0)throw new w("option "+i+" must be "+m,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}const ce={assertOptions:An,validators:Re},P=ce.validators;class K{constructor(t){this.defaults=t,this.interceptors={request:new Ne,response:new Ne}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ce.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(p.isFunction(s)?n.paramsSerializer={serialize:s}:ce.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=i&&p.merge(i.common,i[n.method]),a&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=B.concat(a,i);const o=[];let m=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(m=m&&E.synchronous,o.unshift(E.fulfilled,E.rejected))});const u=[];this.interceptors.response.forEach(function(E){u.push(E.fulfilled,E.rejected)});let c,l=0,d;if(!m){const h=[Ce.bind(this),void 0];for(h.unshift.apply(h,o),h.push.apply(h,u),d=h.length,c=Promise.resolve(n);l<d;)c=c.then(h[l++],h[l++]);return c}d=o.length;let f=n;for(l=0;l<d;){const h=o[l++],E=o[l++];try{f=h(f)}catch(b){E.call(this,b);break}}try{c=Ce.call(this,f)}catch(h){return Promise.reject(h)}for(l=0,d=u.length;l<d;)c=c.then(u[l++],u[l++]);return c}getUri(t){t=L(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ge(n,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});p.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,o){return this.request(L(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});const V=K;class Oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(o=>{r.subscribe(o),i=o}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,o){r.reason||(r.reason=new H(i,a,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Oe(function(s){t=s}),cancel:t}}}const Tn=Oe;function _n(e){return function(n){return e.apply(null,n)}}function gn(e){return p.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const Nn=le;function et(e){const t=new V(e),n=ke(V.prototype.request,t);return p.extend(n,V.prototype,t,{allOwnKeys:!0}),p.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(L(e,s))},n}const A=et(Se);A.Axios=V;A.CanceledError=H;A.CancelToken=Tn;A.isCancel=Ze;A.VERSION=$e;A.toFormData=Z;A.AxiosError=w;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=_n;A.isAxiosError=gn;A.mergeConfig=L;A.AxiosHeaders=B;A.formToJSON=e=>Qe(p.isHTMLForm(e)?new FormData(e):e);A.HttpStatusCode=Nn;A.default=A;const oe=A;function xn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tt={exports:{}},nt={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(n,r){return n<<r|n>>>32-r},rotr:function(n,r){return n<<32-r|n>>>r},endian:function(n){if(n.constructor==Number)return t.rotl(n,8)&16711935|t.rotl(n,24)&4278255360;for(var r=0;r<n.length;r++)n[r]=t.endian(n[r]);return n},randomBytes:function(n){for(var r=[];n>0;n--)r.push(Math.floor(Math.random()*256));return r},bytesToWords:function(n){for(var r=[],s=0,i=0;s<n.length;s++,i+=8)r[i>>>5]|=n[s]<<24-i%32;return r},wordsToBytes:function(n){for(var r=[],s=0;s<n.length*32;s+=8)r.push(n[s>>>5]>>>24-s%32&255);return r},bytesToHex:function(n){for(var r=[],s=0;s<n.length;s++)r.push((n[s]>>>4).toString(16)),r.push((n[s]&15).toString(16));return r.join("")},hexToBytes:function(n){for(var r=[],s=0;s<n.length;s+=2)r.push(parseInt(n.substr(s,2),16));return r},bytesToBase64:function(n){for(var r=[],s=0;s<n.length;s+=3)for(var i=n[s]<<16|n[s+1]<<8|n[s+2],a=0;a<4;a++)s*8+a*6<=n.length*8?r.push(e.charAt(i>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(n){n=n.replace(/[^A-Z0-9+\/]/ig,"");for(var r=[],s=0,i=0;s<n.length;i=++s%4)i!=0&&r.push((e.indexOf(n.charAt(s-1))&Math.pow(2,-2*i+8)-1)<<i*2|e.indexOf(n.charAt(s))>>>6-i*2);return r}};nt.exports=t})();var Fn=nt.exports,fe={utf8:{stringToBytes:function(e){return fe.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(fe.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n)&255);return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}},Ue=fe;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Cn=function(e){return e!=null&&(rt(e)||Bn(e)||!!e._isBuffer)};function rt(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Bn(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&rt(e.slice(0,0))}(function(){var e=Fn,t=Ue.utf8,n=Cn,r=Ue.bin,s=function(i,a){i.constructor==String?a&&a.encoding==="binary"?i=r.stringToBytes(i):i=t.stringToBytes(i):n(i)?i=Array.prototype.slice.call(i,0):!Array.isArray(i)&&i.constructor!==Uint8Array&&(i=i.toString());for(var o=e.bytesToWords(i),m=i.length*8,u=1732584193,c=-271733879,l=-1732584194,d=271733878,f=0;f<o.length;f++)o[f]=(o[f]<<8|o[f]>>>24)&16711935|(o[f]<<24|o[f]>>>8)&4278255360;o[m>>>5]|=128<<m%32,o[(m+64>>>9<<4)+14]=m;for(var h=s._ff,E=s._gg,b=s._hh,y=s._ii,f=0;f<o.length;f+=16){var O=u,D=c,ee=l,st=d;u=h(u,c,l,d,o[f+0],7,-680876936),d=h(d,u,c,l,o[f+1],12,-389564586),l=h(l,d,u,c,o[f+2],17,606105819),c=h(c,l,d,u,o[f+3],22,-1044525330),u=h(u,c,l,d,o[f+4],7,-176418897),d=h(d,u,c,l,o[f+5],12,1200080426),l=h(l,d,u,c,o[f+6],17,-1473231341),c=h(c,l,d,u,o[f+7],22,-45705983),u=h(u,c,l,d,o[f+8],7,1770035416),d=h(d,u,c,l,o[f+9],12,-1958414417),l=h(l,d,u,c,o[f+10],17,-42063),c=h(c,l,d,u,o[f+11],22,-1990404162),u=h(u,c,l,d,o[f+12],7,1804603682),d=h(d,u,c,l,o[f+13],12,-40341101),l=h(l,d,u,c,o[f+14],17,-1502002290),c=h(c,l,d,u,o[f+15],22,1236535329),u=E(u,c,l,d,o[f+1],5,-165796510),d=E(d,u,c,l,o[f+6],9,-1069501632),l=E(l,d,u,c,o[f+11],14,643717713),c=E(c,l,d,u,o[f+0],20,-373897302),u=E(u,c,l,d,o[f+5],5,-701558691),d=E(d,u,c,l,o[f+10],9,38016083),l=E(l,d,u,c,o[f+15],14,-660478335),c=E(c,l,d,u,o[f+4],20,-405537848),u=E(u,c,l,d,o[f+9],5,568446438),d=E(d,u,c,l,o[f+14],9,-1019803690),l=E(l,d,u,c,o[f+3],14,-187363961),c=E(c,l,d,u,o[f+8],20,1163531501),u=E(u,c,l,d,o[f+13],5,-1444681467),d=E(d,u,c,l,o[f+2],9,-51403784),l=E(l,d,u,c,o[f+7],14,1735328473),c=E(c,l,d,u,o[f+12],20,-1926607734),u=b(u,c,l,d,o[f+5],4,-378558),d=b(d,u,c,l,o[f+8],11,-2022574463),l=b(l,d,u,c,o[f+11],16,1839030562),c=b(c,l,d,u,o[f+14],23,-35309556),u=b(u,c,l,d,o[f+1],4,-1530992060),d=b(d,u,c,l,o[f+4],11,1272893353),l=b(l,d,u,c,o[f+7],16,-155497632),c=b(c,l,d,u,o[f+10],23,-1094730640),u=b(u,c,l,d,o[f+13],4,681279174),d=b(d,u,c,l,o[f+0],11,-358537222),l=b(l,d,u,c,o[f+3],16,-722521979),c=b(c,l,d,u,o[f+6],23,76029189),u=b(u,c,l,d,o[f+9],4,-640364487),d=b(d,u,c,l,o[f+12],11,-421815835),l=b(l,d,u,c,o[f+15],16,530742520),c=b(c,l,d,u,o[f+2],23,-995338651),u=y(u,c,l,d,o[f+0],6,-198630844),d=y(d,u,c,l,o[f+7],10,1126891415),l=y(l,d,u,c,o[f+14],15,-1416354905),c=y(c,l,d,u,o[f+5],21,-57434055),u=y(u,c,l,d,o[f+12],6,1700485571),d=y(d,u,c,l,o[f+3],10,-1894986606),l=y(l,d,u,c,o[f+10],15,-1051523),c=y(c,l,d,u,o[f+1],21,-2054922799),u=y(u,c,l,d,o[f+8],6,1873313359),d=y(d,u,c,l,o[f+15],10,-30611744),l=y(l,d,u,c,o[f+6],15,-1560198380),c=y(c,l,d,u,o[f+13],21,1309151649),u=y(u,c,l,d,o[f+4],6,-145523070),d=y(d,u,c,l,o[f+11],10,-1120210379),l=y(l,d,u,c,o[f+2],15,718787259),c=y(c,l,d,u,o[f+9],21,-343485551),u=u+O>>>0,c=c+D>>>0,l=l+ee>>>0,d=d+st>>>0}return e.endian([u,c,l,d])};s._ff=function(i,a,o,m,u,c,l){var d=i+(a&o|~a&m)+(u>>>0)+l;return(d<<c|d>>>32-c)+a},s._gg=function(i,a,o,m,u,c,l){var d=i+(a&m|o&~m)+(u>>>0)+l;return(d<<c|d>>>32-c)+a},s._hh=function(i,a,o,m,u,c,l){var d=i+(a^o^m)+(u>>>0)+l;return(d<<c|d>>>32-c)+a},s._ii=function(i,a,o,m,u,c,l){var d=i+(o^(a|~m))+(u>>>0)+l;return(d<<c|d>>>32-c)+a},s._blocksize=16,s._digestsize=16,tt.exports=function(i,a){if(i==null)throw new Error("Illegal argument "+i);var o=e.wordsToBytes(s(i,a));return a&&a.asBytes?o:a&&a.asString?r.bytesToString(o):e.bytesToHex(o)}})();var Pn=tt.exports;const Un=xn(Pn);function Dn(e){let t,n=e[0].name+"",r,s,i,a,o,m,u,c="Logout",l,d;return{c(){t=T("div"),r=de(n),s=g(),i=T("br"),a=g(),o=T("br"),m=g(),u=T("button"),u.textContent=c,this.h()},l(f){t=_(f,"DIV",{class:!0});var h=he(t);r=me(h,n),h.forEach(S),s=N(f),i=_(f,"BR",{}),a=N(f),o=_(f,"BR",{}),m=N(f),u=_(f,"BUTTON",{"data-svelte-h":!0}),pe(u)!=="svelte-hd9vso"&&(u.textContent=c),this.h()},h(){U(t,"class","svelte-187m2tk")},m(f,h){R(f,t,h),ye(t,r),R(f,s,h),R(f,i,h),R(f,a,h),R(f,o,h),R(f,m,h),R(f,u,h),l||(d=W(u,"click",e[5]),l=!0)},p(f,h){h&1&&n!==(n=f[0].name+"")&&Ee(r,n)},d(f){f&&(S(t),S(s),S(i),S(a),S(o),S(m),S(u)),l=!1,d()}}}function Ln(e){let t,n,r,s,i,a,o,m,u,c,l,d,f,h,E,b=e[1]&&e[2]&&De(e);return{c(){t=T("input"),n=g(),r=T("br"),s=T("br"),i=g(),a=T("input"),o=g(),m=T("br"),u=T("br"),c=g(),b&&b.c(),l=g(),d=T("br"),f=T("br"),this.h()},l(y){t=_(y,"INPUT",{type:!0,placeholder:!0}),n=N(y),r=_(y,"BR",{}),s=_(y,"BR",{}),i=N(y),a=_(y,"INPUT",{type:!0,placeholder:!0}),o=N(y),m=_(y,"BR",{}),u=_(y,"BR",{}),c=N(y),b&&b.l(y),l=N(y),d=_(y,"BR",{}),f=_(y,"BR",{}),this.h()},h(){U(t,"type","text"),U(t,"placeholder","Felhasználónév"),U(a,"type","password"),U(a,"placeholder","Jelszó")},m(y,O){R(y,t,O),M(t,e[1]),R(y,n,O),R(y,r,O),R(y,s,O),R(y,i,O),R(y,a,O),M(a,e[2]),R(y,o,O),R(y,m,O),R(y,u,O),R(y,c,O),b&&b.m(y,O),R(y,l,O),R(y,d,O),R(y,f,O),h||(E=[W(t,"input",e[6]),W(a,"input",e[7])],h=!0)},p(y,O){O&2&&t.value!==y[1]&&M(t,y[1]),O&4&&a.value!==y[2]&&M(a,y[2]),y[1]&&y[2]?b?b.p(y,O):(b=De(y),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null)},d(y){y&&(S(t),S(n),S(r),S(s),S(i),S(a),S(o),S(m),S(u),S(c),S(l),S(d),S(f)),b&&b.d(y),h=!1,at(E)}}}function De(e){let t,n="Login",r,s;return{c(){t=T("button"),t.textContent=n},l(i){t=_(i,"BUTTON",{"data-svelte-h":!0}),pe(t)!=="svelte-nja564"&&(t.textContent=n)},m(i,a){R(i,t,a),r||(s=W(t,"click",e[4]),r=!0)},p:ie,d(i){i&&S(t),r=!1,s()}}}function Le(e){let t,n=e[0].err+"",r,s,i;return{c(){t=T("span"),r=de(n),s=g(),i=T("br"),this.h()},l(a){t=_(a,"SPAN",{class:!0});var o=he(t);r=me(o,n),o.forEach(S),s=N(a),i=_(a,"BR",{}),this.h()},h(){U(t,"class","svelte-187m2tk")},m(a,o){R(a,t,o),ye(t,r),R(a,s,o),R(a,i,o)},p(a,o){o&1&&n!==(n=a[0].err+"")&&Ee(r,n)},d(a){a&&(S(t),S(s),S(i))}}}function kn(e){let t,n="SOB Intranet",r,s,i,a,o=e[0].msg+"",m;function u(f,h){if(!f[3])return Ln;if(!f[0].err)return Dn}let c=u(e),l=c&&c(e),d=e[0].err&&Le(e);return{c(){t=T("h1"),t.textContent=n,r=g(),l&&l.c(),s=g(),d&&d.c(),i=g(),a=T("span"),m=de(o),this.h()},l(f){t=_(f,"H1",{class:!0,"data-svelte-h":!0}),pe(t)!=="svelte-j6uv1b"&&(t.textContent=n),r=N(f),l&&l.l(f),s=N(f),d&&d.l(f),i=N(f),a=_(f,"SPAN",{class:!0});var h=he(a);m=me(h,o),h.forEach(S),this.h()},h(){U(t,"class","svelte-187m2tk"),U(a,"class","svelte-187m2tk")},m(f,h){R(f,t,h),R(f,r,h),l&&l.m(f,h),R(f,s,h),d&&d.m(f,h),R(f,i,h),R(f,a,h),ye(a,m)},p(f,[h]){c===(c=u(f))&&l?l.p(f,h):(l&&l.d(1),l=c&&c(f),l&&(l.c(),l.m(s.parentNode,s))),f[0].err?d?d.p(f,h):(d=Le(f),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null),h&1&&o!==(o=f[0].msg+"")&&Ee(m,o)},i:ie,o:ie,d(f){f&&(S(t),S(r),S(s),S(i),S(a)),l&&l.d(f),d&&d.d(f)}}}function vn(e,t,n){let r;var s=lt,i,a;const o={un:"-",name:"...",err:null,msg:""};it(async()=>{n(0,o.un=localStorage.getItem("un")||"",o);try{const d=await oe.post(s,o.un);n(0,o.un=d.data.un,o),n(0,o.name=d.data.name,o)}catch(d){n(0,o.err=d,o)}});function m(d){try{const f=oe.post(s+"login.php",{un:i,pw:Un(a)}).then(h=>{n(0,o.un=h.data.un,o),o.un==null&&(n(0,o.msg="Hibás felhasználónév vagy jelszó!",o),setInterval(()=>n(0,o.msg="",o),1e3)),n(0,o.name=h.data.name,o),localStorage.setItem("un",o.un)})}catch(f){n(0,o.err=f,o)}}function u(d){try{const f=oe.post(s+"logout.php",o.un).then(h=>{n(0,o.un="",o),n(0,o.name="...",o),localStorage.removeItem("un")})}catch(f){n(0,o.err=f,o)}}function c(){i=this.value,n(1,i)}function l(){a=this.value,n(2,a)}return e.$$.update=()=>{e.$$.dirty&1&&n(3,r=o.un&&o.name)},[o,i,a,r,m,u,c,l]}class Mn extends ut{constructor(t){super(),ct(this,t,vn,kn,ot,{})}}export{Mn as component,Hn as universal};
