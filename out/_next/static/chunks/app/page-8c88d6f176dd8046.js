(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5427:function(e,a,t){Promise.resolve().then(t.bind(t,1587))},1587:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var c=t(7437),o=t(6063),n=t.n(o),r=t(2265),s=t(6648),l=()=>(0,c.jsx)("header",{className:n().header,children:(0,c.jsxs)("div",{className:"display: flex",children:[(0,c.jsx)(s.default,{className:n().logo,src:"/image.png",alt:"logo",width:200,height:36}),(0,c.jsx)("div",{className:n().sub,children:"calculator"})]})}),i=()=>(0,c.jsx)("footer",{className:n().footer,children:"Copyright \xa92024 MATHRIX developers All Rights Reserved."}),u=e=>{let{label:a,onClick:t}=e;return(0,c.jsx)("button",{className:n().button,onClick:t,children:a})},_=t(8472),d=()=>{let[e,a]=(0,r.useState)(""),[t,o]=(0,r.useState)(""),s=async()=>{let a=e.replace(/÷/g,"/").replace(/×/g,"*").replace(/%/g,"*0.01").replace(/mod/g,"%").replace(/\^/g,"**");try{let e=await _.Z.post("/api",{formular:a});o(e.data.body)}catch(e){console.error("Error during calculation:",e),o("Error")}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)("div",{className:n().container}),(0,c.jsxs)("div",{className:n().button_container,children:[(0,c.jsx)("input",{className:n().calc_input,value:String(e),readOnly:!0}),(0,c.jsx)("input",{className:n().calc_output,value:String(t)+"=",readOnly:!0}),["AC","C","mod","►","aᵡ","(",")","%","7","8","9","\xf7","4","5","6","\xd7","1","2","3","-","=","0",".","+"].map((t,n)=>(0,c.jsx)(u,{label:t,onClick:()=>{switch(t){case"AC":a(""),o("");break;case"C":a("");break;case"aᵡ":a(e+"^");break;case"►":a(e.slice(0,-1));break;case"=":s();break;default:a(e+t)}}},n))]}),(0,c.jsx)(i,{})]})}},6063:function(e){e.exports={container:"Home_container__d256j",header:"Home_header__y2QYS",footer:"Home_footer__yFiaX",sub:"Home_sub__3Mk3_",logo:"Home_logo__IOQAX",button:"Home_button__G93Ef",input:"Home_input__OGaGo",button_container:"Home_button_container__w9cGw",calc_input:"Home_calc_input__8TdSh",calc_output:"Home_calc_output__eU5J1"}}},function(e){e.O(0,[357,224,971,23,744],function(){return e(e.s=5427)}),_N_E=e.O()}]);