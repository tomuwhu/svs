/* empty css                      */import{s as M,n as q,o as P}from"../chunks/scheduler.feaddeb4.js";import{S as R,i as L,g as k,m as A,s as E,e as I,h as w,j as H,n as O,f as p,y as V,c as S,k as f,a as C,x as _,C as N,o as T}from"../chunks/index.a0f02fa7.js";import{e as z}from"../chunks/each.e59479a4.js";import{b as $}from"../chunks/paths.27524e5a.js";import{s as U}from"../chunks/serverurl.5c6be767.js";import{a as B}from"../chunks/axios.4a70c6fc.js";const ee=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function D(c,a,r){const o=c.slice();return o[3]=a[r],o}function G(c){let a,r=c[3].name+"",o,m,i,v,n,u,y,b,h,g,l,t;return{c(){a=k("div"),o=A(r),m=E(),i=k("hr"),v=E(),n=k("a"),u=A("Honlap"),b=E(),h=k("a"),g=A("    Git    "),t=E(),this.h()},l(s){a=w(s,"DIV",{class:!0});var e=H(a);o=O(e,r),m=S(e),i=w(e,"HR",{}),v=S(e),n=w(e,"A",{class:!0,href:!0,target:!0});var d=H(n);u=O(d,"Honlap"),d.forEach(p),b=S(e),h=w(e,"A",{class:!0,href:!0,target:!0});var j=H(h);g=O(j,"    Git    "),j.forEach(p),t=S(e),e.forEach(p),this.h()},h(){f(n,"class","hl svelte-1bko94w"),f(n,"href",y=c[3].web.slice(0,4)=="http"?c[3].web:`http://${c[3].web}`),f(n,"target","_blank"),f(h,"class","g svelte-1bko94w"),f(h,"href",l=c[3].git.slice(0,4)=="http"?c[3].git:`http://${c[3].git}`),f(h,"target","_blank"),f(a,"class","e svelte-1bko94w")},m(s,e){C(s,a,e),_(a,o),_(a,m),_(a,i),_(a,v),_(a,n),_(n,u),_(a,b),_(a,h),_(h,g),_(a,t)},p(s,e){e&2&&r!==(r=s[3].name+"")&&T(o,r),e&2&&y!==(y=s[3].web.slice(0,4)=="http"?s[3].web:`http://${s[3].web}`)&&f(n,"href",y),e&2&&l!==(l=s[3].git.slice(0,4)=="http"?s[3].git:`http://${s[3].git}`)&&f(h,"href",l)},d(s){s&&p(a)}}}function F(c){let a,r,o,m,i,v="Vissza a főoldalra",n,u,y="Honlapok",b,h,g=z(c[1]),l=[];for(let t=0;t<g.length;t+=1)l[t]=G(D(c,g,t));return{c(){a=k("div"),r=k("a"),o=A("Oktatási csatorna"),i=k("a"),i.textContent=v,n=E(),u=k("h1"),u.textContent=y,b=E();for(let t=0;t<l.length;t+=1)l[t].c();h=I(),this.h()},l(t){a=w(t,"DIV",{class:!0});var s=H(a);r=w(s,"A",{href:!0,class:!0});var e=H(r);o=O(e,"Oktatási csatorna"),e.forEach(p),i=w(s,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(i)!=="svelte-1kawfqp"&&(i.textContent=v),s.forEach(p),n=S(t),u=w(t,"H1",{class:!0,"data-svelte-h":!0}),V(u)!=="svelte-rbkdto"&&(u.textContent=y),b=S(t);for(let d=0;d<l.length;d+=1)l[d].l(t);h=I(),this.h()},h(){f(r,"href",m=$+"/stream/"+c[0].name),f(r,"class","svelte-1bko94w"),f(i,"href",$+"/"),f(i,"class","svelte-1bko94w"),f(a,"class","menu svelte-1bko94w"),f(u,"class","svelte-1bko94w")},m(t,s){C(t,a,s),_(a,r),_(r,o),_(a,i),C(t,n,s),C(t,u,s),C(t,b,s);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,s);C(t,h,s)},p(t,[s]){if(s&1&&m!==(m=$+"/stream/"+t[0].name)&&f(r,"href",m),s&2){g=z(t[1]);let e;for(e=0;e<g.length;e+=1){const d=D(t,g,e);l[e]?l[e].p(d,s):(l[e]=G(d),l[e].c(),l[e].m(h.parentNode,h))}for(;e<l.length;e+=1)l[e].d(1);l.length=g.length}},i:q,o:q,d(t){t&&(p(a),p(n),p(u),p(b),p(h)),N(l,t)}}}function J(c,a,r){var o={un:null},m=U,i=[];return P(async()=>{r(0,o.un=localStorage.getItem("un")||"",o);try{const v=await B.get(m+"req.php");r(1,i=v.data),i.forEach(n=>{n.un==o.un&&r(0,o.name=n.name,o)})}catch(v){console.log(v)}}),[o,i]}class te extends R{constructor(a){super(),L(this,a,J,F,M,{})}}export{te as component,ee as universal};
