(this["webpackJsonphook-ts-demo"]=this["webpackJsonphook-ts-demo"]||[]).push([[9],{285:function(e,t,a){},286:function(e,t,a){},289:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return je}));a(283);var s=a(294),i=a(118),c=a(9),n=a(0),r=a(29),j="CHANGE_SELECT_COMMENT_ID",o="CHANGE_SELECT_NAV_KEY",l="CHANGE_SKIN",d="OPEN_MODAL",p="CLOSE_MODAL",u="CHANGE_MODAL_TYPE",m={id:"",selectNavKey:"message",mode:"primary",modalVisible:!1,modalOptions:{type:"",title:""}};function h(e,t){switch(t.type){case j:return Object(r.a)(Object(r.a)({},e),{},{id:t.data});case o:return Object(r.a)(Object(r.a)({},e),{},{selectNavKey:t.data});case l:return Object(r.a)(Object(r.a)({},e),{},{mode:t.data});case d:return Object(r.a)(Object(r.a)({},e),{},{modalVisible:!0});case p:return Object(r.a)(Object(r.a)({},e),{},{modalVisible:!1});case u:return Object(r.a)(Object(r.a)({},e),{},{modalOptions:t.data});default:throw new Error}}a(285),a(137);var b=a(152),x=(a(126),a(125)),O=(a(138),a(149)),v=(a(156),a(177)),f=a(306),g=a(303),y=a(307),N=a(308),w=a(309),C=(a(286),[{id:1,key:"message",icon:Object(c.jsx)(f.a,{style:{fontSize:"1.2rem"}}),name:"\u6d88\u606f",messageCount:1},{id:2,key:"friends",icon:Object(c.jsx)(g.a,{style:{fontSize:"1.2rem"}}),name:"\u670b\u53cb",messageCount:0},{id:3,key:"favorites",icon:Object(c.jsx)(y.a,{style:{fontSize:"1.2rem"}}),name:"\u6536\u85cf",messageCount:0},{id:4,key:"archived",icon:Object(c.jsx)(N.a,{style:{fontSize:"1.2rem"}}),name:"\u5b58\u6863",messageCount:0},{id:5,key:"switch_skin",icon:Object(c.jsx)(w.a,{style:{fontSize:"1.2rem"}}),name:"\u4e3b\u9898\u5207\u6362",messageCount:0}]),k=Object(c.jsxs)(v.a,{children:[[{key:"editProfile",name:"\u7f16\u8f91\u8d44\u6599"},{key:"profile",name:"\u4e2a\u4eba\u4fe1\u606f"},{key:"settings",name:"\u8bbe\u7f6e"}].map((function(e){return Object(c.jsx)(v.a.Item,{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"javascript:void(0);",children:e.name})},e.key)})),Object(c.jsx)(v.a.Divider,{}),Object(c.jsx)(v.a.Item,{danger:!0,children:Object(c.jsx)("span",{children:"\u9000\u51fa\u767b\u9646"})})]}),S=function(){var e=Object(n.useContext)(je),t=e.state,a=e.dispatch;return Object(c.jsx)("div",{className:"chat-layout-navigation",children:Object(c.jsx)("div",{className:"nav-group",children:Object(c.jsxs)("ul",{className:"nav-group-list",children:[Object(c.jsx)("li",{className:"nav-group-list-item logo",children:Object(c.jsx)("a",{href:"javascript:void(0);",children:Object(c.jsx)("img",{src:"http://touxiangkong.com/uploads/allimg/20203301301/2020/3/YNVjqi.jpg",alt:""})})}),C.map((function(e){return Object(c.jsx)("li",{className:4===e.id?"nav-group-list-item brackets":"nav-group-list-item",children:Object(c.jsx)(x.a,{placement:"right",title:e.name,children:Object(c.jsx)("a",{href:"javascript:void(0);",className:t.selectNavKey===e.key?"active":"",onClick:function(){return function(e){if("switch_skin"===e)a&&a({type:l,data:"primary"===t.mode?"dark":"primary"});else{if(t.selectNavKey===e)return;a&&(a({type:o,data:e}),a({type:j,data:""}))}}(e.key)},children:Object(c.jsx)(O.a,{dot:!0,count:e.messageCount,children:e.icon})})})},e.id)})),Object(c.jsx)("li",{className:"nav-group-list-item logo",children:Object(c.jsx)("a",{href:"javascript:void(0);",children:Object(c.jsx)(b.a,{overlay:k,trigger:["click"],placement:"topLeft",children:Object(c.jsx)("img",{src:"https://api.sunweihu.com/api/sjtx/api.php",alt:""})})})})]})})})},E=(a(150),a(147)),I=(a(119),a(117)),_=(a(123),a(124)),z=(a(113),a(112)),D=a(310),A=a(311),T=[{id:"1",name:"\u5f20\u4e09",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u6628\u5929",messageCount:12,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"2",name:"\u674e\u56db",latestNews:"\u5468\u672b\u4e00\u8d77\u51fa\u53bb\u73a9\u554a",time:"11:05 AM",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"3",name:"\u738b\u5c0f\u4e8c",latestNews:"Hello!",time:"03:42 PM",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"4",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"5",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"6",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"7",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"8",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"9",name:"\u845b\u4e8c\u86cb",latestNews:"\u4f60\u662f\u50bb\u903c\u5417\uff1f\u554a\uff1f",time:"\u524d\u5929",messageCount:0,avatar:"https://api.sunweihu.com/api/sjtx/api.php"}],L=function(){var e=Object(n.useContext)(je),t=e.state,a=e.dispatch;return Object(c.jsxs)("div",{className:"sidebar sidebar-message",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("span",{children:"\u6d88\u606f"}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)(z.a,{icon:Object(c.jsx)(D.a,{}),onClick:function(){a&&(a({type:d}),a({type:u,data:{type:"add_group",title:"\u65b0\u589e\u5206\u7ec4"}}))}}),Object(c.jsx)(z.a,{icon:Object(c.jsx)(A.a,{})})]})]}),Object(c.jsx)("div",{className:"search-form",children:Object(c.jsx)(_.a,{placeholder:"\u641c\u7d22\u804a\u5929",size:"large"})}),Object(c.jsx)("div",{className:"sidebar-body",tabIndex:2,children:Object(c.jsx)(E.b,{itemLayout:"horizontal",dataSource:T,renderItem:function(e){return Object(c.jsxs)(E.b.Item,{className:t.id===e.id?"active":"",onClick:function(){var t;t=e.id,a&&a({type:j,data:t})},children:[Object(c.jsx)(E.b.Item.Meta,{avatar:Object(c.jsx)(O.a,{count:e.messageCount,children:Object(c.jsx)(I.a,{src:e.avatar+"?".concat(e.id)})}),title:e.name,description:e.latestNews}),Object(c.jsx)("span",{className:"text-muted",children:e.time})]})}})})]})},M=[{id:"1",name:"\u5f20\u4e09",label:"Web Designer",avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"2",name:"\u674e\u56db",label:"Web Designer",avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"3",name:"\u738b\u5c0f\u4e8c",label:"Web Designer",avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"4",name:"\u845b\u4e8c\u86cb",label:"Web Designer",avatar:"https://api.sunweihu.com/api/sjtx/api.php"},{id:"5",name:"\u845b\u4e8c\u86cb",label:"Web Designer",avatar:"https://api.sunweihu.com/api/sjtx/api.php"}],P=function(){var e=Object(n.useContext)(je).dispatch;return Object(c.jsxs)("div",{className:"sidebar sidebar-friends",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("span",{children:"\u670b\u53cb"}),Object(c.jsx)("div",{className:"btn-group",children:Object(c.jsx)(z.a,{icon:Object(c.jsx)(D.a,{})})})]}),Object(c.jsx)("div",{className:"search-form",children:Object(c.jsx)(_.a,{placeholder:"\u641c\u7d22\u804a\u5929",size:"large"})}),Object(c.jsx)("div",{className:"sidebar-body",tabIndex:2,children:Object(c.jsx)(E.b,{itemLayout:"horizontal",dataSource:M,renderItem:function(t){return Object(c.jsx)(E.b.Item,{onClick:function(){var a;a=t.id,e&&(e({type:j,data:a}),e({type:o,data:"message"}))},children:Object(c.jsx)(E.b.Item.Meta,{avatar:Object(c.jsx)(I.a,{src:t.avatar+"?".concat(t.id)}),title:t.name,description:t.label})})}})})]})},K=function(){return Object(c.jsx)("div",{className:"sidebar sidebar-friends",children:Object(c.jsx)("header",{children:Object(c.jsx)("span",{children:"\u6536\u85cf"})})})},V=(a(157),a(162)),W=a(295),G=a(287),H=a.n(G),Y=a(288),J=(a(289),a(290)),R=a(291),q=a(292),F=a(68),X=a(312),B=a(313),Q=a(179),U=a(314);J.a.use(R.a),J.a.use(q.a);var Z=Object(c.jsx)(F.a,{style:{fontSize:24},spin:!0}),$=_.a.TextArea,ee=null,te={status:0,message:"success",data:[{id:"0",name:"\u7cd6\u7cd6",content:"\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u4f60\u771f\u9017\uff01\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u4f60\u771f\u9017\uff01\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u4f60\u771f\u9017\uff01\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u4f60\u771f\u9017\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"mine",date:"\u4e0a\u5348 9:20"},{id:"1",name:"\u561f\u561f",content:"\u5929\u738b\u76d6\u5730\u864e\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"other",date:"\u4e0a\u5348 9:32"},{id:"2",name:"\u561f\u561f",content:"\u5b9d\u5854\u9547\u6cb3\u5996\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"other",date:"\u4e0a\u5348 9:33"},{id:"3",name:"\u561f\u561f",content:"\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u6211\u771f\u9017\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"other",date:"\u4e0a\u5348 9:35"},{id:"4",name:"\u7cd6\u7cd6",content:"\u5bd2\u6c5f\u5b64\u5f71\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"mine",date:"\u4e0a\u5348 9:40"}]},ae=[{id:"99",name:"\u7cd6\u7cd6",content:"\u5929\u4e0a\u6ca1\u6709\u4e4c\u4e91\u76d6\uff01",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"mine",date:"\u4e0a\u5348 8:20"},{id:"88",name:"\u561f\u561f",content:"\u4e3a\u4ec0\u4e48\u4f60\u53c8\u6389\u4e0b\u6765\uff1f",avatar:"https://api.sunweihu.com/api/sjtx/api.php",type:"other",date:"\u4e0a\u5348 8:32"}],se=function(e,t,a){return new Promise((function(t,a){setTimeout((function(){Number(e)%2===0?t({status:0,message:"success",data:[]}):t({status:0,message:"success",data:ae})}),600)}))},ie=function(){var e=Object(n.useContext)(je).state,t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],r=a[1],j=Object(n.useState)([]),o=Object(i.a)(j,2),l=o[0],d=o[1];Object(n.useEffect)((function(){d((function(e){return[]})),0,function(){var t=Object(Y.a)(H.a.mark((function t(){var a,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.id,new Promise((function(e,t){setTimeout((function(){e(te)}),600)}));case 2:a=t.sent,s=a.data,d((function(e){return s})),ee.refresh(),u();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e.id]),Object(n.useEffect)((function(){ee=new J.a(".chat-main .chat-main-body .chat-main-body-wrapper",{scrollX:!1,scrollY:!0,click:!0,pullDownRefresh:!0,mouseWheel:{speed:10}});var t=function(){var t=Object(Y.a)(H.a.mark((function t(){var a,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 1,r((function(e){return!0})),t.next=4,se(e.id);case 4:a=t.sent,s=a.data,d((function(e){return[].concat(Object(W.a)(s),Object(W.a)(e))})),r((function(e){return!1})),p();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return ee.on("pullingDown",t),function(){ee.stop(),ee.destroy()}}),[e.id]);var p=function(){ee.finishPullDown(),setTimeout((function(){ee.refresh()}),800)},u=function(){ee.scrollTo(0,ee.maxScrollY)};return Object(c.jsxs)("div",{className:"chat-main",children:[Object(c.jsxs)("div",{className:"chat-main-header",children:[Object(c.jsxs)("div",{className:"chat-main-header-user",children:[Object(c.jsx)(I.a,{size:"large",src:"https://api.sunweihu.com/api/sjtx/api.php"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u561f\u561f"}),Object(c.jsx)("span",{children:"\u6b63\u5728\u8f93\u5165..."})]})]}),Object(c.jsxs)("div",{className:"chat-main-header-action",children:[Object(c.jsx)(z.a,{className:"chat-main-header-action-btn",icon:Object(c.jsx)(X.a,{})}),Object(c.jsx)(z.a,{className:"chat-main-header-action-btn",icon:Object(c.jsx)(B.a,{})}),Object(c.jsx)(z.a,{className:"chat-main-header-action-btn",icon:Object(c.jsx)(Q.a,{})})]})]}),Object(c.jsx)("div",{className:"chat-main-body",children:Object(c.jsx)("div",{className:"chat-main-body-wrapper",children:Object(c.jsxs)("div",{className:"messages",children:[s?Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)(V.a,{indicator:Z,spinning:!0})}):null,l.map((function(e){return Object(c.jsxs)("div",{className:["message-item","mine"===e.type?"outgoing-message":""].join(" "),children:[Object(c.jsxs)("div",{className:"message-item-header",children:[Object(c.jsx)(I.a,{size:"large",src:e.avatar+"?".concat(e.id)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("div",{className:"time",children:e.date})]})]}),Object(c.jsx)("div",{className:"message-item-content",children:e.content})]},e.id)}))]})})}),Object(c.jsxs)("div",{className:"chat-main-footer",children:[Object(c.jsx)("div",{className:"chat-main-footer-input",children:Object(c.jsx)($,{rows:3})}),Object(c.jsxs)("div",{className:"chat-main-footer-btns",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(z.a,{icon:Object(c.jsx)(U.a,{})}),Object(c.jsx)(z.a,{icon:Object(c.jsx)(A.a,{})})]}),Object(c.jsx)(z.a,{type:"primary",onClick:function(){console.log(123)},children:"\u53d1\u9001"})]})]})]})},ce=(a(167),a(176)),ne=_.a.TextArea,re=function(){var e=ce.a.useForm(),t=Object(i.a)(e,1)[0],a=Object(n.useContext)(je).dispatch,s=Object(n.useState)(!1),r=Object(i.a)(s,2),j=r[0],o=r[1];return Object(c.jsxs)(ce.a,{layout:"vertical",form:t,children:[Object(c.jsx)(ce.a.Item,{label:"\u5206\u7ec4\u540d\u79f0",children:Object(c.jsx)(_.a,{})}),Object(c.jsx)(ce.a.Item,{label:"\u5206\u7ec4\u6210\u5458",children:Object(c.jsx)(I.a.Group,{maxCount:5,size:"large",maxStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},children:[1,2,3].map((function(e){return Object(c.jsx)(I.a,{src:"https://api.sunweihu.com/api/sjtx/api.php?"+e},e)}))})}),Object(c.jsx)(ce.a.Item,{label:"\u63cf\u8ff0",children:Object(c.jsx)(ne,{rows:3})}),Object(c.jsx)(ce.a.Item,{className:"al-right",children:Object(c.jsx)(z.a,{loading:j,type:"primary",onClick:function(){o((function(e){return!0})),setTimeout((function(){o((function(e){return!1})),a&&a({type:p})}),1e3)},children:"\u521b\u5efa\u5206\u7ec4"})})]})},je=Object(n.createContext)({state:m});t.default=function(){var e=Object(n.useReducer)(h,m),t=Object(i.a)(e,2),a=t[0],r=t[1],j=function(){switch(a.modalOptions.type){case"add_group":return Object(c.jsx)(re,{});default:return null}};return Object(c.jsx)("div",{className:["chat",a.mode].join(" "),children:Object(c.jsxs)(je.Provider,{value:{state:a,dispatch:r},children:[Object(c.jsxs)("div",{className:"chat-layout",children:[Object(c.jsx)(S,{}),Object(c.jsxs)("div",{className:"chat-layout-content",children:[Object(c.jsx)("div",{className:"sidebar-group",children:function(){switch(a.selectNavKey){case"message":return Object(c.jsx)(L,{});case"friends":return Object(c.jsx)(P,{});case"favorites":return Object(c.jsx)(K,{});default:return Object(c.jsx)(L,{})}}()}),a.id?Object(c.jsx)(ie,{}):null]})]}),Object(c.jsx)(s.a,{visible:a.modalVisible,title:a.modalOptions.title,onCancel:function(){r({type:p})},footer:null,children:Object(c.jsx)(j,{})})]})})}}}]);
//# sourceMappingURL=9.b4db56df.chunk.js.map