(this.webpackJsonpgfinder=this.webpackJsonpgfinder||[]).push([[0],{132:function(e,a,t){e.exports=t.p+"static/media/spinner.a6949c0b.gif"},149:function(e,a,t){e.exports=t(249)},248:function(e,a,t){},249:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t(17),l=t(18),i=t(13),s=t(125),m=t.n(s),u=t(298),d=t(302),E=t(280),p=t(284),b=function(){var e=f(),a=Object(o.c)((function(e){return e.alert}));return null===a?null:r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(d.a,{severity:"error",className:e.alert},a.msg))},f=Object(p.a)((function(){return{alert:{margin:"30px 0 15px 0"}}})),g=t(27),_=t(288),O=t(289),h=t(283),v=t(68),T=t(287),S=t(130),N=t.n(S),x=t(21),C=t(137),j=t(286),y=t(129),R=t.n(y),I=function(){var e=D(),a=Object(n.useState)(null),t=Object(x.a)(a,2),c=t[0],o=t[1],i=Boolean(c),s=function(){o(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{onClick:function(e){o(e.currentTarget)}},r.a.createElement(R.a,null)),r.a.createElement(C.a,{open:i,anchorEl:c,onClose:s,keepMounted:!0},r.a.createElement(j.a,{onClose:s},r.a.createElement(l.b,{to:"/",className:e.link,onClose:s},r.a.createElement(T.a,{className:e.buttonText},"Home"))),r.a.createElement(j.a,{onClose:s},r.a.createElement(l.b,{to:"/about",className:e.link},r.a.createElement(T.a,{className:e.buttonText},"About")))))},D=Object(p.a)((function(e){var a;return{root:(a={},Object(g.a)(a,e.breakpoints.up("sm"),{display:"none"}),Object(g.a)(a,"boxShadow","none"),a),link:{textDecoration:"none",color:"#fff"},buttonText:{color:"#000",fontWeight:"normal"}}})),k=function(){var e=B();return r.a.createElement("div",{className:e.root},r.a.createElement(_.a,{position:"fixed"},r.a.createElement(O.a,{className:e.toolbar},r.a.createElement(l.b,{to:"/",className:e.link,tabIndex:"-1"},r.a.createElement(h.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(N.a,null))),r.a.createElement(v.a,{variant:"h5",className:e.title},r.a.createElement(l.b,{to:"/",className:e.link,tabIndex:"-1"},r.a.createElement(h.a,{edge:"start",color:"inherit","aria-label":"menu"},"Github Finder"))),r.a.createElement("div",{className:e.nav},r.a.createElement(l.b,{to:"/",className:e.link,tabIndex:"-1"},r.a.createElement(T.a,{className:e.buttonText},"Home")),r.a.createElement(l.b,{to:"/about",className:e.link,tabIndex:"-1"},r.a.createElement(T.a,{className:e.buttonText},"About"))),r.a.createElement(I,null))))},B=Object(p.a)((function(e){return{root:{flexGrow:1,marginBottom:100},toolbar:Object(g.a)({minHeight:75,margin:"0 25px"},e.breakpoints.down("xs"),{margin:0}),nav:Object(g.a)({},e.breakpoints.down("xs"),{display:"none"}),title:{flexGrow:1,fontWeight:"bold"},buttonText:{color:"#fff",fontWeight:"bold"},link:{textDecoration:"none",color:"#fff"}}})),L=t(290),W=t(299),A=t(131),P=t.n(A),U=t(31),w=t.n(U),H=t(67),K="https://api.github.com",G=function(){return{type:"SET_LOADING"}},V=function(e){return function(a){a({type:"SET_ALERT",payload:{msg:e}}),setTimeout((function(){return a({type:"REMOVE_ALERT"})}),3e3)}},M=function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],c=a[1],l=Object(o.b)(),i=Object(o.c)((function(e){return[e.gh.users,e.gh.repos]})),s=Object(x.a)(i,2),m=s[0],u=s[1],d=z();return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),""===t?l(V("Please enter something")):t.match(/^[`!@#%^&*()+{}[\];:'"<>,.?/|\\\s]/)?l(V("Invalid charachter")):(l(function(e){return function(){var a=Object(H.a)(w.a.mark((function a(t){var n,r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(G()),a.next=3,fetch("".concat(K,"/search/users?q=").concat(e,"&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"SEARCH_USERS",payload:r.items});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t)),l(function(e){return function(){var a=Object(H.a)(w.a.mark((function a(t){var n,r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(G()),a.next=3,fetch("".concat(K,"/search/repositories?q=").concat(e,"&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"SEARCH_REPOS",payload:r.items});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t)),void c(""))},autoComplete:"off"},r.a.createElement(L.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(L.a,{item:!0,xs:9,sm:11,lg:11,xl:11},r.a.createElement(W.a,{label:"Search or jump to...",fullWidth:!0,onChange:function(e){return c(e.target.value)},value:t,className:d.input})),r.a.createElement(L.a,{item:!0,xs:3,sm:1,lg:1,xl:1},r.a.createElement(T.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:d.searchBtn},r.a.createElement(P.a,null)))),(m.length>0||u.length>0)&&r.a.createElement(T.a,{onClick:function(){l({type:"CLEAR_USERS"}),l({type:"CLEAR_REPOS"})},color:"secondary",className:d.clearBtn},"Clear"))},z=Object(p.a)((function(){return{input:{margin:"0 0 20px 0"},searchBtn:{color:"#fff",marginBottom:10},clearBtn:{float:"right",marginTop:6}}})),F=t(138),q=t(301),J=t(296),X=t(300),Q=t(291),Y=t(292),Z=t(293),$=t(294),ee=function(e){var a=e.user,t=ae(),n=a.login,c=a.avatar_url;return r.a.createElement("div",{className:t.root},r.a.createElement(Q.a,{className:t.card},r.a.createElement(Y.a,{image:c,className:t.cardMedia}),r.a.createElement(Z.a,{className:t.cardContent},r.a.createElement(v.a,{variant:"h5"},n)),r.a.createElement($.a,{className:t.cardActions},r.a.createElement(l.b,{to:"/user/".concat(n),className:t.card,tabIndex:-1},r.a.createElement(T.a,{size:"small",color:"primary",variant:"contained"},"More")))))},ae=Object(p.a)((function(e){return{root:{padding:e.spacing(2)},card:{margin:"0 auto",textAlign:"center",paddingTop:15,textDecoration:"none"},cardMedia:{height:70,width:70,borderRadius:"50%",margin:"0 auto"},cardContent:{paddingBottom:0},cardActions:{paddingTop:0}}})),te=t(132),ne=t.n(te),re=function(){return r.a.createElement("img",{src:ne.a,alt:"Loading indicator",style:ce})},ce={width:"200px",margin:"auto",display:"block"},oe=function(){var e=le(),a=Object(o.c)((function(e){return[e.gh.users,e.gh.loading]})),t=Object(x.a)(a,2),n=t[0];return t[1]?r.a.createElement(re,null):n?r.a.createElement(L.a,{container:!0,spacing:0,className:e.grid},n.map((function(e){return r.a.createElement(L.a,{item:!0,xs:12,sm:6,lg:4,xl:3,key:e.id},r.a.createElement(ee,{user:e}))}))):r.a.createElement("h1",null,"No such users found")},le=Object(p.a)((function(){return{grid:{margin:"20px 0"}}})),ie=t(295),se=t(133),me=t.n(se),ue=function(e){var a=e.repo,t=Ee(),n=a.full_name,c=a.html_url,o=a.language,l=a.stargazers_count;return r.a.createElement("div",{className:t.root},r.a.createElement(Q.a,{className:t.card},r.a.createElement(Z.a,{className:t.cardContent},r.a.createElement(v.a,{color:"primary",variant:"h5"},n),r.a.createElement(v.a,{variant:"subtitle1"},o),l>0&&r.a.createElement(v.a,{variant:"body2",className:t.starsCount},de(l),r.a.createElement(me.a,{color:"secondary"}))),r.a.createElement($.a,{className:t.cardActions},r.a.createElement(ie.a,{href:c,target:"_blank",rel:"noreferrer noopener",className:t.card,tabIndex:-1},r.a.createElement(T.a,{size:"small",color:"primary",variant:"contained"},"View Code")))))},de=function(e){return e>1e4?"".concat(Math.round(e/1e3),"k"):e>1e3?"".concat(Math.round(e/100)/10,"k"):e},Ee=Object(p.a)((function(e){return{root:{padding:e.spacing(2)},card:{margin:"0 auto",textAlign:"center",paddingTop:15,textDecoration:"none"},cardContent:{paddingBottom:0},cardActions:{paddingTop:0},starsCount:{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}})),pe=function(){var e=be(),a=Object(o.c)((function(e){return[e.gh.repos,e.gh.loading]})),t=Object(x.a)(a,2),n=t[0];return t[1]?r.a.createElement(re,null):r.a.createElement(L.a,{container:!0,spacing:0,className:e.grid},n.map((function(e){return r.a.createElement(L.a,{item:!0,xs:12,sm:6,lg:6,xl:3,key:e.id},r.a.createElement(ue,{repo:e}))})))},be=Object(p.a)((function(){return{grid:{margin:"20px 0"}}})),fe=function(){var e=Object(n.useState)(0),a=Object(x.a)(e,2),t=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{indicatorColor:"primary",textColor:"primary",value:t,onChange:function(e,a){c(a)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},r.a.createElement(J.a,Object.assign({label:"Users"},_e(0))),r.a.createElement(J.a,Object.assign({label:"Repos"},_e(1)))),r.a.createElement(ge,{value:t,index:0},r.a.createElement(oe,null)),r.a.createElement(ge,{value:t,index:1},r.a.createElement(pe,null)))},ge=function(e){var a=e.children,t=e.value,n=e.index,c=Object(F.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({},c,{role:"tabpanel",hidden:t!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)}),t===n&&r.a.createElement(X.a,{p:3},r.a.createElement(v.a,{component:"span"},a)))},_e=function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}},Oe=function(){return r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(M,null),r.a.createElement(fe,null))},he=t(285),ve=t(251),Te=t(297),Se=t(303),Ne=t(134),xe=t.n(Ne),Ce=t(135),je=t.n(Ce),ye=function(e){var a=e.userRepo,t=Re(),n=a.html_url;return r.a.createElement(Q.a,{className:t.card},r.a.createElement($.a,{className:t.cardActions},r.a.createElement(ie.a,{href:n,target:"_blank",rel:"noreferrer noopener",className:t.link},r.a.createElement(v.a,{variant:"h6"},a.name))))},Re=Object(p.a)((function(){return{card:{padding:10,marginBottom:20},cardActions:{paddingLeft:0},link:{"&:hover":{textDecoration:"none",color:"darkblue"}}}})),Ie=function(e){return e.userRepos.map((function(e){return r.a.createElement(ye,{userRepo:e,key:e.id})}))},De=function(e){var a=e.match,t=Object(o.b)(),c=Object(o.c)((function(e){return[e.gh.user,e.gh.userRepos,e.gh.loading]})),i=Object(x.a)(c,3),s=i[0],m=i[1],u=i[2],d=ke();Object(n.useEffect)((function(){var e;t((e=a.params.login,function(){var a=Object(H.a)(w.a.mark((function a(t){var n,r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(G()),a.next=3,fetch("".concat(K,"/users/").concat(e,"?client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"GET_USER",payload:r});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())),t(function(e){return function(){var a=Object(H.a)(w.a.mark((function a(t){var n,r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(G()),a.next=3,fetch("".concat(K,"/users/").concat(e,"/repos?per_page=&sort=created:asc&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"GET_USER_REPOS",payload:r});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a.params.login))}),[t,a]);var p=s.name,b=s.company,f=s.avatar_url,g=s.location,_=s.bio,O=s.blog,h=s.login,S=s.html_url,N=s.followers,C=s.following,j=s.public_repos,y=s.public_gists,R=s.hireable;return u?r.a.createElement(re,null):r.a.createElement(E.a,null,r.a.createElement("div",{className:d.root},r.a.createElement(l.b,{to:"/",className:d.link,tabIndex:-1},r.a.createElement(T.a,{variant:"outlined",color:"secondary",className:d.button},"Back to Search")),r.a.createElement(v.a,{variant:"subtitle2",display:"inline",className:d.hire},r.a.createElement("span",null,"Hirable:"),R?r.a.createElement(xe.a,{className:d.checkIcon,alt:"Hirable"}):r.a.createElement(je.a,{color:"secondary",alt:"Not hirable"})),r.a.createElement(Q.a,{className:d.card},r.a.createElement(L.a,{container:!0,spacing:0,justify:"center",alignItems:"center"},r.a.createElement(L.a,{item:!0,xs:12,sm:6,lg:6,xl:6,align:"center"},r.a.createElement(Y.a,{component:"img",image:f,className:d.cardMedia}),r.a.createElement(Z.a,{className:d.cardContent},r.a.createElement(v.a,{variant:"h5"},r.a.createElement("span",{className:d.fwBold},p)),r.a.createElement(v.a,{variant:"subtitle1"},"Location: ",g))),r.a.createElement(L.a,{item:!0,xs:12,sm:6,lg:6,xl:6},_&&r.a.createElement("div",{className:d.bio},r.a.createElement(v.a,{variant:"h5"},r.a.createElement("span",{className:d.fwBold},"Bio")),r.a.createElement(v.a,{variant:"subtitle1"},_)),r.a.createElement($.a,{className:d.cardActions},r.a.createElement(ie.a,{href:S,target:"_blank",rel:"noreferrer noopener",tabIndex:-1},r.a.createElement(T.a,{size:"medium",color:"primary",variant:"contained",className:d.button},"Visit Github Profile"))),r.a.createElement(he.a,{component:"ul"},r.a.createElement(ve.a,{className:d.listItem},r.a.createElement(Te.a,null,r.a.createElement("span",{className:d.fwBold},"Username: "),h)),b&&r.a.createElement(ve.a,{className:d.listItem},r.a.createElement(Te.a,null,r.a.createElement("span",{className:d.fwBold},"Company: "),b)),O&&r.a.createElement(ve.a,{className:d.listItem},r.a.createElement(Te.a,null,r.a.createElement("span",{className:d.fwBold},"Website: "),r.a.createElement(ie.a,{href:O,target:"_blank",rel:"noreferrer noopener"},O))))))),r.a.createElement(Q.a,{className:d.cardBadge},r.a.createElement(Se.a,{label:"Followers: ".concat(N),color:"secondary"}),r.a.createElement(Se.a,{label:"Following: ".concat(C),color:"primary"}),r.a.createElement(Se.a,{label:"Public Repos: ".concat(j),color:"secondary"}),r.a.createElement(Se.a,{label:"Public Gists: ".concat(y)})),r.a.createElement(Ie,{userRepos:m})))},ke=Object(p.a)((function(e){return{root:Object(g.a)({padding:e.spacing(2)},e.breakpoints.down("xs"),{padding:e.spacing(0)}),link:{textDecoration:"none"},button:{textTransform:"capitalize"},hire:{display:"inline-flex",alignItems:"center",marginLeft:10,"&>*":{marginRight:5}},card:{margin:"20px auto",padding:" 20px 5%"},cardContent:{paddingBottom:0},cardBadge:{margin:"20px auto",padding:" 20px 5%",textAlign:"center","& >*":{margin:e.spacing(1)}},cardMedia:{height:160,width:160,borderRadius:"50%"},cardActions:{paddingLeft:0},listItem:{padding:0},bio:{marginTop:10},checkIcon:{color:"#28a745"},fwBold:{fontWeight:"bold"}}})),Be=function(){return r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h4"},r.a.createElement(X.a,{fontWeight:"fontWeightBold",mb:2},"About")),r.a.createElement(v.a,{variant:"h6"},"App to search Github profiles and repositories"),r.a.createElement(v.a,{variant:"subtitle1"},"Created by Berdibek Iskenderbekov"),r.a.createElement(v.a,{variant:"subtitle1"},r.a.createElement(ie.a,{href:"https://github.com/beck-7",target:"_blank",rel:"relnooper relnoreferrer"},"Github")))},Le=function(){return r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h4"},r.a.createElement(X.a,{fontWeight:"fontWeightBold",mb:2},"Not Found")),r.a.createElement(v.a,{variant:"h6"},"The page you are looking for doesn't exist"))},We=(t(248),function(){return r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(l.a,null,r.a.createElement(k,null),r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Oe}),r.a.createElement(i.a,{path:"/about",component:Be}),r.a.createElement(i.a,{path:"/user/:login",component:De}),r.a.createElement(i.a,{component:Le})))))}),Ae=t(39),Pe=t(136),Ue=t(16),we={users:[],repos:[],user:{},userRepos:[],loading:!1},He=Object(Ae.c)({gh:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_USERS":return Object(Ue.a)(Object(Ue.a)({},e),{},{users:a.payload,loading:!1});case"SEARCH_REPOS":return Object(Ue.a)(Object(Ue.a)({},e),{},{repos:a.payload,loading:!1});case"GET_USER":return Object(Ue.a)(Object(Ue.a)({},e),{},{user:a.payload,loading:!1});case"GET_USER_REPOS":return Object(Ue.a)(Object(Ue.a)({},e),{},{userRepos:a.payload,loading:!1});case"CLEAR_USERS":return Object(Ue.a)(Object(Ue.a)({},e),{},{users:[],loading:!1});case"CLEAR_REPOS":return Object(Ue.a)(Object(Ue.a)({},e),{},{repos:[],loading:!1});case"SET_LOADING":return Object(Ue.a)(Object(Ue.a)({},e),{},{loading:!0});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ALERT":return a.payload;case"REMOVE_ALERT":return null;default:return e}}}),Ke=[Pe.a],Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,Ve=Object(Ae.e)(He,Ge(Ae.a.apply(void 0,Ke))),Me=r.a.createElement(o.a,{store:Ve},r.a.createElement(We,null));Object(c.render)(Me,document.querySelector("#root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.b9259b81.chunk.js.map