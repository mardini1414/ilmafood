"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[619,246],{6619:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(7294),l=a(4246),c=a(1636),r=a(9880);const s=function(e){var t=e.id,a=e.image,s=e.name,m=e.price,i=e.discounts,d=e.category,o=e.stock,u=e.description,p=(0,c.qt)().props.flash,E=(0,c.cI)({productId:t,quantity:1}),f=E.post,N=E.data,x=E.setData;return n.createElement(l.default,null,n.createElement(c.Fb,null,n.createElement("title",null,s)),n.createElement("div",{className:"p-2 w-100",style:{height:"100vh",fontSize:"1rem"}},n.createElement("div",null,n.createElement("img",{src:"/storage/".concat(a),alt:s,width:"100%",height:200,className:"image-fit rounded"})),p.message&&n.createElement("div",{className:"alert alert-warning mt-2"},p.message),n.createElement("div",{className:"my-2 bg-white p-1 rounded"},n.createElement("div",{className:"d-flex justify-content-between"},n.createElement("h6",{className:"text-dark fw-bold"},"Detail Produk"),n.createElement("div",{className:"d-flex"},n.createElement("div",{className:"px-2 py-0 text-muted border pointer rounded-start",onClick:function(){x("quantity",N.quantity-1),N.quantity<=1&&x("quantity",1)}},"-"),n.createElement("div",{className:"px-2 py-0 text-muted border-top border-bottom"},N.quantity),n.createElement("div",{className:"px-2 py-0 text-muted border pointer rounded-end",onClick:function(){x("quantity",N.quantity+1),N.quantity>=o&&x("quantity",o)}},"+"))),n.createElement("span",{className:"d-block text-muted pb-2"},s),n.createElement("div",{className:"d-flex"},n.createElement("div",{className:"w-50"},n.createElement("span",{className:"d-block py-1 text-muted"},"Harga"),n.createElement("span",{className:"d-block py-1 text-muted"},"Potongan"),n.createElement("span",{className:"d-block py-1 text-muted"},"Kategori"),n.createElement("span",{className:"d-block py-1 text-muted"},"Stok")),n.createElement("div",{className:"w-50"},n.createElement("span",{className:"d-block py-1 text-dark"},(0,r.Z)(m)),n.createElement("span",{className:"d-block py-1 text-dark"},(0,r.Z)(i)),n.createElement("span",{className:"d-block py-1 text-dark"},d),n.createElement("span",{className:"d-block py-1 text-dark"},o)))),n.createElement("div",{className:"bg-white p-1 rounded"},n.createElement("h6",{className:"text-dark fw-bold"},"Deskripsi"),n.createElement("p",{className:"text-muted",style:{paddingBottom:"6rem"}},u))),n.createElement("div",{className:"position-fixed start-50 translate-middle bg-white rounded-pill shadow d-flex align-items-center",style:{bottom:"3.5rem"}},n.createElement("button",{className:"btn bg-orange rounded-pill text-light text-small px-5",onClick:function(){f("/cart")}},n.createElement("i",{className:"fa-solid fa-cart-plus"})," Tambah")))}},4246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294),l=a(1636);const c=function(){var e=(0,l.qt)().url;return n.createElement("div",{className:"w-100 position-fixed bottom-0 start-50 translate-middle-x"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"navigation col-12 bg-white d-flex align-items-center justify-content-around border-top",style:{maxWidth:414}},n.createElement(l.rU,{href:"/"},n.createElement("i",{className:"fa-solid fa-house ".concat("/"==e?"text-orange":"text-muted")})),n.createElement(l.rU,{href:"/order"},n.createElement("i",{className:"fa-solid fa-rectangle-list ".concat("/order"==e?"text-orange":"text-muted")})),n.createElement(l.rU,{href:"/chat"},n.createElement("i",{className:"fa-solid fa-message ".concat("/chat"==e?"text-orange":"text-muted")})),n.createElement(l.rU,{href:"/profile"},n.createElement("i",{className:"fa-solid fa-user ".concat("/profile"==e?"text-orange":"text-muted")}))))))};const r=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-sm-4 bg-light px-0 w-100",style:{maxWidth:414}},n.createElement("div",{id:"main",className:"w-100",style:{height:"min-content",minHeight:"100vh"}},t)))),n.createElement(c,null))}},9880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(e){return new Intl.NumberFormat("IN",{maximumSignificantDigits:3}).format(e)}}}]);