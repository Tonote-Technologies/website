exports.ids = [11];
exports.modules = {

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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1ce2680f", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Daniel.jpeg": 135,
	"./Fikayo.jpeg": 136,
	"./Laide.jpeg": 137,
	"./Shafi.jpeg": 138
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
webpackContext.id = 174;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_4cb405d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-card_info[data-v-4cb405d6]{transition:all 1s ease-in-out}.profile-card:hover .profile-card_info[data-v-4cb405d6]{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ProfileCard/ProfileCard.vue?vue&type=template&id=4cb405d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-card relative lg:w-[302px] overflow-hidden"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(174)("./" + _vm.image)))+" alt class=\"w-full h-full\" data-v-4cb405d6> <div class=\"profile-card_info opacity-0 absolute top-0 bottom-0 left-0 right-0 bg-[#16110D] text-white z-20\" data-v-4cb405d6><div class=\"ml-[20px] mt-[26px] text-[18px]\" data-v-4cb405d6><p class=\"name\" data-v-4cb405d6>"+_vm._ssrEscape("\n        "+_vm._s(_vm.name)+"\n      ")+"</p> <p class=\"role mt-3\" data-v-4cb405d6>"+_vm._ssrEscape("\n        "+_vm._s(_vm.role)+"\n      ")+"</p> <a"+(_vm._ssrAttr("href",_vm.linkedinurl))+" target=\"_blank\" class=\"mt-2\" data-v-4cb405d6><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"LinkedIn icon\" data-v-4cb405d6></a></div></div> <div class=\"tag absolute left-5 bottom-4 w-[103px] h-[47px] bg-white flex justify-center items-center text-sm\" data-v-4cb405d6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.prefName)+"\n  ")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProfileCard/ProfileCard.vue?vue&type=template&id=4cb405d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/ProfileCard/profileCard.js?vue&type=script&lang=js&
/* harmony default export */ var profileCardvue_type_script_lang_js_ = ({
  name: 'ProfileCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefName: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    linkedinurl: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/ProfileCard/profileCard.js?vue&type=script&lang=js&
 /* harmony default export */ var ProfileCard_profileCardvue_type_script_lang_js_ = (profileCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProfileCard/ProfileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ProfileCard_profileCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cb405d6",
  "80c6c374"
  
)

/* harmony default export */ var ProfileCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile-card.js.map