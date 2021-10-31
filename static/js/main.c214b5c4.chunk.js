(this.webpackJsonptip_calculator=this.webpackJsonptip_calculator||[]).push([[0],{20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,o,a,c,r,s,d,l,b,h,j,x,p,u,f,g,O,m,w,v,y,k,F,z,D=t(2),C=t.n(D),M=t(10),R=t.n(M),B=(t(20),t(6)),A=t(3),E=t(4),S=t(14),T=t(15),J=E.a.div(i||(i=Object(A.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #76D7C4;\n"]))),P=E.a.div(o||(o=Object(A.a)(["\n    height: 80vh;\n    width: 60vw;\n    background-color: white;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    -webkit-box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);\n    -moz-box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);\n    box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);\n    position: relative;\n\n\n\n    @media screen and (max-width: 1100px)\n    {\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: 100vh;\n        border-radius: 0;\n    }\n\n    @media screen and (max-width: 920px)\n    {\n        width: 100%;\n    }\n"]))),$=E.a.div(a||(a=Object(A.a)(["\n    height: 80%;\n    width: 45%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    @media screen and (max-width: 1100px)\n    {\n        width: 90%;\n        margin-top: 50px;\n    }\n"]))),_=E.a.div(c||(c=Object(A.a)(["\n    height: 90%;\n    width: 45%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #006652;\n    border-radius: 5px;\n\n    @media screen and (max-width: 1100px)\n    {\n        width: 80%;\n        margin-bottom: 50px;\n        margin-top: 30px;\n    }\n"]))),I=E.a.div(r||(r=Object(A.a)(["\n    height: 25%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n"]))),N=E.a.label(s||(s=Object(A.a)(["\n    background: #F5F5F5;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    margin-top: 5px;\n    justify-content: space-between;\n    border-radius: 3px;\n"]))),q=E.a.div(d||(d=Object(A.a)(["\n    height: 50%;\n    width: 90%;\n    margin-top: 30px;\n"]))),G=E.a.div(l||(l=Object(A.a)(["\n    height: 25%;\n    width: 90%;\n\n    @media screen and (max-width: 920px)\n    {\n        margin-top: 20px;\n    }\n"]))),H=E.a.span(b||(b=Object(A.a)(["\n    font-family: 'Roboto Mono', sans-serif;\n    color: #76D7C4;\n"]))),K=E.a.input.attrs((function(){return{type:"number",max:"2000"}}))(h||(h=Object(A.a)(["\n    border-radius: 3px;\n    border: 0;\n    padding: 10px 20px;\n    height: 40px;\n    font-size: 25px;\n    outline: none;\n    font-weight: bold;\n    text-align: right;\n    width: 50%;\n    background: #F5F5F5;\n    color: #006652;\n"]))),L=Object(E.a)(S.a)(j||(j=Object(A.a)(["\n    font-size: 25px;\n    width: 50px;\n    color: #D4D4D4;\n"]))),Q=E.a.div(x||(x=Object(A.a)(["\n    width: 100%;\n    height: 20vh;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-end;\n"]))),U=E.a.button(p||(p=Object(A.a)(["\n    background: #006652;\n    padding: 15px;\n    width: 32%; \n    flex-wrap: wrap;\n    height: 45%;\n    border: 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 3vh;\n    font-family: 'Roboto Mono', sans-serif;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover\n    {\n        color: black;\n        background-color: #03E7BA;\n    }\n"]))),V=E.a.input.attrs((function(){return{type:"number",placeholder:"Custom"}}))(u||(u=Object(A.a)(["\n    width: 32%; \n    flex-wrap: wrap;\n    height: 45%; \n    padding: 0;\n    border: 0;\n    outline: none;\n    text-align: center;\n    font-weight: bold;\n    font-size: 15px;\n    font-family: 'Roboto Mono', sans-serif;\n    border-radius: 5px;\n    background: #F5F5F5;\n"]))),W=Object(E.a)(T.a)(f||(f=Object(A.a)(["\n    font-size: 25px;\n    width: 50px;\n    color: #D4D4D4;\n"]))),X=E.a.div(g||(g=Object(A.a)(["\n    height: 35%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n\n    @media screen and (max-width: 920px)\n    {\n        margin-top: 30px;\n    }\n"]))),Y=E.a.div(O||(O=Object(A.a)(["\n    height: 45%;\n    width: 90%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),Z=E.a.div(m||(m=Object(A.a)(["\n    height: 20vh;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n"]))),nn=E.a.div(w||(w=Object(A.a)(["\n    width: 45%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center\n"]))),en=E.a.span(v||(v=Object(A.a)(["\n    font-family: 'Roboto Mono', sans-serif;\n    color: white;\n    font-size: 2.5vh;\n"]))),tn=E.a.span(y||(y=Object(A.a)(["\n    font-family: 'Roboto Mono', sans-serif;\n    color: #D4D4D4;\n    font-size: 12px;\n"]))),on=E.a.span(k||(k=Object(A.a)(["\n    font-family: 'Roboto Mono', sans-serif;\n    color: #03E7BA;\n    font-size: 2.5em;\n"]))),an=E.a.button(F||(F=Object(A.a)(["\n    background: none;\n    border: 0;\n    font-family: 'Roboto Mono', sans-serif;\n    color: #03E7BA;\n    font-size: 1.5em;\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover\n    {\n        color: white;\n    }\n"]))),cn=E.a.button(z||(z=Object(A.a)(["\n    background: #03E7BA;\n    padding: 15px;\n    width: 55%; \n    height: 45%;\n    border: 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 3vh;\n    font-family: 'Roboto Mono', sans-serif;\n    border-radius: 5px;\n    color: black;\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover\n    {\n        color: black;\n        background-color: white;\n    }\n"]))),rn=t(1),sn=function(){var n=[5,10,15,25,50].map((function(n){return Object(rn.jsxs)(U,{onClick:function(n){return s(n.target.value)},value:n,children:[n,"%"]})})),e=Object(D.useState)(""),t=Object(B.a)(e,2),i=t[0],o=t[1],a=Object(D.useState)(""),c=Object(B.a)(a,2),r=c[0],s=c[1],d=Object(D.useState)(1),l=Object(B.a)(d,2),b=l[0],h=l[1],j=function(){o(0),s(5),h(1)};return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(J,{children:Object(rn.jsxs)(P,{children:[Object(rn.jsxs)($,{children:[Object(rn.jsxs)(I,{children:[Object(rn.jsx)(H,{children:"Bill"}),Object(rn.jsxs)(N,{children:[Object(rn.jsx)(L,{}),Object(rn.jsx)(K,{onChange:function(n){return o(n.target.value)},value:i})]})]}),Object(rn.jsxs)(q,{children:[Object(rn.jsx)(H,{children:"Tip Amount"}),Object(rn.jsxs)(Q,{children:[n,Object(rn.jsx)(V,{onChange:function(n){return s(n.target.value)},value:r})]})]}),Object(rn.jsxs)(G,{children:[Object(rn.jsx)(H,{children:"Number of People"}),Object(rn.jsxs)(N,{children:[Object(rn.jsx)(W,{}),Object(rn.jsx)(K,{onChange:function(n){return h(n.target.value)},value:b})]})]})]}),Object(rn.jsxs)(_,{children:[Object(rn.jsxs)(X,{children:[Object(rn.jsxs)(Y,{children:[Object(rn.jsxs)(nn,{children:[Object(rn.jsx)(en,{children:"Tip amount"}),Object(rn.jsx)(tn,{children:"/ person"})]}),Object(rn.jsxs)(on,{children:["$",i?(i*(r/100)/(b||1)).toFixed(2):"0"]})]}),Object(rn.jsxs)(Y,{children:[Object(rn.jsxs)(nn,{children:[Object(rn.jsx)(en,{children:"Total"}),Object(rn.jsx)(tn,{children:"/ person"})]}),Object(rn.jsxs)(on,{children:["$",i?(i/(b||1)).toFixed(2):0]})]})]}),Object(rn.jsxs)(Z,{children:[Object(rn.jsx)(an,{onClick:j,children:"Reset"}),Object(rn.jsx)(cn,{onClick:j,children:"Pay"})]})]})]})})})};var dn=function(){return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(sn,{})})};R.a.render(Object(rn.jsx)(C.a.StrictMode,{children:Object(rn.jsx)(dn,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c214b5c4.chunk.js.map