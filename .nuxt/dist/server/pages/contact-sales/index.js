exports.ids = [23,2,4];
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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("26dd2f9f", content, true, context)
};

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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AppControlInput_vue_vue_type_style_index_0_id_3a78bbbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AppControlInput_vue_vue_type_style_index_0_id_3a78bbbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AppControlInput_vue_vue_type_style_index_0_id_3a78bbbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AppControlInput_vue_vue_type_style_index_0_id_3a78bbbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AppControlInput_vue_vue_type_style_index_0_id_3a78bbbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".control_input input[data-v-3a78bbbf],.control_input select[data-v-3a78bbbf],.control_input textarea[data-v-3a78bbbf]{background-color:#f9f9f9;padding:10px 20px;-webkit-appearance:none;-moz-appearance:none}.control_input input[data-v-3a78bbbf]::-ms-expand,.control_input select[data-v-3a78bbbf]::-ms-expand,.control_input textarea[data-v-3a78bbbf]::-ms-expand{display:none}.control_input label[data-v-3a78bbbf]{font-style:normal;font-weight:400;font-size:14px;line-height:162.5%;color:#03060b}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/AppControlInput/AppControlInput.vue?vue&type=template&id=3a78bbbf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('validation-provider',{attrs:{"rules":_vm.rules},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"flex flex-col-reverse relative control_input",style:(_vm.style)},[(_vm.controlType === 'input')?_c('input',_vm._b({class:_vm.inputStyle,attrs:{"type":_vm.type,"autocomplete":"new-value","autocorrect":"false","autocapitalize":"false"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.$attrs,false)):_vm._e(),_vm._v(" "),(_vm.controlType === 'textarea')?_c('textarea',_vm._b({class:_vm.inputStyle,attrs:{"rows":"10","autocomplete":"new-value","autocorrect":"false","autocapitalize":"false"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'textarea',_vm.$attrs,false)):_vm._e(),_vm._v(" "),(_vm.controlType === 'select')?_c('select',_vm._b({class:_vm.inputStyle,domProps:{"value":_vm.value},on:{"change":function($event){return _vm.$emit('input', $event.target.value)}}},'select',_vm.$attrs,false),[_c('option',{attrs:{"value":"","selected":"","disabled":""}}),_vm._v(" "),_vm._l((_vm.options),function(opt,index){return _c('option',{key:index,domProps:{"value":opt.name}},[_vm._v("\n        "+_vm._s(opt.name)+"\n      ")])})],2):_vm._e(),_vm._v(" "),(_vm.label)?_c('label',{staticClass:"block"},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]):_vm._e(),_vm._v(" "),(_vm.icon)?_c('i',{staticClass:"absolute right-[15px] bottom-[16.36px]"},[_c('img',{attrs:{"src":__webpack_require__(101)("./" + _vm.icon)}})]):_vm._e()]),_vm._v(" "),_vm._l((errors),function(error){return _c('span',{key:error,staticClass:"text-red-500 text-xs"},[_vm._v("\n    "+_vm._s(error)+"\n  ")])})]}}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppControlInput/AppControlInput.vue?vue&type=template&id=3a78bbbf&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/AppControlInput/appControlInput.js?vue&type=script&lang=js&

/* harmony default export */ var appControlInputvue_type_script_lang_js_ = ({
  name: 'AppInputControl',
  components: {
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  props: {
    controlType: {
      type: String,
      required: true,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    inputStyle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    margin: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {
        'margin-top': this.margin
      };
    }

  }
});
// CONCATENATED MODULE: ./components/AppControlInput/appControlInput.js?vue&type=script&lang=js&
 /* harmony default export */ var AppControlInput_appControlInputvue_type_script_lang_js_ = (appControlInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AppControlInput/AppControlInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppControlInput_appControlInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a78bbbf",
  "c87b2e20"
  
)

/* harmony default export */ var AppControlInput = __webpack_exports__["default"] = (component.exports);

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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sales.cfcf4ac.png";

/***/ }),

/***/ 234:
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Albania\",\"code\":\"AL\"},{\"name\":\"Åland Islands\",\"code\":\"AX\"},{\"name\":\"Algeria\",\"code\":\"DZ\"},{\"name\":\"American Samoa\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"code\":\"AD\"},{\"name\":\"Angola\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"code\":\"AQ\"},{\"name\":\"Antigua and Barbuda\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"code\":\"AW\"},{\"name\":\"Australia\",\"code\":\"AU\"},{\"name\":\"Austria\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"code\":\"AZ\"},{\"name\":\"Bahamas (the)\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"code\":\"BE\"},{\"name\":\"Belize\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"code\":\"BT\"},{\"name\":\"Bolivia (Plurinational State of)\",\"code\":\"BO\"},{\"name\":\"Bonaire, Sint Eustatius and Saba\",\"code\":\"BQ\"},{\"name\":\"Bosnia and Herzegovina\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"code\":\"BW\"},{\"name\":\"Bouvet Island\",\"code\":\"BV\"},{\"name\":\"Brazil\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory (the)\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"code\":\"BI\"},{\"name\":\"Cabo Verde\",\"code\":\"CV\"},{\"name\":\"Cambodia\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"code\":\"CM\"},{\"name\":\"Canada\",\"code\":\"CA\"},{\"name\":\"Cayman Islands (the)\",\"code\":\"KY\"},{\"name\":\"Central African Republic (the)\",\"code\":\"CF\"},{\"name\":\"Chad\",\"code\":\"TD\"},{\"name\":\"Chile\",\"code\":\"CL\"},{\"name\":\"China\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Islands (the)\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"code\":\"CO\"},{\"name\":\"Comoros (the)\",\"code\":\"KM\"},{\"name\":\"Congo (the Democratic Republic of the)\",\"code\":\"CD\"},{\"name\":\"Congo (the)\",\"code\":\"CG\"},{\"name\":\"Cook Islands (the)\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"code\":\"CR\"},{\"name\":\"Croatia\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"code\":\"CU\"},{\"name\":\"Curaçao\",\"code\":\"CW\"},{\"name\":\"Cyprus\",\"code\":\"CY\"},{\"name\":\"Czechia\",\"code\":\"CZ\"},{\"name\":\"Côte d'Ivoire\",\"code\":\"CI\"},{\"name\":\"Denmark\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"code\":\"DM\"},{\"name\":\"Dominican Republic (the)\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"code\":\"EE\"},{\"name\":\"Eswatini\",\"code\":\"SZ\"},{\"name\":\"Ethiopia\",\"code\":\"ET\"},{\"name\":\"Falkland Islands (the) [Malvinas]\",\"code\":\"FK\"},{\"name\":\"Faroe Islands (the)\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"code\":\"FI\"},{\"name\":\"France\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"code\":\"PF\"},{\"name\":\"French Southern Territories (the)\",\"code\":\"TF\"},{\"name\":\"Gabon\",\"code\":\"GA\"},{\"name\":\"Gambia (the)\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"code\":\"GE\"},{\"name\":\"Germany\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"code\":\"GI\"},{\"name\":\"Greece\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"code\":\"GP\"},{\"name\":\"Guam\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"code\":\"HT\"},{\"name\":\"Heard Island and McDonald Islands\",\"code\":\"HM\"},{\"name\":\"Holy See (the)\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"code\":\"IS\"},{\"name\":\"India\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"code\":\"ID\"},{\"name\":\"Iran (Islamic Republic of)\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"code\":\"IM\"},{\"name\":\"Israel\",\"code\":\"IL\"},{\"name\":\"Italy\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"code\":\"JM\"},{\"name\":\"Japan\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"code\":\"KI\"},{\"name\":\"Korea (the Democratic People's Republic of)\",\"code\":\"KP\"},{\"name\":\"Korea (the Republic of)\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"code\":\"KG\"},{\"name\":\"Lao People's Democratic Republic (the)\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"code\":\"LR\"},{\"name\":\"Libya\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"code\":\"LU\"},{\"name\":\"Macao\",\"code\":\"MO\"},{\"name\":\"Madagascar\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"code\":\"MV\"},{\"name\":\"Mali\",\"code\":\"ML\"},{\"name\":\"Malta\",\"code\":\"MT\"},{\"name\":\"Marshall Islands (the)\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"code\":\"MX\"},{\"name\":\"Micronesia (Federated States of)\",\"code\":\"FM\"},{\"name\":\"Moldova (the Republic of)\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"code\":\"NP\"},{\"name\":\"Netherlands (the)\",\"code\":\"NL\"},{\"name\":\"New Caledonia\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"code\":\"NI\"},{\"name\":\"Niger (the)\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"code\":\"NG\"},{\"name\":\"Niue\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands (the)\",\"code\":\"MP\"},{\"name\":\"Norway\",\"code\":\"NO\"},{\"name\":\"Oman\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"code\":\"PK\"},{\"name\":\"Palau\",\"code\":\"PW\"},{\"name\":\"Palestine, State of\",\"code\":\"PS\"},{\"name\":\"Panama\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"code\":\"PY\"},{\"name\":\"Peru\",\"code\":\"PE\"},{\"name\":\"Philippines (the)\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"code\":\"PN\"},{\"name\":\"Poland\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"code\":\"QA\"},{\"name\":\"Republic of North Macedonia\",\"code\":\"MK\"},{\"name\":\"Romania\",\"code\":\"RO\"},{\"name\":\"Russian Federation (the)\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"code\":\"RW\"},{\"name\":\"Réunion\",\"code\":\"RE\"},{\"name\":\"Saint Barthélemy\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan da Cunha\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"code\":\"LC\"},{\"name\":\"Saint Martin (French part)\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"code\":\"SM\"},{\"name\":\"Sao Tome and Principe\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"code\":\"SG\"},{\"name\":\"Sint Maarten (Dutch part)\",\"code\":\"SX\"},{\"name\":\"Slovakia\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"code\":\"GS\"},{\"name\":\"South Sudan\",\"code\":\"SS\"},{\"name\":\"Spain\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"code\":\"LK\"},{\"name\":\"Sudan (the)\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"code\":\"SR\"},{\"name\":\"Svalbard and Jan Mayen\",\"code\":\"SJ\"},{\"name\":\"Sweden\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"code\":\"SY\"},{\"name\":\"Taiwan (Province of China)\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"code\":\"TJ\"},{\"name\":\"Tanzania, United Republic of\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"code\":\"TL\"},{\"name\":\"Togo\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands (the)\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates (the)\",\"code\":\"AE\"},{\"name\":\"United Kingdom of Great Britain and Northern Ireland (the)\",\"code\":\"GB\"},{\"name\":\"United States Minor Outlying Islands (the)\",\"code\":\"UM\"},{\"name\":\"United States of America (the)\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"code\":\"VU\"},{\"name\":\"Venezuela (Bolivarian Republic of)\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"code\":\"VN\"},{\"name\":\"Virgin Islands (British)\",\"code\":\"VG\"},{\"name\":\"Virgin Islands (U.S.)\",\"code\":\"VI\"},{\"name\":\"Wallis and Futuna\",\"code\":\"WF\"},{\"name\":\"Western Sahara\",\"code\":\"EH\"},{\"name\":\"Yemen\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"code\":\"ZW\"}]");

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/contact-sales/index.vue?vue&type=template&id=1ef6a2ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"contact-sale"}},[_vm._ssrNode("<main class=\"mb-[56px] lg:mb-[113px]\">","</main>",[_vm._ssrNode("<div class=\"wrapper\">","</div>",[_vm._ssrNode("<div class=\"mt-[54px]\"><h1 class=\"font-NeueHelvetica text-center text-[34.98px] lg:text-left lg:text-[52.35px]\">\n          Contact Sales\n        </h1> <p class=\"textcard_body lg:w-[377px] lg:mt-[16px] text-[14px] lg:text-[18px] text-center lg:text-left leading-[170.5%] lg:leading-[193.5%]\">\n          Tell us how we can help and we’ll get in touch shortly.\n        </p></div> "),_vm._ssrNode("<div class=\"flex flex-col lg:flex-row items-center lg:justify-between\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[505px] 2xl:w-[582px] mt-[35px] lg:mt-[41px]\">","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
var reset = ref.reset;
return [_c('form',{ref:"form",attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":function($event){$event.preventDefault();return reset.apply(null, arguments)}}},[_c('div',[_c('div',{staticClass:"block lg:flex lg:justify-between"},[_c('AppControlInput',{attrs:{"name":"first name","control-type":"input","label":"First name","rules":"required","input-style":"mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.first_name),callback:function ($$v) {_vm.$set(_vm.form, "first_name", $$v)},expression:"form.first_name"}}),_vm._v(" "),_c('AppControlInput',{attrs:{"control-type":"input","label":"Last name","name":"last name","rules":"required","input-style":"mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.last_name),callback:function ($$v) {_vm.$set(_vm.form, "last_name", $$v)},expression:"form.last_name"}})],1),_vm._v(" "),_c('div',{staticClass:"block lg:flex lg:justify-between lg:mt-[19px] lg:mb-[15px]"},[_c('AppControlInput',{attrs:{"control-type":"input","label":"Company name","name":"company name","rules":"required","input-style":"mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.company_name),callback:function ($$v) {_vm.$set(_vm.form, "company_name", $$v)},expression:"form.company_name"}}),_vm._v(" "),_c('AppControlInput',{attrs:{"control-type":"input","label":"Company email","name":"company email","rules":"required|email","input-style":"mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.company_email),callback:function ($$v) {_vm.$set(_vm.form, "company_email", $$v)},expression:"form.company_email"}})],1),_vm._v(" "),_c('div',{staticClass:"block lg:flex lg:justify-between lg:flex-nowrap"},[_c('AppControlInput',{attrs:{"control-type":"input","label":"Phone no","name":"phone number","type":"tel","rules":"required|numeric|min:11","input-style":"mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.phone_number),callback:function ($$v) {_vm.$set(_vm.form, "phone_number", $$v)},expression:"form.phone_number"}}),_vm._v(" "),_c('AppControlInput',{attrs:{"control-type":"select","label":"Country","name":"country","options":_vm.countries,"icon":"dropdown-down.svg","rules":"required","input-style":"lg:mb-0 lg:w-[236px] rounded-[4px]"},model:{value:(_vm.form.country),callback:function ($$v) {_vm.$set(_vm.form, "country", $$v)},expression:"form.country"}})],1),_vm._v(" "),_c('div',{staticClass:"lg:mt-[15px] lg:mb-[25px]"},[_c('AppControlInput',{attrs:{"margin":"19px","control-type":"textarea","rules":"required","label":"Leave us a message","name":"message","input-style":"mb-[19px] lg:mb-0 lg:w-full rounded-[4px] resize-none"},model:{value:(_vm.form.message_body),callback:function ($$v) {_vm.$set(_vm.form, "message_body", $$v)},expression:"form.message_body"}})],1),_vm._v(" "),_c('t-button',{attrs:{"size":"lg","submit-type":"submit","disabled":_vm.buttonText !== 'Submit' || invalid}},[(!_vm.loading)?[_vm._v("\n                    "+_vm._s(_vm.buttonText)+"\n                  ")]:_c('Loader')],2)],1),_vm._v(" "),_c('p',{staticClass:"mt-[10px] text-[red]"},[_vm._v("\n                "+_vm._s(_vm.errorMsg)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"mt-[32px] mb-[70px] lg:mt-[24px] text-[14px] leading-[162.5%]"},[_vm._v("\n                By submitting this form, I confirm that I have read and "),_c('br'),_vm._v("\n                understood Tonote’s\n                "),_c('a',{staticClass:"underline",attrs:{"href":"/privacy-policy"}},[_vm._v("Privacy Policy.")])])])]}}])})],1),_vm._ssrNode(" <div class=\"w-auto relative\"><img"+(_vm._ssrAttr("src",__webpack_require__(190)))+" alt=\"sales image\" class=\"w-full h-full max-w-none\"></div>")],2)],2)]),_vm._ssrNode(" "),_c('contact-us')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact-sales/index.vue?vue&type=template&id=1ef6a2ec&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(17);

// EXTERNAL MODULE: ./pages/contact-sales/data.json
var data = __webpack_require__(234);

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/contact-sales/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var contact_salesvue_type_script_lang_js_ = ({
  name: 'ContactSalesPage',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    Loader: Loader["default"]
  },

  data() {
    return {
      form: {},
      loading: false,
      buttonText: 'Submit',
      countries: data,
      errorMsg: ''
    };
  },

  methods: {
    async onSubmit() {
      this.errorMsg = '';
      const self = this;
      this.loading = true;

      try {
        const {
          status,
          code
        } = await this.$axios.$post('api/v1/user/profile/contact-sales', this.form);

        if (status === 'success' && code === 200) {
          this.$refs.form.reset();
          this.form = {};
          this.buttonText = 'Message Sent';
        }
      } catch (error) {
        this.errorMsg = 'Unable to process request.';
        return error;
      } finally {
        this.loading = false;
        setTimeout(() => {
          self.buttonText = 'Submit';
        }, 3000);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/contact-sales/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_salesvue_type_script_lang_js_ = (contact_salesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact-sales/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_salesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09114b2a"
  
)

/* harmony default export */ var contact_sales = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppControlInput: __webpack_require__(134).default,Loader: __webpack_require__(9).default,TButton: __webpack_require__(7).default,ContactUs: __webpack_require__(172).default})


/***/ })

};;
//# sourceMappingURL=index.js.map