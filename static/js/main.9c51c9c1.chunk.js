(this.webpackJsonpfathersday2021=this.webpackJsonpfathersday2021||[]).push([[0],{21:function(e,t,n){e.exports={Container:"style_Container__1zJAo",ImagesContainer:"style_ImagesContainer__2S4XB",ImageContainer:"style_ImageContainer__1lx11",Image:"style_Image__1FArQ",Comment:"style_Comment__1Okb8"}},23:function(e,t,n){e.exports={Text:"style_Text__2XveM",Title:"style_Title__2tfZq",Image:"style_Image__2M64C",Container:"style_Container__1iboM"}},34:function(e,t,n){e.exports={Text:"style_Text__7QRyN"}},35:function(e,t,n){e.exports={Container:"style_Container__1MO14",ChildrenContainer:"style_ChildrenContainer__2ksFY"}},37:function(e,t,n){e.exports={Container:"style_Container__3BbE0",Comment:"style_Comment__1tGh8"}},44:function(e,t,n){e.exports={Container:"style_Container__1LY9e"}},45:function(e,t,n){e.exports={Container:"style_Container__2toFU"}},46:function(e,t,n){e.exports={Text:"style_Text__3-zAy"}},47:function(e,t,n){e.exports={Title:"style_Title__3NhrG"}},48:function(e,t,n){e.exports={Title:"style_Title__sVTQN"}},49:function(e,t,n){e.exports={Image:"style_Image__WmbUW"}},53:function(e,t,n){e.exports={FeatureTitle:"style_FeatureTitle__3JsS9"}},54:function(e,t,n){e.exports={Feature:"style_Feature__2EVoS"}},55:function(e,t,n){e.exports={Image:"style_Image__2iqgq"}},60:function(e,t,n){e.exports={Container:"style_Container__1BQ9i"}},66:function(e,t,n){},67:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(27),c=n.n(s),o=(n(66),n(67),n(13)),r=n(5),l=n(79),u=n(44),m=n.n(u),j=n(2),b=function(e){return Object(j.jsx)("div",{"data-testid":"btn-container",className:m.a.Container,onClick:e.onClick,children:e.children})},d=function(e){return Object(j.jsx)(b,{onClick:e.onClick||function(e){window.scrollTo(window.scrollX,window.scrollY+document.documentElement.clientHeight)},children:Object(j.jsx)(l.a,{size:e.size})})},g=n(45),f=n.n(g),x=n(61),O=function(e){var t=Object(i.useRef)(null),n=e.onVisible,a=Object(x.a)(5);return Object(i.useEffect)((function(){n&&t.current&&t.current.offsetTop<=a+10&&n()}),[a,t,n]),Object(j.jsx)("section",{ref:t,style:{backgroundColor:e.backgroundColor||"white",color:e.color||"black"},className:f.a.Container+" "+(e.className||""),children:e.children})},h=n(46),_=n.n(h),C=function(e){return Object(j.jsx)("p",{className:_.a.Text+" "+(e.className||""),children:e.children})},p=n(34),v=n.n(p),y=function(e){return Object(j.jsxs)(O,{className:v.a.Container+" "+(e.className||""),onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(C,{className:v.a.Text,children:e.text}),Object(j.jsx)(d,{})]})},N=n(47),k=n.n(N),T=function(e){return Object(j.jsx)("h1",{className:k.a.Title+" "+(e.className||""),children:e.children})},S=n(48),w=n.n(S),I=function(e){return Object(j.jsxs)(O,{onVisible:e.onVisible,className:e.className||"",color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(T,{className:w.a.Title,children:e.title}),!e.last&&Object(j.jsx)(d,{})]})},V=n(35),F=n.n(V),M=function(e){return Object(j.jsxs)(O,{onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,className:F.a.Container+" "+(e.className||""),children:[Object(j.jsx)("div",{className:F.a.ChildrenContainer,children:e.children}),Object(j.jsx)(d,{})]})},A=n(23),E=n.n(A),z=n(49),D=n.n(z),B=function(e){return Object(j.jsx)("img",{className:D.a.Image+" "+(e.className||""),src:"images/"+e.file,alt:e.alt})},J=n(84),L=function(e){var t=Object(J.a)().t;return Object(j.jsxs)(O,{className:E.a.Container+" "+(e.className||""),onVisible:e.onVisible,color:e.color,backgroundColor:e.backgroundColor,children:[Object(j.jsx)(B,{className:E.a.Image,file:e.image,alt:t("pp_of")+e.name}),Object(j.jsx)(T,{className:E.a.Title,children:e.name}),Object(j.jsx)(C,{className:E.a.Text,children:e.description}),Object(j.jsx)(d,{})]})},Q=n(53),X=n.n(Q),Y=function(e){return Object(j.jsx)("h2",{className:X.a.FeatureTitle,children:e.children})},q=n(54),W=n.n(q),G=n(19),R=function(e){return Object(j.jsxs)(G.animated.div,{style:e.style,className:W.a.Feature,children:[e.children,Object(j.jsx)(Y,{children:e.title}),Object(j.jsx)(C,{children:e.subtitle})]})},U=n(81),H=n(82),P=n(83),Z=n(55),K=n.n(Z),$=function(e){return Object(j.jsx)("img",{className:K.a.Image+" "+(e.className||""),src:"images/"+e.file,alt:e.alt})},ee=n(80),te=function(e){return Object(j.jsx)(b,{onClick:e.onClick||function(e){window.scrollTo(window.scrollX+document.documentElement.clientWidth,window.scrollY)},children:Object(j.jsx)(ee.a,{size:e.size})})},ne=n(37),ie=n.n(ne),ae=function(e){return Object(j.jsxs)("div",{style:{backgroundColor:e.backgroundColor||"white"},className:ie.a.Container+" "+(e.className||""),children:[Object(j.jsx)("p",{className:ie.a.Comment,children:e.text}),e.isLast?Object(j.jsx)(d,{onClick:e.onClick}):Object(j.jsx)(te,{onClick:e.onClick})]})},se=n(21),ce=n.n(se),oe=function(e){var t=Object(i.useState)(0),n=Object(r.a)(t,2),a=n[0],s=n[1],c=function(e){s(a+1)},o=function(t){var n;return t+1===(null===e||void 0===e||null===(n=e.images)||void 0===n?void 0:n.length)};return Object(j.jsx)(O,{className:ce.a.Container+" "+(e.className||""),color:e.color,backgroundColor:e.backgroundColor,children:Object(j.jsx)("div",{style:{width:"".concat(e.images.length,"00%"),transform:"translate(-".concat(a,"00vw, 0%)")},className:ce.a.ImagesContainer,children:e.images.map((function(e,t){return Object(j.jsxs)("div",{className:ce.a.ImageContainer,style:{transform:"translate(".concat(t,"00vw, 0%)")},children:[Object(j.jsx)($,{className:ce.a.Image,file:e.image,alt:"A picture of my father"}),Object(j.jsx)(ae,{onClick:o(t)?void 0:c,backgroundColor:"white",className:ce.a.Comment,text:e.comment,isLast:o(t)})]},t)}))})})},re=function(e,t){var n,a,s,c,o=null===(n=null===t||void 0===t?void 0:t.autostart)||void 0===n||n,l=null!==(a=null===t||void 0===t?void 0:t.interval)&&void 0!==a?a:50,u=null!==(s=null===t||void 0===t?void 0:t.delay)&&void 0!==s?s:0,m=Math.min(null!==(c=null===t||void 0===t?void 0:t.startsAt)&&void 0!==c?c:0,e.length),j=Object(i.useState)(u),b=Object(r.a)(j,2),d=b[0],g=b[1],f=Object(i.useState)(m),x=Object(r.a)(f,2),O=x[0],h=x[1],_=Object(i.useState)(o),C=Object(r.a)(_,2),p=C[0],v=C[1];Object(i.useEffect)((function(){var t=!0;return p&&(d>0&&t?setTimeout((function(){return g(0)}),d):setTimeout((function(){Math.min(O+1,e.length)<=e.length&&t&&h(Math.min(O+1))}),l)),function(){t=!1}}),[O,l,p,e,d]);return{text:e.substring(0,O),setStarted:v}},le=function(e){var t=Object(J.a)().t,n=Object(i.useState)(!1),a=Object(r.a)(n,2),s=a[0],c=a[1],l={from:{transform:"scale(0)"},to:{transform:"scale(1)"}},u=re(e.title),m=re(t("ready_to_meet"),{autostart:!1}),b=re(t("meet")+e.profileName,{autostart:!1,startsAt:t("meet").length}),d=re(e.profileDescription,{autostart:!1,startsAt:0,interval:5,delay:100*e.profileName.length}),g=re(t("pictures_more_than_words"),{autostart:!1}),f=re(e.credits,{autostart:!1}),x=re(e.message,{autostart:!1});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:u.text,color:"white",backgroundColor:"var(--loading-background)"}),Object(j.jsx)(M,{color:"white",backgroundColor:"var(--loading-background)",onVisible:function(){return c(!0)},children:s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(G.Spring,Object(o.a)(Object(o.a)({},l),{},{children:function(t){return Object(j.jsx)(R,{style:t,title:e.gearTitle,subtitle:e.gearSubtitle,children:Object(j.jsx)(U.a,{})})}})),Object(j.jsx)(G.Spring,Object(o.a)(Object(o.a)({},Object(o.a)(Object(o.a)({},l),{},{delay:400})),{},{children:function(t){return Object(j.jsx)(R,{style:t,title:e.lightningTitle,subtitle:e.lightningSubtitle,children:Object(j.jsx)(H.a,{})})}})),Object(j.jsx)(G.Spring,Object(o.a)(Object(o.a)({},Object(o.a)(Object(o.a)({},l),{},{delay:800})),{},{children:function(t){return Object(j.jsx)(R,{style:t,title:e.selfDrivenTitle,subtitle:e.selfDrivenSubtitle,children:Object(j.jsx)(P.a,{})})}}))]}):Object(j.jsx)(j.Fragment,{})}),Object(j.jsx)(I,{onVisible:function(){return m.setStarted(!0)},title:m.text}),Object(j.jsx)(L,{image:e.profileImage,onVisible:function(){b.setStarted(!0),d.setStarted(!0)},name:b.text,description:d.text}),Object(j.jsx)(I,{title:g.text,onVisible:function(){return g.setStarted(!0)}}),Object(j.jsx)(oe,{images:e.imageSections}),Object(j.jsx)(y,{text:x.text,onVisible:function(){return x.setStarted(!0)}}),Object(j.jsx)(I,{title:f.text,last:!0,onVisible:function(){return f.setStarted(!0)}})]})},ue=function(e){var t=Object(J.a)().t;return Object(j.jsx)(le,{title:t("title"),credits:t("credits"),gearTitle:t("features.1.title"),gearSubtitle:t("features.1.subtitle"),lightningTitle:t("features.2.title"),lightningSubtitle:t("features.2.subtitle"),selfDrivenTitle:t("features.3.title"),selfDrivenSubtitle:t("features.3.subtitle"),profileImage:t("profile.image"),profileName:t("profile.name"),profileDescription:t("profile.description"),message:t("message"),imageSections:[{image:t("images.1.image"),comment:t("images.1.comment")},{image:t("images.2.image"),comment:t("images.2.comment")},{image:t("images.3.image"),comment:t("images.3.comment")},{image:t("images.4.image"),comment:t("images.4.comment")},{image:t("images.5.image"),comment:t("images.5.comment")},{image:t("images.6.image"),comment:t("images.6.comment")},{image:t("images.7.image"),comment:t("images.7.comment")}]})},me=function(){return Object(j.jsx)("main",{children:Object(j.jsx)(ue,{})})},je=n(38),be=n(24),de=n(57),ge=n(59);je.a.use(de.a).use(ge.a).use(be.e).init({fallbackLng:"en",debug:!0,backend:{loadPath:function(){return"/"+window.location.pathname.split("/")[1]+"/locales/{{lng}}/{{ns}}.json"}},interpolation:{escapeValue:!1}});je.a;var fe=n(60),xe=n.n(fe),Oe=function(){return Object(j.jsx)("div",{className:xe.a.Container})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)(Oe,{}),children:Object(j.jsx)(me,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.9c51c9c1.chunk.js.map