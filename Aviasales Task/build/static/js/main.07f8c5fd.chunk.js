(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Logo.0c089234.svg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),l=(n(14),n(2)),s=n(1),u=(n(15),n(8)),o=n.n(u),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:o.a,alt:"logo"}))},m=n(5),p=(n(16),function(e){var t=e.sortTickets,n=Object(a.useState)([{value:"\u0412\u0441\u0435",id:"all",check:!0},{value:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",id:"none",check:!0},{value:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",id:1,check:!0},{value:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:2,check:!0},{value:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:3,check:!0}]),r=Object(s.a)(n,2),i=r[0],u=r[1];return Object(a.useEffect)((function(){t(i)}),[i]),c.a.createElement("div",{className:"filter__tickets"},c.a.createElement("h5",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),c.a.createElement("ul",null,i.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",onChange:function(){return function(e,t){if("all"===e)if(t){var n=i.map((function(e){return Object(m.a)({},e,{check:!1})}));u(n)}else{var a=i.map((function(e){return Object(m.a)({},e,{check:!0})}));u(a)}else{var c=i.findIndex((function(t){return t.id===e})),r=i[c];r.check=!i[c].check;var s=i.slice(0,c),o=i.slice(c+1),f=[].concat(Object(l.a)(s),[r],Object(l.a)(o));u(f)}}(e.id,e.check)},checked:e.check}),c.a.createElement("span",null,e.value)))}))))}),d=(n(17),function(e){var t=e.fastOrLowTabs,n=Object(a.useState)("low prices"),r=Object(s.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){t(i)}),[i]),c.a.createElement("div",{className:"tabs"},[{value:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",id:"low prices"},{value:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",id:"fast"}].map((function(e){return c.a.createElement("button",{className:i===e.id?"tabs active":"tabs",key:e.id,onClick:function(){return t=e.id,void(i!==t&&l(t));var t}},e.value)})))});n(18);var h=function(e){var t=e.ticket;return c.a.createElement("li",{className:"tiket__item"},c.a.createElement("div",{className:"tiket__item__price"},c.a.createElement("span",null,t.price.toLocaleString()," \u0420"),c.a.createElement("img",{src:"".concat("http://pics.avs.io/99/36/").concat(t.carrier,".png"),alt:t.carrier})),t.segments.map((function(e,t){return c.a.createElement("div",{key:t,className:"tiket__flight__info"},c.a.createElement("div",{className:"tiket__flight__info__place"},c.a.createElement("span",null,e.origin,"-",e.destination),c.a.createElement("time",null,function(e,t){var n=e.slice(0,-1).split("T"),a=Object(s.a)(n,2)[1].split(":"),c=Object(s.a)(a,2),r=c[0],i=c[1],l=60*Number(r)+Number(i)+t,u=l/60>=24?Math.floor(l/60-24):Math.floor(l/60),o=l%60,f=u<10?"0".concat(u):u,m=o<10?"0".concat(o):o;return"".concat(r,":").concat(i," - ").concat(f,":").concat(m)}(e.date,e.duration))),c.a.createElement("div",{className:"tiket__flight__info__way"},c.a.createElement("span",null,"\u0412 \u043f\u0443\u0442\u0438"),c.a.createElement("time",null,function(e){var t=Math.round(e/60),n=e%60;return n<10&&(n="0".concat(n)),"".concat(t,"\u0447 : ").concat(n,"\u043c")}(e.duration))),c.a.createElement("div",{className:"tiket__flight__info__transfer"},c.a.createElement("span",null,e.stops.length>0?"".concat(e.stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a").concat(1===e.stops.length?"a":"\u0438"):"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),c.a.createElement("p",null,e.stops.join(","))))})))},v=function(e){var t=e.tickets;return c.a.createElement("div",{className:"list__tickets"},c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement(h,{ticket:e,key:t})}))))},E=function(){return c.a.createElement("div",{className:"error"},c.a.createElement("span",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"),c.a.createElement("button",{onClick:function(){return window.location.reload()}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"))},b=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),u=Object(s.a)(i,2),o=u[0],m=u[1],h=Object(a.useState)("low prices"),b=Object(s.a)(h,2),k=(b[0],b[1]),_=Object(a.useState)(!1),g=Object(s.a)(_,2),j=g[0],O=g[1];Object(a.useEffect)((function(){n&&fetch("https://front-test.beta.aviasales.ru/search").then((function(e){return e.json()})).then((function(e){var t=e.searchId;return fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(t))})).then((function(e){return e.json()})).then((function(e){var t=e.tickets;r(t.slice(0,8).sort((function(e,t){return e.price>t.price?1:-1}))),m(t.slice(0,8).sort((function(e,t){return e.price>t.price?1:-1})))})).catch((function(e){return O(!0)}))}),[]);return c.a.createElement("div",{className:"main__container"},c.a.createElement("div",{className:"logo"},c.a.createElement(f,null)),c.a.createElement(c.a.StrictMode,null,c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement(p,{sortTickets:function(e){if(e){var t=e.filter((function(e){return!0===e.check})),a=[];t.forEach((function(e){if("all"!==e.id){if("none"===e.id){var t=n.filter((function(e){return e.segments.some((function(e){return 0===e.stops.length}))}));a.push.apply(a,Object(l.a)(t))}if(1===e.id){var c=n.filter((function(e){return e.segments.some((function(e){return 1===e.stops.length}))}));a.push.apply(a,Object(l.a)(c))}if(2===e.id){var r=n.filter((function(e){return e.segments.some((function(e){return 2===e.stops.length}))}));a.push.apply(a,Object(l.a)(r))}if(3===e.id){var i=n.filter((function(e){return e.segments.some((function(e){return 3===e.stops.length}))}));a.push.apply(a,Object(l.a)(i))}}else a.push.apply(a,Object(l.a)(n))})),m(a)}}})),c.a.createElement("div",{className:"right"},c.a.createElement(d,{fastOrLowTabs:function(e){if("low prices"===e){var t=o;t.sort((function(e,t){return e.price>t.price?1:-1})),m(t),k(e)}if("fast"===e){var n=Object(l.a)(o).sort((function(e,t){var n=e.segments.reduce((function(e,t){return t.duration+e}),0),a=t.segments.reduce((function(e,t){return t.duration+e}),0);return n>a?1:n<a?-1:0}));m(n),k(e)}}}),c.a.createElement(v,{tickets:o}),j&&c.a.createElement(E,null)))))};i.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.07f8c5fd.chunk.js.map