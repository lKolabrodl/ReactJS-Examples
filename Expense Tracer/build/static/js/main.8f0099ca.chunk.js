(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Expense tracer"))},o=n(2),m=n(7),i=n(4),s=function(e,t){switch(t.type){case"DELETE_ITEM":return Object(i.a)({},e,{transaction:e.transaction.filter((function(e){return e.id!==t.payload}))});case"ADD_ITEM":return Object(i.a)({},e,{transaction:[t.payload].concat(Object(m.a)(e.transaction))});default:return e}},E={transaction:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},d=Object(a.createContext)(E),f=function(e){e.children;var t=Object(a.useReducer)(s,E),n=Object(o.a)(t,2);n[0],n[1]},p=function(){var e=Object(a.useContext)(d).transaction.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your balance"),r.a.createElement("h1",null,e,"$"))},b=function(){var e=Object(a.useContext)(d).transaction.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+",t,"$")),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},n,"$")))};var v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteItem,l=t.amount>0?"+":"-",c=t.amount>0?"plus":"minus",u=Math.abs(t.amount);return r.a.createElement("div",null,r.a.createElement("li",{className:c},t.text,r.a.createElement("span",null,l,u,"$"),r.a.createElement("button",{onClick:function(){n(t.id)},className:"delete-btn"},"x")))},x=function(){var e=Object(a.useContext)(d).transaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(0),u=Object(o.a)(c,2),m=u[0],i=u[1],s=Object(a.useContext)(d).addItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:Number(m)};s(t),l(""),i(0)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{value:n,onChange:function(e){l(e.target.value)},type:"text",placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{value:m,onChange:function(e){i(e.target.value)},type:"number",placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))},j=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(h,null)))};n(13);c.a.render(r.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f0099ca.chunk.js.map