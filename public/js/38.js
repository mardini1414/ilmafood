"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38,212],{6212:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(7294),n=a(1636);const l=function(e){var t=e.title,a=e.link,l=(0,n.qt)().url;return r.createElement(n.rU,{className:"nav-link ".concat(l===a?"text-light":"text-secondary"),href:a},t)};const c=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement("header",{className:"navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"},r.createElement("a",{className:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"#"},"ILMAFOOD"),r.createElement("div",{className:"d-flex"},r.createElement("div",null,r.createElement("span",{className:"text-white me-1"},"Admin"),r.createElement("i",{className:"fa-solid fa-circle-user text-white"})),r.createElement(n.rU,{href:"/logout",className:"mx-3 text-decoration-none"},r.createElement("span",{className:"text-white me-1"},"Logout"),r.createElement("i",{className:"fa-solid fa-arrow-right-from-bracket text-white"})))),r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row"},r.createElement("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"},r.createElement("div",{className:"position-sticky pt-3"},r.createElement("ul",{className:"nav flex-column"},r.createElement("li",{className:"nav-item"},r.createElement(l,{title:"Dashboard",link:"/dashboard"})),r.createElement("li",{className:"nav-item"},r.createElement(l,{title:"Produk",link:"/dashboard/product"})),r.createElement("li",{className:"nav-item"},r.createElement(l,{title:"Pesanan",link:"/dashboard/order"})),r.createElement("li",{className:"nav-item"},r.createElement(l,{title:"Pesan",link:"/dashboard/chat"})),r.createElement("li",{className:"nav-item"},r.createElement(l,{title:"Laporan",link:"/dashboard/report"}))))),r.createElement("main",{className:"col-md-9 ms-sm-auto col-lg-10"},t))))}},6038:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(7294),n=a(6212),l=a(1636);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,l=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,n=e}finally{try{c||null==a.return||a.return()}finally{if(o)throw n}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const s=function(){var e=c((0,r.useState)("2022-01"),2),t=e[0],a=e[1];return(0,r.useEffect)((function(){console.log(t.slice(5,7))})),r.createElement(n.default,null,r.createElement(l.Fb,null,r.createElement("title",null,"Laporan")),r.createElement("div",{className:"col-4 py-2 d-grid gap-2"},r.createElement("label",{htmlFor:"month"},"Pilih bulan dan tahun"),r.createElement("input",{id:"month",type:"month",value:t,className:"form-control",onChange:function(e){return a(e.target.value)}}),r.createElement("a",{href:"/dashboard/report/".concat(t.slice(0,4),"/").concat(t.slice(5,7)),className:"btn btn-sm btn-success"},"Buat Laporan")))}}}]);