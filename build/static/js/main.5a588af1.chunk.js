(this["webpackJsonpfuture-group.ru-20200910"]=this["webpackJsonpfuture-group.ru-20200910"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/noUserPhoto.ad3cf281.webp"},28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),c=a.n(n),r=a(7),l=a.n(r),s=(a(33),a(3)),i=a(4),o=a(10),m=function(e){return g(e).length},u=function(e){return e.contactsList.contactsPerPage},d=function(e){return e.contactsList.searchFilter},E=function(e){return e.contactsList.showFrom},p=function(e){return e.contactsList.sortBy},f=function(e){return e.contactsList.sortForward},g=Object(o.a)([function(e){return e.contactsList.list},d],(function(e,t){return t&&(e=function(e,t){var a=new RegExp(t,"igm");return e.filter((function e(t){for(var n in t)if(t.hasOwnProperty(n)&&("object"===typeof t[n]?e(t[n]):a.test(t[n])))return!0;return!1}))}(e,t)),0===e.length&&(e=["\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442."]),e})),v=Object(o.a)([g,p,f],(function(e,t,a){return function(e,t,a){var n;return n=a?function(e,a){return e[t]>a[t]}:function(e,a){return e[t]<a[t]},e.sort(n)}(e,t,a).slice()})),h=Object(o.a)([v,E,u],(function(e,t,a){return t>e.length-1&&(t=e.length-1),a<5&&(a=5),a>50&&(a=50),e.slice(t,t+a)})),b=function(e){var t=e.contactsList,a=t.isFetching,n=t.fetchingSuccess;return a?[]:n?h(e):["\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."]},N="contactsList/FETCHING_LIST",y="contactsList/INSERT_BEGIN",O="contactsList/REQUEST_LIST",F="contactsList/SEARCH_FILTER",w="contactsList/SHOW_FROM",j="contactsList/SORT_BY",P="contactsList/SORT_FORWARD",S=function(e){return{type:w,payload:e}},L=a(24);var C={setContactsPerPage:e=>t=>{t({type:"contactsList/CONTACTS_PER_PAGE",payload:e})},requestList:e=>t=>{t({type:N}),L.get("http://www.filltext.com/?rows=".concat(e,"&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"),{headers:{"Access-Control-Allow-Origin":"*"}}).then(e=>{var a;200===e.status?(t((a=e.data,{type:O,payload:a})),t({type:"contactsList/FETCHING_SUCCESS"})):t({type:"contactsList/FETCHING_FAILED"})})},setSearchFilter:e=>t=>{t({type:F,payload:e}),t(S(0))}},x=Object(i.b)((function(e){return{contactsPerPage:u(e),searchFilter:d(e)}}),C)((function(e){var t=Object(n.useState)(e.searchFilter),a=Object(s.a)(t,2),r=a[0],l=a[1],i=function(t){t.preventDefault();var a=t.target.name,n="number"===t.target.type?+t.target.value:t.target.value;e[a](n)},o=function(t){var a=+t.target.dataset.listsize;e.requestList(a)};return c.a.createElement("header",null,c.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"),c.a.createElement("div",{className:"settings row"},c.a.createElement("div",{className:"settings-requestList col s6 row"},c.a.createElement("button",{className:"btn waves-effect waves-light col s11 row",onClick:o,"data-listsize":"30"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0430\u043b\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"),c.a.createElement("button",{className:"btn waves-effect waves-light col  s11 row",onClick:o,"data-listsize":"1000"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432")),c.a.createElement("form",{className:"settings-Form col s6 "},c.a.createElement("div",{className:"input-field row"},c.a.createElement("input",{className:"col s2",type:"number",min:"5",max:"50",id:"setContactsPerPage",name:"setContactsPerPage",pattern:"\\d*",onChange:i,value:e.contactsPerPage}),c.a.createElement("label",{htmlFor:"setContactsPerPage",className:"active"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435")))),c.a.createElement("form",{className:"searchForm row valign-wrapper"},c.a.createElement("div",{className:"input-field col s12 m7"},c.a.createElement("i",{className:"material-icons prefix"},"search"),c.a.createElement("input",{className:"",type:"text",id:"searchFilter",name:"searchFilter",onChange:function(e){l(e.target.value)},value:r}),c.a.createElement("label",{htmlFor:"searchFilter",className:"active"},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043f\u0438\u0441\u043a\u0443")),c.a.createElement("div",{className:"row col s12 m5"},c.a.createElement("button",{className:"btn col s6 m5",name:"setSearchFilter",onClick:i,value:r},c.a.createElement("i",{className:"material-icons left"},"search"),"\u041d\u0430\u0439\u0442\u0438"),c.a.createElement("button",{className:"btn  col s6 m5 offset-m1",name:"setSearchFilter",onClick:function(e){i(e),l("")},value:""},c.a.createElement("i",{className:"material-icons left red-text"},"clear"),"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a"))))})),T=a(25),k=a.n(T),_=function(e){var t=e.contact,a=void 0===t?null:t;return a&&c.a.createElement("div",{className:"section row"},c.a.createElement("div",{className:"col s12 m10 l8 offset-m1 offset-l2"},c.a.createElement("h4",{className:"header"},a.firstName," ",a.lastName),c.a.createElement("div",{className:"card horizontal "},c.a.createElement("div",{className:"card-image col s4"},c.a.createElement("img",{className:"responsive-img",src:k.a})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Summary"),c.a.createElement("p",null,c.a.createElement("strong",null,"id: ")," ",a.id),c.a.createElement("p",null,c.a.createElement("strong",null,"First name: ")," ",a.firstName),c.a.createElement("p",null,c.a.createElement("strong",null,"Last name: ")," ",a.lastName),c.a.createElement("p",null,c.a.createElement("strong",null,"email: ")," ",a.email),c.a.createElement("p",null,c.a.createElement("strong",null,"phone: ")," ",a.phone),c.a.createElement("span",{className:"card-title"},"Address"),c.a.createElement("p",null,c.a.createElement("strong",null,"Street: ")," ",a.address.streetAddress),c.a.createElement("p",null,c.a.createElement("strong",null,"City:")," ",a.address.city),c.a.createElement("p",null,c.a.createElement("strong",null,"State")," ",a.address.state),c.a.createElement("p",null,c.a.createElement("strong",null,"Zip:")," ",a.address.zip)),c.a.createElement("div",{className:"card-action"},c.a.createElement("span",{className:"card-title"},"Description"),c.a.createElement("p",null,a.description))))))},I=function(e){var t=e.size,a=e.color,n=void 0===a?"blue":a;return c.a.createElement("div",{className:"section center-align"},c.a.createElement("div",{className:"preloader-wrapper ".concat(t," active ")},c.a.createElement("div",{className:"spinner-layer spinner-".concat(n,"-only")},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"})))))},R=function(e){var t=Math.ceil(e.itemsTotal/e.itemsPerPage),a=new Array(e.pagesPerPortion).fill(1),r=Object(n.useState)(e.startPage||0),l=Object(s.a)(r,2),i=l[0],o=l[1],m=Object(n.useState)(Math.floor(i/e.pagesPerPortion)),u=Object(s.a)(m,2),d=u[0],E=u[1];Object(n.useEffect)((function(){o(0),E(0),p(0)}),[e.itemsTotal,e.itemsPerPage]);var p=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=function(e){return e=parseInt(e),isNaN(e)&&(e=i),e};switch(a){case"next":a=i+n;break;case"prev":a=i-n;break;case"last":a=t-n;break;case"first":a=0;break;default:a=c(a)}a>t-1?a=t-1:a<0&&(a=0),a!==i&&(e.getPage(a),o(a),E(Math.floor(a/e.pagesPerPortion)))};return c.a.createElement("div",{className:"row"},c.a.createElement("ul",{className:"pagination",onClick:function(e){var t=e.target.closest("li");t&&!t.classList.contains("disabled")&&p(t.dataset.number)}},c.a.createElement("li",{className:i<1?"disabled":void 0,"data-number":"first"},c.a.createElement("a",{href:"#!"}," ",c.a.createElement("i",{className:"material-icons "},"skip_previous")," ")),c.a.createElement("li",{className:i<1?"disabled":void 0,"data-number":"prev"},c.a.createElement("a",{href:"#!"}," ",c.a.createElement("i",{className:"material-icons"},"chevron_left")," ")),a.map((function(a,n){var r=n+d*e.pagesPerPortion;return r>t-1?null:c.a.createElement("li",{key:n,"data-number":r,className:i===r?"active":void 0},c.a.createElement("a",{href:"#!"},r+1))})),c.a.createElement("li",{className:"disabled"},c.a.createElement("a",{href:"#!"}," / ",t," ")),c.a.createElement("li",{className:i>=t-1?"disabled":void 0,"data-number":"next"},c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"material-icons "},"chevron_right"))),c.a.createElement("li",{className:i>=t-1?"disabled":void 0,"data-number":"last"},c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"material-icons "},"skip_next")))))},A={setSortBy:e=>t=>{t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return{type:j,payload:e}}(e))},toggleSortForward:()=>e=>{e({type:P})},setShowFrom:e=>t=>{t(S(e))}},B=Object(i.b)((function(e){return{contactsList:b(e),sortBy:p(e),sortForward:f(e),itemToShow:E(e),contactsPerPage:u(e),itemsTotal:m(e)}}),A)((function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){l(null)}),[e]);var i=function(t){l(null);var a=t.target.closest("tr"),n=a?Array.from(a.classList):[];if(n.includes("tableHeadersRow")){var c=t.target.closest("th").dataset.sortby;c&&c!==e.sortBy?e.setSortBy(c):e.toggleSortForward()}n.includes("tableRow")&&l(parseInt(t.target.closest("tr").dataset.index))};return function(){if(0===e.contactsList.length)return c.a.createElement(I,{size:"big",color:"green"});if(1===e.contactsList.length&&"object"!==typeof e.contactsList[0])return e.contactsList[0];var t=c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"material-icons right"},"sort_by_alpha"),c.a.createElement("i",{className:"material-icons ".concat(e.sortForward&&"inverted")},"sort"));return c.a.createElement(c.a.Fragment,null,c.a.createElement(R,{startPage:0,pagesPerPortion:5,getPage:function(t){return e.setShowFrom(t*e.contactsPerPage)},itemsPerPage:e.contactsPerPage,itemsTotal:e.itemsTotal}),c.a.createElement("table",{className:"highlight striped responsive-table",onClick:i},c.a.createElement("thead",null,c.a.createElement("tr",{className:"tableHeadersRow"},["id","firstName","lastName","email","phone"].map((function(a,n){return c.a.createElement("th",{key:n,"data-sortby":a},c.a.createElement("div",{className:"valign-wrapper cursor-pointer"},a," ",a===e.sortBy&&t))})))),c.a.createElement("tbody",null,e.contactsList.map((function(e,t){return c.a.createElement("tr",{className:"tableRow",key:t,"data-index":t},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.firstName),c.a.createElement("td",null,e.lastName),c.a.createElement("td",null,e.email),c.a.createElement("td",null,e.phone))})))),null!==r&&c.a.createElement(_,{contact:e.contactsList[r]}))}()})),H=a(9),z=a(1),G={id:"",firstName:"",lastName:"",email:"",phone:"",address:{streetAddress:"",city:"",state:"",zip:""},description:""},D={insertBegin:e=>t=>{t({type:y,payload:e})}},U=Object(i.b)((function(e){return{}}),D)((function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(G),o=Object(s.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)(!0),E=Object(s.a)(d,2),p=E[0],f=E[1];Object(n.useEffect)((function(){f(g())}),[m]);var g=function(e){return!(e=e||["id","firstName","lastName","email","phone"]).every((function(e){return""!==m[e]}))},v=function(e){var t=e.target.name,a=e.target.value;u(Object(z.a)(Object(z.a)({},m),{},Object(H.a)({},t,a)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"addUserContact"},c.a.createElement("button",{className:" btn teal absolute btn-collapse",onClick:function(){return l(!r)}},c.a.createElement("i",{className:"large material-icons"},"add"))),r&&c.a.createElement("form",{className:"addUser-Form ",onSubmit:function(t){t.preventDefault(),e.insertBegin(m),u(G)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12 "},c.a.createElement("input",{id:"contactId",name:"id",pattern:"\\d+",onChange:v,value:m.id}),c.a.createElement("label",{htmlFor:"contactId",className:"active"},"id")),c.a.createElement("div",{className:"input-field col s12 m6"},c.a.createElement("input",{type:"text",id:"contactFirstName",name:"firstName",onChange:v,value:m.firstName}),c.a.createElement("label",{htmlFor:"contactFirstName",className:"active"},"First name")),c.a.createElement("div",{className:"input-field col s12 m6"},c.a.createElement("input",{type:"text",id:"contactLastName",name:"lastName",onChange:v,value:m.lastName}),c.a.createElement("label",{htmlFor:"contactLastName",className:"active"},"Last name")),c.a.createElement("div",{className:"input-field col s12 m6 "},c.a.createElement("input",{type:"email",id:"contactEmail",name:"email",onChange:v,value:m.email}),c.a.createElement("label",{htmlFor:"contactEmail",className:"active"},"email")),c.a.createElement("div",{className:"input-field col s12 m6"},c.a.createElement("input",{type:"tel",id:"contactPhone",name:"phone",onChange:v,value:m.phone}),c.a.createElement("label",{htmlFor:"contactPhone",className:"active"},"phone")),c.a.createElement("button",{className:"btn col s4 offset-s8",disabled:p},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),c.a.createElement("div",{className:"divider"})))})),M=function(e){return c.a.createElement("main",{className:"section relative"},c.a.createElement(U,null),c.a.createElement(B,null))};var W=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement("div",{className:"divider"}),c.a.createElement(M,null),c.a.createElement("footer",{className:"footer"}))},q=a(5),$=a(26),J=a(27),Q={contactsPerPage:5,showFrom:0,fetchingSuccess:!0,isFetching:!1,list:[],searchFilter:"",sortBy:"",sortForward:!0},Y=Object(q.c)({contactsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"contactsList/CONTACTS_PER_PAGE":return Object(z.a)(Object(z.a)({},e),{},{contactsPerPage:t.payload});case"contactsList/FETCHING_FAILED":return Object(z.a)(Object(z.a)({},e),{},{fetchingSuccess:!1,isFetching:!1});case N:return Object(z.a)(Object(z.a)({},e),{},{fetchingSuccess:!1,isFetching:!0});case"contactsList/FETCHING_SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{fetchingSuccess:!0,isFetching:!1});case y:return Object(z.a)(Object(z.a)({},e),{},{list:[t.payload].concat(Object(J.a)(e.list))});case O:return Object(z.a)(Object(z.a)({},e),{},{list:t.payload});case F:return t.payload=t.payload.trim().replace(/[.*+?^${}()|[\]\\]/gm,"\\$&"),Object(z.a)(Object(z.a)({},e),{},{searchFilter:t.payload});case w:return Object(z.a)(Object(z.a)({},e),{},{showFrom:t.payload});case j:return Object(z.a)(Object(z.a)({},e),{},{sortBy:t.payload,sortForward:!0});case P:return Object(z.a)(Object(z.a)({},e),{},{sortForward:!e.sortForward});default:return e}}}),Z=Object(q.d)(Y,Object(q.a)($.a));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:Z},c.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.5a588af1.chunk.js.map