(this["webpackJsonpbeta-2"]=this["webpackJsonpbeta-2"]||[]).push([[0],{10:function(e,t,a){e.exports={ProfileMyPosts:"ProfileMyPosts_ProfileMyPosts__2nvkF",Posts:"ProfileMyPosts_Posts__3ZeYH",BlockAddPost:"ProfileMyPosts_BlockAddPost__2UvO_",Textarea:"ProfileMyPosts_Textarea__3xbwW",ProfileMyPostsBlockInfo:"ProfileMyPosts_ProfileMyPostsBlockInfo__3VRFl",ButtonAddPost:"ProfileMyPosts_ButtonAddPost__12ida"}},16:function(e,t,a){e.exports={Post:"Post_Post__1RMN-",PostInfo:"Post_PostInfo__3lYZ6",EllipsisButton:"Post_EllipsisButton__10kNR",PostContent:"Post_PostContent__1MYt7"}},22:function(e,t,a){e.exports={App:"App_App__16ZpL",Content:"App_Content__ZaMNr"}},38:function(e,t,a){e.exports={Profile:"Profile_Profile__3HF8E"}},39:function(e,t,a){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__34LEF"}},40:function(e,t,a){e.exports={Dialogs:"Dialogs_Dialogs__1HvdP"}},41:function(e,t,a){e.exports={Users:"Users_Users__2PrNQ"}},44:function(e,t,a){e.exports=a(72)},49:function(e,t,a){},7:function(e,t,a){e.exports={UserWrapper:"User_UserWrapper__22k5m",User:"User_User__2j9S5",LeftBox:"User_LeftBox__23GEv",UserAvatar:"User_UserAvatar__hcvMp",Follow:"User_Follow__1xXTA",UnFollow:"User_UnFollow__27ECc",RightBox:"User_RightBox__2gyfV",Location:"User_Location__1eYen"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),o=(a(49),a(22)),c=a.n(o),i=a(5),u=a(12),m=a(14),d=a(20),f=a(6),E="profile-page/ADD-POST",_={posts:[{id:1,message:"Post 4",likesCount:2},{id:2,message:"Post 3",likesCount:12},{id:3,message:"Post 2",likesCount:5},{id:4,message:"Post 1",likesCount:15}],changeText:""},p={users:[]},v=Object(m.b)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a={id:e.posts.length+1,message:e.changeText,likesCount:0};return Object(f.a)({},e,{posts:[a].concat(Object(d.a)(e.posts)),changeText:""});case"profile-page/CHANGE-POST-TEXT":return Object(f.a)({},e,{changeText:""!==t.postText.trim()?t.postText:""});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW-USER":return Object(f.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW-USER":return Object(f.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)({},e,{followed:!1}):e}))});case"users/SET-USERS":return Object(f.a)({},e,{users:[].concat(Object(d.a)(e.users),[t.state])});default:return e}}}),P=Object(m.c)(v);window.store=P;var g=function(e){return r.a.createElement(i.a,null,r.a.createElement(u.a,{store:P},r.a.createElement(r.a.Fragment,null,e.children)))},b=a(8),h=a.n(b),N=function(e){var t=e.disabled,a=e.onClick,n=e.title,l=e.styleButton;return r.a.createElement("button",{disabled:t,onClick:a,className:l},n||null)},U=function(){return r.a.createElement("div",{className:h.a.Header},r.a.createElement("div",{className:h.a.HeaderContainer},r.a.createElement("div",{className:h.a.Logo},r.a.createElement(i.b,{to:"/"},r.a.createElement("i",{className:"fa fa-xing"}))),r.a.createElement("div",{className:h.a.SearchPanel},r.a.createElement("div",null,r.a.createElement("input",{type:"text"}),r.a.createElement(N,null))),r.a.createElement("div",{className:h.a.InformationBlock},r.a.createElement("div",null,r.a.createElement(N,{styleButton:h.a.Bell}),r.a.createElement(N,{styleButton:h.a.Settings})))))},x=a(9),w=a.n(x),k=function(){return r.a.createElement("div",{className:w.a.Sidebar},r.a.createElement("div",{className:w.a.Nav},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/profile",activeClassName:w.a.Active},"Profile")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/dialogs",activeClassName:w.a.Active},"Dialogs")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/users",activeClassName:w.a.Active},"Users")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/settings",activeClassName:w.a.Active},"Settings"))))},y=a(1),C=a(38),B=a.n(C),A=a(39),S=a.n(A),O=function(){return r.a.createElement("div",{className:S.a.ProfileInfo},"ProfileInfo")},T=a(10),j=a.n(T),I=a(16),H=a.n(I),L=function(e){e.id;var t=e.message,a=e.likesCount;return r.a.createElement("div",{className:H.a.Post},r.a.createElement("div",{className:H.a.PostInfo},r.a.createElement("h3",null,"Alexandr Homan"),r.a.createElement("span",null,"6 day a go"),r.a.createElement(N,{styleButton:H.a.EllipsisButton})),r.a.createElement("img",{src:"https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_",alt:""}),r.a.createElement("div",{className:H.a.PostContent},r.a.createElement("p",null,t),r.a.createElement("div",null,r.a.createElement("span",null,"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ",r.a.createElement("b",null,a)))))},R=Object(u.b)((function(e){return{posts:e.profileReducer.posts,changeText:e.profileReducer.changeText}}),(function(e){return{addNewPostAC:function(){return e({type:E})},changeTextAC:function(t){return e(function(e){return{type:"profile-page/CHANGE-POST-TEXT",postText:e}}(t))}}}))((function(e){var t=e.posts,a=e.changeText,n=e.addNewPostAC,l=e.changeTextAC;return r.a.createElement("div",{className:j.a.ProfileMyPosts},r.a.createElement("div",{className:j.a.BlockAddPost},r.a.createElement("div",null,r.a.createElement("div",{className:j.a.Textarea},r.a.createElement("textarea",{value:a,onChange:function(e){l(e.currentTarget.value)},placeholder:"Add new post"})),r.a.createElement("div",null,r.a.createElement(N,{disabled:""===a,title:"Add post",styleButton:j.a.ButtonAddPost,onClick:function(){n()}}))),r.a.createElement("div",{className:j.a.Posts},t.map((function(e,t){return r.a.createElement(L,{key:t+"_"+e.id,message:e.message,likesCount:e.likesCount,id:e.id})})))),r.a.createElement("div",{className:j.a.ProfileMyPostsBlockInfo},r.a.createElement("h3",null,"Information")))})),M=function(){return r.a.createElement("div",{className:B.a.Profile},r.a.createElement(O,null),r.a.createElement(R,null))},F=a(40),W=a.n(F),D=function(){return r.a.createElement("div",{className:W.a.Dialogs},"Dialogs")},Y=a(41),Z=a.n(Y),V=a(43),X=a(7),G=a.n(X),J=function(e){var t=e.users,a=e.followUser,n=e.unfollowUser;return r.a.createElement("div",{className:G.a.UserWrapper},t.map((function(e){return r.a.createElement("div",{key:e.id,className:G.a.User},r.a.createElement("div",{className:G.a.LeftBox},r.a.createElement("div",{className:G.a.UserAvatar}),r.a.createElement("span",null,e.followed?r.a.createElement(N,{styleButton:G.a.UnFollow,onClick:function(){return n(e.id)},title:"\u0412 \u0434\u0440\u0443\u0437\u044c\u044f\u0445"}):r.a.createElement(N,{styleButton:G.a.Follow,onClick:function(){return a(e.id)},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))),r.a.createElement("div",{className:G.a.RightBox},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.status),r.a.createElement("div",{className:G.a.Location},r.a.createElement("b",null,"Belarus:"),r.a.createElement("span",null,"Minsk"))))})))},z=a(42),Q=a.n(z),$=Object(u.b)((function(e){return{users:e.usersReducer.users}}),(function(e){return{followUser:function(t){return e(function(e){return{type:"users/FOLLOW-USER",userId:e}}(t))},unfollowUser:function(t){return e(function(e){return{type:"users/UNFOLLOW-USER",userId:e}}(t))},setUsers:function(t){return e(function(e){return{type:"users/SET-USERS",state:e}}(t))}}}))((function(e){var t=e.users,a=e.followUser,l=e.unfollowUser,s=e.setUsers,o=Object(n.useState)([]),c=Object(V.a)(o,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){Q.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(e){s(e.data.items)})),t&&u(t)}),[t]),r.a.createElement(J,{users:i,followUser:a,unfollowUser:l})})),q=function(){return r.a.createElement("div",{className:Z.a.Users},r.a.createElement($,null))},K=function(){return r.a.createElement("div",{className:c.a.App},r.a.createElement(g,null,r.a.createElement(U,null),r.a.createElement("div",{className:c.a.Content},r.a.createElement(k,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/profile",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(y.b,{path:"/dialogs",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(y.b,{path:"/users",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(y.b,{path:"/",render:function(){return r.a.createElement(y.a,{to:"/profile"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={Header:"Header_Header__2C_Ub",HeaderContainer:"Header_HeaderContainer__F-Ur3",Logo:"Header_Logo__18l3V",SearchPanel:"Header_SearchPanel__1WQZJ",InformationBlock:"Header_InformationBlock__2sbRR",Bell:"Header_Bell__2bW3X",Settings:"Header_Settings__3zfTv"}},9:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__2ajNT",Nav:"Sidebar_Nav__3VYY9",Active:"Sidebar_Active__1zSkW"}}},[[44,1,2]]]);
//# sourceMappingURL=main.b420c549.chunk.js.map