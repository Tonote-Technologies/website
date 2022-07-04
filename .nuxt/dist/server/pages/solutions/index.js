exports.ids = [36,3,8,9,13,18,35];
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("aaec9146", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/business-form.e9e3b0e.png";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/passport-bg.11f3194.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/passport-illustration.f6980a9.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/teams.0135db2.png";

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupCard_vue_vue_type_style_index_0_id_93d292d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupCard_vue_vue_type_style_index_0_id_93d292d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupCard_vue_vue_type_style_index_0_id_93d292d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupCard_vue_vue_type_style_index_0_id_93d292d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupCard_vue_vue_type_style_index_0_id_93d292d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll-snap_y[data-v-93d292d4]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-93d292d4],.scroll-snap_y li[data-v-93d292d4]{scroll-snap-align:start}.banner_alert[data-v-93d292d4],.btn_fadein[data-v-93d292d4],.hero_right[data-v-93d292d4],.heroBody[data-v-93d292d4],.heroTitle[data-v-93d292d4],.logo_anime[data-v-93d292d4],.mobile_menu.active ul>li[data-v-93d292d4]:first-child,.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(2),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(3),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(4),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(5),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(6),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(7),.nav__menu>li[data-v-93d292d4]:first-child,.nav__menu>li[data-v-93d292d4]:nth-child(2),.nav__menu>li[data-v-93d292d4]:nth-child(3),.nav__menu>li[data-v-93d292d4]:nth-child(4),.nav__menu>li[data-v-93d292d4]:nth-child(5),.nav__menu__buttons[data-v-93d292d4],.sectionAnime[data-v-93d292d4]{opacity:0;-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-93d292d4]{-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-93d292d4]:first-child{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(7){-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-93d292d4]:first-child{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-93d292d4]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-93d292d4]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-93d292d4]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-93d292d4]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-93d292d4]{-webkit-animation-name:fade-in-data-v-93d292d4;animation-name:fade-in-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-93d292d4]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-93d292d4],.heroTitle[data-v-93d292d4]{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-93d292d4]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-93d292d4]{-webkit-animation-name:slide-left-data-v-93d292d4;animation-name:slide-left-data-v-93d292d4}.btn_fadein[data-v-93d292d4],.hero_right[data-v-93d292d4]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-93d292d4]{-webkit-animation-name:fade-in-data-v-93d292d4;animation-name:fade-in-data-v-93d292d4}.sectionAnime[data-v-93d292d4]{-webkit-animation-name:section-slide-up-data-v-93d292d4;animation-name:section-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-93d292d4{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-93d292d4{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-93d292d4{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-93d292d4{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-93d292d4{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-93d292d4{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-93d292d4]{box-sizing:border-box;font-family:\"Poppins\",sans-serif}body[data-v-93d292d4]{position:relative}body[data-v-93d292d4],html[data-v-93d292d4]{overflow-x:hidden}html[data-v-93d292d4]{scroll-behavior:smooth}.wrapper[data-v-93d292d4]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-93d292d4]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-93d292d4]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-93d292d4]{padding-inline:1rem}}.textcard_header[data-v-93d292d4]{font-family:\"NeueHelvetica\";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-93d292d4]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-93d292d4]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-93d292d4]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-93d292d4]{font-weight:700;font-size:52.3502px;line-height:98%;letter-spacing:-.015em;color:#03060b}.c-signupCard[data-v-93d292d4]{background:#003bb3;border-radius:14px;padding:19px 24px;width:374px}@media(max-width:768px){.c-signupCard[data-v-93d292d4]{width:auto}}.c-signupCard__price[data-v-93d292d4]{font-weight:700;font-size:43.4691px;line-height:121.5%;letter-spacing:-.015em;color:#fff}.c-signupCard__service[data-v-93d292d4]{font-size:16px;line-height:193.5%;color:#fff;margin-bottom:14px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicFeatures", function() { return basicFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefitsGroupA", function() { return benefitsGroupA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefitsGroupB", function() { return benefitsGroupB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefitsGroupC", function() { return benefitsGroupC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefitsGroupD", function() { return benefitsGroupD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefitsGroupE", function() { return benefitsGroupE; });
const basicFeatures = ['e-sign and share documents', 'Get certified true copies of essential documents such as your passport, birth certificate or educational certificate, virtually', 'Notarise transaction closing documents that require a notary public as a witness', 'Get an affidavit for change of name, address or approval for a minor to travel'];
const benefitsGroupA = ['Sign up for free or choose a plan tailored to your needs', 'Create custom e-signatures', 'Get affidavits and notarise documents online in <br/> minutes! No templates required', 'Bank Grade Security', '24/7 web access'];
const benefitsGroupB = ['E-notarisation is 5* faster than traditional notarisation at 55% of the overall cost', 'Access to online tutorials on how to use the platform', 'Transaction history and audit trails', 'Access to customer support via email and chat'];
const benefitsGroupC = ['Personalised platform branding', 'E-sign and share up to 50 documents with your customers monthly', 'Set permission levels for signers'];
const benefitsGroupD = ['Enable seamless documentation management processes', 'Access to dedicated customer success manager', 'API coming soon’'];
const benefitsGroupE = ['Custom plans tailored to your business notary needs', 'E-sign and share unlimited number of documents with your customers monthly’'];

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d985ca02", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/SignupCard/SignupCard.vue?vue&type=template&id=93d292d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-signupCard"},[_vm._ssrNode("<div class=\"flex flex-col lg:flex-row justify-between\" data-v-93d292d4><div class=\"flex flex-col items-center\" data-v-93d292d4><h3 class=\"c-signupCard__price\" data-v-93d292d4>N8000</h3> <p class=\"c-signupCard__service\" data-v-93d292d4>Per Notary Session</p></div> <div class=\"flex flex-col items-center\" data-v-93d292d4><h3 class=\"c-signupCard__price\" data-v-93d292d4>N3500</h3> <p class=\"c-signupCard__service\" data-v-93d292d4>Per Affidavit</p></div></div> "),_c('t-button',{attrs:{"theme":"secondary","text-color":"#003BB3","size":"full"},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n    Sign Up\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SignupCard/SignupCard.vue?vue&type=template&id=93d292d4&scoped=true&

// EXTERNAL MODULE: ./mixins/index.js
var mixins = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/SignupCard/SignupCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SignupCardvue_type_script_lang_js_ = ({
  name: 'SignupCard',
  mixins: [mixins["a" /* default */]]
});
// CONCATENATED MODULE: ./components/SignupCard/SignupCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SignupCard_SignupCardvue_type_script_lang_js_ = (SignupCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SignupCard/SignupCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SignupCard_SignupCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93d292d4",
  "56301812"
  
)

/* harmony default export */ var SignupCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TButton: __webpack_require__(7).default})


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(18);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(198);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".passport-bg{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:contain;background-position:50%;filter:drop-shadow(0 0 10px #ccc)}.passport-bg>img{transform:translate(0)}@media(min-width:1024px){.passport-bg>img{transform:translate(140px,70px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/solutions/index.vue?vue&type=template&id=b694ddfc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<main class=\"mb-[84px] lg:mb-[66px]\">","</main>",[_c('hero-banner',{attrs:{"heading":"Our Solutions","sub-heading":"Our goal is to create a world where every document shared is secure and can be trusted. The first step towards this is to help people and teams sign, notarise and collaborate on documents virtually","illustration":"unlock.gif"},scopedSlots:_vm._u([{key:"bannerbtn",fn:function(){return [_c('t-button',{attrs:{"size":"md","width":"186px","padding":"0 20px 0 17px"},on:{"click":function($event){return _vm.signIn()}}},[_vm._v("\n          Notarise a Document\n        ")]),_vm._v(" "),_c('t-button',{attrs:{"theme":"outline","size":"md","width":"186px"},on:{"click":function($event){return _vm.signIn()}}},[_vm._v("\n          Get an Affidavit\n        ")])]},proxy:true}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper\">","</section>",[_vm._ssrNode("<div id=\"individual\" class=\"flex flex-col lg:flex-row items-center lg:justify-between mt-[31px] lg:items-start\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[484px] 2xl:w-[582px]\">","</div>",[_c('text-card',{attrs:{"header":"Get certified true copies of essential documents","subheader":"ToNote Basic","sub-style":{
              'font-size': '16px',
              'letter-spacing': '0',
            },"main-style":{
              'font-size': '16px',
              margin: '24px 0 30px',
              'line-height': '170.5%',
            },"header-style":{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121%',
              width: '100%',
              'max-width': '296px',
            }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"mb-[11px]"},_vm._l((_vm.basicFeatures),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                    width: '13.9px',
                    'max-width': 'unset',
                  }}})}),1),_vm._v(" "),_c('t-button',{attrs:{"size":"md","width":"186px","padding":"0 20px 0 17px"},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n                Notarise a Document\n              ")])]},proxy:true}])},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n              If you have ever had to notarise a document or get an affidavit\n              for personal or business use then our basic plan is for you. At\n              no recurring cost, you can have access to all nationally\n              certified notaries public on our platform.\n            ")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-auto lg:w-[693.22px] relative lg:mt-4\">","</div>",[_vm._ssrNode("<div class=\"w-auto mt-[40px] lg:mt-0 h-[350px] lg:w-full lg:h-[498.85px] passport-bg\"><img"+(_vm._ssrAttr("src",__webpack_require__(199)))+" alt=\"signed document\" class=\"w-[325px] h-[240px] lg:w-[460px] lg:h-[319.08px] object-contain\"></div> "),_vm._ssrNode("<div class=\"relative lg:absolute mt-[-50px] lg:mt-0 lg:bottom-[-130px] lg:left-[130px]\">","</div>",[_c('signup-card')],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[60px] lg:mt-[117px]\">","</div>",[_vm._ssrNode("<h3 class=\"textcard_subheader lg:!mb-0\">BENEFITS</h3> "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row mt-[16px] lg:items-start lg:justify-between\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]\">","</div>",_vm._l((_vm.benefitsGroupA),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                width: '13.9px',
                'max-width': 'unset',
              }}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]\">","</div>",_vm._l((_vm.benefitsGroupB),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                width: '13.9px',
                'max-width': 'unset',
              }}})}),1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"teams\" class=\"flex flex-col-reverse lg:flex-row items-start lg:justify-between mt-[66px] lg:mt-[95px]\">","</div>",[_vm._ssrNode("<div class=\"w-auto mt-[53pt] lg:mt-0 lg:w-[466px] relative lg:mt-[-21px]\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(200)))+" alt=\"signed document\" class=\"w-full h-full max-w-none\"> "),_vm._ssrNode("<div class=\"relative lg:absolute mt-[35px] lg:mt-0 lg:top-[326px] lg:left-0\">","</div>",[_c('signup-card')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full lg:w-[433px] xl:w-[500px] 2xl:w-[582px]\">","</div>",[_c('text-card',{attrs:{"header":"We understand team dynamics and how roles and responsibilities are shared.","subheader":"ToNote for Teams","sub-style":{
              'font-size': '16px',
              'letter-spacing': '0',
            },"main-style":{
              'font-size': '16px',
              margin: '16px 0 13px',
              'line-height': '170.5%',
            },"header-style":{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121%',
            }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('t-button',{attrs:{"size":"md","width":"186px"},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n                Get PRO Now\n              ")])]},proxy:true}])},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n              Businesses sign and notarise documents every day and need to\n              collaboratively manage agreements to close transactions.\n              "),_c('br'),_c('br'),_vm._v("\n              We understand team dynamics and how roles and responsibilities\n              are shared. "),_c('br'),_c('br'),_vm._v("\n              This is why you can set permissionsand restrictions, selecting\n              which team members are able to prepare, review, sign, notarise\n              and share essential documents.\n            ")])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[60px] lg:mt-[100px]\">","</div>",[_vm._ssrNode("<h3 class=\"textcard_subheader lg:!mb-0 mt-[42px] lg:mt-[51px]\">\n          BENEFITS\n        </h3> <p class=\"textcard_preamble\">All ToNote Basic features and:</p> "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row lg:items-start lg:justify-between\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]\">","</div>",_vm._l((_vm.benefitsGroupC),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                width: '13.9px',
                'max-width': 'unset',
              }}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]\">","</div>",_vm._l((_vm.benefitsGroupD),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                width: '13.9px',
                'max-width': 'unset',
              }}})}),1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"business\" class=\"mt-[50px] mb-[36px] lg:m-0 lg:mt-[115px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-[36px] lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[526px]\">","</div>",[_c('text-card',{attrs:{"header":"Closing transactions has never been this easy.","subheader":"ToNote for Businesses","main-style":{
            'font-size': '16px',
            margin: '26px 0 26px',
            'line-height': '170.5%',
          },"sub-style":{
            'font-size': '16px',
            'letter-spacing': '0',
          },"header-style":{
            'font-size': '23.5135px',
            'letter-spacing': '-0.015em',
            'line-height': '121%',
            width: 'auto',
            'max-width': '377px',
          }},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('nuxt-link',{attrs:{"to":"/contact-sales"}},[_c('t-button',{attrs:{"size":"md","width":"186px"}},[_vm._v(" Talk to Sales ")])],1)]},proxy:true}])},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n            Are you a business that frequently signs and notarises documents\n            or has customers who need to notarise documents from time to time?\n            We have automated the notary process so that your customers will\n            now be able to certify essential documents and swear affidavits in\n            record time. Closing transactions has never been this easy.\n          ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hidden lg:block lg:mt-[40px]\">","</div>",[_vm._ssrNode("<h3 class=\"textcard_subheader lg:!mb-0\">BENEFITS</h3> <p class=\"textcard_preamble\">All ToNote for Teams features and:</p> "),_vm._ssrNode("<div class=\"w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px] max-w-[466px]\">","</div>",_vm._l((_vm.benefitsGroupE),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
                width: '13.9px',
                'max-width': 'unset',
              }}})}),1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-screen lg:w-[54%] 2xl:w-[870px] relative mt-[-54px]\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(196)))+" alt=\"backgroung image \" class=\"w-full h-full max-w-none mt-[20pt] lg:mt-0\"> "),_vm._ssrNode("<div class=\"hidden lg:block absolute lg:top-[405px] 2xl:top-[450px] lg:right-[75px] 2xl:right-[85px]\">","</div>",[_c('signup-card')],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block lg:hidden wrapper\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h3 class=\"textcard_subheader lg:!mb-0\">BENEFITS</h3> <p class=\"textcard_preamble\">All ToNote for Teams features and:</p> "),_vm._ssrNode("<div class=\"w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px]\">","</div>",_vm._l((_vm.benefitsGroupE),function(list,index){return _c('list-item',{key:index,attrs:{"item":list,"icon":"mark.svg","icon-style":{
              width: '13.9px',
              'max-width': 'unset',
            }}})}),1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[20px]\">","</div>",[_c('signup-card')],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/solutions/index.vue?vue&type=template&id=b694ddfc&

// EXTERNAL MODULE: ./pages/solutions/data.js
var data = __webpack_require__(220);

// EXTERNAL MODULE: ./mixins/index.js
var mixins = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/solutions/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var solutionsvue_type_script_lang_js_ = ({
  name: 'SolutionsPage',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      basicFeatures: data["basicFeatures"],
      benefitsGroupA: data["benefitsGroupA"],
      benefitsGroupB: data["benefitsGroupB"],
      benefitsGroupC: data["benefitsGroupC"],
      benefitsGroupD: data["benefitsGroupD"],
      benefitsGroupE: data["benefitsGroupE"]
    };
  }

});
// CONCATENATED MODULE: ./pages/solutions/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_solutionsvue_type_script_lang_js_ = (solutionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/solutions/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(254)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_solutionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d46993b4"
  
)

/* harmony default export */ var solutions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TButton: __webpack_require__(7).default,HeroBanner: __webpack_require__(126).default,ListItem: __webpack_require__(128).default,TextCard: __webpack_require__(104).default,SignupCard: __webpack_require__(233).default})


/***/ })

};;
//# sourceMappingURL=index.js.map