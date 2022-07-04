exports.ids = [39];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("11e2f070", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FeesTable_vue_vue_type_style_index_0_id_8a4e1b36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FeesTable_vue_vue_type_style_index_0_id_8a4e1b36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FeesTable_vue_vue_type_style_index_0_id_8a4e1b36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FeesTable_vue_vue_type_style_index_0_id_8a4e1b36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FeesTable_vue_vue_type_style_index_0_id_8a4e1b36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-8a4e1b36]{font-family:\"Karla\",sans-serif}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/terms_conditions/FeesTable.vue?vue&type=template&id=8a4e1b36&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table table-auto lg:table-fixed w-[500px] text-right border lg:ml-10 lg:my-6"},[_vm._ssrNode("<tr class=\"bg-primary-color text-white font-bold\" data-v-8a4e1b36><th data-v-8a4e1b36>Item</th> <th data-v-8a4e1b36>Cost (₦)</th></tr> <tr class=\"font-bold text-content-color\" data-v-8a4e1b36><td colspan=\"2\" class=\"border\" data-v-8a4e1b36>\n      Minimum Viable Product (MVP) Plans\n    </td></tr> <tr class=\"text-content-color\" data-v-8a4e1b36><td class=\"border\" data-v-8a4e1b36>\n      Basic Plan\n    </td> <td class=\"border\" data-v-8a4e1b36>\n      free\n    </td></tr> <tr class=\"text-content-color\" data-v-8a4e1b36><td class=\"border\" data-v-8a4e1b36>\n      ToNote Pro Plan\n    </td> <td class=\"border\" data-v-8a4e1b36>\n      12,500\n    </td></tr> <tr class=\"text-content-color\" data-v-8a4e1b36><td class=\"border\" data-v-8a4e1b36>\n      ToNote Business Plan\n    </td> <td class=\"border\" data-v-8a4e1b36>\n      custom\n    </td></tr> <tr class=\"font-bold text-content-color\" data-v-8a4e1b36><td colspan=\"2\" class=\"border\" data-v-8a4e1b36>\n      Seals\n    </td></tr> <tr class=\"text-content-color\" data-v-8a4e1b36><td class=\"border\" data-v-8a4e1b36>\n      Single Seal\n    </td> <td class=\"border\" data-v-8a4e1b36>\n      8,000\n    </td></tr> <tr class=\"text-content-color\" data-v-8a4e1b36><td class=\"border\" data-v-8a4e1b36>\n      Additional Seal\n    </td> <td class=\"border\" data-v-8a4e1b36>\n      4,000\n    </td></tr>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/terms_conditions/FeesTable.vue?vue&type=template&id=8a4e1b36&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/terms_conditions/FeesTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeesTablevue_type_script_lang_js_ = ({
  name: 'FeesTable'
});
// CONCATENATED MODULE: ./pages/terms_conditions/FeesTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var terms_conditions_FeesTablevue_type_script_lang_js_ = (FeesTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/terms_conditions/FeesTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  terms_conditions_FeesTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8a4e1b36",
  "514272ae"
  
)

/* harmony default export */ var FeesTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=FeesTable.js.map