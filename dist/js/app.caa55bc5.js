(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"038d":function(t,e,r){t.exports=r.p+"img/vue.22efb7c2.svg"},3115:function(t,e,r){},"31e8":function(t,e,r){var n={"./bem.svg":"c81b","./bootstrap.svg":"8d2c","./bulma.svg":"893a","./css.svg":"ca83","./html.svg":"a376","./javascript.svg":"3c64","./vue.svg":"038d"};function a(t){var e=s(t);return r(e)}function s(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="31e8"},"3c64":function(t,e,r){t.exports=r.p+"img/javascript.87711407.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav-bar"),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-transparent justify-content-between"},[n("router-link",{attrs:{to:{name:"Home"}}},[n("a",{staticClass:"navbar-brand h3 text-white"},[t._v("RBoraure")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Proyects"}}},[n("a",{staticClass:"nav-link text-white h4 text-uppercase"},[t._v("Proyects")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Skill"}}},[n("a",{staticClass:"nav-link text-white h4 text-uppercase"},[t._v("Skills")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Certifications"}}},[n("a",{staticClass:"nav-link text-white h4 text-uppercase"},[t._v("Certifications")])])],1),n("li",{staticClass:"nav-item"},[n("c-button",{attrs:{route:"Contact",color:"white",content:"Contact me"}})],1)])])],1),n("img",{attrs:{src:r("72cb"),alt:"",srcset:""}})])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"c-button .hvr-grow",attrs:{type:"button"}},[r("router-link",{attrs:{to:{name:t.route}}},[r("p",{staticClass:"h4",class:"text-"+t.color},[t._v(t._s(t.content))])])],1)},l=[],u={name:"c-button",props:{content:String,color:String,route:String}},d=u,m=r("2877"),p=Object(m["a"])(d,c,l,!1,null,null,null),f=p.exports,_={components:{CButton:f}},h=_,v=Object(m["a"])(h,o,i,!1,null,null,null),g=v.exports,b={components:{NavBar:g}},C=b,x=(r("5c0b"),Object(m["a"])(C,a,s,!1,null,null,null)),y=x.exports,w=(r("4989"),r("1157"),r("8c4f")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container-lg"},[r("hero-cont")],1)},j=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row hero justify-content-between"},[r("div",{staticClass:"col-12 col-md-8 hero__content"},[r("h1",{staticClass:"display-md-4 h1 font-weight-bold text-uppercase"},[t._v(" 💻 Frontend Developer ")]),r("p",{staticClass:"h3 my-3 pr-5"},[t._v(" Welcome to my personal portfolio, I’m glad because you are looking for me, I want to show you what I have done, my skills, my certification and I wish you could understand how much passion I have for web development. ")]),t._m(0),r("c-button",{staticClass:"text-uppercase my-2",attrs:{content:"Work Together",color:"primary",route:"Contact"}})],1),r("div",{staticClass:"col-12 col-md-3 mx-auto hero__media d-flex justify-content-between d-md-block mt-5 mt-md-0"},[r("px-profile")],1)])])},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"h3 my-3 pr-5"},[t._v(" I am a Web Developer, I have an incredible passion for Frontend tecnologies like Vue.Js and some libraries that improves UI. I can work with CSS frameworks, CSS preprocessors and BEM methodology. "),r("span",{staticClass:"text-success text-uppercase font-wight-bold"},[t._v("I 💚 learn")])])}],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"d-flex d-md-block"},[n("figure",{staticClass:"me__figure p-3 w-100 mx-auto hvr-grow"},[n("router-link",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Contact Me",to:{name:"Contact"}}},[n("img",{staticClass:"rounded-circle mb-0 mb-md-3",attrs:{src:r("9341"),alt:"RBoraure Profile Photo"}})])],1),n("div",{staticClass:"hero__content__me rounded bg-secondary text-center p-3"},[t._m(0),n("div",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.badges,(function(t,e){return n("px-badges",{key:e,staticClass:"mx-2",attrs:{content:t}})})),1)])])},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",{staticClass:"text-white text-uppercase"},[t._v(" Ricardo Boraure "),r("span",{staticClass:"text-light text-lowercase"},[t._v("-@rboraure")])])}],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",[r("span",{staticClass:"badge badge-light"},[t._v(t._s(t.content))])])},L=[],T={name:"badge",props:{content:String}},$=T,I=Object(m["a"])($,B,L,!1,null,null,null),M=I.exports,R={data:function(){return{badges:["#Frontend","#Frameworks","#Responsive","#Autodidact","#BEM","#Git"]}},components:{PxBadges:M}},U=R,D=(r("d3b5"),Object(m["a"])(U,E,P,!1,null,"6ca738b6",null)),A=D.exports,N={components:{PxProfile:A,CButton:f}},z=N,F=Object(m["a"])(z,S,O,!1,null,null,null),H=F.exports,V={name:"Home",components:{HeroCont:H}},J=V,G=Object(m["a"])(J,k,j,!1,null,null,null),W=G.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container-md"},[t.isLoading?r("vue-loaders-pacman",{staticClass:"certs__loader",attrs:{color:"#2AB579",scale:"1.5"}}):t._e(),t.isLoading?t._e():r("section",{staticClass:"proyects mt-4"},t._l(t.story.module,(function(t,e){return r("px-module",{key:e,attrs:{module:t}})})),1)],1)},K=[],Z=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"module"},[r("h1",{staticClass:"module__title text-dark"},[t._v(t._s(t.title))]),r("div",{staticClass:"module__controls"},[r("i",{staticClass:"module__controls__left",on:{click:t.prev}},[t._v("👈")]),r("h2",{staticClass:"module__controls__title"},[t._v(" "+t._s(t.proyectTitle)+" ")]),r("i",{staticClass:"module__controls__right",on:{click:t.next}},[t._v("👉")])]),r("div",{staticClass:"module__content row"},[r("figure",{staticClass:"module__content__img figure col-12 col-lg-5"},[r("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:t.module.proyects[t.current].imgs.filename,alt:"Proyect image"}}),r("figcaption",{staticClass:"figure-caption text-right"},[t._v(" "+t._s(t.module.proyects[t.current].caption)+" ")])]),r("p",{staticClass:"module__content__description col-12 col-lg-7",domProps:{innerHTML:t._s(t.description)}})])])}),q=[],Q=(r("a4d3"),r("e01a"),r("0e54")),X=r.n(Q),tt={name:"PxModule",props:{module:Object},data:function(){return{current:0}},methods:{next:function(){if(this.module.proyects.length-1===this.current)return this.current=0,!1;this.current++},prev:function(){if(0===this.current)return this.current=this.module.proyects.length-1,!1;this.current--}},computed:{title:function(){return this.module.title},proyectTitle:function(){return this.module.proyects[this.current].title},description:function(){return X()(this.module.proyects[this.current].description)}}},et=tt,rt=Object(m["a"])(et,Z,q,!1,null,null,null),nt=rt.exports,at=r("4417"),st=r.n(at),ot="production"===Object({NODE_ENV:"production",VUE_APP_TOKEN:"DRjxIuPFcbmYCZz6dJu7vgtt",BASE_URL:"/"}).node_env?Object({NODE_ENV:"production",VUE_APP_TOKEN:"DRjxIuPFcbmYCZz6dJu7vgtt",BASE_URL:"/"}).APP_KEY:"DRjxIuPFcbmYCZz6dJu7vgtt",it=new st.a({accessToken:ot}),ct={name:"Proyects",components:{PxModule:nt},data:function(){return{story:{},current:{module:0},isLoading:Boolean}},created:function(){var t=this;this.isLoading=!0,window.storyblok.init({accessToken:ot}),window.storyblok.on("change",(function(){t.getStory("proyects","draft")})),window.storyblok.pingEditor((function(){window.storyblok.isInEditor()?t.getStory("proyects","draft"):t.getStory("proyects","published")}))},methods:{getStory:function(t,e){var r=this;it.get("cdn/stories/"+t,{version:e}).then((function(t){r.story=t.data.story.content})).catch((function(t){console.log(t)})).finally((function(){r.isLoading=!1}))}}},lt=ct,ut=Object(m["a"])(lt,Y,K,!1,null,null,null),dt=ut.exports,mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-md skills"},[r("h1",{staticClass:"display-md-4 h1 font-weight-bold text-uppercase my-5 text-black skills__title"},[t._v(" Web Development ")]),r("div",{staticClass:"d-flex justify-content-around flex-wrap w-100"},t._l(t.web,(function(t,e){return r("px-skillcard",{key:e,staticClass:"mb-3",attrs:{name:t.name,items:t.items}})})),1),r("h1",{staticClass:"display-md-4 h1 font-weight-bold text-uppercase my-5 text-black skills__title"},[t._v(" Tech & Metodologies ")]),r("div",{staticClass:"d-flex justify-content-around flex-wrap w-100"},t._l(t.tech,(function(t,e){return r("px-skillcard",{key:e,staticClass:"mb-3",attrs:{name:t.name,items:t.items}})})),1)])},pt=[],ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gradient-secondary rounded skills__card p-3 mx-4"},[r("div",{staticClass:"skills__card__svg"},[r("img",{attrs:{src:t.url,alt:t.alt}})]),r("div",{staticClass:"skills__card__content pt-4"},[r("ul",t._l(t.items,(function(e,n){return r("li",{key:n,staticClass:"text-white h6"},[t._v(" "+t._s(e)+" ")])})),0)])])},_t=[],ht=(r("b0c0"),{name:"PxSkillCard",props:{name:String,items:Array},computed:{url:function(){return r("31e8")("./"+this.name+".svg")},alt:function(){return this.name+" SVG"}}}),vt=ht,gt=Object(m["a"])(vt,ft,_t,!1,null,null,null),bt=gt.exports,Ct={name:"Skills",components:{PxSkillcard:bt},data:function(){return{web:[{name:"html",items:["Layout","Semantic HTML","HTML 5","Forms and Validation"]},{name:"css",items:["Basics","Flexbox","Grid Layout","CSS 3","Responsive"]},{name:"javascript",items:["DOM","ES6","OOP","Libraries","APIS"]}],tech:[{name:"vue",items:["Core","CLI","Router","Transitions","Components","Nuxt"]},{name:"bem",items:["Block","Element","Modifier","Clean CSS"]},{name:"bulma",items:["Helpers","Modifiers","Elements","Buefy","Customize"]},{name:"bootstrap",items:["Content","Components","Utilities","Customize","Responsive"]}]}}},xt=Ct,yt=Object(m["a"])(xt,mt,pt,!1,null,null,null),wt=yt.exports,kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"certs container"},[t.isLoading?r("vue-loaders-pacman",{staticClass:"certs__loader",attrs:{color:"#2AB579",scale:"1.5"}}):t._e(),t.isLoading?t._e():r("div",[r("h1",{staticClass:"display-md-4 h1 font-weight-bold text-uppercase my-5 text-black certs__title"},[t._v(" 📃 Platzi Certifications ")]),r("h2",{staticClass:"h1-md h2 font-weight-bold text-uppercase mb-5 text-black certs__title"},[t._v(" 🚀 Platzi Careers ")]),r("div",{staticClass:"certs__careers"},t._l(t.careers,(function(t,e){return r("px-certs",{key:e,attrs:{title:t.title,logo:t.logo,diploma:t.diploma_link}})})),1),r("h2",{staticClass:"h1-md h2 font-weight-bold text-uppercase mb-5 text-black certs__title"},[t._v(" 📂 Platzi Courses ")]),r("div",{staticClass:"certs__careers"},t._l(t.courses,(function(t,e){return r("px-certs",{key:e,attrs:{title:t.title,badge:t.badge,course:t.url,career:t.career,diploma:t.diploma_link}})})),1)])],1)},jt=[],St="https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@ricardo-boraure";function Ot(){return fetch(St).then((function(t){return t.json()})).then((function(t){return t.userData})).catch((function(t){return console.log(t)}))}var Et,Pt,Bt={fetchCourses:Ot},Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3 certs__card"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-4 certs__card__img"},[r("a",{attrs:{href:t.diplomaUrl,target:"_blank"}},[r("img",{staticClass:"card-img",attrs:{src:t.img,alt:t.title}})])]),r("div",{staticClass:"col-8"},[r("div",{staticClass:"card-body"},[t.course?r("a",{attrs:{href:t.courseUrl,target:"_blank",rel:"noopener noreferrer"}},[r("h5",{staticClass:"card-title text-primary"},[t._v(t._s(t.title))])]):t._e(),t.course?t._e():r("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t.career?r("p",{staticClass:"card-text text-muted"},[t._v("Career: "+t._s(t.career))]):t._e(),r("a",{attrs:{href:t.diplomaUrl,target:"blank"}},[r("p",{staticClass:"card-text text-primary"},[t._v("Diploma")])])])])])])},Tt=[],$t={name:"Pxcerts",data:function(){return{base:"https://platzi.com"}},props:{title:String,logo:String,badge:String,diploma:String,course:String,career:String},computed:{img:function(){return this.badge?this.badge:this.logo},diplomaUrl:function(){return this.base+this.diploma},courseUrl:function(){return this.base+this.course}}},It=$t,Mt=Object(m["a"])(It,Lt,Tt,!1,null,null,null),Rt=Mt.exports,Ut={name:"Certifications",data:function(){return{careers:Array,courses:Array,isLoading:!0}},created:function(){var t=this;this.isLoading=!0;var e=Bt.fetchCourses();e.then((function(e){t.careers=e.careers,t.courses=e.courses})),e.finally((function(){return t.isLoading=!1}))},components:{PxCerts:Rt}},Dt=Ut,At=Object(m["a"])(Dt,kt,jt,!1,null,null,null),Nt=At.exports,zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-md contact"},[r("h1",{staticClass:"display-md-4 h1 font-weight-bold contact__title"},[t._v(" 👇🏼 Need to contact me? ")]),r("ul",{staticClass:"my-5 contact__list"},t._l(t.profiles,(function(e,n){return r("li",{key:n},[r("h3",{staticClass:"text-primary"},[t._v(t._s(e.name))]),r("a",{attrs:{href:e.url,target:"_blank"}},[r("h4",{staticClass:"text-muted"},[t._v("- "+t._s(e.user))])])])})),0)])},Ft=[],Ht={name:"Contact",data:function(){return{profiles:[{name:"📧 Gmail (recomended)",user:"ricardoboraure@gmail.com",url:"mailto:ricardoboraure@gmail.com"},{name:"🐤 Twitter",user:"RBoraure",url:"https://twitter.com/rboraure"},{name:"📸 Instagram",user:"RBoraure",url:"https://instagram.com/rboraure"},{name:"👨🏼‍💻 Github",user:"RBoraure0205",url:"https://github.com/rboraure0205"}]}}},Vt=Ht,Jt=Object(m["a"])(Vt,zt,Ft,!1,null,null,null),Gt=Jt.exports,Wt={},Yt=Object(m["a"])(Wt,Et,Pt,!1,null,null,null),Kt=Yt.exports;n["default"].use(w["a"]);var Zt=[{path:"/",name:"Home",component:W},{path:"/proyects",name:"Proyects",component:dt},{path:"/skills",name:"Skill",component:wt},{path:"/certs",name:"Certifications",component:Nt},{path:"/contact",name:"Contact",component:Gt},{path:"*",name:"Error",component:Kt}],qt=new w["a"]({mode:"history",base:"/",routes:Zt}),Qt=qt,Xt=(r("cc73"),r("3d3f")),te=r.n(Xt),ee=r("9747"),re=r.n(ee);n["default"].use(re.a),n["default"].use(te.a),n["default"].config.productionTip=!1,new n["default"]({router:Qt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"72cb":function(t,e,r){t.exports=r.p+"img/Wave.80741c30.png"},"893a":function(t,e,r){t.exports=r.p+"img/bulma.5bedb74f.svg"},"8d2c":function(t,e,r){t.exports=r.p+"img/bootstrap.71e42b5a.svg"},9341:function(t,e,r){t.exports=r.p+"img/rboraure.327c8c91.jpg"},"9c0c":function(t,e,r){},a376:function(t,e,r){t.exports=r.p+"img/html.ca8f32ab.svg"},c81b:function(t,e,r){t.exports=r.p+"img/bem.e8e1def1.svg"},ca83:function(t,e,r){t.exports=r.p+"img/css.aacd6589.svg"},d3b5:function(t,e,r){"use strict";var n=r("3115"),a=r.n(n);a.a}});
//# sourceMappingURL=app.caa55bc5.js.map