"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_Cart_js"],{

/***/ "./resources/js/Pages/MainLayout.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/MainLayout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./resources/js/components/Navigation.js");



function MainLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-4 bg-light px-0 w-100",
    style: {
      maxWidth: 414
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-100"
  }, children)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);

/***/ }),

/***/ "./resources/js/Pages/User/Cart.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/User/Cart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainLayout */ "./resources/js/Pages/MainLayout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");




function Cart(props) {
  var carts = props.carts,
      total = props.total,
      shippingCost = props.shippingCost,
      totalPayment = props.totalPayment;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)(),
      destroy = _useForm["delete"],
      post = _useForm.post;

  var flash = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.flash;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Keranjang saya")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-2",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rounded"
  }, carts.map(function (cart, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "bg-white d-flex rounded mb-2 position-relative",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/storage/".concat(cart.product.image),
      alt: cart.product.name,
      width: 90,
      height: 90,
      className: "image-fit rounded"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-1 d-flex flex-column justify-content-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "text-muted"
    }, cart.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "d-block text-danger text-decoration-line-through"
    }, "Rp.", cart.product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
      className: "d-block text-dark"
    }, "Rp.", cart.product.price - cart.product.discounts))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "position-absolute text-muted",
      style: {
        bottom: 5,
        right: 5
      }
    }, cart.quantity));
  }), flash.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "alert alert-warning mt-2"
  }, flash.message, " cek", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "/profile",
    className: "text-warning"
  }, "disini")), carts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white d-flex justify-content-between p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-dark"
  }, "Harga total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-muted"
  }, "Rp.", total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white d-flex justify-content-between p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-dark"
  }, "Ongkos Kirim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-muted"
  }, "Rp.", shippingCost)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white rounded d-flex justify-content-between py-3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "text-dark"
  }, "total pembayaran"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "text-orange"
  }, "Rp.", totalPayment))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-end pt-3 px-1",
    style: {
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-sm btn-danger me-2",
    onClick: function onClick() {
      return destroy('/cart');
    }
  }, "Hapus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-sm bg-orange text-light",
    onClick: function onClick() {
      return post('/order');
    }
  }, "Pesan"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-cart-shopping text-muted",
    style: {
      fontSize: '8rem'
    }
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./resources/js/components/Navigation.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Navigation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");



function Navigation() {
  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)(),
      url = _usePage.url;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-100 position-fixed bottom-0 start-50 translate-middle-x"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navigation col-12 bg-white d-flex align-items-center justify-content-around border-top",
    style: {
      maxWidth: 414
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-house ".concat(url == '/' ? 'text-orange' : 'text-muted')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/order"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-rectangle-list ".concat(url == '/order' ? 'text-orange' : 'text-muted')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/chat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-message ".concat(url == '/chat' ? 'text-orange' : 'text-muted')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-user ".concat(url == '/profile' ? 'text-orange' : 'text-muted')
  }))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ })

}]);