/* empty css                      */import{s as C,n as h,r as S}from"../chunks/scheduler.feaddeb4.js";import{S as j,i as I,g as f,s as g,h as c,y as P,c as y,j as k,f as u,l as d,k as o,a as _,A as x,z as b,B as z}from"../chunks/index.891eafb2.js";const B=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function A(i){let a,p="Animáció",n,t,r,s,m,v;return{c(){a=f("h1"),a.textContent=p,n=g(),t=f("div"),r=g(),s=f("input"),this.h()},l(e){a=c(e,"H1",{"data-svelte-h":!0}),P(a)!=="svelte-kg8eb1"&&(a.textContent=p),n=y(e),t=c(e,"DIV",{style:!0,class:!0}),k(t).forEach(u),r=y(e),s=c(e,"INPUT",{type:!0,min:!0,max:!0,step:!0}),this.h()},h(){d(t,"left",i[0]+"px"),o(t,"class","svelte-uhvit8"),o(s,"type","range"),o(s,"min",-5),o(s,"max",5),o(s,"step",.1)},m(e,l){_(e,a,l),_(e,n,l),_(e,t,l),_(e,r,l),_(e,s,l),x(s,i[1]),m||(v=[b(s,"change",i[2]),b(s,"input",i[2])],m=!0)},p(e,[l]){l&1&&d(t,"left",e[0]+"px"),l&2&&x(s,e[1])},i:h,o:h,d(e){e&&(u(a),u(n),u(t),u(r),u(s)),m=!1,S(v)}}}function O(i,a,p){var n=0,t=0;setInterval(()=>p(0,n+=n>=-20?t:1),10);function r(){t=z(this.value),p(1,t)}return[n,t,r]}class D extends j{constructor(a){super(),I(this,a,O,A,C,{})}}export{D as component,B as universal};
