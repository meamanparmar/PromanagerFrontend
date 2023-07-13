"use strict";(self.webpackChunkkanban_board=self.webpackChunkkanban_board||[]).push([[97],{9097:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n=r(8214),a=r(5861),s=r(885),o=r(95),c=r(5646),i=r(1030),l=r(5453),d=r(8820),u=r(6355),m=r(9434),h=r(2791),x=r(3504),b=r(6871),f=r(7009),p=r(184),g=function(e){var t=e.task,r=e.tables,g=e.id,v=(0,m.v9)((function(e){return e.board})).board,j=(0,m.v9)((function(e){return e.user})),y=(0,h.useState)(!1),w=(0,s.Z)(y,2),k=w[0],Z=w[1],N=(0,h.useState)(),C=(0,s.Z)(N,2),T=C[0],F=C[1],S=(0,b.s0)(),E=(0,m.I0)(),P=(0,b.UO)(),A=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),r=v.tasks.filter((function(e){return e.id!==t.id})),e.prev=2,e.next=5,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/boards/").concat(P.bid),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+j.token},body:JSON.stringify(r)});case 5:return a=e.sent,e.next=8,a.json();case 8:if(s=e.sent,a.ok){e.next=11;break}throw new Error(s.message);case 11:E(c.h.updateCurrentBoardTasks(r)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),F("Could not delete task. Please try again later!");case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),a=r.findIndex((function(e){return e===t.taskTable})),E(c.h.moveBoardItemHandler({id:t.id,table:r[a+1]})),e.prev=3,e.next=6,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/boards/").concat(P.bid),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+j.token},body:JSON.stringify({id:t.id,table:r[a+1]})});case 6:return s=e.sent,e.next=9,s.json();case 9:if(o=e.sent,s.ok){e.next=12;break}throw new Error(o.message);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),F("Could not update task. Please try again later!");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),a=r.findIndex((function(e){return e===t.taskTable})),E(c.h.moveBoardItemHandler({id:t.id,table:r[a-1]})),e.prev=3,e.next=6,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/boards/").concat(P.bid),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+j.token},body:JSON.stringify({id:t.id,table:r[a-1]})});case 6:return s=e.sent,e.next=9,s.json();case 9:if(o=e.sent,s.ok){e.next=12;break}throw new Error(o.message);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),F("Could not update task. Please try again later!");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{error:T}),(0,p.jsxs)("div",{className:"rounded-lg bg-white mx-3 mt-5 py-2 shadow-lg",children:[(0,p.jsxs)("div",{className:"flex justify-between items-center",children:["Low"===t.taskPriority&&(0,p.jsx)("p",{className:"bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md text-center ml-2 w-1/2",children:"Low Priority"}),"Med"===t.taskPriority&&(0,p.jsx)("p",{className:"bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-md text-center ml-2 w-1/2",children:"Med Priority"}),"High"===t.taskPriority&&(0,p.jsx)("p",{className:"bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md text-center ml-2 w-1/2",children:"High Priority"}),(0,p.jsxs)("div",{className:"flex justify-end",children:["Backlog"!==t.taskTable&&(0,p.jsx)(l.Z,{onClick:O,className:"border rounded-full h-8 w-8 flex justify-center items-center mx-2 hover:bg-fuchsia-500 hover:text-white",children:(0,p.jsx)(u.RZx,{})}),"Complete"!==t.taskTable&&(0,p.jsx)(l.Z,{onClick:B,className:"border rounded-full h-8 w-8 flex justify-center items-center mx-2 hover:bg-pink-500 hover:text-white",children:(0,p.jsx)(u.anP,{})})]})]}),(0,p.jsx)("p",{className:"ml-2 mt-2 font-normal text-lg",children:t.taskName}),(0,p.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,p.jsx)("img",{className:"mx-2 self-end h-8 w-8",style:{borderRadius:"50%"},src:"".concat(t.img),alt:"person","data-for":g.toString(),"data-tip":!0}),(0,p.jsx)(f.Z,{id:g.toString(),textColor:"#FFFFFF",backgroundColor:"rgb(132 204 22)",place:"bottom",effect:"solid",children:t.taskOwnerName}),v.owner===j.user.id&&(0,p.jsx)(x.rU,{to:"/boards/".concat(v.id,"/").concat(t.id),onClick:function(){Z(!0)},className:"border rounded-full h-8 w-8 flex justify-center items-center mx-2 hover:bg-red-600 hover:text-white",children:(0,p.jsx)(d.oHP,{})})]})]}),(0,p.jsx)(o.Z,{show:k,closeHandler:function(){Z(!1),S("/boards/".concat(v.id))},modalTitle:"Delete task",content:(0,p.jsx)("p",{children:"Are you sure you want to delete this task"}),modalFunc:A,buttonText:"Delete"})]})},v=["linear-gradient(to right, #A500FE, #FE0096, #FE003A) 30","linear-gradient(to right, #FEC100, #FEDF00, #FAFE00) 30","linear-gradient(to right, #0000CD, #7B68EE, #87CEFA) 30","linear-gradient(to right, #08FE00, #64FE00, #B1FE00) 30"],j=function(e){var t=e.tables,r=(0,m.v9)((function(e){return e.board})).board;return(0,p.jsx)(p.Fragment,{children:t.map((function(e,n){return(0,p.jsxs)("div",{className:"bg-slate-100 py-5 mt-5 mb-5 rounded-b-lg shadow-lg border-t-2",style:{borderImage:v[n]},children:[(0,p.jsx)("h1",{className:"font-semibold text-lg mx-3",children:e}),r.tasks.map((function(r){return e===r.taskTable&&(0,p.jsx)(g,{id:r.id,task:r,tables:t},r.id)}))]},n)}))})},y=r(3503),w=r(3098),k=r(6856),Z=r(6036),N=r(9126),C=function(){var e=(0,m.v9)((function(e){return e.board})).board,t=(0,m.v9)((function(e){return e.user})),r=(0,h.useState)(!1),l=(0,s.Z)(r,2),d=l[0],u=l[1],f=(0,h.useState)(""),g=(0,s.Z)(f,2),v=g[0],j=g[1],C=(0,h.useState)(""),T=(0,s.Z)(C,2),F=T[0],S=T[1],E=(0,h.useState)(""),P=(0,s.Z)(E,2),A=P[0],B=P[1],O=(0,h.useState)(!1),H=(0,s.Z)(O,2),I=H[0],U=H[1],D=(0,h.useState)(!1),z=(0,s.Z)(D,2),_=z[0],M=z[1],L=(0,h.useState)(),V=(0,s.Z)(L,2),J=V[0],R=V[1],K=(0,b.s0)(),q=(0,b.UO)().bid,G=(0,m.I0)(),W=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/").concat(q),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},body:JSON.stringify({title:v,membersNumber:A,usageArea:F})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error(a.message);case 10:G(c.h.setCurrentBoard(a.board)),K("/boards/".concat(q)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),R("Something went wrong while signing you up. Please try again later!");case 17:M(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{error:J}),_&&(0,p.jsx)(w.Z,{asOverlay:!0}),(0,p.jsx)(x.rU,{to:"/boards/".concat(q,"/update"),className:"border border-green-500 p-2 rounded-md font-medium hover:bg-green-500 hover:text-white",onClick:function(){R(),j(e.title),B(e.membersNumber),S(e.usageArea),u(!0),K("/boards/".concat(q,"/update"))},children:"UPDATE"}),(0,p.jsx)(o.Z,{show:d,closeHandler:function(){u(!1),j(e.title),B(e.membersNumber),S(e.usageArea),U(!1),K("/boards/".concat(q))},modalTitle:"Update Board",formError:0===v.length||F.length<5,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.Z,{label:"Kanban Title",icon:(0,p.jsx)(k.IsZ,{}),iconClass:"top-2.5 left-2.5",className:"mb-1 border border-slate-700 rounded-3xl p-1 pr-4 pl-12 focus:border-blue-600",onChange:function(e){j(e.target.value),U(!0)},value:v,style:{width:"21rem"},type:"text",placeholder:"Title",error:I&&0===v.length,errorText:"Can not be empty!"}),(0,p.jsx)(y.Z,{label:"Kanban Members Number",icon:(0,p.jsx)(Z.gGC,{}),iconClass:"top-2.5 left-2.5",className:"mb-1 border border-slate-700 rounded-3xl p-1 pr-4 pl-12 focus:border-blue-600",onChange:function(e){B(e.target.value),U(!0)},value:A,style:{width:"21rem"},type:"number",min:"0",max:"20",placeholder:"Number of Members",error:I&&0===A.length,errorText:"Can not be empty!"}),(0,p.jsx)(y.Z,{label:"Usage Area",icon:(0,p.jsx)(N.HZe,{}),iconClass:"top-2.5 left-2.5",className:"mb-1 border border-slate-700 rounded-3xl p-1 pr-4 pl-12 focus:border-blue-600",onChange:function(e){S(e.target.value),U(!0)},value:F,style:{width:"21rem"},type:"text",placeholder:"What will you use it for? eg: Personal",error:I&&F.length<5,errorText:"Can not be less than 5 characters!"})]}),modalFunc:W,buttonText:"Update"})]})},T=function(e){var t=e.title,r=(0,m.v9)((function(e){return e.user})).user,o=(0,m.v9)((function(e){return e.board})),l=(0,h.useState)([]),d=(0,s.Z)(l,2),u=d[0],x=d[1],f=(0,h.useState)([]),g=(0,s.Z)(f,2),v=g[0],j=g[1],y=(0,h.useState)([]),k=(0,s.Z)(y,2),Z=k[0],N=k[1],C=(0,h.useState)(!1),T=(0,s.Z)(C,2),F=T[0],S=T[1],E=(0,h.useState)(),P=(0,s.Z)(E,2),A=P[0],B=P[1],O=(0,m.I0)(),H=(0,b.s0)();(0,h.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a,s,o,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=[],s=[],o=0;case 4:if(!(o<r.memberBoards.length)){e.next=24;break}return e.prev=5,e.next=8,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/").concat(r.memberBoards[o]));case 8:return c=e.sent,e.next=11,c.json();case 11:if(i=e.sent,c.ok){e.next=14;break}throw new Error(i.message);case 14:t.push(i.board),a.push(i.board.title),s.push(i.board.id),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(5);case 21:o++,e.next=4;break;case 24:x(t),j(a),N(s);case 27:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[r.memberBoards,o]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{error:A}),F&&(0,p.jsx)(w.Z,{asOverlay:!0}),(0,p.jsx)("select",{onChange:function(e){var t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.prev=1,t.next=4,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/").concat(Z[v.findIndex((function(t){return t===e.target.value}))]));case 4:return r=t.sent,t.next=7,r.json();case 7:if(a=t.sent,r.ok){t.next=10;break}throw new Error(a.message);case 10:O(c.h.setCurrentBoard(a.board)),H("/boards/".concat(a.board.id)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),B("Someting went wrong while fetchig board datas. Please try again later!");case 17:S(!1);case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}();t()},className:"border border-rose-900 rounded-md font-medium text-rose-600 px-5 text-lg",value:t,children:u.map((function(e){return(0,p.jsx)("option",{value:e.title,children:e.title},e.id)}))})]})},F=r(2810),S=["Low","Med","High"],E=function(e){var t=e.tables,r=e.user,l=(0,h.useState)(!1),u=(0,s.Z)(l,2),f=u[0],g=u[1],v=(0,h.useState)(""),j=(0,s.Z)(v,2),k=j[0],Z=j[1],C=(0,h.useState)(t[0]),T=(0,s.Z)(C,2),E=T[0],P=T[1],A=(0,h.useState)(S[0]),B=(0,s.Z)(A,2),O=B[0],H=B[1],I=(0,h.useState)(null),U=(0,s.Z)(I,2),D=U[0],z=U[1],_=(0,h.useState)(null),M=(0,s.Z)(_,2),L=M[0],V=M[1],J=(0,h.useState)(!1),R=(0,s.Z)(J,2),K=R[0],q=R[1],G=(0,h.useState)(!0),W=(0,s.Z)(G,2),Y=W[0],Q=W[1],X=(0,h.useState)(!1),$=(0,s.Z)(X,2),ee=$[0],te=$[1],re=(0,h.useState)(),ne=(0,s.Z)(re,2),ae=ne[0],se=ne[1],oe=(0,b.s0)(),ce=(0,b.UO)().bid,ie=(0,m.v9)((function(e){return e.board})).board,le=(0,m.v9)((function(e){return e.user})).token,de=(0,m.I0)(),ue=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/users/").concat(t.target.value));case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,r.ok){e.next=9;break}throw new Error(a.message);case 9:z(a.user),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D){e.next=2;break}return e.abrupt("return",se("You need to select a member!"));case 2:return te(!0),t={taskName:k,taskTable:E,taskPriority:O,taskOwner:D[0].id,taskOwnerName:D[0].username,img:D[0].image,id:(0,F.Z)()},e.prev=4,e.next=7,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/boards/").concat(ce,"/add-task"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+le},body:JSON.stringify(t)});case 7:return r=e.sent,e.next=10,r.json();case 10:if(a=e.sent,r.ok){e.next=13;break}throw new Error(a.message);case 13:de(c.h.addCurrentBoardTasks(t)),oe("/boards/".concat(ce)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),se("Something went wrong while adding new task. Please try again later!");case 20:te(!1),z(null);case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/boards/").concat(ie.id,"/members"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=9;break}throw new Error(a.message);case 9:0!==a.members.length?V(a.members):V([r]),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){if(0===k.length)return Q(!0);Q(!1)}),[k]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{error:ae}),ee&&(0,p.jsx)(w.Z,{asOverlay:!0}),(0,p.jsx)(x.rU,{to:"/boards/".concat(ce,"/add-task"),children:(0,p.jsxs)("div",{onClick:function(){g(!0),he(),oe("/boards/".concat(ce,"/add-task"))},className:"flex justify-center items-center px-5 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 ml-5",role:"button",children:[(0,p.jsx)("p",{className:"m-2",children:"Add New Task"}),(0,p.jsx)(d.Lfi,{})]})}),(0,p.jsx)(o.Z,{show:f,closeHandler:function(){g(!1),q(!1),Z(""),Q(!0),oe("/boards/".concat(ce))},modalTitle:"Add Task",formError:Y,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.Z,{label:"Task Name",icon:(0,p.jsx)(N.y9N,{}),iconClass:"top-2.5 left-2.5",className:"mb-1 border border-slate-700 rounded-3xl p-1 pr-4 pl-12 focus:border-blue-600",onChange:function(e){Z(e.target.value),q(!0)},value:k,style:{width:"21rem"},type:"text",placeholder:"Task",error:K&&0===k.length,errorText:"Can not be empty!"}),(0,p.jsxs)("div",{className:"flex flex-col justify-center items-start",children:[(0,p.jsx)("p",{className:"mb-2 font-semibold",children:"Select Table"}),(0,p.jsx)("select",{onChange:function(e){P(e.target.value)},className:"border border-slate-300 rounded-lg font-medium text-sky-600 px-5 text-lg",children:t.map((function(e){return(0,p.jsx)("option",{value:e,children:e},e)}))}),(0,p.jsx)("p",{className:"mb-2 mt-4 font-semibold",children:"Select Priority"}),(0,p.jsx)("select",{onChange:function(e){H(e.target.value)},className:"border border-slate-300 rounded-lg font-medium text-sky-600 px-5 text-lg mb-4",children:S.map((function(e){return(0,p.jsx)("option",{value:e,children:e},e)}))}),L&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:"mb-2 font-semibold",children:"Assign Member"}),(0,p.jsxs)("select",{onChange:ue,className:"border border-slate-300 rounded-lg font-medium text-sky-600 px-5 text-lg mb-4",children:[(0,p.jsx)("option",{value:"select member",children:"Select member"},1),L&&L.map((function(e){return(0,p.jsx)("option",{value:e.username,children:e.username},e.id)}))]})]})]})]}),modalFunc:me,buttonText:"Add"})]})},P=r(2950),A=["Backlog","In Progress","Review","Complete"],B=function(){var e=(0,m.v9)((function(e){return e.board})).board,t=(0,m.v9)((function(e){return e.user})),r=(0,h.useState)(!1),l=(0,s.Z)(r,2),d=l[0],u=l[1],f=(0,h.useState)(),g=(0,s.Z)(f,2),v=g[0],y=g[1],k=(0,h.useState)(!1),Z=(0,s.Z)(k,2),N=Z[0],F=Z[1],S=(0,m.I0)(),B=(0,b.UO)(),O=(0,b.s0)(),H=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var a,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/").concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},body:null});case 3:return a=r.sent,r.next=6,a.json();case 6:if(s=r.sent,a.ok){r.next=9;break}throw new Error(s.message);case 9:S(P.h.updateUserBoards(e.id)),O("/all-boards"),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),y("Could not delete board. Please try again later!");case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(){return r.apply(this,arguments)}}();return(0,h.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,fetch("".concat("https://projectmanager-s36d.onrender.com/api","/boards/").concat(B.bid));case 4:return t=e.sent,e.next=7,t.json();case 7:if(r=e.sent,t.ok){e.next=10;break}throw new Error(r.message);case 10:S(c.h.setCurrentBoard(r.board)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y("Someting went wrong while fetchig board datas. Please try again later!");case 16:u(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[B.bid,S]),(0,p.jsxs)("div",{className:"margin",children:[(0,p.jsx)(i.Z,{error:v}),d&&(0,p.jsx)(w.Z,{asOverlay:!0}),e&&(0,p.jsxs)("div",{className:"mt-5",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{className:"text-center font-semibold text-2xl text-blue-600",children:e.title}),(0,p.jsx)("h2",{className:"text-center font-medium text-sm text-blue-400",children:e.usageArea})]}),(0,p.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,p.jsx)(T,{title:e.title}),(0,p.jsx)("div",{className:"flex justify-center",children:e.owner===t.user.id&&(0,p.jsx)(E,{user:t.user,tables:A})}),e.owner===t.user.id&&(0,p.jsxs)("div",{children:[e.owner===t.user.id&&(0,p.jsx)(C,{}),e.owner===t.user.id&&(0,p.jsx)(x.rU,{to:"/boards/".concat(e.id,"/delete"),onClick:function(){F(!0)},className:"border border-red-600 p-2 rounded-md font-medium hover:bg-red-600 hover:text-white ml-5",children:"DELETE"})]})]}),(0,p.jsx)(o.Z,{show:N,closeHandler:function(){F(!1),O("/boards/".concat(e.id))},modalTitle:"Delete Board",content:(0,p.jsx)("p",{children:"Are you sure you want to delete this board"}),modalFunc:H,buttonText:"Delete"}),(0,p.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5",children:(0,p.jsx)(j,{tables:A})})]})]})}},5453:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.type,r=e.className,a=e.onClick,s=e.disabled,o=e.style,c=e.children;return(0,n.jsx)("button",{type:t,className:r,onClick:a,style:o||null,disabled:s||null,children:c})}},1030:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(885),a=r(7175),s=r(535),o=r(2791),c=r(184),i=function(e){var t=e.header,r=e.text,i=(0,o.useState)(!0),l=(0,n.Z)(i,2),d=l[0],u=l[1];function m(){u(!1)}return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.u,{appear:!0,show:d,as:o.Fragment,children:(0,c.jsxs)(s.V,{as:"div",className:"relative z-10",onClose:m,children:[(0,c.jsx)(a.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,c.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,c.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,c.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,c.jsx)(a.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,c.jsxs)(s.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,c.jsx)(s.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:t}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("p",{className:"text-sm text-gray-500",children:r})}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:m,children:"OK"})})]})})})})]})})})},l=function(e){var t=e.error;return(0,c.jsx)(c.Fragment,{children:t&&(0,c.jsx)(i,{header:"Error!",text:t})})}},3503:function(e,t,r){r.d(t,{Z:function(){return o}});var n="Input_input__q9IRk",a="Input_icon__pvUOM",s=r(184),o=function(e){var t=e.label,r=e.icon,o=e.className,c=e.onChange,i=e.value,l=e.iconClass,d=e.style,u=e.type,m=e.min,h=e.max,x=e.placeholder,b=e.error,f=e.errorText;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)("div",{className:"mb-2 mt-4 font-semibold",children:(0,s.jsx)("label",{children:t})}),(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("div",{className:"".concat(a," ").concat(l),children:r}),(0,s.jsx)("input",{className:o,onChange:c,value:i,style:d,type:u,min:m,max:h,placeholder:x}),b&&(0,s.jsx)("p",{className:"text-sm text-red-600 ml-3",children:f})]})]})}},95:function(e,t,r){var n=r(7175),a=r(535),s=r(2791),o=r(5453),c=r(184);t.Z=function(e){var t=e.show,r=e.closeHandler,i=e.formError,l=e.content,d=e.modalTitle,u=e.modalFunc,m=e.buttonText;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.u,{appear:!0,show:t,as:s.Fragment,children:(0,c.jsxs)(a.V,{as:"div",className:"relative z-10",onClose:r,children:[(0,c.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,c.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,c.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,c.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,c.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,c.jsxs)(a.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,c.jsx)(a.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-blue-600",children:d}),(0,c.jsx)("div",{className:"mt-4",children:l}),(0,c.jsxs)("div",{className:"mt-2",children:[m&&(0,c.jsx)(o.Z,{type:"button",className:"inline-flex justify-center rounded-md border border-transparent  px-4 py-2 mr-5 text-sm font-medium ".concat(i?"bg-slate-300":"bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"),onClick:function(){u(),r()},disabled:i,children:m}),(0,c.jsx)(o.Z,{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:r,children:"Close"})]})]})})})})]})})})}}}]);
//# sourceMappingURL=97.cf4c37f2.chunk.js.map