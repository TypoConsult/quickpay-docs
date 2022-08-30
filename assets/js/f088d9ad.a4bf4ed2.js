"use strict";(self.webpackChunkquickpay_docs=self.webpackChunkquickpay_docs||[]).push([[440],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),i=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=i(a),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8175:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},l="StatusCodes",s={unversionedId:"features/types/status-codes",id:"features/types/status-codes",title:"StatusCodes",description:"A backed enum containing the available status codes",source:"@site/docs/features/types/status-codes.md",sourceDirName:"features/types",slug:"/features/types/status-codes",permalink:"/quickpay-docs/docs/features/types/status-codes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OperationTypes",permalink:"/quickpay-docs/docs/features/types/operation-types"},next:{title:"Callback",permalink:"/quickpay-docs/docs/features/callback"}},u={},i=[{value:"Values",id:"values",level:2},{value:"Usage",id:"usage",level:2}],p={toc:i};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statuscodes"},"StatusCodes"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.enumerations.backed.php"},"backed enum")," containing the available status codes\nfrom a Quickpay callback."),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APPROVED"),(0,r.kt)("td",{parentName:"tr",align:null},"20000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WAITING_APPROVAL"),(0,r.kt)("td",{parentName:"tr",align:null},"20200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SECURE_3D_REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"30100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REJECTED_BY_ACQUIRER"),(0,r.kt)("td",{parentName:"tr",align:null},"40000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST_DATA_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"40001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AUTHORIZATION_EXPIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"40002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABORTED"),(0,r.kt)("td",{parentName:"tr",align:null},"40003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GATEWAY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"50000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACQUIRER_COMMUNICATION_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"50300")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To get the request status code in enum format, use the following code below to add your custom logic."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The direct value can also be used and compared with the enum value, but it is not recommended as it is less strict.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$data = $request->getAttribute('quickpay');\n$statusCode = StatusCodes::from($data['statusCode']);\n\nif ($statusCode === StatusCodes::APPROVED && $data['accepted']) {\n    // do something on accepted and approved operation\n}\n")))}c.isMDXComponent=!0}}]);