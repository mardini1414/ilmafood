"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[503,65],{2065:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var l=t(7294),n=t(1636);const r=function(e){var a=e.children;return l.createElement(l.Fragment,null,l.createElement("header",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},l.createElement("a",{className:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"#"},"ILMAFOOD"),l.createElement("div",{className:"d-flex"},l.createElement("div",null,l.createElement("span",{className:"text-white me-1"},"Admin"),l.createElement("i",{className:"fa-solid fa-circle-user text-white"})),l.createElement(n.rU,{href:"/logout",className:"mx-3 text-decoration-none"},l.createElement("span",{className:"text-white me-1"},"Logout"),l.createElement("i",{className:"fa-solid fa-arrow-right-from-bracket text-white"})))),l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},l.createElement("div",{className:"position-sticky pt-3"},l.createElement("ul",{className:"nav flex-column"},l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{className:"nav-link","aria-current":"page",href:"/dashboard"},"Dashboard")),l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{className:"nav-link",href:"/dashboard/product"},"Produk")),l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{className:"nav-link",href:"/dashboard/order"},"Orderan")),l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{className:"nav-link",href:"/dashboard/chat"},"Pesan"))))),l.createElement("main",{className:"col-md-9 ms-sm-auto col-lg-10"},a))))}},1503:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var l=t(7294),n=t(2065),r=t(4656),c=t(1636),m=t(9578);const s=function(e){var a=e.orders,t=a.data,s=a.links;return l.createElement(n.default,null,l.createElement("table",{className:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{scope:"col"},"No"),l.createElement("th",{scope:"col"},"Id pesanan"),l.createElement("th",{scope:"col"},"Nama"),l.createElement("th",{scope:"col"},"No telepon"),l.createElement("th",{scope:"col"},"Status"),l.createElement("th",{scope:"col"},"Tanggal/waktu"),l.createElement("th",{scope:"col"},"Detail"))),l.createElement("tbody",null,t.map((function(e,a){return a+=1,l.createElement("tr",{key:a},l.createElement("th",{scope:"row"},a),l.createElement("td",null,e.delivery_id),l.createElement("td",null,e.user_name),l.createElement("td",null,e.user_phone_number),l.createElement("td",null,e.status),l.createElement("td",null,(0,m.Z)(e.created_at)),l.createElement("td",null,l.createElement(c.rU,{href:"/dashboard/order/".concat(e.id),className:"btn btn-sm btn-primary"},"Lihat")))})))),l.createElement(r.Z,{links:s}))}},4656:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(7294),n=t(1636),r=function(e){var a=e.active,t=e.label,r=e.url;return l.createElement("div",{className:"page-item ".concat(a?"active":"")},l.createElement(n.rU,{className:"page-link",href:r},l.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))},c=function(e){var a=e.label;return l.createElement("div",{className:"page-item"},l.createElement("div",{className:"page-link text-muted bg-light",dangerouslySetInnerHTML:{__html:a}}))};const m=function(e){var a=e.links,t=void 0===a?[]:a;return 3===t.length?null:l.createElement("div",{className:"pagination"},t.map((function(e){var a=e.active,t=e.label,n=e.url;return null===n?l.createElement(c,{key:t,label:t}):l.createElement(r,{key:t,label:t,active:a,url:n})})))}},9578:(e,a,t)=>{t.d(a,{Z:()=>l});const l=function(e){return e.replace("T"," ").slice(0,19)}}}]);