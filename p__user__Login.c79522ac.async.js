(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9531],{5966:function(ue,U,e){"use strict";var ce=e(22122),j=e(81253),G=e(67294),l=e(98757),T=["fieldProps","proFieldProps"],c=["fieldProps","proFieldProps"],b="text",de=function(o){var a=o.fieldProps,L=o.proFieldProps,N=(0,j.Z)(o,T);return G.createElement(l.Z,(0,ce.Z)({mode:"edit",valueType:b,fieldProps:a,filedConfig:{valueType:b},proFieldProps:L},N))},ee=function(o){var a=o.fieldProps,L=o.proFieldProps,N=(0,j.Z)(o,c);return G.createElement(l.Z,(0,ce.Z)({mode:"edit",valueType:"password",fieldProps:a,proFieldProps:L,filedConfig:{valueType:b}},N))},z=de;z.Password=ee,z.displayName="ProFormComponent",U.Z=z},5894:function(ue,U,e){"use strict";e.d(U,{A:function(){return $}});var ce=e(9715),j=e(93766),G=e(22122),l=e(67294),T=e(49111),c=e(19650),b=e(96156),de=e(84305),ee=e(39559),z=e(28481),v=e(28991),o=e(8812),a=e(66758),L=e(96138),N=e(56725),h=e(53621),ae=e(94184),k=e.n(ae),te=l.forwardRef(function(x,F){var re=l.useContext(a.Z),q=re.groupProps,m=(0,v.Z)((0,v.Z)({},q),x),Ee=m.children,me=m.collapsible,je=m.defaultCollapsed,be=m.style,Me=m.labelLayout,ye=m.title,fe=ye===void 0?x.label:ye,K=m.tooltip,Ne=m.align,Se=Ne===void 0?"start":Ne,ge=m.direction,Ze=m.size,Ie=Ze===void 0?32:Ze,He=m.titleStyle,xe=m.titleRender,ne=m.spaceProps,Fe=m.extra,Oe=m.autoFocus,$e=(0,N.Z)(function(){return je||!1},{value:x.collapsed,onChange:x.onCollapse}),Te=(0,z.Z)($e,2),Le=Te[0],Ae=Te[1],Re=(0,l.useContext)(ee.ZP.ConfigContext),se=Re.getPrefixCls,_=se("pro-form-group"),le=me&&l.createElement(o.Z,{style:{marginRight:8},rotate:Le?void 0:90}),pe=l.createElement(h.Z,{label:le?l.createElement("div",null,le,fe):fe,tooltip:K}),Be=xe?xe(pe,x):pe,he=[],ze=l.Children.toArray(Ee).map(function(O,Pe){var Ce;return l.isValidElement(O)&&(O==null||(Ce=O.props)===null||Ce===void 0?void 0:Ce.hidden)?(he.push(O),null):Pe===0&&l.isValidElement(O)&&Oe?l.cloneElement(O,(0,v.Z)((0,v.Z)({},O.props),{},{autoFocus:Oe})):O});return l.createElement("div",{className:k()(_,(0,b.Z)({},"".concat(_,"-twoLine"),Me==="twoLine")),style:be,ref:F},he.length>0&&l.createElement("div",{style:{display:"none"}},he),(fe||K||Fe)&&l.createElement("div",{className:"".concat(_,"-title"),style:He,onClick:function(){Ae(!Le)}},Fe?l.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},Be,l.createElement("span",{onClick:function(Pe){return Pe.stopPropagation()}},Fe)):Be),me&&Le?null:l.createElement(c.Z,(0,G.Z)({},ne,{className:"".concat(_,"-container"),size:Ie,align:Se,direction:ge,style:(0,v.Z)({rowGap:0},ne==null?void 0:ne.style)}),ze))});te.displayName="ProForm-Group";var ve=te,S=e(7525),H=e(42489);function $(x){return l.createElement(H.I,(0,G.Z)({layout:"vertical",submitter:{render:function(re,q){return q.reverse()}},contentRender:function(re,q){return l.createElement(l.Fragment,null,re,q)}},x))}$.Group=ve,$.useForm=j.Z.useForm,$.Item=S.Z},53621:function(ue,U,e){"use strict";var ce=e(22385),j=e(69713),G=e(96156),l=e(84305),T=e(39559),c=e(67294),b=e(68628),de=e(47369),ee=e.n(de),z=e(94184),v=e.n(z),o=function(L){var N=L.label,h=L.tooltip,ae=L.ellipsis,k=L.subTitle,te=(0,c.useContext)(T.ZP.ConfigContext),ve=te.getPrefixCls;if(!h&&!k)return c.createElement(c.Fragment,null,N);var S=ve("pro-core-label-tip"),H=typeof h=="string"||c.isValidElement(h)?{title:h}:h,$=(H==null?void 0:H.icon)||c.createElement(b.Z,null);return c.createElement("div",{className:S,onMouseDown:function(F){return F.stopPropagation()},onMouseLeave:function(F){return F.stopPropagation()},onMouseMove:function(F){return F.stopPropagation()}},c.createElement("div",{className:v()("".concat(S,"-title"),(0,G.Z)({},"".concat(S,"-title-ellipsis"),ae))},N),k&&c.createElement("div",{className:"".concat(S,"-subtitle")},k),h&&c.createElement(j.Z,H,c.createElement("span",{className:"".concat(S,"-icon")},$)))};U.Z=c.memo(o)},34687:function(ue){ue.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},96138:function(){},32384:function(){},47369:function(){},45038:function(ue,U,e){"use strict";e.r(U),e.d(U,{default:function(){return ra}});var ce=e(18106),j=e(45885),G=e(34792),l=e(48086),T=e(11849),c=e(3182),b=e(2824),de=e(17462),ee=e(76772),z=e(94043),v=e.n(z),o=e(28991),a=e(67294),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 00960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"}}]},name:"alipay-circle",theme:"outlined"},N=L,h=e(27029),ae=function(s,i){return a.createElement(h.Z,(0,o.Z)((0,o.Z)({},s),{},{ref:i,icon:N}))};ae.displayName="AlipayCircleOutlined";var k=a.forwardRef(ae),te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 110-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z"}}]},name:"taobao-circle",theme:"outlined"},ve=te,S=function(s,i){return a.createElement(h.Z,(0,o.Z)((0,o.Z)({},s),{},{ref:i,icon:ve}))};S.displayName="TaobaoCircleOutlined";var H=a.forwardRef(S),$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 00-7.2-34.1 34.68 34.68 0 00-33.1-10.7 18.24 18.24 0 01-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 01-22.9 11.7 18.18 18.18 0 01-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 01-26.6 13.7 21.19 21.19 0 01-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 00-98.9-32.1 21.14 21.14 0 01-25.1-16.3 21.07 21.07 0 0116.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z"}}]},name:"weibo-circle",theme:"outlined"},x=$,F=function(s,i){return a.createElement(h.Z,(0,o.Z)((0,o.Z)({},s),{},{ref:i,icon:x}))};F.displayName="WeiboCircleOutlined";var re=a.forwardRef(F),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},m=q,Ee=function(s,i){return a.createElement(h.Z,(0,o.Z)((0,o.Z)({},s),{},{ref:i,icon:m}))};Ee.displayName="LockOutlined";var me=a.forwardRef(Ee),je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},be=je,Me=function(s,i){return a.createElement(h.Z,(0,o.Z)((0,o.Z)({},s),{},{ref:i,icon:be}))};Me.displayName="MobileOutlined";var ye=a.forwardRef(Me),fe=e(89366),K=e(22122),Ne=e(84305),Se=e(39559),ge=e(81253),Ze=e(5894),Ie=e(7381),He=e(32384),xe=["logo","message","title","subTitle","actions","children"];function ne(r){var s=r.logo,i=r.message,P=r.title,y=r.subTitle,V=r.actions,Y=r.children,A=(0,ge.Z)(r,xe),J=(0,Ie.YB)(),Q=(0,o.Z)({searchConfig:{submitText:J.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(ie,w){return w.pop()},submitButtonProps:{size:"large",style:{width:"100%"}}},A.submitter),X=(0,a.useContext)(Se.ZP.ConfigContext),oe=X.getPrefixCls("pro-form-login"),u=function(ie){return"".concat(oe,"-").concat(ie)},W=(0,a.useMemo)(function(){return s?typeof s=="string"?a.createElement("img",{src:s}):s:null},[s]);return a.createElement("div",{className:u("container")},a.createElement("div",{className:u("top")},P||W?a.createElement("div",{className:u("header")},W?a.createElement("span",{className:u("logo")},W):null,P?a.createElement("span",{className:u("title")},P):null):null,y?a.createElement("div",{className:u("desc")},y):null),a.createElement("div",{className:u("main")},a.createElement(Ze.A,(0,K.Z)({isKeyPressSubmit:!0,submitter:Q},A),i,Y),V?a.createElement("div",{className:u("other")},V):null))}var Fe=e(9715),Oe=e(93766),$e=e(57663),Te=e(71577),Le=e(47673),Ae=e(4107),Re=e(87757),se=e.n(Re),_=e(92137),le=e(28481),pe=e(64893),Be=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],he=a.forwardRef(function(r,s){var i=(0,a.useState)(r.countDown||60),P=(0,le.Z)(i,2),y=P[0],V=P[1],Y=(0,a.useState)(!1),A=(0,le.Z)(Y,2),J=A[0],Q=A[1],X=(0,a.useState)(),oe=(0,le.Z)(X,2),u=oe[0],W=oe[1],De=r.rules,ie=r.name,w=r.phoneName,Z=r.fieldProps,g=r.captchaTextRender,C=g===void 0?function(p,D){return p?"".concat(D," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:g,E=r.captchaProps,B=(0,ge.Z)(r,Be),d=function(){var p=(0,_.Z)(se().mark(function D(R){return se().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,W(!0),n.next=4,B.onGetCaptcha(R);case 4:W(!1),Q(!0),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),Q(!1),W(!1),console.log(n.t0);case 13:case"end":return n.stop()}},D,null,[[0,8]])}));return function(R){return p.apply(this,arguments)}}();return(0,a.useEffect)(function(){var p=0,D=r.countDown;return J&&(p=window.setInterval(function(){V(function(R){return R<=1?(Q(!1),clearInterval(p),D||60):R-1})},1e3)),function(){return clearInterval(p)}},[J]),a.createElement(Oe.Z.Item,{noStyle:!0,shouldUpdate:!0},function(p){var D=p.getFieldValue,R=p.validateFields;return a.createElement("div",{style:(0,o.Z)((0,o.Z)({},Z==null?void 0:Z.style),{},{display:"flex",alignItems:"center"}),ref:s},a.createElement(Ae.Z,(0,K.Z)({},Z,{style:{flex:1,transition:"width .3s",marginRight:8}})),a.createElement(Te.Z,(0,K.Z)({style:{display:"block"},disabled:J,loading:u},E,{onClick:(0,_.Z)(se().mark(function Ge(){var n;return se().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(M.prev=0,!w){M.next=9;break}return M.next=4,R([w].flat(1));case 4:return n=D([w].flat(1)),M.next=7,d(n);case 7:M.next=11;break;case 9:return M.next=11,d("");case 11:M.next=16;break;case 13:M.prev=13,M.t0=M.catch(0),console.log(M.t0);case 16:case"end":return M.stop()}},Ge,null,[[0,13]])}))}),C(J,y)))})}),ze=(0,pe.G)(he),O=e(63185),Pe=e(9676),Ce=e(98757),Ye=e(22270),Je=["options","fieldProps","proFieldProps","valueEnum"],Qe=a.forwardRef(function(r,s){var i=r.options,P=r.fieldProps,y=r.proFieldProps,V=r.valueEnum,Y=(0,ge.Z)(r,Je);return a.createElement(Ce.Z,(0,K.Z)({ref:s,valueType:"checkbox",mode:"edit",valueEnum:(0,Ye.h)(V,void 0),fieldProps:(0,o.Z)({options:i},P),proFieldProps:y},Y))}),Xe=a.forwardRef(function(r,s){var i=r.fieldProps,P=r.children;return a.createElement(Pe.Z,(0,K.Z)({ref:s},i),P)}),we=(0,pe.G)(Xe,{valuePropName:"checked"}),Ke=we;Ke.Group=Qe;var ke=Ke,We=e(5966),f=e(21010),qe=e(71390),_e=e(36571);function ea(r,s){return Ue.apply(this,arguments)}function Ue(){return Ue=(0,c.Z)(v().mark(function r(s,i){return v().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,f.WY)("/api/login/captcha",(0,T.Z)({method:"GET",params:(0,T.Z)({},s)},i||{})));case 1:case"end":return y.stop()}},r)})),Ue.apply(this,arguments)}var aa=e(34687),I=e.n(aa),t=e(85893),Ve=function(s){var i=s.content;return(0,t.jsx)(ee.Z,{style:{marginBottom:24},message:i,type:"error",showIcon:!0})},ta=function(){var s=(0,a.useState)({}),i=(0,b.Z)(s,2),P=i[0],y=i[1],V=(0,a.useState)("account"),Y=(0,b.Z)(V,2),A=Y[0],J=Y[1],Q=(0,f.tT)("@@initialState"),X=Q.initialState,oe=Q.setInitialState,u=(0,f.YB)(),W=function(){var Z=(0,c.Z)(v().mark(function g(){var C,E;return v().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,X==null||(C=X.fetchUserInfo)===null||C===void 0?void 0:C.call(X);case 2:if(E=d.sent,!E){d.next=6;break}return d.next=6,oe(function(p){return(0,T.Z)((0,T.Z)({},p),{},{currentUser:E})});case 6:case"end":return d.stop()}},g)}));return function(){return Z.apply(this,arguments)}}(),De=function(){var Z=(0,c.Z)(v().mark(function g(C){var E,B,d,p,D,R;return v().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,_e.x4)((0,T.Z)((0,T.Z)({},C),{},{type:A}));case 3:if(E=n.sent,E.status!=="ok"){n.next=15;break}return B=u.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),l.default.success(B),n.next=9,W();case 9:if(f.m8){n.next=11;break}return n.abrupt("return");case 11:return d=f.m8.location.query,p=d,D=p.redirect,f.m8.push(D||"/"),n.abrupt("return");case 15:console.log(E),y(E),n.next=23;break;case 19:n.prev=19,n.t0=n.catch(0),R=u.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),l.default.error(R);case 23:case"end":return n.stop()}},g,null,[[0,19]])}));return function(C){return Z.apply(this,arguments)}}(),ie=P.status,w=P.type;return(0,t.jsxs)("div",{className:I().container,children:[(0,t.jsx)("div",{className:I().lang,"data-lang":!0,children:f.pD&&(0,t.jsx)(f.pD,{})}),(0,t.jsx)("div",{className:I().content,children:(0,t.jsxs)(ne,{logo:(0,t.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Ant Design",subTitle:u.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0},actions:[(0,t.jsx)(f._H,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"},"loginWith"),(0,t.jsx)(k,{className:I().icon},"AlipayCircleOutlined"),(0,t.jsx)(H,{className:I().icon},"TaobaoCircleOutlined"),(0,t.jsx)(re,{className:I().icon},"WeiboCircleOutlined")],onFinish:function(){var Z=(0,c.Z)(v().mark(function g(C){return v().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,De(C);case 2:case"end":return B.stop()}},g)}));return function(g){return Z.apply(this,arguments)}}(),children:[(0,t.jsxs)(j.Z,{activeKey:A,onChange:J,children:[(0,t.jsx)(j.Z.TabPane,{tab:u.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account"),(0,t.jsx)(j.Z.TabPane,{tab:u.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"})},"mobile")]}),ie==="error"&&w==="account"&&(0,t.jsx)(Ve,{content:u.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),A==="account"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(We.Z,{name:"username",fieldProps:{size:"large",prefix:(0,t.jsx)(fe.Z,{className:I().prefixIcon})},placeholder:u.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,t.jsx)(f._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,t.jsx)(We.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(me,{className:I().prefixIcon})},placeholder:u.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,t.jsx)(f._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),ie==="error"&&w==="mobile"&&(0,t.jsx)(Ve,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),A==="mobile"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(We.Z,{fieldProps:{size:"large",prefix:(0,t.jsx)(ye,{className:I().prefixIcon})},name:"mobile",placeholder:u.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,t.jsx)(f._H,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,t.jsx)(f._H,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,t.jsx)(ze,{fieldProps:{size:"large",prefix:(0,t.jsx)(me,{className:I().prefixIcon})},captchaProps:{size:"large"},placeholder:u.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(g,C){return g?"".concat(C," ").concat(u.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):u.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,t.jsx)(f._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var Z=(0,c.Z)(v().mark(function g(C){var E;return v().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,ea({phone:C});case 2:if(E=d.sent,E!==!1){d.next=5;break}return d.abrupt("return");case 5:l.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return d.stop()}},g)}));return function(g){return Z.apply(this,arguments)}}()})]}),(0,t.jsxs)("div",{style:{marginBottom:24},children:[(0,t.jsx)(ke,{noStyle:!0,name:"autoLogin",children:(0,t.jsx)(f._H,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,t.jsx)("a",{style:{float:"right"},children:(0,t.jsx)(f._H,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})}),(0,t.jsx)(qe.Z,{})]})},ra=ta}}]);
