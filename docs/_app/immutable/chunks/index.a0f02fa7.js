var C=Object.defineProperty;var B=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(B(t,typeof e!="symbol"?e+"":e,n),n);import{r as $,n as x,h as N,i as P,j as S,k as j,l as T,m as D,p as I,q as E,v as q,w as G,x as O}from"./scheduler.feaddeb4.js";let y=!1;function R(){y=!0}function z(){y=!1}function V(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const o=e[a];o.claim_order!==void 0&&r.push(o)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,o=(s>0&&e[n[s]].claim_order<=a?s+1:V(1,s,h=>e[n[h]].claim_order,a))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const c=[],l=[];let f=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);f>=r;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;t.insertBefore(l[r],o)}}function F(t,e){if(y){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function K(t,e,n){y&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function at(){return g(" ")}function ct(){return g("")}function ft(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return t.dataset.svelteH}function dt(t){return t===""?null:+t}function U(t){return Array.from(t.childNodes)}function H(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function M(t,e,n,i,s=!1){H(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function X(t,e,n,i){return M(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function _t(t,e,n){return X(t,e,n,L)}function Y(t,e){return M(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(e),!0)}function ht(t){return Y(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function mt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);H(t);const s=t.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const c=s.slice(1,s.length-1);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,c)}function pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e){t.value=e??""}function yt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class Z{constructor(e=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Q(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}class b extends Z{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)K(this.t,this.n[i],n)}}function xt(t,e){return new t(e)}const m=new Set;let _;function gt(){_={r:0,c:[],p:_}}function vt(){_.r||$(_.c),_=_.p}function k(t,e){t&&t.i&&(m.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(m.has(t))return;m.add(t),_.c.push(()=>{m.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Nt(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function tt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),T(()=>{const c=t.$$.on_mount.map(q).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),s.forEach(T)}function et(t,e){const n=t.$$;n.fragment!==null&&(D(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(G.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,i,s,c,l,f=[-1]){const r=I;E(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:N(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...v)=>{const w=v.length?v[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=w)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](w),o&&nt(t,u)),h}):[],a.update(),o=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){R();const u=U(e.target);a.fragment&&a.fragment.l(u),u.forEach(p)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),tt(t,e.target,e.anchor),z(),P()}E(r)}class At{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){et(this,1),this.$destroy=x}$on(e,n){if(!S(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!j(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);export{$t as A,dt as B,lt as C,mt as D,b as H,At as S,K as a,vt as b,ht as c,k as d,ct as e,p as f,L as g,_t as h,Et as i,U as j,ut as k,yt as l,g as m,Y as n,pt as o,gt as p,xt as q,Nt as r,at as s,wt as t,Tt as u,tt as v,et as w,F as x,ot as y,ft as z};
