exports.ids = [2];
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

/***/ })

};;
//# sourceMappingURL=app-control-input.js.map