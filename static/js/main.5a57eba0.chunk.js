(this.webpackJsonpfathersday2021=this.webpackJsonpfathersday2021||[]).push([[0],{21:function(e,t,n){e.exports={Container:"style_Container__1liDm",ImagesContainer:"style_ImagesContainer__12TaW",ImageContainer:"style_ImageContainer__18BwJ",Image:"style_Image__3KGW0",Comment:"style_Comment__s10bI"}},23:function(e,t,n){e.exports={Text:"style_Text__1O_XH",Title:"style_Title__1Kvly",Image:"style_Image__2K9jn",Container:"style_Container__hx-eN"}},34:function(e,t,n){e.exports={Text:"style_Text__NjrV5"}},35:function(e,t,n){e.exports={Container:"style_Container__3AHBc",ChildrenContainer:"style_ChildrenContainer__gPVQ3"}},37:function(e,t,n){e.exports={Container:"style_Container__2eUyw",Comment:"style_Comment__2SlJ3"}},44:function(e,t,n){e.exports={Container:"style_Container__2BlVG"}},45:function(e,t,n){e.exports={Container:"style_Container__2R3cl"}},46:function(e,t,n){e.exports={Text:"style_Text__UQFse"}},47:function(e,t,n){e.exports={Title:"style_Title__sRfMI"}},48:function(e,t,n){e.exports={Title:"style_Title__3C2Cy"}},49:function(e,t,n){e.exports={Image:"style_Image__rmMsp"}},53:function(e,t,n){e.exports={FeatureTitle:"style_FeatureTitle__2Td49"}},54:function(e,t,n){e.exports={Feature:"style_Feature__1IPXr"}},55:function(e,t,n){e.exports={Image:"style_Image__1Z3J5"}},60:function(e,t,n){e.exports={Container:"style_Container__e202_"}},66:function(e,t,n){},67:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(27),c=n.n(s),r=(n(66),n(67),n(13)),o=n(5),l=n(79),m=n(44),u=n.n(m),j=n(2),b=function(e){return Object(j.jsx)("div",{"data-testid":"btn-container",className:u.a.Container,onClick:e.onClick,children:e.children})},d=function(e){return Object(j.jsx)(b,{onClick:e.onClick||function(e){window.scrollTo(window.scrollX,window.scrollY+document.documentElement.clientHeight)},children:Object(j.jsx)(l.a,{size:e.size})})},g=n(45),f=n.n(g),x=n(61),O=function(e){var t=Object(i.useRef)(null),n=e.onVisible,a=Object(x.a)(5);return Object(i.useEffect)((function(){n&&t.current&&t.current.offsetTop<=a+10&&n()}),[a,t,n]),Object(j.jsx)("section",{ref:t,style:{backgroundColor:e.backgroundColor||"white",color:e.color||"black"},className:f.a.Container+" "+(e.className||""),children:e.children})},h=n(46),_=n.n(h),C=function(e){return Object(j.jsx)("p",{className:_.a.Text+" "+(e.className||""),children:e.children})},p=n(34),y=n.n(p),v=function(e){return Object(j.jsxs)(O,{className:y.a.Container+" "+(e.className||""),onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(C,{className:y.a.Text,children:e.text}),Object(j.jsx)(d,{})]})},N=n(47),k=n.n(N),T=function(e){return Object(j.jsx)("h1",{className:k.a.Title+" "+(e.className||""),children:e.children})},w=n(48),S=n.n(w),I=function(e){return Object(j.jsxs)(O,{onVisible:e.onVisible,className:e.className||"",color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(T,{className:S.a.Title,children:e.title}),!e.last&&Object(j.jsx)(d,{})]})},V=n(35),F=n.n(V),D=function(e){return Object(j.jsxs)(O,{onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,className:F.a.Container+" "+(e.className||""),children:[Object(j.jsx)("div",{className:F.a.ChildrenContainer,children:e.children}),Object(j.jsx)(d,{})]})},M=n(23),A=n.n(M),E=n(49),J=n.n(E),z=function(e){return Object(j.jsx)("img",{className:J.a.Image+" "+(e.className||""),src:"images/"+e.file,alt:e.alt})},B=n(84),X=function(e){var t=Object(B.a)().t;return Object(j.jsxs)(O,{className:A.a.Container+" "+(e.className||""),onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(z,{className:A.a.Image,file:e.image,alt:t("pp_of")+e.name}),Object(j.jsx)(T,{className:A.a.Title,children:e.name}),Object(j.jsx)(C,{className:A.a.Text,children:e.description}),Object(j.jsx)(d,{})]})},H=n(53),K=n.n(H),L=function(e){return Object(j.jsx)("h2",{className:K.a.FeatureTitle,children:e.children})},P=n(54),R=n.n(P),W=n(19),G=function(e){return Object(j.jsxs)(W.animated.div,{style:e.style,className:R.a.Feature,children:[e.children,Object(j.jsx)(L,{children:e.title}),Object(j.jsx)(C,{children:e.subtitle})]})},Q=n(81),U=n(82),Y=n(83),Z=n(55),q=n.n(Z),$=function(e){return Object(j.jsx)("img",{className:q.a.Image+" "+(e.className||""),src:"images/"+e.file,alt:e.alt})},ee=n(80),te=function(e){return Object(j.jsx)(b,{onClick:e.onClick||function(e){window.scrollTo(window.scrollX+document.documentElement.clientWidth,window.scrollY)},children:Object(j.jsx)(ee.a,{size:e.size})})},ne=n(37),ie=n.n(ne),ae=function(e){return Object(j.jsxs)("div",{style:{backgroundColor:e.backgroundColor||"white"},className:ie.a.Container+" "+(e.className||""),children:[Object(j.jsx)("p",{className:ie.a.Comment,children:e.text}),e.isLast?Object(j.jsx)(d,{onClick:e.onClick}):Object(j.jsx)(te,{onClick:e.onClick})]})},se=n(21),ce=n.n(se),re=function(e){var t=Object(i.useState)(0),n=Object(o.a)(t,2),a=n[0],s=n[1],c=function(e){s(a+1)},r=function(t){var n;return t+1===(null===e||void 0===e||null===(n=e.images)||void 0===n?void 0:n.length)};return Object(j.jsx)(O,{className:ce.a.Container+" "+(e.className||""),color:e.color,backgroundColor:e.backgroundColor,children:Object(j.jsx)("div",{style:{width:"".concat(e.images.length,"00%"),transform:"translate(-".concat(a,"00vw, 0%)")},className:ce.a.ImagesContainer,children:e.images.map((function(e,t){return Object(j.jsxs)("div",{className:ce.a.ImageContainer,style:{transform:"translate(".concat(t,"00vw, 0%)")},children:[Object(j.jsx)($,{className:ce.a.Image,file:e.image,alt:"A picture of my father"}),Object(j.jsx)(ae,{onClick:r(t)?void 0:c,backgroundColor:"white",className:ce.a.Comment,text:e.comment,isLast:r(t)})]},t)}))})})},oe=function(e,t){var n,a,s,c,r=null===(n=null===t||void 0===t?void 0:t.autostart)||void 0===n||n,l=null!==(a=null===t||void 0===t?void 0:t.interval)&&void 0!==a?a:50,m=null!==(s=null===t||void 0===t?void 0:t.delay)&&void 0!==s?s:0,u=Math.min(null!==(c=null===t||void 0===t?void 0:t.startsAt)&&void 0!==c?c:0,e.length),j=Object(i.useState)(m),b=Object(o.a)(j,2),d=b[0],g=b[1],f=Object(i.useState)(u),x=Object(o.a)(f,2),O=x[0],h=x[1],_=Object(i.useState)(r),C=Object(o.a)(_,2),p=C[0],y=C[1];Object(i.useEffect)((function(){var t=!0;return p&&(d>0&&t?setTimeout((function(){return g(0)}),d):setTimeout((function(){Math.min(O+1,e.length)<=e.length&&t&&h(Math.min(O+1))}),l)),function(){t=!1}}),[O,l,p,e,d]);return{text:e.substring(0,O),setStarted:y}},le=function(e){var t=Object(B.a)().t,n=Object(i.useState)(!1),a=Object(o.a)(n,2),s=a[0],c=a[1],l={from:{transform:"scale(0)"},to:{transform:"scale(1)"}},m=oe(e.title),u=oe(t("ready_to_meet"),{autostart:!1}),b=oe(t("meet")+e.profileName,{autostart:!1,startsAt:t("meet").length}),d=oe(e.profileDescription,{autostart:!1,startsAt:0,interval:5,delay:100*e.profileName.length}),g=oe(t("pictures_more_than_words"),{autostart:!1}),f=oe(e.credits,{autostart:!1}),x=oe(e.message,{autostart:!1});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:m.text,color:"white",backgroundColor:"var(--loading-background)"}),Object(j.jsx)(D,{color:"white",backgroundColor:"var(--loading-background)",onVisible:function(){return c(!0)},children:s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W.Spring,Object(r.a)(Object(r.a)({},l),{},{children:function(t){return Object(j.jsx)(G,{style:t,title:e.gearTitle,subtitle:e.gearSubtitle,children:Object(j.jsx)(Q.a,{})})}})),Object(j.jsx)(W.Spring,Object(r.a)(Object(r.a)({},Object(r.a)(Object(r.a)({},l),{},{delay:400})),{},{children:function(t){return Object(j.jsx)(G,{style:t,title:e.lightningTitle,subtitle:e.lightningSubtitle,children:Object(j.jsx)(U.a,{})})}})),Object(j.jsx)(W.Spring,Object(r.a)(Object(r.a)({},Object(r.a)(Object(r.a)({},l),{},{delay:800})),{},{children:function(t){return Object(j.jsx)(G,{style:t,title:e.selfDrivenTitle,subtitle:e.selfDrivenSubtitle,children:Object(j.jsx)(Y.a,{})})}}))]}):Object(j.jsx)(j.Fragment,{})}),Object(j.jsx)(I,{onVisible:function(){return u.setStarted(!0)},title:u.text}),Object(j.jsx)(X,{image:e.profileImage,onVisible:function(){b.setStarted(!0),d.setStarted(!0)},name:b.text,description:d.text}),Object(j.jsx)(I,{title:g.text,onVisible:function(){return g.setStarted(!0)}}),Object(j.jsx)(re,{images:e.imageSections}),Object(j.jsx)(v,{text:x.text,onVisible:function(){return x.setStarted(!0)}}),Object(j.jsx)(I,{title:f.text,last:!0,onVisible:function(){return f.setStarted(!0)}})]})},me=function(e){var t=Object(B.a)().t;return Object(j.jsx)(le,{title:t("title"),credits:t("credits"),gearTitle:t("features.1.title"),gearSubtitle:t("features.1.subtitle"),lightningTitle:t("features.2.title"),lightningSubtitle:t("features.2.subtitle"),selfDrivenTitle:t("features.3.title"),selfDrivenSubtitle:t("features.3.subtitle"),profileImage:t("profile.image"),profileName:t("profile.name"),profileDescription:t("profile.description"),message:t("message"),imageSections:[{image:t("images.1.image"),comment:t("images.1.comment")},{image:t("images.2.image"),comment:t("images.2.comment")},{image:t("images.3.image"),comment:t("images.3.comment")},{image:t("images.4.image"),comment:t("images.4.comment")},{image:t("images.5.image"),comment:t("images.5.comment")},{image:t("images.6.image"),comment:t("images.6.comment")},{image:t("images.7.image"),comment:t("images.7.comment")}]})},ue=function(){return Object(j.jsx)("main",{children:Object(j.jsx)(me,{})})},je=n(38),be=n(24),de=n(57),ge=n(59);je.a.use(de.a).use(ge.a).use(be.e).init({fallbackLng:"en",debug:!0,backend:{loadPath:function(){return"/"+window.location.pathname.split("/")[1]+"/locales/{{lng}}/{{ns}}.json"}},interpolation:{escapeValue:!1}});je.a;var fe=n(60),xe=n.n(fe),Oe=function(){return Object(j.jsx)("div",{className:xe.a.Container})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)(Oe,{}),children:Object(j.jsx)(ue,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5a57eba0.chunk.js.map