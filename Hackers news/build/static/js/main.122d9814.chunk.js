(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(2),s=a(3),u=a.n(s),i=a(4),m=a(5),f=a.n(m),p="https://hacker-news.firebaseio.com/v0/",E="".concat(p,"newstories.json"),h="".concat(p,"item/"),b=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(E);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h+t,".json"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(a(39),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-eclipse"},r.a.createElement("div",null)))}),g=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){t&&d(t).then((function(e){return s(e)}))}),[t]),r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("h2",{className:"blog-post-title"},l.title),r.a.createElement("p",{className:"blog-post-meta"},"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e ",function(e){var t=Math.floor((new Date-1e3*e)/1e3),a=Math.floor(t/31536e3);return a>1?"".concat(a," \u043b\u0435\u0442"):(a=Math.floor(t/2592e3))>1?"".concat(a," \u043c\u0435\u0441\u044f\u0446\u0430"):(a=Math.floor(t/86400))>1?"".concat(a," \u0434\u043d\u0435\u0439"):(a=Math.floor(t/3600))>1?"".concat(a," \u0447\u0430\u0441\u0430"):(a=Math.floor(t/60))>1?"".concat(a," \u043c\u0438\u043d\u0443\u0442"):"".concat(Math.floor(t)," seconds")}(l.time)," \u043d\u0430\u0437\u0430\u0434",r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:l.url},l.by)))):r.a.createElement(v,null))},j=function(e){var t=e.id;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},0===t.length?r.a.createElement(v,null):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(g,{key:e,id:e})})))))},N=function(e){for(var t=e.postPerPage,a=e.totalPost,n=e.selectNumber,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"#".concat(t),className:"page-link"},e))}))))},O=(a(40),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),s=Object(o.a)(l,2),u=s[0],i=s[1],m=Object(n.useState)(20),f=Object(o.a)(m,2),p=f[0],E=(f[1],u*p),h=E-p,d=a.slice(h,E);return Object(n.useEffect)((function(){0===a.length&&b().then((function(e){return c(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{id:d}),r.a.createElement(N,{postPerPage:p,totalPost:a.length,selectNumber:function(e){i(e)}}))});l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.122d9814.chunk.js.map