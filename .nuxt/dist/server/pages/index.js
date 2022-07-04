exports.ids = [28,3,8,9,18];
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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cc0aee1c", content, true, context)
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

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_ad30e466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_ad30e466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_ad30e466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_ad30e466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_ad30e466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".list_count[data-v-ad30e466]{width:20px;height:20px;background-color:#003bb3;font-weight:400;font-size:12px;line-height:366.5%;text-align:center;color:#fff}", ""]);
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ListItem/ListItem.vue?vue&type=template&id=ad30e466&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex items-start mt-[10px] lg:mt-0 lg:space-y-2"},[_vm._ssrNode("<div class=\"mr-[14px] flex-shrink-0\" data-v-ad30e466>"+((_vm.icon)?("<p class=\"mt-2 lg:mt-4\" data-v-ad30e466><img"+(_vm._ssrAttr("src",__webpack_require__(101)("./" + _vm.icon)))+" alt=\"list icon\""+(_vm._ssrStyle(null,_vm.iconStyle, null))+" data-v-ad30e466></p>"):("<p class=\"list_count flex justify-center items-center rounded-full mt-1.5 lg:mt-[16.5px]\" data-v-ad30e466>"+_vm._ssrEscape("\n      "+_vm._s(_vm.count)+"\n    ")+"</p>"))+"</div> <div class=\"pt-[5px] lg:pt-0\" data-v-ad30e466><p class=\"text-content-color text-[14px] lg:leading-[231%]\" data-v-ad30e466>"+(_vm._s(_vm.item))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ListItem/ListItem.vue?vue&type=template&id=ad30e466&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/ListItem/listItem.js?vue&type=script&lang=js&
/* harmony default export */ var listItemvue_type_script_lang_js_ = ({
  name: 'ListItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: Object,
      default: () => {}
    },
    count: {
      type: Number,
      default: 0
    },
    item: {
      type: String,
      default: 'help'
    }
  }
});
// CONCATENATED MODULE: ./components/ListItem/listItem.js?vue&type=script&lang=js&
 /* harmony default export */ var ListItem_listItemvue_type_script_lang_js_ = (listItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ListItem/ListItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ListItem_listItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ad30e466",
  "36a18572"
  
)

/* harmony default export */ var ListItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/header_img.e9a7545.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tonoteBasic.50eceea.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tonoteBusiness.1d33743.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tonoteNotaries.9e55f15.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tonoteTeams.6d5996a.png";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("16c26c3e", content, true, context)
};

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc555afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc555afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc555afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc555afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc555afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll-snap_y[data-v-dc555afc]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-dc555afc],.scroll-snap_y li[data-v-dc555afc]{scroll-snap-align:start}.banner_alert[data-v-dc555afc],.btn_fadein[data-v-dc555afc],.hero_right[data-v-dc555afc],.heroBody[data-v-dc555afc],.heroTitle[data-v-dc555afc],.logo_anime[data-v-dc555afc],.mobile_menu.active ul>li[data-v-dc555afc]:first-child,.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(2),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(3),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(4),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(5),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(6),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(7),.nav__menu>li[data-v-dc555afc]:first-child,.nav__menu>li[data-v-dc555afc]:nth-child(2),.nav__menu>li[data-v-dc555afc]:nth-child(3),.nav__menu>li[data-v-dc555afc]:nth-child(4),.nav__menu>li[data-v-dc555afc]:nth-child(5),.nav__menu__buttons[data-v-dc555afc],.sectionAnime[data-v-dc555afc]{opacity:0;-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-dc555afc]{-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-dc555afc]:first-child{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(7){-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-dc555afc]:first-child{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-dc555afc]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-dc555afc]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-dc555afc]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-dc555afc]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-dc555afc]{-webkit-animation-name:fade-in-data-v-dc555afc;animation-name:fade-in-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-dc555afc]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-dc555afc],.heroTitle[data-v-dc555afc]{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-dc555afc]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-dc555afc]{-webkit-animation-name:slide-left-data-v-dc555afc;animation-name:slide-left-data-v-dc555afc}.btn_fadein[data-v-dc555afc],.hero_right[data-v-dc555afc]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-dc555afc]{-webkit-animation-name:fade-in-data-v-dc555afc;animation-name:fade-in-data-v-dc555afc}.sectionAnime[data-v-dc555afc]{-webkit-animation-name:section-slide-up-data-v-dc555afc;animation-name:section-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-dc555afc{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-dc555afc{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-dc555afc{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-dc555afc{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-dc555afc{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-dc555afc{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-dc555afc]{box-sizing:border-box;font-family:\"Poppins\",sans-serif}body[data-v-dc555afc]{position:relative}body[data-v-dc555afc],html[data-v-dc555afc]{overflow-x:hidden}html[data-v-dc555afc]{scroll-behavior:smooth}.wrapper[data-v-dc555afc]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-dc555afc]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-dc555afc]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-dc555afc]{padding-inline:1rem}}.textcard_header[data-v-dc555afc]{font-family:\"NeueHelvetica\";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-dc555afc]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-dc555afc]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-dc555afc]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-dc555afc]{font-size:52.3502px}.page-header[data-v-dc555afc],.textCard-header[data-v-dc555afc],.u-main-text[data-v-dc555afc]{font-weight:700;line-height:98%;letter-spacing:-.015em;color:#03060b}.textCard-header[data-v-dc555afc],.u-main-text[data-v-dc555afc]{font-family:\"NeueHelvetica\";font-style:normal;font-size:40px;text-align:center}.textCard-header span[data-v-dc555afc],.u-main-text span[data-v-dc555afc]{font-family:\"NeueHelvetica\"}.textCard-header[data-v-dc555afc]{font-size:23.5135px;text-align:center}@media(min-width:1024px){.textCard-header[data-v-dc555afc]{text-align:left}}.u-text-summary[data-v-dc555afc]{font-weight:400;font-size:16px;text-align:center;color:#626262}.basic-section[data-v-dc555afc]{margin-top:47px}.teams-group[data-v-dc555afc]{background:#f9f9f9;border-radius:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=dc555afc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"mb-[57px] lg:mb-[110.01px]"},[_c('hero-banner',{attrs:{"heading":"Sign and Notarise important documents online now","sub-heading":"Do you need a certified true copy of a document, a sworn affidavit or a credible witness for an agreement?","header-class":"lg:w-[506px] lg:text-[45px]","illustration":"signature.gif"},scopedSlots:_vm._u([{key:"bannerbtn",fn:function(){return [_c('t-button',{attrs:{"size":"md","width":"186px","padding":"0 20px 0 17px"},on:{"click":function($event){return _vm.signIn()}}},[_vm._v("\n        Notarise a Document\n      ")]),_vm._v(" "),_c('t-button',{attrs:{"theme":"outline","size":"md","width":"186px"},on:{"click":function($event){return _vm.signIn()}}},[_vm._v("\n        Get an Affidavit\n      ")])]},proxy:true}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper anime-section opacity-0\" data-v-dc555afc>","</section>",[_vm._ssrNode("<div class=\"flex flex-col items-center mt-[89.75px]\" data-v-dc555afc>","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center text-center\" data-v-dc555afc>","</div>",[_vm._ssrNode("<h1 class=\"u-main-text w-auto lg:w-[768px] px-[16px]\" data-v-dc555afc>\n          Notarising documents online is\n          <span class=\"text-[#FF9901]\" data-v-dc555afc>26X</span> faster and\n          <span class=\"text-[#458FFF]\" data-v-dc555afc>55%</span> cheaper than traditional\n          means of notarisation.\n        </h1> <p class=\"u-text-summary mt-[20px] mb-[8px] lg:mb-[18px] w-[342px] lg:w-[457px]\" data-v-dc555afc>\n          Contact us to find out more about our notary solutions for your\n          personal or business needs.\n        </p> "),_c('nuxt-link',{staticClass:"self-auto",attrs:{"to":"/contact-sales"}},[_c('t-button',{attrs:{"theme":"primary","size":"md","icon":"right-arrow-white.svg","icon-style":{
              'margin-left': '34.9px',
              width: '7px',
            }}},[_vm._v("\n            Contact Sales\n          ")])],1)],2),_vm._ssrNode(" <div class=\"w-auto lg:w-[1185px]\" data-v-dc555afc><img"+(_vm._ssrAttr("src",__webpack_require__(197)))+" alt data-v-dc555afc></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"anime-section opacity-0basic-section m-0 px-[16px] lg:px-0 lg:m-0 lg:mt-[47px] flex flex-col lg:flex-row items-center lg:items-center lg:justify-center mt-5\" data-v-dc555afc>","</section>",[_vm._ssrNode("<div class=\"m-0 lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[499px]\" data-v-dc555afc>","</div>",[_c('TextCard',{attrs:{"header":"ToNote Basic","header-style":{ 'font-size': '23.5135px' },"main-style":{
          'font-size': '16px',
          margin: '31.49px 0 26px',
        },"footer-class":"mb-14"},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"flex"},[_c('t-button',{attrs:{"size":"md","icon":"right-arrow-white.svg","icon-style":{
                'margin-left': '40px',
                width: '7px',
              }},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n              Start Free\n            ")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/solutions"}},[_c('t-button',{attrs:{"theme":"link","icon":"right-arrow-blue.svg","size":"md","padding":"0 0 0 17px","text-align":"left","icon-style":{
                  'margin-left': '8.9px',
                }}},[_c('span',{staticClass:"text-[14px]"},[_vm._v("Learn More")])])],1)],1)]},proxy:true}])},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n          If you’ve ever had to notarise a document or get an affidavit for\n          personal or business use then our basic plan is for you. At no\n          recurring cost, you can have access to all nationally certified\n          notaries public on our platform.\n        ")])]),_vm._ssrNode(" "),_c('ListItem',{attrs:{"icon":"clock.svg","icon-style":{ width: '36.8px', height: '34.5px' },"item":"Our notaries public are available for virtual sessions between 9am and 6pm daily."}})],2),_vm._ssrNode(" <div class=\"w-auto lg:w-[850px] 2xl:w-[905px] mt-[20px] lg:mt-0\" data-v-dc555afc><img"+(_vm._ssrAttr("src",__webpack_require__(201)))+" alt=\"tonote basic mobile view\" class=\"max-w-none w-full\" data-v-dc555afc></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper notaries-section\" data-v-dc555afc>","</section>",[_vm._ssrNode("<div class=\"flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[94px]\" data-v-dc555afc>","</div>",[_vm._ssrNode("<div class=\"w-auto lg:w-[563.18px] mt-[38px] lg:mt-0\" data-v-dc555afc><img"+(_vm._ssrAttr("src",__webpack_require__(204)))+" alt=\"notaries image\" class=\"w-full h-full max-w-none\" data-v-dc555afc></div> "),_vm._ssrNode("<div class=\"w-full mt-[53px] lg:mt-0 max-w-[464px] 2xl:translate-x-[-5rem]\" data-v-dc555afc>","</div>",[_c('TextCard',{attrs:{"header":"ToNote for Teams","header-style":{
            'font-size': '23.5135px',
            'line-height': '98%',
            'letter-spacing': '-0.015em',
          },"main-style":{
            'font-size': '16px',
            'margin-bottom': '26px',
            'line-height': '194.5%',
          }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"flex"},[_c('t-button',{attrs:{"theme":"link","icon":"right-arrow-blue.svg","icon-style":{
                  'margin-left': '38.9px',
                },"padding":"0","width":"138.9px","text-align":"left"},on:{"click":function($event){return _vm.signUp()}}},[_c('span',{staticClass:"text-[14px]"},[_vm._v("Notarise Now")])])],1)]},proxy:true}])},[_c('div',[_c('p',{staticClass:"mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"},[_vm._v("\n              Set permissions and restrictions "),_c('br'),_vm._v("\n              for teams\n            ")]),_vm._v(" "),_c('p',{staticClass:"textcard_body"},[_vm._v("\n              Businesses sign and notarise documents every day. We understand\n              team dynamics and how roles and responsibilities are shared.\n              This is why you can set permissions and restrictions, selecting\n              which team members are able to prepare, review, sign, notarise\n              and share essential documentation.\n            ")])])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row items-center lg:justify-between mt-[75px] lg:mt-[144px]\" data-v-dc555afc>","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[443px] 2xl:w-[622px] max-w-[443px]\" data-v-dc555afc>","</div>",[_c('TextCard',{attrs:{"header":"ToNote for Business","header-style":{
            'font-size': '23.5135px',
            'line-height': '98%',
            'letter-spacing': '-0.015em',
            'margin-bottom': '5px',
          },"main-style":{
            'font-size': '16px',
            'margin-bottom': '26px',
            'line-height': '194.5%',
          }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"flex"},[_c('t-button',{attrs:{"theme":"link","icon":"right-arrow-blue.svg","icon-style":{
                  'margin-left': '38.9px',
                },"padding":"0","width":"138.9px","text-align":"left"},on:{"click":function($event){return _vm.signUp()}}},[_c('span',{staticClass:"text-[14px]"},[_vm._v("Notarise Now")])])],1)]},proxy:true}])},[_c('div',[_c('p',{staticClass:"mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"},[_vm._v("\n              We have automated the notary "),_c('br'),_vm._v("\n              process\n            ")]),_vm._v(" "),_c('p',{staticClass:"textcard_body"},[_vm._v("\n              Are you a business that has customers who need to notarise\n              documents from time to time? We have automated the notary\n              process so that your customers will now be able to validate\n              essential documents and swear affidavits in record time. Closing\n              transactions have never been this easy.\n            ")])])])],1),_vm._ssrNode(" <div class=\"w-auto lg:w-[581.79px] mt-[38px] lg:mt-0\" data-v-dc555afc><img"+(_vm._ssrAttr("src",__webpack_require__(202)))+" alt=\"notaries image\" class=\"w-full h-full max-w-none\" data-v-dc555afc></div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper anime-section notaries-section opacity-0\" data-v-dc555afc>","</section>",[_vm._ssrNode("<div class=\"flex flex-col lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[195px]\" data-v-dc555afc>","</div>",[_vm._ssrNode("<div class=\"w-auto lg:w-[544px]\" data-v-dc555afc><img"+(_vm._ssrAttr("src",__webpack_require__(203)))+" alt=\"notaries image\" class=\"w-full h-full max-w-none\" data-v-dc555afc></div> "),_vm._ssrNode("<div class=\"w-full mt-[53px] lg:translate-x-[-6rem] lg:mt-0 lg:w-[443px] 2xl:w-[622px] max-w-[443px]\" data-v-dc555afc>","</div>",[_c('TextCard',{attrs:{"header":"ToNote for Notaries","header-style":{
            'font-size': '23.5135px',
            'line-height': '98%',
            'letter-spacing': '-0.015em',
          },"main-style":{
            'font-size': '16px',
            margin: '31px 0 26px',
            'line-height': '194.5%',
          }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"flex"},[_c('t-button',{attrs:{"size":"md","icon":"right-arrow-white.svg","width":"130px","icon-style":{
                  'margin-left': '32.9px',
                  width: '7px',
                }},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n                Join Us\n              ")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/notaries-public"}},[_c('t-button',{attrs:{"theme":"link","icon":"right-arrow-blue.svg","size":"md","padding":"0 0 0 17px","text-align":"left","icon-style":{
                    'margin-left': '8.9px',
                  }}},[_c('span',{staticClass:"text-[14px]"},[_vm._v("Learn More")])])],1)],1)]},proxy:true}])},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n            We are building a community that recognises the notary public\n            service and encourages financial liberation through this service.\n            This means we appreciate the work that you do and the more you\n            notarise on our platform, the more you earn.\n          ")])])],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=dc555afc&scoped=true&

// EXTERNAL MODULE: ./mixins/index.js
var mixins = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      activeTab: 'For Teams',
      component: 'for-teams'
    };
  },

  mounted() {
    function reveal() {
      const reveals = document.querySelectorAll('.anime-section');

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('sectionAnime');
        } else {
          reveals[i].classList.remove('sectionAnime');
        }
      }
    }

    window.addEventListener('scroll', reveal);
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(258)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dc555afc",
  "d6a55dca"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TButton: __webpack_require__(7).default,HeroBanner: __webpack_require__(126).default,TextCard: __webpack_require__(104).default,ListItem: __webpack_require__(128).default})


/***/ })

};;
//# sourceMappingURL=index.js.map