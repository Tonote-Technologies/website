exports.ids = [15];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=tab-toggle.js.map