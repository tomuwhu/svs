import{a as j,s as L}from"../chunks/axios.5878e935.js";import{s as g,n as w,o as D,r as H}from"../chunks/scheduler.feaddeb4.js";import{S as M,i as V,g as b,s as R,m as P,h as y,j as T,f as n,c as I,y as z,n as A,k as x,a as p,x as O,o as U,z as N,A as E}from"../chunks/index.aea1567c.js";import{b as F}from"../chunks/paths.5994a9e2.js";import{m as q}from"../chunks/md5.d8309aa2.js";const st=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function J(m){let t,l="honlaplista";return{c(){t=b("a"),t.textContent=l,this.h()},l(r){t=y(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-da5s42"&&(t.textContent=l),this.h()},h(){x(t,"href",F+"/honlapok/"),x(t,"class","svelte-5rm7ui")},m(r,c){p(r,t,c)},d(r){r&&n(t)}}}function G(m){let t,l="regisztráció";return{c(){t=b("a"),t.textContent=l,this.h()},l(r){t=y(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-gav7xn"&&(t.textContent=l),this.h()},h(){x(t,"href",F+"/reg/"),x(t,"class","svelte-5rm7ui")},m(r,c){p(r,t,c)},d(r){r&&n(t)}}}function K(m){let t,l=m[0].err+"",r,c,f;return{c(){t=b("span"),r=P(l),c=R(),f=b("br"),this.h()},l(s){t=y(s,"SPAN",{class:!0});var e=T(t);r=A(e,l),e.forEach(n),c=I(s),f=y(s,"BR",{}),this.h()},h(){x(t,"class","svelte-5rm7ui")},m(s,e){p(s,t,e),O(t,r),p(s,c,e),p(s,f,e)},p(s,e){e&1&&l!==(l=s[0].err+"")&&U(r,l)},d(s){s&&(n(t),n(c),n(f))}}}function Q(m){let t,l=m[0].name+"",r,c,f,s,e,C,v,S="Logout",h,_;return{c(){t=b("div"),r=P(l),c=R(),f=b("br"),s=R(),e=b("br"),C=R(),v=b("button"),v.textContent=S,this.h()},l(i){t=y(i,"DIV",{class:!0});var o=T(t);r=A(o,l),o.forEach(n),c=I(i),f=y(i,"BR",{}),s=I(i),e=y(i,"BR",{}),C=I(i),v=y(i,"BUTTON",{class:!0,"data-svelte-h":!0}),z(v)!=="svelte-hd9vso"&&(v.textContent=S),this.h()},h(){x(t,"class","svelte-5rm7ui"),x(v,"class","svelte-5rm7ui")},m(i,o){p(i,t,o),O(t,r),p(i,c,o),p(i,f,o),p(i,s,o),p(i,e,o),p(i,C,o),p(i,v,o),h||(_=N(v,"click",m[5]),h=!0)},p(i,o){o&1&&l!==(l=i[0].name+"")&&U(r,l)},d(i){i&&(n(t),n(c),n(f),n(s),n(e),n(C),n(v)),h=!1,_()}}}function W(m){let t,l,r,c,f,s,e,C,v,S,h,_="Login",i,o,B,a,d;return{c(){t=b("input"),l=R(),r=b("br"),c=b("br"),f=R(),s=b("input"),e=R(),C=b("br"),v=b("br"),S=R(),h=b("button"),h.textContent=_,i=R(),o=b("br"),B=b("br"),this.h()},l(u){t=y(u,"INPUT",{type:!0,placeholder:!0,class:!0}),l=I(u),r=y(u,"BR",{}),c=y(u,"BR",{}),f=I(u),s=y(u,"INPUT",{type:!0,placeholder:!0,class:!0}),e=I(u),C=y(u,"BR",{}),v=y(u,"BR",{}),S=I(u),h=y(u,"BUTTON",{class:!0,"data-svelte-h":!0}),z(h)!=="svelte-nja564"&&(h.textContent=_),i=I(u),o=y(u,"BR",{}),B=y(u,"BR",{}),this.h()},h(){x(t,"type","text"),x(t,"placeholder","Felhasználónév"),x(t,"class","svelte-5rm7ui"),x(s,"type","password"),x(s,"placeholder","Jelszó"),x(s,"class","svelte-5rm7ui"),x(h,"class","svelte-5rm7ui")},m(u,k){p(u,t,k),E(t,m[1]),p(u,l,k),p(u,r,k),p(u,c,k),p(u,f,k),p(u,s,k),E(s,m[2]),p(u,e,k),p(u,C,k),p(u,v,k),p(u,S,k),p(u,h,k),p(u,i,k),p(u,o,k),p(u,B,k),a||(d=[N(t,"input",m[6]),N(s,"input",m[7]),N(h,"click",m[4])],a=!0)},p(u,k){k&2&&t.value!==u[1]&&E(t,u[1]),k&4&&s.value!==u[2]&&E(s,u[2])},d(u){u&&(n(t),n(l),n(r),n(c),n(f),n(s),n(e),n(C),n(v),n(S),n(h),n(i),n(o),n(B)),a=!1,H(d)}}}function X(m){let t,l,r,c="SOB Intranet",f,s,e,C=m[0].msg+"",v;function S(a,d){return a[3]?J:G}let h=S(m),_=h(m);function i(a,d){return a[3]?a[0].err?K:Q:W}let o=i(m),B=o(m);return{c(){t=b("div"),_.c(),l=R(),r=b("h1"),r.textContent=c,f=R(),B.c(),s=R(),e=b("span"),v=P(C),this.h()},l(a){t=y(a,"DIV",{class:!0});var d=T(t);_.l(d),d.forEach(n),l=I(a),r=y(a,"H1",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-j6uv1b"&&(r.textContent=c),f=I(a),B.l(a),s=I(a),e=y(a,"SPAN",{class:!0});var u=T(e);v=A(u,C),u.forEach(n),this.h()},h(){x(t,"class","menu svelte-5rm7ui"),x(r,"class","svelte-5rm7ui"),x(e,"class","svelte-5rm7ui")},m(a,d){p(a,t,d),_.m(t,null),p(a,l,d),p(a,r,d),p(a,f,d),B.m(a,d),p(a,s,d),p(a,e,d),O(e,v)},p(a,[d]){h!==(h=S(a))&&(_.d(1),_=h(a),_&&(_.c(),_.m(t,null))),o===(o=i(a))&&B?B.p(a,d):(B.d(1),B=o(a),B&&(B.c(),B.m(s.parentNode,s))),d&1&&C!==(C=a[0].msg+"")&&U(v,C)},i:w,o:w,d(a){a&&(n(t),n(l),n(r),n(f),n(s),n(e)),_.d(),B.d(a)}}}function Y(m,t,l){let r;var c=L,f,s;const e={un:"-",name:"...",err:null,msg:""};D(async()=>{l(0,e.un=localStorage.getItem("un")||"",e);try{const _=await j.post(c,e.un);l(0,e.un=_.data.un,e),l(0,e.name=_.data.name,e)}catch(_){l(0,e.err=_,e)}});function C(_){try{const i=j.post(c+"login.php",{un:f,pw:q(s)}).then(o=>{l(0,e.un=o.data.un,e),e.un==null&&(l(0,e.msg="Hibás felhasználónév vagy jelszó!",e),setInterval(()=>l(0,e.msg="",e),1e3)),l(0,e.name=o.data.name,e),localStorage.setItem("un",e.un)})}catch(i){l(0,e.err=i,e)}}function v(_){try{const i=j.post(c+"logout.php",e.un).then(o=>{l(0,e.un="",e),l(0,e.name="...",e),localStorage.removeItem("un")})}catch(i){l(0,e.err=i,e)}}function S(){f=this.value,l(1,f)}function h(){s=this.value,l(2,s)}return m.$$.update=()=>{m.$$.dirty&1&&l(3,r=e.un&&e.name)},[e,f,s,r,C,v,S,h]}class ut extends M{constructor(t){super(),V(this,t,Y,X,g,{})}}export{ut as component,st as universal};
