"use strict";(self.webpackChunkquickpay_docs=self.webpackChunkquickpay_docs||[]).push([[571],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||y[d]||o;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:3},p="OperationTypes",i={unversionedId:"features/types/operation-types",id:"features/types/operation-types",title:"OperationTypes",description:"A backed enum containing the available operation types",source:"@site/docs/features/types/operation-types.md",sourceDirName:"features/types",slug:"/features/types/operation-types",permalink:"/quickpay-docs/docs/features/types/operation-types",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PaymentLinkInput",permalink:"/quickpay-docs/docs/features/types/payment-link-input"},next:{title:"StatusCodes",permalink:"/quickpay-docs/docs/features/types/status-codes"}},l={},s=[{value:"Values",id:"values",level:2},{value:"Usage",id:"usage",level:2}],u={toc:s},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"operationtypes"},"OperationTypes"),(0,a.yg)("p",null,"A ",(0,a.yg)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.enumerations.backed.php"},"backed enum")," containing the available operation types\nfrom a Quickpay callback."),(0,a.yg)("h2",{id:"values"},"Values"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"AUTHORIZE"),(0,a.yg)("td",{parentName:"tr",align:null},"'authorize'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"CAPTURE"),(0,a.yg)("td",{parentName:"tr",align:null},"'capture'")))),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"To get the request operation type in enum format, use the following code below to add your custom logic."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The direct value can also be used and compared with the enum value, but it is not recommended as it is less strict.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"$data = $request->getAttribute('quickpay');\n\nif ($data['operationType'] === OperationTypes::CAPTURE && $data['accepted']) {\n    // do something on accepted capture operation\n}\n")))}y.isMDXComponent=!0}}]);