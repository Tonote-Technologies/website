exports.ids = [13];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=signup-card.js.map