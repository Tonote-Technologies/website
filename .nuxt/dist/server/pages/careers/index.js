exports.ids = [22,12,16,18,21];
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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("818eb702", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("df691972", content, true, context)
};

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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_fce11b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_fce11b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_fce11b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_fce11b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_fce11b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll-snap_y[data-v-fce11b6c]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-fce11b6c],.scroll-snap_y li[data-v-fce11b6c]{scroll-snap-align:start}.banner_alert[data-v-fce11b6c],.btn_fadein[data-v-fce11b6c],.hero_right[data-v-fce11b6c],.heroBody[data-v-fce11b6c],.heroTitle[data-v-fce11b6c],.logo_anime[data-v-fce11b6c],.mobile_menu.active ul>li[data-v-fce11b6c]:first-child,.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(2),.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(3),.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(4),.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(5),.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(6),.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(7),.nav__menu>li[data-v-fce11b6c]:first-child,.nav__menu>li[data-v-fce11b6c]:nth-child(2),.nav__menu>li[data-v-fce11b6c]:nth-child(3),.nav__menu>li[data-v-fce11b6c]:nth-child(4),.nav__menu>li[data-v-fce11b6c]:nth-child(5),.nav__menu__buttons[data-v-fce11b6c],.sectionAnime[data-v-fce11b6c]{opacity:0;-webkit-animation-name:slide-right-data-v-fce11b6c;animation-name:slide-right-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-fce11b6c]{-webkit-animation-name:slide-right-data-v-fce11b6c;animation-name:slide-right-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-fce11b6c]:first-child{-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-fce11b6c]:nth-child(7){-webkit-animation-name:slide-right-data-v-fce11b6c;animation-name:slide-right-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-fce11b6c]:first-child{-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-fce11b6c]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-fce11b6c]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-fce11b6c]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-fce11b6c]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-fce11b6c]{-webkit-animation-name:fade-in-data-v-fce11b6c;animation-name:fade-in-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-fce11b6c]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-fce11b6c],.heroTitle[data-v-fce11b6c]{-webkit-animation-name:text-slide-up-data-v-fce11b6c;animation-name:text-slide-up-data-v-fce11b6c;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-fce11b6c]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-fce11b6c]{-webkit-animation-name:slide-left-data-v-fce11b6c;animation-name:slide-left-data-v-fce11b6c}.btn_fadein[data-v-fce11b6c],.hero_right[data-v-fce11b6c]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-fce11b6c]{-webkit-animation-name:fade-in-data-v-fce11b6c;animation-name:fade-in-data-v-fce11b6c}.sectionAnime[data-v-fce11b6c]{-webkit-animation-name:section-slide-up-data-v-fce11b6c;animation-name:section-slide-up-data-v-fce11b6c;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-fce11b6c{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-fce11b6c{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-fce11b6c{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-fce11b6c{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-fce11b6c{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-fce11b6c{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-fce11b6c{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-fce11b6c{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-fce11b6c{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-fce11b6c{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-fce11b6c]{box-sizing:border-box;font-family:\"Poppins\",sans-serif}body[data-v-fce11b6c]{position:relative}body[data-v-fce11b6c],html[data-v-fce11b6c]{overflow-x:hidden}html[data-v-fce11b6c]{scroll-behavior:smooth}.wrapper[data-v-fce11b6c]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-fce11b6c]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-fce11b6c]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-fce11b6c]{padding-inline:1rem}}.textcard_header[data-v-fce11b6c]{font-family:\"NeueHelvetica\";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-fce11b6c]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-fce11b6c]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-fce11b6c]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-fce11b6c]{font-weight:700;font-size:52.3502px;line-height:98%;letter-spacing:-.015em;color:#03060b}.c-tag[data-v-fce11b6c]{padding:2px 10px;border-radius:14px;font-weight:400;font-size:14px;line-height:18px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_48c703e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_48c703e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_48c703e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_48c703e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_48c703e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll-snap_y[data-v-48c703e6]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-48c703e6],.scroll-snap_y li[data-v-48c703e6]{scroll-snap-align:start}.banner_alert[data-v-48c703e6],.btn_fadein[data-v-48c703e6],.hero_right[data-v-48c703e6],.heroBody[data-v-48c703e6],.heroTitle[data-v-48c703e6],.logo_anime[data-v-48c703e6],.mobile_menu.active ul>li[data-v-48c703e6]:first-child,.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(2),.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(3),.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(4),.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(5),.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(6),.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(7),.nav__menu>li[data-v-48c703e6]:first-child,.nav__menu>li[data-v-48c703e6]:nth-child(2),.nav__menu>li[data-v-48c703e6]:nth-child(3),.nav__menu>li[data-v-48c703e6]:nth-child(4),.nav__menu>li[data-v-48c703e6]:nth-child(5),.nav__menu__buttons[data-v-48c703e6],.sectionAnime[data-v-48c703e6]{opacity:0;-webkit-animation-name:slide-right-data-v-48c703e6;animation-name:slide-right-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-48c703e6]{-webkit-animation-name:slide-right-data-v-48c703e6;animation-name:slide-right-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-48c703e6]:first-child{-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-48c703e6]:nth-child(7){-webkit-animation-name:slide-right-data-v-48c703e6;animation-name:slide-right-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-48c703e6]:first-child{-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-48c703e6]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-48c703e6]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-48c703e6]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-48c703e6]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-48c703e6]{-webkit-animation-name:fade-in-data-v-48c703e6;animation-name:fade-in-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-48c703e6]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-48c703e6],.heroTitle[data-v-48c703e6]{-webkit-animation-name:text-slide-up-data-v-48c703e6;animation-name:text-slide-up-data-v-48c703e6;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-48c703e6]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-48c703e6]{-webkit-animation-name:slide-left-data-v-48c703e6;animation-name:slide-left-data-v-48c703e6}.btn_fadein[data-v-48c703e6],.hero_right[data-v-48c703e6]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-48c703e6]{-webkit-animation-name:fade-in-data-v-48c703e6;animation-name:fade-in-data-v-48c703e6}.sectionAnime[data-v-48c703e6]{-webkit-animation-name:section-slide-up-data-v-48c703e6;animation-name:section-slide-up-data-v-48c703e6;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-48c703e6{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-48c703e6{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-48c703e6{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-48c703e6{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-48c703e6{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-48c703e6{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-48c703e6{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-48c703e6{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-48c703e6{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-48c703e6{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-48c703e6]{box-sizing:border-box;font-family:\"Poppins\",sans-serif}body[data-v-48c703e6]{position:relative}body[data-v-48c703e6],html[data-v-48c703e6]{overflow-x:hidden}html[data-v-48c703e6]{scroll-behavior:smooth}.wrapper[data-v-48c703e6]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-48c703e6]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-48c703e6]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-48c703e6]{padding-inline:1rem}}.textcard_header[data-v-48c703e6]{font-family:\"NeueHelvetica\";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-48c703e6]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-48c703e6]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-48c703e6]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-48c703e6]{font-weight:700;font-size:52.3502px;line-height:98%;letter-spacing:-.015em;color:#03060b}.c-roleCard[data-v-48c703e6]{background:#fff;box-shadow:0 10px 35px rgba(0,0,0,.1);border-radius:8px;padding:26px 32px;margin-bottom:32px}.c-roleCard__jobTitle[data-v-48c703e6]{font-weight:600;font-size:18px;line-height:193.5%;color:#16110d;font-style:normal}.c-roleCard__location[data-v-48c703e6]{font-weight:400;font-size:18px;line-height:193.5%;color:#626262}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workBenefits", function() { return workBenefits; });
const values = [{
  header: 'F – Focused but Flexible',
  content: 'We are focused on our mission and we work towards it while empowering our employees in a work environment that promotes optimal work-life balance.'
}, {
  header: 'A – Always Obsessing',
  content: 'We are consistently obsessing over our mission and the best way to deliver it to the world. Together, we havetaken ownership of this mission and actively strive to add more value every day.'
}, {
  header: 'C – Curious',
  content: 'Being curious means we ask the right questions. One of which will always be ‘why?’ In everything that we do, asking ‘why?’ always puts things in perspective and allows us to deliver a well-thought-out result.'
}, {
  header: 'T – Trust the Process',
  content: 'We are very process oriented. But that is not what this is about. Wins, losses, learnings, development, growth. These are all part of the process that we will experience together, and we trust it.'
}, {
  header: 'S – Safe',
  content: 'The safety of our virtual environment is as paramount as the safety of our physical environment. We take security very seriously and that shines through in our product and policies.'
}];
const workBenefits = [{
  header: 'Work Culture',
  content: 'We are building a culture that promotes work-life balance, collaborative, fun-loving and savvy employees.'
}, {
  header: 'Employee Development ',
  content: 'Relevant training, ToNote’s book-club, lunch & learns.'
}, {
  header: 'Work Benefits',
  content: 'Amazing health and group-life insurance, Hybrid work schedule, Work-from-Home'
}];

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Tag/Tag.vue?vue&type=template&id=fce11b6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tag",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tag/Tag.vue?vue&type=template&id=fce11b6c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Tag/Tag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  name: 'TagComponent',
  props: {
    color: {
      type: String,
      default: '#003BB3'
    },
    backgroundColor: {
      type: String,
      default: '#E2ECFF'
    }
  },
  computed: {
    style() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Tag/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tag_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Tag/Tag.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tag_Tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fce11b6c",
  "47156970"
  
)

/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Roles/Roles.vue?vue&type=template&id=48c703e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"c-roleCard block lg:flex lg:justify-between\" data-v-48c703e6><p class=\"c-roleCard__jobTitle\" data-v-48c703e6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.jobTitle)+"\n    ")+"</p> <p class=\"c-roleCard__location text-left\" data-v-48c703e6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.location)+"\n    ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Roles/Roles.vue?vue&type=template&id=48c703e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Roles/Roles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Rolesvue_type_script_lang_js_ = ({
  name: 'RolesComponent',
  props: {
    jobTitle: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Roles/Roles.vue?vue&type=script&lang=js&
 /* harmony default export */ var Roles_Rolesvue_type_script_lang_js_ = (Rolesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Roles/Roles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Roles_Rolesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48c703e6",
  "09b9940e"
  
)

/* harmony default export */ var Roles = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/careers/index.vue?vue&type=template&id=5f31a690&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<main class=\"mb-[200px]\">","</main>",[_vm._ssrNode("<div class=\"wrapper\">","</div>",[_vm._ssrNode("<header class=\"space-y-[15px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[31px]\">","</header>",[_vm._ssrNode("<h1 class=\"text-header-color text-[34.9808px] lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica text-center\">\n          Together at ToNote\n        </h1> <p class=\"text-center text-content-color text-[11.6603px] lg:text-[18px] leading-[170.5%] lg:leading-[193.5%] lg:w-[798px]\">\n          We believe that experiences are stronger when shared. Our journey at\n          ToNote has just begun, and we are consistently looking for great\n          talent to work, play and ‘experience’ with the ToNote team.\n        </p> "),_c('t-button',{attrs:{"size":"md","width":"150px"}},[_vm._v(" Join the Team ")])],2),_vm._ssrNode(" <div class=\"mb-[40px] lg:mb-[94px] mt-[40px] lg:mt-[71px]\"><div class=\"grid grid-rows-3 grid-flow-col gap-x-[6.75px] lg:gap-x-[23px] gap-y-[7.39px] lg:gap-y-[21px] h-[135px] lg:h-[420px]\"><div class=\"row-span-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(177)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(178)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(179)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-3 col-span-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(180)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(181)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(182)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div></div></div> <div class=\"space-y-[8px] flex flex-col items-center w-full lg:w-[829px] mx-auto lg:mb-[58px] mb-[39px]\"><h3 class=\"text-header-color text-[23.5135px] font-bold\">\n          Our Values\n        </h3> <p class=\"text-content-color text-[14px] lg:text-[18px]\">\n          Everything that we do is driven by\n          <span class=\"text-[#FF9901]\"><strong>FACTS</strong></span>:\n        </p></div> "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 text-center lg:text-left\">","</div>",_vm._l((_vm.values),function(value,index){return _c('text-card',{key:index,attrs:{"header":value.header,"header-style":{
            'font-size': '18px',
          },"main-style":{
            'font-size': '18px',
            margin: '15px 0 15px',
          }}},[_c('p',{staticClass:"textcard_body"},[_vm._v("\n            "+_vm._s(value.content)+"\n          ")])])}),1),_vm._ssrNode(" <div class=\"grid grid-rows-3 grid-flow-col gap-x-[5.17px] lg:gap-x-[16px] gap-y-[5.5px] lg:gap-y-[17px] h-[225.75px] lg:h-[550px] mt-[49px] lg:mt-[75px]\"><div class=\"row-span-3 col-span-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(183)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-2 col-span-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(184)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div> <div class=\"row-span-1 col-span-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(185)))+" alt=\"team image\" class=\"w-full h-full object-cover\"></div></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h3 class=\"mx-auto text-header-color font-bold text-[23.5135px] text-center w-auto max-w-[292px] md:max-w-none lg:w-[482px] mb-[34px] lg:mb-[63px] mt-[68px] lg:mt-[100px] font-NeueHelvetica\">\n          We are currently looking for candidates to fill these roles:\n        </h3> "),_vm._ssrNode("<div class=\"mx-auto lg:w-[991px]\">","</div>",[_vm._ssrNode("<div class=\"mb-[12px] lg:mb-[20px]\">","</div>",[_c('Tag',[_vm._v("Design")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Roles',{attrs:{"job-title":"Illustrator","location":"Remote, OK"}}),_vm._ssrNode(" "),_c('Roles',{attrs:{"job-title":"UI Designer","location":"Lagos, Nigeria"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-[12px] lg:mb-[20px]\">","</div>",[_c('Tag',{attrs:{"color":"#2FA36B","background-color":"#E8FFE8"}},[_vm._v("\n              Engineering\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Roles',{attrs:{"job-title":"Front End Developer","location":"Accra, Ghana"}}),_vm._ssrNode(" "),_c('Roles',{attrs:{"job-title":"Back End Developer","location":"Nairobi, Kenya"}}),_vm._ssrNode(" "),_c('Roles',{attrs:{"job-title":"Android Developer","location":"Remote, OK"}})],2)],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/careers/index.vue?vue&type=template&id=5f31a690&

// EXTERNAL MODULE: ./pages/careers/data.js
var data = __webpack_require__(211);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/careers/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var careersvue_type_script_lang_js_ = ({
  name: 'CareersPage',

  data() {
    return {
      values: data["values"],
      workBenefits: data["workBenefits"]
    };
  }

});
// CONCATENATED MODULE: ./pages/careers/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_careersvue_type_script_lang_js_ = (careersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/careers/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_careersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ddbdc17e"
  
)

/* harmony default export */ var careers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TButton: __webpack_require__(7).default,Header: __webpack_require__(52).default,TextCard: __webpack_require__(104).default,Tag: __webpack_require__(228).default,Roles: __webpack_require__(229).default})


/***/ })

};;
//# sourceMappingURL=index.js.map