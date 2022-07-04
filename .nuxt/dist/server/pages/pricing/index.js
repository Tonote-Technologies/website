exports.ids = [32,4,6,9,15,18,31];
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1f6ec359", content, true, context)
};

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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_4e33337c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_4e33337c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_4e33337c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_4e33337c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_4e33337c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll-snap_y[data-v-4e33337c]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-4e33337c],.scroll-snap_y li[data-v-4e33337c]{scroll-snap-align:start}.banner_alert[data-v-4e33337c],.btn_fadein[data-v-4e33337c],.hero_right[data-v-4e33337c],.heroBody[data-v-4e33337c],.heroTitle[data-v-4e33337c],.logo_anime[data-v-4e33337c],.mobile_menu.active ul>li[data-v-4e33337c]:first-child,.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(2),.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(3),.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(4),.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(5),.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(6),.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(7),.nav__menu>li[data-v-4e33337c]:first-child,.nav__menu>li[data-v-4e33337c]:nth-child(2),.nav__menu>li[data-v-4e33337c]:nth-child(3),.nav__menu>li[data-v-4e33337c]:nth-child(4),.nav__menu>li[data-v-4e33337c]:nth-child(5),.nav__menu__buttons[data-v-4e33337c],.sectionAnime[data-v-4e33337c]{opacity:0;-webkit-animation-name:slide-right-data-v-4e33337c;animation-name:slide-right-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-4e33337c]{-webkit-animation-name:slide-right-data-v-4e33337c;animation-name:slide-right-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-4e33337c]:first-child{-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-4e33337c]:nth-child(7){-webkit-animation-name:slide-right-data-v-4e33337c;animation-name:slide-right-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-4e33337c]:first-child{-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-4e33337c]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-4e33337c]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-4e33337c]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-4e33337c]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-4e33337c]{-webkit-animation-name:fade-in-data-v-4e33337c;animation-name:fade-in-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-4e33337c]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-4e33337c],.heroTitle[data-v-4e33337c]{-webkit-animation-name:text-slide-up-data-v-4e33337c;animation-name:text-slide-up-data-v-4e33337c;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-4e33337c]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-4e33337c]{-webkit-animation-name:slide-left-data-v-4e33337c;animation-name:slide-left-data-v-4e33337c}.btn_fadein[data-v-4e33337c],.hero_right[data-v-4e33337c]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-4e33337c]{-webkit-animation-name:fade-in-data-v-4e33337c;animation-name:fade-in-data-v-4e33337c}.sectionAnime[data-v-4e33337c]{-webkit-animation-name:section-slide-up-data-v-4e33337c;animation-name:section-slide-up-data-v-4e33337c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-4e33337c{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-4e33337c{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-4e33337c{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-4e33337c{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-4e33337c{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-4e33337c{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-4e33337c{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-4e33337c{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-4e33337c{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-4e33337c{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-4e33337c]{box-sizing:border-box;font-family:\"Poppins\",sans-serif}body[data-v-4e33337c]{position:relative}body[data-v-4e33337c],html[data-v-4e33337c]{overflow-x:hidden}html[data-v-4e33337c]{scroll-behavior:smooth}.wrapper[data-v-4e33337c]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-4e33337c]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-4e33337c]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-4e33337c]{padding-inline:1rem}}.textcard_header[data-v-4e33337c]{font-family:\"NeueHelvetica\";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-4e33337c]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-4e33337c]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-4e33337c]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-4e33337c]{font-weight:700;font-size:52.3502px;line-height:98%;letter-spacing:-.015em;color:#03060b}.c-contactSection[data-v-4e33337c]{background-color:#003bb3;padding:53px 0;display:flex;flex-direction:column;align-items:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ff973d64", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ContactUs/ContactUs.vue?vue&type=template&id=4e33337c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-contactSection"},[_vm._ssrNode("<div data-v-4e33337c><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt=\"phone icon\" svg-inline class=\"logo-img\" data-v-4e33337c></div> <div class=\"text-white text-center\" data-v-4e33337c><h3 class=\"mt-[14px] mb-[13.7px]\" data-v-4e33337c>\n      Do you have any questions about our plans?\n    </h3> <p data-v-4e33337c>Give us a call at +234 814 650 7035</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactUs/ContactUs.vue?vue&type=template&id=4e33337c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ContactUs/ContactUs.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e33337c",
  "5fedec10"
  
)

/* harmony default export */ var ContactUs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.e1d6490.jpeg";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_1.9c8b1e7.png";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_2.0ccbeda.png";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_3.61e0c01.png";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_4.1deee51.png";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_5.f2d1668.png";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_6.07e773e.png";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_9.3855154.png";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_7.24b16d6.png";

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team_image_8.295f319.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sales.cfcf4ac.png";

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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/business-form.e9e3b0e.png";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/header_img.e9a7545.png";

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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_TabToggle_vue_vue_type_style_index_0_id_a6db3fc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_TabToggle_vue_vue_type_style_index_0_id_a6db3fc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_TabToggle_vue_vue_type_style_index_0_id_a6db3fc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_TabToggle_vue_vue_type_style_index_0_id_a6db3fc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_TabToggle_vue_vue_type_style_index_0_id_a6db3fc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".active-tab[data-v-a6db3fc2]{transition:all 1s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plans", function() { return plans; });
const plans = [{
  name: 'Basic plan',
  icon: 'basic-plan.svg',
  image: 'basic-plan.jpeg',
  content: 'With our free Basic Plan, you can sign and share documents digitally, and connect to any of our notaries public to notarise or certify documents and swear affidavits.',
  cost: {
    Monthly: 'Free',
    Annually: 'Free'
  },
  prices: {
    session: 'N8,000',
    affidavit: 'N3,500'
  },
  options: ['Sign up for free', 'Create custom e-signatures', 'Get affidavits and notarise <br/> documents online in minutes! No <br/> templates required', 'E-sign and share unlimited amount of <br/> notarised documents with third <br/> parties', 'E-sign and share up to 3 documents <br/> per month with third parties', 'No more paper, printing or <br/> transportation', 'Track affidavit and notarised <br/> documentation history', 'E-notarisation is 7* faster than traditional notarisation at 65% of the overall cost', 'Access to online tutorials on how to use the platform', 'Access to customer support via email and chat', '24/7 web access'],
  btnText: 'Sign Up',
  to: null
}, {
  name: 'Pro plan',
  icon: 'pro-plan.svg',
  image: 'pro-plan.jpeg',
  content: "The ToNote Pro Plan is built to enable seamless collaboration within small and large scale teams. Every team member will have a role to play thanks to our 'permissions' feature.",
  cost: {
    Monthly: 'N14,500',
    Annually: 'N174,000'
  },
  prices: {
    session: 'N8,000',
    affidavit: 'N3,500'
  },
  options: ['Automated onboarding process', 'Personalised platform branding', 'Bank Grade Security', 'E-sign and share up to 50 documents with your customers monthly', 'Ability for clients to get affidavits and <br/> notarise documents online in <br/> minutes! No templates required', 'Set permission levels for signers', 'Sign documents collaboratively', 'Automate approvals and sign offs', 'Enable seamless documentation management processes', 'Quicker transaction closings', 'Transaction history and audit trails', 'E-notarisation is 7* faster than traditional notarisation at 65% of the overall cost', 'Access to online tutorials on how to use the platform', 'Access to customer support via telephone, email and chat', 'Access to dedicated customer success manager', '24/7 web access', 'API integration'],
  btnText: 'Go Pro Now',
  to: null
}, {
  name: 'For Business',
  icon: 'business-plan.svg',
  image: 'business-plan.jpeg',
  content: 'ToNote Business offers the premium experience of unlimited and customised solutions for your business needs, covering every and any sector that you operate in.',
  cost: {
    Monthly: 'N24,500',
    Annually: 'N294,000'
  },
  prices: {
    session: 'N8,000',
    affidavit: 'N3,500'
  },
  options: ['Hands on onboarding support', 'Custom plans tailored to your business notary needs', 'Personalised platform branding ', 'Bank Grade Security', 'E-sign and share unlimited number of documents with your customers monthly', 'Ability for clients to get affidavits and notarise documents online in minutes! No templates required', 'Enable seamless documentation management processes between your business and Clients', 'Quicker transaction closings', 'Transaction history and audit trails', 'E-notarisation is 7* faster than traditional notarisation at 65% of the overall cost', 'Access to online tutorials on how to use the platform', 'Access to customer support via telephone, email and chat', 'Access to dedicated customer success manager', '24/7 web access', 'API integration'],
  btnText: 'Talk To Sales',
  to: '/contact-sales'
}];

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/TabToggle/TabToggle.vue?vue&type=template&id=a6db3fc2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[#F4F4F4] relative rounded-full w-[261px] h-[34px] flex items-center justify-center",style:(_vm.mainStyle)},[_vm._ssrNode("<button class=\"text-[14px] flex justify-center items-center\" data-v-a6db3fc2><span data-v-a6db3fc2>"+_vm._ssrEscape("\n      "+_vm._s(_vm.tabA)+"\n    ")+"</span></button> <button class=\"text-[14px] ml-[68px] flex justify-center items-center\" data-v-a6db3fc2><span data-v-a6db3fc2>"+_vm._ssrEscape("\n      "+_vm._s(_vm.tabB)+"\n    ")+"</span></button> <span"+(_vm._ssrClass("flex justify-center bg-[#003BB3] items-center absolute w-[142px] top-0 bottom-0 rounded-full text-white text-[14px] z-10 active-tab",[{ 'left-0': _vm.activeTab === _vm.tabA, 'right-0': _vm.active === _vm.tabB }]))+(_vm._ssrStyle(null,_vm.indicatorStyle, null))+" data-v-a6db3fc2><span data-v-a6db3fc2>"+_vm._ssrEscape("\n      "+_vm._s(_vm.activeTab)+"\n    ")+"</span></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TabToggle/TabToggle.vue?vue&type=template&id=a6db3fc2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/TabToggle/tabToggle.js?vue&type=script&lang=js&
/* harmony default export */ var tabTogglevue_type_script_lang_js_ = ({
  name: 'TabToggle',
  props: {
    indicatorStyle: {
      type: Object,
      default: () => {}
    },
    mainStyle: {
      type: Object,
      default: () => {}
    },
    tabA: {
      type: String,
      default: 'Monthly'
    },
    tabB: {
      type: String,
      default: 'Annually'
    },
    active: {
      type: String,
      required: true
    },
    toggle: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    activeTab() {
      return this.active;
    }

  }
});
// CONCATENATED MODULE: ./components/TabToggle/tabToggle.js?vue&type=script&lang=js&
 /* harmony default export */ var TabToggle_tabTogglevue_type_script_lang_js_ = (tabTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TabToggle/TabToggle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  TabToggle_tabTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a6db3fc2",
  "12b82026"
  
)

/* harmony default export */ var TabToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Gap/Gap.vue?vue&type=template&id=f2074e1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.style)},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Gap/Gap.vue?vue&type=template&id=f2074e1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Gap/Gap.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var Gapvue_type_script_lang_js_ = ({
  name: 'GapX',
  props: {
    gap: {
      type: String,
      default: '1px'
    }
  },
  computed: {
    style() {
      return {
        'margin-top': this.gap
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Gap/Gap.vue?vue&type=script&lang=js&
 /* harmony default export */ var Gap_Gapvue_type_script_lang_js_ = (Gapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Gap/Gap.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Gap_Gapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57e42080"
  
)

/* harmony default export */ var Gap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ToNote-Signature.jpeg": 240,
	"./ToNoteSignatureAnimationEase.gif": 241,
	"./about.jpeg": 173,
	"./basic-plan.jpeg": 242,
	"./basic.png": 243,
	"./benefit.png": 244,
	"./benefit1.svg": 245,
	"./benefit2.png": 193,
	"./business-form.png": 196,
	"./business-plan.jpeg": 246,
	"./business.png": 247,
	"./form.png": 248,
	"./getstarted.png": 195,
	"./header_img.png": 197,
	"./hero.svg": 249,
	"./passport-bg.png": 198,
	"./passport-illustration.png": 199,
	"./pro-plan.jpeg": 250,
	"./sales.png": 190,
	"./seamless.png": 194,
	"./team_image_1.png": 177,
	"./team_image_2.png": 178,
	"./team_image_3.png": 179,
	"./team_image_4.png": 180,
	"./team_image_5.png": 181,
	"./team_image_6.png": 182,
	"./team_image_7.png": 184,
	"./team_image_8.png": 185,
	"./team_image_9.png": 183,
	"./teams.png": 200,
	"./teams/Daniel.jpeg": 135,
	"./teams/Fikayo.jpeg": 136,
	"./teams/Laide.jpeg": 137,
	"./teams/Shafi.jpeg": 138,
	"./tonoteBasic.png": 201,
	"./tonoteBusiness.png": 202,
	"./tonoteIpad.png": 251,
	"./tonoteNotaries.png": 203,
	"./tonoteTeams.png": 204
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
webpackContext.id = 239;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ToNote-Signature.a514c25.jpeg";

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ToNoteSignatureAnimationEase.2504b3f.gif";

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/basic-plan.418bfac.jpeg";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/basic.ea942dd.png";

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benefit.263ce55.png";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benefit1.ed1b396.svg";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/business-plan.ec25124.jpeg";

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/business.b4e6399.png";

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/form.b741224.png";

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.0e4cf4c.svg";

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pro-plan.a62bebf.jpeg";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tonoteIpad.639737d.png";

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/pricing/index.vue?vue&type=template&id=77527f30&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<main class=\"mb-[49px]\">","</main>",[_vm._ssrNode("<section class=\"wrapper\">","</section>",[_vm._ssrNode("<header class=\"space-y-[15px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[31px]\">","</header>",[_vm._ssrNode("<h1 class=\"text-header-color text-[34.9808px] lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica\">\n          Pricing\n        </h1> <p class=\"text-center text-content-color text-[11.6603px] lg:text-[18px] leading-[170.5%] lg:leading-[193.5%]\">\n          Signing up with ToNote makes notarising 55% cheaper and 26x faster\n          than traditional means. You get access to a wide range of certified\n          notaries public for virtual sessions and access to a wide range of\n          documentation management features.\n        </p> "),_vm._ssrNode("<div>","</div>",[_c('tab-toggle',{attrs:{"toggle":_vm.toggleActiveTab,"active":_vm.activeTab,"tab-a":"Monthly","tab-b":"Annually","main-style":{ padding: '10px' }}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex lg:justify-center space-x-2 lg:space-x-[20px] overflow-x-auto\">","</div>",_vm._l((_vm.plans),function(plan,index){return _vm._ssrNode("<div class=\"flex-shrink-0 w-auto lg:w-[308px] flex flex-col items-center\">","</div>",[_vm._ssrNode("<div class=\"rounded-lg px-[27px] pt-[26px] pb-[17px] shadow-plan lg:shadow-none bg-white lg:hover:shadow-plan\">","</div>",[_vm._ssrNode("<div class=\"plan_image w-[225px] lg:w-auto\"><img"+(_vm._ssrAttr("src",__webpack_require__(239)("./" + plan.image)))+" alt=\"plan image\" class=\"max-w-none w-full h-full\"></div> "),_vm._ssrNode("<div class=\"mt-[28.48px]\">","</div>",[_c('text-card',{attrs:{"header":plan.name,"icon":plan.icon,"icon-style":{
                  'margin-bottom': '7px',
                },"header-style":{
                  'font-size': '16px',
                },"main-style":{
                  'font-size': '16px',
                  margin: '15px 0 15px',
                  'line-height': '170.5%',
                },"footer-class":""},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('div',{staticClass:"mt-[34px]"},[_c('h2',{staticClass:"text-header leading-[121.5%] tracking-[-0.015] text-[40.99px] mb-[6px]"},[_vm._v("\n                      "+_vm._s(plan.cost[_vm.activeTab])+"\n                    ")]),_vm._v(" "),_c('p',{staticClass:"text-[14px] text-header"},[_c('span',[_vm._v("Per Notary Session")]),_vm._v(" -\n                      "),_c('strong',[_vm._v(_vm._s(plan.prices.session))])]),_vm._v(" "),_c('p',{staticClass:"text-[14px] text-header"},[_c('span',[_vm._v("Per Affidavit")]),_vm._v(" -\n                      "),_c('strong',[_vm._v(_vm._s(plan.prices.affidavit))])]),_vm._v(" "),_c('Gap',{attrs:{"gap":"10px"}}),_vm._v(" "),(plan.to)?_c('nuxt-link',{attrs:{"to":plan.to}},[_c('t-button',{attrs:{"size":"md"}},[_c('span',{staticClass:"font-normal leading-[162.5%] text-[14px]"},[_vm._v("\n                          "+_vm._s(plan.btnText)+"\n                        ")])])],1):_c('t-button',{attrs:{"size":"md"},on:{"click":function($event){return _vm.signUp()}}},[_c('span',{staticClass:"font-normal leading-[162.5%] text-[14px]"},[_vm._v("\n                        "+_vm._s(plan.btnText)+"\n                      ")])])],1)]},proxy:true}],null,true)},[_c('p',{staticClass:"text-header w-[254px]"},[_vm._v("\n                  "+_vm._s(plan.content)+"\n                ")])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[30px] translate-x-1 w-[254px]\">","</div>",[(_vm.more === plan.name)?_vm._ssrNode("<div>","</div>",_vm._l((plan.options),function(list,i){return _c('list-item',{key:i,attrs:{"icon":"mark.svg","item":list,"icon-style":{
                  width: '13.9px',
                  height: '13.55px',
                }}})}),1):_vm._ssrNode("<div>","</div>",_vm._l((plan.options.slice(0, 6)),function(list,i){return _c('list-item',{key:i,attrs:{"icon":"mark.svg","item":list,"icon-style":{
                  width: '13.9px',
                  height: '13.55px',
                }}})}),1),_vm._ssrNode(" <div class=\"mt-[19px] ml-7\">"+((_vm.more === plan.name)?("<span class=\"text-[#16110D] text-[14px] leading-[170.5%] underline italic cursor-pointer\">See Less</span>"):("<span class=\"text-[#16110D] text-[14px] leading-[170.5%] underline italic cursor-pointer\">See More</span>"))+"</div>")],2)],2)}),0)],2)]),_vm._ssrNode(" "),_c('contact-us')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pricing/index.vue?vue&type=template&id=77527f30&

// EXTERNAL MODULE: ./pages/pricing/data.js
var data = __webpack_require__(217);

// EXTERNAL MODULE: ./mixins/index.js
var mixins = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/pricing/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var pricingvue_type_script_lang_js_ = ({
  name: 'PricesPage',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      activeTab: 'Monthly',
      plans: data["plans"],
      more: ''
    };
  },

  methods: {
    toggleActiveTab(tab) {
      this.activeTab = tab;
    }

  }
});
// CONCATENATED MODULE: ./pages/pricing/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pricingvue_type_script_lang_js_ = (pricingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pricing/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pricingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "588bf512"
  
)

/* harmony default export */ var pricing = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TabToggle: __webpack_require__(231).default,Header: __webpack_require__(52).default,Gap: __webpack_require__(232).default,TButton: __webpack_require__(7).default,TextCard: __webpack_require__(104).default,ListItem: __webpack_require__(128).default,ContactUs: __webpack_require__(172).default})


/***/ })

};;
//# sourceMappingURL=index.js.map