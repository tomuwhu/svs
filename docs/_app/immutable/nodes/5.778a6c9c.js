/* empty css                      */import{s as z,n as O,r as A}from"../chunks/scheduler.feaddeb4.js";import{S as I,i as N,g as x,s as g,m as C,h as y,y as U,c as T,j as q,f as a,n as j,l as P,k as f,a as i,A as d,z as k,o as E,B as H}from"../chunks/index.891eafb2.js";const G=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function M(p){let n,_="Animáció példa",u,t,m,s,c,v,h,o=p[1]*10+"",r,b,S,B;return{c(){n=x("h1"),n.textContent=_,u=g(),t=x("button"),m=g(),s=x("input"),c=g(),v=x("br"),h=C("Sebesség: "),r=C(o),b=C(" pixel/ms"),this.h()},l(e){n=y(e,"H1",{"data-svelte-h":!0}),U(n)!=="svelte-a0xy13"&&(n.textContent=_),u=T(e),t=y(e,"BUTTON",{style:!0,class:!0}),q(t).forEach(a),m=T(e),s=y(e,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c=T(e),v=y(e,"BR",{}),h=j(e,"Sebesség: "),r=j(e,o),b=j(e," pixel/ms"),this.h()},h(){P(t,"left",p[0]+"px"),f(t,"class","svelte-axoooh"),f(s,"type","range"),f(s,"min",-5),f(s,"max",5),f(s,"step",.1)},m(e,l){i(e,n,l),i(e,u,l),i(e,t,l),i(e,m,l),i(e,s,l),d(s,p[1]),i(e,c,l),i(e,v,l),i(e,h,l),i(e,r,l),i(e,b,l),S||(B=[k(t,"click",p[2]),k(s,"change",p[3]),k(s,"input",p[3])],S=!0)},p(e,[l]){l&1&&P(t,"left",e[0]+"px"),l&2&&d(s,e[1]),l&2&&o!==(o=e[1]*10+"")&&E(r,o)},i:O,o:O,d(e){e&&(a(n),a(u),a(t),a(m),a(s),a(c),a(v),a(h),a(r),a(b)),S=!1,A(B)}}}function R(p,n,_){var u=0,t=0;setInterval(()=>_(0,u+=u>=-20?t:1),10);const m=()=>_(1,t=t==0?.3:0);function s(){t=H(this.value),_(1,t)}return[u,t,m,s]}class J extends I{constructor(n){super(),N(this,n,R,M,z,{})}}export{J as component,G as universal};
