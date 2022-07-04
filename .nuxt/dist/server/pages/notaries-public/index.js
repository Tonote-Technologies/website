exports.ids = [30,3,8,9,18,29];
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benefit2.a8e446a.png";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/seamless.199bb7c.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/getstarted.d477b09.png";

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getstarted", function() { return getstarted; });
const features = [{
  header: 'Free and guided onboarding',
  content: 'As a new notary, you will have free onboarding support and training to become a Certified ToNote Online Notary.',
  icon: 'onboarding.svg'
}, {
  header: 'Access to a market place full of customers',
  content: 'A major benefit for all notaries public is the free access to a large pool of clientele on our platform.',
  icon: 'market-place.svg'
}, {
  header: '24/7 access via all devices',
  content: 'You have 24/7 access to the platform via any internet enabled device. You choose when you want to be active.',
  icon: 'time.svg'
}, {
  header: 'Access to audit trail ',
  content: 'Your encrypted digital locker will store all notarised documents and recordings of all notary sessions.',
  icon: 'audit.svg'
}, {
  header: 'Notarise from anywhere at anytime',
  content: 'You can access the ToNote platform and treat notary requests from anywhere and at any time with any secure, internet enabled device.',
  icon: 'world.svg'
}, {
  header: 'Increase notary income',
  content: 'Increase your notary income by treating numerous notary request on the platform.',
  icon: 'income.svg'
}, {
  header: 'Automated KYC system',
  content: 'Clients enter their government issued ID number and get an automated verification response before they are allowed to appear virtually before you, the notary.',
  icon: 'kyc.svg'
}, {
  header: 'Bank grade security',
  content: 'Features such as the encrypted digital locker and 2-factor authentication will ensure your access and documents on the platform are secure.',
  icon: 'security.svg'
}, {
  header: 'Seamlessly create and digitise assets',
  content: 'As a notary, you will be able to digitise your signature, seals and stamps easily. Your digitised signature, seal and stamps will be securely stored on the platform for your use only.',
  icon: 'idea.svg'
}];
const getstarted = ['Sign up for free and upload your credentials', 'Complete a short e-notary training program', 'Complete your profile to attract the best clients', 'Set your notary schedule and filter through requests', 'Host real-time notary sessions , via in-built video conferencing tool', 'Get paid per notary transaction', 'Access all notarised documents and recorded sessions at any time'];

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/notaries-public/index.vue?vue&type=template&id=c58e3aae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"mb-[110.01px]"},[_c('hero-banner',{attrs:{"heading":"ToNote for Notaries Public","sub-heading":"We are building a community that recognises the notary public service and encourages financial liberation through this service.","illustration":"stamp.gif"},scopedSlots:_vm._u([{key:"bannerbtn",fn:function(){return [_c('t-button',{attrs:{"size":"md","width":"186px"},on:{"click":function($event){return _vm.signUp()}}},[_vm._v("\n        Start Earning\n      ")])]},proxy:true}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"wrapper\">","</section>",[_vm._ssrNode("<div class=\"flex flex-col lg:flex-row items-center lg:justify-between mt-[44.75px]\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[499px] 2xl:w-[582px]\">","</div>",[_c('text-card',{attrs:{"header":"We have created a free-market place that will give you access to a wide range of customers worldwide","subheader":"BENEFITS","main-style":{
            'font-size': '18px',
            margin: '15px 0 15px',
            'line-height': '193.5%',
          },"header-style":{
            'font-size': '23.5135px',
            'letter-spacing': '-0.015em',
            'line-height': '121.5%',
          }}},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n            This means we appreciate the work that you do and the more you\n            notarise on our platform, the more you earn. To aid your efforts,\n            we have created a free-market place that will give you access to a\n            wide range of customers worldwide, who are in need of a notary\n            public, for business or personal purposes.\n          ")])])],1),_vm._ssrNode(" <div class=\"w-auto mt-[63px] lg:mt-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(193)))+" class=\"w-full h-full max-w-none\"></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row-reverse items-center lg:justify-between mt-[50px] lg:mt-[136px]\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[622px] 2xl:w-[622px]\">","</div>",[_c('text-card',{attrs:{"header":"Seamlessly create and store electronic signatures, stamps and seals","main-style":{
            'font-size': '18px',
            margin: '15px 0 15px',
            'line-height': '193.5%',
          },"header-style":{
            'font-size': '23.5135px',
            'letter-spacing': '-0.015em',
            'line-height': '121.5%',
          }}},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n            You can notarise client's documents from anywhere using a\n            combination of our e-signature, digital seal and audio-visual\n            conferencing features. Not too tech savvy? Don't worry, our online\n            tutorial will teach you everything you need to know about how to\n            use our platform in a few short videos.\n          ")])])],1),_vm._ssrNode(" <div class=\"mt-[40px] lg:mt-0 w-auto lg:w-[422px]\"><img"+(_vm._ssrAttr("src",__webpack_require__(194)))+" alt=\"stamp\" class=\"w-full h-full max-w-none\"></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 mt-[57px] lg:mt-[136px]\">","</div>",_vm._l((_vm.features),function(feature,index){return _c('text-card',{key:index,attrs:{"header":feature.header,"icon":feature.icon,"icon-style":{
          'margin-bottom': '7px',
        },"header-style":{
          'font-size': '16px',
        },"main-style":{
          'font-size': '16px',
          margin: '15px 0 15px',
        }}},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n          "+_vm._s(feature.content)+"\n        ")])])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between mt-[57px] lg:mt-[136px]\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[488px] xl:w-[498px] 2xl:w-[622px]\">","</div>",[_c('text-card',{attrs:{"header":"Getting Started","main-style":{
            'font-size': '18px',
            margin: '15px 0 15px',
            'line-height': '193.5%',
          },"header-style":{
            'font-size': '23.5135px',
            'letter-spacing': '-0.015em',
            'line-height': '121.5%',
          }}},[_c('p',{staticClass:"text-[16px] leading-[193.5%] text-content-color mb-[18px]"},[_vm._v("\n            Boost your notary earnings by following these simple steps:\n          ")]),_vm._v(" "),_vm._l((_vm.getstarted),function(list,index){return _c('list-item',{key:index,attrs:{"count":index + 1,"item":list}})})],2)],1),_vm._ssrNode(" <div class=\"w-auto\"><img"+(_vm._ssrAttr("src",__webpack_require__(195)))+" class=\"w-full h-full max-w-none\"></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/notaries-public/index.vue?vue&type=template&id=c58e3aae&

// EXTERNAL MODULE: ./pages/notaries-public/data.js
var data = __webpack_require__(216);

// EXTERNAL MODULE: ./mixins/index.js
var mixins = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/notaries-public/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var notaries_publicvue_type_script_lang_js_ = ({
  name: 'NotariesPublic',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      features: data["features"],
      getstarted: data["getstarted"]
    };
  }

});
// CONCATENATED MODULE: ./pages/notaries-public/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_notaries_publicvue_type_script_lang_js_ = (notaries_publicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/notaries-public/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_notaries_publicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72c2b36f"
  
)

/* harmony default export */ var notaries_public = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TButton: __webpack_require__(7).default,HeroBanner: __webpack_require__(126).default,TextCard: __webpack_require__(104).default,ListItem: __webpack_require__(128).default})


/***/ })

};;
//# sourceMappingURL=index.js.map