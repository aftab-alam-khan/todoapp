(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(9),i=n.n(o),a=n(5),u=n(6),s=(n(14),n(0)),l=function(t){return Object(s.jsx)("li",{style:{textDecoration:t.done?"line-through":"",fontWeight:t.done?"bolder":"normal",wordWrap:"break-word"},onClick:function(){t.completed(t.id)},children:t.text})};var f=n(2),d=n.n(f),j=n(4);function b(t,e){return p.apply(this,arguments)}function p(){return(p=Object(j.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){localStorage.setItem(e,JSON.stringify(n)),t(null)}),1e3)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){var n=localStorage.getItem(e);t(n?JSON.parse(n):[])}),1e3)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return m(t)})),t.next=3,Promise.all(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=n.p+"static/media/loading.5e01ee79.gif";var g=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),f=i[0],d=i[1],j=Object(c.useState)([]),p=Object(u.a)(j,2),m=p[0],h=p[1],g=Object(c.useState)(!0),v=Object(u.a)(g,2),y=v[0],k=v[1],w=0===n.length,S=0===m.length;return Object(c.useEffect)((function(){(function(t){return O.apply(this,arguments)})(["our-item-key","delete-item-key"]).then((function(t){var e=t[0],n=t[1];d(e),h(n),k(!1)}))}),[]),function(t,e){Object(c.useEffect)((function(){b("our-item-key",t),b("delete-item-key",e)}),[t,e])}(f,m),function(t,e){Object(c.useEffect)((function(){t.length?e.length?document.title="ToDo ".concat(t.length," (").concat(e.length,")"):document.title="ToDo ".concat(t.length):document.title="ToDo"}),[t,e])}(f,m),Object(s.jsxs)("div",{className:"list",children:[Object(s.jsx)("h2",{children:"Todo List"}),Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),d([].concat(Object(a.a)(f),[n])),r("")},children:Object(s.jsxs)("div",{className:"formData",children:[Object(s.jsx)("input",{type:"text",name:"todo",placeholder:"Enter your todos",onChange:function(t){r(t.target.value)},value:n}),Object(s.jsx)("button",{disabled:w,children:"Add ToDo"})]})}),Object(s.jsx)("img",{src:x,alt:"img"}),y?Object(s.jsx)("img",{src:x,alt:"img"}):Object(s.jsx)("ul",{children:f.map((function(t,e){return Object(s.jsx)(l,{text:t,id:e,done:m.includes(e),completed:function(t){if(m.includes(e)){var n=m.filter((function(e){return e!==t}));h(Object(a.a)(n))}else h([].concat(Object(a.a)(m),[t]))}},e)}))}),Object(s.jsx)("button",{id:"delete",disabled:S,onClick:function(){var t=f.filter((function(t,e){return-1===m.indexOf(e)}));d(Object(a.a)(t)),h([])},children:"Delete"})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cb515f62.chunk.js.map