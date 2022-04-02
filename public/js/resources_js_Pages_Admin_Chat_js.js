"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Chat_js"],{

/***/ "./resources/js/Pages/Admin/Chat.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Admin/Chat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout */ "./resources/js/Pages/Admin/DashboardLayout.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");





function AdminChat(props) {
  var users = props.users,
      messages = props.messages,
      id = props.id,
      user_id = props.user_id;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    message: ''
  }),
      post = _useForm.post,
      data = _useForm.data,
      setData = _useForm.setData,
      reset = _useForm.reset;

  var bodyMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  function sendMessage() {
    post("/dashboard/chat/".concat(id), {
      onSuccess: reset(),
      preserveScroll: true,
      headers: {
        'X-Socket-ID': window.Echo.socketId()
      }
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.Echo["private"]("message.".concat(user_id)).listen('CreateMessage', function (e) {
      messages.push(e.message);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.reload();
    });
    bodyMessage.current.scrollTo(0, bodyMessage.current.scrollHeight);
  }, [messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 px-0",
    style: {
      overflowY: 'scroll',
      height: '100vh'
    }
  }, users.map(function (user, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
      href: "/dashboard/chat/".concat(user.id),
      className: "text-decoration-none",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2 bg-white rounded border-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: user.avatar !== null ? "/storage/".concat(user.avatar) : '/images/avatar.png',
      alt: user,
      width: 40,
      height: 40,
      className: "image-fit rounded-circle"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "text-dark ms-2"
    }, user.name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: bodyMessage,
    className: "col-md-8 scroll-slide",
    style: {
      overflowY: 'scroll',
      height: '100vh'
    }
  }, messages && messages.map(function (message, index) {
    if (message.from_id !== 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "w-100 py-1 px-2 d-flex",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-2 bg-secondary text-light rounded",
        style: {
          maxWidth: 200
        }
      }, message.message));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "w-100 py-1 px-2 d-flex justify-content-end",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-2 bg-primary text-light rounded",
        style: {
          maxWidth: 200
        }
      }, message.message));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6 py-2 position-fixed d-flex gap-2 bottom-0",
    style: {
      right: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "mulai mengetik",
    value: data.message,
    onChange: function onChange(e) {
      return setData('message', e.target.value);
    },
    className: "form-control form-control-sm border border-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: sendMessage,
    className: "pointer bg-primary rounded d-flex justify-content-center align-items-center p-0",
    style: {
      width: 32,
      height: 30
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-paper-plane text-light",
    style: {
      fontSize: '0.8rem'
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminChat);

/***/ }),

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



function DashboardLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
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
    className: "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-sticky pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav-link",
    "aria-current": "page",
    href: "/dashboard"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav-link",
    href: "/dashboard/product"
  }, "Produk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav-link",
    href: "/dashboard/order"
  }, "Orderan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav-link",
    href: "/dashboard/chat"
  }, "Pesan"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10"
  }, children))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);

/***/ })

}]);