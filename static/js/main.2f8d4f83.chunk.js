(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(28),r=c.n(s),i=c(9),l=c(15),j=c(5),o=c(14),b=c.n(o),d=c(18),u=c(30),h=c(20),O=(c(46),c(37),h.a.initializeApp({apiKey:"AIzaSyCt3qm1hdVs0Z3kp5UJr0TWYLQkmrnpQtU",authDomain:"board-9ea9c.firebaseapp.com",projectId:"board-9ea9c",storageBucket:"board-9ea9c.appspot.com",messagingSenderId:"502435796985",appId:"1:502435796985:web:a0ddab10b807723c348f28"}),h.a,h.a.firestore()),m=h.a.auth(),x=c(1);var p=function(e){var t=e.search,c=(e.setSearch,Object(a.useState)([])),n=Object(i.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)((function(){O.collection("names").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));r(t)}))}),[]);var l=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this member?")){e.next=4;break}return e.next=4,O.doc("names/".concat(s.id)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:s.filter((function(e){return""==t||e.Name.toString().toLowerCase().includes(t.toString().toLowerCase())||e.Mobile.toString().includes(t.toString())?e:void 0})).map((function(e){return Object(x.jsxs)("ul",{className:"user-table-info",children:[Object(x.jsx)("li",{children:e.Name}),Object(x.jsx)("li",{children:e.Mobile}),Object(x.jsx)("li",{children:e.Email}),Object(x.jsx)("li",{children:e.createdAt}),Object(x.jsx)("li",{children:Object(x.jsx)("button",{className:"del-btn",onClick:l,children:"Delete"})})]},e.id)}))})},f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"nav",children:Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",placeholder:"Search name or mobile",className:"search",onChange:function(e){n(e.target.value)}})})}),Object(x.jsxs)("div",{className:"user-table",children:[Object(x.jsxs)("ul",{className:"user-table-menu",children:[Object(x.jsx)("li",{children:"Name"}),Object(x.jsx)("li",{children:"Mobile"}),Object(x.jsx)("li",{children:"E-mail"}),Object(x.jsx)("li",{children:"Register"}),Object(x.jsx)("li",{})]}),Object(x.jsx)(p,{search:c,setSearch:n})]})]})},g=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"logout-form",children:[Object(x.jsx)("span",{children:"Welcome"}),Object(x.jsx)("span",{onClick:function(){return m.signOut()},className:"logout-btn",children:"Log out"})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("ul",{className:"home-category",children:Object(x.jsx)("li",{children:Object(x.jsx)("h2",{children:"Management"})})}),Object(x.jsxs)("ul",{className:"branch",children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/add",className:"add-btn",children:" Add New Member "})}),Object(x.jsx)("li",{children:Object(x.jsx)("h1",{children:"Fit Gym"})})]}),Object(x.jsx)(f,{})]})]})},v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],h=Object(a.useState)(""),p=Object(i.a)(h,2),f=p[0],g=p[1],v=(new Date).getFullYear(),N=(new Date).getMonth()+1,S=N<10?"0".concat(N):N,w=(new Date).getDate(),y=w<10?"0".concat(w):w,k=Object(j.f)(),C=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.collection("names").add({Name:c,Mobile:o,Email:f,createdAt:"".concat(v,"-").concat(S,"-").concat(y)});case 3:n(""),u(""),g(""),k.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"logout-form",children:[Object(x.jsx)("span",{children:"Welcome"}),Object(x.jsx)("span",{onClick:function(){m.signOut(),k.push("/")},className:"logout-btn",children:"Log out"})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{className:"title",children:"Management"}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"/",className:"list-btn",children:" Member List"})}),Object(x.jsxs)("ul",{className:"table",children:[Object(x.jsx)("li",{className:"category",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Place"}),Object(x.jsx)("li",{children:"Name"}),Object(x.jsx)("li",{children:"Mobile"}),Object(x.jsx)("li",{children:"E-mail"})]})}),Object(x.jsx)("li",{className:"info",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Fit Gym Seoul"}),Object(x.jsx)("li",{children:Object(x.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;n(t)},type:"text",placeholder:"Name",className:"text"})}),Object(x.jsx)("li",{children:Object(x.jsx)("input",{value:o,onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"Mobile",className:"mobile"})}),Object(x.jsx)("li",{children:Object(x.jsx)("input",{value:f,onChange:function(e){var t=e.target.value;g(t)},type:"text",placeholder:"123@example.com",className:"email"})})]})})]}),Object(x.jsx)("div",{className:"button",children:Object(x.jsx)("form",{onSubmit:C,children:Object(x.jsx)("input",{type:"submit",className:"btn",value:"Add"})})})]})]})};var N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),h=u[0],O=u[1],p=Object(a.useState)(!0),f=Object(i.a)(p,2),g=f[0],v=f[1],N=function(e){var t=e.target,c=t.name,a=t.value;"email"===c?n(a):"password"===c&&j(a)},S=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(c,l);case 5:e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(c,l);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),O(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){return v((function(e){return!e}))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"contain",children:Object(x.jsxs)("form",{className:"login-form",onSubmit:S,children:[Object(x.jsx)("h5",{children:"Username"}),Object(x.jsx)("input",{type:"email",name:"email",placeholder:"123@example.com",required:!0,value:c,className:"login-form--input",onChange:N}),Object(x.jsx)("h5",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",placeholder:"Put Your Password",required:!0,value:l,className:"login-form--input",onChange:N}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"submit",className:"authInput authSubmit",value:g?"Create Account":"Sign In"})}),h,g?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"authSwitch",children:["Have you account? ",Object(x.jsx)("span",{onClick:w,children:"Sign In"})]})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"authSwitch",children:["Don't you have account?  ",Object(x.jsx)("span",{onClick:w,children:"Create Account"})]})})]})})})};c(44);var S=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),o=r[0],b=r[1];return Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){b(!!e),n(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"content",children:Object(x.jsx)(j.c,{children:c?Object(x.jsx)(x.Fragment,{children:o?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{path:"/add",exact:!0,children:Object(x.jsx)(v,{})}),Object(x.jsx)(j.a,{path:"/",exact:!0,children:Object(x.jsx)(g,{})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.a,{path:"/",exact:!0,children:Object(x.jsx)(N,{})})})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("p",{className:"loading",children:"Loading..."})})})})})})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2f8d4f83.chunk.js.map