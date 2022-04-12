"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_DashboardLayout_js"],{

/***/ "./resources/js/Pages/Admin/DashboardLayout.js":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/DashboardLayout.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavLink */ "./resources/js/components/NavLink.js");




function DashboardLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "navbar-brand col-md-3 col-lg-2 me-0 px-3",
    href: "#"
  }, "ILMAFOOD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-white me-1"
  }, "Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-circle-user text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/logout",
    className: "mx-3 text-decoration-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-white me-1"
  }, "Logout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-arrow-right-from-bracket text-white"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "sidebarMenu",
    className: "col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-sticky pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Dashboard",
    link: "/dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Produk",
    link: "/dashboard/product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pesanan",
    link: "/dashboard/order"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pesan",
    link: "/dashboard/chat"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Laporan",
    link: "/dashboard/report"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10"
  }, children))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);

/***/ }),

/***/ "./resources/js/components/NavLink.js":
/*!********************************************!*\
  !*** ./resources/js/components/NavLink.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");



function NavLink(_ref) {
  var title = _ref.title,
      link = _ref.link;

  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)(),
      url = _usePage.url;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav-link ".concat(url === link ? 'text-light' : 'text-secondary'),
    href: link
  }, title);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ })

}]);