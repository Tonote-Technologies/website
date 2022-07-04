exports.ids = [20,3,8,11,18];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audit.svg": 34,
	"./basic-plan.svg": 35,
	"./business-plan.svg": 36,
	"./clock.svg": 37,
	"./dropdown-down.svg": 38,
	"./idea.svg": 39,
	"./income.svg": 40,
	"./kyc.svg": 41,
	"./mark-stamp.svg": 42,
	"./mark.svg": 43,
	"./market-place.svg": 44,
	"./onboarding.svg": 45,
	"./pro-plan.svg": 46,
	"./security.svg": 47,
	"./time.svg": 48,
	"./world.svg": 49
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 101;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("786166af", content, true, context)
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/TextCard/TextCard.vue?vue&type=template&id=14bdd068&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text_card flex flex-col"},[_vm._ssrNode(((_vm.icon)?("<div"+(_vm._ssrStyle(null,_vm.iconStyle, null))+"><img"+(_vm._ssrAttr("src",__webpack_require__(101)("./" + _vm.icon)))+"></div>"):"<!---->")+" "+((_vm.subheader)?("<p class=\"textcard_subheader\""+(_vm._ssrStyle(null,_vm.subStyle, null))+">"+_vm._ssrEscape("\n    "+_vm._s(_vm.subheader)+"\n  ")+"</p>"):"<!---->")+" "+((_vm.header)?("<h3"+(_vm._ssrClass("textcard_header",[{'font-NeueHelvetica': !_vm.icon}]))+(_vm._ssrStyle(null,_vm.headerStyle, null))+">"+_vm._ssrEscape("\n    "+_vm._s(_vm.header)+"\n  ")+"</h3>"):"<!---->")+" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,_vm.mainStyle, null))+">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<footer"+(_vm._ssrClass(null,_vm.footerClass))+">","</footer>",[_vm._t("footer")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TextCard/TextCard.vue?vue&type=template&id=14bdd068&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/TextCard/textCard.js?vue&type=script&lang=js&
/* harmony default export */ var textCardvue_type_script_lang_js_ = ({
  name: 'TextCard',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: Object,
      default: () => {}
    },
    mainStyle: {
      type: Object,
      default: () => {}
    },
    headerStyle: {
      type: Object,
      default: () => {}
    },
    subStyle: {
      type: Object,
      default: () => {}
    },
    subheader: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: '',
      required: true
    },
    footerClass: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/TextCard/textCard.js?vue&type=script&lang=js&
 /* harmony default export */ var TextCard_textCardvue_type_script_lang_js_ = (textCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TextCard/TextCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  TextCard_textCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "677bb2f2"
  
)

/* harmony default export */ var TextCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(50).default})


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/BannerAlert/BannerAlert.vue?vue&type=template&id=3597a5aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner_alert rounded-full bg-[#F3F3F3] flex justify-between items-center w-[259.2px] h-[24.05px] lg:w-[355.67px] lg:h-[33px]"},[_vm._ssrNode("<div class=\"flex items-center ml-[8.6px]\"><span class=\"w-[32.8px] h-[14.47px] lg:w-[45.01px] lg:h-[19.86px] bg-[#2FA36B] rounded-xl flex justify-center items-center text-[7.28767px] lg:text-[10px] text-white\">New</span> <p class=\"text-[8.68195px] lg:text-[11.9132px] ml-[4.58px] lg:ml-[6.28px]\">\n      You can now use ToNote for your business\n    </p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt class=\"mr-[8.6px] lg:mr-[11.08px]\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BannerAlert/BannerAlert.vue?vue&type=template&id=3597a5aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/BannerAlert/bannerAlert.js?vue&type=script&lang=js&
/* harmony default export */ var bannerAlertvue_type_script_lang_js_ = ({
  name: 'BannerAlert',
  props: {}
});
// CONCATENATED MODULE: ./components/BannerAlert/bannerAlert.js?vue&type=script&lang=js&
 /* harmony default export */ var BannerAlert_bannerAlertvue_type_script_lang_js_ = (bannerAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BannerAlert/BannerAlert.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BannerAlert_bannerAlertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "53ef6198"
  
)

/* harmony default export */ var BannerAlert = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ToNoteSignatureAnimationEase.gif": 109,
	"./signature.gif": 110,
	"./stamp.gif": 111,
	"./unlock.gif": 112
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 108;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ToNoteSignatureAnimationEase.992ddaa.gif";

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/signature.6b54f4a.gif";

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stamp.1a5879c.gif";

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unlock.ba749f5.gif";

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero_left>h2{font-family:\"NeueHelvetica\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/HeroBanner/HeroBanner.vue?vue&type=template&id=6095c205&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero flex flex-col items-center lg:items-start lg:flex-row lg:justify-center mt-10 px-4 lg:px-0"},[_vm._ssrNode("<div"+(_vm._ssrClass("hero_left flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 lg:translate-y-[80px] max-w-[582px]",_vm.heroLeftClass))+">","</div>",[(_vm.bannerAlert)?_vm._ssrNode("<div>","</div>",[_c('banner-alert')],1):_vm._e(),_vm._ssrNode(" <h2"+(_vm._ssrClass("heroTitle leading-[98%] tracking-[-0.015em] text-[#03060B] text-[34.9808px] lg:text-[52.3502px] font-bold mt-[14px] mb-[23px] w-full text-center lg:text-left lg:w-[406px] max-w-[582px]",_vm.headerClass))+">"+_vm._ssrEscape("\n      "+_vm._s(_vm.heading)+"\n    ")+"</h2> <p"+(_vm._ssrClass("heroBody w-full md:w-[323px] lg:w-[499px] 2xl:w-[582px] px-5 lg:px-0 lg:pr-14 text-[11.6603px] lg:text-[18px] text-[#626262] mb-[28px] leading-[170.5%] lg:leading-[193.5%] max-w-[582px]",_vm.bodyClass))+">"+_vm._ssrEscape("\n      "+_vm._s(_vm.subHeading)+"\n    ")+"</p> "),_vm._ssrNode("<div class=\"btn_fadein flex space-y-1.5 lg:space-x-1.5 lg:space-y-0 flex-col lg:flex-row\">","</div>",[_vm._t("bannerbtn")],2)],2),_vm._ssrNode(" <div class=\"hero_right lg:ml-[0px] mt-[29px] lg:mt-0 w-full md:w-[350px] lg:h-[620.25px] lg:w-[800px] xl:w-[827px] 2xl:w-[827px] overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(108)("./" + _vm.illustration)))+" alt=\"signature anime\" class=\"w-full h-full object-cover\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroBanner/HeroBanner.vue?vue&type=template&id=6095c205&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/HeroBanner/hero.js?vue&type=script&lang=js&
/* harmony default export */ var herovue_type_script_lang_js_ = ({
  name: 'HeroBanner',
  props: {
    heading: {
      type: String,
      required: true
    },
    subHeading: {
      type: String,
      required: true
    },
    headerClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    heroLeftClass: {
      type: String,
      default: ''
    },
    illustration: {
      type: String,
      default: 'signature.gif'
    },
    bannerAlert: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./components/HeroBanner/hero.js?vue&type=script&lang=js&
 /* harmony default export */ var HeroBanner_herovue_type_script_lang_js_ = (herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroBanner/HeroBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HeroBanner_herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4b92fd52"
  
)

/* harmony default export */ var HeroBanner = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BannerAlert: __webpack_require__(107).default})


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Daniel.c912cd6.jpeg";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Fikayo.c336aac.jpeg";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Laide.0907906.jpeg";

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Shafi.e5eee4a.jpeg";

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1ce2680f", content, true, context)
};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.e1d6490.jpeg";

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Daniel.jpeg": 135,
	"./Fikayo.jpeg": 136,
	"./Laide.jpeg": 137,
	"./Shafi.jpeg": 138
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 174;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-card_info[data-v-4cb405d6]{transition:all 1s ease-in-out}.profile-card:hover .profile-card_info[data-v-4cb405d6]{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ProfileCard/ProfileCard.vue?vue&type=template&id=4cb405d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-card relative lg:w-[302px] overflow-hidden"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(174)("./" + _vm.image)))+" alt class=\"w-full h-full\" data-v-4cb405d6> <div class=\"profile-card_info opacity-0 absolute top-0 bottom-0 left-0 right-0 bg-[#16110D] text-white z-20\" data-v-4cb405d6><div class=\"ml-[20px] mt-[26px] text-[18px]\" data-v-4cb405d6><p class=\"name\" data-v-4cb405d6>"+_vm._ssrEscape("\n        "+_vm._s(_vm.name)+"\n      ")+"</p> <p class=\"role mt-3\" data-v-4cb405d6>"+_vm._ssrEscape("\n        "+_vm._s(_vm.role)+"\n      ")+"</p> <a"+(_vm._ssrAttr("href",_vm.linkedinurl))+" target=\"_blank\" class=\"mt-2\" data-v-4cb405d6><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"LinkedIn icon\" data-v-4cb405d6></a></div></div> <div class=\"tag absolute left-5 bottom-4 w-[103px] h-[47px] bg-white flex justify-center items-center text-sm\" data-v-4cb405d6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.prefName)+"\n  ")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProfileCard/ProfileCard.vue?vue&type=template&id=4cb405d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/ProfileCard/profileCard.js?vue&type=script&lang=js&
/* harmony default export */ var profileCardvue_type_script_lang_js_ = ({
  name: 'ProfileCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefName: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    linkedinurl: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/ProfileCard/profileCard.js?vue&type=script&lang=js&
 /* harmony default export */ var ProfileCard_profileCardvue_type_script_lang_js_ = (profileCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProfileCard/ProfileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ProfileCard_profileCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cb405d6",
  "80c6c374"
  
)

/* harmony default export */ var ProfileCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=44c25686&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<main class=\"mb-[137px]\">","</main>",[_c('hero-banner',{attrs:{"heading":"At ToNote, we are making it easy for businesses and individuals to\n            sign documents, swear affidavits or certify essential documents,\n            virtually.","header-class":"lg:w-[768px]","body-class":"lg:w-[743px] lg:pr-2","sub-heading":"Our vision is to make trust easy for 456 million transacting\n            Africans. One of the key figureheads in fostering trust between\n            parties is a Notary Public. Our market place feature connects\n            customers with nationally certified notaries public, who can\n            notarise essential documents, 100% online and in real-time.","banner-alert":false,"hero-left-class":"lg:translate-y-[20px] 2xl:ml-[0px]"}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper\">","</section>",[_vm._ssrNode("<div class=\"about_image mt-[46px] lg:mt-[54px]\"><img"+(_vm._ssrAttr("src",__webpack_require__(173)))+" alt class=\"w-full h-full max-w-none\"></div> "),_vm._ssrNode("<div class=\"teams mt-[44px] lg:mt-[77px] text-center lg:text-left\">","</div>",[_c('text-card',{attrs:{"header":"Our Team","main-style":{
            'font-size': '18px',
            margin: '18.49px 0',
            'line-height': '193.5%',
          },"header-style":{
            'font-size': '23.5135px',
            'letter-spacing': '-0.015em',
            'line-height': '98%',
          }}},[_c('p',{staticClass:"textcard_body text-[11.6603px] lg:text-[18px]"},[_vm._v("\n            The passionate bunch obsessed with making notarising documents\n            simpler.\n          ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-0\">","</div>",_vm._l((_vm.teams),function(res,index){return _c('profile-card',{key:index,attrs:{"name":res.name,"pref-name":res.prefname,"role":res.role,"image":res.image,"linkedinurl":res.linkedin}})}),1)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=44c25686&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: 'AboutUs',

  data() {
    return {
      teams: [{
        name: 'Fikayo Durosinmi-Etti',
        prefname: 'Fikayo',
        role: 'CEO and Co-Founder',
        image: 'Fikayo.jpeg',
        linkedin: 'https://www.linkedin.com/in/fikayo-durosinmi-etti-7aa232101/'
      }, {
        name: 'Daniel Etim Inyang',
        prefname: 'Daniel',
        role: 'Head of Revenue & Growth',
        image: 'Daniel.jpeg',
        linkedin: 'https://www.linkedin.com/in/danielinyang'
      }, {
        name: 'Akin Shafi',
        prefname: 'Shafi',
        role: 'Full-Stack Developer',
        image: 'Shafi.jpeg',
        linkedin: 'https://www.linkedin.com/in/akin-shafi-90b3b4a4/'
      }, {
        name: 'Laide Misola Enabulele',
        prefname: 'Laide',
        role: 'Lead, Community & Compliance',
        image: 'Laide.jpeg',
        linkedin: 'https://www.linkedin.com/in/laide-misola-e-4a181994/'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "21a96459"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeroBanner: __webpack_require__(126).default,TextCard: __webpack_require__(104).default,ProfileCard: __webpack_require__(227).default})


/***/ })

};;
//# sourceMappingURL=index.js.map