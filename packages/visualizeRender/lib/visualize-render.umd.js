(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["visualize-render"] = factory();
	else
		root["visualize-render"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e1b":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentWrapper */ "af2e");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "visualizeRender",
  components: { ComponentWrapper: _ComponentWrapper__WEBPACK_IMPORTED_MODULE_0__["default"] },
  props: {
    componentData: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    canvasStyleData: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  // methods: {
  //   changeStyleWithScale(value) {
  //     return (value * parseInt(this.canvasStyleData.scale)) / 100;
  //   },
  // },
});


/***/ }),

/***/ "14e2":
/*!****************************************!*\
  !*** ./packages/utils/runAnimation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return runAnimation; });
async function runAnimation($el, animations = []) {
    const play = (animation) => new Promise(resolve => {
        $el.classList.add(animation.value, 'animated')
        const removeAnimation = () => {
            $el.removeEventListener('animationend', removeAnimation)
            $el.removeEventListener('animationcancel', removeAnimation)
            $el.classList.remove(animation.value, 'animated')
            resolve()
        }
            
        $el.addEventListener('animationend', removeAnimation)
        $el.addEventListener('animationcancel', removeAnimation)
    })

    for (let i = 0, len = animations.length; i < len; i++) {
        await play(animations[i])
    }
}


/***/ }),

/***/ "1eb2":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(/*! @soda/get-current-script */ "8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ __webpack_exports__["default"] = (null);


/***/ }),

/***/ "2714":
/*!***********************************************************************!*\
  !*** ./packages/Render/ComponentWrapper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentWrapper.vue?vue&type=script&lang=js& */ "dde8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2877":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2d35":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/ComponentWrapper.vue?vue&type=style&index=0&id=b2a398b8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a0d":
/*!***************************!*\
  !*** ./packages/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var visualize_components_lib_visualize_components_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! visualize-components/lib/visualize-components.css */ "d538");
/* harmony import */ var visualize_components_lib_visualize_components_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(visualize_components_lib_visualize_components_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/reset.css */ "961b");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/animate.css */ "89c0");
/* harmony import */ var _styles_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var visualize_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! visualize-components */ "ba21");
/* harmony import */ var visualize_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(visualize_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Render */ "eeef");
const packVersion = '0.0.1-beta.4'
const r = ['color: #fff', 'border-top-left-radius:3px', 'border-bottom-left-radius:3px', 'background-color: #564b4f', 'padding: 5px'].join(';');
const i = ['color: #fff', 'border-top-right-radius:3px', 'border-bottom-right-radius:3px', 'background-color: #4fc08d', 'padding: 5px'].join(';');
console.log('%cvisualize-render %c'.concat(packVersion), r, i);





const install = function (Vue, opt = []) {
  if (install.installed) return;
  if (opt)
  {
    opt.forEach(i => {
      Vue.component(i.name, i)
    })
  }
  Vue.use(visualize_components__WEBPACK_IMPORTED_MODULE_3___default.a)
  Vue.use(_Render__WEBPACK_IMPORTED_MODULE_4__["default"])
};
if (typeof window !== "undefined" && window.Vue)
{
  install(window.Vue);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  install,
});


/***/ }),

/***/ "5255":
/*!**********************************!*\
  !*** ./packages/utils/events.js ***!
  \**********************************/
/*! exports provided: mixins, events, eventList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventList", function() { return eventList; });
// 编辑器自定义事件
const events = {
    redirect(url) {
        if (url) {
            window.location.href = url
        }
    },

    alert(msg) {
        if (msg) {
            alert(msg)
        }
    },
}

const mixins = {
    methods: events,
}

const eventList = [
    {
        key: 'redirect',
        label: '跳转事件',
        event: events.redirect,
        param: '',
    },
    {
        key: 'alert',
        label: 'alert 事件',
        event: events.alert,
        param: '',
    },
]



/***/ }),

/***/ "60ee":
/*!******************************************************************************!*\
  !*** ./packages/Render/index.vue?vue&type=template&id=66d052f2&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64573b6a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=66d052f2&scoped=true& */ "d04e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "6fb4":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64573b6a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/ComponentWrapper.vue?vue&type=template&id=b2a398b8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shape",style:(_vm.getShapeStyle(_vm.config.style)),on:{"click":_vm.handleClick}},[_c(_vm.config.component,_vm._b({tag:"component",staticClass:"component",style:(_vm.getComponentStyle(_vm.config.style,this.shapeStyle)),attrs:{"groupValue":_vm.config.groupValue,"element":_vm.config}},'component',_vm.config.props?_vm.config.props.model:{},false))],1)}
var staticRenderFns = []



/***/ }),

/***/ "7ade":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/index.vue?vue&type=style&index=0&id=66d052f2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c54":
/*!*********************************************************************************************!*\
  !*** ./packages/Render/index.vue?vue&type=style&index=0&id=66d052f2&lang=scss&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=66d052f2&lang=scss&scoped=true& */ "7ade");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8875":
/*!********************************************************!*\
  !*** ./node_modules/@soda/get-current-script/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "89c0":
/*!*************************************!*\
  !*** ./packages/styles/animate.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "916f":
/*!***********************************!*\
  !*** ./packages/Render/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=66d052f2&scoped=true& */ "60ee");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "e9fb");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_66d052f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=66d052f2&lang=scss&scoped=true& */ "7c54");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_66d052f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66d052f2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "961b":
/*!***********************************!*\
  !*** ./packages/styles/reset.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "af2e":
/*!**********************************************!*\
  !*** ./packages/Render/ComponentWrapper.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentWrapper.vue?vue&type=template&id=b2a398b8&scoped=true& */ "bc62");
/* harmony import */ var _ComponentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentWrapper.vue?vue&type=script&lang=js& */ "2714");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentWrapper.vue?vue&type=style&index=0&id=b2a398b8&lang=scss&scoped=true& */ "bee7");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComponentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b2a398b8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ba21":
/*!***************************************************************************!*\
  !*** ./node_modules/visualize-components/lib/visualize-components.umd.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "037e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "042d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "04fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("970b"));

__webpack_require__("0ca1");

var _cRender = _interopRequireDefault(__webpack_require__("9886"));

var _util = __webpack_require__("5557");

var _core = __webpack_require__("a736");

var Charts = function Charts(dom) {
  (0, _classCallCheck2["default"])(this, Charts);

  if (!dom) {
    console.error('Charts Missing parameters!');
    return false;
  }

  var clientWidth = dom.clientWidth,
      clientHeight = dom.clientHeight;
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', clientWidth);
  canvas.setAttribute('height', clientHeight);
  dom.appendChild(canvas);
  var attribute = {
    container: dom,
    canvas: canvas,
    render: new _cRender["default"](canvas),
    option: null
  };
  Object.assign(this, attribute);
};
/**
 * @description Set chart option
 * @param {Object} option Chart option
 * @param {Boolean} animationEnd Execute animationEnd
 * @return {Undefined} No return
 */


exports["default"] = Charts;

Charts.prototype.setOption = function (option) {
  var animationEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!option || (0, _typeof2["default"])(option) !== 'object') {
    console.error('setOption Missing parameters!');
    return false;
  }

  if (animationEnd) this.render.graphs.forEach(function (graph) {
    return graph.animationEnd();
  });
  var optionCloned = (0, _util.deepClone)(option, true);
  (0, _core.mergeColor)(this, optionCloned);
  (0, _core.grid)(this, optionCloned);
  (0, _core.axis)(this, optionCloned);
  (0, _core.radarAxis)(this, optionCloned);
  (0, _core.title)(this, optionCloned);
  (0, _core.bar)(this, optionCloned);
  (0, _core.line)(this, optionCloned);
  (0, _core.pie)(this, optionCloned);
  (0, _core.radar)(this, optionCloned);
  (0, _core.gauge)(this, optionCloned);
  (0, _core.legend)(this, optionCloned);
  this.option = option;
  this.render.launchAnimation(); // console.warn(this)
};
/**
 * @description Resize chart
 * @return {Undefined} No return
 */


Charts.prototype.resize = function () {
  var container = this.container,
      canvas = this.canvas,
      render = this.render,
      option = this.option;
  var clientWidth = container.clientWidth,
      clientHeight = container.clientHeight;
  canvas.setAttribute('width', clientWidth);
  canvas.setAttribute('height', clientHeight);
  render.area = [clientWidth, clientHeight];
  this.setOption(option);
};

/***/ }),

/***/ "050c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bezierCurveToPolyline", {
  enumerable: true,
  get: function get() {
    return _bezierCurveToPolyline.bezierCurveToPolyline;
  }
});
Object.defineProperty(exports, "getBezierCurveLength", {
  enumerable: true,
  get: function get() {
    return _bezierCurveToPolyline.getBezierCurveLength;
  }
});
Object.defineProperty(exports, "polylineToBezierCurve", {
  enumerable: true,
  get: function get() {
    return _polylineToBezierCurve["default"];
  }
});
exports["default"] = void 0;

var _bezierCurveToPolyline = __webpack_require__("2db9");

var _polylineToBezierCurve = _interopRequireDefault(__webpack_require__("ae10"));

var _default = {
  bezierCurveToPolyline: _bezierCurveToPolyline.bezierCurveToPolyline,
  getBezierCurveLength: _bezierCurveToPolyline.getBezierCurveLength,
  polylineToBezierCurve: _polylineToBezierCurve["default"]
};
exports["default"] = _default;

/***/ }),

/***/ "0676":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "0680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axis = axis;

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _config = __webpack_require__("9d85");

var _util = __webpack_require__("becb");

var _util2 = __webpack_require__("5557");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var axisConfig = {
  xAxisConfig: _config.xAxisConfig,
  yAxisConfig: _config.yAxisConfig
};
var min = Math.min,
    max = Math.max,
    abs = Math.abs,
    pow = Math.pow;

function axis(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var xAxis = option.xAxis,
      yAxis = option.yAxis,
      series = option.series;
  var allAxis = [];

  if (xAxis && yAxis && series) {
    allAxis = getAllAxis(xAxis, yAxis);
    allAxis = mergeDefaultAxisConfig(allAxis);
    allAxis = allAxis.filter(function (_ref) {
      var show = _ref.show;
      return show;
    });
    allAxis = mergeDefaultBoundaryGap(allAxis);
    allAxis = calcAxisLabelData(allAxis, series);
    allAxis = setAxisPosition(allAxis);
    allAxis = calcAxisLinePosition(allAxis, chart);
    allAxis = calcAxisTickPosition(allAxis, chart);
    allAxis = calcAxisNamePosition(allAxis, chart);
    allAxis = calcSplitLinePosition(allAxis, chart);
  }

  (0, _updater.doUpdate)({
    chart: chart,
    series: allAxis,
    key: 'axisLine',
    getGraphConfig: getLineConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: allAxis,
    key: 'axisTick',
    getGraphConfig: getTickConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: allAxis,
    key: 'axisLabel',
    getGraphConfig: getLabelConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: allAxis,
    key: 'axisName',
    getGraphConfig: getNameConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: allAxis,
    key: 'splitLine',
    getGraphConfig: getSplitLineConfig
  });
  chart.axisData = allAxis;
}

function getAllAxis(xAxis, yAxis) {
  var allXAxis = [],
      allYAxis = [];

  if (xAxis instanceof Array) {
    var _allXAxis;

    (_allXAxis = allXAxis).push.apply(_allXAxis, (0, _toConsumableArray2["default"])(xAxis));
  } else {
    allXAxis.push(xAxis);
  }

  if (yAxis instanceof Array) {
    var _allYAxis;

    (_allYAxis = allYAxis).push.apply(_allYAxis, (0, _toConsumableArray2["default"])(yAxis));
  } else {
    allYAxis.push(yAxis);
  }

  allXAxis.splice(2);
  allYAxis.splice(2);
  allXAxis = allXAxis.map(function (axis, i) {
    return _objectSpread(_objectSpread({}, axis), {}, {
      index: i,
      axis: 'x'
    });
  });
  allYAxis = allYAxis.map(function (axis, i) {
    return _objectSpread(_objectSpread({}, axis), {}, {
      index: i,
      axis: 'y'
    });
  });
  return [].concat((0, _toConsumableArray2["default"])(allXAxis), (0, _toConsumableArray2["default"])(allYAxis));
}

function mergeDefaultAxisConfig(allAxis) {
  var xAxis = allAxis.filter(function (_ref2) {
    var axis = _ref2.axis;
    return axis === 'x';
  });
  var yAxis = allAxis.filter(function (_ref3) {
    var axis = _ref3.axis;
    return axis === 'y';
  });
  xAxis = xAxis.map(function (axis) {
    return (0, _util.deepMerge)((0, _util2.deepClone)(_config.xAxisConfig), axis);
  });
  yAxis = yAxis.map(function (axis) {
    return (0, _util.deepMerge)((0, _util2.deepClone)(_config.yAxisConfig), axis);
  });
  return [].concat((0, _toConsumableArray2["default"])(xAxis), (0, _toConsumableArray2["default"])(yAxis));
}

function mergeDefaultBoundaryGap(allAxis) {
  var valueAxis = allAxis.filter(function (_ref4) {
    var data = _ref4.data;
    return data === 'value';
  });
  var labelAxis = allAxis.filter(function (_ref5) {
    var data = _ref5.data;
    return data !== 'value';
  });
  valueAxis.forEach(function (axis) {
    if (typeof axis.boundaryGap === 'boolean') return;
    axis.boundaryGap = false;
  });
  labelAxis.forEach(function (axis) {
    if (typeof axis.boundaryGap === 'boolean') return;
    axis.boundaryGap = true;
  });
  return [].concat((0, _toConsumableArray2["default"])(valueAxis), (0, _toConsumableArray2["default"])(labelAxis));
}

function calcAxisLabelData(allAxis, series) {
  var valueAxis = allAxis.filter(function (_ref6) {
    var data = _ref6.data;
    return data === 'value';
  });
  var labelAxis = allAxis.filter(function (_ref7) {
    var data = _ref7.data;
    return data instanceof Array;
  });
  valueAxis = calcValueAxisLabelData(valueAxis, series);
  labelAxis = calcLabelAxisLabelData(labelAxis);
  return [].concat((0, _toConsumableArray2["default"])(valueAxis), (0, _toConsumableArray2["default"])(labelAxis));
}

function calcValueAxisLabelData(valueAxis, series) {
  return valueAxis.map(function (axis) {
    var minMaxValue = getValueAxisMaxMinValue(axis, series);

    var _getTrueMinMax = getTrueMinMax(axis, minMaxValue),
        _getTrueMinMax2 = (0, _slicedToArray2["default"])(_getTrueMinMax, 2),
        min = _getTrueMinMax2[0],
        max = _getTrueMinMax2[1];

    var interval = getValueInterval(min, max, axis);
    var formatter = axis.axisLabel.formatter;
    var label = [];

    if (min < 0 && max > 0) {
      label = getValueAxisLabelFromZero(min, max, interval);
    } else {
      label = getValueAxisLabelFromMin(min, max, interval);
    }

    label = label.map(function (l) {
      return parseFloat(l.toFixed(2));
    });
    return _objectSpread(_objectSpread({}, axis), {}, {
      maxValue: label.slice(-1)[0],
      minValue: label[0],
      label: getAfterFormatterLabel(label, formatter)
    });
  });
}

function getValueAxisMaxMinValue(axis, series) {
  series = series.filter(function (_ref8) {
    var show = _ref8.show,
        type = _ref8.type;
    if (show === false) return false;
    if (type === 'pie') return false;
    return true;
  });
  if (series.length === 0) return [0, 0];
  var index = axis.index,
      axisType = axis.axis;
  series = mergeStackData(series);
  var axisName = axisType + 'Axis';
  var valueSeries = series.filter(function (s) {
    return s[axisName] === index;
  });
  if (!valueSeries.length) valueSeries = series;
  return getSeriesMinMaxValue(valueSeries);
}

function getSeriesMinMaxValue(series) {
  if (!series) return;
  var minValue = Math.min.apply(Math, (0, _toConsumableArray2["default"])(series.map(function (_ref9) {
    var data = _ref9.data;
    return Math.min.apply(Math, (0, _toConsumableArray2["default"])((0, _util.filterNonNumber)(data)));
  })));
  var maxValue = Math.max.apply(Math, (0, _toConsumableArray2["default"])(series.map(function (_ref10) {
    var data = _ref10.data;
    return Math.max.apply(Math, (0, _toConsumableArray2["default"])((0, _util.filterNonNumber)(data)));
  })));
  return [minValue, maxValue];
}

function mergeStackData(series) {
  var seriesCloned = (0, _util2.deepClone)(series, true);
  series.forEach(function (item, i) {
    var data = (0, _util.mergeSameStackData)(item, series);
    seriesCloned[i].data = data;
  });
  return seriesCloned;
}

function getTrueMinMax(_ref11, _ref12) {
  var min = _ref11.min,
      max = _ref11.max,
      axis = _ref11.axis;

  var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
      minValue = _ref13[0],
      maxValue = _ref13[1];

  var minType = (0, _typeof2["default"])(min),
      maxType = (0, _typeof2["default"])(max);

  if (!testMinMaxType(min)) {
    min = axisConfig[axis + 'AxisConfig'].min;
    minType = 'string';
  }

  if (!testMinMaxType(max)) {
    max = axisConfig[axis + 'AxisConfig'].max;
    maxType = 'string';
  }

  if (minType === 'string') {
    min = parseInt(minValue - abs(minValue * parseFloat(min) / 100));
    var lever = getValueLever(min);
    min = parseFloat((min / lever - 0.1).toFixed(1)) * lever;
  }

  if (maxType === 'string') {
    max = parseInt(maxValue + abs(maxValue * parseFloat(max) / 100));

    var _lever = getValueLever(max);

    max = parseFloat((max / _lever + 0.1).toFixed(1)) * _lever;
  }

  return [min, max];
}

function getValueLever(value) {
  var valueString = abs(value).toString();
  var valueLength = valueString.length;
  var firstZeroIndex = valueString.replace(/0*$/g, '').indexOf('0');
  var pow10Num = valueLength - 1;
  if (firstZeroIndex !== -1) pow10Num -= firstZeroIndex;
  return pow(10, pow10Num);
}

function testMinMaxType(val) {
  var valType = (0, _typeof2["default"])(val);
  var isValidString = valType === 'string' && /^\d+%$/.test(val);
  var isValidNumber = valType === 'number';
  return isValidString || isValidNumber;
}

function getValueAxisLabelFromZero(min, max, interval) {
  var negative = [],
      positive = [];
  var currentNegative = 0,
      currentPositive = 0;

  do {
    negative.push(currentNegative -= interval);
  } while (currentNegative > min);

  do {
    positive.push(currentPositive += interval);
  } while (currentPositive < max);

  return [].concat((0, _toConsumableArray2["default"])(negative.reverse()), [0], (0, _toConsumableArray2["default"])(positive));
}

function getValueAxisLabelFromMin(min, max, interval) {
  var label = [min],
      currentValue = min;

  do {
    label.push(currentValue += interval);
  } while (currentValue < max);

  return label;
}

function getAfterFormatterLabel(label, formatter) {
  if (!formatter) return label;
  if (typeof formatter === 'string') label = label.map(function (l) {
    return formatter.replace('{value}', l);
  });
  if (typeof formatter === 'function') label = label.map(function (value, index) {
    return formatter({
      value: value,
      index: index
    });
  });
  return label;
}

function calcLabelAxisLabelData(labelAxis) {
  return labelAxis.map(function (axis) {
    var data = axis.data,
        formatter = axis.axisLabel.formatter;
    return _objectSpread(_objectSpread({}, axis), {}, {
      label: getAfterFormatterLabel(data, formatter)
    });
  });
}

function getValueInterval(min, max, axis) {
  var interval = axis.interval,
      minInterval = axis.minInterval,
      maxInterval = axis.maxInterval,
      splitNumber = axis.splitNumber,
      axisType = axis.axis;
  var config = axisConfig[axisType + 'AxisConfig'];
  if (typeof interval !== 'number') interval = config.interval;
  if (typeof minInterval !== 'number') minInterval = config.minInterval;
  if (typeof maxInterval !== 'number') maxInterval = config.maxInterval;
  if (typeof splitNumber !== 'number') splitNumber = config.splitNumber;
  if (typeof interval === 'number') return interval;
  var valueInterval = parseInt((max - min) / (splitNumber - 1));
  if (valueInterval.toString().length > 1) valueInterval = parseInt(valueInterval.toString().replace(/\d$/, '0'));
  if (valueInterval === 0) valueInterval = 1;
  if (typeof minInterval === 'number' && valueInterval < minInterval) return minInterval;
  if (typeof maxInterval === 'number' && valueInterval > maxInterval) return maxInterval;
  return valueInterval;
}

function setAxisPosition(allAxis) {
  var xAxis = allAxis.filter(function (_ref14) {
    var axis = _ref14.axis;
    return axis === 'x';
  });
  var yAxis = allAxis.filter(function (_ref15) {
    var axis = _ref15.axis;
    return axis === 'y';
  });
  if (xAxis[0] && !xAxis[0].position) xAxis[0].position = _config.xAxisConfig.position;

  if (xAxis[1] && !xAxis[1].position) {
    xAxis[1].position = xAxis[0].position === 'bottom' ? 'top' : 'bottom';
  }

  if (yAxis[0] && !yAxis[0].position) yAxis[0].position = _config.yAxisConfig.position;

  if (yAxis[1] && !yAxis[1].position) {
    yAxis[1].position = yAxis[0].position === 'left' ? 'right' : 'left';
  }

  return [].concat((0, _toConsumableArray2["default"])(xAxis), (0, _toConsumableArray2["default"])(yAxis));
}

function calcAxisLinePosition(allAxis, chart) {
  var _chart$gridArea = chart.gridArea,
      x = _chart$gridArea.x,
      y = _chart$gridArea.y,
      w = _chart$gridArea.w,
      h = _chart$gridArea.h;
  allAxis = allAxis.map(function (axis) {
    var position = axis.position;
    var linePosition = [];

    if (position === 'left') {
      linePosition = [[x, y], [x, y + h]].reverse();
    } else if (position === 'right') {
      linePosition = [[x + w, y], [x + w, y + h]].reverse();
    } else if (position === 'top') {
      linePosition = [[x, y], [x + w, y]];
    } else if (position === 'bottom') {
      linePosition = [[x, y + h], [x + w, y + h]];
    }

    return _objectSpread(_objectSpread({}, axis), {}, {
      linePosition: linePosition
    });
  });
  return allAxis;
}

function calcAxisTickPosition(allAxis, chart) {
  return allAxis.map(function (axisItem) {
    var axis = axisItem.axis,
        linePosition = axisItem.linePosition,
        position = axisItem.position,
        label = axisItem.label,
        boundaryGap = axisItem.boundaryGap;
    if (typeof boundaryGap !== 'boolean') boundaryGap = axisConfig[axis + 'AxisConfig'].boundaryGap;
    var labelNum = label.length;

    var _linePosition = (0, _slicedToArray2["default"])(linePosition, 2),
        _linePosition$ = (0, _slicedToArray2["default"])(_linePosition[0], 2),
        startX = _linePosition$[0],
        startY = _linePosition$[1],
        _linePosition$2 = (0, _slicedToArray2["default"])(_linePosition[1], 2),
        endX = _linePosition$2[0],
        endY = _linePosition$2[1];

    var gapLength = axis === 'x' ? endX - startX : endY - startY;
    var gap = gapLength / (boundaryGap ? labelNum : labelNum - 1);
    var tickPosition = new Array(labelNum).fill(0).map(function (foo, i) {
      if (axis === 'x') {
        return [startX + gap * (boundaryGap ? i + 0.5 : i), startY];
      }

      return [startX, startY + gap * (boundaryGap ? i + 0.5 : i)];
    });
    var tickLinePosition = getTickLinePosition(axis, boundaryGap, position, tickPosition, gap);
    return _objectSpread(_objectSpread({}, axisItem), {}, {
      tickPosition: tickPosition,
      tickLinePosition: tickLinePosition,
      tickGap: gap
    });
  });
}

function getTickLinePosition(axisType, boundaryGap, position, tickPosition, gap) {
  var index = axisType === 'x' ? 1 : 0;
  var plus = 5;
  if (axisType === 'x' && position === 'top') plus = -5;
  if (axisType === 'y' && position === 'left') plus = -5;
  var tickLinePosition = tickPosition.map(function (lineStart) {
    var lineEnd = (0, _util2.deepClone)(lineStart);
    lineEnd[index] += plus;
    return [(0, _util2.deepClone)(lineStart), lineEnd];
  });
  if (!boundaryGap) return tickLinePosition;
  index = axisType === 'x' ? 0 : 1;
  plus = gap / 2;
  tickLinePosition.forEach(function (_ref16) {
    var _ref17 = (0, _slicedToArray2["default"])(_ref16, 2),
        lineStart = _ref17[0],
        lineEnd = _ref17[1];

    lineStart[index] += plus;
    lineEnd[index] += plus;
  });
  return tickLinePosition;
}

function calcAxisNamePosition(allAxis, chart) {
  return allAxis.map(function (axisItem) {
    var nameGap = axisItem.nameGap,
        nameLocation = axisItem.nameLocation,
        position = axisItem.position,
        linePosition = axisItem.linePosition;

    var _linePosition2 = (0, _slicedToArray2["default"])(linePosition, 2),
        lineStart = _linePosition2[0],
        lineEnd = _linePosition2[1];

    var namePosition = (0, _toConsumableArray2["default"])(lineStart);
    if (nameLocation === 'end') namePosition = (0, _toConsumableArray2["default"])(lineEnd);

    if (nameLocation === 'center') {
      namePosition[0] = (lineStart[0] + lineEnd[0]) / 2;
      namePosition[1] = (lineStart[1] + lineEnd[1]) / 2;
    }

    var index = 0;
    if (position === 'top' && nameLocation === 'center') index = 1;
    if (position === 'bottom' && nameLocation === 'center') index = 1;
    if (position === 'left' && nameLocation !== 'center') index = 1;
    if (position === 'right' && nameLocation !== 'center') index = 1;
    var plus = nameGap;
    if (position === 'top' && nameLocation !== 'end') plus *= -1;
    if (position === 'left' && nameLocation !== 'start') plus *= -1;
    if (position === 'bottom' && nameLocation === 'start') plus *= -1;
    if (position === 'right' && nameLocation === 'end') plus *= -1;
    namePosition[index] += plus;
    return _objectSpread(_objectSpread({}, axisItem), {}, {
      namePosition: namePosition
    });
  });
}

function calcSplitLinePosition(allAxis, chart) {
  var _chart$gridArea2 = chart.gridArea,
      w = _chart$gridArea2.w,
      h = _chart$gridArea2.h;
  return allAxis.map(function (axisItem) {
    var tickLinePosition = axisItem.tickLinePosition,
        position = axisItem.position,
        boundaryGap = axisItem.boundaryGap;
    var index = 0,
        plus = w;
    if (position === 'top' || position === 'bottom') index = 1;
    if (position === 'top' || position === 'bottom') plus = h;
    if (position === 'right' || position === 'bottom') plus *= -1;
    var splitLinePosition = tickLinePosition.map(function (_ref18) {
      var _ref19 = (0, _slicedToArray2["default"])(_ref18, 1),
          startPoint = _ref19[0];

      var endPoint = (0, _toConsumableArray2["default"])(startPoint);
      endPoint[index] += plus;
      return [(0, _toConsumableArray2["default"])(startPoint), endPoint];
    });
    if (!boundaryGap) splitLinePosition.shift();
    return _objectSpread(_objectSpread({}, axisItem), {}, {
      splitLinePosition: splitLinePosition
    });
  });
}

function getLineConfig(axisItem) {
  var animationCurve = axisItem.animationCurve,
      animationFrame = axisItem.animationFrame,
      rLevel = axisItem.rLevel;
  return [{
    name: 'polyline',
    index: rLevel,
    visible: axisItem.axisLine.show,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getLineShape(axisItem),
    style: getLineStyle(axisItem)
  }];
}

function getLineShape(axisItem) {
  var linePosition = axisItem.linePosition;
  return {
    points: linePosition
  };
}

function getLineStyle(axisItem) {
  return axisItem.axisLine.style;
}

function getTickConfig(axisItem) {
  var animationCurve = axisItem.animationCurve,
      animationFrame = axisItem.animationFrame,
      rLevel = axisItem.rLevel;
  var shapes = getTickShapes(axisItem);
  var style = getTickStyle(axisItem);
  return shapes.map(function (shape) {
    return {
      name: 'polyline',
      index: rLevel,
      visible: axisItem.axisTick.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getTickShapes(axisItem) {
  var tickLinePosition = axisItem.tickLinePosition;
  return tickLinePosition.map(function (points) {
    return {
      points: points
    };
  });
}

function getTickStyle(axisItem) {
  return axisItem.axisTick.style;
}

function getLabelConfig(axisItem) {
  var animationCurve = axisItem.animationCurve,
      animationFrame = axisItem.animationFrame,
      rLevel = axisItem.rLevel;
  var shapes = getLabelShapes(axisItem);
  var styles = getLabelStyle(axisItem, shapes);
  return shapes.map(function (shape, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: axisItem.axisLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: styles[i],
      setGraphCenter: function setGraphCenter() {
        return void 0;
      }
    };
  });
}

function getLabelShapes(axisItem) {
  var label = axisItem.label,
      tickPosition = axisItem.tickPosition,
      position = axisItem.position;
  return tickPosition.map(function (point, i) {
    return {
      position: getLabelRealPosition(point, position),
      content: label[i].toString()
    };
  });
}

function getLabelRealPosition(points, position) {
  var index = 0,
      plus = 10;
  if (position === 'top' || position === 'bottom') index = 1;
  if (position === 'top' || position === 'left') plus = -10;
  points = (0, _util2.deepClone)(points);
  points[index] += plus;
  return points;
}

function getLabelStyle(axisItem, shapes) {
  var position = axisItem.position;
  var style = axisItem.axisLabel.style;
  var align = getAxisLabelRealAlign(position);
  style = (0, _util.deepMerge)(align, style);
  var styles = shapes.map(function (_ref20) {
    var position = _ref20.position;
    return _objectSpread(_objectSpread({}, style), {}, {
      graphCenter: position
    });
  });
  return styles;
}

function getAxisLabelRealAlign(position) {
  if (position === 'left') return {
    textAlign: 'right',
    textBaseline: 'middle'
  };
  if (position === 'right') return {
    textAlign: 'left',
    textBaseline: 'middle'
  };
  if (position === 'top') return {
    textAlign: 'center',
    textBaseline: 'bottom'
  };
  if (position === 'bottom') return {
    textAlign: 'center',
    textBaseline: 'top'
  };
}

function getNameConfig(axisItem) {
  var animationCurve = axisItem.animationCurve,
      animationFrame = axisItem.animationFrame,
      rLevel = axisItem.rLevel;
  return [{
    name: 'text',
    index: rLevel,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getNameShape(axisItem),
    style: getNameStyle(axisItem)
  }];
}

function getNameShape(axisItem) {
  var name = axisItem.name,
      namePosition = axisItem.namePosition;
  return {
    content: name,
    position: namePosition
  };
}

function getNameStyle(axisItem) {
  var nameLocation = axisItem.nameLocation,
      position = axisItem.position,
      style = axisItem.nameTextStyle;
  var align = getNameRealAlign(position, nameLocation);
  return (0, _util.deepMerge)(align, style);
}

function getNameRealAlign(position, location) {
  if (position === 'top' && location === 'start' || position === 'bottom' && location === 'start' || position === 'left' && location === 'center') return {
    textAlign: 'right',
    textBaseline: 'middle'
  };
  if (position === 'top' && location === 'end' || position === 'bottom' && location === 'end' || position === 'right' && location === 'center') return {
    textAlign: 'left',
    textBaseline: 'middle'
  };
  if (position === 'top' && location === 'center' || position === 'left' && location === 'end' || position === 'right' && location === 'end') return {
    textAlign: 'center',
    textBaseline: 'bottom'
  };
  if (position === 'bottom' && location === 'center' || position === 'left' && location === 'start' || position === 'right' && location === 'start') return {
    textAlign: 'center',
    textBaseline: 'top'
  };
}

function getSplitLineConfig(axisItem) {
  var animationCurve = axisItem.animationCurve,
      animationFrame = axisItem.animationFrame,
      rLevel = axisItem.rLevel;
  var shapes = getSplitLineShapes(axisItem);
  var style = getSplitLineStyle(axisItem);
  return shapes.map(function (shape) {
    return {
      name: 'polyline',
      index: rLevel,
      visible: axisItem.splitLine.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getSplitLineShapes(axisItem) {
  var splitLinePosition = axisItem.splitLinePosition;
  return splitLinePosition.map(function (points) {
    return {
      points: points
    };
  });
}

function getSplitLineStyle(axisItem) {
  return axisItem.splitLine.style;
}

/***/ }),

/***/ "09b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Capsule/index.vue?vue&type=template&id=671e1042&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-capsule-chart',{ref:"Capsule",attrs:{"config":_vm.config}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Capsule/index.vue?vue&type=template&id=671e1042&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Capsule/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Capsulevue_type_script_lang_js_ = ({
  name: "Capsule",
  data() {
    return {
      chartKey: 0,
      container: null,
      timer: null,
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
    };
  },
});

// CONCATENATED MODULE: ./packages/Capsule/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Capsulevue_type_script_lang_js_ = (Capsulevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Capsule/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Capsulevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Capsule = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0c7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "0ca1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _cRender = __webpack_require__("9886");

var _graphs = __webpack_require__("b06d");

var _util = __webpack_require__("5557");

var _color = __webpack_require__("53b8");

var _index = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pie = {
  shape: {
    rx: 0,
    ry: 0,
    ir: 0,
    or: 0,
    startAngle: 0,
    endAngle: 0,
    clockWise: true
  },
  validator: function validator(_ref) {
    var shape = _ref.shape;
    var keys = ['rx', 'ry', 'ir', 'or', 'startAngle', 'endAngle'];

    if (keys.find(function (key) {
      return typeof shape[key] !== 'number';
    })) {
      console.error('Pie shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref2, _ref3) {
    var ctx = _ref2.ctx;
    var shape = _ref3.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        ir = shape.ir,
        or = shape.or,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        clockWise = shape.clockWise;
    rx = parseInt(rx) + 0.5;
    ry = parseInt(ry) + 0.5;
    ctx.arc(rx, ry, ir > 0 ? ir : 0, startAngle, endAngle, !clockWise);
    var connectPoint1 = (0, _util.getCircleRadianPoint)(rx, ry, or, endAngle).map(function (p) {
      return parseInt(p) + 0.5;
    });
    var connectPoint2 = (0, _util.getCircleRadianPoint)(rx, ry, ir, startAngle).map(function (p) {
      return parseInt(p) + 0.5;
    });
    ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(connectPoint1));
    ctx.arc(rx, ry, or > 0 ? or : 0, endAngle, startAngle, clockWise);
    ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(connectPoint2));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
};
var agArc = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    startAngle: 0,
    endAngle: 0,
    gradientStartAngle: null,
    gradientEndAngle: null
  },
  validator: function validator(_ref4) {
    var shape = _ref4.shape;
    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

    if (keys.find(function (key) {
      return typeof shape[key] !== 'number';
    })) {
      console.error('AgArc shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref5, _ref6) {
    var ctx = _ref5.ctx;
    var shape = _ref6.shape,
        style = _ref6.style;
    var gradient = style.gradient;
    gradient = gradient.map(function (cv) {
      return (0, _color.getColorFromRgbValue)(cv);
    });

    if (gradient.length === 1) {
      gradient = [gradient[0], gradient[0]];
    }

    var gradientArcNum = gradient.length - 1;
    var gradientStartAngle = shape.gradientStartAngle,
        gradientEndAngle = shape.gradientEndAngle,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        r = shape.r,
        rx = shape.rx,
        ry = shape.ry;
    if (gradientStartAngle === null) gradientStartAngle = startAngle;
    if (gradientEndAngle === null) gradientEndAngle = endAngle;
    var angleGap = (gradientEndAngle - gradientStartAngle) / gradientArcNum;
    if (angleGap === Math.PI * 2) angleGap = Math.PI * 2 - 0.001;

    for (var i = 0; i < gradientArcNum; i++) {
      ctx.beginPath();
      var startPoint = (0, _util.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * i);
      var endPoint = (0, _util.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * (i + 1));
      var color = (0, _index.getLinearGradientColor)(ctx, startPoint, endPoint, [gradient[i], gradient[i + 1]]);
      var arcStartAngle = startAngle + angleGap * i;
      var arcEndAngle = startAngle + angleGap * (i + 1);
      var doBreak = false;

      if (arcEndAngle > endAngle) {
        arcEndAngle = endAngle;
        doBreak = true;
      }

      ctx.arc(rx, ry, r, arcStartAngle, arcEndAngle);
      ctx.strokeStyle = color;
      ctx.stroke();
      if (doBreak) break;
    }
  }
};
var numberText = {
  shape: {
    number: [],
    content: '',
    position: [0, 0],
    toFixed: 0,
    rowGap: 0,
    formatter: null
  },
  validator: function validator(_ref7) {
    var shape = _ref7.shape;
    var number = shape.number,
        content = shape.content,
        position = shape.position;

    if (!(number instanceof Array) || typeof content !== 'string' || !(position instanceof Array)) {
      console.error('NumberText shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref8, _ref9) {
    var ctx = _ref8.ctx;
    var shape = _ref9.shape;
    var number = shape.number,
        content = shape.content,
        toFixed = shape.toFixed,
        rowGap = shape.rowGap,
        formatter = shape.formatter;
    var textSegments = content.split('{nt}');
    var textString = '';
    textSegments.forEach(function (t, i) {
      var currentNumber = number[i];
      if (typeof currentNumber !== 'number') currentNumber = '';

      if (typeof currentNumber === 'number') {
        currentNumber = currentNumber.toFixed(toFixed);
        if (typeof formatter === 'function') currentNumber = formatter(currentNumber);
      }

      textString += t + (currentNumber || '');
    });

    _graphs.text.draw({
      ctx: ctx
    }, {
      shape: _objectSpread(_objectSpread({}, shape), {}, {
        content: textString,
        rowGap: rowGap
      })
    });
  }
};
var lineIcon = {
  shape: {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  },
  validator: function validator(_ref10) {
    var shape = _ref10.shape;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;

    if (typeof x !== 'number' || typeof y !== 'number' || typeof w !== 'number' || typeof h !== 'number') {
      console.error('lineIcon shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref11, _ref12) {
    var ctx = _ref11.ctx;
    var shape = _ref12.shape;
    ctx.beginPath();
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    var halfH = h / 2;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.moveTo(x, y + halfH);
    ctx.lineTo(x + w, y + halfH);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    var radius = halfH - 5 * 2;
    if (radius <= 0) radius = 3;
    ctx.arc(x + w / 2, y + halfH, radius, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.fill();
  },
  hoverCheck: function hoverCheck(position, _ref13) {
    var shape = _ref13.shape;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    return (0, _util.checkPointIsInRect)(position, x, y, w, h);
  },
  setGraphCenter: function setGraphCenter(e, _ref14) {
    var shape = _ref14.shape,
        style = _ref14.style;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    style.graphCenter = [x + w / 2, y + h / 2];
  }
};
(0, _cRender.extendNewGraph)('pie', pie);
(0, _cRender.extendNewGraph)('agArc', agArc);
(0, _cRender.extendNewGraph)('numberText', numberText);
(0, _cRender.extendNewGraph)('lineIcon', lineIcon);

/***/ }),

/***/ "0cd4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radarAxisConfig = void 0;
var radarAxisConfig = {
  /**
   * @description Whether to display this radar axis
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Center point of radar axis
   * @type {Array}
   * @default center = ['50%','50%']
   * @example center = ['50%','50%'] | [100, 100]
   */
  center: ['50%', '50%'],

  /**
   * @description Radius of radar axis
   * @type {String|Number}
   * @default radius = '65%'
   * @example radius = '65%' | 100
   */
  radius: '65%',

  /**
   * @description Radar axis start angle
   * @type {Number}
   * @default startAngle = -Math.PI / 2
   * @example startAngle = -Math.PI
   */
  startAngle: -Math.PI / 2,

  /**
   * @description Radar axis split number
   * @type {Number}
   * @default splitNum = 5
   */
  splitNum: 5,

  /**
   * @description Whether to enable polygon radar axis
   * @type {Boolean}
   * @default polygon = false
   */
  polygon: false,

  /**
   * @description Axis label configuration
   * @type {Object}
   */
  axisLabel: {
    /**
     * @description Whether to display axis label
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Label gap between label and radar axis
     * @type {Number}
     * @default labelGap = 15
     */
    labelGap: 15,

    /**
     * @description Label color (Hex|rgb|rgba), will cover style.fill
     * @type {Array}
     * @default color = []
     */
    color: [],

    /**
     * @description Axis label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: '#333'
    }
  },

  /**
   * @description Axis line configuration
   * @type {Object}
   */
  axisLine: {
    /**
     * @description Whether to display axis line
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Line color (Hex|rgb|rgba), will cover style.stroke
     * @type {Array}
     * @default color = []
     */
    color: [],

    /**
     * @description Axis label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#999',
      lineWidth: 1
    }
  },

  /**
   * @description Split line configuration
   * @type {Object}
   */
  splitLine: {
    /**
     * @description Whether to display split line
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Line color (Hex|rgb|rgba), will cover style.stroke
     * @type {Array}
     * @default color = []
     */
    color: [],

    /**
     * @description Split line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#d4d4d4',
      lineWidth: 1
    }
  },

  /**
   * @description Split area configuration
   * @type {Object}
   */
  splitArea: {
    /**
     * @description Whether to display split area
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Area color (Hex|rgb|rgba), will cover style.stroke
     * @type {Array}
     * @default color = []
     */
    color: ['#f5f5f5', '#e6e6e6'],

    /**
     * @description Split area default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {}
  },

  /**
   * @description Bar chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = -10
   */
  rLevel: -10,

  /**
   * @description Radar axis animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Radar axis animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrane: 50
};
exports.radarAxisConfig = radarAxisConfig;

/***/ }),

/***/ "0f4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48398e72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d04");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48398e72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48398e72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48398e72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "11b0":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "11b09":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "18ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdate = doUpdate;
exports.Updater = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("970b"));

var Updater = function Updater(config, series) {
  (0, _classCallCheck2["default"])(this, Updater);
  var chart = config.chart,
      key = config.key,
      getGraphConfig = config.getGraphConfig;

  if (typeof getGraphConfig !== 'function') {
    console.warn('Updater need function getGraphConfig!');
    return;
  }

  if (!chart[key]) this.graphs = chart[key] = [];
  Object.assign(this, config);
  this.update(series);
};

exports.Updater = Updater;

Updater.prototype.update = function (series) {
  var _this = this;

  var graphs = this.graphs,
      beforeUpdate = this.beforeUpdate;
  delRedundanceGraph(this, series);
  if (!series.length) return;
  var beforeUpdateType = (0, _typeof2["default"])(beforeUpdate);
  series.forEach(function (seriesItem, i) {
    if (beforeUpdateType === 'function') beforeUpdate(graphs, seriesItem, i, _this);
    var cache = graphs[i];

    if (cache) {
      changeGraphs(cache, seriesItem, i, _this);
    } else {
      addGraphs(graphs, seriesItem, i, _this);
    }
  });
};

function delRedundanceGraph(updater, series) {
  var graphs = updater.graphs,
      render = updater.chart.render;
  var cacheGraphNum = graphs.length;
  var needGraphNum = series.length;

  if (cacheGraphNum > needGraphNum) {
    var needDelGraphs = graphs.splice(needGraphNum);
    needDelGraphs.forEach(function (item) {
      return item.forEach(function (g) {
        return render.delGraph(g);
      });
    });
  }
}

function changeGraphs(cache, seriesItem, i, updater) {
  var getGraphConfig = updater.getGraphConfig,
      render = updater.chart.render,
      beforeChange = updater.beforeChange;
  var configs = getGraphConfig(seriesItem, updater);
  balanceGraphsNum(cache, configs, render);
  cache.forEach(function (graph, j) {
    var config = configs[j];
    if (typeof beforeChange === 'function') beforeChange(graph, config);
    updateGraphConfigByKey(graph, config);
  });
}

function balanceGraphsNum(graphs, graphConfig, render) {
  var cacheGraphNum = graphs.length;
  var needGraphNum = graphConfig.length;

  if (needGraphNum > cacheGraphNum) {
    var lastCacheGraph = graphs.slice(-1)[0];
    var needAddGraphNum = needGraphNum - cacheGraphNum;
    var needAddGraphs = new Array(needAddGraphNum).fill(0).map(function (foo) {
      return render.clone(lastCacheGraph);
    });
    graphs.push.apply(graphs, (0, _toConsumableArray2["default"])(needAddGraphs));
  } else if (needGraphNum < cacheGraphNum) {
    var needDelCache = graphs.splice(needGraphNum);
    needDelCache.forEach(function (g) {
      return render.delGraph(g);
    });
  }
}

function addGraphs(graphs, seriesItem, i, updater) {
  var getGraphConfig = updater.getGraphConfig,
      getStartGraphConfig = updater.getStartGraphConfig,
      chart = updater.chart;
  var render = chart.render;
  var startConfigs = null;
  if (typeof getStartGraphConfig === 'function') startConfigs = getStartGraphConfig(seriesItem, updater);
  var configs = getGraphConfig(seriesItem, updater);
  if (!configs.length) return;

  if (startConfigs) {
    graphs[i] = startConfigs.map(function (config) {
      return render.add(config);
    });
    graphs[i].forEach(function (graph, i) {
      var config = configs[i];
      updateGraphConfigByKey(graph, config);
    });
  } else {
    graphs[i] = configs.map(function (config) {
      return render.add(config);
    });
  }

  var afterAddGraph = updater.afterAddGraph;
  if (typeof afterAddGraph === 'function') afterAddGraph(graphs[i]);
}

function updateGraphConfigByKey(graph, config) {
  var keys = Object.keys(config);
  keys.forEach(function (key) {
    if (key === 'shape' || key === 'style') {
      graph.animation(key, config[key], true);
    } else {
      graph[key] = config[key];
    }
  });
}

function doUpdate() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chart = _ref.chart,
      series = _ref.series,
      key = _ref.key,
      getGraphConfig = _ref.getGraphConfig,
      getStartGraphConfig = _ref.getStartGraphConfig,
      beforeChange = _ref.beforeChange,
      beforeUpdate = _ref.beforeUpdate,
      afterAddGraph = _ref.afterAddGraph;

  if (chart[key]) {
    chart[key].update(series);
  } else {
    chart[key] = new Updater({
      chart: chart,
      key: key,
      getGraphConfig: getGraphConfig,
      getStartGraphConfig: getStartGraphConfig,
      beforeChange: beforeChange,
      beforeUpdate: beforeUpdate,
      afterAddGraph: afterAddGraph
    }, series);
  }
}

/***/ }),

/***/ "18d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__("18e9");

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);

            if(!object) {
                throw new Error("Element is not detectable by this strategy.");
            }

            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none", "visibility: hidden"]);

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.setProperty("position", "relative", options.important ? "important" : "");

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style.setProperty(property, "0", options.important ? "important" : "");
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            var state = getState(element);
                            if (state.checkForObjectDocumentTimeoutId) {
                                window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                            }
                            state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                                state.checkForObjectDocumentTimeoutId = 0;
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                if (!getState(element)) {
                    // The element has been uninstalled before the actual loading happened.
                    return;
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if (!getState(element)) {
            return;
        }

        var object = getObject(element);

        if (!object) {
            return;
        }

        if (browserDetector.isIE(8)) {
            element.detachEvent("onresize", object.proxy);
        } else {
            element.removeChild(object);
        }

        if (getState(element).checkForObjectDocumentTimeoutId) {
            window.clearTimeout(getState(element).checkForObjectDocumentTimeoutId);
        }

        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "18e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ "1dac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1e4c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f55":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gauge = gauge;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _gauge = __webpack_require__("cc6d");

var _util = __webpack_require__("5557");

var _util2 = __webpack_require__("becb");

var _color = __webpack_require__("53b8");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function gauge(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var series = option.series;
  if (!series) series = [];
  var gauges = (0, _util2.initNeedSeries)(series, _gauge.gaugeConfig, 'gauge');
  gauges = calcGaugesCenter(gauges, chart);
  gauges = calcGaugesRadius(gauges, chart);
  gauges = calcGaugesDataRadiusAndLineWidth(gauges, chart);
  gauges = calcGaugesDataAngles(gauges, chart);
  gauges = calcGaugesDataGradient(gauges, chart);
  gauges = calcGaugesAxisTickPosition(gauges, chart);
  gauges = calcGaugesLabelPositionAndAlign(gauges, chart);
  gauges = calcGaugesLabelData(gauges, chart);
  gauges = calcGaugesDetailsPosition(gauges, chart);
  gauges = calcGaugesDetailsContent(gauges, chart);
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugeAxisTick',
    getGraphConfig: getAxisTickConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugeAxisLabel',
    getGraphConfig: getAxisLabelConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugeBackgroundArc',
    getGraphConfig: getBackgroundArcConfig,
    getStartGraphConfig: getStartBackgroundArcConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugeArc',
    getGraphConfig: getArcConfig,
    getStartGraphConfig: getStartArcConfig,
    beforeChange: beforeChangeArc
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugePointer',
    getGraphConfig: getPointerConfig,
    getStartGraphConfig: getStartPointerConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: gauges,
    key: 'gaugeDetails',
    getGraphConfig: getDetailsConfig
  });
}

function calcGaugesCenter(gauges, chart) {
  var area = chart.render.area;
  gauges.forEach(function (gaugeItem) {
    var center = gaugeItem.center;
    center = center.map(function (pos, i) {
      if (typeof pos === 'number') return pos;
      return parseInt(pos) / 100 * area[i];
    });
    gaugeItem.center = center;
  });
  return gauges;
}

function calcGaugesRadius(gauges, chart) {
  var area = chart.render.area;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
  gauges.forEach(function (gaugeItem) {
    var radius = gaugeItem.radius;

    if (typeof radius !== 'number') {
      radius = parseInt(radius) / 100 * maxRadius;
    }

    gaugeItem.radius = radius;
  });
  return gauges;
}

function calcGaugesDataRadiusAndLineWidth(gauges, chart) {
  var area = chart.render.area;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
  gauges.forEach(function (gaugeItem) {
    var radius = gaugeItem.radius,
        data = gaugeItem.data,
        arcLineWidth = gaugeItem.arcLineWidth;
    data.forEach(function (item) {
      var arcRadius = item.radius,
          lineWidth = item.lineWidth;
      if (!arcRadius) arcRadius = radius;
      if (typeof arcRadius !== 'number') arcRadius = parseInt(arcRadius) / 100 * maxRadius;
      item.radius = arcRadius;
      if (!lineWidth) lineWidth = arcLineWidth;
      item.lineWidth = lineWidth;
    });
  });
  return gauges;
}

function calcGaugesDataAngles(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var startAngle = gaugeItem.startAngle,
        endAngle = gaugeItem.endAngle,
        data = gaugeItem.data,
        min = gaugeItem.min,
        max = gaugeItem.max;
    var angleMinus = endAngle - startAngle;
    var valueMinus = max - min;
    data.forEach(function (item) {
      var value = item.value;
      var itemAngle = Math.abs((value - min) / valueMinus * angleMinus);
      item.startAngle = startAngle;
      item.endAngle = startAngle + itemAngle;
    });
  });
  return gauges;
}

function calcGaugesDataGradient(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var data = gaugeItem.data;
    data.forEach(function (item) {
      var color = item.color,
          gradient = item.gradient;
      if (!gradient || !gradient.length) gradient = color;
      if (!(gradient instanceof Array)) gradient = [gradient];
      item.gradient = gradient;
    });
  });
  return gauges;
}

function calcGaugesAxisTickPosition(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var startAngle = gaugeItem.startAngle,
        endAngle = gaugeItem.endAngle,
        splitNum = gaugeItem.splitNum,
        center = gaugeItem.center,
        radius = gaugeItem.radius,
        arcLineWidth = gaugeItem.arcLineWidth,
        axisTick = gaugeItem.axisTick;
    var tickLength = axisTick.tickLength,
        lineWidth = axisTick.style.lineWidth;
    var angles = endAngle - startAngle;
    var outerRadius = radius - arcLineWidth / 2;
    var innerRadius = outerRadius - tickLength;
    var angleGap = angles / (splitNum - 1);
    var arcLength = 2 * Math.PI * radius * angles / (Math.PI * 2);
    var offset = Math.ceil(lineWidth / 2) / arcLength * angles;
    gaugeItem.tickAngles = [];
    gaugeItem.tickInnerRadius = [];
    gaugeItem.tickPosition = new Array(splitNum).fill(0).map(function (foo, i) {
      var angle = startAngle + angleGap * i;
      if (i === 0) angle += offset;
      if (i === splitNum - 1) angle -= offset;
      gaugeItem.tickAngles[i] = angle;
      gaugeItem.tickInnerRadius[i] = innerRadius;
      return [_util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([outerRadius, angle])), _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([innerRadius, angle]))];
    });
  });
  return gauges;
}

function calcGaugesLabelPositionAndAlign(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var center = gaugeItem.center,
        tickInnerRadius = gaugeItem.tickInnerRadius,
        tickAngles = gaugeItem.tickAngles,
        labelGap = gaugeItem.axisLabel.labelGap;
    var position = tickAngles.map(function (angle, i) {
      return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([tickInnerRadius[i] - labelGap, tickAngles[i]]));
    });
    var align = position.map(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return {
        textAlign: x > center[0] ? 'right' : 'left',
        textBaseline: y > center[1] ? 'bottom' : 'top'
      };
    });
    gaugeItem.labelPosition = position;
    gaugeItem.labelAlign = align;
  });
  return gauges;
}

function calcGaugesLabelData(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var axisLabel = gaugeItem.axisLabel,
        min = gaugeItem.min,
        max = gaugeItem.max,
        splitNum = gaugeItem.splitNum;
    var data = axisLabel.data,
        formatter = axisLabel.formatter;
    var valueGap = (max - min) / (splitNum - 1);
    var value = new Array(splitNum).fill(0).map(function (foo, i) {
      return parseInt(min + valueGap * i);
    });
    var formatterType = (0, _typeof2["default"])(formatter);
    data = (0, _util2.deepMerge)(value, data).map(function (v, i) {
      var label = v;

      if (formatterType === 'string') {
        label = formatter.replace('{value}', v);
      }

      if (formatterType === 'function') {
        label = formatter({
          value: v,
          index: i
        });
      }

      return label;
    });
    axisLabel.data = data;
  });
  return gauges;
}

function calcGaugesDetailsPosition(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var data = gaugeItem.data,
        details = gaugeItem.details,
        center = gaugeItem.center;
    var position = details.position,
        offset = details.offset;
    var detailsPosition = data.map(function (_ref3) {
      var startAngle = _ref3.startAngle,
          endAngle = _ref3.endAngle,
          radius = _ref3.radius;
      var point = null;

      if (position === 'center') {
        point = center;
      } else if (position === 'start') {
        point = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, startAngle]));
      } else if (position === 'end') {
        point = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, endAngle]));
      }

      return getOffsetedPoint(point, offset);
    });
    gaugeItem.detailsPosition = detailsPosition;
  });
  return gauges;
}

function calcGaugesDetailsContent(gauges, chart) {
  gauges.forEach(function (gaugeItem) {
    var data = gaugeItem.data,
        details = gaugeItem.details;
    var formatter = details.formatter;
    var formatterType = (0, _typeof2["default"])(formatter);
    var contents = data.map(function (dataItem) {
      var content = dataItem.value;

      if (formatterType === 'string') {
        content = formatter.replace('{value}', '{nt}');
        content = content.replace('{name}', dataItem.name);
      }

      if (formatterType === 'function') content = formatter(dataItem);
      return content.toString();
    });
    gaugeItem.detailsContent = contents;
  });
  return gauges;
}

function getOffsetedPoint(_ref4, _ref5) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
      x = _ref6[0],
      y = _ref6[1];

  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
      ox = _ref7[0],
      oy = _ref7[1];

  return [x + ox, y + oy];
}

function getAxisTickConfig(gaugeItem) {
  var tickPosition = gaugeItem.tickPosition,
      animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      rLevel = gaugeItem.rLevel;
  return tickPosition.map(function (foo, i) {
    return {
      name: 'polyline',
      index: rLevel,
      visible: gaugeItem.axisTick.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getAxisTickShape(gaugeItem, i),
      style: getAxisTickStyle(gaugeItem, i)
    };
  });
}

function getAxisTickShape(gaugeItem, i) {
  var tickPosition = gaugeItem.tickPosition;
  return {
    points: tickPosition[i]
  };
}

function getAxisTickStyle(gaugeItem, i) {
  var style = gaugeItem.axisTick.style;
  return style;
}

function getAxisLabelConfig(gaugeItem) {
  var labelPosition = gaugeItem.labelPosition,
      animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      rLevel = gaugeItem.rLevel;
  return labelPosition.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: gaugeItem.axisLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getAxisLabelShape(gaugeItem, i),
      style: getAxisLabelStyle(gaugeItem, i)
    };
  });
}

function getAxisLabelShape(gaugeItem, i) {
  var labelPosition = gaugeItem.labelPosition,
      data = gaugeItem.axisLabel.data;
  return {
    content: data[i].toString(),
    position: labelPosition[i]
  };
}

function getAxisLabelStyle(gaugeItem, i) {
  var labelAlign = gaugeItem.labelAlign,
      axisLabel = gaugeItem.axisLabel;
  var style = axisLabel.style;
  return (0, _util2.deepMerge)(_objectSpread({}, labelAlign[i]), style);
}

function getBackgroundArcConfig(gaugeItem) {
  var animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      rLevel = gaugeItem.rLevel;
  return [{
    name: 'arc',
    index: rLevel,
    visible: gaugeItem.backgroundArc.show,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getGaugeBackgroundArcShape(gaugeItem),
    style: getGaugeBackgroundArcStyle(gaugeItem)
  }];
}

function getGaugeBackgroundArcShape(gaugeItem) {
  var startAngle = gaugeItem.startAngle,
      endAngle = gaugeItem.endAngle,
      center = gaugeItem.center,
      radius = gaugeItem.radius;
  return {
    rx: center[0],
    ry: center[1],
    r: radius,
    startAngle: startAngle,
    endAngle: endAngle
  };
}

function getGaugeBackgroundArcStyle(gaugeItem) {
  var backgroundArc = gaugeItem.backgroundArc,
      arcLineWidth = gaugeItem.arcLineWidth;
  var style = backgroundArc.style;
  return (0, _util2.deepMerge)({
    lineWidth: arcLineWidth
  }, style);
}

function getStartBackgroundArcConfig(gaugeItem) {
  var config = getBackgroundArcConfig(gaugeItem)[0];

  var shape = _objectSpread({}, config.shape);

  shape.endAngle = config.shape.startAngle;
  config.shape = shape;
  return [config];
}

function getArcConfig(gaugeItem) {
  var data = gaugeItem.data,
      animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      rLevel = gaugeItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'agArc',
      index: rLevel,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getGaugeArcShape(gaugeItem, i),
      style: getGaugeArcStyle(gaugeItem, i)
    };
  });
}

function getGaugeArcShape(gaugeItem, i) {
  var data = gaugeItem.data,
      center = gaugeItem.center,
      gradientEndAngle = gaugeItem.endAngle;
  var _data$i = data[i],
      radius = _data$i.radius,
      startAngle = _data$i.startAngle,
      endAngle = _data$i.endAngle,
      localGradient = _data$i.localGradient;
  if (localGradient) gradientEndAngle = endAngle;
  return {
    rx: center[0],
    ry: center[1],
    r: radius,
    startAngle: startAngle,
    endAngle: endAngle,
    gradientEndAngle: gradientEndAngle
  };
}

function getGaugeArcStyle(gaugeItem, i) {
  var data = gaugeItem.data,
      dataItemStyle = gaugeItem.dataItemStyle;
  var _data$i2 = data[i],
      lineWidth = _data$i2.lineWidth,
      gradient = _data$i2.gradient;
  gradient = gradient.map(function (c) {
    return (0, _color.getRgbaValue)(c);
  });
  return (0, _util2.deepMerge)({
    lineWidth: lineWidth,
    gradient: gradient
  }, dataItemStyle);
}

function getStartArcConfig(gaugeItem) {
  var configs = getArcConfig(gaugeItem);
  configs.map(function (config) {
    var shape = _objectSpread({}, config.shape);

    shape.endAngle = config.shape.startAngle;
    config.shape = shape;
  });
  return configs;
}

function beforeChangeArc(graph, config) {
  var graphGradient = graph.style.gradient;
  var cacheNum = graphGradient.length;
  var needNum = config.style.gradient.length;

  if (cacheNum > needNum) {
    graphGradient.splice(needNum);
  } else {
    var last = graphGradient.slice(-1)[0];
    graphGradient.push.apply(graphGradient, (0, _toConsumableArray2["default"])(new Array(needNum - cacheNum).fill(0).map(function (foo) {
      return (0, _toConsumableArray2["default"])(last);
    })));
  }
}

function getPointerConfig(gaugeItem) {
  var animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      center = gaugeItem.center,
      rLevel = gaugeItem.rLevel;
  return [{
    name: 'polyline',
    index: rLevel,
    visible: gaugeItem.pointer.show,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getPointerShape(gaugeItem),
    style: getPointerStyle(gaugeItem),
    setGraphCenter: function setGraphCenter(foo, graph) {
      graph.style.graphCenter = center;
    }
  }];
}

function getPointerShape(gaugeItem) {
  var center = gaugeItem.center;
  return {
    points: getPointerPoints(center),
    close: true
  };
}

function getPointerStyle(gaugeItem) {
  var startAngle = gaugeItem.startAngle,
      endAngle = gaugeItem.endAngle,
      min = gaugeItem.min,
      max = gaugeItem.max,
      data = gaugeItem.data,
      pointer = gaugeItem.pointer,
      center = gaugeItem.center;
  var valueIndex = pointer.valueIndex,
      style = pointer.style;
  var value = data[valueIndex] ? data[valueIndex].value : 0;
  var angle = (value - min) / (max - min) * (endAngle - startAngle) + startAngle + Math.PI / 2;
  return (0, _util2.deepMerge)({
    rotate: (0, _util2.radianToAngle)(angle),
    scale: [1, 1],
    graphCenter: center
  }, style);
}

function getPointerPoints(_ref8) {
  var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
      x = _ref9[0],
      y = _ref9[1];

  var point1 = [x, y - 40];
  var point2 = [x + 5, y];
  var point3 = [x, y + 10];
  var point4 = [x - 5, y];
  return [point1, point2, point3, point4];
}

function getStartPointerConfig(gaugeItem) {
  var startAngle = gaugeItem.startAngle;
  var config = getPointerConfig(gaugeItem)[0];
  config.style.rotate = (0, _util2.radianToAngle)(startAngle + Math.PI / 2);
  return [config];
}

function getDetailsConfig(gaugeItem) {
  var detailsPosition = gaugeItem.detailsPosition,
      animationCurve = gaugeItem.animationCurve,
      animationFrame = gaugeItem.animationFrame,
      rLevel = gaugeItem.rLevel;
  var visible = gaugeItem.details.show;
  return detailsPosition.map(function (foo, i) {
    return {
      name: 'numberText',
      index: rLevel,
      visible: visible,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getDetailsShape(gaugeItem, i),
      style: getDetailsStyle(gaugeItem, i)
    };
  });
}

function getDetailsShape(gaugeItem, i) {
  var detailsPosition = gaugeItem.detailsPosition,
      detailsContent = gaugeItem.detailsContent,
      data = gaugeItem.data,
      details = gaugeItem.details;
  var position = detailsPosition[i];
  var content = detailsContent[i];
  var dataValue = data[i].value;
  var toFixed = details.valueToFixed;
  return {
    number: [dataValue],
    content: content,
    position: position,
    toFixed: toFixed
  };
}

function getDetailsStyle(gaugeItem, i) {
  var details = gaugeItem.details,
      data = gaugeItem.data;
  var style = details.style;
  var color = data[i].color;
  return (0, _util2.deepMerge)({
    fill: color
  }, style);
}

/***/ }),

/***/ "204e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _config = __webpack_require__("9d85");

var _util = __webpack_require__("5557");

var _util2 = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bar(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var xAxis = option.xAxis,
      yAxis = option.yAxis,
      series = option.series;
  var bars = [];

  if (xAxis && yAxis && series) {
    bars = (0, _util2.initNeedSeries)(series, _config.barConfig, 'bar');
    bars = setBarAxis(bars, chart);
    bars = setBarPositionData(bars, chart);
    bars = calcBarsPosition(bars, chart);
  }

  (0, _updater.doUpdate)({
    chart: chart,
    series: bars.slice(-1),
    key: 'backgroundBar',
    getGraphConfig: getBackgroundBarConfig
  });
  bars.reverse();
  (0, _updater.doUpdate)({
    chart: chart,
    series: bars,
    key: 'bar',
    getGraphConfig: getBarConfig,
    getStartGraphConfig: getStartBarConfig,
    beforeUpdate: beforeUpdateBar
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: bars,
    key: 'barLabel',
    getGraphConfig: getLabelConfig
  });
}

function setBarAxis(bars, chart) {
  var axisData = chart.axisData;
  bars.forEach(function (bar) {
    var xAxisIndex = bar.xAxisIndex,
        yAxisIndex = bar.yAxisIndex;
    if (typeof xAxisIndex !== 'number') xAxisIndex = 0;
    if (typeof yAxisIndex !== 'number') yAxisIndex = 0;
    var xAxis = axisData.find(function (_ref) {
      var axis = _ref.axis,
          index = _ref.index;
      return "".concat(axis).concat(index) === "x".concat(xAxisIndex);
    });
    var yAxis = axisData.find(function (_ref2) {
      var axis = _ref2.axis,
          index = _ref2.index;
      return "".concat(axis).concat(index) === "y".concat(yAxisIndex);
    });
    var axis = [xAxis, yAxis];
    var valueAxisIndex = axis.findIndex(function (_ref3) {
      var data = _ref3.data;
      return data === 'value';
    });
    bar.valueAxis = axis[valueAxisIndex];
    bar.labelAxis = axis[1 - valueAxisIndex];
  });
  return bars;
}

function setBarPositionData(bars, chart) {
  var labelBarGroup = groupBarByLabelAxis(bars);
  labelBarGroup.forEach(function (group) {
    setBarIndex(group);
    setBarNum(group);
    setBarCategoryWidth(group, chart);
    setBarWidthAndGap(group);
    setBarAllWidthAndGap(group);
  });
  return bars;
}

function setBarIndex(bars) {
  var stacks = getBarStack(bars);
  stacks = stacks.map(function (stack) {
    return {
      stack: stack,
      index: -1
    };
  });
  var currentIndex = 0;
  bars.forEach(function (bar) {
    var stack = bar.stack;

    if (!stack) {
      bar.barIndex = currentIndex;
      currentIndex++;
    } else {
      var stackData = stacks.find(function (_ref4) {
        var s = _ref4.stack;
        return s === stack;
      });

      if (stackData.index === -1) {
        stackData.index = currentIndex;
        currentIndex++;
      }

      bar.barIndex = stackData.index;
    }
  });
}

function groupBarByLabelAxis(bars) {
  var labelAxis = bars.map(function (_ref5) {
    var _ref5$labelAxis = _ref5.labelAxis,
        axis = _ref5$labelAxis.axis,
        index = _ref5$labelAxis.index;
    return axis + index;
  });
  labelAxis = (0, _toConsumableArray2["default"])(new Set(labelAxis));
  return labelAxis.map(function (axisIndex) {
    return bars.filter(function (_ref6) {
      var _ref6$labelAxis = _ref6.labelAxis,
          axis = _ref6$labelAxis.axis,
          index = _ref6$labelAxis.index;
      return axis + index === axisIndex;
    });
  });
}

function getBarStack(bars) {
  var stacks = [];
  bars.forEach(function (_ref7) {
    var stack = _ref7.stack;
    if (stack) stacks.push(stack);
  });
  return (0, _toConsumableArray2["default"])(new Set(stacks));
}

function setBarNum(bars) {
  var barNum = (0, _toConsumableArray2["default"])(new Set(bars.map(function (_ref8) {
    var barIndex = _ref8.barIndex;
    return barIndex;
  }))).length;
  bars.forEach(function (bar) {
    return bar.barNum = barNum;
  });
}

function setBarCategoryWidth(bars) {
  var lastBar = bars.slice(-1)[0];
  var barCategoryGap = lastBar.barCategoryGap,
      tickGap = lastBar.labelAxis.tickGap;
  var barCategoryWidth = 0;

  if (typeof barCategoryGap === 'number') {
    barCategoryWidth = barCategoryGap;
  } else {
    barCategoryWidth = (1 - parseInt(barCategoryGap) / 100) * tickGap;
  }

  bars.forEach(function (bar) {
    return bar.barCategoryWidth = barCategoryWidth;
  });
}

function setBarWidthAndGap(bars) {
  var _bars$slice$ = bars.slice(-1)[0],
      barCategoryWidth = _bars$slice$.barCategoryWidth,
      barWidth = _bars$slice$.barWidth,
      barGap = _bars$slice$.barGap,
      barNum = _bars$slice$.barNum;
  var widthAndGap = [];

  if (typeof barWidth === 'number' || barWidth !== 'auto') {
    widthAndGap = getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap, barNum);
  } else if (barWidth === 'auto') {
    widthAndGap = getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum);
  }

  var _widthAndGap = widthAndGap,
      _widthAndGap2 = (0, _slicedToArray2["default"])(_widthAndGap, 2),
      width = _widthAndGap2[0],
      gap = _widthAndGap2[1];

  bars.forEach(function (bar) {
    bar.barWidth = width;
    bar.barGap = gap;
  });
}

function getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap) {
  var width = 0,
      gap = 0;

  if (typeof barWidth === 'number') {
    width = barWidth;
  } else {
    width = parseInt(barWidth) / 100 * barCategoryWidth;
  }

  if (typeof barGap === 'number') {
    gap = barGap;
  } else {
    gap = parseInt(barGap) / 100 * width;
  }

  return [width, gap];
}

function getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum) {
  var width = 0,
      gap = 0;
  var barItemWidth = barCategoryWidth / barNum;

  if (typeof barGap === 'number') {
    gap = barGap;
    width = barItemWidth - gap;
  } else {
    var percent = 10 + parseInt(barGap) / 10;

    if (percent === 0) {
      width = barItemWidth * 2;
      gap = -width;
    } else {
      width = barItemWidth / percent * 10;
      gap = barItemWidth - width;
    }
  }

  return [width, gap];
}

function setBarAllWidthAndGap(bars) {
  var _bars$slice$2 = bars.slice(-1)[0],
      barGap = _bars$slice$2.barGap,
      barWidth = _bars$slice$2.barWidth,
      barNum = _bars$slice$2.barNum;
  var barAllWidthAndGap = (barGap + barWidth) * barNum - barGap;
  bars.forEach(function (bar) {
    return bar.barAllWidthAndGap = barAllWidthAndGap;
  });
}

function calcBarsPosition(bars, chart) {
  bars = calcBarValueAxisCoordinate(bars);
  bars = calcBarLabelAxisCoordinate(bars);
  bars = eliminateNullBarLabelAxis(bars);
  bars = keepSameNumBetweenBarAndData(bars);
  return bars;
}

function calcBarLabelAxisCoordinate(bars) {
  return bars.map(function (bar) {
    var labelAxis = bar.labelAxis,
        barAllWidthAndGap = bar.barAllWidthAndGap,
        barGap = bar.barGap,
        barWidth = bar.barWidth,
        barIndex = bar.barIndex;
    var tickGap = labelAxis.tickGap,
        tickPosition = labelAxis.tickPosition,
        axis = labelAxis.axis;
    var coordinateIndex = axis === 'x' ? 0 : 1;
    var barLabelAxisPos = tickPosition.map(function (tick, i) {
      var barCategoryStartPos = tickPosition[i][coordinateIndex] - tickGap / 2;
      var barItemsStartPos = barCategoryStartPos + (tickGap - barAllWidthAndGap) / 2;
      return barItemsStartPos + (barIndex + 0.5) * barWidth + barIndex * barGap;
    });
    return _objectSpread(_objectSpread({}, bar), {}, {
      barLabelAxisPos: barLabelAxisPos
    });
  });
}

function calcBarValueAxisCoordinate(bars) {
  return bars.map(function (bar) {
    var data = (0, _util2.mergeSameStackData)(bar, bars);
    data = eliminateNonNumberData(bar, data);
    var _bar$valueAxis = bar.valueAxis,
        axis = _bar$valueAxis.axis,
        minValue = _bar$valueAxis.minValue,
        maxValue = _bar$valueAxis.maxValue,
        linePosition = _bar$valueAxis.linePosition;
    var startPos = getValuePos(minValue, maxValue, minValue < 0 ? 0 : minValue, linePosition, axis);
    var endPos = data.map(function (v) {
      return getValuePos(minValue, maxValue, v, linePosition, axis);
    });
    var barValueAxisPos = endPos.map(function (p) {
      return [startPos, p];
    });
    return _objectSpread(_objectSpread({}, bar), {}, {
      barValueAxisPos: barValueAxisPos
    });
  });
}

function eliminateNonNumberData(barItem, barData) {
  var data = barItem.data;
  return barData.map(function (v, i) {
    return typeof data[i] === 'number' ? v : null;
  }).filter(function (d) {
    return d !== null;
  });
}

function eliminateNullBarLabelAxis(bars) {
  return bars.map(function (bar) {
    var barLabelAxisPos = bar.barLabelAxisPos,
        data = bar.data;
    data.forEach(function (d, i) {
      if (typeof d === 'number') return;
      barLabelAxisPos[i] = null;
    });
    return _objectSpread(_objectSpread({}, bar), {}, {
      barLabelAxisPos: barLabelAxisPos.filter(function (p) {
        return p !== null;
      })
    });
  });
}

function keepSameNumBetweenBarAndData(bars) {
  bars.forEach(function (bar) {
    var data = bar.data,
        barLabelAxisPos = bar.barLabelAxisPos,
        barValueAxisPos = bar.barValueAxisPos;
    var dataNum = data.filter(function (d) {
      return typeof d === 'number';
    }).length;
    var axisPosNum = barLabelAxisPos.length;

    if (axisPosNum > dataNum) {
      barLabelAxisPos.splice(dataNum);
      barValueAxisPos.splice(dataNum);
    }
  });
  return bars;
}

function getValuePos(min, max, value, linePosition, axis) {
  if (typeof value !== 'number') return null;
  var valueMinus = max - min;
  var coordinateIndex = axis === 'x' ? 0 : 1;
  var posMinus = linePosition[1][coordinateIndex] - linePosition[0][coordinateIndex];
  var percent = (value - min) / valueMinus;
  if (valueMinus === 0) percent = 0;
  var pos = percent * posMinus;
  return pos + linePosition[0][coordinateIndex];
}

function getBackgroundBarConfig(barItem) {
  var animationCurve = barItem.animationCurve,
      animationFrame = barItem.animationFrame,
      rLevel = barItem.rLevel;
  var shapes = getBackgroundBarShapes(barItem);
  var style = getBackgroundBarStyle(barItem);
  return shapes.map(function (shape) {
    return {
      name: 'rect',
      index: rLevel,
      visible: barItem.backgroundBar.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getBackgroundBarShapes(barItem) {
  var labelAxis = barItem.labelAxis,
      valueAxis = barItem.valueAxis;
  var tickPosition = labelAxis.tickPosition;
  var axis = valueAxis.axis,
      linePosition = valueAxis.linePosition;
  var width = getBackgroundBarWidth(barItem);
  var haltWidth = width / 2;
  var posIndex = axis === 'x' ? 0 : 1;
  var centerPos = tickPosition.map(function (p) {
    return p[1 - posIndex];
  });
  var _ref9 = [linePosition[0][posIndex], linePosition[1][posIndex]],
      start = _ref9[0],
      end = _ref9[1];
  return centerPos.map(function (center) {
    if (axis === 'x') {
      return {
        x: start,
        y: center - haltWidth,
        w: end - start,
        h: width
      };
    } else {
      return {
        x: center - haltWidth,
        y: end,
        w: width,
        h: start - end
      };
    }
  });
}

function getBackgroundBarWidth(barItem) {
  var barAllWidthAndGap = barItem.barAllWidthAndGap,
      barCategoryWidth = barItem.barCategoryWidth,
      backgroundBar = barItem.backgroundBar;
  var width = backgroundBar.width;
  if (typeof width === 'number') return width;
  if (width === 'auto') return barAllWidthAndGap;
  return parseInt(width) / 100 * barCategoryWidth;
}

function getBackgroundBarStyle(barItem) {
  return barItem.backgroundBar.style;
}

function getBarConfig(barItem) {
  var barLabelAxisPos = barItem.barLabelAxisPos,
      animationCurve = barItem.animationCurve,
      animationFrame = barItem.animationFrame,
      rLevel = barItem.rLevel;
  var name = getBarName(barItem);
  return barLabelAxisPos.map(function (foo, i) {
    return {
      name: name,
      index: rLevel,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getBarShape(barItem, i),
      style: getBarStyle(barItem, i)
    };
  });
}

function getBarName(barItem) {
  var shapeType = barItem.shapeType;
  if (shapeType === 'leftEchelon' || shapeType === 'rightEchelon') return 'polyline';
  return 'rect';
}

function getBarShape(barItem, i) {
  var shapeType = barItem.shapeType;

  if (shapeType === 'leftEchelon') {
    return getLeftEchelonShape(barItem, i);
  } else if (shapeType === 'rightEchelon') {
    return getRightEchelonShape(barItem, i);
  } else {
    return getNormalBarShape(barItem, i);
  }
}

function getLeftEchelonShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos,
      barLabelAxisPos = barItem.barLabelAxisPos,
      barWidth = barItem.barWidth,
      echelonOffset = barItem.echelonOffset;

  var _barValueAxisPos$i = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
      start = _barValueAxisPos$i[0],
      end = _barValueAxisPos$i[1];

  var labelAxisPos = barLabelAxisPos[i];
  var halfWidth = barWidth / 2;
  var valueAxis = barItem.valueAxis.axis;
  var points = [];

  if (valueAxis === 'x') {
    points[0] = [end, labelAxisPos - halfWidth];
    points[1] = [end, labelAxisPos + halfWidth];
    points[2] = [start, labelAxisPos + halfWidth];
    points[3] = [start + echelonOffset, labelAxisPos - halfWidth];
    if (end - start < echelonOffset) points.splice(3, 1);
  } else {
    points[0] = [labelAxisPos - halfWidth, end];
    points[1] = [labelAxisPos + halfWidth, end];
    points[2] = [labelAxisPos + halfWidth, start];
    points[3] = [labelAxisPos - halfWidth, start - echelonOffset];
    if (start - end < echelonOffset) points.splice(3, 1);
  }

  return {
    points: points,
    close: true
  };
}

function getRightEchelonShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos,
      barLabelAxisPos = barItem.barLabelAxisPos,
      barWidth = barItem.barWidth,
      echelonOffset = barItem.echelonOffset;

  var _barValueAxisPos$i2 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
      start = _barValueAxisPos$i2[0],
      end = _barValueAxisPos$i2[1];

  var labelAxisPos = barLabelAxisPos[i];
  var halfWidth = barWidth / 2;
  var valueAxis = barItem.valueAxis.axis;
  var points = [];

  if (valueAxis === 'x') {
    points[0] = [end, labelAxisPos + halfWidth];
    points[1] = [end, labelAxisPos - halfWidth];
    points[2] = [start, labelAxisPos - halfWidth];
    points[3] = [start + echelonOffset, labelAxisPos + halfWidth];
    if (end - start < echelonOffset) points.splice(2, 1);
  } else {
    points[0] = [labelAxisPos + halfWidth, end];
    points[1] = [labelAxisPos - halfWidth, end];
    points[2] = [labelAxisPos - halfWidth, start];
    points[3] = [labelAxisPos + halfWidth, start - echelonOffset];
    if (start - end < echelonOffset) points.splice(2, 1);
  }

  return {
    points: points,
    close: true
  };
}

function getNormalBarShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos,
      barLabelAxisPos = barItem.barLabelAxisPos,
      barWidth = barItem.barWidth;

  var _barValueAxisPos$i3 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
      start = _barValueAxisPos$i3[0],
      end = _barValueAxisPos$i3[1];

  var labelAxisPos = barLabelAxisPos[i];
  var valueAxis = barItem.valueAxis.axis;
  var shape = {};

  if (valueAxis === 'x') {
    shape.x = start;
    shape.y = labelAxisPos - barWidth / 2;
    shape.w = end - start;
    shape.h = barWidth;
  } else {
    shape.x = labelAxisPos - barWidth / 2;
    shape.y = end;
    shape.w = barWidth;
    shape.h = start - end;
  }

  return shape;
}

function getBarStyle(barItem, i) {
  var barStyle = barItem.barStyle,
      gradient = barItem.gradient,
      color = barItem.color,
      independentColor = barItem.independentColor,
      independentColors = barItem.independentColors;
  var fillColor = [barStyle.fill || color];
  var gradientColor = (0, _util2.deepMerge)(fillColor, gradient.color);

  if (independentColor) {
    var idtColor = independentColors[i % independentColors.length];
    gradientColor = idtColor instanceof Array ? idtColor : [idtColor];
  }

  if (gradientColor.length === 1) gradientColor.push(gradientColor[0]);
  var gradientParams = getGradientParams(barItem, i);
  return (0, _util2.deepMerge)({
    gradientColor: gradientColor,
    gradientParams: gradientParams,
    gradientType: 'linear',
    gradientWith: 'fill'
  }, barStyle);
}

function getGradientParams(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos,
      barLabelAxisPos = barItem.barLabelAxisPos,
      data = barItem.data;
  var _barItem$valueAxis = barItem.valueAxis,
      linePosition = _barItem$valueAxis.linePosition,
      axis = _barItem$valueAxis.axis;

  var _barValueAxisPos$i4 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
      start = _barValueAxisPos$i4[0],
      end = _barValueAxisPos$i4[1];

  var labelAxisPos = barLabelAxisPos[i];
  var value = data[i];

  var _linePosition = (0, _slicedToArray2["default"])(linePosition, 2),
      lineStart = _linePosition[0],
      lineEnd = _linePosition[1];

  var valueAxisIndex = axis === 'x' ? 0 : 1;
  var endPos = end;

  if (!barItem.gradient.local) {
    endPos = value < 0 ? lineStart[valueAxisIndex] : lineEnd[valueAxisIndex];
  }

  if (axis === 'y') {
    return [labelAxisPos, endPos, labelAxisPos, start];
  } else {
    return [endPos, labelAxisPos, start, labelAxisPos];
  }
}

function getStartBarConfig(barItem) {
  var configs = getBarConfig(barItem);
  var shapeType = barItem.shapeType;
  configs.forEach(function (config) {
    var shape = config.shape;

    if (shapeType === 'leftEchelon') {
      shape = getStartLeftEchelonShape(shape, barItem);
    } else if (shapeType === 'rightEchelon') {
      shape = getStartRightEchelonShape(shape, barItem);
    } else {
      shape = getStartNormalBarShape(shape, barItem);
    }

    config.shape = shape;
  });
  return configs;
}

function getStartLeftEchelonShape(shape, barItem) {
  var axis = barItem.valueAxis.axis;
  shape = (0, _util.deepClone)(shape);
  var _shape = shape,
      points = _shape.points;
  var index = axis === 'x' ? 0 : 1;
  var start = points[2][index];
  points.forEach(function (point) {
    return point[index] = start;
  });
  return shape;
}

function getStartRightEchelonShape(shape, barItem) {
  var axis = barItem.valueAxis.axis;
  shape = (0, _util.deepClone)(shape);
  var _shape2 = shape,
      points = _shape2.points;
  var index = axis === 'x' ? 0 : 1;
  var start = points[2][index];
  points.forEach(function (point) {
    return point[index] = start;
  });
  return shape;
}

function getStartNormalBarShape(shape, barItem) {
  var axis = barItem.valueAxis.axis;
  var x = shape.x,
      y = shape.y,
      w = shape.w,
      h = shape.h;

  if (axis === 'x') {
    w = 0;
  } else {
    y = y + h;
    h = 0;
  }

  return {
    x: x,
    y: y,
    w: w,
    h: h
  };
}

function beforeUpdateBar(graphs, barItem, i, updater) {
  var render = updater.chart.render;
  var name = getBarName(barItem);

  if (graphs[i] && graphs[i][0].name !== name) {
    graphs[i].forEach(function (g) {
      return render.delGraph(g);
    });
    graphs[i] = null;
  }
}

function getLabelConfig(barItem) {
  var animationCurve = barItem.animationCurve,
      animationFrame = barItem.animationFrame,
      rLevel = barItem.rLevel;
  var shapes = getLabelShapes(barItem);
  var style = getLabelStyle(barItem);
  return shapes.map(function (shape) {
    return {
      name: 'text',
      index: rLevel,
      visible: barItem.label.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getLabelShapes(barItem) {
  var contents = getFormatterLabels(barItem);
  var position = getLabelsPosition(barItem);
  return position.map(function (pos, i) {
    return {
      position: pos,
      content: contents[i]
    };
  });
}

function getFormatterLabels(barItem) {
  var data = barItem.data,
      label = barItem.label;
  var formatter = label.formatter;
  data = data.filter(function (d) {
    return typeof d === 'number';
  }).map(function (d) {
    return d.toString();
  });
  if (!formatter) return data;
  var type = (0, _typeof2["default"])(formatter);
  if (type === 'string') return data.map(function (d) {
    return formatter.replace('{value}', d);
  });
  if (type === 'function') return data.map(function (d, i) {
    return formatter({
      value: d,
      index: i
    });
  });
  return data;
}

function getLabelsPosition(barItem) {
  var label = barItem.label,
      barValueAxisPos = barItem.barValueAxisPos,
      barLabelAxisPos = barItem.barLabelAxisPos;
  var position = label.position,
      offset = label.offset;
  var axis = barItem.valueAxis.axis;
  return barValueAxisPos.map(function (_ref10, i) {
    var _ref11 = (0, _slicedToArray2["default"])(_ref10, 2),
        start = _ref11[0],
        end = _ref11[1];

    var labelAxisPos = barLabelAxisPos[i];
    var pos = [end, labelAxisPos];

    if (position === 'bottom') {
      pos = [start, labelAxisPos];
    }

    if (position === 'center') {
      pos = [(start + end) / 2, labelAxisPos];
    }

    if (axis === 'y') pos.reverse();
    return getOffsetedPoint(pos, offset);
  });
}

function getOffsetedPoint(_ref12, _ref13) {
  var _ref14 = (0, _slicedToArray2["default"])(_ref12, 2),
      x = _ref14[0],
      y = _ref14[1];

  var _ref15 = (0, _slicedToArray2["default"])(_ref13, 2),
      ox = _ref15[0],
      oy = _ref15[1];

  return [x + ox, y + oy];
}

function getLabelStyle(barItem) {
  var color = barItem.color,
      style = barItem.label.style,
      gc = barItem.gradient.color;
  if (gc.length) color = gc[0];
  style = (0, _util2.deepMerge)({
    fill: color
  }, style);
  return style;
}

/***/ }),

/***/ "222a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pieConfig = void 0;
var pieConfig = {
  /**
   * @description Whether to display this pie chart
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Radius of pie
   * @type {String|Number}
   * @default radius = '50%'
   * @example radius = '50%' | 100
   */
  radius: '50%',

  /**
   * @description Center point of pie
   * @type {Array}
   * @default center = ['50%','50%']
   * @example center = ['50%','50%'] | [100, 100]
   */
  center: ['50%', '50%'],

  /**
   * @description Pie chart start angle
   * @type {Number}
   * @default startAngle = -Math.PI / 2
   * @example startAngle = -Math.PI
   */
  startAngle: -Math.PI / 2,

  /**
   * @description Whether to enable rose type
   * @type {Boolean}
   * @default roseType = false
   */
  roseType: false,

  /**
   * @description Automatic sorting in rose type
   * @type {Boolean}
   * @default roseSort = true
   */
  roseSort: true,

  /**
   * @description Rose radius increasing
   * @type {String|Number}
   * @default roseIncrement = 'auto'
   * @example roseIncrement = 'auto' | '10%' | 10
   */
  roseIncrement: 'auto',

  /**
   * @description Pie chart data
   * @type {Array}
   * @default data = []
   */
  data: [],

  /**
   * @description Pie inside label configuration
   * @type {Object}
   */
  insideLabel: {
    /**
     * @description Whether to display inside label
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Label formatter
     * @type {String|Function}
     * @default formatter = '{percent}%'
     * @example formatter = '${name}-{value}-{percent}%'
     * @example formatter = (dataItem) => (dataItem.name)
     */
    formatter: '{percent}%',

    /**
     * @description Label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 10,
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    }
  },

  /**
   * @description Pie Outside label configuration
   * @type {Object}
   */
  outsideLabel: {
    /**
     * @description Whether to display outside label
     * @type {Boolean}
     * @default show = false
     */
    show: true,

    /**
     * @description Label formatter
     * @type {String|Function}
     * @default formatter = '{name}'
     * @example formatter = '${name}-{value}-{percent}%'
     * @example formatter = (dataItem) => (dataItem.name)
     */
    formatter: '{name}',

    /**
     * @description Label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 11
    },

    /**
     * @description Gap beteen label line bended place and pie
     * @type {String|Number}
     * @default labelLineBendGap = '20%'
     * @example labelLineBendGap = '20%' | 20
     */
    labelLineBendGap: '20%',

    /**
     * @description Label line end length
     * @type {Number}
     * @default labelLineEndLength = 50
     */
    labelLineEndLength: 50,

    /**
     * @description Label line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    labelLineStyle: {
      lineWidth: 1
    }
  },

  /**
   * @description Pie default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  pieStyle: {},

  /**
   * @description Percentage fractional precision
   * @type {Number}
   * @default percentToFixed = 0
   */
  percentToFixed: 0,

  /**
   * @description Pie chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 10
   */
  rLevel: 10,

  /**
   * @description Animation delay gap
   * @type {Number}
   * @default animationDelayGap = 60
   */
  animationDelayGap: 60,

  /**
   * @description Pie animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Pie start animation curve
   * @type {String}
   * @default startAnimationCurve = 'easeOutBack'
   */
  startAnimationCurve: 'easeOutBack',

  /**
   * @description Pie animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.pieConfig = pieConfig;

/***/ }),

/***/ "2236":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("5a43");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "252f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.line = line;

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _updater = __webpack_require__("18ad");

var _config = __webpack_require__("9d85");

var _bezierCurve = _interopRequireDefault(__webpack_require__("050c"));

var _util = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var polylineToBezierCurve = _bezierCurve["default"].polylineToBezierCurve,
    getBezierCurveLength = _bezierCurve["default"].getBezierCurveLength;

function line(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var xAxis = option.xAxis,
      yAxis = option.yAxis,
      series = option.series;
  var lines = [];

  if (xAxis && yAxis && series) {
    lines = (0, _util.initNeedSeries)(series, _config.lineConfig, 'line');
    lines = calcLinesPosition(lines, chart);
  }

  (0, _updater.doUpdate)({
    chart: chart,
    series: lines,
    key: 'lineArea',
    getGraphConfig: getLineAreaConfig,
    getStartGraphConfig: getStartLineAreaConfig,
    beforeUpdate: beforeUpdateLineAndArea,
    beforeChange: beforeChangeLineAndArea
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: lines,
    key: 'line',
    getGraphConfig: getLineConfig,
    getStartGraphConfig: getStartLineConfig,
    beforeUpdate: beforeUpdateLineAndArea,
    beforeChange: beforeChangeLineAndArea
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: lines,
    key: 'linePoint',
    getGraphConfig: getPointConfig,
    getStartGraphConfig: getStartPointConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: lines,
    key: 'lineLabel',
    getGraphConfig: getLabelConfig
  });
}

function calcLinesPosition(lines, chart) {
  var axisData = chart.axisData;
  return lines.map(function (lineItem) {
    var lineData = (0, _util.mergeSameStackData)(lineItem, lines);
    lineData = mergeNonNumber(lineItem, lineData);
    var lineAxis = getLineAxis(lineItem, axisData);
    var linePosition = getLinePosition(lineData, lineAxis);
    var lineFillBottomPos = getLineFillBottomPos(lineAxis);
    return _objectSpread(_objectSpread({}, lineItem), {}, {
      linePosition: linePosition.filter(function (p) {
        return p;
      }),
      lineFillBottomPos: lineFillBottomPos
    });
  });
}

function mergeNonNumber(lineItem, lineData) {
  var data = lineItem.data;
  return lineData.map(function (v, i) {
    return typeof data[i] === 'number' ? v : null;
  });
}

function getLineAxis(line, axisData) {
  var xAxisIndex = line.xAxisIndex,
      yAxisIndex = line.yAxisIndex;
  var xAxis = axisData.find(function (_ref) {
    var axis = _ref.axis,
        index = _ref.index;
    return axis === 'x' && index === xAxisIndex;
  });
  var yAxis = axisData.find(function (_ref2) {
    var axis = _ref2.axis,
        index = _ref2.index;
    return axis === 'y' && index === yAxisIndex;
  });
  return [xAxis, yAxis];
}

function getLinePosition(lineData, lineAxis) {
  var valueAxisIndex = lineAxis.findIndex(function (_ref3) {
    var data = _ref3.data;
    return data === 'value';
  });
  var valueAxis = lineAxis[valueAxisIndex];
  var labelAxis = lineAxis[1 - valueAxisIndex];
  var linePosition = valueAxis.linePosition,
      axis = valueAxis.axis;
  var tickPosition = labelAxis.tickPosition;
  var tickNum = tickPosition.length;
  var valueAxisPosIndex = axis === 'x' ? 0 : 1;
  var valueAxisStartPos = linePosition[0][valueAxisPosIndex];
  var valueAxisEndPos = linePosition[1][valueAxisPosIndex];
  var valueAxisPosMinus = valueAxisEndPos - valueAxisStartPos;
  var maxValue = valueAxis.maxValue,
      minValue = valueAxis.minValue;
  var valueMinus = maxValue - minValue;
  var position = new Array(tickNum).fill(0).map(function (foo, i) {
    var v = lineData[i];
    if (typeof v !== 'number') return null;
    var valuePercent = (v - minValue) / valueMinus;
    if (valueMinus === 0) valuePercent = 0;
    return valuePercent * valueAxisPosMinus + valueAxisStartPos;
  });
  return position.map(function (vPos, i) {
    if (i >= tickNum || typeof vPos !== 'number') return null;
    var pos = [vPos, tickPosition[i][1 - valueAxisPosIndex]];
    if (valueAxisPosIndex === 0) return pos;
    pos.reverse();
    return pos;
  });
}

function getLineFillBottomPos(lineAxis) {
  var valueAxis = lineAxis.find(function (_ref4) {
    var data = _ref4.data;
    return data === 'value';
  });
  var axis = valueAxis.axis,
      linePosition = valueAxis.linePosition,
      minValue = valueAxis.minValue,
      maxValue = valueAxis.maxValue;
  var changeIndex = axis === 'x' ? 0 : 1;
  var changeValue = linePosition[0][changeIndex];

  if (minValue < 0 && maxValue > 0) {
    var valueMinus = maxValue - minValue;
    var posMinus = Math.abs(linePosition[0][changeIndex] - linePosition[1][changeIndex]);
    var offset = Math.abs(minValue) / valueMinus * posMinus;
    if (axis === 'y') offset *= -1;
    changeValue += offset;
  }

  return {
    changeIndex: changeIndex,
    changeValue: changeValue
  };
}

function getLineAreaConfig(lineItem) {
  var animationCurve = lineItem.animationCurve,
      animationFrame = lineItem.animationFrame,
      lineFillBottomPos = lineItem.lineFillBottomPos,
      rLevel = lineItem.rLevel;
  return [{
    name: getLineGraphName(lineItem),
    index: rLevel,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    visible: lineItem.lineArea.show,
    lineFillBottomPos: lineFillBottomPos,
    shape: getLineAndAreaShape(lineItem),
    style: getLineAreaStyle(lineItem),
    drawed: lineAreaDrawed
  }];
}

function getLineAndAreaShape(lineItem) {
  var linePosition = lineItem.linePosition;
  return {
    points: linePosition
  };
}

function getLineAreaStyle(lineItem) {
  var lineArea = lineItem.lineArea,
      color = lineItem.color;
  var gradient = lineArea.gradient,
      style = lineArea.style;
  var fillColor = [style.fill || color];
  var gradientColor = (0, _util.deepMerge)(fillColor, gradient);
  if (gradientColor.length === 1) gradientColor.push(gradientColor[0]);
  var gradientParams = getGradientParams(lineItem);
  style = _objectSpread(_objectSpread({}, style), {}, {
    stroke: 'rgba(0, 0, 0, 0)'
  });
  return (0, _util.deepMerge)({
    gradientColor: gradientColor,
    gradientParams: gradientParams,
    gradientType: 'linear',
    gradientWith: 'fill'
  }, style);
}

function getGradientParams(lineItem) {
  var lineFillBottomPos = lineItem.lineFillBottomPos,
      linePosition = lineItem.linePosition;
  var changeIndex = lineFillBottomPos.changeIndex,
      changeValue = lineFillBottomPos.changeValue;
  var mainPos = linePosition.map(function (p) {
    return p[changeIndex];
  });
  var maxPos = Math.max.apply(Math, (0, _toConsumableArray2["default"])(mainPos));
  var minPos = Math.min.apply(Math, (0, _toConsumableArray2["default"])(mainPos));
  var beginPos = maxPos;
  if (changeIndex === 1) beginPos = minPos;

  if (changeIndex === 1) {
    return [0, beginPos, 0, changeValue];
  } else {
    return [beginPos, 0, changeValue, 0];
  }
}

function lineAreaDrawed(_ref5, _ref6) {
  var lineFillBottomPos = _ref5.lineFillBottomPos,
      shape = _ref5.shape;
  var ctx = _ref6.ctx;
  var points = shape.points;
  var changeIndex = lineFillBottomPos.changeIndex,
      changeValue = lineFillBottomPos.changeValue;
  var linePoint1 = (0, _toConsumableArray2["default"])(points[points.length - 1]);
  var linePoint2 = (0, _toConsumableArray2["default"])(points[0]);
  linePoint1[changeIndex] = changeValue;
  linePoint2[changeIndex] = changeValue;
  ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(linePoint1));
  ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(linePoint2));
  ctx.closePath();
  ctx.fill();
}

function getStartLineAreaConfig(lineItem) {
  var config = getLineAreaConfig(lineItem)[0];

  var style = _objectSpread({}, config.style);

  style.opacity = 0;
  config.style = style;
  return [config];
}

function beforeUpdateLineAndArea(graphs, lineItem, i, updater) {
  var cache = graphs[i];
  if (!cache) return;
  var currentName = getLineGraphName(lineItem);
  var render = updater.chart.render;
  var name = cache[0].name;
  var delAll = currentName !== name;
  if (!delAll) return;
  cache.forEach(function (g) {
    return render.delGraph(g);
  });
  graphs[i] = null;
}

function beforeChangeLineAndArea(graph, config) {
  var points = config.shape.points;
  var graphPoints = graph.shape.points;
  var graphPointsNum = graphPoints.length;
  var pointsNum = points.length;

  if (pointsNum > graphPointsNum) {
    var lastPoint = graphPoints.slice(-1)[0];
    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function (foo) {
      return (0, _toConsumableArray2["default"])(lastPoint);
    });
    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2["default"])(newAddPoints));
  } else if (pointsNum < graphPointsNum) {
    graphPoints.splice(pointsNum);
  }
}

function getLineConfig(lineItem) {
  var animationCurve = lineItem.animationCurve,
      animationFrame = lineItem.animationFrame,
      rLevel = lineItem.rLevel;
  return [{
    name: getLineGraphName(lineItem),
    index: rLevel + 1,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getLineAndAreaShape(lineItem),
    style: getLineStyle(lineItem)
  }];
}

function getLineGraphName(lineItem) {
  var smooth = lineItem.smooth;
  return smooth ? 'smoothline' : 'polyline';
}

function getLineStyle(lineItem) {
  var lineStyle = lineItem.lineStyle,
      color = lineItem.color,
      smooth = lineItem.smooth,
      linePosition = lineItem.linePosition;
  var lineLength = getLineLength(linePosition, smooth);
  return (0, _util.deepMerge)({
    stroke: color,
    lineDash: [lineLength, 0]
  }, lineStyle);
}

function getLineLength(points) {
  var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!smooth) return (0, _util.getPolylineLength)(points);
  var curve = polylineToBezierCurve(points);
  return getBezierCurveLength(curve);
}

function getStartLineConfig(lineItem) {
  var lineDash = lineItem.lineStyle.lineDash;
  var config = getLineConfig(lineItem)[0];
  var realLineDash = config.style.lineDash;

  if (lineDash) {
    realLineDash = [0, 0];
  } else {
    realLineDash = (0, _toConsumableArray2["default"])(realLineDash).reverse();
  }

  config.style.lineDash = realLineDash;
  return [config];
}

function getPointConfig(lineItem) {
  var animationCurve = lineItem.animationCurve,
      animationFrame = lineItem.animationFrame,
      rLevel = lineItem.rLevel;
  var shapes = getPointShapes(lineItem);
  var style = getPointStyle(lineItem);
  return shapes.map(function (shape) {
    return {
      name: 'circle',
      index: rLevel + 2,
      visible: lineItem.linePoint.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getPointShapes(lineItem) {
  var linePosition = lineItem.linePosition,
      radius = lineItem.linePoint.radius;
  return linePosition.map(function (_ref7) {
    var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
        rx = _ref8[0],
        ry = _ref8[1];

    return {
      r: radius,
      rx: rx,
      ry: ry
    };
  });
}

function getPointStyle(lineItem) {
  var color = lineItem.color,
      style = lineItem.linePoint.style;
  return (0, _util.deepMerge)({
    stroke: color
  }, style);
}

function getStartPointConfig(lineItem) {
  var configs = getPointConfig(lineItem);
  configs.forEach(function (config) {
    config.shape.r = 0.1;
  });
  return configs;
}

function getLabelConfig(lineItem) {
  var animationCurve = lineItem.animationCurve,
      animationFrame = lineItem.animationFrame,
      rLevel = lineItem.rLevel;
  var shapes = getLabelShapes(lineItem);
  var style = getLabelStyle(lineItem);
  return shapes.map(function (shape, i) {
    return {
      name: 'text',
      index: rLevel + 3,
      visible: lineItem.label.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: shape,
      style: style
    };
  });
}

function getLabelShapes(lineItem) {
  var contents = formatterLabel(lineItem);
  var position = getLabelPosition(lineItem);
  return contents.map(function (content, i) {
    return {
      content: content,
      position: position[i]
    };
  });
}

function getLabelPosition(lineItem) {
  var linePosition = lineItem.linePosition,
      lineFillBottomPos = lineItem.lineFillBottomPos,
      label = lineItem.label;
  var position = label.position,
      offset = label.offset;
  var changeIndex = lineFillBottomPos.changeIndex,
      changeValue = lineFillBottomPos.changeValue;
  return linePosition.map(function (pos) {
    if (position === 'bottom') {
      pos = (0, _toConsumableArray2["default"])(pos);
      pos[changeIndex] = changeValue;
    }

    if (position === 'center') {
      var bottom = (0, _toConsumableArray2["default"])(pos);
      bottom[changeIndex] = changeValue;
      pos = getCenterLabelPoint(pos, bottom);
    }

    return getOffsetedPoint(pos, offset);
  });
}

function getOffsetedPoint(_ref9, _ref10) {
  var _ref11 = (0, _slicedToArray2["default"])(_ref9, 2),
      x = _ref11[0],
      y = _ref11[1];

  var _ref12 = (0, _slicedToArray2["default"])(_ref10, 2),
      ox = _ref12[0],
      oy = _ref12[1];

  return [x + ox, y + oy];
}

function getCenterLabelPoint(_ref13, _ref14) {
  var _ref15 = (0, _slicedToArray2["default"])(_ref13, 2),
      ax = _ref15[0],
      ay = _ref15[1];

  var _ref16 = (0, _slicedToArray2["default"])(_ref14, 2),
      bx = _ref16[0],
      by = _ref16[1];

  return [(ax + bx) / 2, (ay + by) / 2];
}

function formatterLabel(lineItem) {
  var data = lineItem.data,
      formatter = lineItem.label.formatter;
  data = data.filter(function (d) {
    return typeof d === 'number';
  }).map(function (d) {
    return d.toString();
  });
  if (!formatter) return data;
  var type = (0, _typeof2["default"])(formatter);
  if (type === 'string') return data.map(function (d) {
    return formatter.replace('{value}', d);
  });
  if (type === 'function') return data.map(function (value, index) {
    return formatter({
      value: value,
      index: index
    });
  });
  return data;
}

function getLabelStyle(lineItem) {
  var color = lineItem.color,
      style = lineItem.label.style;
  return (0, _util.deepMerge)({
    fill: color
  }, style);
}

/***/ }),

/***/ "2693":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Border/index.vue?vue&type=template&id=bd2a07cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(Number(_vm.type)===1)?_c('dv-border-box-1'):_vm._e(),(Number(_vm.type)===2)?_c('dv-border-box-2'):_vm._e(),(Number(_vm.type)===3)?_c('dv-border-box-3'):_vm._e(),(Number(_vm.type)===4)?_c('dv-border-box-4'):_vm._e(),(Number(_vm.type)===5)?_c('dv-border-box-5'):_vm._e(),(Number(_vm.type)===6)?_c('dv-border-box-6'):_vm._e(),(Number(_vm.type)===7)?_c('dv-border-box-7'):_vm._e(),(Number(_vm.type)===8)?_c('dv-border-box-8'):_vm._e(),(Number(_vm.type)===9)?_c('dv-border-box-9'):_vm._e(),(Number(_vm.type)===10)?_c('dv-border-box-10'):_vm._e(),(Number(_vm.type)===11)?_c('dv-border-box-11'):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Border/index.vue?vue&type=template&id=bd2a07cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Border/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Bordervue_type_script_lang_js_ = ({
  name: "Border",
  props: {
    type: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      chartKey: 0,
      container: null,
      timer: null,
    };
  },
});

// CONCATENATED MODULE: ./packages/Border/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Bordervue_type_script_lang_js_ = (Bordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Border/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Bordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Border = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "26b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2aed713c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("542e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2aed713c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2aed713c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2aed713c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "26ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/RectShape/index.vue?vue&type=template&id=a9b9b7d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rect-shape"},[_c('v-text',{attrs:{"element":_vm.element}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/RectShape/index.vue?vue&type=template&id=a9b9b7d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/RectShape/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var RectShapevue_type_script_lang_js_ = ({
  name: "RectShape",
  props: {
    element: {
      type: Object,
    },
  },
});

// CONCATENATED MODULE: ./packages/RectShape/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_RectShapevue_type_script_lang_js_ = (RectShapevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/RectShape/index.vue?vue&type=style&index=0&id=a9b9b7d2&lang=scss&scoped=true&
var RectShapevue_type_style_index_0_id_a9b9b7d2_lang_scss_scoped_true_ = __webpack_require__("729c");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/RectShape/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_RectShapevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a9b9b7d2",
  null
  
)

/* harmony default export */ var RectShape = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "278c":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("c135");

var iterableToArrayLimit = __webpack_require__("9b42");

var unsupportedIterableToArray = __webpack_require__("6613");

var nonIterableRest = __webpack_require__("c240");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "2848":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2cef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ "2db9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bezierCurveToPolyline = bezierCurveToPolyline;
exports.getBezierCurveLength = getBezierCurveLength;
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var sqrt = Math.sqrt,
    pow = Math.pow,
    ceil = Math.ceil,
    abs = Math.abs; // Initialize the number of points per curve

var defaultSegmentPointsNum = 50;
/**
 * @example data structure of bezierCurve
 * bezierCurve = [
 *  // Starting point of the curve
 *  [10, 10],
 *  // BezierCurve segment data (controlPoint1, controlPoint2, endPoint)
 *  [
 *    [20, 20], [40, 20], [50, 10]
 *  ],
 *  ...
 * ]
 */

/**
 * @description               Abstract the curve as a polyline consisting of N points
 * @param {Array} bezierCurve bezierCurve data
 * @param {Number} precision  calculation accuracy. Recommended for 1-20. Default = 5
 * @return {Object}           Calculation results and related data
 * @return {Array}            Option.segmentPoints Point data that constitutes a polyline after calculation
 * @return {Number}           Option.cycles Number of iterations
 * @return {Number}           Option.rounds The number of recursions for the last iteration
 */

function abstractBezierCurveToPolyline(bezierCurve) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var segmentsNum = bezierCurve.length - 1;
  var startPoint = bezierCurve[0];
  var endPoint = bezierCurve[segmentsNum][2];
  var segments = bezierCurve.slice(1);
  var getSegmentTPointFuns = segments.map(function (seg, i) {
    var beginPoint = i === 0 ? startPoint : segments[i - 1][2];
    return createGetBezierCurveTPointFun.apply(void 0, [beginPoint].concat((0, _toConsumableArray2["default"])(seg)));
  }); // Initialize the curve to a polyline

  var segmentPointsNum = new Array(segmentsNum).fill(defaultSegmentPointsNum);
  var segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum); // Calculate uniformly distributed points by iteratively

  var result = calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision);
  result.segmentPoints.push(endPoint);
  return result;
}
/**
 * @description  Generate a method for obtaining corresponding point by t according to curve data
 * @param {Array} beginPoint    BezierCurve begin point. [x, y]
 * @param {Array} controlPoint1 BezierCurve controlPoint1. [x, y]
 * @param {Array} controlPoint2 BezierCurve controlPoint2. [x, y]
 * @param {Array} endPoint      BezierCurve end point. [x, y]
 * @return {Function} Expected function
 */


function createGetBezierCurveTPointFun(beginPoint, controlPoint1, controlPoint2, endPoint) {
  return function (t) {
    var tSubed1 = 1 - t;
    var tSubed1Pow3 = pow(tSubed1, 3);
    var tSubed1Pow2 = pow(tSubed1, 2);
    var tPow3 = pow(t, 3);
    var tPow2 = pow(t, 2);
    return [beginPoint[0] * tSubed1Pow3 + 3 * controlPoint1[0] * t * tSubed1Pow2 + 3 * controlPoint2[0] * tPow2 * tSubed1 + endPoint[0] * tPow3, beginPoint[1] * tSubed1Pow3 + 3 * controlPoint1[1] * t * tSubed1Pow2 + 3 * controlPoint2[1] * tPow2 * tSubed1 + endPoint[1] * tPow3];
  };
}
/**
 * @description Get the distance between two points
 * @param {Array} point1 BezierCurve begin point. [x, y]
 * @param {Array} point2 BezierCurve controlPoint1. [x, y]
 * @return {Number} Expected distance
 */


function getTwoPointDistance(_ref, _ref2) {
  var _ref3 = (0, _slicedToArray2["default"])(_ref, 2),
      ax = _ref3[0],
      ay = _ref3[1];

  var _ref4 = (0, _slicedToArray2["default"])(_ref2, 2),
      bx = _ref4[0],
      by = _ref4[1];

  return sqrt(pow(ax - bx, 2) + pow(ay - by, 2));
}
/**
 * @description Get the sum of the array of numbers
 * @param {Array} nums An array of numbers
 * @return {Number} Expected sum
 */


function getNumsSum(nums) {
  return nums.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}
/**
 * @description Get the distance of multiple sets of points
 * @param {Array} segmentPoints Multiple sets of point data
 * @return {Array} Distance of multiple sets of point data
 */


function getSegmentPointsDistance(segmentPoints) {
  return segmentPoints.map(function (points, i) {
    return new Array(points.length - 1).fill(0).map(function (temp, j) {
      return getTwoPointDistance(points[j], points[j + 1]);
    });
  });
}
/**
 * @description Get the distance of multiple sets of points
 * @param {Array} segmentPoints Multiple sets of point data
 * @return {Array} Distance of multiple sets of point data
 */


function getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum) {
  return getSegmentTPointFuns.map(function (getSegmentTPointFun, i) {
    var tGap = 1 / segmentPointsNum[i];
    return new Array(segmentPointsNum[i]).fill('').map(function (foo, j) {
      return getSegmentTPointFun(j * tGap);
    });
  });
}
/**
 * @description Get the sum of deviations between line segment and the average length
 * @param {Array} segmentPointsDistance Segment length of polyline
 * @param {Number} avgLength            Average length of the line segment
 * @return {Number} Deviations
 */


function getAllDeviations(segmentPointsDistance, avgLength) {
  return segmentPointsDistance.map(function (seg) {
    return seg.map(function (s) {
      return abs(s - avgLength);
    });
  }).map(function (seg) {
    return getNumsSum(seg);
  }).reduce(function (total, v) {
    return total + v;
  }, 0);
}
/**
 * @description Calculate uniformly distributed points by iteratively
 * @param {Array} segmentPoints        Multiple setd of points that make up a polyline
 * @param {Array} getSegmentTPointFuns Functions of get a point on the curve with t
 * @param {Array} segments             BezierCurve data
 * @param {Number} precision           Calculation accuracy
 * @return {Object} Calculation results and related data
 * @return {Array}  Option.segmentPoints Point data that constitutes a polyline after calculation
 * @return {Number} Option.cycles Number of iterations
 * @return {Number} Option.rounds The number of recursions for the last iteration
 */


function calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision) {
  // The number of loops for the current iteration
  var rounds = 4; // Number of iterations

  var cycles = 1;

  var _loop = function _loop() {
    // Recalculate the number of points per curve based on the last iteration data
    var totalPointsNum = segmentPoints.reduce(function (total, seg) {
      return total + seg.length;
    }, 0); // Add last points of segment to calc exact segment length

    segmentPoints.forEach(function (seg, i) {
      return seg.push(segments[i][2]);
    });
    var segmentPointsDistance = getSegmentPointsDistance(segmentPoints);
    var lineSegmentNum = segmentPointsDistance.reduce(function (total, seg) {
      return total + seg.length;
    }, 0);
    var segmentlength = segmentPointsDistance.map(function (seg) {
      return getNumsSum(seg);
    });
    var totalLength = getNumsSum(segmentlength);
    var avgLength = totalLength / lineSegmentNum; // Check if precision is reached

    var allDeviations = getAllDeviations(segmentPointsDistance, avgLength);
    if (allDeviations <= precision) return "break";
    totalPointsNum = ceil(avgLength / precision * totalPointsNum * 1.1);
    var segmentPointsNum = segmentlength.map(function (length) {
      return ceil(length / totalLength * totalPointsNum);
    }); // Calculate the points after redistribution

    segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
    totalPointsNum = segmentPoints.reduce(function (total, seg) {
      return total + seg.length;
    }, 0);
    var segmentPointsForLength = JSON.parse(JSON.stringify(segmentPoints));
    segmentPointsForLength.forEach(function (seg, i) {
      return seg.push(segments[i][2]);
    });
    segmentPointsDistance = getSegmentPointsDistance(segmentPointsForLength);
    lineSegmentNum = segmentPointsDistance.reduce(function (total, seg) {
      return total + seg.length;
    }, 0);
    segmentlength = segmentPointsDistance.map(function (seg) {
      return getNumsSum(seg);
    });
    totalLength = getNumsSum(segmentlength);
    avgLength = totalLength / lineSegmentNum;
    var stepSize = 1 / totalPointsNum / 10; // Recursively for each segment of the polyline

    getSegmentTPointFuns.forEach(function (getSegmentTPointFun, i) {
      var currentSegmentPointsNum = segmentPointsNum[i];
      var t = new Array(currentSegmentPointsNum).fill('').map(function (foo, j) {
        return j / segmentPointsNum[i];
      }); // Repeated recursive offset

      for (var r = 0; r < rounds; r++) {
        var distance = getSegmentPointsDistance([segmentPoints[i]])[0];
        var deviations = distance.map(function (d) {
          return d - avgLength;
        });
        var offset = 0;

        for (var j = 0; j < currentSegmentPointsNum; j++) {
          if (j === 0) return;
          offset += deviations[j - 1];
          t[j] -= stepSize * offset;
          if (t[j] > 1) t[j] = 1;
          if (t[j] < 0) t[j] = 0;
          segmentPoints[i][j] = getSegmentTPointFun(t[j]);
        }
      }
    });
    rounds *= 4;
    cycles++;
  };

  do {
    var _ret = _loop();

    if (_ret === "break") break;
  } while (rounds <= 1025);

  segmentPoints = segmentPoints.reduce(function (all, seg) {
    return all.concat(seg);
  }, []);
  return {
    segmentPoints: segmentPoints,
    cycles: cycles,
    rounds: rounds
  };
}
/**
 * @description Get the polyline corresponding to the Bezier curve
 * @param {Array} bezierCurve BezierCurve data
 * @param {Number} precision  Calculation accuracy. Recommended for 1-20. Default = 5
 * @return {Array|Boolean} Point data that constitutes a polyline after calculation (Invalid input will return false)
 */


function bezierCurveToPolyline(bezierCurve) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  if (!bezierCurve) {
    console.error('bezierCurveToPolyline: Missing parameters!');
    return false;
  }

  if (!(bezierCurve instanceof Array)) {
    console.error('bezierCurveToPolyline: Parameter bezierCurve must be an array!');
    return false;
  }

  if (typeof precision !== 'number') {
    console.error('bezierCurveToPolyline: Parameter precision must be a number!');
    return false;
  }

  var _abstractBezierCurveT = abstractBezierCurveToPolyline(bezierCurve, precision),
      segmentPoints = _abstractBezierCurveT.segmentPoints;

  return segmentPoints;
}
/**
 * @description Get the bezier curve length
 * @param {Array} bezierCurve bezierCurve data
 * @param {Number} precision  calculation accuracy. Recommended for 5-10. Default = 5
 * @return {Number|Boolean} BezierCurve length (Invalid input will return false)
 */


function getBezierCurveLength(bezierCurve) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  if (!bezierCurve) {
    console.error('getBezierCurveLength: Missing parameters!');
    return false;
  }

  if (!(bezierCurve instanceof Array)) {
    console.error('getBezierCurveLength: Parameter bezierCurve must be an array!');
    return false;
  }

  if (typeof precision !== 'number') {
    console.error('getBezierCurveLength: Parameter precision must be a number!');
    return false;
  }

  var _abstractBezierCurveT2 = abstractBezierCurveToPolyline(bezierCurve, precision),
      segmentPoints = _abstractBezierCurveT2.segmentPoints; // Calculate the total length of the points that make up the polyline


  var pointsDistance = getSegmentPointsDistance([segmentPoints])[0];
  var length = getNumsSum(pointsDistance);
  return length;
}

var _default = bezierCurveToPolyline;
exports["default"] = _default;

/***/ }),

/***/ "335d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "357d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3648":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "36cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/PercentPond/index.vue?vue&type=template&id=b6c8846c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-percent-pond',{key:_vm.chartKey,ref:"PercentPond",attrs:{"config":_vm.config}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/PercentPond/index.vue?vue&type=template&id=b6c8846c&

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/PercentPond/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var PercentPondvue_type_script_lang_js_ = ({
  name: "PercentPond",
  data() {
    return {
      chartKey: 0,
      container: null,
      timer: null,
      config: {
        value: 66,
      },
    };
  },
  methods: {
    resize() {
      this.chartKey = Math.random();
    },
  },
  mounted() {
    this.container = this.$refs.PercentPond;
    const erd = element_resize_detector_default()();
    erd.listenTo(this.$parent.$el, (element) => {
      this.$nextTick(() => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          // 监听到事件后执行的业务逻辑
          this.resize();
        }, 100);
      });
    });
  },
});

// CONCATENATED MODULE: ./packages/PercentPond/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_PercentPondvue_type_script_lang_js_ = (PercentPondvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/PercentPond/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_PercentPondvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PercentPond = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3938":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radarConfig = void 0;
var radarConfig = {
  /**
   * @description Whether to display this radar
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Radar chart data
   * @type {Array}
   * @default data = []
   * @example data = [100, 200, 300]
   */
  data: [],

  /**
   * @description Radar default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  radarStyle: {
    lineWidth: 1
  },

  /**
   * @description Radar point configuration
   * @type {Object}
   */
  point: {
    /**
     * @description Whether to display radar point
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Point radius
     * @type {Number}
     * @default radius = 2
     */
    radius: 2,

    /**
     * @description Radar point default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: '#fff'
    }
  },

  /**
   * @description Radar label configuration
   * @type {Object}
   */
  label: {
    /**
     * @description Whether to display radar label
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Label position offset
     * @type {Array}
     * @default offset = [0, 0]
     */
    offset: [0, 0],

    /**
     * @description Label gap between label and radar
     * @type {Number}
     * @default labelGap = 5
     */
    labelGap: 5,

    /**
     * @description Label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = 'Score-{value}'
     * @example formatter = (label) => (label)
     */
    formatter: null,

    /**
     * @description Radar label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 10
    }
  },

  /**
   * @description Radar chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 10
   */
  rLevel: 10,

  /**
   * @description Radar animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Radar animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrane: 50
};
exports.radarConfig = radarConfig;

/***/ }),

/***/ "3ad2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BackGround/index.vue": "64c1",
	"./Border/index.vue": "2693",
	"./Capsule/index.vue": "0a11",
	"./Flyline/index.vue": "4366",
	"./Gauge/index.vue": "f1bf",
	"./Group/index.vue": "4d70",
	"./Header/index.vue": "9967",
	"./PercentPond/index.vue": "36cf",
	"./Picture/index.vue": "59d4",
	"./RectShape/index.vue": "26ff",
	"./RingChart/index.vue": "c927",
	"./VButton/index.vue": "76a1",
	"./VText/index.vue": "ba86",
	"./WaterLevel/index.vue": "b22d"
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
webpackContext.id = "3ad2";

/***/ }),

/***/ "3c0e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3e8a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "41f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4366":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Flyline/index.vue?vue&type=template&id=1a8105aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-flyline-chart',{key:_vm.chartKey,ref:"FlyLine",attrs:{"config":_vm.config}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Flyline/index.vue?vue&type=template&id=1a8105aa&

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Flyline/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var Flylinevue_type_script_lang_js_ = ({
  name: "Flyline",
  data() {
    return {
      chartKey: 0,
      container: null,
      timer: null,
      config: {
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.2, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.1],
        ],
      },
    };
  },
  methods: {
    resize() {
      this.chartKey = Math.random();
    },
  },
  mounted() {
    this.container = this.$refs.PercentPond;
    const erd = element_resize_detector_default()();
    erd.listenTo(this.$parent.$el, (element) => {
      this.$nextTick(() => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          // 监听到事件后执行的业务逻辑
          this.resize();
        }, 100);
      });
    });
  },
});

// CONCATENATED MODULE: ./packages/Flyline/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Flylinevue_type_script_lang_js_ = (Flylinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Flyline/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Flylinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Flyline = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "448a":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("2236");

var iterableToArray = __webpack_require__("11b0");

var unsupportedIterableToArray = __webpack_require__("6613");

var nonIterableSpread = __webpack_require__("0676");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "44a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11cf6cd4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c8c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11cf6cd4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11cf6cd4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11cf6cd4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4656":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "46bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = grid;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _updater = __webpack_require__("18ad");

var _util = __webpack_require__("5557");

var _config = __webpack_require__("9d85");

var _util2 = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function grid(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var grid = option.grid;
  grid = (0, _util2.deepMerge)((0, _util.deepClone)(_config.gridConfig, true), grid || {});
  (0, _updater.doUpdate)({
    chart: chart,
    series: [grid],
    key: 'grid',
    getGraphConfig: getGridConfig
  });
}

function getGridConfig(gridItem, updater) {
  var animationCurve = gridItem.animationCurve,
      animationFrame = gridItem.animationFrame,
      rLevel = gridItem.rLevel;
  var shape = getGridShape(gridItem, updater);
  var style = getGridStyle(gridItem);
  updater.chart.gridArea = _objectSpread({}, shape);
  return [{
    name: 'rect',
    index: rLevel,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: shape,
    style: style
  }];
}

function getGridShape(gridItem, updater) {
  var _updater$chart$render = (0, _slicedToArray2["default"])(updater.chart.render.area, 2),
      w = _updater$chart$render[0],
      h = _updater$chart$render[1];

  var left = getNumberValue(gridItem.left, w);
  var right = getNumberValue(gridItem.right, w);
  var top = getNumberValue(gridItem.top, h);
  var bottom = getNumberValue(gridItem.bottom, h);
  var width = w - left - right;
  var height = h - top - bottom;
  return {
    x: left,
    y: top,
    w: width,
    h: height
  };
}

function getNumberValue(val, all) {
  if (typeof val === 'number') return val;
  if (typeof val !== 'string') return 0;
  return all * parseInt(val) / 100;
}

function getGridStyle(gridItem) {
  var style = gridItem.style;
  return style;
}

/***/ }),

/***/ "470c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "49ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ "49bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridConfig = void 0;
var gridConfig = {
  /**
   * @description Grid left margin
   * @type {String|Number}
   * @default left = '10%'
   * @example left = '10%' | 10
   */
  left: '10%',

  /**
   * @description Grid right margin
   * @type {String|Number}
   * @default right = '10%'
   * @example right = '10%' | 10
   */
  right: '10%',

  /**
   * @description Grid top margin
   * @type {String|Number}
   * @default top = 60
   * @example top = '10%' | 60
   */
  top: 60,

  /**
   * @description Grid bottom margin
   * @type {String|Number}
   * @default bottom = 60
   * @example bottom = '10%' | 60
   */
  bottom: 60,

  /**
   * @description Grid default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  style: {
    fill: 'rgba(0, 0, 0, 0)'
  },

  /**
   * @description Grid render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = -30
   */
  rLevel: -30,

  /**
   * @description Grid animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Grid animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 30
};
exports.gridConfig = gridConfig;

/***/ }),

/***/ "4d70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Group/index.vue?vue&type=template&id=11cf6cd4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"group"},[_c('div',[_vm._l((_vm.groupValue),function(item){return [_c(item.component,_vm._b({key:item.id,tag:"component",staticClass:"component",style:(item.groupStyle),attrs:{"groupValue":item.groupValue,"id":'component' + item.id,"element":item}},'component',item.props.model,false))]})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Group/index.vue?vue&type=template&id=11cf6cd4&scoped=true&

// CONCATENATED MODULE: ./packages/utils/style.js

function getStyle(style, filter = []) {
    // 需要加单位的style属性
    const needUnit = [
        'fontSize',
        'width',
        'height',
        'top',
        'left',
        'borderWidth',
        'letterSpacing',
        'borderRadius',
    ]

    const result = {}
    Object.keys(style).forEach(key => {
        if (!filter.includes(key)) {
            if (key != 'rotate') {
                result[key] = style[key]
                if (needUnit.includes(key)) {
                    result[key] += 'px'
                }
            } else {
                // result.transform = `${key}(${style[key]}deg) scale(${style.scale}, ${style.scale})`
                result.transform = `${key}(${style[key]}deg)`
            }
        }
    })
    return result
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Group/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Groupvue_type_script_lang_js_ = ({
  name: "Group",
  props: {
    // group组件专属参数
    groupValue: {
      type: Array,
      default: () => [],
    },
    element: {
      type: Object,
    },
  },
  created() {
    const parentStyle = this.element.style;
    this.groupValue.forEach((component) => {
      // component.groupStyle 的 top left 是相对于 group 组件的位置
      // 如果已存在 component.groupStyle，说明已经计算过一次了。不需要再次计算
      if (!Object.keys(component.groupStyle).length) {
        const style = { ...component.style };
        component.groupStyle = getStyle(style);
        component.groupStyle.left = this.toPercent(
          (style.left - parentStyle.left) / parentStyle.width
        );
        component.groupStyle.top = this.toPercent(
          (style.top - parentStyle.top) / parentStyle.height
        );
        component.groupStyle.width = this.toPercent(
          style.width / parentStyle.width
        );
        component.groupStyle.height = this.toPercent(
          style.height / parentStyle.height
        );
      }
    });
  },
  methods: {
    toPercent(val) {
      return val * 100 + "%";
    },
  },
});

// CONCATENATED MODULE: ./packages/Group/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Groupvue_type_script_lang_js_ = (Groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Group/index.vue?vue&type=style&index=0&id=11cf6cd4&lang=scss&scoped=true&
var Groupvue_type_style_index_0_id_11cf6cd4_lang_scss_scoped_true_ = __webpack_require__("44a7");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Group/index.vue






/* normalize component */

var Group_component = Object(componentNormalizer["a" /* default */])(
  packages_Groupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "11cf6cd4",
  null
  
)

/* harmony default export */ var Group = __webpack_exports__["default"] = (Group_component.exports);

/***/ }),

/***/ "4e86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ea4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "4eb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radar = radar;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _index = __webpack_require__("9d85");

var _util = __webpack_require__("5557");

var _color = __webpack_require__("53b8");

var _util2 = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function radar(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var series = option.series;
  if (!series) series = [];
  var radars = (0, _util2.initNeedSeries)(series, _index.radarConfig, 'radar');
  radars = calcRadarPosition(radars, chart);
  radars = calcRadarLabelPosition(radars, chart);
  radars = calcRadarLabelAlign(radars, chart);
  (0, _updater.doUpdate)({
    chart: chart,
    series: radars,
    key: 'radar',
    getGraphConfig: getRadarConfig,
    getStartGraphConfig: getStartRadarConfig,
    beforeChange: beforeChangeRadar
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: radars,
    key: 'radarPoint',
    getGraphConfig: getPointConfig,
    getStartGraphConfig: getStartPointConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: radars,
    key: 'radarLabel',
    getGraphConfig: getLabelConfig
  });
}

function calcRadarPosition(radars, chart) {
  var radarAxis = chart.radarAxis;
  if (!radarAxis) return [];
  var indicator = radarAxis.indicator,
      axisLineAngles = radarAxis.axisLineAngles,
      radius = radarAxis.radius,
      centerPos = radarAxis.centerPos;
  radars.forEach(function (radarItem) {
    var data = radarItem.data;
    radarItem.dataRadius = [];
    radarItem.radarPosition = indicator.map(function (_ref, i) {
      var max = _ref.max,
          min = _ref.min;
      var v = data[i];
      if (typeof max !== 'number') max = v;
      if (typeof min !== 'number') min = 0;
      if (typeof v !== 'number') v = min;
      var dataRadius = (v - min) / (max - min) * radius;
      radarItem.dataRadius[i] = dataRadius;
      return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([dataRadius, axisLineAngles[i]]));
    });
  });
  return radars;
}

function calcRadarLabelPosition(radars, chart) {
  var radarAxis = chart.radarAxis;
  if (!radarAxis) return [];
  var centerPos = radarAxis.centerPos,
      axisLineAngles = radarAxis.axisLineAngles;
  radars.forEach(function (radarItem) {
    var dataRadius = radarItem.dataRadius,
        label = radarItem.label;
    var labelGap = label.labelGap;
    radarItem.labelPosition = dataRadius.map(function (r, i) {
      return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([r + labelGap, axisLineAngles[i]]));
    });
  });
  return radars;
}

function calcRadarLabelAlign(radars, chart) {
  var radarAxis = chart.radarAxis;
  if (!radarAxis) return [];

  var _radarAxis$centerPos = (0, _slicedToArray2["default"])(radarAxis.centerPos, 2),
      x = _radarAxis$centerPos[0],
      y = _radarAxis$centerPos[1];

  radars.forEach(function (radarItem) {
    var labelPosition = radarItem.labelPosition;
    var labelAlign = labelPosition.map(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          lx = _ref3[0],
          ly = _ref3[1];

      var textAlign = lx > x ? 'left' : 'right';
      var textBaseline = ly > y ? 'top' : 'bottom';
      return {
        textAlign: textAlign,
        textBaseline: textBaseline
      };
    });
    radarItem.labelAlign = labelAlign;
  });
  return radars;
}

function getRadarConfig(radarItem) {
  var animationCurve = radarItem.animationCurve,
      animationFrame = radarItem.animationFrame,
      rLevel = radarItem.rLevel;
  return [{
    name: 'polyline',
    index: rLevel,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: getRadarShape(radarItem),
    style: getRadarStyle(radarItem)
  }];
}

function getStartRadarConfig(radarItem, updater) {
  var centerPos = updater.chart.radarAxis.centerPos;
  var config = getRadarConfig(radarItem)[0];
  var pointNum = config.shape.points.length;
  var points = new Array(pointNum).fill(0).map(function (foo) {
    return (0, _toConsumableArray2["default"])(centerPos);
  });
  config.shape.points = points;
  return [config];
}

function getRadarShape(radarItem) {
  var radarPosition = radarItem.radarPosition;
  return {
    points: radarPosition,
    close: true
  };
}

function getRadarStyle(radarItem) {
  var radarStyle = radarItem.radarStyle,
      color = radarItem.color;
  var colorRgbaValue = (0, _color.getRgbaValue)(color);
  colorRgbaValue[3] = 0.5;
  var radarDefaultColor = {
    stroke: color,
    fill: (0, _color.getColorFromRgbValue)(colorRgbaValue)
  };
  return (0, _util2.deepMerge)(radarDefaultColor, radarStyle);
}

function beforeChangeRadar(graph, _ref4) {
  var shape = _ref4.shape;
  var graphPoints = graph.shape.points;
  var graphPointsNum = graphPoints.length;
  var pointsNum = shape.points.length;

  if (pointsNum > graphPointsNum) {
    var lastPoint = graphPoints.slice(-1)[0];
    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function (foo) {
      return (0, _toConsumableArray2["default"])(lastPoint);
    });
    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2["default"])(newAddPoints));
  } else if (pointsNum < graphPointsNum) {
    graphPoints.splice(pointsNum);
  }
}

function getPointConfig(radarItem) {
  var radarPosition = radarItem.radarPosition,
      animationCurve = radarItem.animationCurve,
      animationFrame = radarItem.animationFrame,
      rLevel = radarItem.rLevel;
  return radarPosition.map(function (foo, i) {
    return {
      name: 'circle',
      index: rLevel,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      visible: radarItem.point.show,
      shape: getPointShape(radarItem, i),
      style: getPointStyle(radarItem, i)
    };
  });
}

function getStartPointConfig(radarItem) {
  var configs = getPointConfig(radarItem);
  configs.forEach(function (config) {
    return config.shape.r = 0.01;
  });
  return configs;
}

function getPointShape(radarItem, i) {
  var radarPosition = radarItem.radarPosition,
      point = radarItem.point;
  var radius = point.radius;
  var position = radarPosition[i];
  return {
    rx: position[0],
    ry: position[1],
    r: radius
  };
}

function getPointStyle(radarItem, i) {
  var point = radarItem.point,
      color = radarItem.color;
  var style = point.style;
  return (0, _util2.deepMerge)({
    stroke: color
  }, style);
}

function getLabelConfig(radarItem) {
  var labelPosition = radarItem.labelPosition,
      animationCurve = radarItem.animationCurve,
      animationFrame = radarItem.animationFrame,
      rLevel = radarItem.rLevel;
  return labelPosition.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: radarItem.label.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getLabelShape(radarItem, i),
      style: getLabelStyle(radarItem, i)
    };
  });
}

function getLabelShape(radarItem, i) {
  var labelPosition = radarItem.labelPosition,
      label = radarItem.label,
      data = radarItem.data;
  var offset = label.offset,
      formatter = label.formatter;
  var position = mergePointOffset(labelPosition[i], offset);
  var labelText = data[i] ? data[i].toString() : '0';
  var formatterType = (0, _typeof2["default"])(formatter);
  if (formatterType === 'string') labelText = formatter.replace('{value}', labelText);
  if (formatterType === 'function') labelText = formatter(labelText);
  return {
    content: labelText,
    position: position
  };
}

function mergePointOffset(_ref5, _ref6) {
  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
      x = _ref7[0],
      y = _ref7[1];

  var _ref8 = (0, _slicedToArray2["default"])(_ref6, 2),
      ox = _ref8[0],
      oy = _ref8[1];

  return [x + ox, y + oy];
}

function getLabelStyle(radarItem, i) {
  var label = radarItem.label,
      color = radarItem.color,
      labelAlign = radarItem.labelAlign;
  var style = label.style;

  var defaultColorAndAlign = _objectSpread({
    fill: color
  }, labelAlign[i]);

  return (0, _util2.deepMerge)(defaultColorAndAlign, style);
}

/***/ }),

/***/ "5058":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ "50bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "53b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRgbValue = getRgbValue;
exports.getRgbaValue = getRgbaValue;
exports.getOpacity = getOpacity;
exports.toRgb = toRgb;
exports.toHex = toHex;
exports.getColorFromRgbValue = getColorFromRgbValue;
exports.darken = darken;
exports.lighten = lighten;
exports.fade = fade;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _keywords = _interopRequireDefault(__webpack_require__("b7c2"));

var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
var rgbaReg = /^(rgba|RGBA)/;
/**
 * @description Color validator
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {String|Boolean} Valid color Or false
 */

function validator(color) {
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  if (isHex || isRgb) return color;
  color = getColorByKeyword(color);

  if (!color) {
    console.error('Color: Invalid color!');
    return false;
  }

  return color;
}
/**
 * @description Get color by keyword
 * @param {String} keyword Color keyword like red, green and etc.
 * @return {String|Boolean} Hex or rgba color (Invalid keyword will return false)
 */


function getColorByKeyword(keyword) {
  if (!keyword) {
    console.error('getColorByKeywords: Missing parameters!');
    return false;
  }

  if (!_keywords["default"].has(keyword)) return false;
  return _keywords["default"].get(keyword);
}
/**
 * @description Get the Rgb value of the color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Array<Number>|Boolean} Rgb value of the color (Invalid input will return false)
 */


function getRgbValue(color) {
  if (!color) {
    console.error('getRgbValue: Missing parameters!');
    return false;
  }

  color = validator(color);
  if (!color) return false;
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  var lowerColor = color.toLowerCase();
  if (isHex) return getRgbValueFromHex(lowerColor);
  if (isRgb) return getRgbValueFromRgb(lowerColor);
}
/**
 * @description Get the rgb value of the hex color
 * @param {String} color Hex color
 * @return {Array<Number>} Rgb value of the color
 */


function getRgbValueFromHex(color) {
  color = color.replace('#', '');
  if (color.length === 3) color = Array.from(color).map(function (hexNum) {
    return hexNum + hexNum;
  }).join('');
  color = color.split('');
  return new Array(3).fill(0).map(function (t, i) {
    return parseInt("0x".concat(color[i * 2]).concat(color[i * 2 + 1]));
  });
}
/**
 * @description Get the rgb value of the rgb/rgba color
 * @param {String} color Hex color
 * @return {Array} Rgb value of the color
 */


function getRgbValueFromRgb(color) {
  return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
    return parseInt(n);
  });
}
/**
 * @description Get the Rgba value of the color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Array<Number>|Boolean} Rgba value of the color (Invalid input will return false)
 */


function getRgbaValue(color) {
  if (!color) {
    console.error('getRgbaValue: Missing parameters!');
    return false;
  }

  var colorValue = getRgbValue(color);
  if (!colorValue) return false;
  colorValue.push(getOpacity(color));
  return colorValue;
}
/**
 * @description Get the opacity of color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number|Boolean} Color opacity (Invalid input will return false)
 */


function getOpacity(color) {
  if (!color) {
    console.error('getOpacity: Missing parameters!');
    return false;
  }

  color = validator(color);
  if (!color) return false;
  var isRgba = rgbaReg.test(color);
  if (!isRgba) return 1;
  color = color.toLowerCase();
  return Number(color.split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
}
/**
 * @description Convert color to Rgb|Rgba color
 * @param {String} color   Hex|Rgb|Rgba color or color keyword
 * @param {Number} opacity The opacity of color
 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
 */


function toRgb(color, opacity) {
  if (!color) {
    console.error('toRgb: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var addOpacity = typeof opacity === 'number';
  if (addOpacity) return 'rgba(' + rgbValue.join(',') + ",".concat(opacity, ")");
  return 'rgb(' + rgbValue.join(',') + ')';
}
/**
 * @description Convert color to Hex color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {String|Boolean} Hex color (Invalid input will return false)
 */


function toHex(color) {
  if (!color) {
    console.error('toHex: Missing parameters!');
    return false;
  }

  if (hexReg.test(color)) return color;
  color = getRgbValue(color);
  if (!color) return false;
  return '#' + color.map(function (n) {
    return Number(n).toString(16);
  }).map(function (n) {
    return n === '0' ? '00' : n;
  }).join('');
}
/**
 * @description Get Color from Rgb|Rgba value
 * @param {Array<Number>} value Rgb|Rgba color value
 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
 */


function getColorFromRgbValue(value) {
  if (!value) {
    console.error('getColorFromRgbValue: Missing parameters!');
    return false;
  }

  var valueLength = value.length;

  if (valueLength !== 3 && valueLength !== 4) {
    console.error('getColorFromRgbValue: Value is illegal!');
    return false;
  }

  var color = valueLength === 3 ? 'rgb(' : 'rgba(';
  color += value.join(',') + ')';
  return color;
}
/**
 * @description Deepen color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number} Percent of Deepen (1-100)
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function darken(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!color) {
    console.error('darken: Missing parameters!');
    return false;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return false;
  rgbaValue = rgbaValue.map(function (v, i) {
    return i === 3 ? v : v - Math.ceil(2.55 * percent);
  }).map(function (v) {
    return v < 0 ? 0 : v;
  });
  return getColorFromRgbValue(rgbaValue);
}
/**
 * @description Brighten color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number} Percent of brighten (1-100)
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function lighten(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!color) {
    console.error('lighten: Missing parameters!');
    return false;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return false;
  rgbaValue = rgbaValue.map(function (v, i) {
    return i === 3 ? v : v + Math.ceil(2.55 * percent);
  }).map(function (v) {
    return v > 255 ? 255 : v;
  });
  return getColorFromRgbValue(rgbaValue);
}
/**
 * @description Adjust color opacity
 * @param {String} color   Hex|Rgb|Rgba color or color keyword
 * @param {Number} Percent of opacity
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function fade(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (!color) {
    console.error('fade: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var rgbaValue = [].concat((0, _toConsumableArray2["default"])(rgbValue), [percent / 100]);
  return getColorFromRgbValue(rgbaValue);
}

var _default = {
  fade: fade,
  toHex: toHex,
  toRgb: toRgb,
  darken: darken,
  lighten: lighten,
  getOpacity: getOpacity,
  getRgbValue: getRgbValue,
  getRgbaValue: getRgbaValue,
  getColorFromRgbValue: getColorFromRgbValue
};
exports["default"] = _default;

/***/ }),

/***/ "542e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5557":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;
exports.eliminateBlur = eliminateBlur;
exports.checkPointIsInCircle = checkPointIsInCircle;
exports.getTwoPointDistance = getTwoPointDistance;
exports.checkPointIsInPolygon = checkPointIsInPolygon;
exports.checkPointIsInSector = checkPointIsInSector;
exports.checkPointIsNearPolyline = checkPointIsNearPolyline;
exports.checkPointIsInRect = checkPointIsInRect;
exports.getRotatePointPos = getRotatePointPos;
exports.getScalePointPos = getScalePointPos;
exports.getTranslatePointPos = getTranslatePointPos;
exports.getDistanceBetweenPointAndLine = getDistanceBetweenPointAndLine;
exports.getCircleRadianPoint = getCircleRadianPoint;
exports.getRegularPolygonPoints = getRegularPolygonPoints;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var abs = Math.abs,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    max = Math.max,
    min = Math.min,
    PI = Math.PI;
/**
 * @description Clone an object or array
 * @param {Object|Array} object Cloned object
 * @param {Boolean} recursion   Whether to use recursive cloning
 * @return {Object|Array} Clone object
 */

function deepClone(object) {
  var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!object) return object;
  var parse = JSON.parse,
      stringify = JSON.stringify;
  if (!recursion) return parse(stringify(object));
  var clonedObj = object instanceof Array ? [] : {};

  if (object && (0, _typeof2["default"])(object) === 'object') {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}
/**
 * @description Eliminate line blur due to 1px line width
 * @param {Array} points Line points
 * @return {Array} Line points after processed
 */


function eliminateBlur(points) {
  return points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return [parseInt(x) + 0.5, parseInt(y) + 0.5];
  });
}
/**
 * @description Check if the point is inside the circle
 * @param {Array} point Postion of point
 * @param {Number} rx   Circle x coordinate
 * @param {Number} ry   Circle y coordinate
 * @param {Number} r    Circle radius
 * @return {Boolean} Result of check
 */


function checkPointIsInCircle(point, rx, ry, r) {
  return getTwoPointDistance(point, [rx, ry]) <= r;
}
/**
 * @description Get the distance between two points
 * @param {Array} point1 point1
 * @param {Array} point2 point2
 * @return {Number} Distance between two points
 */


function getTwoPointDistance(_ref3, _ref4) {
  var _ref5 = (0, _slicedToArray2["default"])(_ref3, 2),
      xa = _ref5[0],
      ya = _ref5[1];

  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
      xb = _ref6[0],
      yb = _ref6[1];

  var minusX = abs(xa - xb);
  var minusY = abs(ya - yb);
  return sqrt(minusX * minusX + minusY * minusY);
}
/**
 * @description Check if the point is inside the polygon
 * @param {Array} point  Postion of point
 * @param {Array} points The points that makes up a polyline
 * @return {Boolean} Result of check
 */


function checkPointIsInPolygon(point, polygon) {
  var counter = 0;

  var _point = (0, _slicedToArray2["default"])(point, 2),
      x = _point[0],
      y = _point[1];

  var pointNum = polygon.length;

  for (var i = 1, p1 = polygon[0]; i <= pointNum; i++) {
    var p2 = polygon[i % pointNum];

    if (x > min(p1[0], p2[0]) && x <= max(p1[0], p2[0])) {
      if (y <= max(p1[1], p2[1])) {
        if (p1[0] !== p2[0]) {
          var xinters = (x - p1[0]) * (p2[1] - p1[1]) / (p2[0] - p1[0]) + p1[1];

          if (p1[1] === p2[1] || y <= xinters) {
            counter++;
          }
        }
      }
    }

    p1 = p2;
  }

  return counter % 2 === 1;
}
/**
 * @description Check if the point is inside the sector
 * @param {Array} point       Postion of point
 * @param {Number} rx         Sector x coordinate
 * @param {Number} ry         Sector y coordinate
 * @param {Number} r          Sector radius
 * @param {Number} startAngle Sector start angle
 * @param {Number} endAngle   Sector end angle
 * @param {Boolean} clockWise Whether the sector angle is clockwise
 * @return {Boolean} Result of check
 */


function checkPointIsInSector(point, rx, ry, r, startAngle, endAngle, clockWise) {
  if (!point) return false;
  if (getTwoPointDistance(point, [rx, ry]) > r) return false;

  if (!clockWise) {
    var _deepClone = deepClone([endAngle, startAngle]);

    var _deepClone2 = (0, _slicedToArray2["default"])(_deepClone, 2);

    startAngle = _deepClone2[0];
    endAngle = _deepClone2[1];
  }

  var reverseBE = startAngle > endAngle;

  if (reverseBE) {
    var _ref7 = [endAngle, startAngle];
    startAngle = _ref7[0];
    endAngle = _ref7[1];
  }

  var minus = endAngle - startAngle;
  if (minus >= PI * 2) return true;

  var _point2 = (0, _slicedToArray2["default"])(point, 2),
      x = _point2[0],
      y = _point2[1];

  var _getCircleRadianPoint = getCircleRadianPoint(rx, ry, r, startAngle),
      _getCircleRadianPoint2 = (0, _slicedToArray2["default"])(_getCircleRadianPoint, 2),
      bx = _getCircleRadianPoint2[0],
      by = _getCircleRadianPoint2[1];

  var _getCircleRadianPoint3 = getCircleRadianPoint(rx, ry, r, endAngle),
      _getCircleRadianPoint4 = (0, _slicedToArray2["default"])(_getCircleRadianPoint3, 2),
      ex = _getCircleRadianPoint4[0],
      ey = _getCircleRadianPoint4[1];

  var vPoint = [x - rx, y - ry];
  var vBArm = [bx - rx, by - ry];
  var vEArm = [ex - rx, ey - ry];
  var reverse = minus > PI;

  if (reverse) {
    var _deepClone3 = deepClone([vEArm, vBArm]);

    var _deepClone4 = (0, _slicedToArray2["default"])(_deepClone3, 2);

    vBArm = _deepClone4[0];
    vEArm = _deepClone4[1];
  }

  var inSector = isClockWise(vBArm, vPoint) && !isClockWise(vEArm, vPoint);
  if (reverse) inSector = !inSector;
  if (reverseBE) inSector = !inSector;
  return inSector;
}
/**
 * @description Determine if the point is in the clockwise direction of the vector
 * @param {Array} vArm   Vector
 * @param {Array} vPoint Point
 * @return {Boolean} Result of check
 */


function isClockWise(vArm, vPoint) {
  var _vArm = (0, _slicedToArray2["default"])(vArm, 2),
      ax = _vArm[0],
      ay = _vArm[1];

  var _vPoint = (0, _slicedToArray2["default"])(vPoint, 2),
      px = _vPoint[0],
      py = _vPoint[1];

  return -ay * px + ax * py > 0;
}
/**
 * @description Check if the point is inside the polyline
 * @param {Array} point      Postion of point
 * @param {Array} polyline   The points that makes up a polyline
 * @param {Number} lineWidth Polyline linewidth
 * @return {Boolean} Result of check
 */


function checkPointIsNearPolyline(point, polyline, lineWidth) {
  var halfLineWidth = lineWidth / 2;
  var moveUpPolyline = polyline.map(function (_ref8) {
    var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
        x = _ref9[0],
        y = _ref9[1];

    return [x, y - halfLineWidth];
  });
  var moveDownPolyline = polyline.map(function (_ref10) {
    var _ref11 = (0, _slicedToArray2["default"])(_ref10, 2),
        x = _ref11[0],
        y = _ref11[1];

    return [x, y + halfLineWidth];
  });
  var polygon = [].concat((0, _toConsumableArray2["default"])(moveUpPolyline), (0, _toConsumableArray2["default"])(moveDownPolyline.reverse()));
  return checkPointIsInPolygon(point, polygon);
}
/**
 * @description Check if the point is inside the rect
 * @param {Array} point   Postion of point
 * @param {Number} x      Rect start x coordinate
 * @param {Number} y      Rect start y coordinate
 * @param {Number} width  Rect width
 * @param {Number} height Rect height
 * @return {Boolean} Result of check
 */


function checkPointIsInRect(_ref12, x, y, width, height) {
  var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
      px = _ref13[0],
      py = _ref13[1];

  if (px < x) return false;
  if (py < y) return false;
  if (px > x + width) return false;
  if (py > y + height) return false;
  return true;
}
/**
 * @description Get the coordinates of the rotated point
 * @param {Number} rotate Degree of rotation
 * @param {Array} point   Postion of point
 * @param {Array} origin  Rotation center
 * @param {Array} origin  Rotation center
 * @return {Number} Coordinates after rotation
 */


function getRotatePointPos() {
  var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var point = arguments.length > 1 ? arguments[1] : undefined;
  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
  if (!point) return false;
  if (rotate % 360 === 0) return point;

  var _point3 = (0, _slicedToArray2["default"])(point, 2),
      x = _point3[0],
      y = _point3[1];

  var _origin = (0, _slicedToArray2["default"])(origin, 2),
      ox = _origin[0],
      oy = _origin[1];

  rotate *= PI / 180;
  return [(x - ox) * cos(rotate) - (y - oy) * sin(rotate) + ox, (x - ox) * sin(rotate) + (y - oy) * cos(rotate) + oy];
}
/**
 * @description Get the coordinates of the scaled point
 * @param {Array} scale  Scale factor
 * @param {Array} point  Postion of point
 * @param {Array} origin Scale center
 * @return {Number} Coordinates after scale
 */


function getScalePointPos() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 1];
  var point = arguments.length > 1 ? arguments[1] : undefined;
  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
  if (!point) return false;
  if (scale === 1) return point;

  var _point4 = (0, _slicedToArray2["default"])(point, 2),
      x = _point4[0],
      y = _point4[1];

  var _origin2 = (0, _slicedToArray2["default"])(origin, 2),
      ox = _origin2[0],
      oy = _origin2[1];

  var _scale = (0, _slicedToArray2["default"])(scale, 2),
      xs = _scale[0],
      ys = _scale[1];

  var relativePosX = x - ox;
  var relativePosY = y - oy;
  return [relativePosX * xs + ox, relativePosY * ys + oy];
}
/**
 * @description Get the coordinates of the scaled point
 * @param {Array} translate Translation distance
 * @param {Array} point     Postion of point
 * @return {Number} Coordinates after translation
 */


function getTranslatePointPos(translate, point) {
  if (!translate || !point) return false;

  var _point5 = (0, _slicedToArray2["default"])(point, 2),
      x = _point5[0],
      y = _point5[1];

  var _translate = (0, _slicedToArray2["default"])(translate, 2),
      tx = _translate[0],
      ty = _translate[1];

  return [x + tx, y + ty];
}
/**
 * @description Get the distance from the point to the line
 * @param {Array} point     Postion of point
 * @param {Array} lineBegin Line start position
 * @param {Array} lineEnd   Line end position
 * @return {Number} Distance between point and line
 */


function getDistanceBetweenPointAndLine(point, lineBegin, lineEnd) {
  if (!point || !lineBegin || !lineEnd) return false;

  var _point6 = (0, _slicedToArray2["default"])(point, 2),
      x = _point6[0],
      y = _point6[1];

  var _lineBegin = (0, _slicedToArray2["default"])(lineBegin, 2),
      x1 = _lineBegin[0],
      y1 = _lineBegin[1];

  var _lineEnd = (0, _slicedToArray2["default"])(lineEnd, 2),
      x2 = _lineEnd[0],
      y2 = _lineEnd[1];

  var a = y2 - y1;
  var b = x1 - x2;
  var c = y1 * (x2 - x1) - x1 * (y2 - y1);
  var molecule = abs(a * x + b * y + c);
  var denominator = sqrt(a * a + b * b);
  return molecule / denominator;
}
/**
 * @description Get the coordinates of the specified radian on the circle
 * @param {Number} x      Circle x coordinate
 * @param {Number} y      Circle y coordinate
 * @param {Number} radius Circle radius
 * @param {Number} radian Specfied radian
 * @return {Array} Postion of point
 */


function getCircleRadianPoint(x, y, radius, radian) {
  return [x + cos(radian) * radius, y + sin(radian) * radius];
}
/**
 * @description Get the points that make up a regular polygon
 * @param {Number} x     X coordinate of the polygon inscribed circle
 * @param {Number} y     Y coordinate of the polygon inscribed circle
 * @param {Number} r     Radius of the polygon inscribed circle
 * @param {Number} side  Side number
 * @param {Number} minus Radian offset
 * @return {Array} Points that make up a regular polygon
 */


function getRegularPolygonPoints(rx, ry, r, side) {
  var minus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PI * -0.5;
  var radianGap = PI * 2 / side;
  var radians = new Array(side).fill('').map(function (t, i) {
    return i * radianGap + minus;
  });
  return radians.map(function (radian) {
    return getCircleRadianPoint(rx, ry, r, radian);
  });
}

var _default = {
  deepClone: deepClone,
  eliminateBlur: eliminateBlur,
  checkPointIsInCircle: checkPointIsInCircle,
  checkPointIsInPolygon: checkPointIsInPolygon,
  checkPointIsInSector: checkPointIsInSector,
  checkPointIsNearPolyline: checkPointIsNearPolyline,
  getTwoPointDistance: getTwoPointDistance,
  getRotatePointPos: getRotatePointPos,
  getScalePointPos: getScalePointPos,
  getTranslatePointPos: getTranslatePointPos,
  getCircleRadianPoint: getCircleRadianPoint,
  getRegularPolygonPoints: getRegularPolygonPoints,
  getDistanceBetweenPointAndLine: getDistanceBetweenPointAndLine
};
exports["default"] = _default;

/***/ }),

/***/ "55f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "59d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Picture/index.vue?vue&type=template&id=25863b12&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"overflow":"hidden"}},[_c('img',{attrs:{"src":_vm.src}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Picture/index.vue?vue&type=template&id=25863b12&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Picture/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Picturevue_type_script_lang_js_ = ({
  name: "Picture",
  props: {
    src: {
      type: String,
      require: true,
    },
  },
});

// CONCATENATED MODULE: ./packages/Picture/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Picturevue_type_script_lang_js_ = (Picturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Picture/index.vue?vue&type=style&index=0&id=25863b12&lang=scss&scoped=true&
var Picturevue_type_style_index_0_id_25863b12_lang_scss_scoped_true_ = __webpack_require__("db36");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Picture/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Picturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "25863b12",
  null
  
)

/* harmony default export */ var Picture = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5a0c":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "5a43":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "5be5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ "5e07":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "60f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legendConfig = void 0;
var legendConfig = {
  /**
   * @description Whether to display legend
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend orient
   * @type {String}
   * @default orient = 'horizontal'
   * @example orient = 'horizontal' | 'vertical'
   */
  orient: 'horizontal',

  /**
   * @description Legend left
   * @type {String|Number}
   * @default left = 'auto'
   * @example left = 'auto' | '10%' | 10
   */
  left: 'auto',

  /**
   * @description Legend right
   * @type {String|Number}
   * @default right = 'auto'
   * @example right = 'auto' | '10%' | 10
   */
  right: 'auto',

  /**
   * @description Legend top
   * @type {String|Number}
   * @default top = 'auto'
   * @example top = 'auto' | '10%' | 10
   */
  top: 'auto',

  /**
   * @description Legend bottom
   * @type {String|Number}
   * @default bottom = 'auto'
   * @example bottom = 'auto' | '10%' | 10
   */
  bottom: 'auto',

  /**
   * @description Legend item gap
   * @type {Number}
   * @default itemGap = 10
   */
  itemGap: 10,

  /**
   * @description Icon width
   * @type {Number}
   * @default iconWidth = 25
   */
  iconWidth: 25,

  /**
   * @description Icon height
   * @type {Number}
   * @default iconHeight = 10
   */
  iconHeight: 10,

  /**
   * @description Whether legend is optional
   * @type {Boolean}
   * @default selectAble = true
   */
  selectAble: true,

  /**
   * @description Legend data
   * @type {Array}
   * @default data = []
   */
  data: [],

  /**
   * @description Legend text default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 13,
    fill: '#000'
  },

  /**
   * @description Legend icon default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  iconStyle: {},

  /**
   * @description Legend text unselected default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  textUnselectedStyle: {
    fontFamily: 'Arial',
    fontSize: 13,
    fill: '#999'
  },

  /**
   * @description Legend icon unselected default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  iconUnselectedStyle: {
    fill: '#999'
  },

  /**
   * @description Legend render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 20
   */
  rLevel: 20,

  /**
   * @description Legend animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Legend animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.legendConfig = legendConfig;

/***/ }),

/***/ "60f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legend = legend;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _updater = __webpack_require__("18ad");

var _util = __webpack_require__("5557");

var _config = __webpack_require__("9d85");

var _util2 = __webpack_require__("becb");

function legend(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var legend = option.legend;

  if (legend) {
    legend = (0, _util2.deepMerge)((0, _util.deepClone)(_config.legendConfig, true), legend);
    legend = initLegendData(legend);
    legend = filterInvalidData(legend, option, chart);
    legend = calcLegendTextWidth(legend, chart);
    legend = calcLegendPosition(legend, chart);
    legend = [legend];
  } else {
    legend = [];
  }

  (0, _updater.doUpdate)({
    chart: chart,
    series: legend,
    key: 'legendIcon',
    getGraphConfig: getIconConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: legend,
    key: 'legendText',
    getGraphConfig: getTextConfig
  });
}

function initLegendData(legend) {
  var data = legend.data;
  legend.data = data.map(function (item) {
    var itemType = (0, _typeof2["default"])(item);

    if (itemType === 'string') {
      return {
        name: item
      };
    } else if (itemType === 'object') {
      return item;
    }

    return {
      name: ''
    };
  });
  return legend;
}

function filterInvalidData(legend, option, chart) {
  var series = option.series;
  var legendStatus = chart.legendStatus;
  var data = legend.data.filter(function (item) {
    var name = item.name;
    var result = series.find(function (_ref) {
      var sn = _ref.name;
      return name === sn;
    });
    if (!result) return false;
    if (!item.color) item.color = result.color;
    if (!item.icon) item.icon = result.type;
    return item;
  });
  if (!legendStatus || legendStatus.length !== legend.data.length) legendStatus = new Array(legend.data.length).fill(true);
  data.forEach(function (item, i) {
    return item.status = legendStatus[i];
  });
  legend.data = data;
  chart.legendStatus = legendStatus;
  return legend;
}

function calcLegendTextWidth(legend, chart) {
  var ctx = chart.render.ctx;
  var data = legend.data,
      textStyle = legend.textStyle,
      textUnselectedStyle = legend.textUnselectedStyle;
  data.forEach(function (item) {
    var status = item.status,
        name = item.name;
    item.textWidth = getTextWidth(ctx, name, status ? textStyle : textUnselectedStyle);
  });
  return legend;
}

function getTextWidth(ctx, text, style) {
  ctx.font = getFontConfig(style);
  return ctx.measureText(text).width;
}

function getFontConfig(style) {
  var fontFamily = style.fontFamily,
      fontSize = style.fontSize;
  return "".concat(fontSize, "px ").concat(fontFamily);
}

function calcLegendPosition(legend, chart) {
  var orient = legend.orient;

  if (orient === 'vertical') {
    calcVerticalPosition(legend, chart);
  } else {
    calcHorizontalPosition(legend, chart);
  }

  return legend;
}

function calcHorizontalPosition(legend, chart) {
  var iconHeight = legend.iconHeight,
      itemGap = legend.itemGap;
  var lines = calcDefaultHorizontalPosition(legend, chart);
  var xOffsets = lines.map(function (line) {
    return getHorizontalXOffset(line, legend, chart);
  });
  var yOffset = getHorizontalYOffset(legend, chart);
  var align = {
    textAlign: 'left',
    textBaseline: 'middle'
  };
  lines.forEach(function (line, i) {
    return line.forEach(function (item) {
      var iconPosition = item.iconPosition,
          textPosition = item.textPosition;
      var xOffset = xOffsets[i];
      var realYOffset = yOffset + i * (itemGap + iconHeight);
      item.iconPosition = mergeOffset(iconPosition, [xOffset, realYOffset]);
      item.textPosition = mergeOffset(textPosition, [xOffset, realYOffset]);
      item.align = align;
    });
  });
}

function calcDefaultHorizontalPosition(legend, chart) {
  var data = legend.data,
      iconWidth = legend.iconWidth;
  var w = chart.render.area[0];
  var startIndex = 0;
  var lines = [[]];
  data.forEach(function (item, i) {
    var beforeWidth = getBeforeWidth(startIndex, i, legend);
    var endXPos = beforeWidth + iconWidth + 5 + item.textWidth;

    if (endXPos >= w) {
      startIndex = i;
      beforeWidth = getBeforeWidth(startIndex, i, legend);
      lines.push([]);
    }

    item.iconPosition = [beforeWidth, 0];
    item.textPosition = [beforeWidth + iconWidth + 5, 0];
    lines.slice(-1)[0].push(item);
  });
  return lines;
}

function getBeforeWidth(startIndex, currentIndex, legend) {
  var data = legend.data,
      iconWidth = legend.iconWidth,
      itemGap = legend.itemGap;
  var beforeItem = data.slice(startIndex, currentIndex);
  return (0, _util2.mulAdd)(beforeItem.map(function (_ref2) {
    var textWidth = _ref2.textWidth;
    return textWidth;
  })) + (currentIndex - startIndex) * (itemGap + 5 + iconWidth);
}

function getHorizontalXOffset(data, legend, chart) {
  var left = legend.left,
      right = legend.right,
      iconWidth = legend.iconWidth,
      itemGap = legend.itemGap;
  var w = chart.render.area[0];
  var dataNum = data.length;
  var allWidth = (0, _util2.mulAdd)(data.map(function (_ref3) {
    var textWidth = _ref3.textWidth;
    return textWidth;
  })) + dataNum * (5 + iconWidth) + (dataNum - 1) * itemGap;
  var horizontal = [left, right].findIndex(function (pos) {
    return pos !== 'auto';
  });

  if (horizontal === -1) {
    return (w - allWidth) / 2;
  } else if (horizontal === 0) {
    if (typeof left === 'number') return left;
    return parseInt(left) / 100 * w;
  } else {
    if (typeof right !== 'number') right = parseInt(right) / 100 * w;
    return w - (allWidth + right);
  }
}

function getHorizontalYOffset(legend, chart) {
  var top = legend.top,
      bottom = legend.bottom,
      iconHeight = legend.iconHeight;
  var h = chart.render.area[1];
  var vertical = [top, bottom].findIndex(function (pos) {
    return pos !== 'auto';
  });
  var halfIconHeight = iconHeight / 2;

  if (vertical === -1) {
    var _chart$gridArea = chart.gridArea,
        y = _chart$gridArea.y,
        height = _chart$gridArea.h;
    return y + height + 45 - halfIconHeight;
  } else if (vertical === 0) {
    if (typeof top === 'number') return top - halfIconHeight;
    return parseInt(top) / 100 * h - halfIconHeight;
  } else {
    if (typeof bottom !== 'number') bottom = parseInt(bottom) / 100 * h;
    return h - bottom - halfIconHeight;
  }
}

function mergeOffset(_ref4, _ref5) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
      x = _ref6[0],
      y = _ref6[1];

  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
      ox = _ref7[0],
      oy = _ref7[1];

  return [x + ox, y + oy];
}

function calcVerticalPosition(legend, chart) {
  var _getVerticalXOffset = getVerticalXOffset(legend, chart),
      _getVerticalXOffset2 = (0, _slicedToArray2["default"])(_getVerticalXOffset, 2),
      isRight = _getVerticalXOffset2[0],
      xOffset = _getVerticalXOffset2[1];

  var yOffset = getVerticalYOffset(legend, chart);
  calcDefaultVerticalPosition(legend, isRight);
  var align = {
    textAlign: 'left',
    textBaseline: 'middle'
  };
  legend.data.forEach(function (item) {
    var textPosition = item.textPosition,
        iconPosition = item.iconPosition;
    item.textPosition = mergeOffset(textPosition, [xOffset, yOffset]);
    item.iconPosition = mergeOffset(iconPosition, [xOffset, yOffset]);
    item.align = align;
  });
}

function getVerticalXOffset(legend, chart) {
  var left = legend.left,
      right = legend.right;
  var w = chart.render.area[0];
  var horizontal = [left, right].findIndex(function (pos) {
    return pos !== 'auto';
  });

  if (horizontal === -1) {
    return [true, w - 10];
  } else {
    var offset = [left, right][horizontal];
    if (typeof offset !== 'number') offset = parseInt(offset) / 100 * w;
    return [Boolean(horizontal), offset];
  }
}

function getVerticalYOffset(legend, chart) {
  var iconHeight = legend.iconHeight,
      itemGap = legend.itemGap,
      data = legend.data,
      top = legend.top,
      bottom = legend.bottom;
  var h = chart.render.area[1];
  var dataNum = data.length;
  var allHeight = dataNum * iconHeight + (dataNum - 1) * itemGap;
  var vertical = [top, bottom].findIndex(function (pos) {
    return pos !== 'auto';
  });

  if (vertical === -1) {
    return (h - allHeight) / 2;
  } else {
    var offset = [top, bottom][vertical];
    if (typeof offset !== 'number') offset = parseInt(offset) / 100 * h;
    if (vertical === 1) offset = h - offset - allHeight;
    return offset;
  }
}

function calcDefaultVerticalPosition(legend, isRight) {
  var data = legend.data,
      iconWidth = legend.iconWidth,
      iconHeight = legend.iconHeight,
      itemGap = legend.itemGap;
  var halfIconHeight = iconHeight / 2;
  data.forEach(function (item, i) {
    var textWidth = item.textWidth;
    var yPos = (iconHeight + itemGap) * i + halfIconHeight;
    var iconXPos = isRight ? 0 - iconWidth : 0;
    var textXpos = isRight ? iconXPos - 5 - textWidth : iconWidth + 5;
    item.iconPosition = [iconXPos, yPos];
    item.textPosition = [textXpos, yPos];
  });
}

function getIconConfig(legendItem, updater) {
  var data = legendItem.data,
      selectAble = legendItem.selectAble,
      animationCurve = legendItem.animationCurve,
      animationFrame = legendItem.animationFrame,
      rLevel = legendItem.rLevel;
  return data.map(function (item, i) {
    return (0, _defineProperty2["default"])({
      name: item.icon === 'line' ? 'lineIcon' : 'rect',
      index: rLevel,
      visible: legendItem.show,
      hover: selectAble,
      click: selectAble,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getIconShape(legendItem, i),
      style: getIconStyle(legendItem, i)
    }, "click", createClickCallBack(legendItem, i, updater));
  });
}

function getIconShape(legendItem, i) {
  var data = legendItem.data,
      iconWidth = legendItem.iconWidth,
      iconHeight = legendItem.iconHeight;

  var _data$i$iconPosition = (0, _slicedToArray2["default"])(data[i].iconPosition, 2),
      x = _data$i$iconPosition[0],
      y = _data$i$iconPosition[1];

  var halfIconHeight = iconHeight / 2;
  return {
    x: x,
    y: y - halfIconHeight,
    w: iconWidth,
    h: iconHeight
  };
}

function getIconStyle(legendItem, i) {
  var data = legendItem.data,
      iconStyle = legendItem.iconStyle,
      iconUnselectedStyle = legendItem.iconUnselectedStyle;
  var _data$i = data[i],
      status = _data$i.status,
      color = _data$i.color;
  var style = status ? iconStyle : iconUnselectedStyle;
  return (0, _util2.deepMerge)({
    fill: color
  }, style);
}

function getTextConfig(legendItem, updater) {
  var data = legendItem.data,
      selectAble = legendItem.selectAble,
      animationCurve = legendItem.animationCurve,
      animationFrame = legendItem.animationFrame,
      rLevel = legendItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: legendItem.show,
      hover: selectAble,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      hoverRect: getTextHoverRect(legendItem, i),
      shape: getTextShape(legendItem, i),
      style: getTextStyle(legendItem, i),
      click: createClickCallBack(legendItem, i, updater)
    };
  });
}

function getTextShape(legendItem, i) {
  var _legendItem$data$i = legendItem.data[i],
      textPosition = _legendItem$data$i.textPosition,
      name = _legendItem$data$i.name;
  return {
    content: name,
    position: textPosition
  };
}

function getTextStyle(legendItem, i) {
  var textStyle = legendItem.textStyle,
      textUnselectedStyle = legendItem.textUnselectedStyle;
  var _legendItem$data$i2 = legendItem.data[i],
      status = _legendItem$data$i2.status,
      align = _legendItem$data$i2.align;
  var style = status ? textStyle : textUnselectedStyle;
  return (0, _util2.deepMerge)((0, _util.deepClone)(style, true), align);
}

function getTextHoverRect(legendItem, i) {
  var textStyle = legendItem.textStyle,
      textUnselectedStyle = legendItem.textUnselectedStyle;

  var _legendItem$data$i3 = legendItem.data[i],
      status = _legendItem$data$i3.status,
      _legendItem$data$i3$t = (0, _slicedToArray2["default"])(_legendItem$data$i3.textPosition, 2),
      x = _legendItem$data$i3$t[0],
      y = _legendItem$data$i3$t[1],
      textWidth = _legendItem$data$i3.textWidth;

  var style = status ? textStyle : textUnselectedStyle;
  var fontSize = style.fontSize;
  return [x, y - fontSize / 2, textWidth, fontSize];
}

function createClickCallBack(legendItem, index, updater) {
  var name = legendItem.data[index].name;
  return function () {
    var _updater$chart = updater.chart,
        legendStatus = _updater$chart.legendStatus,
        option = _updater$chart.option;
    var status = !legendStatus[index];
    var change = option.series.find(function (_ref9) {
      var sn = _ref9.name;
      return sn === name;
    });
    change.show = status;
    legendStatus[index] = status;
    updater.chart.setOption(option);
  };
}

/***/ }),

/***/ "62fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "64c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/BackGround/index.vue?vue&type=template&id=4af3e72b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rect-shape",style:({'background-image': _vm.element.style.backgroundImage})})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/BackGround/index.vue?vue&type=template&id=4af3e72b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/BackGround/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var BackGroundvue_type_script_lang_js_ = ({
  name: "BackGround",
  props: {
    element: {
      type: Object,
    },
  },
});

// CONCATENATED MODULE: ./packages/BackGround/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_BackGroundvue_type_script_lang_js_ = (BackGroundvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/BackGround/index.vue?vue&type=style&index=0&id=4af3e72b&lang=scss&scoped=true&
var BackGroundvue_type_style_index_0_id_4af3e72b_lang_scss_scoped_true_ = __webpack_require__("8534");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/BackGround/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_BackGroundvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4af3e72b",
  null
  
)

/* harmony default export */ var BackGround = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6613":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("5a43");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "6c02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "changeDefaultConfig", {
  enumerable: true,
  get: function get() {
    return _config.changeDefaultConfig;
  }
});
exports["default"] = void 0;

var _charts = _interopRequireDefault(__webpack_require__("04fb"));

var _config = __webpack_require__("9d85");

var _default = _charts["default"];
exports["default"] = _default;

/***/ }),

/***/ "6c55":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ccd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6eb9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineConfig = void 0;
var lineConfig = {
  /**
   * @description Whether to display this line chart
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Data stacking
   * The data value of the series element of the same stack
   * will be superimposed (the latter value will be superimposed on the previous value)
   * @type {String}
   * @default stack = ''
   */
  stack: '',

  /**
   * @description Smooth line
   * @type {Boolean}
   * @default smooth = false
   */
  smooth: false,

  /**
   * @description Line x axis index
   * @type {Number}
   * @default xAxisIndex = 0
   * @example xAxisIndex = 0 | 1
   */
  xAxisIndex: 0,

  /**
   * @description Line y axis index
   * @type {Number}
   * @default yAxisIndex = 0
   * @example yAxisIndex = 0 | 1
   */
  yAxisIndex: 0,

  /**
   * @description Line chart data
   * @type {Array}
   * @default data = []
   * @example data = [100, 200, 300]
   */
  data: [],

  /**
   * @description Line default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  lineStyle: {
    lineWidth: 1
  },

  /**
   * @description Line point configuration
   * @type {Object}
   */
  linePoint: {
    /**
     * @description Whether to display line point
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Line point radius
     * @type {Number}
     * @default radius = 2
     */
    radius: 2,

    /**
     * @description Line point default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: '#fff',
      lineWidth: 1
    }
  },

  /**
   * @description Line area configuration
   * @type {Object}
   */
  lineArea: {
    /**
     * @description Whether to display line area
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Line area gradient color (Hex|rgb|rgba)
     * @type {Array}
     * @default gradient = []
     */
    gradient: [],

    /**
     * @description Line area style default configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      opacity: 0.5
    }
  },

  /**
   * @description Line label configuration
   * @type {Object}
   */
  label: {
    /**
     * @description Whether to display line label
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Line label position
     * @type {String}
     * @default position = 'top'
     * @example position = 'top' | 'center' | 'bottom'
     */
    position: 'top',

    /**
     * @description Line label offset
     * @type {Array}
     * @default offset = [0, -10]
     */
    offset: [0, -10],

    /**
     * @description Line label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}件'
     * @example formatter = (dataItem) => (dataItem.value)
     */
    formatter: null,

    /**
     * @description Line label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 10
    }
  },

  /**
   * @description Line chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 10
   */
  rLevel: 10,

  /**
   * @description Line animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Line animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.lineConfig = lineConfig;

/***/ }),

/***/ "6fc2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7037":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "729c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a9b9b7d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("09b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a9b9b7d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a9b9b7d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a9b9b7d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "729e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pie = pie;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _pie = __webpack_require__("222a");

var _util = __webpack_require__("5557");

var _util2 = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pie(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var series = option.series;
  if (!series) series = [];
  var pies = (0, _util2.initNeedSeries)(series, _pie.pieConfig, 'pie');
  pies = calcPiesCenter(pies, chart);
  pies = calcPiesRadius(pies, chart);
  pies = calcRosePiesRadius(pies, chart);
  pies = calcPiesPercent(pies);
  pies = calcPiesAngle(pies, chart);
  pies = calcPiesInsideLabelPos(pies);
  pies = calcPiesEdgeCenterPos(pies);
  pies = calcPiesOutSideLabelPos(pies);
  (0, _updater.doUpdate)({
    chart: chart,
    series: pies,
    key: 'pie',
    getGraphConfig: getPieConfig,
    getStartGraphConfig: getStartPieConfig,
    beforeChange: beforeChangePie
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: pies,
    key: 'pieInsideLabel',
    getGraphConfig: getInsideLabelConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: pies,
    key: 'pieOutsideLabelLine',
    getGraphConfig: getOutsideLabelLineConfig,
    getStartGraphConfig: getStartOutsideLabelLineConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: pies,
    key: 'pieOutsideLabel',
    getGraphConfig: getOutsideLabelConfig,
    getStartGraphConfig: getStartOutsideLabelConfig
  });
}

function calcPiesCenter(pies, chart) {
  var area = chart.render.area;
  pies.forEach(function (pie) {
    var center = pie.center;
    center = center.map(function (pos, i) {
      if (typeof pos === 'number') return pos;
      return parseInt(pos) / 100 * area[i];
    });
    pie.center = center;
  });
  return pies;
}

function calcPiesRadius(pies, chart) {
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(chart.render.area)) / 2;
  pies.forEach(function (pie) {
    var radius = pie.radius,
        data = pie.data;
    radius = getNumberRadius(radius, maxRadius);
    data.forEach(function (item) {
      var itemRadius = item.radius;
      if (!itemRadius) itemRadius = radius;
      itemRadius = getNumberRadius(itemRadius, maxRadius);
      item.radius = itemRadius;
    });
    pie.radius = radius;
  });
  return pies;
}

function getNumberRadius(radius, maxRadius) {
  if (!(radius instanceof Array)) radius = [0, radius];
  radius = radius.map(function (r) {
    if (typeof r === 'number') return r;
    return parseInt(r) / 100 * maxRadius;
  });
  return radius;
}

function calcRosePiesRadius(pies, chart) {
  var rosePie = pies.filter(function (_ref) {
    var roseType = _ref.roseType;
    return roseType;
  });
  rosePie.forEach(function (pie) {
    var radius = pie.radius,
        data = pie.data,
        roseSort = pie.roseSort;
    var roseIncrement = getRoseIncrement(pie);
    var dataCopy = (0, _toConsumableArray2["default"])(data);
    data = sortData(data);
    data.forEach(function (item, i) {
      item.radius[1] = radius[1] - roseIncrement * i;
    });

    if (roseSort) {
      data.reverse();
    } else {
      pie.data = dataCopy;
    }

    pie.roseIncrement = roseIncrement;
  });
  return pies;
}

function sortData(data) {
  return data.sort(function (_ref2, _ref3) {
    var a = _ref2.value;
    var b = _ref3.value;
    if (a === b) return 0;
    if (a > b) return -1;
    if (a < b) return 1;
  });
}

function getRoseIncrement(pie) {
  var radius = pie.radius,
      roseIncrement = pie.roseIncrement;
  if (typeof roseIncrement === 'number') return roseIncrement;

  if (roseIncrement === 'auto') {
    var data = pie.data;
    var allRadius = data.reduce(function (all, _ref4) {
      var radius = _ref4.radius;
      return [].concat((0, _toConsumableArray2["default"])(all), (0, _toConsumableArray2["default"])(radius));
    }, []);
    var minRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(allRadius));
    var maxRadius = Math.max.apply(Math, (0, _toConsumableArray2["default"])(allRadius));
    return (maxRadius - minRadius) * 0.6 / (data.length - 1 || 1);
  }

  return parseInt(roseIncrement) / 100 * radius[1];
}

function calcPiesPercent(pies) {
  pies.forEach(function (pie) {
    var data = pie.data,
        percentToFixed = pie.percentToFixed;
    var sum = getDataSum(data);
    data.forEach(function (item) {
      var value = item.value;
      item.percent = value / sum * 100;
      item.percentForLabel = toFixedNoCeil(value / sum * 100, percentToFixed);
    });
    var percentSumNoLast = (0, _util2.mulAdd)(data.slice(0, -1).map(function (_ref5) {
      var percent = _ref5.percent;
      return percent;
    }));
    data.slice(-1)[0].percent = 100 - percentSumNoLast;
    data.slice(-1)[0].percentForLabel = toFixedNoCeil(100 - percentSumNoLast, percentToFixed);
  });
  return pies;
}

function toFixedNoCeil(number) {
  var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stringNumber = number.toString();
  var splitedNumber = stringNumber.split('.');
  var decimal = splitedNumber[1] || '0';
  var fixedDecimal = decimal.slice(0, toFixed);
  splitedNumber[1] = fixedDecimal;
  return parseFloat(splitedNumber.join('.'));
}

function getDataSum(data) {
  return (0, _util2.mulAdd)(data.map(function (_ref6) {
    var value = _ref6.value;
    return value;
  }));
}

function calcPiesAngle(pies) {
  pies.forEach(function (pie) {
    var start = pie.startAngle,
        data = pie.data;
    data.forEach(function (item, i) {
      var _getDataAngle = getDataAngle(data, i),
          _getDataAngle2 = (0, _slicedToArray2["default"])(_getDataAngle, 2),
          startAngle = _getDataAngle2[0],
          endAngle = _getDataAngle2[1];

      item.startAngle = start + startAngle;
      item.endAngle = start + endAngle;
    });
  });
  return pies;
}

function getDataAngle(data, i) {
  var fullAngle = Math.PI * 2;
  var needAddData = data.slice(0, i + 1);
  var percentSum = (0, _util2.mulAdd)(needAddData.map(function (_ref7) {
    var percent = _ref7.percent;
    return percent;
  }));
  var percent = data[i].percent;
  var startPercent = percentSum - percent;
  return [fullAngle * startPercent / 100, fullAngle * percentSum / 100];
}

function calcPiesInsideLabelPos(pies) {
  pies.forEach(function (pieItem) {
    var data = pieItem.data;
    data.forEach(function (item) {
      item.insideLabelPos = getPieInsideLabelPos(pieItem, item);
    });
  });
  return pies;
}

function getPieInsideLabelPos(pieItem, dataItem) {
  var center = pieItem.center;

  var startAngle = dataItem.startAngle,
      endAngle = dataItem.endAngle,
      _dataItem$radius = (0, _slicedToArray2["default"])(dataItem.radius, 2),
      ir = _dataItem$radius[0],
      or = _dataItem$radius[1];

  var radius = (ir + or) / 2;
  var angle = (startAngle + endAngle) / 2;
  return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, angle]));
}

function calcPiesEdgeCenterPos(pies) {
  pies.forEach(function (pie) {
    var data = pie.data,
        center = pie.center;
    data.forEach(function (item) {
      var startAngle = item.startAngle,
          endAngle = item.endAngle,
          radius = item.radius;
      var centerAngle = (startAngle + endAngle) / 2;

      var pos = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius[1], centerAngle]));

      item.edgeCenterPos = pos;
    });
  });
  return pies;
}

function calcPiesOutSideLabelPos(pies) {
  pies.forEach(function (pieItem) {
    var leftPieDataItems = getLeftOrRightPieDataItems(pieItem);
    var rightPieDataItems = getLeftOrRightPieDataItems(pieItem, false);
    leftPieDataItems = sortPiesFromTopToBottom(leftPieDataItems);
    rightPieDataItems = sortPiesFromTopToBottom(rightPieDataItems);
    addLabelLineAndAlign(leftPieDataItems, pieItem);
    addLabelLineAndAlign(rightPieDataItems, pieItem, false);
  });
  return pies;
}

function getLabelLineBendRadius(pieItem) {
  var labelLineBendGap = pieItem.outsideLabel.labelLineBendGap;
  var maxRadius = getPieMaxRadius(pieItem);

  if (typeof labelLineBendGap !== 'number') {
    labelLineBendGap = parseInt(labelLineBendGap) / 100 * maxRadius;
  }

  return labelLineBendGap + maxRadius;
}

function getPieMaxRadius(pieItem) {
  var data = pieItem.data;
  var radius = data.map(function (_ref8) {
    var _ref8$radius = (0, _slicedToArray2["default"])(_ref8.radius, 2),
        foo = _ref8$radius[0],
        r = _ref8$radius[1];

    return r;
  });
  return Math.max.apply(Math, (0, _toConsumableArray2["default"])(radius));
}

function getLeftOrRightPieDataItems(pieItem) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var data = pieItem.data,
      center = pieItem.center;
  var centerXPos = center[0];
  return data.filter(function (_ref9) {
    var edgeCenterPos = _ref9.edgeCenterPos;
    var xPos = edgeCenterPos[0];
    if (left) return xPos <= centerXPos;
    return xPos > centerXPos;
  });
}

function sortPiesFromTopToBottom(dataItem) {
  dataItem.sort(function (_ref10, _ref11) {
    var _ref10$edgeCenterPos = (0, _slicedToArray2["default"])(_ref10.edgeCenterPos, 2),
        t = _ref10$edgeCenterPos[0],
        ay = _ref10$edgeCenterPos[1];

    var _ref11$edgeCenterPos = (0, _slicedToArray2["default"])(_ref11.edgeCenterPos, 2),
        tt = _ref11$edgeCenterPos[0],
        by = _ref11$edgeCenterPos[1];

    if (ay > by) return 1;
    if (ay < by) return -1;
    if (ay === by) return 0;
  });
  return dataItem;
}

function addLabelLineAndAlign(dataItem, pieItem) {
  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var center = pieItem.center,
      outsideLabel = pieItem.outsideLabel;
  var radius = getLabelLineBendRadius(pieItem);
  dataItem.forEach(function (item) {
    var edgeCenterPos = item.edgeCenterPos,
        startAngle = item.startAngle,
        endAngle = item.endAngle;
    var labelLineEndLength = outsideLabel.labelLineEndLength;
    var angle = (startAngle + endAngle) / 2;

    var bendPoint = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, angle]));

    var endPoint = (0, _toConsumableArray2["default"])(bendPoint);
    endPoint[0] += labelLineEndLength * (left ? -1 : 1);
    item.labelLine = [edgeCenterPos, bendPoint, endPoint];
    item.labelLineLength = (0, _util2.getPolylineLength)(item.labelLine);
    item.align = {
      textAlign: 'left',
      textBaseline: 'middle'
    };
    if (left) item.align.textAlign = 'right';
  });
}

function getPieConfig(pieItem) {
  var data = pieItem.data,
      animationCurve = pieItem.animationCurve,
      animationFrame = pieItem.animationFrame,
      rLevel = pieItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'pie',
      index: rLevel,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getPieShape(pieItem, i),
      style: getPieStyle(pieItem, i)
    };
  });
}

function getStartPieConfig(pieItem) {
  var animationDelayGap = pieItem.animationDelayGap,
      startAnimationCurve = pieItem.startAnimationCurve;
  var configs = getPieConfig(pieItem);
  configs.forEach(function (config, i) {
    config.animationCurve = startAnimationCurve;
    config.animationDelay = i * animationDelayGap;
    config.shape.or = config.shape.ir;
  });
  return configs;
}

function beforeChangePie(graph) {
  graph.animationDelay = 0;
}

function getPieShape(pieItem, i) {
  var center = pieItem.center,
      data = pieItem.data;
  var dataItem = data[i];
  var radius = dataItem.radius,
      startAngle = dataItem.startAngle,
      endAngle = dataItem.endAngle;
  return {
    startAngle: startAngle,
    endAngle: endAngle,
    ir: radius[0],
    or: radius[1],
    rx: center[0],
    ry: center[1]
  };
}

function getPieStyle(pieItem, i) {
  var pieStyle = pieItem.pieStyle,
      data = pieItem.data;
  var dataItem = data[i];
  var color = dataItem.color;
  return (0, _util2.deepMerge)({
    fill: color
  }, pieStyle);
}

function getInsideLabelConfig(pieItem) {
  var animationCurve = pieItem.animationCurve,
      animationFrame = pieItem.animationFrame,
      data = pieItem.data,
      rLevel = pieItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: pieItem.insideLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getInsideLabelShape(pieItem, i),
      style: getInsideLabelStyle(pieItem, i)
    };
  });
}

function getInsideLabelShape(pieItem, i) {
  var insideLabel = pieItem.insideLabel,
      data = pieItem.data;
  var formatter = insideLabel.formatter;
  var dataItem = data[i];
  var formatterType = (0, _typeof2["default"])(formatter);
  var label = '';

  if (formatterType === 'string') {
    label = formatter.replace('{name}', dataItem.name);
    label = label.replace('{percent}', dataItem.percentForLabel);
    label = label.replace('{value}', dataItem.value);
  }

  if (formatterType === 'function') {
    label = formatter(dataItem);
  }

  return {
    content: label,
    position: dataItem.insideLabelPos
  };
}

function getInsideLabelStyle(pieItem, i) {
  var style = pieItem.insideLabel.style;
  return style;
}

function getOutsideLabelLineConfig(pieItem) {
  var animationCurve = pieItem.animationCurve,
      animationFrame = pieItem.animationFrame,
      data = pieItem.data,
      rLevel = pieItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'polyline',
      index: rLevel,
      visible: pieItem.outsideLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getOutsideLabelLineShape(pieItem, i),
      style: getOutsideLabelLineStyle(pieItem, i)
    };
  });
}

function getStartOutsideLabelLineConfig(pieItem) {
  var data = pieItem.data;
  var configs = getOutsideLabelLineConfig(pieItem);
  configs.forEach(function (config, i) {
    config.style.lineDash = [0, data[i].labelLineLength];
  });
  return configs;
}

function getOutsideLabelLineShape(pieItem, i) {
  var data = pieItem.data;
  var dataItem = data[i];
  return {
    points: dataItem.labelLine
  };
}

function getOutsideLabelLineStyle(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel,
      data = pieItem.data;
  var labelLineStyle = outsideLabel.labelLineStyle;
  var color = data[i].color;
  return (0, _util2.deepMerge)({
    stroke: color,
    lineDash: [data[i].labelLineLength, 0]
  }, labelLineStyle);
}

function getOutsideLabelConfig(pieItem) {
  var animationCurve = pieItem.animationCurve,
      animationFrame = pieItem.animationFrame,
      data = pieItem.data,
      rLevel = pieItem.rLevel;
  return data.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: pieItem.outsideLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getOutsideLabelShape(pieItem, i),
      style: getOutsideLabelStyle(pieItem, i)
    };
  });
}

function getStartOutsideLabelConfig(pieItem) {
  var data = pieItem.data;
  var configs = getOutsideLabelConfig(pieItem);
  configs.forEach(function (config, i) {
    config.shape.position = data[i].labelLine[1];
  });
  return configs;
}

function getOutsideLabelShape(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel,
      data = pieItem.data;
  var formatter = outsideLabel.formatter;
  var _data$i = data[i],
      labelLine = _data$i.labelLine,
      name = _data$i.name,
      percentForLabel = _data$i.percentForLabel,
      value = _data$i.value;
  var formatterType = (0, _typeof2["default"])(formatter);
  var label = '';

  if (formatterType === 'string') {
    label = formatter.replace('{name}', name);
    label = label.replace('{percent}', percentForLabel);
    label = label.replace('{value}', value);
  }

  if (formatterType === 'function') {
    label = formatter(data[i]);
  }

  return {
    content: label,
    position: labelLine[2]
  };
}

function getOutsideLabelStyle(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel,
      data = pieItem.data;
  var _data$i2 = data[i],
      color = _data$i2.color,
      align = _data$i2.align;
  var style = outsideLabel.style;
  return (0, _util2.deepMerge)(_objectSpread({
    fill: color
  }, align), style);
}

/***/ }),

/***/ "733c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "76a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/VButton/index.vue?vue&type=template&id=48398e72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"v-button"},[_vm._v(_vm._s(_vm.label))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/VButton/index.vue?vue&type=template&id=48398e72&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/VButton/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var VButtonvue_type_script_lang_js_ = ({
  name: "VButton",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
});

// CONCATENATED MODULE: ./packages/VButton/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_VButtonvue_type_script_lang_js_ = (VButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/VButton/index.vue?vue&type=style&index=0&id=48398e72&lang=scss&scoped=true&
var VButtonvue_type_style_index_0_id_48398e72_lang_scss_scoped_true_ = __webpack_require__("0f4f");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/VButton/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_VButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "48398e72",
  null
  
)

/* harmony default export */ var VButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7c8c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7cc8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7ed3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8261":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "84cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8534":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4af3e72b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c55");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4af3e72b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4af3e72b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4af3e72b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "85c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("970b"));

var _color = _interopRequireDefault(__webpack_require__("53b8"));

var _bezierCurve = _interopRequireDefault(__webpack_require__("050c"));

var _util = __webpack_require__("5557");

var _graphs = _interopRequireDefault(__webpack_require__("b06d"));

var _graph = _interopRequireDefault(__webpack_require__("eb53"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @description           Class of CRender
 * @param {Object} canvas Canvas DOM
 * @return {CRender}      Instance of CRender
 */
var CRender = function CRender(canvas) {
  (0, _classCallCheck2["default"])(this, CRender);

  if (!canvas) {
    console.error('CRender Missing parameters!');
    return;
  }

  var ctx = canvas.getContext('2d');
  var clientWidth = canvas.clientWidth,
      clientHeight = canvas.clientHeight;
  var area = [clientWidth, clientHeight];
  canvas.setAttribute('width', clientWidth);
  canvas.setAttribute('height', clientHeight);
  /**
   * @description Context of the canvas
   * @type {Object}
   * @example ctx = canvas.getContext('2d')
   */

  this.ctx = ctx;
  /**
   * @description Width and height of the canvas
   * @type {Array}
   * @example area = [300，100]
   */

  this.area = area;
  /**
   * @description Whether render is in animation rendering
   * @type {Boolean}
   * @example animationStatus = true|false
   */

  this.animationStatus = false;
  /**
   * @description Added graph
   * @type {[Graph]}
   * @example graphs = [Graph, Graph, ...]
   */

  this.graphs = [];
  /**
   * @description Color plugin
   * @type {Object}
   * @link https://github.com/jiaming743/color
   */

  this.color = _color["default"];
  /**
   * @description Bezier Curve plugin
   * @type {Object}
   * @link https://github.com/jiaming743/BezierCurve
   */

  this.bezierCurve = _bezierCurve["default"]; // bind event handler

  canvas.addEventListener('mousedown', mouseDown.bind(this));
  canvas.addEventListener('mousemove', mouseMove.bind(this));
  canvas.addEventListener('mouseup', mouseUp.bind(this));
};
/**
 * @description        Clear canvas drawing area
 * @return {Undefined} Void
 */


exports["default"] = CRender;

CRender.prototype.clearArea = function () {
  var _this$ctx;

  var area = this.area;

  (_this$ctx = this.ctx).clearRect.apply(_this$ctx, [0, 0].concat((0, _toConsumableArray2["default"])(area)));
};
/**
 * @description           Add graph to render
 * @param {Object} config Graph configuration
 * @return {Graph}        Graph instance
 */


CRender.prototype.add = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = config.name;

  if (!name) {
    console.error('add Missing parameters!');
    return;
  }

  var graphConfig = _graphs["default"].get(name);

  if (!graphConfig) {
    console.warn('No corresponding graph configuration found!');
    return;
  }

  var graph = new _graph["default"](graphConfig, config);
  if (!graph.validator(graph)) return;
  graph.render = this;
  this.graphs.push(graph);
  this.sortGraphsByIndex();
  this.drawAllGraph();
  return graph;
};
/**
 * @description Sort the graph by index
 * @return {Undefined} Void
 */


CRender.prototype.sortGraphsByIndex = function () {
  var graphs = this.graphs;
  graphs.sort(function (a, b) {
    if (a.index > b.index) return 1;
    if (a.index === b.index) return 0;
    if (a.index < b.index) return -1;
  });
};
/**
 * @description         Delete graph in render
 * @param {Graph} graph The graph to be deleted
 * @return {Undefined}  Void
 */


CRender.prototype.delGraph = function (graph) {
  if (typeof graph.delProcessor !== 'function') return;
  graph.delProcessor(this);
  this.graphs = this.graphs.filter(function (graph) {
    return graph;
  });
  this.drawAllGraph();
};
/**
 * @description        Delete all graph in render
 * @return {Undefined} Void
 */


CRender.prototype.delAllGraph = function () {
  var _this = this;

  this.graphs.forEach(function (graph) {
    return graph.delProcessor(_this);
  });
  this.graphs = this.graphs.filter(function (graph) {
    return graph;
  });
  this.drawAllGraph();
};
/**
 * @description        Draw all the graphs in the render
 * @return {Undefined} Void
 */


CRender.prototype.drawAllGraph = function () {
  var _this2 = this;

  this.clearArea();
  this.graphs.filter(function (graph) {
    return graph && graph.visible;
  }).forEach(function (graph) {
    return graph.drawProcessor(_this2, graph);
  });
};
/**
 * @description      Animate the graph whose animation queue is not empty
 *                   and the animationPause is equal to false
 * @return {Promise} Animation Promise
 */


CRender.prototype.launchAnimation = function () {
  var _this3 = this;

  var animationStatus = this.animationStatus;
  if (animationStatus) return;
  this.animationStatus = true;
  return new Promise(function (resolve) {
    animation.call(_this3, function () {
      _this3.animationStatus = false;
      resolve();
    }, Date.now());
  });
};
/**
 * @description Try to animate every graph
 * @param {Function} callback Callback in animation end
 * @param {Number} timeStamp  Time stamp of animation start
 * @return {Undefined} Void
 */


function animation(callback, timeStamp) {
  var graphs = this.graphs;

  if (!animationAble(graphs)) {
    callback();
    return;
  }

  graphs.forEach(function (graph) {
    return graph.turnNextAnimationFrame(timeStamp);
  });
  this.drawAllGraph();
  requestAnimationFrame(animation.bind(this, callback, timeStamp));
}
/**
 * @description Find if there are graph that can be animated
 * @param {[Graph]} graphs
 * @return {Boolean}
 */


function animationAble(graphs) {
  return graphs.find(function (graph) {
    return !graph.animationPause && graph.animationFrameState.length;
  });
}
/**
 * @description Handler of CRender mousedown event
 * @return {Undefined} Void
 */


function mouseDown(e) {
  var graphs = this.graphs;
  var hoverGraph = graphs.find(function (graph) {
    return graph.status === 'hover';
  });
  if (!hoverGraph) return;
  hoverGraph.status = 'active';
}
/**
 * @description Handler of CRender mousemove event
 * @return {Undefined} Void
 */


function mouseMove(e) {
  var offsetX = e.offsetX,
      offsetY = e.offsetY;
  var position = [offsetX, offsetY];
  var graphs = this.graphs;
  var activeGraph = graphs.find(function (graph) {
    return graph.status === 'active' || graph.status === 'drag';
  });

  if (activeGraph) {
    if (!activeGraph.drag) return;

    if (typeof activeGraph.move !== 'function') {
      console.error('No move method is provided, cannot be dragged!');
      return;
    }

    activeGraph.moveProcessor(e);
    activeGraph.status = 'drag';
    return;
  }

  var hoverGraph = graphs.find(function (graph) {
    return graph.status === 'hover';
  });
  var hoverAbleGraphs = graphs.filter(function (graph) {
    return graph.hover && (typeof graph.hoverCheck === 'function' || graph.hoverRect);
  });
  var hoveredGraph = hoverAbleGraphs.find(function (graph) {
    return graph.hoverCheckProcessor(position, graph);
  });

  if (hoveredGraph) {
    document.body.style.cursor = hoveredGraph.style.hoverCursor;
  } else {
    document.body.style.cursor = 'default';
  }

  var hoverGraphMouseOuterIsFun = false,
      hoveredGraphMouseEnterIsFun = false;
  if (hoverGraph) hoverGraphMouseOuterIsFun = typeof hoverGraph.mouseOuter === 'function';
  if (hoveredGraph) hoveredGraphMouseEnterIsFun = typeof hoveredGraph.mouseEnter === 'function';
  if (!hoveredGraph && !hoverGraph) return;

  if (!hoveredGraph && hoverGraph) {
    if (hoverGraphMouseOuterIsFun) hoverGraph.mouseOuter(e, hoverGraph);
    hoverGraph.status = 'static';
    return;
  }

  if (hoveredGraph && hoveredGraph === hoverGraph) return;

  if (hoveredGraph && !hoverGraph) {
    if (hoveredGraphMouseEnterIsFun) hoveredGraph.mouseEnter(e, hoveredGraph);
    hoveredGraph.status = 'hover';
    return;
  }

  if (hoveredGraph && hoverGraph && hoveredGraph !== hoverGraph) {
    if (hoverGraphMouseOuterIsFun) hoverGraph.mouseOuter(e, hoverGraph);
    hoverGraph.status = 'static';
    if (hoveredGraphMouseEnterIsFun) hoveredGraph.mouseEnter(e, hoveredGraph);
    hoveredGraph.status = 'hover';
  }
}
/**
 * @description Handler of CRender mouseup event
 * @return {Undefined} Void
 */


function mouseUp(e) {
  var graphs = this.graphs;
  var activeGraph = graphs.find(function (graph) {
    return graph.status === 'active';
  });
  var dragGraph = graphs.find(function (graph) {
    return graph.status === 'drag';
  });
  if (activeGraph && typeof activeGraph.click === 'function') activeGraph.click(e, activeGraph);
  graphs.forEach(function (graph) {
    return graph && (graph.status = 'static');
  });
  if (activeGraph) activeGraph.status = 'hover';
  if (dragGraph) dragGraph.status = 'hover';
}
/**
 * @description         Clone Graph
 * @param {Graph} graph The target to be cloned
 * @return {Graph}      Cloned graph
 */


CRender.prototype.clone = function (graph) {
  var style = graph.style.getStyle();

  var clonedGraph = _objectSpread({}, graph, {
    style: style
  });

  delete clonedGraph.render;
  clonedGraph = (0, _util.deepClone)(clonedGraph, true);
  return this.add(clonedGraph);
};

/***/ }),

/***/ "873c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = title;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _updater = __webpack_require__("18ad");

var _util = __webpack_require__("5557");

var _config = __webpack_require__("9d85");

var _util2 = __webpack_require__("becb");

function title(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var title = [];

  if (option.title) {
    title[0] = (0, _util2.deepMerge)((0, _util.deepClone)(_config.titleConfig, true), option.title);
  }

  (0, _updater.doUpdate)({
    chart: chart,
    series: title,
    key: 'title',
    getGraphConfig: getTitleConfig
  });
}

function getTitleConfig(titleItem, updater) {
  var animationCurve = _config.titleConfig.animationCurve,
      animationFrame = _config.titleConfig.animationFrame,
      rLevel = _config.titleConfig.rLevel;
  var shape = getTitleShape(titleItem, updater);
  var style = getTitleStyle(titleItem);
  return [{
    name: 'text',
    index: rLevel,
    visible: titleItem.show,
    animationCurve: animationCurve,
    animationFrame: animationFrame,
    shape: shape,
    style: style
  }];
}

function getTitleShape(titleItem, updater) {
  var offset = titleItem.offset,
      text = titleItem.text;
  var _updater$chart$gridAr = updater.chart.gridArea,
      x = _updater$chart$gridAr.x,
      y = _updater$chart$gridAr.y,
      w = _updater$chart$gridAr.w;

  var _offset = (0, _slicedToArray2["default"])(offset, 2),
      ox = _offset[0],
      oy = _offset[1];

  return {
    content: text,
    position: [x + w / 2 + ox, y + oy]
  };
}

function getTitleStyle(titleItem) {
  var style = titleItem.style;
  return style;
}

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "887c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleConfig = void 0;
var titleConfig = {
  /**
   * @description Whether to display title
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Title text
   * @type {String}
   * @default text = ''
   */
  text: '',

  /**
   * @description Title offset
   * @type {Array}
   * @default offset = [0, -20]
   */
  offset: [0, -20],

  /**
   * @description Title default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  style: {
    fill: '#333',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    textBaseline: 'bottom'
  },

  /**
   * @description Title render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 20
   */
  rLevel: 20,

  /**
   * @description Title animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Title animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.titleConfig = titleConfig;

/***/ }),

/***/ "8a1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeColor = mergeColor;

var _config = __webpack_require__("9d85");

var _util = __webpack_require__("5557");

var _util2 = __webpack_require__("becb");

function mergeColor(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultColor = (0, _util.deepClone)(_config.colorConfig, true);
  var color = option.color,
      series = option.series;
  if (!series) series = [];
  if (!color) color = [];
  option.color = color = (0, _util2.deepMerge)(defaultColor, color);
  if (!series.length) return;
  var colorNum = color.length;
  series.forEach(function (item, i) {
    if (item.color) return;
    item.color = color[i % colorNum];
  });
  var pies = series.filter(function (_ref) {
    var type = _ref.type;
    return type === 'pie';
  });
  pies.forEach(function (pie) {
    return pie.data.forEach(function (di, i) {
      return di.color = color[i % colorNum];
    });
  });
  var gauges = series.filter(function (_ref2) {
    var type = _ref2.type;
    return type === 'gauge';
  });
  gauges.forEach(function (gauge) {
    return gauge.data.forEach(function (di, i) {
      return di.color = color[i % colorNum];
    });
  });
  var barWithIndependentColor = series.filter(function (_ref3) {
    var type = _ref3.type,
        independentColor = _ref3.independentColor;
    return type === 'bar' && independentColor;
  });
  barWithIndependentColor.forEach(function (bar) {
    if (bar.independentColors) return;
    bar.independentColors = color;
  });
}

/***/ }),

/***/ "8f47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
exports.injectNewCurve = injectNewCurve;
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _curves = _interopRequireDefault(__webpack_require__("df83"));

var defaultTransitionBC = 'linear';
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the easing curve
 * @param {String|Array} tBC               Easing curve name or data
 * @param {Number|Array|Object} startState Animation start state
 * @param {Number|Array|Object} endState   Animation end state
 * @param {Number} frameNum                Number of Animation frames
 * @param {Boolean} deep                   Whether to use recursive mode
 * @return {Array|Boolean} State of each frame of the animation (Invalid input will return false)
 */

function transition(tBC) {
  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
  var deep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (!checkParams.apply(void 0, arguments)) return false;

  try {
    // Get the transition bezier curve
    var bezierCurve = getBezierCurve(tBC); // Get the progress of each frame state

    var frameStateProgress = getFrameStateProgress(bezierCurve, frameNum); // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.

    if (!deep || typeof endState === 'number') return getTransitionState(startState, endState, frameStateProgress);
    return recursionTransitionState(startState, endState, frameStateProgress);
  } catch (_unused) {
    console.warn('Transition parameter may be abnormal!');
    return [endState];
  }
}
/**
 * @description Check if the parameters are legal
 * @param {String} tBC      Name of transition bezier curve
 * @param {Any} startState  Transition start state
 * @param {Any} endState    Transition end state
 * @param {Number} frameNum Number of transition frames
 * @return {Boolean} Is the parameter legal
 */


function checkParams(tBC) {
  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;

  if (!tBC || startState === false || endState === false || !frameNum) {
    console.error('transition: Missing Parameters!');
    return false;
  }

  if ((0, _typeof2["default"])(startState) !== (0, _typeof2["default"])(endState)) {
    console.error('transition: Inconsistent Status Types!');
    return false;
  }

  var stateType = (0, _typeof2["default"])(endState);

  if (stateType === 'string' || stateType === 'boolean' || !tBC.length) {
    console.error('transition: Unsupported Data Type of State!');
    return false;
  }

  if (!_curves["default"].has(tBC) && !(tBC instanceof Array)) {
    console.warn('transition: Transition curve not found, default curve will be used!');
  }

  return true;
}
/**
 * @description Get the transition bezier curve
 * @param {String} tBC Name of transition bezier curve
 * @return {Array} Bezier curve data
 */


function getBezierCurve(tBC) {
  var bezierCurve = '';

  if (_curves["default"].has(tBC)) {
    bezierCurve = _curves["default"].get(tBC);
  } else if (tBC instanceof Array) {
    bezierCurve = tBC;
  } else {
    bezierCurve = _curves["default"].get(defaultTransitionBC);
  }

  return bezierCurve;
}
/**
 * @description Get the progress of each frame state
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} frameNum   Number of transition frames
 * @return {Array} Progress of each frame state
 */


function getFrameStateProgress(bezierCurve, frameNum) {
  var tMinus = 1 / (frameNum - 1);
  var tState = new Array(frameNum).fill(0).map(function (t, i) {
    return i * tMinus;
  });
  var frameState = tState.map(function (t) {
    return getFrameStateFromT(bezierCurve, t);
  });
  return frameState;
}
/**
 * @description Get the progress of the corresponding frame according to t
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} t          Current frame t
 * @return {Number} Progress of current frame
 */


function getFrameStateFromT(bezierCurve, t) {
  var tBezierCurvePoint = getBezierCurvePointFromT(bezierCurve, t);
  var bezierCurvePointT = getBezierCurvePointTFromReT(tBezierCurvePoint, t);
  return getBezierCurveTState(tBezierCurvePoint, bezierCurvePointT);
}
/**
 * @description Get the corresponding sub-curve according to t
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} t          Current frame t
 * @return {Array} Sub-curve of t
 */


function getBezierCurvePointFromT(bezierCurve, t) {
  var lastIndex = bezierCurve.length - 1;
  var begin = '',
      end = '';
  bezierCurve.findIndex(function (item, i) {
    if (i === lastIndex) return;
    begin = item;
    end = bezierCurve[i + 1];
    var currentMainPointX = begin[0][0];
    var nextMainPointX = end[0][0];
    return t >= currentMainPointX && t < nextMainPointX;
  });
  var p0 = begin[0];
  var p1 = begin[2] || begin[0];
  var p2 = end[1] || end[0];
  var p3 = end[0];
  return [p0, p1, p2, p3];
}
/**
 * @description Get local t based on t and sub-curve
 * @param {Array} bezierCurve Sub-curve
 * @param {Number} t          Current frame t
 * @return {Number} local t of sub-curve
 */


function getBezierCurvePointTFromReT(bezierCurve, t) {
  var reBeginX = bezierCurve[0][0];
  var reEndX = bezierCurve[3][0];
  var xMinus = reEndX - reBeginX;
  var tMinus = t - reBeginX;
  return tMinus / xMinus;
}
/**
 * @description Get the curve progress of t
 * @param {Array} bezierCurve Sub-curve
 * @param {Number} t          Current frame t
 * @return {Number} Progress of current frame
 */


function getBezierCurveTState(_ref, t) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 4),
      _ref2$ = (0, _slicedToArray2["default"])(_ref2[0], 2),
      p0 = _ref2$[1],
      _ref2$2 = (0, _slicedToArray2["default"])(_ref2[1], 2),
      p1 = _ref2$2[1],
      _ref2$3 = (0, _slicedToArray2["default"])(_ref2[2], 2),
      p2 = _ref2$3[1],
      _ref2$4 = (0, _slicedToArray2["default"])(_ref2[3], 2),
      p3 = _ref2$4[1];

  var pow = Math.pow;
  var tMinus = 1 - t;
  var result1 = p0 * pow(tMinus, 3);
  var result2 = 3 * p1 * t * pow(tMinus, 2);
  var result3 = 3 * p2 * pow(t, 2) * tMinus;
  var result4 = p3 * pow(t, 3);
  return 1 - (result1 + result2 + result3 + result4);
}
/**
 * @description Get transition state according to frame progress
 * @param {Any} startState   Transition start state
 * @param {Any} endState     Transition end state
 * @param {Array} frameState Frame state progress
 * @return {Array} Transition frame state
 */


function getTransitionState(begin, end, frameState) {
  var stateType = 'object';
  if (typeof begin === 'number') stateType = 'number';
  if (begin instanceof Array) stateType = 'array';
  if (stateType === 'number') return getNumberTransitionState(begin, end, frameState);
  if (stateType === 'array') return getArrayTransitionState(begin, end, frameState);
  if (stateType === 'object') return getObjectTransitionState(begin, end, frameState);
  return frameState.map(function (t) {
    return end;
  });
}
/**
 * @description Get the transition data of the number type
 * @param {Number} startState Transition start state
 * @param {Number} endState   Transition end state
 * @param {Array} frameState  Frame state progress
 * @return {Array} Transition frame state
 */


function getNumberTransitionState(begin, end, frameState) {
  var minus = end - begin;
  return frameState.map(function (s) {
    return begin + minus * s;
  });
}
/**
 * @description Get the transition data of the array type
 * @param {Array} startState Transition start state
 * @param {Array} endState   Transition end state
 * @param {Array} frameState Frame state progress
 * @return {Array} Transition frame state
 */


function getArrayTransitionState(begin, end, frameState) {
  var minus = end.map(function (v, i) {
    if (typeof v !== 'number') return false;
    return v - begin[i];
  });
  return frameState.map(function (s) {
    return minus.map(function (v, i) {
      if (v === false) return end[i];
      return begin[i] + v * s;
    });
  });
}
/**
 * @description Get the transition data of the object type
 * @param {Object} startState Transition start state
 * @param {Object} endState   Transition end state
 * @param {Array} frameState  Frame state progress
 * @return {Array} Transition frame state
 */


function getObjectTransitionState(begin, end, frameState) {
  var keys = Object.keys(end);
  var beginValue = keys.map(function (k) {
    return begin[k];
  });
  var endValue = keys.map(function (k) {
    return end[k];
  });
  var arrayState = getArrayTransitionState(beginValue, endValue, frameState);
  return arrayState.map(function (item) {
    var frameData = {};
    item.forEach(function (v, i) {
      return frameData[keys[i]] = v;
    });
    return frameData;
  });
}
/**
 * @description Get the transition state data by recursion
 * @param {Array|Object} startState Transition start state
 * @param {Array|Object} endState   Transition end state
 * @param {Array} frameState        Frame state progress
 * @return {Array} Transition frame state
 */


function recursionTransitionState(begin, end, frameState) {
  var state = getTransitionState(begin, end, frameState);

  var _loop = function _loop(key) {
    var bTemp = begin[key];
    var eTemp = end[key];
    if ((0, _typeof2["default"])(eTemp) !== 'object') return "continue";
    var data = recursionTransitionState(bTemp, eTemp, frameState);
    state.forEach(function (fs, i) {
      return fs[key] = data[i];
    });
  };

  for (var key in end) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return state;
}
/**
 * @description Inject new curve into curves as config
 * @param {Any} key     The key of curve
 * @param {Array} curve Bezier curve data
 * @return {Undefined} No return
 */


function injectNewCurve(key, curve) {
  if (!key || !curve) {
    console.error('InjectNewCurve Missing Parameters!');
    return;
  }

  _curves["default"].set(key, curve);
}

var _default = transition;
exports["default"] = _default;

/***/ }),

/***/ "9523":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "970b":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "9886":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CRender", {
  enumerable: true,
  get: function get() {
    return _crender["default"];
  }
});
Object.defineProperty(exports, "extendNewGraph", {
  enumerable: true,
  get: function get() {
    return _graphs.extendNewGraph;
  }
});
exports["default"] = void 0;

var _crender = _interopRequireDefault(__webpack_require__("85c4"));

var _graphs = __webpack_require__("b06d");

var _default = _crender["default"];
exports["default"] = _default;

/***/ }),

/***/ "9967":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Header/index.vue?vue&type=template&id=2aed713c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"virtual_factory_detail_header"},[_c('div',{staticClass:"virtual_factory_detail_header_main"},[_c('div',{staticClass:"virtual_factory_detail_header_main_left"},[_vm._v(" "+_vm._s(_vm.time)+" ")]),_c('div',{staticClass:"virtual_factory_detail_header_main_center"},[_c('span',[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"virtual_factory_detail_header_main_right"},[_vm._t("header_right")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Header/index.vue?vue&type=template&id=2aed713c&scoped=true&

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("5a0c");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
    name: 'Header',
    props: {
        title: {
            type: String,
            default: '',
        },
        element: {
            type: Object,
            default() {
                return {
                }
            },
        },
    },
    data() {
        return {
            time: '',
        }
    },
    mounted() {
        this.time = this.timeFormat()
    },
    methods: {
        timeFormat() {
            const now = new Date()
            return (
        `${dayjs_min_default()(now).year()}年${dayjs_min_default()(now).month() + 1}月${dayjs_min_default()(
            now,
        ).date()}日`
        + '    '
        + `${this.getWeekDay(dayjs_min_default()(now).day())}`
            )
        },
        getWeekDay(val) {
            return [
                '星期日',
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
            ][val]
        },
    },
});

// CONCATENATED MODULE: ./packages/Header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Header/index.vue?vue&type=style&index=0&id=2aed713c&lang=scss&scoped=true&
var Headervue_type_style_index_0_id_2aed713c_lang_scss_scoped_true_ = __webpack_require__("26b4");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Header/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2aed713c",
  null
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9ab4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b06":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b0f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b42":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "9d04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d85":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeDefaultConfig = changeDefaultConfig;
Object.defineProperty(exports, "colorConfig", {
  enumerable: true,
  get: function get() {
    return _color.colorConfig;
  }
});
Object.defineProperty(exports, "gridConfig", {
  enumerable: true,
  get: function get() {
    return _grid.gridConfig;
  }
});
Object.defineProperty(exports, "xAxisConfig", {
  enumerable: true,
  get: function get() {
    return _axis.xAxisConfig;
  }
});
Object.defineProperty(exports, "yAxisConfig", {
  enumerable: true,
  get: function get() {
    return _axis.yAxisConfig;
  }
});
Object.defineProperty(exports, "titleConfig", {
  enumerable: true,
  get: function get() {
    return _title.titleConfig;
  }
});
Object.defineProperty(exports, "lineConfig", {
  enumerable: true,
  get: function get() {
    return _line.lineConfig;
  }
});
Object.defineProperty(exports, "barConfig", {
  enumerable: true,
  get: function get() {
    return _bar.barConfig;
  }
});
Object.defineProperty(exports, "pieConfig", {
  enumerable: true,
  get: function get() {
    return _pie.pieConfig;
  }
});
Object.defineProperty(exports, "radarAxisConfig", {
  enumerable: true,
  get: function get() {
    return _radarAxis.radarAxisConfig;
  }
});
Object.defineProperty(exports, "radarConfig", {
  enumerable: true,
  get: function get() {
    return _radar.radarConfig;
  }
});
Object.defineProperty(exports, "gaugeConfig", {
  enumerable: true,
  get: function get() {
    return _gauge.gaugeConfig;
  }
});
Object.defineProperty(exports, "legendConfig", {
  enumerable: true,
  get: function get() {
    return _legend.legendConfig;
  }
});
exports.keys = void 0;

var _color = __webpack_require__("f3cb");

var _grid = __webpack_require__("49bc");

var _axis = __webpack_require__("c930");

var _title = __webpack_require__("887c");

var _line = __webpack_require__("6eb9");

var _bar = __webpack_require__("f111");

var _pie = __webpack_require__("222a");

var _radarAxis = __webpack_require__("0cd4");

var _radar = __webpack_require__("3938");

var _gauge = __webpack_require__("cc6d");

var _legend = __webpack_require__("60f1");

var _util = __webpack_require__("becb");

var allConfig = {
  colorConfig: _color.colorConfig,
  gridConfig: _grid.gridConfig,
  xAxisConfig: _axis.xAxisConfig,
  yAxisConfig: _axis.yAxisConfig,
  titleConfig: _title.titleConfig,
  lineConfig: _line.lineConfig,
  barConfig: _bar.barConfig,
  pieConfig: _pie.pieConfig,
  radarAxisConfig: _radarAxis.radarAxisConfig,
  radarConfig: _radar.radarConfig,
  gaugeConfig: _gauge.gaugeConfig,
  legendConfig: _legend.legendConfig
};
/**
 * @description Change default configuration
 * @param {String} key          Configuration key
 * @param {Object|Array} config Your config
 * @return {Undefined} No return
 */

function changeDefaultConfig(key, config) {
  if (!allConfig["".concat(key, "Config")]) {
    console.warn('Change default config Error - Invalid key!');
    return;
  }

  (0, _util.deepMerge)(allConfig["".concat(key, "Config")], config);
}

var keys = ['color', 'title', 'legend', 'xAxis', 'yAxis', 'grid', 'radarAxis', 'line', 'bar', 'pie', 'radar', 'gauge'];
exports.keys = keys;

/***/ }),

/***/ "a143":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radarAxis = radarAxis;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("9523"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _updater = __webpack_require__("18ad");

var _index = __webpack_require__("9d85");

var _util = __webpack_require__("5557");

var _util2 = __webpack_require__("becb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function radarAxis(chart) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var radar = option.radar;
  var radarAxis = [];

  if (radar) {
    radarAxis = mergeRadarAxisDefaultConfig(radar);
    radarAxis = calcRadarAxisCenter(radarAxis, chart);
    radarAxis = calcRadarAxisRingRadius(radarAxis, chart);
    radarAxis = calcRadarAxisLinePosition(radarAxis);
    radarAxis = calcRadarAxisAreaRadius(radarAxis);
    radarAxis = calcRadarAxisLabelPosition(radarAxis);
    radarAxis = [radarAxis];
  }

  var radarAxisForUpdate = radarAxis;
  if (radarAxis.length && !radarAxis[0].show) radarAxisForUpdate = [];
  (0, _updater.doUpdate)({
    chart: chart,
    series: radarAxisForUpdate,
    key: 'radarAxisSplitArea',
    getGraphConfig: getSplitAreaConfig,
    beforeUpdate: beforeUpdateSplitArea,
    beforeChange: beforeChangeSplitArea
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: radarAxisForUpdate,
    key: 'radarAxisSplitLine',
    getGraphConfig: getSplitLineConfig,
    beforeUpdate: beforeUpdateSplitLine,
    beforeChange: beforeChangeSplitLine
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: radarAxisForUpdate,
    key: 'radarAxisLine',
    getGraphConfig: getAxisLineConfig
  });
  (0, _updater.doUpdate)({
    chart: chart,
    series: radarAxisForUpdate,
    key: 'radarAxisLable',
    getGraphConfig: getAxisLabelConfig
  });
  chart.radarAxis = radarAxis[0];
}

function mergeRadarAxisDefaultConfig(radar) {
  return (0, _util2.deepMerge)((0, _util.deepClone)(_index.radarAxisConfig), radar);
}

function calcRadarAxisCenter(radarAxis, chart) {
  var area = chart.render.area;
  var center = radarAxis.center;
  radarAxis.centerPos = center.map(function (v, i) {
    if (typeof v === 'number') return v;
    return parseInt(v) / 100 * area[i];
  });
  return radarAxis;
}

function calcRadarAxisRingRadius(radarAxis, chart) {
  var area = chart.render.area;
  var splitNum = radarAxis.splitNum,
      radius = radarAxis.radius;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
  if (typeof radius !== 'number') radius = parseInt(radius) / 100 * maxRadius;
  var splitGap = radius / splitNum;
  radarAxis.ringRadius = new Array(splitNum).fill(0).map(function (foo, i) {
    return splitGap * (i + 1);
  });
  radarAxis.radius = radius;
  return radarAxis;
}

function calcRadarAxisLinePosition(radarAxis) {
  var indicator = radarAxis.indicator,
      centerPos = radarAxis.centerPos,
      radius = radarAxis.radius,
      startAngle = radarAxis.startAngle;
  var fullAngle = Math.PI * 2;
  var indicatorNum = indicator.length;
  var indicatorGap = fullAngle / indicatorNum;
  var angles = new Array(indicatorNum).fill(0).map(function (foo, i) {
    return indicatorGap * i + startAngle;
  });
  radarAxis.axisLineAngles = angles;
  radarAxis.axisLinePosition = angles.map(function (g) {
    return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([radius, g]));
  });
  return radarAxis;
}

function calcRadarAxisAreaRadius(radarAxis) {
  var ringRadius = radarAxis.ringRadius;
  var subRadius = ringRadius[0] / 2;
  radarAxis.areaRadius = ringRadius.map(function (r) {
    return r - subRadius;
  });
  return radarAxis;
}

function calcRadarAxisLabelPosition(radarAxis) {
  var axisLineAngles = radarAxis.axisLineAngles,
      centerPos = radarAxis.centerPos,
      radius = radarAxis.radius,
      axisLabel = radarAxis.axisLabel;
  radius += axisLabel.labelGap;
  radarAxis.axisLabelPosition = axisLineAngles.map(function (angle) {
    return _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([radius, angle]));
  });
  return radarAxis;
}

function getSplitAreaConfig(radarAxis) {
  var areaRadius = radarAxis.areaRadius,
      polygon = radarAxis.polygon,
      animationCurve = radarAxis.animationCurve,
      animationFrame = radarAxis.animationFrame,
      rLevel = radarAxis.rLevel;
  var name = polygon ? 'regPolygon' : 'ring';
  return areaRadius.map(function (foo, i) {
    return {
      name: name,
      index: rLevel,
      visible: radarAxis.splitArea.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getSplitAreaShape(radarAxis, i),
      style: getSplitAreaStyle(radarAxis, i)
    };
  });
}

function getSplitAreaShape(radarAxis, i) {
  var polygon = radarAxis.polygon,
      areaRadius = radarAxis.areaRadius,
      indicator = radarAxis.indicator,
      centerPos = radarAxis.centerPos;
  var indicatorNum = indicator.length;
  var shape = {
    rx: centerPos[0],
    ry: centerPos[1],
    r: areaRadius[i]
  };
  if (polygon) shape.side = indicatorNum;
  return shape;
}

function getSplitAreaStyle(radarAxis, i) {
  var splitArea = radarAxis.splitArea,
      ringRadius = radarAxis.ringRadius,
      axisLineAngles = radarAxis.axisLineAngles,
      polygon = radarAxis.polygon,
      centerPos = radarAxis.centerPos;
  var color = splitArea.color,
      style = splitArea.style;
  style = _objectSpread({
    fill: 'rgba(0, 0, 0, 0)'
  }, style);
  var lineWidth = ringRadius[0] - 0;

  if (polygon) {
    var point1 = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[0]]));

    var point2 = _util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[1]]));

    lineWidth = (0, _util2.getPointToLineDistance)(centerPos, point1, point2);
  }

  style = (0, _util2.deepMerge)((0, _util.deepClone)(style, true), {
    lineWidth: lineWidth
  });
  if (!color.length) return style;
  var colorNum = color.length;
  return (0, _util2.deepMerge)(style, {
    stroke: color[i % colorNum]
  });
}

function beforeUpdateSplitArea(graphs, radarAxis, i, updater) {
  var cache = graphs[i];
  if (!cache) return;
  var render = updater.chart.render;
  var polygon = radarAxis.polygon;
  var name = cache[0].name;
  var currentName = polygon ? 'regPolygon' : 'ring';
  var delAll = currentName !== name;
  if (!delAll) return;
  cache.forEach(function (g) {
    return render.delGraph(g);
  });
  graphs[i] = null;
}

function beforeChangeSplitArea(graph, config) {
  var side = config.shape.side;
  if (typeof side !== 'number') return;
  graph.shape.side = side;
}

function getSplitLineConfig(radarAxis) {
  var ringRadius = radarAxis.ringRadius,
      polygon = radarAxis.polygon,
      animationCurve = radarAxis.animationCurve,
      animationFrame = radarAxis.animationFrame,
      rLevel = radarAxis.rLevel;
  var name = polygon ? 'regPolygon' : 'ring';
  return ringRadius.map(function (foo, i) {
    return {
      name: name,
      index: rLevel,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      visible: radarAxis.splitLine.show,
      shape: getSplitLineShape(radarAxis, i),
      style: getSplitLineStyle(radarAxis, i)
    };
  });
}

function getSplitLineShape(radarAxis, i) {
  var ringRadius = radarAxis.ringRadius,
      centerPos = radarAxis.centerPos,
      indicator = radarAxis.indicator,
      polygon = radarAxis.polygon;
  var shape = {
    rx: centerPos[0],
    ry: centerPos[1],
    r: ringRadius[i]
  };
  var indicatorNum = indicator.length;
  if (polygon) shape.side = indicatorNum;
  return shape;
}

function getSplitLineStyle(radarAxis, i) {
  var splitLine = radarAxis.splitLine;
  var color = splitLine.color,
      style = splitLine.style;
  style = _objectSpread({
    fill: 'rgba(0, 0, 0, 0)'
  }, style);
  if (!color.length) return style;
  var colorNum = color.length;
  return (0, _util2.deepMerge)(style, {
    stroke: color[i % colorNum]
  });
}

function beforeUpdateSplitLine(graphs, radarAxis, i, updater) {
  var cache = graphs[i];
  if (!cache) return;
  var render = updater.chart.render;
  var polygon = radarAxis.polygon;
  var name = cache[0].name;
  var currenName = polygon ? 'regPolygon' : 'ring';
  var delAll = currenName !== name;
  if (!delAll) return;
  cache.forEach(function (g) {
    return render.delGraph(g);
  });
  graphs[i] = null;
}

function beforeChangeSplitLine(graph, config) {
  var side = config.shape.side;
  if (typeof side !== 'number') return;
  graph.shape.side = side;
}

function getAxisLineConfig(radarAxis) {
  var axisLinePosition = radarAxis.axisLinePosition,
      animationCurve = radarAxis.animationCurve,
      animationFrame = radarAxis.animationFrame,
      rLevel = radarAxis.rLevel;
  return axisLinePosition.map(function (foo, i) {
    return {
      name: 'polyline',
      index: rLevel,
      visible: radarAxis.axisLine.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getAxisLineShape(radarAxis, i),
      style: getAxisLineStyle(radarAxis, i)
    };
  });
}

function getAxisLineShape(radarAxis, i) {
  var centerPos = radarAxis.centerPos,
      axisLinePosition = radarAxis.axisLinePosition;
  var points = [centerPos, axisLinePosition[i]];
  return {
    points: points
  };
}

function getAxisLineStyle(radarAxis, i) {
  var axisLine = radarAxis.axisLine;
  var color = axisLine.color,
      style = axisLine.style;
  if (!color.length) return style;
  var colorNum = color.length;
  return (0, _util2.deepMerge)(style, {
    stroke: color[i % colorNum]
  });
}

function getAxisLabelConfig(radarAxis) {
  var axisLabelPosition = radarAxis.axisLabelPosition,
      animationCurve = radarAxis.animationCurve,
      animationFrame = radarAxis.animationFrame,
      rLevel = radarAxis.rLevel;
  return axisLabelPosition.map(function (foo, i) {
    return {
      name: 'text',
      index: rLevel,
      visible: radarAxis.axisLabel.show,
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getAxisLableShape(radarAxis, i),
      style: getAxisLableStyle(radarAxis, i)
    };
  });
}

function getAxisLableShape(radarAxis, i) {
  var axisLabelPosition = radarAxis.axisLabelPosition,
      indicator = radarAxis.indicator;
  return {
    content: indicator[i].name,
    position: axisLabelPosition[i]
  };
}

function getAxisLableStyle(radarAxis, i) {
  var axisLabel = radarAxis.axisLabel,
      _radarAxis$centerPos = (0, _slicedToArray2["default"])(radarAxis.centerPos, 2),
      x = _radarAxis$centerPos[0],
      y = _radarAxis$centerPos[1],
      axisLabelPosition = radarAxis.axisLabelPosition;

  var color = axisLabel.color,
      style = axisLabel.style;

  var _axisLabelPosition$i = (0, _slicedToArray2["default"])(axisLabelPosition[i], 2),
      labelXpos = _axisLabelPosition$i[0],
      labelYPos = _axisLabelPosition$i[1];

  var textAlign = labelXpos > x ? 'left' : 'right';
  var textBaseline = labelYPos > y ? 'top' : 'bottom';
  style = (0, _util2.deepMerge)({
    textAlign: textAlign,
    textBaseline: textBaseline
  }, style);
  if (!color.length) return style;
  var colorNum = color.length;
  return (0, _util2.deepMerge)(style, {
    fill: color[i % colorNum]
  });
}

/***/ }),

/***/ "a157":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");


/***/ }),

/***/ "a736":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mergeColor", {
  enumerable: true,
  get: function get() {
    return _mergeColor.mergeColor;
  }
});
Object.defineProperty(exports, "title", {
  enumerable: true,
  get: function get() {
    return _title.title;
  }
});
Object.defineProperty(exports, "grid", {
  enumerable: true,
  get: function get() {
    return _grid.grid;
  }
});
Object.defineProperty(exports, "axis", {
  enumerable: true,
  get: function get() {
    return _axis.axis;
  }
});
Object.defineProperty(exports, "line", {
  enumerable: true,
  get: function get() {
    return _line.line;
  }
});
Object.defineProperty(exports, "bar", {
  enumerable: true,
  get: function get() {
    return _bar.bar;
  }
});
Object.defineProperty(exports, "pie", {
  enumerable: true,
  get: function get() {
    return _pie.pie;
  }
});
Object.defineProperty(exports, "radarAxis", {
  enumerable: true,
  get: function get() {
    return _radarAxis.radarAxis;
  }
});
Object.defineProperty(exports, "radar", {
  enumerable: true,
  get: function get() {
    return _radar.radar;
  }
});
Object.defineProperty(exports, "gauge", {
  enumerable: true,
  get: function get() {
    return _gauge.gauge;
  }
});
Object.defineProperty(exports, "legend", {
  enumerable: true,
  get: function get() {
    return _legend.legend;
  }
});

var _mergeColor = __webpack_require__("8a1d");

var _title = __webpack_require__("873c");

var _grid = __webpack_require__("46bb");

var _axis = __webpack_require__("0680");

var _line = __webpack_require__("252f");

var _bar = __webpack_require__("204e");

var _pie = __webpack_require__("729e");

var _radarAxis = __webpack_require__("a143");

var _radar = __webpack_require__("4eb1");

var _gauge = __webpack_require__("1f55");

var _legend = __webpack_require__("60f7");

/***/ }),

/***/ "abb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ "ae10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

/**
 * @description Abstract the polyline formed by N points into a set of bezier curve
 * @param {Array} polyline A set of points that make up a polyline
 * @param {Boolean} close  Closed curve
 * @param {Number} offsetA Smoothness
 * @param {Number} offsetB Smoothness
 * @return {Array|Boolean} A set of bezier curve (Invalid input will return false)
 */
function polylineToBezierCurve(polyline) {
  var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var offsetA = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;
  var offsetB = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.25;

  if (!(polyline instanceof Array)) {
    console.error('polylineToBezierCurve: Parameter polyline must be an array!');
    return false;
  }

  if (polyline.length <= 2) {
    console.error('polylineToBezierCurve: Converting to a curve requires at least 3 points!');
    return false;
  }

  var startPoint = polyline[0];
  var bezierCurveLineNum = polyline.length - 1;
  var bezierCurvePoints = new Array(bezierCurveLineNum).fill(0).map(function (foo, i) {
    return [].concat((0, _toConsumableArray2["default"])(getBezierCurveLineControlPoints(polyline, i, close, offsetA, offsetB)), [polyline[i + 1]]);
  });
  if (close) closeBezierCurve(bezierCurvePoints, startPoint);
  bezierCurvePoints.unshift(polyline[0]);
  return bezierCurvePoints;
}
/**
 * @description Get the control points of the Bezier curve
 * @param {Array} polyline A set of points that make up a polyline
 * @param {Number} index   The index of which get controls points's point in polyline
 * @param {Boolean} close  Closed curve
 * @param {Number} offsetA Smoothness
 * @param {Number} offsetB Smoothness
 * @return {Array} Control points
 */


function getBezierCurveLineControlPoints(polyline, index) {
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var offsetA = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.25;
  var offsetB = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.25;
  var pointNum = polyline.length;
  if (pointNum < 3 || index >= pointNum) return;
  var beforePointIndex = index - 1;
  if (beforePointIndex < 0) beforePointIndex = close ? pointNum + beforePointIndex : 0;
  var afterPointIndex = index + 1;
  if (afterPointIndex >= pointNum) afterPointIndex = close ? afterPointIndex - pointNum : pointNum - 1;
  var afterNextPointIndex = index + 2;
  if (afterNextPointIndex >= pointNum) afterNextPointIndex = close ? afterNextPointIndex - pointNum : pointNum - 1;
  var pointBefore = polyline[beforePointIndex];
  var pointMiddle = polyline[index];
  var pointAfter = polyline[afterPointIndex];
  var pointAfterNext = polyline[afterNextPointIndex];
  return [[pointMiddle[0] + offsetA * (pointAfter[0] - pointBefore[0]), pointMiddle[1] + offsetA * (pointAfter[1] - pointBefore[1])], [pointAfter[0] - offsetB * (pointAfterNext[0] - pointMiddle[0]), pointAfter[1] - offsetB * (pointAfterNext[1] - pointMiddle[1])]];
}
/**
 * @description Get the last curve of the closure
 * @param {Array} bezierCurve A set of sub-curve
 * @param {Array} startPoint  Start point
 * @return {Array} The last curve for closure
 */


function closeBezierCurve(bezierCurve, startPoint) {
  var firstSubCurve = bezierCurve[0];
  var lastSubCurve = bezierCurve.slice(-1)[0];
  bezierCurve.push([getSymmetryPoint(lastSubCurve[1], lastSubCurve[2]), getSymmetryPoint(firstSubCurve[0], startPoint), startPoint]);
  return bezierCurve;
}
/**
 * @description Get the symmetry point
 * @param {Array} point       Symmetric point
 * @param {Array} centerPoint Symmetric center
 * @return {Array} Symmetric point
 */


function getSymmetryPoint(point, centerPoint) {
  var _point = (0, _slicedToArray2["default"])(point, 2),
      px = _point[0],
      py = _point[1];

  var _centerPoint = (0, _slicedToArray2["default"])(centerPoint, 2),
      cx = _centerPoint[0],
      cy = _centerPoint[1];

  var minusX = cx - px;
  var minusY = cy - py;
  return [cx + minusX, cy + minusY];
}

var _default = polylineToBezierCurve;
exports["default"] = _default;

/***/ }),

/***/ "b06d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendNewGraph = extendNewGraph;
exports["default"] = exports.text = exports.bezierCurve = exports.smoothline = exports.polyline = exports.regPolygon = exports.sector = exports.arc = exports.ring = exports.rect = exports.ellipse = exports.circle = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("278c"));

var _bezierCurve2 = _interopRequireDefault(__webpack_require__("050c"));

var _util = __webpack_require__("5557");

var _canvas = __webpack_require__("e169");

var polylineToBezierCurve = _bezierCurve2["default"].polylineToBezierCurve,
    bezierCurveToPolyline = _bezierCurve2["default"].bezierCurveToPolyline;
var circle = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0
  },
  validator: function validator(_ref) {
    var shape = _ref.shape;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;

    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
      console.error('Circle shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref2, _ref3) {
    var ctx = _ref2.ctx;
    var shape = _ref3.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;
    ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref4) {
    var shape = _ref4.shape;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;
    return (0, _util.checkPointIsInCircle)(position, rx, ry, r);
  },
  setGraphCenter: function setGraphCenter(e, _ref5) {
    var shape = _ref5.shape,
        style = _ref5.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref6, _ref7) {
    var movementX = _ref6.movementX,
        movementY = _ref6.movementY;
    var shape = _ref7.shape;
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    });
  }
};
exports.circle = circle;
var ellipse = {
  shape: {
    rx: 0,
    ry: 0,
    hr: 0,
    vr: 0
  },
  validator: function validator(_ref8) {
    var shape = _ref8.shape;
    var rx = shape.rx,
        ry = shape.ry,
        hr = shape.hr,
        vr = shape.vr;

    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof hr !== 'number' || typeof vr !== 'number') {
      console.error('Ellipse shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref9, _ref10) {
    var ctx = _ref9.ctx;
    var shape = _ref10.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        hr = shape.hr,
        vr = shape.vr;
    ctx.ellipse(rx, ry, hr > 0 ? hr : 0.01, vr > 0 ? vr : 0.01, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref11) {
    var shape = _ref11.shape;
    var rx = shape.rx,
        ry = shape.ry,
        hr = shape.hr,
        vr = shape.vr;
    var a = Math.max(hr, vr);
    var b = Math.min(hr, vr);
    var c = Math.sqrt(a * a - b * b);
    var leftFocusPoint = [rx - c, ry];
    var rightFocusPoint = [rx + c, ry];
    var distance = (0, _util.getTwoPointDistance)(position, leftFocusPoint) + (0, _util.getTwoPointDistance)(position, rightFocusPoint);
    return distance <= 2 * a;
  },
  setGraphCenter: function setGraphCenter(e, _ref12) {
    var shape = _ref12.shape,
        style = _ref12.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref13, _ref14) {
    var movementX = _ref13.movementX,
        movementY = _ref13.movementY;
    var shape = _ref14.shape;
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    });
  }
};
exports.ellipse = ellipse;
var rect = {
  shape: {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  },
  validator: function validator(_ref15) {
    var shape = _ref15.shape;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;

    if (typeof x !== 'number' || typeof y !== 'number' || typeof w !== 'number' || typeof h !== 'number') {
      console.error('Rect shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref16, _ref17) {
    var ctx = _ref16.ctx;
    var shape = _ref17.shape;
    ctx.beginPath();
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref18) {
    var shape = _ref18.shape;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    return (0, _util.checkPointIsInRect)(position, x, y, w, h);
  },
  setGraphCenter: function setGraphCenter(e, _ref19) {
    var shape = _ref19.shape,
        style = _ref19.style;
    var x = shape.x,
        y = shape.y,
        w = shape.w,
        h = shape.h;
    style.graphCenter = [x + w / 2, y + h / 2];
  },
  move: function move(_ref20, _ref21) {
    var movementX = _ref20.movementX,
        movementY = _ref20.movementY;
    var shape = _ref21.shape;
    this.attr('shape', {
      x: shape.x + movementX,
      y: shape.y + movementY
    });
  }
};
exports.rect = rect;
var ring = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0
  },
  validator: function validator(_ref22) {
    var shape = _ref22.shape;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;

    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
      console.error('Ring shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref23, _ref24) {
    var ctx = _ref23.ctx;
    var shape = _ref24.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;
    ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref25) {
    var shape = _ref25.shape,
        style = _ref25.style;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r;
    var lineWidth = style.lineWidth;
    var halfLineWidth = lineWidth / 2;
    var minDistance = r - halfLineWidth;
    var maxDistance = r + halfLineWidth;
    var distance = (0, _util.getTwoPointDistance)(position, [rx, ry]);
    return distance >= minDistance && distance <= maxDistance;
  },
  setGraphCenter: function setGraphCenter(e, _ref26) {
    var shape = _ref26.shape,
        style = _ref26.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref27, _ref28) {
    var movementX = _ref27.movementX,
        movementY = _ref27.movementY;
    var shape = _ref28.shape;
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    });
  }
};
exports.ring = ring;
var arc = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    startAngle: 0,
    endAngle: 0,
    clockWise: true
  },
  validator: function validator(_ref29) {
    var shape = _ref29.shape;
    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

    if (keys.find(function (key) {
      return typeof shape[key] !== 'number';
    })) {
      console.error('Arc shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref30, _ref31) {
    var ctx = _ref30.ctx;
    var shape = _ref31.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        clockWise = shape.clockWise;
    ctx.arc(rx, ry, r > 0 ? r : 0.001, startAngle, endAngle, !clockWise);
    ctx.stroke();
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref32) {
    var shape = _ref32.shape,
        style = _ref32.style;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        clockWise = shape.clockWise;
    var lineWidth = style.lineWidth;
    var halfLineWidth = lineWidth / 2;
    var insideRadius = r - halfLineWidth;
    var outsideRadius = r + halfLineWidth;
    return !(0, _util.checkPointIsInSector)(position, rx, ry, insideRadius, startAngle, endAngle, clockWise) && (0, _util.checkPointIsInSector)(position, rx, ry, outsideRadius, startAngle, endAngle, clockWise);
  },
  setGraphCenter: function setGraphCenter(e, _ref33) {
    var shape = _ref33.shape,
        style = _ref33.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref34, _ref35) {
    var movementX = _ref34.movementX,
        movementY = _ref34.movementY;
    var shape = _ref35.shape;
    this.attr('shape', {
      rx: shape.rx + movementX,
      ry: shape.ry + movementY
    });
  }
};
exports.arc = arc;
var sector = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    startAngle: 0,
    endAngle: 0,
    clockWise: true
  },
  validator: function validator(_ref36) {
    var shape = _ref36.shape;
    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

    if (keys.find(function (key) {
      return typeof shape[key] !== 'number';
    })) {
      console.error('Sector shape configuration is abnormal!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref37, _ref38) {
    var ctx = _ref37.ctx;
    var shape = _ref38.shape;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        clockWise = shape.clockWise;
    ctx.arc(rx, ry, r > 0 ? r : 0.01, startAngle, endAngle, !clockWise);
    ctx.lineTo(rx, ry);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  },
  hoverCheck: function hoverCheck(position, _ref39) {
    var shape = _ref39.shape;
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r,
        startAngle = shape.startAngle,
        endAngle = shape.endAngle,
        clockWise = shape.clockWise;
    return (0, _util.checkPointIsInSector)(position, rx, ry, r, startAngle, endAngle, clockWise);
  },
  setGraphCenter: function setGraphCenter(e, _ref40) {
    var shape = _ref40.shape,
        style = _ref40.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref41, _ref42) {
    var movementX = _ref41.movementX,
        movementY = _ref41.movementY;
    var shape = _ref42.shape;
    var rx = shape.rx,
        ry = shape.ry;
    this.attr('shape', {
      rx: rx + movementX,
      ry: ry + movementY
    });
  }
};
exports.sector = sector;
var regPolygon = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    side: 0
  },
  validator: function validator(_ref43) {
    var shape = _ref43.shape;
    var side = shape.side;
    var keys = ['rx', 'ry', 'r', 'side'];

    if (keys.find(function (key) {
      return typeof shape[key] !== 'number';
    })) {
      console.error('RegPolygon shape configuration is abnormal!');
      return false;
    }

    if (side < 3) {
      console.error('RegPolygon at least trigon!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref44, _ref45) {
    var ctx = _ref44.ctx;
    var shape = _ref45.shape,
        cache = _ref45.cache;
    ctx.beginPath();
    var rx = shape.rx,
        ry = shape.ry,
        r = shape.r,
        side = shape.side;

    if (!cache.points || cache.rx !== rx || cache.ry !== ry || cache.r !== r || cache.side !== side) {
      var _points = (0, _util.getRegularPolygonPoints)(rx, ry, r, side);

      Object.assign(cache, {
        points: _points,
        rx: rx,
        ry: ry,
        r: r,
        side: side
      });
    }

    var points = cache.points;
    (0, _canvas.drawPolylinePath)(ctx, points);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  },
  hoverCheck: function hoverCheck(position, _ref46) {
    var cache = _ref46.cache;
    var points = cache.points;
    return (0, _util.checkPointIsInPolygon)(position, points);
  },
  setGraphCenter: function setGraphCenter(e, _ref47) {
    var shape = _ref47.shape,
        style = _ref47.style;
    var rx = shape.rx,
        ry = shape.ry;
    style.graphCenter = [rx, ry];
  },
  move: function move(_ref48, _ref49) {
    var movementX = _ref48.movementX,
        movementY = _ref48.movementY;
    var shape = _ref49.shape,
        cache = _ref49.cache;
    var rx = shape.rx,
        ry = shape.ry;
    cache.rx += movementX;
    cache.ry += movementY;
    this.attr('shape', {
      rx: rx + movementX,
      ry: ry + movementY
    });
    cache.points = cache.points.map(function (_ref50) {
      var _ref51 = (0, _slicedToArray2["default"])(_ref50, 2),
          x = _ref51[0],
          y = _ref51[1];

      return [x + movementX, y + movementY];
    });
  }
};
exports.regPolygon = regPolygon;
var polyline = {
  shape: {
    points: [],
    close: false
  },
  validator: function validator(_ref52) {
    var shape = _ref52.shape;
    var points = shape.points;

    if (!(points instanceof Array)) {
      console.error('Polyline points should be an array!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref53, _ref54) {
    var ctx = _ref53.ctx;
    var shape = _ref54.shape,
        lineWidth = _ref54.style.lineWidth;
    ctx.beginPath();
    var points = shape.points,
        close = shape.close;
    if (lineWidth === 1) points = (0, _util.eliminateBlur)(points);
    (0, _canvas.drawPolylinePath)(ctx, points);

    if (close) {
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }
  },
  hoverCheck: function hoverCheck(position, _ref55) {
    var shape = _ref55.shape,
        style = _ref55.style;
    var points = shape.points,
        close = shape.close;
    var lineWidth = style.lineWidth;

    if (close) {
      return (0, _util.checkPointIsInPolygon)(position, points);
    } else {
      return (0, _util.checkPointIsNearPolyline)(position, points, lineWidth);
    }
  },
  setGraphCenter: function setGraphCenter(e, _ref56) {
    var shape = _ref56.shape,
        style = _ref56.style;
    var points = shape.points;
    style.graphCenter = points[0];
  },
  move: function move(_ref57, _ref58) {
    var movementX = _ref57.movementX,
        movementY = _ref57.movementY;
    var shape = _ref58.shape;
    var points = shape.points;
    var moveAfterPoints = points.map(function (_ref59) {
      var _ref60 = (0, _slicedToArray2["default"])(_ref59, 2),
          x = _ref60[0],
          y = _ref60[1];

      return [x + movementX, y + movementY];
    });
    this.attr('shape', {
      points: moveAfterPoints
    });
  }
};
exports.polyline = polyline;
var smoothline = {
  shape: {
    points: [],
    close: false
  },
  validator: function validator(_ref61) {
    var shape = _ref61.shape;
    var points = shape.points;

    if (!(points instanceof Array)) {
      console.error('Smoothline points should be an array!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref62, _ref63) {
    var ctx = _ref62.ctx;
    var shape = _ref63.shape,
        cache = _ref63.cache;
    var points = shape.points,
        close = shape.close;

    if (!cache.points || cache.points.toString() !== points.toString()) {
      var _bezierCurve = polylineToBezierCurve(points, close);

      var hoverPoints = bezierCurveToPolyline(_bezierCurve);
      Object.assign(cache, {
        points: (0, _util.deepClone)(points, true),
        bezierCurve: _bezierCurve,
        hoverPoints: hoverPoints
      });
    }

    var bezierCurve = cache.bezierCurve;
    ctx.beginPath();
    (0, _canvas.drawBezierCurvePath)(ctx, bezierCurve.slice(1), bezierCurve[0]);

    if (close) {
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }
  },
  hoverCheck: function hoverCheck(position, _ref64) {
    var cache = _ref64.cache,
        shape = _ref64.shape,
        style = _ref64.style;
    var hoverPoints = cache.hoverPoints;
    var close = shape.close;
    var lineWidth = style.lineWidth;

    if (close) {
      return (0, _util.checkPointIsInPolygon)(position, hoverPoints);
    } else {
      return (0, _util.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
    }
  },
  setGraphCenter: function setGraphCenter(e, _ref65) {
    var shape = _ref65.shape,
        style = _ref65.style;
    var points = shape.points;
    style.graphCenter = points[0];
  },
  move: function move(_ref66, _ref67) {
    var movementX = _ref66.movementX,
        movementY = _ref66.movementY;
    var shape = _ref67.shape,
        cache = _ref67.cache;
    var points = shape.points;
    var moveAfterPoints = points.map(function (_ref68) {
      var _ref69 = (0, _slicedToArray2["default"])(_ref68, 2),
          x = _ref69[0],
          y = _ref69[1];

      return [x + movementX, y + movementY];
    });
    cache.points = moveAfterPoints;

    var _cache$bezierCurve$ = (0, _slicedToArray2["default"])(cache.bezierCurve[0], 2),
        fx = _cache$bezierCurve$[0],
        fy = _cache$bezierCurve$[1];

    var curves = cache.bezierCurve.slice(1);
    cache.bezierCurve = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray2["default"])(curves.map(function (curve) {
      return curve.map(function (_ref70) {
        var _ref71 = (0, _slicedToArray2["default"])(_ref70, 2),
            x = _ref71[0],
            y = _ref71[1];

        return [x + movementX, y + movementY];
      });
    })));
    cache.hoverPoints = cache.hoverPoints.map(function (_ref72) {
      var _ref73 = (0, _slicedToArray2["default"])(_ref72, 2),
          x = _ref73[0],
          y = _ref73[1];

      return [x + movementX, y + movementY];
    });
    this.attr('shape', {
      points: moveAfterPoints
    });
  }
};
exports.smoothline = smoothline;
var bezierCurve = {
  shape: {
    points: [],
    close: false
  },
  validator: function validator(_ref74) {
    var shape = _ref74.shape;
    var points = shape.points;

    if (!(points instanceof Array)) {
      console.error('BezierCurve points should be an array!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref75, _ref76) {
    var ctx = _ref75.ctx;
    var shape = _ref76.shape,
        cache = _ref76.cache;
    var points = shape.points,
        close = shape.close;

    if (!cache.points || cache.points.toString() !== points.toString()) {
      var hoverPoints = bezierCurveToPolyline(points, 20);
      Object.assign(cache, {
        points: (0, _util.deepClone)(points, true),
        hoverPoints: hoverPoints
      });
    }

    ctx.beginPath();
    (0, _canvas.drawBezierCurvePath)(ctx, points.slice(1), points[0]);

    if (close) {
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }
  },
  hoverCheck: function hoverCheck(position, _ref77) {
    var cache = _ref77.cache,
        shape = _ref77.shape,
        style = _ref77.style;
    var hoverPoints = cache.hoverPoints;
    var close = shape.close;
    var lineWidth = style.lineWidth;

    if (close) {
      return (0, _util.checkPointIsInPolygon)(position, hoverPoints);
    } else {
      return (0, _util.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
    }
  },
  setGraphCenter: function setGraphCenter(e, _ref78) {
    var shape = _ref78.shape,
        style = _ref78.style;
    var points = shape.points;
    style.graphCenter = points[0];
  },
  move: function move(_ref79, _ref80) {
    var movementX = _ref79.movementX,
        movementY = _ref79.movementY;
    var shape = _ref80.shape,
        cache = _ref80.cache;
    var points = shape.points;

    var _points$ = (0, _slicedToArray2["default"])(points[0], 2),
        fx = _points$[0],
        fy = _points$[1];

    var curves = points.slice(1);
    var bezierCurve = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray2["default"])(curves.map(function (curve) {
      return curve.map(function (_ref81) {
        var _ref82 = (0, _slicedToArray2["default"])(_ref81, 2),
            x = _ref82[0],
            y = _ref82[1];

        return [x + movementX, y + movementY];
      });
    })));
    cache.points = bezierCurve;
    cache.hoverPoints = cache.hoverPoints.map(function (_ref83) {
      var _ref84 = (0, _slicedToArray2["default"])(_ref83, 2),
          x = _ref84[0],
          y = _ref84[1];

      return [x + movementX, y + movementY];
    });
    this.attr('shape', {
      points: bezierCurve
    });
  }
};
exports.bezierCurve = bezierCurve;
var text = {
  shape: {
    content: '',
    position: [],
    maxWidth: undefined,
    rowGap: 0
  },
  validator: function validator(_ref85) {
    var shape = _ref85.shape;
    var content = shape.content,
        position = shape.position,
        rowGap = shape.rowGap;

    if (typeof content !== 'string') {
      console.error('Text content should be a string!');
      return false;
    }

    if (!(position instanceof Array)) {
      console.error('Text position should be an array!');
      return false;
    }

    if (typeof rowGap !== 'number') {
      console.error('Text rowGap should be a number!');
      return false;
    }

    return true;
  },
  draw: function draw(_ref86, _ref87) {
    var ctx = _ref86.ctx;
    var shape = _ref87.shape;
    var content = shape.content,
        position = shape.position,
        maxWidth = shape.maxWidth,
        rowGap = shape.rowGap;
    var textBaseline = ctx.textBaseline,
        font = ctx.font;
    var fontSize = parseInt(font.replace(/\D/g, ''));

    var _position = position,
        _position2 = (0, _slicedToArray2["default"])(_position, 2),
        x = _position2[0],
        y = _position2[1];

    content = content.split('\n');
    var rowNum = content.length;
    var lineHeight = fontSize + rowGap;
    var allHeight = rowNum * lineHeight - rowGap;
    var offset = 0;

    if (textBaseline === 'middle') {
      offset = allHeight / 2;
      y += fontSize / 2;
    }

    if (textBaseline === 'bottom') {
      offset = allHeight;
      y += fontSize;
    }

    position = new Array(rowNum).fill(0).map(function (foo, i) {
      return [x, y + i * lineHeight - offset];
    });
    ctx.beginPath();
    content.forEach(function (text, i) {
      ctx.fillText.apply(ctx, [text].concat((0, _toConsumableArray2["default"])(position[i]), [maxWidth]));
      ctx.strokeText.apply(ctx, [text].concat((0, _toConsumableArray2["default"])(position[i]), [maxWidth]));
    });
    ctx.closePath();
  },
  hoverCheck: function hoverCheck(position, _ref88) {
    var shape = _ref88.shape,
        style = _ref88.style;
    return false;
  },
  setGraphCenter: function setGraphCenter(e, _ref89) {
    var shape = _ref89.shape,
        style = _ref89.style;
    var position = shape.position;
    style.graphCenter = (0, _toConsumableArray2["default"])(position);
  },
  move: function move(_ref90, _ref91) {
    var movementX = _ref90.movementX,
        movementY = _ref90.movementY;
    var shape = _ref91.shape;

    var _shape$position = (0, _slicedToArray2["default"])(shape.position, 2),
        x = _shape$position[0],
        y = _shape$position[1];

    this.attr('shape', {
      position: [x + movementX, y + movementY]
    });
  }
};
exports.text = text;
var graphs = new Map([['circle', circle], ['ellipse', ellipse], ['rect', rect], ['ring', ring], ['arc', arc], ['sector', sector], ['regPolygon', regPolygon], ['polyline', polyline], ['smoothline', smoothline], ['bezierCurve', bezierCurve], ['text', text]]);
var _default = graphs;
/**
 * @description Extend new graph
 * @param {String} name   Name of Graph
 * @param {Object} config Configuration of Graph
 * @return {Undefined} Void
 */

exports["default"] = _default;

function extendNewGraph(name, config) {
  if (!name || !config) {
    console.error('ExtendNewGraph Missing Parameters!');
    return;
  }

  if (!config.shape) {
    console.error('Required attribute of shape to extendNewGraph!');
    return;
  }

  if (!config.validator) {
    console.error('Required function of validator to extendNewGraph!');
    return;
  }

  if (!config.draw) {
    console.error('Required function of draw to extendNewGraph!');
    return;
  }

  graphs.set(name, config);
}

/***/ }),

/***/ "b22d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/WaterLevel/index.vue?vue&type=template&id=072964d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-water-level-pond',{key:_vm.chartKey,ref:"waterLevel",attrs:{"config":_vm.config}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/WaterLevel/index.vue?vue&type=template&id=072964d2&

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/WaterLevel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var WaterLevelvue_type_script_lang_js_ = ({
  name: "WaterLevel",
  data() {
    return {
      chartKey: 0,
      container: null,
      timer: null,
      config: {
        data: [66],
      },
    };
  },
  methods: {
    resize() {
      this.chartKey = Math.random();
    },
  },
  mounted() {
    this.container = this.$refs.waterLevel;
    const erd = element_resize_detector_default()();
    erd.listenTo(this.$parent.$el, (element) => {
      this.$nextTick(() => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          // 监听到事件后执行的业务逻辑
          this.resize();
        }, 100);
      });
    });
  },
});

// CONCATENATED MODULE: ./packages/WaterLevel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_WaterLevelvue_type_script_lang_js_ = (WaterLevelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/WaterLevel/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_WaterLevelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WaterLevel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b72d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b770":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ "b7c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = new Map([['transparent', 'rgba(0,0,0,0)'], ['black', '#000000'], ['silver', '#C0C0C0'], ['gray', '#808080'], ['white', '#FFFFFF'], ['maroon', '#800000'], ['red', '#FF0000'], ['purple', '#800080'], ['fuchsia', '#FF00FF'], ['green', '#008000'], ['lime', '#00FF00'], ['olive', '#808000'], ['yellow', '#FFFF00'], ['navy', '#000080'], ['blue', '#0000FF'], ['teal', '#008080'], ['aqua', '#00FFFF'], ['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['blanchedalmond', '#ffebcd'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgreen', '#006400'], ['darkgrey', '#a9a9a9'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['greenyellow', '#adff2f'], ['grey', '#808080'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred', '#cd5c5c'], ['indigo', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightgrey', '#d3d3d3'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['oldlace', '#fdf5e6'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['whitesmoke', '#f5f5f5'], ['yellowgreen', '#9acd32']]);

exports["default"] = _default;

/***/ }),

/***/ "ba86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/VText/index.vue?vue&type=template&id=ec7db02e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.editMode == 'edit')?_c('div',{staticClass:"v-text",on:{"keydown":_vm.handleKeydown,"keyup":_vm.handleKeyup}},[_c('div',{ref:"text",class:{ canEdit: _vm.canEdit },style:({ verticalAlign: _vm.element.style.verticalAlign }),attrs:{"contenteditable":_vm.canEdit,"tabindex":_vm.element.id},domProps:{"innerHTML":_vm._s(_vm.element.props.model.text)},on:{"dblclick":_vm.setEdit,"paste":_vm.clearStyle,"mousedown":_vm.handleMousedown,"blur":_vm.handleBlur,"input":_vm.handleInput}})]):_c('div',{staticClass:"v-text preview"},[_c('div',{style:({ verticalAlign: _vm.element.style.verticalAlign }),domProps:{"innerHTML":_vm._s(_vm.element.props.model.text)}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/VText/index.vue?vue&type=template&id=ec7db02e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/VText/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var VTextvue_type_script_lang_js_ = ({
  name: "VText",
  props: {
    element: {
      type: Object,
    },
  },
  data() {
    return {
      editMode:'preview',
      canEdit: false,
      ctrlKey: 17,
      isCtrlDown: false,
      keycodes: [66, 67, 68, 69, 71, 76, 80, 83, 85, 86, 88, 89, 90],
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.element, e.target.innerHTML);
    },

    handleKeydown(e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = true;
      } else if (
        this.isCtrlDown &&
        this.canEdit &&
        this.keycodes.includes(e.keyCode)
      ) {
        e.stopPropagation();
      } else if (e.keyCode == 46) {
        // deleteKey
        e.stopPropagation();
      }
    },

    handleKeyup(e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = false;
      }
    },

    handleMousedown(e) {
      if (this.canEdit) {
        e.stopPropagation();
      }
    },

    clearStyle(e) {
      e.preventDefault();
      const clp = e.clipboardData;
      const text = clp.getData("text/plain") || "";
      if (text !== "") {
        document.execCommand("insertText", false, text);
      }

      this.$emit("input", this.element, e.target.innerHTML);
    },

    handleBlur(e) {
      this.element.props.model.text = e.target.innerHTML || "&nbsp;";
      this.canEdit = false;
    },

    setEdit() {
      this.canEdit = true;
      // 全选
      this.selectText(this.$refs.text);
    },

    selectText(element) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    },
  },
});

// CONCATENATED MODULE: ./packages/VText/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_VTextvue_type_script_lang_js_ = (VTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/VText/index.vue?vue&type=style&index=0&id=ec7db02e&lang=scss&scoped=true&
var VTextvue_type_style_index_0_id_ec7db02e_lang_scss_scoped_true_ = __webpack_require__("f6a1");

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/VText/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_VTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ec7db02e",
  null
  
)

/* harmony default export */ var VText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bc96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "becb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterNonNumber = filterNonNumber;
exports.deepMerge = deepMerge;
exports.mulAdd = mulAdd;
exports.mergeSameStackData = mergeSameStackData;
exports.getTwoPointDistance = getTwoPointDistance;
exports.getLinearGradientColor = getLinearGradientColor;
exports.getPolylineLength = getPolylineLength;
exports.getPointToLineDistance = getPointToLineDistance;
exports.initNeedSeries = initNeedSeries;
exports.radianToAngle = radianToAngle;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _util = __webpack_require__("5557");

function filterNonNumber(array) {
  return array.filter(function (n) {
    return typeof n === 'number';
  });
}

function deepMerge(target, merged) {
  for (var key in merged) {
    if (target[key] && (0, _typeof2["default"])(target[key]) === 'object') {
      deepMerge(target[key], merged[key]);
      continue;
    }

    if ((0, _typeof2["default"])(merged[key]) === 'object') {
      target[key] = (0, _util.deepClone)(merged[key], true);
      continue;
    }

    target[key] = merged[key];
  }

  return target;
}

function mulAdd(nums) {
  nums = filterNonNumber(nums);
  return nums.reduce(function (all, num) {
    return all + num;
  }, 0);
}

function mergeSameStackData(item, series) {
  var stack = item.stack;
  if (!stack) return (0, _toConsumableArray2["default"])(item.data);
  var stacks = series.filter(function (_ref) {
    var s = _ref.stack;
    return s === stack;
  });
  var index = stacks.findIndex(function (_ref2) {
    var d = _ref2.data;
    return d === item.data;
  });
  var datas = stacks.splice(0, index + 1).map(function (_ref3) {
    var data = _ref3.data;
    return data;
  });
  var dataLength = datas[0].length;
  return new Array(dataLength).fill(0).map(function (foo, i) {
    return mulAdd(datas.map(function (d) {
      return d[i];
    }));
  });
}

function getTwoPointDistance(pointOne, pointTwo) {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}

function getLinearGradientColor(ctx, begin, end, color) {
  if (!ctx || !begin || !end || !color.length) return;
  var colors = color;
  typeof colors === 'string' && (colors = [color, color]);
  var linearGradientColor = ctx.createLinearGradient.apply(ctx, (0, _toConsumableArray2["default"])(begin).concat((0, _toConsumableArray2["default"])(end)));
  var colorGap = 1 / (colors.length - 1);
  colors.forEach(function (c, i) {
    return linearGradientColor.addColorStop(colorGap * i, c);
  });
  return linearGradientColor;
}

function getPolylineLength(points) {
  var lineSegments = new Array(points.length - 1).fill(0).map(function (foo, i) {
    return [points[i], points[i + 1]];
  });
  var lengths = lineSegments.map(function (item) {
    return getTwoPointDistance.apply(void 0, (0, _toConsumableArray2["default"])(item));
  });
  return mulAdd(lengths);
}

function getPointToLineDistance(point, linePointOne, linePointTwo) {
  var a = getTwoPointDistance(point, linePointOne);
  var b = getTwoPointDistance(point, linePointTwo);
  var c = getTwoPointDistance(linePointOne, linePointTwo);
  return 0.5 * Math.sqrt((a + b + c) * (a + b - c) * (a + c - b) * (b + c - a)) / c;
}

function initNeedSeries(series, config, type) {
  series = series.filter(function (_ref4) {
    var st = _ref4.type;
    return st === type;
  });
  series = series.map(function (item) {
    return deepMerge((0, _util.deepClone)(config, true), item);
  });
  return series.filter(function (_ref5) {
    var show = _ref5.show;
    return show;
  });
}

function radianToAngle(radian) {
  return radian / Math.PI * 180;
}

/***/ }),

/***/ "c135":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "c240":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "c274":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("50bf");

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ "c280":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c2ca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c423":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c7c8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c927":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/RingChart/index.vue?vue&type=template&id=40b9d203&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-active-ring-chart',{key:_vm.chartKey,ref:"ringChart",attrs:{"config":_vm.config}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/RingChart/index.vue?vue&type=template&id=40b9d203&

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/RingChart/index.vue?vue&type=script&lang=js&
//
//
//
//
//



/* harmony default export */ var RingChartvue_type_script_lang_js_ = ({
  name:'RingChart',
    data() {
        return {
            chartKey: 0,
            container: null,
            timer: null,
            config: {
                data: [
                    {
                        name: '周口',
                        value: 55,
                    },
                    {
                        name: '南阳',
                        value: 120,
                    },
                    {
                        name: '西峡',
                        value: 78,
                    },
                    {
                        name: '驻马店',
                        value: 66,
                    },
                    {
                        name: '新乡',
                        value: 80,
                    },
                ],
            },
        }
    },
    methods: {
        resize() {
            // this.container.$el.style.width=this.$parent.$el.offsetWidth+'px'
            // this.container.$el.style.height=this.$parent.$el.offsetHeight+'px'
            // this.$forceUpdate()
            this.chartKey = Math.random()
        },
    },
    mounted() {
        this.container = this.$refs.ringChart
        const erd = element_resize_detector_default()()
        erd.listenTo(this.$parent.$el, element => {
            this.$nextTick(() => {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                this.timer = setTimeout(() => {
                    // 监听到事件后执行的业务逻辑
                    this.resize()
                }, 100)
            })
        })
    },
});

// CONCATENATED MODULE: ./packages/RingChart/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_RingChartvue_type_script_lang_js_ = (RingChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/RingChart/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_RingChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RingChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c930":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yAxisConfig = exports.xAxisConfig = void 0;
var xAxisConfig = {
  /**
   * @description Axis name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Whether to display this axis
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Axis position
   * @type {String}
   * @default position = 'bottom'
   * @example position = 'bottom' | 'top'
   */
  position: 'bottom',

  /**
   * @description Name gap
   * @type {Number}
   * @default nameGap = 15
   */
  nameGap: 15,

  /**
   * @description Name location
   * @type {String}
   * @default nameLocation = 'end'
   * @example nameLocation = 'end' | 'center' | 'start'
   */
  nameLocation: 'end',

  /**
   * @description Name default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  nameTextStyle: {
    fill: '#333',
    fontSize: 10
  },

  /**
   * @description Axis min value
   * @type {String|Number}
   * @default min = '20%'
   * @example min = '20%' | 0
   */
  min: '20%',

  /**
   * @description Axis max value
   * @type {String|Number}
   * @default max = '20%'
   * @example max = '20%' | 0
   */
  max: '20%',

  /**
   * @description Axis value interval
   * @type {Number}
   * @default interval = null
   * @example interval = 100
   */
  interval: null,

  /**
   * @description Min interval
   * @type {Number}
   * @default minInterval = null
   * @example minInterval = 1
   */
  minInterval: null,

  /**
   * @description Max interval
   * @type {Number}
   * @default maxInterval = null
   * @example maxInterval = 100
   */
  maxInterval: null,

  /**
   * @description Boundary gap
   * @type {Boolean}
   * @default boundaryGap = null
   * @example boundaryGap = true
   */
  boundaryGap: null,

  /**
   * @description Axis split number
   * @type {Number}
   * @default splitNumber = 5
   */
  splitNumber: 5,

  /**
   * @description Axis line configuration
   * @type {Object}
   */
  axisLine: {
    /**
     * @description Whether to display axis line
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#333',
      lineWidth: 1
    }
  },

  /**
   * @description Axis tick configuration
   * @type {Object}
   */
  axisTick: {
    /**
     * @description Whether to display axis tick
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis tick default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#333',
      lineWidth: 1
    }
  },

  /**
   * @description Axis label configuration
   * @type {Object}
   */
  axisLabel: {
    /**
     * @description Whether to display axis label
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}件'
     * @example formatter = (dataItem) => (dataItem.value)
     */
    formatter: null,

    /**
     * @description Axis label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: '#333',
      fontSize: 10,
      rotate: 0
    }
  },

  /**
   * @description Axis split line configuration
   * @type {Object}
   */
  splitLine: {
    /**
     * @description Whether to display axis split line
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Axis split line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#d4d4d4',
      lineWidth: 1
    }
  },

  /**
   * @description X axis render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = -20
   */
  rLevel: -20,

  /**
   * @description X axis animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description X axis animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.xAxisConfig = xAxisConfig;
var yAxisConfig = {
  /**
   * @description Axis name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Whether to display this axis
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Axis position
   * @type {String}
   * @default position = 'left'
   * @example position = 'left' | 'right'
   */
  position: 'left',

  /**
   * @description Name gap
   * @type {Number}
   * @default nameGap = 15
   */
  nameGap: 15,

  /**
   * @description Name location
   * @type {String}
   * @default nameLocation = 'end'
   * @example nameLocation = 'end' | 'center' | 'start'
   */
  nameLocation: 'end',

  /**
   * @description name default style configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  nameTextStyle: {
    fill: '#333',
    fontSize: 10
  },

  /**
   * @description Axis min value
   * @type {String|Number}
   * @default min = '20%'
   * @example min = '20%' | 0
   */
  min: '20%',

  /**
   * @description Axis max value
   * @type {String|Number}
   * @default max = '20%'
   * @example max = '20%' | 0
   */
  max: '20%',

  /**
   * @description Axis value interval
   * @type {Number}
   * @default interval = null
   * @example interval = 100
   */
  interval: null,

  /**
   * @description Min interval
   * @type {Number}
   * @default minInterval = null
   * @example minInterval = 1
   */
  minInterval: null,

  /**
   * @description Max interval
   * @type {Number}
   * @default maxInterval = null
   * @example maxInterval = 100
   */
  maxInterval: null,

  /**
   * @description Boundary gap
   * @type {Boolean}
   * @default boundaryGap = null
   * @example boundaryGap = true
   */
  boundaryGap: null,

  /**
   * @description Axis split number
   * @type {Number}
   * @default splitNumber = 5
   */
  splitNumber: 5,

  /**
   * @description Axis line configuration
   * @type {Object}
   */
  axisLine: {
    /**
     * @description Whether to display axis line
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#333',
      lineWidth: 1
    }
  },

  /**
   * @description Axis tick configuration
   * @type {Object}
   */
  axisTick: {
    /**
     * @description Whether to display axis tick
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis tick default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#333',
      lineWidth: 1
    }
  },

  /**
   * @description Axis label configuration
   * @type {Object}
   */
  axisLabel: {
    /**
     * @description Whether to display axis label
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}件'
     * @example formatter = (dataItem) => (dataItem.value)
     */
    formatter: null,

    /**
     * @description Axis label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: '#333',
      fontSize: 10,
      rotate: 0
    }
  },

  /**
   * @description Axis split line configuration
   * @type {Object}
   */
  splitLine: {
    /**
     * @description Whether to display axis split line
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis split line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#d4d4d4',
      lineWidth: 1
    }
  },

  /**
   * @description Y axis render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = -20
   */
  rLevel: -20,

  /**
   * @description Y axis animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Y axis animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.yAxisConfig = yAxisConfig;

/***/ }),

/***/ "c946":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__("b770").forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";

    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }

    initDocument(window.document);

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = buildCssTextString(["position: absolute", "width: " + width*2 + "px", "height: " + height*2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        var container = document.createElement("div");
        container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width*3 + "px", "left: " + -height*3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(targetDocument, styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                targetDocument.head.appendChild(element);
            };

            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!targetDocument.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                var isInShadowRoot = element.getRootNode && element.getRootNode().contains(element);
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element) || isInShadowRoot;
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.setProperty("position", "relative",options.important ? "important" : "");

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
            var containerStyle          = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var shrinkStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var expandChildStyle        = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
            var shrinkChildStyle        = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.setProperty("width", expandWidth + "px", options.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options.important ? "important" : "");
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) {
                        return;
                    }

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (sizeChanged && done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                updateDetectorElements(notifyListenersIfNeeded);
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall,
        initDocument: initDocument
    };
};


/***/ }),

/***/ "c973":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "cc6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gaugeConfig = void 0;
var gaugeConfig = {
  /**
   * @description Whether to display this gauge
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Radius of gauge
   * @type {String|Number}
   * @default radius = '60%'
   * @example radius = '60%' | 100
   */
  radius: '60%',

  /**
   * @description Center point of gauge
   * @type {Array}
   * @default center = ['50%','50%']
   * @example center = ['50%','50%'] | [100, 100]
   */
  center: ['50%', '50%'],

  /**
   * @description Gauge start angle
   * @type {Number}
   * @default startAngle = -(Math.PI / 4) * 5
   * @example startAngle = -Math.PI
   */
  startAngle: -(Math.PI / 4) * 5,

  /**
   * @description Gauge end angle
   * @type {Number}
   * @default endAngle = Math.PI / 4
   * @example endAngle = 0
   */
  endAngle: Math.PI / 4,

  /**
   * @description Gauge min value
   * @type {Number}
   * @default min = 0
   */
  min: 0,

  /**
   * @description Gauge max value
   * @type {Number}
   * @default max = 100
   */
  max: 100,

  /**
   * @description Gauge split number
   * @type {Number}
   * @default splitNum = 5
   */
  splitNum: 5,

  /**
   * @description Gauge arc line width
   * @type {Number}
   * @default arcLineWidth = 15
   */
  arcLineWidth: 15,

  /**
   * @description Gauge chart data
   * @type {Array}
   * @default data = []
   */
  data: [],

  /**
   * @description Data item arc default style configuration
   * @type {Object}
   * @default dataItemStyle = {Configuration Of Class Style}
   */
  dataItemStyle: {},

  /**
   * @description Axis tick configuration
   * @type {Object}
   */
  axisTick: {
    /**
     * @description Whether to display axis tick
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis tick length
     * @type {Number}
     * @default tickLength = 6
     */
    tickLength: 6,

    /**
     * @description Axis tick default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#999',
      lineWidth: 1
    }
  },

  /**
   * @description Axis label configuration
   * @type {Object}
   */
  axisLabel: {
    /**
     * @description Whether to display axis label
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Axis label data (Can be calculated automatically)
     * @type {Array}
     * @default data = [Number...]
     */
    data: [],

    /**
     * @description Axis label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}%'
     * @example formatter = (labelItem) => (labelItem.value)
     */
    formatter: null,

    /**
     * @description Axis label gap between label and axis tick
     * @type {String|Function}
     * @default labelGap = 5
     */
    labelGap: 5,

    /**
     * @description Axis label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {}
  },

  /**
   * @description Gauge pointer configuration
   * @type {Object}
   */
  pointer: {
    /**
     * @description Whether to display pointer
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Pointer value index of data
     * @type {Number}
     * @default valueIndex = 0 (pointer.value = data[0].value)
     */
    valueIndex: 0,

    /**
     * @description Pointer default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      scale: [1, 1],
      fill: '#fb7293'
    }
  },

  /**
   * @description Data item arc detail configuration
   * @type {Object}
   */
  details: {
    /**
     * @description Whether to display details
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Details formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}%'
     * @example formatter = '{name}%'
     * @example formatter = (dataItem) => (dataItem.value)
     */
    formatter: null,

    /**
     * @description Details position offset
     * @type {Array}
     * @default offset = [0, 0]
     * @example offset = [10, 10]
     */
    offset: [0, 0],

    /**
     * @description Value fractional precision
     * @type {Number}
     * @default valueToFixed = 0
     */
    valueToFixed: 0,

    /**
     * @description Details position
     * @type {String}
     * @default position = 'center'
     * @example position = 'start' | 'center' | 'end'
     */
    position: 'center',

    /**
     * @description Details default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textBaseline: 'middle'
    }
  },

  /**
   * @description Gauge background arc configuration
   * @type {Object}
   */
  backgroundArc: {
    /**
     * @description Whether to display background arc
     * @type {Boolean}
     * @default show = true
     */
    show: true,

    /**
     * @description Background arc default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      stroke: '#e0e0e0'
    }
  },

  /**
   * @description Gauge chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 10
   */
  rLevel: 10,

  /**
   * @description Gauge animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Gauge animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.gaugeConfig = gaugeConfig;

/***/ }),

/***/ "d0b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("970b"));

var _color = __webpack_require__("53b8");

var _util = __webpack_require__("5557");

/**
 * @description Class Style
 * @param {Object} style  Style configuration
 * @return {Style} Instance of Style
 */
var Style = function Style(style) {
  (0, _classCallCheck2["default"])(this, Style);
  this.colorProcessor(style);
  var defaultStyle = {
    /**
     * @description Rgba value of graph fill color
     * @type {Array}
     * @default fill = [0, 0, 0, 1]
     */
    fill: [0, 0, 0, 1],

    /**
     * @description Rgba value of graph stroke color
     * @type {Array}
     * @default stroke = [0, 0, 0, 1]
     */
    stroke: [0, 0, 0, 0],

    /**
     * @description Opacity of graph
     * @type {Number}
     * @default opacity = 1
     */
    opacity: 1,

    /**
     * @description LineCap of Ctx
     * @type {String}
     * @default lineCap = null
     * @example lineCap = 'butt'|'round'|'square'
     */
    lineCap: null,

    /**
     * @description Linejoin of Ctx
     * @type {String}
     * @default lineJoin = null
     * @example lineJoin = 'round'|'bevel'|'miter'
     */
    lineJoin: null,

    /**
     * @description LineDash of Ctx
     * @type {Array}
     * @default lineDash = null
     * @example lineDash = [10, 10]
     */
    lineDash: null,

    /**
     * @description LineDashOffset of Ctx
     * @type {Number}
     * @default lineDashOffset = null
     * @example lineDashOffset = 10
     */
    lineDashOffset: null,

    /**
     * @description ShadowBlur of Ctx
     * @type {Number}
     * @default shadowBlur = 0
     */
    shadowBlur: 0,

    /**
     * @description Rgba value of graph shadow color
     * @type {Array}
     * @default shadowColor = [0, 0, 0, 0]
     */
    shadowColor: [0, 0, 0, 0],

    /**
     * @description ShadowOffsetX of Ctx
     * @type {Number}
     * @default shadowOffsetX = 0
     */
    shadowOffsetX: 0,

    /**
     * @description ShadowOffsetY of Ctx
     * @type {Number}
     * @default shadowOffsetY = 0
     */
    shadowOffsetY: 0,

    /**
     * @description LineWidth of Ctx
     * @type {Number}
     * @default lineWidth = 0
     */
    lineWidth: 0,

    /**
     * @description Center point of the graph
     * @type {Array}
     * @default graphCenter = null
     * @example graphCenter = [10, 10]
     */
    graphCenter: null,

    /**
     * @description Graph scale
     * @type {Array}
     * @default scale = null
     * @example scale = [1.5, 1.5]
     */
    scale: null,

    /**
     * @description Graph rotation degree
     * @type {Number}
     * @default rotate = null
     * @example rotate = 10
     */
    rotate: null,

    /**
     * @description Graph translate distance
     * @type {Array}
     * @default translate = null
     * @example translate = [10, 10]
     */
    translate: null,

    /**
     * @description Cursor status when hover
     * @type {String}
     * @default hoverCursor = 'pointer'
     * @example hoverCursor = 'default'|'pointer'|'auto'|'crosshair'|'move'|'wait'|...
     */
    hoverCursor: 'pointer',

    /**
     * @description Font style of Ctx
     * @type {String}
     * @default fontStyle = 'normal'
     * @example fontStyle = 'normal'|'italic'|'oblique'
     */
    fontStyle: 'normal',

    /**
     * @description Font varient of Ctx
     * @type {String}
     * @default fontVarient = 'normal'
     * @example fontVarient = 'normal'|'small-caps'
     */
    fontVarient: 'normal',

    /**
     * @description Font weight of Ctx
     * @type {String|Number}
     * @default fontWeight = 'normal'
     * @example fontWeight = 'normal'|'bold'|'bolder'|'lighter'|Number
     */
    fontWeight: 'normal',

    /**
     * @description Font size of Ctx
     * @type {Number}
     * @default fontSize = 10
     */
    fontSize: 10,

    /**
     * @description Font family of Ctx
     * @type {String}
     * @default fontFamily = 'Arial'
     */
    fontFamily: 'Arial',

    /**
     * @description TextAlign of Ctx
     * @type {String}
     * @default textAlign = 'center'
     * @example textAlign = 'start'|'end'|'left'|'right'|'center'
     */
    textAlign: 'center',

    /**
     * @description TextBaseline of Ctx
     * @type {String}
     * @default textBaseline = 'middle'
     * @example textBaseline = 'top'|'bottom'|'middle'|'alphabetic'|'hanging'
     */
    textBaseline: 'middle',

    /**
     * @description The color used to create the gradient
     * @type {Array}
     * @default gradientColor = null
     * @example gradientColor = ['#000', '#111', '#222']
     */
    gradientColor: null,

    /**
     * @description Gradient type
     * @type {String}
     * @default gradientType = 'linear'
     * @example gradientType = 'linear' | 'radial'
     */
    gradientType: 'linear',

    /**
     * @description Gradient params
     * @type {Array}
     * @default gradientParams = null
     * @example gradientParams = [x0, y0, x1, y1] (Linear Gradient)
     * @example gradientParams = [x0, y0, r0, x1, y1, r1] (Radial Gradient)
     */
    gradientParams: null,

    /**
     * @description When to use gradients
     * @type {String}
     * @default gradientWith = 'stroke'
     * @example gradientWith = 'stroke' | 'fill'
     */
    gradientWith: 'stroke',

    /**
     * @description Gradient color stops
     * @type {String}
     * @default gradientStops = 'auto'
     * @example gradientStops = 'auto' | [0, .2, .3, 1]
     */
    gradientStops: 'auto',

    /**
     * @description Extended color that supports animation transition
     * @type {Array|Object}
     * @default colors = null
     * @example colors = ['#000', '#111', '#222', 'red' ]
     * @example colors = { a: '#000', b: '#111' }
     */
    colors: null
  };
  Object.assign(this, defaultStyle, style);
};
/**
 * @description Set colors to rgba value
 * @param {Object} style style config
 * @param {Boolean} reverse Whether to perform reverse operation
 * @return {Undefined} Void
 */


exports["default"] = Style;

Style.prototype.colorProcessor = function (style) {
  var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var processor = reverse ? _color.getColorFromRgbValue : _color.getRgbaValue;
  var colorProcessorKeys = ['fill', 'stroke', 'shadowColor'];
  var allKeys = Object.keys(style);
  var colorKeys = allKeys.filter(function (key) {
    return colorProcessorKeys.find(function (k) {
      return k === key;
    });
  });
  colorKeys.forEach(function (key) {
    return style[key] = processor(style[key]);
  });
  var gradientColor = style.gradientColor,
      colors = style.colors;
  if (gradientColor) style.gradientColor = gradientColor.map(function (c) {
    return processor(c);
  });

  if (colors) {
    var colorsKeys = Object.keys(colors);
    colorsKeys.forEach(function (key) {
      return colors[key] = processor(colors[key]);
    });
  }
};
/**
 * @description Init graph style
 * @param {Object} ctx Context of canvas
 * @return {Undefined} Void
 */


Style.prototype.initStyle = function (ctx) {
  initTransform(ctx, this);
  initGraphStyle(ctx, this);
  initGradient(ctx, this);
};
/**
 * @description Init canvas transform
 * @param {Object} ctx  Context of canvas
 * @param {Style} style Instance of Style
 * @return {Undefined} Void
 */


function initTransform(ctx, style) {
  ctx.save();
  var graphCenter = style.graphCenter,
      rotate = style.rotate,
      scale = style.scale,
      translate = style.translate;
  if (!(graphCenter instanceof Array)) return;
  ctx.translate.apply(ctx, (0, _toConsumableArray2["default"])(graphCenter));
  if (rotate) ctx.rotate(rotate * Math.PI / 180);
  if (scale instanceof Array) ctx.scale.apply(ctx, (0, _toConsumableArray2["default"])(scale));
  if (translate) ctx.translate.apply(ctx, (0, _toConsumableArray2["default"])(translate));
  ctx.translate(-graphCenter[0], -graphCenter[1]);
}

var autoSetStyleKeys = ['lineCap', 'lineJoin', 'lineDashOffset', 'shadowOffsetX', 'shadowOffsetY', 'lineWidth', 'textAlign', 'textBaseline'];
/**
 * @description Set the style of canvas ctx
 * @param {Object} ctx  Context of canvas
 * @param {Style} style Instance of Style
 * @return {Undefined} Void
 */

function initGraphStyle(ctx, style) {
  var fill = style.fill,
      stroke = style.stroke,
      shadowColor = style.shadowColor,
      opacity = style.opacity;
  autoSetStyleKeys.forEach(function (key) {
    if (key || typeof key === 'number') ctx[key] = style[key];
  });
  fill = (0, _toConsumableArray2["default"])(fill);
  stroke = (0, _toConsumableArray2["default"])(stroke);
  shadowColor = (0, _toConsumableArray2["default"])(shadowColor);
  fill[3] *= opacity;
  stroke[3] *= opacity;
  shadowColor[3] *= opacity;
  ctx.fillStyle = (0, _color.getColorFromRgbValue)(fill);
  ctx.strokeStyle = (0, _color.getColorFromRgbValue)(stroke);
  ctx.shadowColor = (0, _color.getColorFromRgbValue)(shadowColor);
  var lineDash = style.lineDash,
      shadowBlur = style.shadowBlur;

  if (lineDash) {
    lineDash = lineDash.map(function (v) {
      return v >= 0 ? v : 0;
    });
    ctx.setLineDash(lineDash);
  }

  if (typeof shadowBlur === 'number') ctx.shadowBlur = shadowBlur > 0 ? shadowBlur : 0.001;
  var fontStyle = style.fontStyle,
      fontVarient = style.fontVarient,
      fontWeight = style.fontWeight,
      fontSize = style.fontSize,
      fontFamily = style.fontFamily;
  ctx.font = fontStyle + ' ' + fontVarient + ' ' + fontWeight + ' ' + fontSize + 'px' + ' ' + fontFamily;
}
/**
 * @description Set the gradient color of canvas ctx
 * @param {Object} ctx  Context of canvas
 * @param {Style} style Instance of Style
 * @return {Undefined} Void
 */


function initGradient(ctx, style) {
  if (!gradientValidator(style)) return;
  var gradientColor = style.gradientColor,
      gradientParams = style.gradientParams,
      gradientType = style.gradientType,
      gradientWith = style.gradientWith,
      gradientStops = style.gradientStops,
      opacity = style.opacity;
  gradientColor = gradientColor.map(function (color) {
    var colorOpacity = color[3] * opacity;
    var clonedColor = (0, _toConsumableArray2["default"])(color);
    clonedColor[3] = colorOpacity;
    return clonedColor;
  });
  gradientColor = gradientColor.map(function (c) {
    return (0, _color.getColorFromRgbValue)(c);
  });
  if (gradientStops === 'auto') gradientStops = getAutoColorStops(gradientColor);
  var gradient = ctx["create".concat(gradientType.slice(0, 1).toUpperCase() + gradientType.slice(1), "Gradient")].apply(ctx, (0, _toConsumableArray2["default"])(gradientParams));
  gradientStops.forEach(function (stop, i) {
    return gradient.addColorStop(stop, gradientColor[i]);
  });
  ctx["".concat(gradientWith, "Style")] = gradient;
}
/**
 * @description Check if the gradient configuration is legal
 * @param {Style} style Instance of Style
 * @return {Boolean} Check Result
 */


function gradientValidator(style) {
  var gradientColor = style.gradientColor,
      gradientParams = style.gradientParams,
      gradientType = style.gradientType,
      gradientWith = style.gradientWith,
      gradientStops = style.gradientStops;
  if (!gradientColor || !gradientParams) return false;

  if (gradientColor.length === 1) {
    console.warn('The gradient needs to provide at least two colors');
    return false;
  }

  if (gradientType !== 'linear' && gradientType !== 'radial') {
    console.warn('GradientType only supports linear or radial, current value is ' + gradientType);
    return false;
  }

  var gradientParamsLength = gradientParams.length;

  if (gradientType === 'linear' && gradientParamsLength !== 4 || gradientType === 'radial' && gradientParamsLength !== 6) {
    console.warn('The expected length of gradientParams is ' + (gradientType === 'linear' ? '4' : '6'));
    return false;
  }

  if (gradientWith !== 'fill' && gradientWith !== 'stroke') {
    console.warn('GradientWith only supports fill or stroke, current value is ' + gradientWith);
    return false;
  }

  if (gradientStops !== 'auto' && !(gradientStops instanceof Array)) {
    console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + gradientStops);
    return false;
  }

  return true;
}
/**
 * @description Get a uniform gradient color stop
 * @param {Array} color Gradient color
 * @return {Array} Gradient color stop
 */


function getAutoColorStops(color) {
  var stopGap = 1 / (color.length - 1);
  return color.map(function (foo, i) {
    return stopGap * i;
  });
}
/**
 * @description Restore canvas ctx transform
 * @param {Object} ctx  Context of canvas
 * @return {Undefined} Void
 */


Style.prototype.restoreTransform = function (ctx) {
  ctx.restore();
};
/**
 * @description Update style data
 * @param {Object} change Changed data
 * @return {Undefined} Void
 */


Style.prototype.update = function (change) {
  this.colorProcessor(change);
  Object.assign(this, change);
};
/**
 * @description Get the current style configuration
 * @return {Object} Style configuration
 */


Style.prototype.getStyle = function () {
  var clonedStyle = (0, _util.deepClone)(this, true);
  this.colorProcessor(clonedStyle, true);
  return clonedStyle;
};

/***/ }),

/***/ "d51d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d6eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ "db36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_25863b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("55f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_25863b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_25863b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_25863b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dbbf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.linear = void 0;
var linear = [[[0, 1], '', [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
/**
 * @description Sine
 */

exports.linear = linear;
var easeInSine = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.880, 0.196]], [[1, 0]]];
exports.easeInSine = easeInSine;
var easeOutSine = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
exports.easeOutSine = easeOutSine;
var easeInOutSine = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
/**
 * @description Quad
 */

exports.easeInOutSine = easeInOutSine;
var easeInQuad = [[[0, 1]], [[0.550, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
exports.easeInQuad = easeInQuad;
var easeOutQuad = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.760, 0.04]], [[1, 0]]];
exports.easeOutQuad = easeOutQuad;
var easeInOutQuad = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
/**
 * @description Cubic
 */

exports.easeInOutQuad = easeInOutQuad;
var easeInCubic = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
exports.easeInCubic = easeInCubic;
var easeOutCubic = [[[0, 1]], [[0.321, 0.312], [0.008, 0.616], [0.634, 0.008]], [[1, 0]]];
exports.easeOutCubic = easeOutCubic;
var easeInOutCubic = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
/**
 * @description Quart
 */

exports.easeInOutCubic = easeInOutCubic;
var easeInQuart = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
exports.easeInQuart = easeInQuart;
var easeOutQuart = [[[0, 1]], [[0.152, 0.244], [0.001, 0.448], [0.285, -0.02]], [[1, 0]]];
exports.easeOutQuart = easeOutQuart;
var easeInOutQuart = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
/**
 * @description Quint
 */

exports.easeInOutQuart = easeInOutQuart;
var easeInQuint = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
exports.easeInQuint = easeInQuint;
var easeOutQuint = [[[0, 1]], [[0.108, 0.2], [0.001, 0.4], [0.214, -0.012]], [[1, 0]]];
exports.easeOutQuint = easeOutQuint;
var easeInOutQuint = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
/**
 * @description Back
 */

exports.easeInOutQuint = easeInOutQuint;
var easeInBack = [[[0, 1]], [[0.667, 0.896], [0.380, 1.184], [0.955, 0.616]], [[1, 0]]];
exports.easeInBack = easeInBack;
var easeOutBack = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
exports.easeOutBack = easeOutBack;
var easeInOutBack = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
/**
 * @description Elastic
 */

exports.easeInOutBack = easeInOutBack;
var easeInElastic = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.770, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
exports.easeInElastic = easeInElastic;
var easeOutElastic = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.110, 0.06], [0.256, 0.08]], [[0.310, -0.076], [0.260, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -0.004]], [[1, 0]]];
exports.easeOutElastic = easeOutElastic;
var easeInOutElastic = [[[0, 1]], [[0.210, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
/**
 * @description Bounce
 */

exports.easeInOutElastic = easeInOutElastic;
var easeInBounce = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.600, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
exports.easeInBounce = easeInBounce;
var easeOutBounce = [[[0, 1]], [[0.357, 0.004], [0.270, 0.592], [0.376, 0.252]], [[0.604, -0.004], [0.548, 0.312], [0.669, 0.184]], [[0.820, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
exports.easeOutBounce = easeOutBounce;
var easeInOutBounce = [[[0, 1]], [[0.102, 1], [0.050, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.480, 0.292]], [[0.635, 0.004], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.760, 0.2], [0.795, 0.144]], [[0.905, -0.004], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
exports.easeInOutBounce = easeInOutBounce;

var _default = new Map([['linear', linear], ['easeInSine', easeInSine], ['easeOutSine', easeOutSine], ['easeInOutSine', easeInOutSine], ['easeInQuad', easeInQuad], ['easeOutQuad', easeOutQuad], ['easeInOutQuad', easeInOutQuad], ['easeInCubic', easeInCubic], ['easeOutCubic', easeOutCubic], ['easeInOutCubic', easeInOutCubic], ['easeInQuart', easeInQuart], ['easeOutQuart', easeOutQuart], ['easeInOutQuart', easeInOutQuart], ['easeInQuint', easeInQuint], ['easeOutQuint', easeOutQuint], ['easeInOutQuint', easeInOutQuint], ['easeInBack', easeInBack], ['easeOutBack', easeOutBack], ['easeInOutBack', easeInOutBack], ['easeInElastic', easeInElastic], ['easeOutElastic', easeOutElastic], ['easeInOutElastic', easeInOutElastic], ['easeInBounce', easeInBounce], ['easeOutBounce', easeOutBounce], ['easeInOutBounce', easeInOutBounce]]);

exports["default"] = _default;

/***/ }),

/***/ "e11f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e169":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawPolylinePath = drawPolylinePath;
exports.drawBezierCurvePath = drawBezierCurvePath;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

/**
 * @description Draw a polyline path
 * @param {Object} ctx        Canvas 2d context
 * @param {Array} points      The points that makes up a polyline
 * @param {Boolean} beginPath Whether to execute beginPath
 * @param {Boolean} closePath Whether to execute closePath
 * @return {Undefined} Void
 */
function drawPolylinePath(ctx, points) {
  var beginPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var closePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!ctx || points.length < 2) return false;
  if (beginPath) ctx.beginPath();
  points.forEach(function (point, i) {
    return point && (i === 0 ? ctx.moveTo.apply(ctx, (0, _toConsumableArray2["default"])(point)) : ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(point)));
  });
  if (closePath) ctx.closePath();
}
/**
 * @description Draw a bezier curve path
 * @param {Object} ctx        Canvas 2d context
 * @param {Array} points      The points that makes up a bezier curve
 * @param {Array} moveTo      The point need to excute moveTo
 * @param {Boolean} beginPath Whether to execute beginPath
 * @param {Boolean} closePath Whether to execute closePath
 * @return {Undefined} Void
 */


function drawBezierCurvePath(ctx, points) {
  var moveTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var beginPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var closePath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (!ctx || !points) return false;
  if (beginPath) ctx.beginPath();
  if (moveTo) ctx.moveTo.apply(ctx, (0, _toConsumableArray2["default"])(moveTo));
  points.forEach(function (item) {
    return item && ctx.bezierCurveTo.apply(ctx, (0, _toConsumableArray2["default"])(item[0]).concat((0, _toConsumableArray2["default"])(item[1]), (0, _toConsumableArray2["default"])(item[2])));
  });
  if (closePath) ctx.closePath();
}

var _default = {
  drawPolylinePath: drawPolylinePath,
  drawBezierCurvePath: drawBezierCurvePath
};
exports["default"] = _default;

/***/ }),

/***/ "eb53":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("a34a"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("c973"));

var _typeof2 = _interopRequireDefault(__webpack_require__("7037"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("448a"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("970b"));

var _style = _interopRequireDefault(__webpack_require__("d0b5"));

var _transition = _interopRequireDefault(__webpack_require__("8f47"));

var _util = __webpack_require__("5557");

/**
 * @description Class Graph
 * @param {Object} graph  Graph default configuration
 * @param {Object} config Graph config
 * @return {Graph} Instance of Graph
 */
var Graph = function Graph(graph, config) {
  (0, _classCallCheck2["default"])(this, Graph);
  config = (0, _util.deepClone)(config, true);
  var defaultConfig = {
    /**
     * @description Weather to render graph
     * @type {Boolean}
     * @default visible = true
     */
    visible: true,

    /**
     * @description Whether to enable drag
     * @type {Boolean}
     * @default drag = false
     */
    drag: false,

    /**
     * @description Whether to enable hover
     * @type {Boolean}
     * @default hover = false
     */
    hover: false,

    /**
     * @description Graph rendering index
     *  Give priority to index high graph in rendering
     * @type {Number}
     * @example index = 1
     */
    index: 1,

    /**
     * @description Animation delay time(ms)
     * @type {Number}
     * @default animationDelay = 0
     */
    animationDelay: 0,

    /**
     * @description Number of animation frames
     * @type {Number}
     * @default animationFrame = 30
     */
    animationFrame: 30,

    /**
     * @description Animation dynamic curve (Supported by transition)
     * @type {String}
     * @default animationCurve = 'linear'
     * @link https://github.com/jiaming743/Transition
     */
    animationCurve: 'linear',

    /**
     * @description Weather to pause graph animation
     * @type {Boolean}
     * @default animationPause = false
     */
    animationPause: false,

    /**
     * @description Rectangular hover detection zone
     *  Use this method for hover detection first
     * @type {Null|Array}
     * @default hoverRect = null
     * @example hoverRect = [0, 0, 100, 100] // [Rect start x, y, Rect width, height]
     */
    hoverRect: null,

    /**
     * @description Mouse enter event handler
     * @type {Function|Null}
     * @default mouseEnter = null
     */
    mouseEnter: null,

    /**
     * @description Mouse outer event handler
     * @type {Function|Null}
     * @default mouseOuter = null
     */
    mouseOuter: null,

    /**
     * @description Mouse click event handler
     * @type {Function|Null}
     * @default click = null
     */
    click: null
  };
  var configAbleNot = {
    status: 'static',
    animationRoot: [],
    animationKeys: [],
    animationFrameState: [],
    cache: {}
  };
  if (!config.shape) config.shape = {};
  if (!config.style) config.style = {};
  var shape = Object.assign({}, graph.shape, config.shape);
  Object.assign(defaultConfig, config, configAbleNot);
  Object.assign(this, graph, defaultConfig);
  this.shape = shape;
  this.style = new _style["default"](config.style);
  this.addedProcessor();
};
/**
 * @description Processor of added
 * @return {Undefined} Void
 */


exports["default"] = Graph;

Graph.prototype.addedProcessor = function () {
  if (typeof this.setGraphCenter === 'function') this.setGraphCenter(null, this); // The life cycle 'added"

  if (typeof this.added === 'function') this.added(this);
};
/**
 * @description Processor of draw
 * @param {CRender} render Instance of CRender
 * @param {Graph} graph    Instance of Graph
 * @return {Undefined} Void
 */


Graph.prototype.drawProcessor = function (render, graph) {
  var ctx = render.ctx;
  graph.style.initStyle(ctx);
  if (typeof this.beforeDraw === 'function') this.beforeDraw(this, render);
  graph.draw(render, graph);
  if (typeof this.drawed === 'function') this.drawed(this, render);
  graph.style.restoreTransform(ctx);
};
/**
 * @description Processor of hover check
 * @param {Array} position Mouse Position
 * @param {Graph} graph    Instance of Graph
 * @return {Boolean} Result of hover check
 */


Graph.prototype.hoverCheckProcessor = function (position, _ref) {
  var hoverRect = _ref.hoverRect,
      style = _ref.style,
      hoverCheck = _ref.hoverCheck;
  var graphCenter = style.graphCenter,
      rotate = style.rotate,
      scale = style.scale,
      translate = style.translate;

  if (graphCenter) {
    if (rotate) position = (0, _util.getRotatePointPos)(-rotate, position, graphCenter);
    if (scale) position = (0, _util.getScalePointPos)(scale.map(function (s) {
      return 1 / s;
    }), position, graphCenter);
    if (translate) position = (0, _util.getTranslatePointPos)(translate.map(function (v) {
      return v * -1;
    }), position);
  }

  if (hoverRect) return _util.checkPointIsInRect.apply(void 0, [position].concat((0, _toConsumableArray2["default"])(hoverRect)));
  return hoverCheck(position, this);
};
/**
 * @description Processor of move
 * @param {Event} e Mouse movement event
 * @return {Undefined} Void
 */


Graph.prototype.moveProcessor = function (e) {
  this.move(e, this);
  if (typeof this.beforeMove === 'function') this.beforeMove(e, this);
  if (typeof this.setGraphCenter === 'function') this.setGraphCenter(e, this);
  if (typeof this.moved === 'function') this.moved(e, this);
};
/**
 * @description Update graph state
 * @param {String} attrName Updated attribute name
 * @param {Any} change      Updated value
 * @return {Undefined} Void
 */


Graph.prototype.attr = function (attrName) {
  var change = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (!attrName || change === undefined) return false;
  var isObject = (0, _typeof2["default"])(this[attrName]) === 'object';
  if (isObject) change = (0, _util.deepClone)(change, true);
  var render = this.render;

  if (attrName === 'style') {
    this.style.update(change);
  } else if (isObject) {
    Object.assign(this[attrName], change);
  } else {
    this[attrName] = change;
  }

  if (attrName === 'index') render.sortGraphsByIndex();
  render.drawAllGraph();
};
/**
 * @description Update graphics state (with animation)
 *  Only shape and style attributes are supported
 * @param {String} attrName Updated attribute name
 * @param {Any} change      Updated value
 * @param {Boolean} wait    Whether to store the animation waiting
 *                          for the next animation request
 * @return {Promise} Animation Promise
 */


Graph.prototype.animation =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(attrName, change) {
    var wait,
        changeRoot,
        changeKeys,
        beforeState,
        animationFrame,
        animationCurve,
        animationDelay,
        animationFrameState,
        render,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wait = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

            if (!(attrName !== 'shape' && attrName !== 'style')) {
              _context2.next = 4;
              break;
            }

            console.error('Only supported shape and style animation!');
            return _context2.abrupt("return");

          case 4:
            change = (0, _util.deepClone)(change, true);
            if (attrName === 'style') this.style.colorProcessor(change);
            changeRoot = this[attrName];
            changeKeys = Object.keys(change);
            beforeState = {};
            changeKeys.forEach(function (key) {
              return beforeState[key] = changeRoot[key];
            });
            animationFrame = this.animationFrame, animationCurve = this.animationCurve, animationDelay = this.animationDelay;
            animationFrameState = (0, _transition["default"])(animationCurve, beforeState, change, animationFrame, true);
            this.animationRoot.push(changeRoot);
            this.animationKeys.push(changeKeys);
            this.animationFrameState.push(animationFrameState);

            if (!wait) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt("return");

          case 17:
            if (!(animationDelay > 0)) {
              _context2.next = 20;
              break;
            }

            _context2.next = 20;
            return delay(animationDelay);

          case 20:
            render = this.render;
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(resolve) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return render.launchAnimation();

                      case 2:
                        resolve();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * @description Extract the next frame of data from the animation queue
 *              and update the graph state
 * @return {Undefined} Void
 */


Graph.prototype.turnNextAnimationFrame = function (timeStamp) {
  var animationDelay = this.animationDelay,
      animationRoot = this.animationRoot,
      animationKeys = this.animationKeys,
      animationFrameState = this.animationFrameState,
      animationPause = this.animationPause;
  if (animationPause) return;
  if (Date.now() - timeStamp < animationDelay) return;
  animationRoot.forEach(function (root, i) {
    animationKeys[i].forEach(function (key) {
      root[key] = animationFrameState[i][0][key];
    });
  });
  animationFrameState.forEach(function (stateItem, i) {
    stateItem.shift();
    var noFrame = stateItem.length === 0;
    if (noFrame) animationRoot[i] = null;
    if (noFrame) animationKeys[i] = null;
  });
  this.animationFrameState = animationFrameState.filter(function (state) {
    return state.length;
  });
  this.animationRoot = animationRoot.filter(function (root) {
    return root;
  });
  this.animationKeys = animationKeys.filter(function (keys) {
    return keys;
  });
};
/**
 * @description Skip to the last frame of animation
 * @return {Undefined} Void
 */


Graph.prototype.animationEnd = function () {
  var animationFrameState = this.animationFrameState,
      animationKeys = this.animationKeys,
      animationRoot = this.animationRoot,
      render = this.render;
  animationRoot.forEach(function (root, i) {
    var currentKeys = animationKeys[i];
    var lastState = animationFrameState[i].pop();
    currentKeys.forEach(function (key) {
      return root[key] = lastState[key];
    });
  });
  this.animationFrameState = [];
  this.animationKeys = [];
  this.animationRoot = [];
  return render.drawAllGraph();
};
/**
 * @description Pause animation behavior
 * @return {Undefined} Void
 */


Graph.prototype.pauseAnimation = function () {
  this.attr('animationPause', true);
};
/**
 * @description Try animation behavior
 * @return {Undefined} Void
 */


Graph.prototype.playAnimation = function () {
  var render = this.render;
  this.attr('animationPause', false);
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(resolve) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return render.launchAnimation();

            case 2:
              resolve();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
};
/**
 * @description Processor of delete
 * @param {CRender} render Instance of CRender
 * @return {Undefined} Void
 */


Graph.prototype.delProcessor = function (render) {
  var _this = this;

  var graphs = render.graphs;
  var index = graphs.findIndex(function (graph) {
    return graph === _this;
  });
  if (index === -1) return;
  if (typeof this.beforeDelete === 'function') this.beforeDelete(this);
  graphs.splice(index, 1, null);
  if (typeof this.deleted === 'function') this.deleted(this);
};
/**
 * @description Return a timed release Promise
 * @param {Number} time Release time
 * @return {Promise} A timed release Promise
 */


function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

/***/ }),

/***/ "eec4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__("b770").forEach;
var elementUtilsMaker       = __webpack_require__("5be5");
var listenerHandlerMaker    = __webpack_require__("49ad");
var idGeneratorMaker        = __webpack_require__("2cef");
var idHandlerMaker          = __webpack_require__("5058");
var reporterMaker           = __webpack_require__("abb4");
var browserDetector         = __webpack_require__("18e9");
var batchProcessorMaker     = __webpack_require__("c274");
var stateHandler            = __webpack_require__("d6eb");

//Detection strategies.
var objectStrategyMaker     = __webpack_require__("18d2");
var scrollStrategyMaker     = __webpack_require__("c946");

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug, important: importantCssRules }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "f111":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barConfig = void 0;
var barConfig = {
  /**
   * @description Whether to display this bar chart
   * @type {Boolean}
   * @default show = true
   */
  show: true,

  /**
   * @description Legend name
   * @type {String}
   * @default name = ''
   */
  name: '',

  /**
   * @description Data stacking
   * The data value of the series element of the same stack
   * will be superimposed (the latter value will be superimposed on the previous value)
   * @type {String}
   * @default stack = ''
   */
  stack: '',

  /**
   * @description Bar shape type
   * @type {String}
   * @default shapeType = 'normal'
   * @example shapeType = 'normal' | 'leftEchelon' | 'rightEchelon'
   */
  shapeType: 'normal',

  /**
   * @description Echelon bar sharpness offset
   * @type {Number}
   * @default echelonOffset = 10
   */
  echelonOffset: 10,

  /**
   * @description Bar width
   * This property should be set on the last 'bar' series
   * in this coordinate system to take effect and will be in effect
   * for all 'bar' series in this coordinate system
   * @type {String|Number}
   * @default barWidth = 'auto'
   * @example barWidth = 'auto' | '10%' | 20
   */
  barWidth: 'auto',

  /**
   * @description Bar gap
   * This property should be set on the last 'bar' series
   * in this coordinate system to take effect and will be in effect
   * for all 'bar' series in this coordinate system
   * @type {String|Number}
   * @default barGap = '30%'
   * @example barGap = '30%' | 30
   */
  barGap: '30%',

  /**
   * @description Bar category gap
   * This property should be set on the last 'bar' series
   * in this coordinate system to take effect and will be in effect
   * for all 'bar' series in this coordinate system
   * @type {String|Number}
   * @default barCategoryGap = '20%'
   * @example barCategoryGap = '20%' | 20
   */
  barCategoryGap: '20%',

  /**
   * @description Bar x axis index
   * @type {Number}
   * @default xAxisIndex = 0
   * @example xAxisIndex = 0 | 1
   */
  xAxisIndex: 0,

  /**
   * @description Bar y axis index
   * @type {Number}
   * @default yAxisIndex = 0
   * @example yAxisIndex = 0 | 1
   */
  yAxisIndex: 0,

  /**
   * @description Bar chart data
   * @type {Array}
   * @default data = []
   * @example data = [100, 200, 300]
   */
  data: [],

  /**
   * @description Background bar configuration
   * @type {Object}
   */
  backgroundBar: {
    /**
     * @description Whether to display background bar
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Background bar width
     * @type {String|Number}
     * @default width = 'auto'
     * @example width = 'auto' | '30%' | 30
     */
    width: 'auto',

    /**
     * @description Background bar default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: 'rgba(200, 200, 200, .4)'
    }
  },

  /**
   * @description Bar label configuration
   * @type {Object}
   */
  label: {
    /**
     * @description Whether to display bar label
     * @type {Boolean}
     * @default show = false
     */
    show: false,

    /**
     * @description Bar label position
     * @type {String}
     * @default position = 'top'
     * @example position = 'top' | 'center' | 'bottom'
     */
    position: 'top',

    /**
     * @description Bar label offset
     * @type {Array}
     * @default offset = [0, -10]
     */
    offset: [0, -10],

    /**
     * @description Bar label formatter
     * @type {String|Function}
     * @default formatter = null
     * @example formatter = '{value}件'
     * @example formatter = (dataItem) => (dataItem.value)
     */
    formatter: null,

    /**
     * @description Bar label default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fontSize: 10
    }
  },

  /**
   * @description Bar gradient configuration
   * @type {Object}
   */
  gradient: {
    /**
     * @description Gradient color (Hex|rgb|rgba)
     * @type {Array}
     * @default color = []
     */
    color: [],

    /**
     * @description Local gradient
     * @type {Boolean}
     * @default local = true
     */
    local: true
  },

  /**
   * @description Bar style default configuration
   * @type {Object}
   * @default style = {Configuration Of Class Style}
   */
  barStyle: {},

  /**
   * @description Independent color mode
   * When set to true, independent color mode is enabled
   * @type {Boolean}
   * @default independentColor = false
   */
  independentColor: false,

  /**
   * @description Independent colors
   * Only effective when independent color mode is enabled
   * Default value is the same as the color in the root configuration
   * Two-dimensional color array can produce gradient colors
   * @type {Array}
   * @example independentColor = ['#fff', '#000']
   * @example independentColor = [['#fff', '#000'], '#000']
   */
  independentColors: [],

  /**
   * @description Bar chart render level
   * Priority rendering high level
   * @type {Number}
   * @default rLevel = 0
   */
  rLevel: 0,

  /**
   * @description Bar animation curve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',

  /**
   * @description Bar animation frame
   * @type {Number}
   * @default animationFrame = 50
   */
  animationFrame: 50
};
exports.barConfig = barConfig;

/***/ }),

/***/ "f1bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Gauge/index.vue?vue&type=template&id=8af68344&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dv-charts',{ref:"gauge",attrs:{"option":_vm.option}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Gauge/index.vue?vue&type=template&id=8af68344&

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/Gauge/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Gaugevue_type_script_lang_js_ = ({
  name: "Gauge",
  data() {
    return {
      container: null,
      timer: null,
      option: {
        title: {
          text: "剩余油量表",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 55 }],
            center: ["50%", "55%"],
            axisLabel: {
              formatter: "{value}%",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            animationCurve: "easeInOutBack",
          },
        ],
      },
    };
  },
  methods: {
    resize() {
      this.container.onResize();
    },
  },
  mounted() {
    this.container = this.$refs.gauge;
    const erd = element_resize_detector_default()();
    erd.listenTo(this.$parent.$el, (element) => {
      this.$nextTick(() => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          // 监听到事件后执行的业务逻辑
          this.resize();
        }, 100);
      });
    });
  },
});

// CONCATENATED MODULE: ./packages/Gauge/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Gaugevue_type_script_lang_js_ = (Gaugevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./packages/Gauge/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  packages_Gaugevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Gauge = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f3cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorConfig = void 0;
var colorConfig = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e062ae', '#e690d1', '#e7bcf3', '#9d96f5', '#8378ea', '#96bfff'];
exports.colorConfig = colorConfig;

/***/ }),

/***/ "f6a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec7db02e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b0f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec7db02e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec7db02e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ec7db02e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fa10":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ConfigList", function() { return /* reexport */ configCombine; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.css
var main = __webpack_require__("62fd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue?vue&type=template&id=0cd75252&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-active-ring-chart"},[_c('div',{ref:"active-ring-chart",staticClass:"active-ring-chart-container"}),_c('div',{staticClass:"active-ring-info"},[_c('dv-digital-flop',{attrs:{"config":_vm.digitalFlop}}),_c('div',{staticClass:"active-ring-name",style:(_vm.fontSize)},[_vm._v(_vm._s(_vm.ringName))])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue?vue&type=template&id=0cd75252&

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/index.js
var lib = __webpack_require__("6c02");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue?vue&type=template&id=9d55478c&
var mainvue_type_template_id_9d55478c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-digital-flop"},[_c('canvas',{ref:"digital-flop"})])}
var mainvue_type_template_id_9d55478c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue?vue&type=template&id=9d55478c&

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/index.js
var c_render_lib = __webpack_require__("9886");
var c_render_lib_default = /*#__PURE__*/__webpack_require__.n(c_render_lib);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/extend/index.js
var extend = __webpack_require__("0ca1");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("becb");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("5557");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//









/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'DvDigitalFlop',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      renderer: null,

      defaultConfig: {
        /**
         * @description Number for digital flop
         * @type {Array<Number>}
         * @default number = []
         * @example number = [10]
         */
        number: [],
        /**
         * @description Content formatter
         * @type {String}
         * @default content = ''
         * @example content = '{nt}个'
         */
        content: '',
        /**
         * @description Number toFixed
         * @type {Number}
         * @default toFixed = 0
         */
        toFixed: 0,
        /**
         * @description Text align
         * @type {String}
         * @default textAlign = 'center'
         * @example textAlign = 'center' | 'left' | 'right'
         */
        textAlign: 'center',
        /**
         * @description rowGap
         * @type {Number}
         @default rowGap = 0
         */
        rowGap: 0,
        /**
         * @description Text style configuration
         * @type {Object} {CRender Class Style}
         */
        style: {
          fontSize: 30,
          fill: '#3de7c9'
        },
        /**
         * @description Number formatter
         * @type {Null|Function}
         */
        formatter: undefined,
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: 'easeOutCubic',
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50
      },

      mergedConfig: null,

      graph: null
    }
  },
  watch: {
    config () {
      const { update } = this

      update()
    }
  },
  methods: {
    init () {
      const { initRender, mergeConfig, initGraph } = this

      initRender()

      mergeConfig()

      initGraph()
    },
    initRender () {
      const { $refs } = this

      this.renderer = new c_render_lib_default.a($refs['digital-flop'])
    },
    mergeConfig () {
      const { defaultConfig, config } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})
    },
    initGraph () {
      const { getShape, getStyle, renderer, mergedConfig } = this

      const { animationCurve, animationFrame } = mergedConfig

      const shape = getShape()
      const style = getStyle()

      this.graph = renderer.add({
        name: 'numberText',
        animationCurve,
        animationFrame,
        shape,
        style
      })
    },
    getShape () {
      const { number, content, toFixed, textAlign, rowGap, formatter } = this.mergedConfig

      const [w, h] = this.renderer.area

      const position = [w / 2, h / 2]

      if (textAlign === 'left') position[0] = 0
      if (textAlign === 'right') position[0] = w

      return {
        number,
        content,
        toFixed,
        position,
        rowGap,
        formatter
      }
    },
    getStyle () {
      const { style, textAlign } = this.mergedConfig

      return Object(util["deepMerge"])(style, {
        textAlign,
        textBaseline: 'middle'
      })
    },
    update () {
      const { mergeConfig, mergeShape, getShape, getStyle, graph, mergedConfig } = this

      graph.animationEnd()

      mergeConfig()

      if (!graph) return

      const { animationCurve, animationFrame } = mergedConfig

      const shape = getShape()
      const style = getStyle()

      mergeShape(graph, shape)

      graph.animationCurve = animationCurve
      graph.animationFrame = animationFrame

      graph.animation('style', style, true)
      graph.animation('shape', shape)
    },
    mergeShape (graph, shape) {
      const cacheNum = graph.shape.number.length
      const shapeNum = shape.number.length

      if (cacheNum !== shapeNum) graph.shape.number = shape.number
    }
  },
  mounted () {
    const { init } = this

    init()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("0c7c");

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_9d55478c_render,
  mainvue_type_template_id_9d55478c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var activeRingChart_src_mainvue_type_script_lang_js_ = ({
  name: 'DvActiveRingChart',
  components: {
    dvDigitalFlop: src_main
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Ring radius
         * @type {String|Number}
         * @default radius = '50%'
         * @example radius = '50%' | 100
         */
        radius: '50%',
        /**
         * @description Active ring radius
         * @type {String|Number}
         * @default activeRadius = '55%'
         * @example activeRadius = '55%' | 110
         */
        activeRadius: '55%',
        /**
         * @description Ring data
         * @type {Array<Object>}
         * @default data = [{ name: '', value: 0 }]
         */
        data: [{ name: '', value: 0 }],
        /**
         * @description Ring line width
         * @type {Number}
         * @default lineWidth = 20
         */
        lineWidth: 20,
        /**
         * @description Active time gap (ms)
         * @type {Number}
         * @default activeTimeGap = 3000
         */
        activeTimeGap: 3000,
        /**
         * @description Ring color (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = [Charts Default Color]
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        color: [],
        /**
         * @description Digital flop style
         * @type {Object}
         */
        digitalFlopStyle: {
          fontSize: 25,
          fill: '#fff'
        },
        /**
         * @description Digital flop toFixed
         * @type {Number}
         */
        digitalFlopToFixed: 0,
        /**
         * @description Digital flop unit
         * @type {String}
         */
        digitalFlopUnit: '',
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: 'easeOutCubic',
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50,
        /**
         * @description showOriginValue
         * @type {Boolean}
         * @default showOriginValue = false
         */
        showOriginValue: false
      },

      mergedConfig: null,

      chart: null,

      activeIndex: 0,

      animationHandler: ''
    }
  },
  computed: {
    digitalFlop() {
      const { mergedConfig, activeIndex } = this

      if (!mergedConfig) return {}

      const {
        digitalFlopStyle,
        digitalFlopToFixed,
        data,
        showOriginValue,
        digitalFlopUnit
      } = mergedConfig

      const value = data.map(({ value }) => value)

      let displayValue

      if (showOriginValue) {
        displayValue = value[activeIndex]
      } else {
        const sum = value.reduce((all, v) => all + v, 0)

        const percent = parseFloat((value[activeIndex] / sum) * 100) || 0

        displayValue = percent
      }

      return {
        content: showOriginValue ? `{nt}${digitalFlopUnit}` : `{nt}${digitalFlopUnit || '%'}`,
        number: [displayValue],
        style: digitalFlopStyle,
        toFixed: digitalFlopToFixed
      }
    },
    ringName() {
      const { mergedConfig, activeIndex } = this

      if (!mergedConfig) return ''

      return mergedConfig.data[activeIndex].name
    },
    fontSize() {
      const { mergedConfig } = this

      if (!mergedConfig) return ''

      return `font-size: ${mergedConfig.digitalFlopStyle.fontSize}px;`
    }
  },
  watch: {
    config() {
      const { animationHandler, mergeConfig, setRingOption } = this

      clearTimeout(animationHandler)

      this.activeIndex = 0

      mergeConfig()

      setRingOption()
    }
  },
  methods: {
    init() {
      const { initChart, mergeConfig, setRingOption } = this

      initChart()

      mergeConfig()

      setRingOption()
    },
    initChart() {
      const { $refs } = this

      this.chart = new lib_default.a($refs['active-ring-chart'])
    },
    mergeConfig() {
      const { defaultConfig, config } = this

      this.mergedConfig = Object(util["deepMerge"])(
        Object(plugin_util["deepClone"])(defaultConfig, true),
        config || {}
      )
    },
    setRingOption() {
      const { getRingOption, chart, ringAnimation } = this

      const option = getRingOption()

      chart.setOption(option, true)

      ringAnimation()
    },
    getRingOption() {
      const { mergedConfig, getRealRadius } = this

      const radius = getRealRadius()

      mergedConfig.data.forEach(dataItem => {
        dataItem.radius = radius
      })

      return {
        series: [
          {
            type: 'pie',
            ...mergedConfig,
            outsideLabel: {
              show: false
            }
          }
        ],
        color: mergedConfig.color
      }
    },
    getRealRadius(active = false) {
      const { mergedConfig, chart } = this

      const { radius, activeRadius, lineWidth } = mergedConfig

      const maxRadius = Math.min(...chart.render.area) / 2

      const halfLineWidth = lineWidth / 2

      let realRadius = active ? activeRadius : radius

      if (typeof realRadius !== 'number')
        realRadius = (parseInt(realRadius) / 100) * maxRadius

      const insideRadius = realRadius - halfLineWidth
      const outSideRadius = realRadius + halfLineWidth

      return [insideRadius, outSideRadius]
    },
    ringAnimation() {
      let { activeIndex, getRingOption, chart, getRealRadius } = this

      const radius = getRealRadius()
      const active = getRealRadius(true)

      const option = getRingOption()

      const { data } = option.series[0]

      data.forEach((dataItem, i) => {
        if (i === activeIndex) {
          dataItem.radius = active
        } else {
          dataItem.radius = radius
        }
      })

      chart.setOption(option, true)

      const { activeTimeGap } = option.series[0]

      this.animationHandler = setTimeout(foo => {
        activeIndex += 1

        if (activeIndex >= data.length) activeIndex = 0

        this.activeIndex = activeIndex

        this.ringAnimation()
      }, activeTimeGap)
    }
  },
  mounted() {
    const { init } = this

    init()
  },
  beforeDestroy() {
    const { animationHandler } = this

    clearTimeout(animationHandler)
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_activeRingChart_src_mainvue_type_script_lang_js_ = (activeRingChart_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue





/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  components_activeRingChart_src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activeRingChart_src_main = (main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/index.js



/* harmony default export */ var activeRingChart = (function (Vue) {
  Vue.component(activeRingChart_src_main.name, activeRingChart_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.css
var borderBox1_src_main = __webpack_require__("fe7b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue?vue&type=template&id=205f0004&
var mainvue_type_template_id_205f0004_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-1"},[_c('svg',{staticClass:"border",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("10, 27 10, " + (_vm.height - 27) + " 13, " + (_vm.height - 24) + " 13, " + (_vm.height - 21) + " 24, " + (_vm.height - 11) + "\n    38, " + (_vm.height - 11) + " 41, " + (_vm.height - 8) + " 73, " + (_vm.height - 8) + " 75, " + (_vm.height - 10) + " 81, " + (_vm.height - 10) + "\n    85, " + (_vm.height - 6) + " " + (_vm.width - 85) + ", " + (_vm.height - 6) + " " + (_vm.width - 81) + ", " + (_vm.height - 10) + " " + (_vm.width - 75) + ", " + (_vm.height - 10) + "\n    " + (_vm.width - 73) + ", " + (_vm.height - 8) + " " + (_vm.width - 41) + ", " + (_vm.height - 8) + " " + (_vm.width - 38) + ", " + (_vm.height - 11) + "\n    " + (_vm.width - 24) + ", " + (_vm.height - 11) + " " + (_vm.width - 13) + ", " + (_vm.height - 21) + " " + (_vm.width - 13) + ", " + (_vm.height - 24) + "\n    " + (_vm.width - 10) + ", " + (_vm.height - 27) + " " + (_vm.width - 10) + ", 27 " + (_vm.width - 13) + ", 25 " + (_vm.width - 13) + ", 21\n    " + (_vm.width - 24) + ", 11 " + (_vm.width - 38) + ", 11 " + (_vm.width - 41) + ", 8 " + (_vm.width - 73) + ", 8 " + (_vm.width - 75) + ", 10\n    " + (_vm.width - 81) + ", 10 " + (_vm.width - 85) + ", 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24")}})]),_vm._l((_vm.border),function(item){return _c('svg',{key:item,class:(item + " border"),attrs:{"width":"150px","height":"150px"}},[_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"points":"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"dur":"0.5s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"fill":_vm.mergedColor[1],"points":"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1])),"dur":"0.5s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"points":"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";transparent"),"dur":"1s","begin":"0s","repeatCount":"indefinite"}})])])}),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)],2)}
var mainvue_type_template_id_205f0004_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue?vue&type=template&id=205f0004&

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

function debounce (delay, callback) {
  let lastTime

  return function () {
    clearTimeout(lastTime)

    const [that, args] = [this, arguments]

    lastTime = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}

function observerDomResize (dom, callback) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

function getPointDistance (pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

function uuid (hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
  })
}

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js


/* harmony default export */ var autoResize = ({
  data () {
    return {
      dom: '',

      width: 0,
      height: 0,

      debounceInitWHFun: '',

      domObserver: ''
    }
  },
  methods: {
    async autoResizeMixinInit () {
      const { initWH, getDebounceInitWHFun, bindDomResizeCallback, afterAutoResizeMixinInit } = this

      await initWH(false)

      getDebounceInitWHFun()

      bindDomResizeCallback()

      if (typeof afterAutoResizeMixinInit === 'function') afterAutoResizeMixinInit()
    },
    initWH (resize = true) {
      const { $nextTick, $refs, ref, onResize } = this

      return new Promise(resolve => {
        $nextTick(_ => {
          const dom = this.dom = $refs[ref]

          this.width = dom ? dom.clientWidth : 0
          this.height = dom ? dom.clientHeight : 0

          if (!dom) {
            console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')
          } else if (!this.width || !this.height) {
            console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')
          }

          if (typeof onResize === 'function' && resize) onResize()

          resolve()
        })
      })
    },
    getDebounceInitWHFun () {
      const { initWH } = this

      this.debounceInitWHFun = debounce(100, initWH)
    },
    bindDomResizeCallback () {
      const { dom, debounceInitWHFun } = this

      this.domObserver = observerDomResize(dom, debounceInitWHFun)

      window.addEventListener('resize', debounceInitWHFun)
    },
    unbindDomResizeCallback () {
      let { domObserver, debounceInitWHFun } = this

      if (!domObserver) return

      domObserver.disconnect()
      domObserver.takeRecords()
      domObserver = null

      window.removeEventListener('resize', debounceInitWHFun)
    }
  },
  mounted () {
    const { autoResizeMixinInit } = this

    autoResizeMixinInit()
  },
  beforeDestroy () {
    const { unbindDomResizeCallback } = this

    unbindDomResizeCallback()
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox1_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox1',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-1',

      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],

      defaultColor: ['#4fd2dd', '#235fa7'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox1_src_mainvue_type_script_lang_js_ = (borderBox1_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue





/* normalize component */

var src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox1_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_205f0004_render,
  mainvue_type_template_id_205f0004_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox1_src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/index.js



/* harmony default export */ var borderBox1 = (function (Vue) {
  Vue.component(components_borderBox1_src_main.name, components_borderBox1_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.css
var borderBox10_src_main = __webpack_require__("6ccd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue?vue&type=template&id=de1fc3cc&
var mainvue_type_template_id_de1fc3cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-10",style:(("box-shadow: inset 0 0 25px 3px " + (_vm.mergedColor[0])))},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      4, 0 " + (_vm.width - 4) + ", 0 " + _vm.width + ", 4 " + _vm.width + ", " + (_vm.height - 4) + " " + (_vm.width - 4) + ", " + _vm.height + "\n      4, " + _vm.height + " 0, " + (_vm.height - 4) + " 0, 4\n    ")}})]),_vm._l((_vm.border),function(item){return _c('svg',{key:item,class:(item + " dv-border-svg-container"),attrs:{"width":"150px","height":"150px"}},[_c('polygon',{attrs:{"fill":_vm.mergedColor[1],"points":"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"}})])}),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)],2)}
var mainvue_type_template_id_de1fc3cc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue?vue&type=template&id=de1fc3cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox10_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox10',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-10',

      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],

      defaultColor: ['#1d48c4', '#d3e1f8'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox10_src_mainvue_type_script_lang_js_ = (borderBox10_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue





/* normalize component */

var borderBox10_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox10_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_de1fc3cc_render,
  mainvue_type_template_id_de1fc3cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox10_src_main = (borderBox10_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/index.js



/* harmony default export */ var borderBox10 = (function (Vue) {
  Vue.component(components_borderBox10_src_main.name, components_borderBox10_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.css
var borderBox11_src_main = __webpack_require__("4656");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue?vue&type=template&id=c3ee2428&
var mainvue_type_template_id_c3ee2428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-11"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('filter',{attrs:{"id":_vm.filterId,"height":"150%","width":"150%","x":"-25%","y":"-25%"}},[_c('feMorphology',{attrs:{"operator":"dilate","radius":"2","in":"SourceAlpha","result":"thicken"}}),_c('feGaussianBlur',{attrs:{"in":"thicken","stdDeviation":"3","result":"blurred"}}),_c('feFlood',{attrs:{"flood-color":_vm.mergedColor[1],"result":"glowColor"}}),_c('feComposite',{attrs:{"in":"glowColor","in2":"blurred","operator":"in","result":"softGlowColored"}}),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"softGlowColored"}}),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1)]),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      20, 32 " + (_vm.width * 0.5 - _vm.titleWidth / 2) + ", 32 " + (_vm.width * 0.5 - _vm.titleWidth / 2 + 20) + ", 53\n      " + (_vm.width * 0.5 + _vm.titleWidth / 2 - 20) + ", 53 " + (_vm.width * 0.5 + _vm.titleWidth / 2) + ", 32\n      " + (_vm.width - 20) + ", 32 " + (_vm.width - 8) + ", 48 " + (_vm.width - 8) + ", " + (_vm.height - 25) + " " + (_vm.width - 20) + ", " + (_vm.height - 8) + "\n      20, " + (_vm.height - 8) + " 8, " + (_vm.height - 25) + " 8, 50\n    ")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + ((_vm.width - _vm.titleWidth) / 2) + ", 30\n        20, 30 7, 50 7, " + (50 + (_vm.height - 167) / 2) + "\n        13, " + (55 + (_vm.height - 167) / 2) + " 13, " + (135 + (_vm.height - 167) / 2) + "\n        7, " + (140 + (_vm.height - 167) / 2) + " 7, " + (_vm.height - 27) + "\n        20, " + (_vm.height - 7) + " " + (_vm.width - 20) + ", " + (_vm.height - 7) + " " + (_vm.width - 7) + ", " + (_vm.height - 27) + "\n        " + (_vm.width - 7) + ", " + (140 + (_vm.height - 167) / 2) + " " + (_vm.width - 13) + ", " + (135 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 13) + ", " + (55 + (_vm.height - 167) / 2) + " " + (_vm.width - 7) + ", " + (50 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 7) + ", 50 " + (_vm.width - 20) + ", 30 " + ((_vm.width + _vm.titleWidth) / 2) + ", 30\n        " + ((_vm.width + _vm.titleWidth) / 2 - 20) + ", 7 " + ((_vm.width - _vm.titleWidth) / 2 + 20) + ", 7\n        " + ((_vm.width - _vm.titleWidth) / 2) + ", 30 " + ((_vm.width - _vm.titleWidth) / 2 + 20) + ", 52\n        " + ((_vm.width + _vm.titleWidth) / 2 - 20) + ", 52 " + ((_vm.width + _vm.titleWidth) / 2) + ", 30\n      ")}}),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":"transparent","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 - 5) + ", 30 " + ((_vm.width + _vm.titleWidth) / 2 - 21) + ", 11\n        " + ((_vm.width + _vm.titleWidth) / 2 - 27) + ", 11 " + ((_vm.width + _vm.titleWidth) / 2 - 8) + ", 34\n      ")}}),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":"transparent","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 + 5) + ", 30 " + ((_vm.width - _vm.titleWidth) / 2 + 22) + ", 49\n        " + ((_vm.width - _vm.titleWidth) / 2 + 28) + ", 49 " + ((_vm.width - _vm.titleWidth) / 2 + 8) + ", 26\n      ")}}),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 - 11) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 - 32) + ", 11\n        " + ((_vm.width - _vm.titleWidth) / 2 + 23) + ", 11 " + ((_vm.width - _vm.titleWidth) / 2 + 11) + ", 23\n        " + ((_vm.width - _vm.titleWidth) / 2 + 33) + ", 49 " + ((_vm.width + _vm.titleWidth) / 2 - 22) + ", 49\n      ")}}),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"1","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 10) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 31) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 25) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 4) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"1;0.7;1","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.7","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 40) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 61) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 55) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 34) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.7;0.4;0.7","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.5","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 70) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 91) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 85) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 64) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.5;0.2;0.5","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"1","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 30) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 9) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 3) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 24) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"1;0.7;1","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.7","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 60) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 39) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 33) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 54) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.7;0.4;0.7","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.5","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 90) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 69) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 63) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 84) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.5;0.2;0.5","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_c('text',{staticClass:"dv-border-box-11-title",attrs:{"x":("" + (_vm.width / 2)),"y":"32","fill":"#fff","font-size":"18","text-anchor":"middle","dominant-baseline":"middle"}},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        7, " + (53 + (_vm.height - 167) / 2) + " 11, " + (57 + (_vm.height - 167) / 2) + "\n        11, " + (133 + (_vm.height - 167) / 2) + " 7, " + (137 + (_vm.height - 167) / 2) + "\n      ")}}),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + (_vm.width - 7) + ", " + (53 + (_vm.height - 167) / 2) + " " + (_vm.width - 11) + ", " + (57 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 11) + ", " + (133 + (_vm.height - 167) / 2) + " " + (_vm.width - 7) + ", " + (137 + (_vm.height - 167) / 2) + "\n      ")}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_c3ee2428_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue?vue&type=template&id=c3ee2428&

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var color_lib = __webpack_require__("53b8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var borderBox11_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox11',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    titleWidth: {
      type: Number,
      default: 250
    },
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'border-box-11',
      filterId: `border-box-11-filterId-${id}`,

      defaultColor: ['#8aaafb', '#1f33a2'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    },
    fade: color_lib["fade"]
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox11_src_mainvue_type_script_lang_js_ = (borderBox11_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue





/* normalize component */

var borderBox11_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox11_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_c3ee2428_render,
  mainvue_type_template_id_c3ee2428_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox11_src_main = (borderBox11_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/index.js



/* harmony default export */ var borderBox11 = (function (Vue) {
  Vue.component(components_borderBox11_src_main.name, components_borderBox11_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.css
var borderBox12_src_main = __webpack_require__("3c0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue?vue&type=template&id=460c1118&
var mainvue_type_template_id_460c1118_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-12"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('filter',{attrs:{"id":_vm.filterId,"height":"150%","width":"150%","x":"-25%","y":"-25%"}},[_c('feMorphology',{attrs:{"operator":"dilate","radius":"1","in":"SourceAlpha","result":"thicken"}}),_c('feGaussianBlur',{attrs:{"in":"thicken","stdDeviation":"2","result":"blurred"}}),_c('feFlood',{attrs:{"flood-color":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70),"result":"glowColor"}},[_c('animate',{attrs:{"attributeName":"flood-color","values":("\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70)) + ";\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30)) + ";\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70)) + ";\n            "),"dur":"3s","begin":"0s","repeatCount":"indefinite"}})]),_c('feComposite',{attrs:{"in":"glowColor","in2":"blurred","operator":"in","result":"softGlowColored"}}),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"softGlowColored"}}),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1)]),(_vm.width && _vm.height)?_c('path',{attrs:{"fill":_vm.backgroundColor,"stroke-width":"2","stroke":_vm.mergedColor[0],"d":("\n        M15 5 L " + (_vm.width - 15) + " 5 Q " + (_vm.width - 5) + " 5, " + (_vm.width - 5) + " 15\n        L " + (_vm.width - 5) + " " + (_vm.height - 15) + " Q " + (_vm.width - 5) + " " + (_vm.height - 5) + ", " + (_vm.width - 15) + " " + (_vm.height - 5) + "\n        L 15, " + (_vm.height - 5) + " Q 5 " + (_vm.height - 5) + " 5 " + (_vm.height - 15) + " L 5 15\n        Q 5 5 15 5\n      ")}}):_vm._e(),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"}}),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("M " + (_vm.width - 20) + " 5 L " + (_vm.width - 15) + " 5 Q " + (_vm.width - 5) + " 5 " + (_vm.width - 5) + " 15 L " + (_vm.width - 5) + " 20")}}),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("\n        M " + (_vm.width - 20) + " " + (_vm.height - 5) + " L " + (_vm.width - 15) + " " + (_vm.height - 5) + "\n        Q " + (_vm.width - 5) + " " + (_vm.height - 5) + " " + (_vm.width - 5) + " " + (_vm.height - 15) + "\n        L " + (_vm.width - 5) + " " + (_vm.height - 20) + "\n      ")}}),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("\n        M 20 " + (_vm.height - 5) + " L 15 " + (_vm.height - 5) + "\n        Q 5 " + (_vm.height - 5) + " 5 " + (_vm.height - 15) + "\n        L 5 " + (_vm.height - 20) + "\n      ")}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_460c1118_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue?vue&type=template&id=460c1118&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var borderBox12_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox12',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'border-box-12',
      filterId: `borderr-box-12-filterId-${id}`,

      defaultColor: ['#2e6099', '#7ce7fd'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    },
    fade: color_lib["fade"]
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox12_src_mainvue_type_script_lang_js_ = (borderBox12_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue





/* normalize component */

var borderBox12_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox12_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_460c1118_render,
  mainvue_type_template_id_460c1118_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox12_src_main = (borderBox12_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/index.js



/* harmony default export */ var borderBox12 = (function (Vue) {
  Vue.component(components_borderBox12_src_main.name, components_borderBox12_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.css
var borderBox13_src_main = __webpack_require__("470c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue?vue&type=template&id=886c55d0&
var mainvue_type_template_id_886c55d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-13"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('path',{attrs:{"fill":_vm.backgroundColor,"stroke":_vm.mergedColor[0],"d":("\n        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10\n        L " + (_vm.width - 20) + " 10 L " + (_vm.width - 5) + " 25\n        L " + (_vm.width - 5) + " " + (_vm.height - 5) + " L 20 " + (_vm.height - 5) + "\n        L 5 " + (_vm.height - 20) + " L 5 20\n      ")}}),_c('path',{attrs:{"fill":"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5","stroke":_vm.mergedColor[0],"d":"M 16 9 L 61 9"}}),_c('path',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"d":"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"}}),_c('path',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"d":("M " + (_vm.width - 5) + " " + (_vm.height - 30) + " L " + (_vm.width - 5) + " " + (_vm.height - 5) + " L " + (_vm.width - 30) + " " + (_vm.height - 5))}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_886c55d0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue?vue&type=template&id=886c55d0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox13_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox13',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-13',

      defaultColor: ['#6586ec', '#2cf7fe'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox13_src_mainvue_type_script_lang_js_ = (borderBox13_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue





/* normalize component */

var borderBox13_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox13_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_886c55d0_render,
  mainvue_type_template_id_886c55d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox13_src_main = (borderBox13_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/index.js



/* harmony default export */ var borderBox13 = (function (Vue) {
  Vue.component(components_borderBox13_src_main.name, components_borderBox13_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.css
var borderBox2_src_main = __webpack_require__("b72d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue?vue&type=template&id=7ed8b580&
var mainvue_type_template_id_7ed8b580_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-2"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      7, 7 " + (_vm.width - 7) + ", 7 " + (_vm.width - 7) + ", " + (_vm.height - 7) + " 7, " + (_vm.height - 7) + "\n    ")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("2, 2 " + (_vm.width - 2) + " ,2 " + (_vm.width - 2) + ", " + (_vm.height - 2) + " 2, " + (_vm.height - 2) + " 2, 2")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"points":("6, 6 " + (_vm.width - 6) + ", 6 " + (_vm.width - 6) + ", " + (_vm.height - 6) + " 6, " + (_vm.height - 6) + " 6, 6")}}),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":"11","cy":"11","r":"1"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":_vm.width - 11,"cy":"11","r":"1"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":_vm.width - 11,"cy":_vm.height - 11,"r":"1"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":"11","cy":_vm.height - 11,"r":"1"}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_7ed8b580_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue?vue&type=template&id=7ed8b580&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox2_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox2',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-2',

      defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox2_src_mainvue_type_script_lang_js_ = (borderBox2_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue





/* normalize component */

var borderBox2_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox2_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_7ed8b580_render,
  mainvue_type_template_id_7ed8b580_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox2_src_main = (borderBox2_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/index.js



/* harmony default export */ var borderBox2 = (function (Vue) {
  Vue.component(components_borderBox2_src_main.name, components_borderBox2_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.css
var borderBox3_src_main = __webpack_require__("1e4c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue?vue&type=template&id=580afe41&
var mainvue_type_template_id_580afe41_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-3"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      23, 23 " + (_vm.width - 24) + ", 23 " + (_vm.width - 24) + ", " + (_vm.height - 24) + " 23, " + (_vm.height - 24) + "\n    ")}}),_c('polyline',{staticClass:"dv-bb3-line1",attrs:{"stroke":_vm.mergedColor[0],"points":("4, 4 " + (_vm.width - 22) + " ,4 " + (_vm.width - 22) + ", " + (_vm.height - 22) + " 4, " + (_vm.height - 22) + " 4, 4")}}),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("10, 10 " + (_vm.width - 16) + ", 10 " + (_vm.width - 16) + ", " + (_vm.height - 16) + " 10, " + (_vm.height - 16) + " 10, 10")}}),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("16, 16 " + (_vm.width - 10) + ", 16 " + (_vm.width - 10) + ", " + (_vm.height - 10) + " 16, " + (_vm.height - 10) + " 16, 16")}}),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("22, 22 " + (_vm.width - 4) + ", 22 " + (_vm.width - 4) + ", " + (_vm.height - 4) + " 22, " + (_vm.height - 4) + " 22, 22")}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_580afe41_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue?vue&type=template&id=580afe41&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox3_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox3',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-3',

      defaultColor: ['#2862b7', '#2862b7'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox3_src_mainvue_type_script_lang_js_ = (borderBox3_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue





/* normalize component */

var borderBox3_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox3_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_580afe41_render,
  mainvue_type_template_id_580afe41_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox3_src_main = (borderBox3_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/index.js



/* harmony default export */ var borderBox3 = (function (Vue) {
  Vue.component(components_borderBox3_src_main.name, components_borderBox3_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.css
var borderBox4_src_main = __webpack_require__("1dac");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue?vue&type=template&id=a5527428&
var mainvue_type_template_id_a5527428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-4"},[_c('svg',{class:("dv-border-svg-container " + (_vm.reverse && 'dv-reverse')),attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      " + (_vm.width - 15) + ", 22 170, 22 150, 7 40, 7 28, 21 32, 24\n      16, 42 16, " + (_vm.height - 32) + " 41, " + (_vm.height - 7) + " " + (_vm.width - 15) + ", " + (_vm.height - 7) + "\n    ")}}),_c('polyline',{staticClass:"dv-bb4-line-1",attrs:{"stroke":_vm.mergedColor[0],"points":("145, " + (_vm.height - 5) + " 40, " + (_vm.height - 5) + " 10, " + (_vm.height - 35) + "\n        10, 40 40, 5 150, 5 170, 20 " + (_vm.width - 15) + ", 20")}}),_c('polyline',{staticClass:"dv-bb4-line-2",attrs:{"stroke":_vm.mergedColor[1],"points":("245, " + (_vm.height - 1) + " 36, " + (_vm.height - 1) + " 14, " + (_vm.height - 23) + "\n        14, " + (_vm.height - 100))}}),_c('polyline',{staticClass:"dv-bb4-line-3",attrs:{"stroke":_vm.mergedColor[0],"points":("7, " + (_vm.height - 40) + " 7, " + (_vm.height - 75))}}),_c('polyline',{staticClass:"dv-bb4-line-4",attrs:{"stroke":_vm.mergedColor[0],"points":"28, 24 13, 41 13, 64"}}),_c('polyline',{staticClass:"dv-bb4-line-5",attrs:{"stroke":_vm.mergedColor[0],"points":"5, 45 5, 140"}}),_c('polyline',{staticClass:"dv-bb4-line-6",attrs:{"stroke":_vm.mergedColor[1],"points":"14, 75 14, 180"}}),_c('polyline',{staticClass:"dv-bb4-line-7",attrs:{"stroke":_vm.mergedColor[1],"points":"55, 11 147, 11 167, 26 250, 26"}}),_c('polyline',{staticClass:"dv-bb4-line-8",attrs:{"stroke":_vm.mergedColor[1],"points":"158, 5 173, 16"}}),_c('polyline',{staticClass:"dv-bb4-line-9",attrs:{"stroke":_vm.mergedColor[0],"points":("200, 17 " + (_vm.width - 10) + ", 17")}}),_c('polyline',{staticClass:"dv-bb4-line-10",attrs:{"stroke":_vm.mergedColor[1],"points":("385, 17 " + (_vm.width - 10) + ", 17")}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_a5527428_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue?vue&type=template&id=a5527428&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox4_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox4',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-4',

      defaultColor: ['red', 'rgba(0,0,255,0.8)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox4_src_mainvue_type_script_lang_js_ = (borderBox4_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue





/* normalize component */

var borderBox4_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox4_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_a5527428_render,
  mainvue_type_template_id_a5527428_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox4_src_main = (borderBox4_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/index.js



/* harmony default export */ var borderBox4 = (function (Vue) {
  Vue.component(components_borderBox4_src_main.name, components_borderBox4_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.css
var borderBox5_src_main = __webpack_require__("042d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue?vue&type=template&id=435731f8&
var mainvue_type_template_id_435731f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-5"},[_c('svg',{class:("dv-border-svg-container  " + (_vm.reverse && 'dv-reverse')),attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      10, 22 " + (_vm.width - 22) + ", 22 " + (_vm.width - 22) + ", " + (_vm.height - 86) + " " + (_vm.width - 84) + ", " + (_vm.height - 24) + " 10, " + (_vm.height - 24) + "\n    ")}}),_c('polyline',{staticClass:"dv-bb5-line-1",attrs:{"stroke":_vm.mergedColor[0],"points":("8, 5 " + (_vm.width - 5) + ", 5 " + (_vm.width - 5) + ", " + (_vm.height - 100) + "\n        " + (_vm.width - 100) + ", " + (_vm.height - 5) + " 8, " + (_vm.height - 5) + " 8, 5")}}),_c('polyline',{staticClass:"dv-bb5-line-2",attrs:{"stroke":_vm.mergedColor[1],"points":("3, 5 " + (_vm.width - 20) + ", 5 " + (_vm.width - 20) + ", " + (_vm.height - 60) + "\n        " + (_vm.width - 74) + ", " + (_vm.height - 5) + " 3, " + (_vm.height - 5) + " 3, 5")}}),_c('polyline',{staticClass:"dv-bb5-line-3",attrs:{"stroke":_vm.mergedColor[1],"points":("50, 13 " + (_vm.width - 35) + ", 13")}}),_c('polyline',{staticClass:"dv-bb5-line-4",attrs:{"stroke":_vm.mergedColor[1],"points":("15, 20 " + (_vm.width - 35) + ", 20")}}),_c('polyline',{staticClass:"dv-bb5-line-5",attrs:{"stroke":_vm.mergedColor[1],"points":("15, " + (_vm.height - 20) + " " + (_vm.width - 110) + ", " + (_vm.height - 20))}}),_c('polyline',{staticClass:"dv-bb5-line-6",attrs:{"stroke":_vm.mergedColor[1],"points":("15, " + (_vm.height - 13) + " " + (_vm.width - 110) + ", " + (_vm.height - 13))}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_435731f8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue?vue&type=template&id=435731f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox5_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox5',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-5',

      defaultColor: ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox5_src_mainvue_type_script_lang_js_ = (borderBox5_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue





/* normalize component */

var borderBox5_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox5_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_435731f8_render,
  mainvue_type_template_id_435731f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox5_src_main = (borderBox5_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/index.js



/* harmony default export */ var borderBox5 = (function (Vue) {
  Vue.component(components_borderBox5_src_main.name, components_borderBox5_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.css
var borderBox6_src_main = __webpack_require__("4e86");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue?vue&type=template&id=7de3177e&
var mainvue_type_template_id_7de3177e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-6"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      9, 7 " + (_vm.width - 9) + ", 7 " + (_vm.width - 9) + ", " + (_vm.height - 7) + " 9, " + (_vm.height - 7) + "\n    ")}}),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":"5","cy":"5","r":"2"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":_vm.width - 5,"cy":"5","r":"2"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":_vm.width - 5,"cy":_vm.height - 5,"r":"2"}}),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":"5","cy":_vm.height - 5,"r":"2"}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("10, 4 " + (_vm.width - 10) + ", 4")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("10, " + (_vm.height - 4) + " " + (_vm.width - 10) + ", " + (_vm.height - 4))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("5, 70 5, " + (_vm.height - 70))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 5) + ", 70 " + (_vm.width - 5) + ", " + (_vm.height - 70))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":"3, 10, 3, 50"}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":"7, 30 7, 80"}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 3) + ", 10 " + (_vm.width - 3) + ", 50")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 7) + ", 30 " + (_vm.width - 7) + ", 80")}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("3, " + (_vm.height - 10) + " 3, " + (_vm.height - 50))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("7, " + (_vm.height - 30) + " 7, " + (_vm.height - 80))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 3) + ", " + (_vm.height - 10) + " " + (_vm.width - 3) + ", " + (_vm.height - 50))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 7) + ", " + (_vm.height - 30) + " " + (_vm.width - 7) + ", " + (_vm.height - 80))}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_7de3177e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue?vue&type=template&id=7de3177e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox6_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox6',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-6',

      defaultColor: ['rgba(255, 255, 255, 0.35)', 'gray'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox6_src_mainvue_type_script_lang_js_ = (borderBox6_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue





/* normalize component */

var borderBox6_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox6_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_7de3177e_render,
  mainvue_type_template_id_7de3177e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox6_src_main = (borderBox6_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/index.js



/* harmony default export */ var borderBox6 = (function (Vue) {
  Vue.component(components_borderBox6_src_main.name, components_borderBox6_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.css
var borderBox7_src_main = __webpack_require__("3648");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue?vue&type=template&id=3897f12e&
var mainvue_type_template_id_3897f12e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-7",style:(("box-shadow: inset 0 0 40px " + (_vm.mergedColor[0]) + "; border: 1px solid " + (_vm.mergedColor[0]) + "; background-color: " + _vm.backgroundColor))},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":"0, 25 0, 0 25, 0"}}),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 25) + ", 0 " + _vm.width + ", 0 " + _vm.width + ", 25")}}),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 25) + ", " + _vm.height + " " + _vm.width + ", " + _vm.height + " " + _vm.width + ", " + (_vm.height - 25))}}),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":("0, " + (_vm.height - 25) + " 0, " + _vm.height + " 25, " + _vm.height)}}),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":"0, 10 0, 0 10, 0"}}),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":((_vm.width - 10) + ", 0 " + _vm.width + ", 0 " + _vm.width + ", 10")}}),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":((_vm.width - 10) + ", " + _vm.height + " " + _vm.width + ", " + _vm.height + " " + _vm.width + ", " + (_vm.height - 10))}}),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":("0, " + (_vm.height - 10) + " 0, " + _vm.height + " 10, " + _vm.height)}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_3897f12e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue?vue&type=template&id=3897f12e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var borderBox7_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox7',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-7',

      defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox7_src_mainvue_type_script_lang_js_ = (borderBox7_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue





/* normalize component */

var borderBox7_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox7_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_3897f12e_render,
  mainvue_type_template_id_3897f12e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox7_src_main = (borderBox7_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/index.js



/* harmony default export */ var borderBox7 = (function (Vue) {
  Vue.component(components_borderBox7_src_main.name, components_borderBox7_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.css
var borderBox8_src_main = __webpack_require__("733c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue?vue&type=template&id=667924e2&
var mainvue_type_template_id_667924e2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-8"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('path',{attrs:{"id":_vm.path,"d":_vm.pathD,"fill":"transparent"}}),_c('radialGradient',{attrs:{"id":_vm.gradient,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_c('mask',{attrs:{"id":_vm.mask}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":"150","fill":("url(#" + _vm.gradient + ")")}},[_c('animateMotion',{attrs:{"dur":(_vm.dur + "s"),"path":_vm.pathD,"rotate":"auto","repeatCount":"indefinite"}})],1)])],1),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("5, 5 " + (_vm.width - 5) + ", 5 " + (_vm.width - 5) + " " + (_vm.height - 5) + " 5, " + (_vm.height - 5))}}),_c('use',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"1","xlink:href":("#" + _vm.path)}}),_c('use',{attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"3","xlink:href":("#" + _vm.path),"mask":("url(#" + _vm.mask + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + _vm.length),"to":(_vm.length + ", 0"),"dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})])]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_667924e2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue?vue&type=template&id=667924e2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var borderBox8_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox8',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'border-box-8',
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,

      defaultColor: ['#235fa7', '#4fd2dd'],

      mergedColor: []
    }
  },
  computed: {
    length () {
      const { width, height } = this

      return (width + height - 5) * 2
    },
    pathD () {
      const { reverse, width, height } = this

      if (reverse) return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`

      return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox8_src_mainvue_type_script_lang_js_ = (borderBox8_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue





/* normalize component */

var borderBox8_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox8_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_667924e2_render,
  mainvue_type_template_id_667924e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox8_src_main = (borderBox8_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/index.js



/* harmony default export */ var borderBox8 = (function (Vue) {
  Vue.component(components_borderBox8_src_main.name, components_borderBox8_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.css
var borderBox9_src_main = __webpack_require__("6fc2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue?vue&type=template&id=e8ec3610&
var mainvue_type_template_id_e8ec3610_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-9"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId,"x1":"0%","y1":"0%","x2":"100%","y2":"100%"}},[_c('animate',{attrs:{"attributeName":"x1","values":"0%;100%;0%","dur":"10s","begin":"0s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"x2","values":"100%;0%;100%","dur":"10s","begin":"0s","repeatCount":"indefinite"}}),_c('stop',{attrs:{"offset":"0%","stop-color":_vm.mergedColor[0]}},[_c('animate',{attrs:{"attributeName":"stop-color","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"dur":"10s","begin":"0s","repeatCount":"indefinite"}})]),_c('stop',{attrs:{"offset":"100%","stop-color":_vm.mergedColor[1]}},[_c('animate',{attrs:{"attributeName":"stop-color","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1])),"dur":"10s","begin":"0s","repeatCount":"indefinite"}})])],1),_c('mask',{attrs:{"id":_vm.maskId}},[_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":("8, " + (_vm.height * 0.4) + " 8, 3, " + (_vm.width * 0.4 + 7) + ", 3")}}),_c('polyline',{attrs:{"fill":"#fff","points":("8, " + (_vm.height * 0.15) + " 8, 3, " + (_vm.width * 0.1 + 7) + ", 3\n            " + (_vm.width * 0.1) + ", 8 14, 8 14, " + (_vm.height * 0.15 - 7) + "\n          ")}}),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":((_vm.width * 0.5) + ", 3 " + (_vm.width - 3) + ", 3, " + (_vm.width - 3) + ", " + (_vm.height * 0.25))}}),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.52) + ", 3 " + (_vm.width * 0.58) + ", 3\n            " + (_vm.width * 0.58 - 7) + ", 9 " + (_vm.width * 0.52 + 7) + ", 9\n          ")}}),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.9) + ", 3 " + (_vm.width - 3) + ", 3 " + (_vm.width - 3) + ", " + (_vm.height * 0.1) + "\n            " + (_vm.width - 9) + ", " + (_vm.height * 0.1 - 7) + " " + (_vm.width - 9) + ", 9 " + (_vm.width * 0.9 + 7) + ", 9\n          ")}}),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":("8, " + (_vm.height * 0.5) + " 8, " + (_vm.height - 3) + " " + (_vm.width * 0.3 + 7) + ", " + (_vm.height - 3))}}),_c('polyline',{attrs:{"fill":"#fff","points":("\n            8, " + (_vm.height * 0.55) + " 8, " + (_vm.height * 0.7) + "\n            2, " + (_vm.height * 0.7 - 7) + " 2, " + (_vm.height * 0.55 + 7) + "\n          ")}}),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":((_vm.width * 0.35) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height * 0.35))}}),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.92) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height * 0.8) + "\n            " + (_vm.width - 9) + ", " + (_vm.height * 0.8 + 7) + " " + (_vm.width - 9) + ", " + (_vm.height - 9) + " " + (_vm.width * 0.92 + 7) + ", " + (_vm.height - 9) + "\n          ")}})])],1),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      15, 9 " + (_vm.width * 0.1 + 1) + ", 9 " + (_vm.width * 0.1 + 4) + ", 6 " + (_vm.width * 0.52 + 2) + ", 6\n      " + (_vm.width * 0.52 + 6) + ", 10 " + (_vm.width * 0.58 - 7) + ", 10 " + (_vm.width * 0.58 - 2) + ", 6\n      " + (_vm.width * 0.9 + 2) + ", 6 " + (_vm.width * 0.9 + 6) + ", 10 " + (_vm.width - 10) + ", 10 " + (_vm.width - 10) + ", " + (_vm.height * 0.1 - 6) + "\n      " + (_vm.width - 6) + ", " + (_vm.height * 0.1 - 1) + " " + (_vm.width - 6) + ", " + (_vm.height * 0.8 + 1) + " " + (_vm.width - 10) + ", " + (_vm.height * 0.8 + 6) + "\n      " + (_vm.width - 10) + ", " + (_vm.height - 10) + " " + (_vm.width * 0.92 + 7) + ", " + (_vm.height - 10) + "  " + (_vm.width * 0.92 + 2) + ", " + (_vm.height - 6) + "\n      11, " + (_vm.height - 6) + " 11, " + (_vm.height * 0.15 - 2) + " 15, " + (_vm.height * 0.15 - 7) + "\n    ")}}),_c('rect',{attrs:{"x":"0","y":"0","width":_vm.width,"height":_vm.height,"fill":("url(#" + _vm.gradientId + ")"),"mask":("url(#" + _vm.maskId + ")")}})]),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_e8ec3610_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue?vue&type=template&id=e8ec3610&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var borderBox9_src_mainvue_type_script_lang_js_ = ({
  name: 'DvBorderBox9',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'border-box-9',

      gradientId: `border-box-9-gradient-${id}`,
      maskId: `border-box-9-mask-${id}`,

      defaultColor: ['#11eefd', '#0078d2'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_borderBox9_src_mainvue_type_script_lang_js_ = (borderBox9_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue





/* normalize component */

var borderBox9_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_borderBox9_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_e8ec3610_render,
  mainvue_type_template_id_e8ec3610_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_borderBox9_src_main = (borderBox9_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/index.js



/* harmony default export */ var borderBox9 = (function (Vue) {
  Vue.component(components_borderBox9_src_main.name, components_borderBox9_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.css
var capsuleChart_src_main = __webpack_require__("335d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue?vue&type=template&id=058edf2a&
var mainvue_type_template_id_058edf2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-capsule-chart"},[(_vm.mergedConfig)?[_c('div',{staticClass:"label-column"},[_vm._l((_vm.mergedConfig.data),function(item){return _c('div',{key:item.name},[_vm._v(_vm._s(item.name))])}),_c('div')],2),_c('div',{staticClass:"capsule-container"},[_vm._l((_vm.capsuleLength),function(capsule,index){return _c('div',{key:index,staticClass:"capsule-item"},[_c('div',{staticClass:"capsule-item-column",style:(("width: " + (capsule * 100) + "%; background-color: " + (_vm.mergedConfig.colors[index % _vm.mergedConfig.colors.length]) + ";"))},[(_vm.mergedConfig.showValue)?_c('div',{staticClass:"capsule-item-value"},[_vm._v(_vm._s(_vm.capsuleValue[index]))]):_vm._e()])])}),_c('div',{staticClass:"unit-label"},_vm._l((_vm.labelData),function(label,index){return _c('div',{key:label + index},[_vm._v(_vm._s(label))])}),0)],2),(_vm.mergedConfig.unit)?_c('div',{staticClass:"unit-text"},[_vm._v(_vm._s(_vm.mergedConfig.unit))]):_vm._e()]:_vm._e()],2)}
var mainvue_type_template_id_058edf2a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue?vue&type=template&id=058edf2a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var capsuleChart_src_mainvue_type_script_lang_js_ = ({
  name: 'DvCapsuleChart',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Capsule chart data
         * @type {Array<Object>}
         * @default data = []
         * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
         */
        data: [],
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: [
          '#37a2da',
          '#32c5e9',
          '#67e0e3',
          '#9fe6b8',
          '#ffdb5c',
          '#ff9f7f',
          '#fb7293'
        ],
        /**
         * @description Chart unit
         * @type {String}
         * @default unit = ''
         */
        unit: '',
        /**
         * @description Show item value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: false
      },

      mergedConfig: null,

      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: []
    }
  },
  watch: {
    config() {
      const { calcData } = this

      calcData()
    }
  },
  methods: {
    calcData() {
      const { mergeConfig, calcCapsuleLengthAndLabelData } = this

      mergeConfig()

      calcCapsuleLengthAndLabelData()
    },
    mergeConfig() {
      let { config, defaultConfig } = this

      this.mergedConfig = Object(util["deepMerge"])(
        Object(plugin_util["deepClone"])(defaultConfig, true),
        config || {}
      )
    },
    calcCapsuleLengthAndLabelData() {
      const { data } = this.mergedConfig

      if (!data.length) return

      const capsuleValue = data.map(({ value }) => value)

      const maxValue = Math.max(...capsuleValue)

      this.capsuleValue = capsuleValue

      this.capsuleLength = capsuleValue.map(v => (maxValue ? v / maxValue : 0))

      const oneFifth = maxValue / 5

      const labelData = Array.from(
        new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))
      )

      this.labelData = labelData

      this.labelDataLength = Array.from(labelData).map(v =>
        maxValue ? v / maxValue : 0
      )
    }
  },
  mounted() {
    const { calcData } = this

    calcData()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_capsuleChart_src_mainvue_type_script_lang_js_ = (capsuleChart_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue





/* normalize component */

var capsuleChart_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_capsuleChart_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_058edf2a_render,
  mainvue_type_template_id_058edf2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_capsuleChart_src_main = (capsuleChart_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/index.js



/* harmony default export */ var capsuleChart = (function (Vue) {
  Vue.component(components_capsuleChart_src_main.name, components_capsuleChart_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.css
var charts_src_main = __webpack_require__("8261");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue?vue&type=template&id=d283f50a&
var mainvue_type_template_id_d283f50a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-charts-container"},[_c('div',{ref:_vm.chartRef,staticClass:"charts-canvas-container"})])}
var mainvue_type_template_id_d283f50a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue?vue&type=template&id=d283f50a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//







/* harmony default export */ var charts_src_mainvue_type_script_lang_js_ = ({
  name: 'DvCharts',
  mixins: [autoResize],
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    const id = uuid()
    return {
      ref: `charts-container-${id}`,
      chartRef: `chart-${id}`,

      chart: null
    }
  },
  watch: {
    option () {
      let { chart, option } = this

      if (!chart) return

      if (!option) option = {}

      chart.setOption(option, true)
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { initChart } = this

      initChart()
    },
    initChart () {
      const { $refs, chartRef, option } = this

      const chart = this.chart = new lib_default.a($refs[chartRef])

      if (!option) return

      chart.setOption(option)
    },
    onResize () {
      const { chart } = this

      if (!chart) return

      chart.resize()
    }
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_charts_src_mainvue_type_script_lang_js_ = (charts_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue





/* normalize component */

var charts_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_charts_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_d283f50a_render,
  mainvue_type_template_id_d283f50a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_charts_src_main = (charts_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/index.js



/* harmony default export */ var charts = (function (Vue) {
  Vue.component(components_charts_src_main.name, components_charts_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.css
var conicalColumnChart_src_main = __webpack_require__("7ed3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue?vue&type=template&id=7c00d6fd&
var mainvue_type_template_id_7c00d6fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-conical-column-chart"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},_vm._l((_vm.column),function(item,i){return _c('g',{key:i},[_c('path',{attrs:{"d":item.d,"fill":_vm.mergedConfig.columnColor}}),_c('text',{style:(("fontSize:" + (_vm.mergedConfig.fontSize) + "px")),attrs:{"fill":_vm.mergedConfig.textColor,"x":item.x,"y":_vm.height - 4}},[_vm._v(" "+_vm._s(item.name)+" ")]),(_vm.mergedConfig.img.length)?_c('image',{attrs:{"xlink:href":_vm.mergedConfig.img[i % _vm.mergedConfig.img.length],"width":_vm.mergedConfig.imgSideLength,"height":_vm.mergedConfig.imgSideLength,"x":item.x - _vm.mergedConfig.imgSideLength / 2,"y":item.y - _vm.mergedConfig.imgSideLength}}):_vm._e(),(_vm.mergedConfig.showValue)?_c('text',{style:(("fontSize:" + (_vm.mergedConfig.fontSize) + "px")),attrs:{"fill":_vm.mergedConfig.textColor,"x":item.x,"y":item.textY}},[_vm._v(" "+_vm._s(item.value)+" ")]):_vm._e()])}),0)])}
var mainvue_type_template_id_7c00d6fd_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue?vue&type=template&id=7c00d6fd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var conicalColumnChart_src_mainvue_type_script_lang_js_ = ({
  name: 'DvConicalColumnChart',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      ref: 'conical-column-chart',

      defaultConfig: {
        /**
         * @description Chart data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Chart img
         * @type {Array<String>}
         * @default img = []
         */
        img: [],
        /**
         * @description Chart font size
         * @type {Number}
         * @default fontSize = 12
         */
        fontSize: 12,
        /**
         * @description Img side length
         * @type {Number}
         * @default imgSideLength = 30
         */
        imgSideLength: 30,
        /**
         * @description Column color
         * @type {String}
         * @default columnColor = 'rgba(0, 194, 255, 0.4)'
         */
        columnColor: 'rgba(0, 194, 255, 0.4)',
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: '#fff',
        /**
         * @description Show value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: false
      },

      mergedConfig: null,

      column: []
    }
  },
  watch: {
    config () {
      const { calcData } = this

      calcData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { calcData } = this

      calcData()
    },
    calcData () {
      const { mergeConfig, initData, calcSVGPath } = this

      mergeConfig()

      initData()

      calcSVGPath()
    },
    mergeConfig () {
      const { defaultConfig, config } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})
    },
    initData () {
      const { mergedConfig } = this
      let { data } = mergedConfig

      data = Object(plugin_util["deepClone"])(data, true)

      data.sort(({ value: a }, { value: b }) => {
        if (a > b) return -1
        if (a < b) return 1
        if (a === b) return 0
      })

      const max = data[0] ? data[0].value : 10

      data = data.map(item => ({
        ...item,
        percent: item.value / max
      }))

      mergedConfig.data = data
    },
    calcSVGPath () {
      const { mergedConfig, width, height } = this

      const { imgSideLength, fontSize, data } = mergedConfig

      const itemNum = data.length
      const gap = width / (itemNum + 1)

      const useAbleHeight = height - imgSideLength - fontSize - 5
      const svgBottom = height - fontSize - 5

      this.column = data.map((item, i) => {
        const { percent } = item

        const middleXPos = gap * (i + 1)
        const leftXPos = gap * i
        const rightXpos = gap * (i + 2)

        const middleYPos = svgBottom - useAbleHeight * percent
        const controlYPos = useAbleHeight * percent * 0.6 + middleYPos

        const d = `
          M${leftXPos}, ${svgBottom}
          Q${middleXPos}, ${controlYPos} ${middleXPos},${middleYPos}
          M${middleXPos},${middleYPos}
          Q${middleXPos}, ${controlYPos} ${rightXpos},${svgBottom}
          L${leftXPos}, ${svgBottom}
          Z
        `

        const textY = (svgBottom + middleYPos) / 2 + fontSize / 2

        return {
          ...item,
          d,
          x: middleXPos,
          y: middleYPos,
          textY
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_conicalColumnChart_src_mainvue_type_script_lang_js_ = (conicalColumnChart_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue





/* normalize component */

var conicalColumnChart_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_conicalColumnChart_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_7c00d6fd_render,
  mainvue_type_template_id_7c00d6fd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_conicalColumnChart_src_main = (conicalColumnChart_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/index.js



/* harmony default export */ var conicalColumnChart = (function (Vue) {
  Vue.component(components_conicalColumnChart_src_main.name, components_conicalColumnChart_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.css
var decoration1_src_main = __webpack_require__("11b09");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue?vue&type=template&id=295bc631&
var mainvue_type_template_id_295bc631_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-1"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [(Math.random() > 0.6)?_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[0],"x":point[0] - _vm.halfPointSideLength,"y":point[1] - _vm.halfPointSideLength,"width":_vm.pointSideLength,"height":_vm.pointSideLength}},[(Math.random() > 0.6)?_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";transparent"),"dur":"1s","begin":Math.random() * 2,"repeatCount":"indefinite"}}):_vm._e()]):_vm._e()]}),(_vm.rects[0])?_c('rect',{attrs:{"fill":_vm.mergedColor[1],"x":_vm.rects[0][0] - _vm.pointSideLength,"y":_vm.rects[0][1] - _vm.pointSideLength,"width":_vm.pointSideLength * 2,"height":_vm.pointSideLength * 2}},[_c('animate',{attrs:{"attributeName":"width","values":("0;" + (_vm.pointSideLength * 2)),"dur":"2s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"height","values":("0;" + (_vm.pointSideLength * 2)),"dur":"2s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"x","values":((_vm.rects[0][0]) + ";" + (_vm.rects[0][0] - _vm.pointSideLength)),"dur":"2s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"y","values":((_vm.rects[0][1]) + ";" + (_vm.rects[0][1] - _vm.pointSideLength)),"dur":"2s","repeatCount":"indefinite"}})]):_vm._e(),(_vm.rects[1])?_c('rect',{attrs:{"fill":_vm.mergedColor[1],"x":_vm.rects[1][0] - 40,"y":_vm.rects[1][1] - _vm.pointSideLength,"width":40,"height":_vm.pointSideLength * 2}},[_c('animate',{attrs:{"attributeName":"width","values":"0;40;0","dur":"2s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"x","values":((_vm.rects[1][0]) + ";" + (_vm.rects[1][0] - 40) + ";" + (_vm.rects[1][0])),"dur":"2s","repeatCount":"indefinite"}})]):_vm._e()],2)])}
var mainvue_type_template_id_295bc631_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue?vue&type=template&id=295bc631&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var decoration1_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration1',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    const pointSideLength = 2.5

    return {
      ref: 'decoration-1',

      svgWH: [200, 50],

      svgScale: [1, 1],

      rowNum: 4,
      rowPoints: 20,

      pointSideLength,
      halfPointSideLength: pointSideLength / 2,

      points: [],

      rects: [],

      defaultColor: ['#fff', '#0de7c2'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcSVGData } = this

      calcSVGData()
    },
    calcSVGData () {
      const { calcPointsPosition, calcRectsPosition, calcScale } = this

      calcPointsPosition()

      calcRectsPosition()

      calcScale()
    },
    calcPointsPosition () {
      const { svgWH, rowNum, rowPoints } = this

      const [w, h] = svgWH

      const horizontalGap = w / (rowPoints + 1)
      const verticalGap = h / (rowNum + 1)

      let points = new Array(rowNum).fill(0).map((foo, i) =>
        new Array(rowPoints).fill(0).map((foo, j) => [
          horizontalGap * (j + 1), verticalGap * (i + 1)
        ]))

      this.points = points.reduce((all, item) => [...all, ...item], [])
    },
    calcRectsPosition () {
      const { points, rowPoints } = this

      const rect1 = points[rowPoints * 2 - 1]
      const rect2 = points[rowPoints * 2 - 3]

      this.rects = [rect1, rect2]
    },
    calcScale () {
      const { width, height, svgWH } = this

      const [w, h] = svgWH

      this.svgScale = [width / w, height / h]
    },
    onResize () {
      const { calcSVGData } = this

      calcSVGData()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration1_src_mainvue_type_script_lang_js_ = (decoration1_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue





/* normalize component */

var decoration1_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration1_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_295bc631_render,
  mainvue_type_template_id_295bc631_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration1_src_main = (decoration1_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/index.js



/* harmony default export */ var decoration1 = (function (Vue) {
  Vue.component(components_decoration1_src_main.name, components_decoration1_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.css
var decoration10_src_main = __webpack_require__("c423");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue?vue&type=template&id=69543fb4&
var mainvue_type_template_id_69543fb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-10"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"2","points":("0, " + (_vm.height / 2) + " " + _vm.width + ", " + (_vm.height / 2))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":("5, " + (_vm.height / 2) + " " + (_vm.width * 0.2 - 3) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.2)),"fill":"freeze"}},[_c('animate',{attrs:{"id":_vm.animationId2,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.2) + ";" + (_vm.width * 0.2) + ", 0;"),"dur":"3s","begin":(_vm.animationId1 + ".end"),"fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.2) + ", 0;0, " + (_vm.width * 0.2)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":((_vm.width * 0.2 + 3) + ", " + (_vm.height / 2) + " " + (_vm.width * 0.8 - 3) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.6))}},[_c('animate',{attrs:{"id":_vm.animationId4,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.6) + ";" + (_vm.width * 0.6) + ", 0"),"dur":"3s","begin":(_vm.animationId3 + ".end + 1s"),"fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.6) + ", 0;0, " + (_vm.width * 0.6)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":((_vm.width * 0.8 + 3) + ", " + (_vm.height / 2) + " " + (_vm.width - 5) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.2))}},[_c('animate',{attrs:{"id":_vm.animationId6,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.2) + ";" + (_vm.width * 0.2) + ", 0"),"dur":"3s","begin":(_vm.animationId5 + ".end + 1s"),"fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.2) + ", 0;0, " + (_vm.width * 0.3)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_c('circle',{attrs:{"cx":"2","cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId1,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":("0s;" + _vm.animationId7 + ".end"),"dur":"0.3s","fill":"freeze"}})]),_c('circle',{attrs:{"cx":_vm.width * 0.2,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId3,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId2 + ".end"),"dur":"0.3s","fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_c('circle',{attrs:{"cx":_vm.width * 0.8,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId5,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId4 + ".end"),"dur":"0.3s","fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_c('circle',{attrs:{"cx":_vm.width - 2,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId7,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId6 + ".end"),"dur":"0.3s","fill":"freeze"}}),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})])])])}
var mainvue_type_template_id_69543fb4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue?vue&type=template&id=69543fb4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var decoration10_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration10',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'decoration-10',

      animationId1: `d10ani1${id}`,
      animationId2: `d10ani2${id}`,
      animationId3: `d10ani3${id}`,
      animationId4: `d10ani4${id}`,
      animationId5: `d10ani5${id}`,
      animationId6: `d10ani6${id}`,
      animationId7: `d10ani7${id}`,

      defaultColor: ['#00c2ff', 'rgba(0, 194, 255, 0.3)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration10_src_mainvue_type_script_lang_js_ = (decoration10_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue





/* normalize component */

var decoration10_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration10_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_69543fb4_render,
  mainvue_type_template_id_69543fb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration10_src_main = (decoration10_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/index.js



/* harmony default export */ var decoration10 = (function (Vue) {
  Vue.component(components_decoration10_src_main.name, components_decoration10_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.css
var decoration11_src_main = __webpack_require__("3e8a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue?vue&type=template&id=c3e466e8&
var mainvue_type_template_id_c3e466e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-11"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":"20 10, 25 4, 55 4 60 10"}}),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":("20 " + (_vm.height - 10) + ", 25 " + (_vm.height - 4) + ", 55 " + (_vm.height - 4) + " 60 " + (_vm.height - 10))}}),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":((_vm.width - 20) + " 10, " + (_vm.width - 25) + " 4, " + (_vm.width - 55) + " 4 " + (_vm.width - 60) + " 10")}}),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":((_vm.width - 20) + " " + (_vm.height - 10) + ", " + (_vm.width - 25) + " " + (_vm.height - 4) + ", " + (_vm.width - 55) + " " + (_vm.height - 4) + " " + (_vm.width - 60) + " " + (_vm.height - 10))}}),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 20),"stroke":_vm.mergedColor[0],"points":("\n        20 10, 5 " + (_vm.height / 2) + " 20 " + (_vm.height - 10) + "\n        " + (_vm.width - 20) + " " + (_vm.height - 10) + " " + (_vm.width - 5) + " " + (_vm.height / 2) + " " + (_vm.width - 20) + " 10\n      ")}}),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 70),"points":("25 18, 15 " + (_vm.height / 2) + " 25 " + (_vm.height - 18))}}),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 70),"points":((_vm.width - 25) + " 18, " + (_vm.width - 15) + " " + (_vm.height / 2) + " " + (_vm.width - 25) + " " + (_vm.height - 18))}})]),_c('div',{staticClass:"decoration-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_c3e466e8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue?vue&type=template&id=c3e466e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var decoration11_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration11',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      ref: 'decoration-11',

      defaultColor: ['#1a98fc', '#2cf7fe'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    },
    fade: color_lib["fade"]
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration11_src_mainvue_type_script_lang_js_ = (decoration11_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue





/* normalize component */

var decoration11_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration11_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_c3e466e8_render,
  mainvue_type_template_id_c3e466e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration11_src_main = (decoration11_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/index.js



/* harmony default export */ var decoration11 = (function (Vue) {
  Vue.component(components_decoration11_src_main.name, components_decoration11_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.css
var decoration12_src_main = __webpack_require__("e11f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue?vue&type=template&id=1b5d7dd6&
var mainvue_type_template_id_1b5d7dd6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-12"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('g',{attrs:{"id":_vm.gId}},_vm._l((_vm.pathD),function(d,i){return _c('path',{key:d,attrs:{"stroke":_vm.pathColor[i],"stroke-width":_vm.width / 2,"fill":"transparent","d":d}})}),0),_c('radialGradient',{attrs:{"id":_vm.gradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"transparent","stop-opacity":"1"}}),_c('stop',{attrs:{"offset":"100%","stop-color":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stop-opacity":"1"}})],1)],1),_vm._l((_vm.circleR),function(r){return _c('circle',{key:r,attrs:{"r":r,"cx":_vm.x,"cy":_vm.y,"stroke":_vm.mergedColor[1],"stroke-width":0.5,"fill":"transparent"}})}),_c('circle',{attrs:{"r":"1","cx":_vm.x,"cy":_vm.y,"stroke":"transparent","fill":("url(#" + _vm.gradientId + ")")}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (_vm.width / 2)),"dur":(_vm.haloDur + "s"),"repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":(_vm.haloDur + "s"),"repeatCount":"indefinite"}})]),_c('circle',{attrs:{"r":"2","cx":_vm.x,"cy":_vm.y,"fill":_vm.mergedColor[1]}}),(_vm.showSplitLine)?_c('g',_vm._l((_vm.splitLinePoints),function(p){return _c('polyline',{key:p,attrs:{"points":p,"stroke":_vm.mergedColor[1],"stroke-width":0.5,"opacity":"0.5"}})}),0):_vm._e(),_vm._l((_vm.arcD),function(d){return _c('path',{key:d,attrs:{"d":d,"stroke":_vm.mergedColor[1],"stroke-width":"2","fill":"transparent"}})}),_c('use',{attrs:{"xlink:href":("#" + _vm.gId)}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":("0, " + _vm.x + " " + _vm.y + ";360, " + _vm.x + " " + _vm.y),"dur":(_vm.scanDur + "s"),"repeatCount":"indefinite"}})],1)],2),_c('div',{staticClass:"decoration-content"},[_vm._t("default")],2)])}
var mainvue_type_template_id_1b5d7dd6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue?vue&type=template&id=1b5d7dd6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var decoration12_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration12',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    /**
     * @description Scan animation dur
     */
    scanDur: {
      type: Number,
      default: 3
    },
    /**
     * @description Halo animation dur
     */
    haloDur: {
      type: Number,
      default: 2
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'decoration-12',
      gId: `decoration-12-g-${id}`,
      gradientId: `decoration-12-gradient-${id}`,

      defaultColor: ['#2783ce', '#2cf7fe'],

      mergedColor: [],

      pathD: [],

      pathColor: [],

      circleR: [],

      splitLinePoints: [],

      arcD: [],

      segment: 30,

      sectorAngle: Math.PI / 3,

      ringNum: 3,

      ringWidth: 1,

      showSplitLine: true
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  computed: {
    x () {
      const { width } = this

      return width / 2
    },
    y () {
      const { height } = this

      return height / 2
    }
  },
  methods: {
    init () {
      const { mergeColor, calcPathD, calcPathColor, calcCircleR, calcSplitLinePoints, calcArcD } = this

      mergeColor()

      calcPathD()

      calcPathColor()

      calcCircleR()

      calcSplitLinePoints()

      calcArcD()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    },
    calcPathD () {
      const { x, y, width, segment, sectorAngle } = this

      const startAngle = -Math.PI / 2
      const angleGap = sectorAngle / segment
      const r = width / 4
      let lastEndPoints = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle)

      this.pathD = new Array(segment)
        .fill('')
        .map((_, i) => {
          const endPoints = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle - (i + 1) * angleGap).map(_ => _.toFixed(5))
          const d = `M${lastEndPoints.join(',')} A${r}, ${r} 0 0 0 ${endPoints.join(',')}`
          lastEndPoints = endPoints

          return d
        })
    },
    calcPathColor () {
      const { mergedColor: [color], segment } = this

      const colorGap = 100 / (segment - 1)

      this.pathColor = new Array(segment)
        .fill(color)
        .map((_, i) => Object(color_lib["fade"])(color, 100 - i * colorGap))
    },
    calcCircleR () {
      const { segment, ringNum, width, ringWidth } = this

      const radiusGap = (width / 2 - ringWidth / 2) / ringNum

      this.circleR = new Array(ringNum)
        .fill(0)
        .map((_, i) => radiusGap * (i + 1))
    },
    calcSplitLinePoints () {
      const { x, y, width } = this

      const angleGap = Math.PI / 6
      const r = width / 2

      this.splitLinePoints = new Array(6)
        .fill('')
        .map((_, i) => {
          const startAngle = angleGap * (i + 1)
          const endAngle = startAngle + Math.PI
          const startPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle)
          const endPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, endAngle)

          return `${startPoint.join(',')} ${endPoint.join(',')}`
        })
    },
    calcArcD () {
      const { x, y, width } = this

      const angleGap = Math.PI / 6
      const r = width / 2 - 1

      this.arcD = new Array(4)
        .fill('')
        .map((_, i) => {
          const startAngle = angleGap * (3 * i + 1)
          const endAngle = startAngle + angleGap
          const startPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle)
          const endPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, endAngle)

          return `M${startPoint.join(',')} A${x}, ${y} 0 0 1 ${endPoint.join(',')}`
        })
    },
    afterAutoResizeMixinInit () {
      const { init } = this

      init()
    },
    fade: color_lib["fade"]
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration12_src_mainvue_type_script_lang_js_ = (decoration12_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue





/* normalize component */

var decoration12_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration12_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_1b5d7dd6_render,
  mainvue_type_template_id_1b5d7dd6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration12_src_main = (decoration12_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/index.js



/* harmony default export */ var decoration12 = (function (Vue) {
  Vue.component(components_decoration12_src_main.name, components_decoration12_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.css
var decoration2_src_main = __webpack_require__("9b06");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue?vue&type=template&id=dc7f366c&
var mainvue_type_template_id_dc7f366c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-2"},[_c('svg',{attrs:{"width":(_vm.width + "px"),"height":(_vm.height + "px")}},[_c('rect',{attrs:{"x":_vm.x,"y":_vm.y,"width":_vm.w,"height":_vm.h,"fill":_vm.mergedColor[0]}},[_c('animate',{attrs:{"attributeName":_vm.reverse ? 'height' : 'width',"from":"0","to":_vm.reverse ? _vm.height : _vm.width,"dur":(_vm.dur + "s"),"calcMode":"spline","keyTimes":"0;1","keySplines":".42,0,.58,1","repeatCount":"indefinite"}})]),_c('rect',{attrs:{"x":_vm.x,"y":_vm.y,"width":"1","height":"1","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"attributeName":_vm.reverse ? 'y' : 'x',"from":"0","to":_vm.reverse ? _vm.height : _vm.width,"dur":(_vm.dur + "s"),"calcMode":"spline","keyTimes":"0;1","keySplines":"0.42,0,0.58,1","repeatCount":"indefinite"}})])])])}
var mainvue_type_template_id_dc7f366c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue?vue&type=template&id=dc7f366c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var decoration2_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration2',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      ref: 'decoration-2',

      x: 0,
      y: 0,

      w: 0,
      h: 0,

      defaultColor: ['#3faacb', '#fff'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    },
    reverse () {
      const { calcSVGData } = this

      calcSVGData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcSVGData } = this

      calcSVGData()
    },
    calcSVGData () {
      const { reverse, width, height } = this

      if (reverse) {
        this.w = 1
        this.h = height
        this.x = width / 2
        this.y = 0
      } else {
        this.w = width
        this.h = 1
        this.x = 0
        this.y = height / 2
      }
    },
    onResize () {
      const { calcSVGData } = this

      calcSVGData()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration2_src_mainvue_type_script_lang_js_ = (decoration2_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue





/* normalize component */

var decoration2_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration2_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_dc7f366c_render,
  mainvue_type_template_id_dc7f366c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration2_src_main = (decoration2_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/index.js



/* harmony default export */ var decoration2 = (function (Vue) {
  Vue.component(components_decoration2_src_main.name, components_decoration2_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.css
var decoration3_src_main = __webpack_require__("5e07");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue?vue&type=template&id=455c74d6&
var mainvue_type_template_id_455c74d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-3"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[0],"x":point[0] - _vm.halfPointSideLength,"y":point[1] - _vm.halfPointSideLength,"width":_vm.pointSideLength,"height":_vm.pointSideLength}},[(Math.random() > 0.6)?_c('animate',{attrs:{"attributeName":"fill","values":("" + (_vm.mergedColor.join(';'))),"dur":Math.random() + 1 + 's',"begin":Math.random() * 2,"repeatCount":"indefinite"}}):_vm._e()])]})],2)])}
var mainvue_type_template_id_455c74d6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue?vue&type=template&id=455c74d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var decoration3_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration3',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    const pointSideLength = 7

    return {
      ref: 'decoration-3',

      svgWH: [300, 35],

      svgScale: [1, 1],

      rowNum: 2,
      rowPoints: 25,

      pointSideLength,
      halfPointSideLength: pointSideLength / 2,

      points: [],

      defaultColor: ['#7acaec', 'transparent'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcSVGData } = this

      calcSVGData()
    },
    calcSVGData () {
      const { calcPointsPosition, calcScale } = this

      calcPointsPosition()

      calcScale()
    },
    calcPointsPosition () {
      const { svgWH, rowNum, rowPoints } = this

      const [w, h] = svgWH

      const horizontalGap = w / (rowPoints + 1)
      const verticalGap = h / (rowNum + 1)

      let points = new Array(rowNum).fill(0).map((foo, i) =>
        new Array(rowPoints).fill(0).map((foo, j) => [
          horizontalGap * (j + 1), verticalGap * (i + 1)
        ]))

      this.points = points.reduce((all, item) => [...all, ...item], [])
    },
    calcScale () {
      const { width, height, svgWH } = this

      const [w, h] = svgWH

      this.svgScale = [width / w, height / h]
    },
    onResize () {
      const { calcSVGData } = this

      calcSVGData()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration3_src_mainvue_type_script_lang_js_ = (decoration3_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue





/* normalize component */

var decoration3_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration3_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_455c74d6_render,
  mainvue_type_template_id_455c74d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration3_src_main = (decoration3_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/index.js



/* harmony default export */ var decoration3 = (function (Vue) {
  Vue.component(components_decoration3_src_main.name, components_decoration3_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.css
var decoration4_src_main = __webpack_require__("c2ca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue?vue&type=template&id=29f329c8&
var mainvue_type_template_id_29f329c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-4"},[_c('div',{class:("container " + (_vm.reverse ? 'reverse' : 'normal')),style:(_vm.reverse ? ("width:" + _vm.width + "px;height:5px;animation-duration:" + _vm.dur + "s") : ("width:5px;height:" + _vm.height + "px;animation-duration:" + _vm.dur + "s"))},[_c('svg',{attrs:{"width":_vm.reverse ? _vm.width : 5,"height":_vm.reverse ? 5 : _vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":_vm.reverse ? ("0, 2.5 " + _vm.width + ", 2.5") : ("2.5, 0 2.5, " + _vm.height)}}),_c('polyline',{staticClass:"bold-line",attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30","points":_vm.reverse ? ("0, 2.5 " + _vm.width + ", 2.5") : ("2.5, 0 2.5, " + _vm.height)}})])])])}
var mainvue_type_template_id_29f329c8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue?vue&type=template&id=29f329c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var decoration4_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration4',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      ref: 'decoration-4',

      defaultColor: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration4_src_mainvue_type_script_lang_js_ = (decoration4_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue





/* normalize component */

var decoration4_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration4_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_29f329c8_render,
  mainvue_type_template_id_29f329c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration4_src_main = (decoration4_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/index.js



/* harmony default export */ var decoration4 = (function (Vue) {
  Vue.component(components_decoration4_src_main.name, components_decoration4_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.css
var decoration5_src_main = __webpack_require__("2848");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue?vue&type=template&id=791c9101&
var mainvue_type_template_id_791c9101_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-5"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[0],"stroke-width":"3","points":_vm.line1Points}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","attributeType":"XML","from":("0, " + (_vm.line1Length / 2) + ", 0, " + (_vm.line1Length / 2)),"to":("0, 0, " + _vm.line1Length + ", 0"),"dur":(_vm.dur + "s"),"begin":"0s","calcMode":"spline","keyTimes":"0;1","keySplines":"0.4,1,0.49,0.98","repeatCount":"indefinite"}})]),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"stroke-width":"2","points":_vm.line2Points}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","attributeType":"XML","from":("0, " + (_vm.line2Length / 2) + ", 0, " + (_vm.line2Length / 2)),"to":("0, 0, " + _vm.line2Length + ", 0"),"dur":(_vm.dur + "s"),"begin":"0s","calcMode":"spline","keyTimes":"0;1","keySplines":".4,1,.49,.98","repeatCount":"indefinite"}})])])])}
var mainvue_type_template_id_791c9101_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue?vue&type=template&id=791c9101&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var decoration5_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration5',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    dur: {
      type: Number,
      default: 1.2
    }
  },
  data () {
    return {
      ref: 'decoration-5',

      line1Points: '',
      line2Points: '',

      line1Length: 0,
      line2Length: 0,

      defaultColor: ['#3f96a5', '#3f96a5'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcSVGData } = this

      calcSVGData()
    },
    calcSVGData () {
      const { width, height } = this

      let line1Points = [
        [0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4],
        [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4],
        [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]
      ]

      let line2Points = [
        [width * 0.3, height * 0.8], [width * 0.7, height * 0.8]
      ]

      const line1Length = Object(util["getPolylineLength"])(line1Points)
      const line2Length = Object(util["getPolylineLength"])(line2Points)

      line1Points = line1Points.map(point => point.join(',')).join(' ')
      line2Points = line2Points.map(point => point.join(',')).join(' ')

      this.line1Points = line1Points
      this.line2Points = line2Points

      this.line1Length = line1Length
      this.line2Length = line2Length
    },
    onResize () {
      const { calcSVGData } = this

      calcSVGData()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration5_src_mainvue_type_script_lang_js_ = (decoration5_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue





/* normalize component */

var decoration5_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration5_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_791c9101_render,
  mainvue_type_template_id_791c9101_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration5_src_main = (decoration5_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/index.js



/* harmony default export */ var decoration5 = (function (Vue) {
  Vue.component(components_decoration5_src_main.name, components_decoration5_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.css
var decoration6_src_main = __webpack_require__("c7c8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue?vue&type=template&id=a9ebb10e&
var mainvue_type_template_id_a9ebb10e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-6"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[Math.random() > 0.5 ? 0 : 1],"x":point[0] - _vm.halfRectWidth,"y":point[1] - _vm.heights[i] / 2,"width":_vm.rectWidth,"height":_vm.heights[i]}},[_c('animate',{attrs:{"attributeName":"y","values":((point[1] - _vm.minHeights[i] / 2) + ";" + (point[1] - _vm.heights[i] / 2) + ";" + (point[1] - _vm.minHeights[i] / 2)),"dur":((_vm.randoms[i]) + "s"),"keyTimes":"0;0.5;1","calcMode":"spline","keySplines":"0.42,0,0.58,1;0.42,0,0.58,1","begin":"0s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"height","values":((_vm.minHeights[i]) + ";" + (_vm.heights[i]) + ";" + (_vm.minHeights[i])),"dur":((_vm.randoms[i]) + "s"),"keyTimes":"0;0.5;1","calcMode":"spline","keySplines":"0.42,0,0.58,1;0.42,0,0.58,1","begin":"0s","repeatCount":"indefinite"}})])]})],2)])}
var mainvue_type_template_id_a9ebb10e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue?vue&type=template&id=a9ebb10e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var decoration6_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration6',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    const rectWidth = 7

    return {
      ref: 'decoration-6',

      svgWH: [300, 35],

      svgScale: [1, 1],

      rowNum: 1,
      rowPoints: 40,

      rectWidth,
      halfRectWidth: rectWidth / 2,

      points: [],
      heights: [],
      minHeights: [],
      randoms: [],

      defaultColor: ['#7acaec', '#7acaec'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcSVGData } = this

      calcSVGData()
    },
    calcSVGData () {
      const { calcPointsPosition, calcScale } = this

      calcPointsPosition()

      calcScale()
    },
    calcPointsPosition () {
      const { svgWH, rowNum, rowPoints } = this

      const [w, h] = svgWH

      const horizontalGap = w / (rowPoints + 1)
      const verticalGap = h / (rowNum + 1)

      let points = new Array(rowNum).fill(0).map((foo, i) =>
        new Array(rowPoints).fill(0).map((foo, j) => [
          horizontalGap * (j + 1), verticalGap * (i + 1)
        ]))

      this.points = points.reduce((all, item) => [...all, ...item], [])
      const heights = this.heights = new Array(rowNum * rowPoints)
        .fill(0).map(foo =>
          Math.random() > 0.8 ? randomExtend(0.7 * h, h) : randomExtend(0.2 * h, 0.5 * h))

      this.minHeights = new Array(rowNum * rowPoints)
        .fill(0).map((foo, i) => heights[i] * Math.random())

      this.randoms = new Array(rowNum * rowPoints)
        .fill(0).map(foo => Math.random() + 1.5)
    },
    calcScale () {
      const { width, height, svgWH } = this

      const [w, h] = svgWH

      this.svgScale = [width / w, height / h]
    },
    onResize () {
      const { calcSVGData } = this

      calcSVGData()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration6_src_mainvue_type_script_lang_js_ = (decoration6_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue





/* normalize component */

var decoration6_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration6_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_a9ebb10e_render,
  mainvue_type_template_id_a9ebb10e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration6_src_main = (decoration6_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/index.js



/* harmony default export */ var decoration6 = (function (Vue) {
  Vue.component(components_decoration6_src_main.name, components_decoration6_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.css
var decoration7_src_main = __webpack_require__("d51d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue?vue&type=template&id=a40c4f44&
var mainvue_type_template_id_a40c4f44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-decoration-7"},[_c('svg',{attrs:{"width":"21px","height":"20px"}},[_c('polyline',{attrs:{"stroke-width":"4","fill":"transparent","stroke":_vm.mergedColor[0],"points":"10, 0 19, 10 10, 20"}}),_c('polyline',{attrs:{"stroke-width":"2","fill":"transparent","stroke":_vm.mergedColor[1],"points":"2, 0 11, 10 2, 20"}})]),_vm._t("default"),_c('svg',{attrs:{"width":"21px","height":"20px"}},[_c('polyline',{attrs:{"stroke-width":"4","fill":"transparent","stroke":_vm.mergedColor[0],"points":"11, 0 2, 10 11, 20"}}),_c('polyline',{attrs:{"stroke-width":"2","fill":"transparent","stroke":_vm.mergedColor[1],"points":"19, 0 10, 10 19, 20"}})])],2)}
var mainvue_type_template_id_a40c4f44_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue?vue&type=template&id=a40c4f44&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var decoration7_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration7',
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      defaultColor: ['#1dc1f5', '#1dc1f5'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration7_src_mainvue_type_script_lang_js_ = (decoration7_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue





/* normalize component */

var decoration7_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration7_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_a40c4f44_render,
  mainvue_type_template_id_a40c4f44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration7_src_main = (decoration7_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/index.js



/* harmony default export */ var decoration7 = (function (Vue) {
  Vue.component(components_decoration7_src_main.name, components_decoration7_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.css
var decoration8_src_main = __webpack_require__("357d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue?vue&type=template&id=8cf9c33e&
var mainvue_type_template_id_8cf9c33e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-8"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","fill":"transparent","points":((_vm.xPos(0)) + ", 0 " + (_vm.xPos(30)) + ", " + (_vm.height / 2))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","fill":"transparent","points":((_vm.xPos(20)) + ", 0 " + (_vm.xPos(50)) + ", " + (_vm.height / 2) + " " + (_vm.xPos(_vm.width)) + ", " + (_vm.height / 2))}}),_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"fill":"transparent","stroke-width":"3","points":((_vm.xPos(0)) + ", " + (_vm.height - 3) + ", " + (_vm.xPos(200)) + ", " + (_vm.height - 3))}})])])}
var mainvue_type_template_id_8cf9c33e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue?vue&type=template&id=8cf9c33e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var decoration8_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration8',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ref: 'decoration-8',

      defaultColor: ['#3f96a5', '#3f96a5'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    xPos (pos) {
      const { reverse, width } = this

      if (!reverse) return pos

      return width - pos
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration8_src_mainvue_type_script_lang_js_ = (decoration8_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue





/* normalize component */

var decoration8_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration8_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_8cf9c33e_render,
  mainvue_type_template_id_8cf9c33e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration8_src_main = (decoration8_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/index.js



/* harmony default export */ var decoration8 = (function (Vue) {
  Vue.component(components_decoration8_src_main.name, components_decoration8_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.css
var decoration9_src_main = __webpack_require__("9ab4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue?vue&type=template&id=f8ad0d4c&
var mainvue_type_template_id_f8ad0d4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-9"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_c('defs',[_c('polygon',{attrs:{"id":_vm.polygonId,"points":"15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"}})]),_c('circle',{attrs:{"cx":"50","cy":"50","r":"45","fill":"transparent","stroke":_vm.mergedColor[1],"stroke-width":"10","stroke-dasharray":"80, 100, 30, 100"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;360 50 50","dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})],1),_c('circle',{attrs:{"cx":"50","cy":"50","r":"45","fill":"transparent","stroke":_vm.mergedColor[0],"stroke-width":"6","stroke-dasharray":"50, 66, 100, 66"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;-360 50 50","dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})],1),_c('circle',{attrs:{"cx":"50","cy":"50","r":"38","fill":"transparent","stroke":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stroke-width":"1","stroke-dasharray":"5, 1"}}),_vm._l((new Array(20).fill(0)),function(foo,i){return _c('use',{key:i,attrs:{"xlink:href":("#" + _vm.polygonId),"stroke":_vm.mergedColor[1],"fill":Math.random() > 0.4 ? 'transparent' : _vm.mergedColor[0]}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;360 50 50","dur":(_vm.dur + "s"),"begin":((i * _vm.dur / 20) + "s"),"repeatCount":"indefinite"}})],1)}),_c('circle',{attrs:{"cx":"50","cy":"50","r":"26","fill":"transparent","stroke":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stroke-width":"1","stroke-dasharray":"5, 1"}})],2),_vm._t("default")],2)}
var mainvue_type_template_id_f8ad0d4c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue?vue&type=template&id=f8ad0d4c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var decoration9_src_mainvue_type_script_lang_js_ = ({
  name: 'DvDecoration9',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'decoration-9',

      polygonId: `decoration-9-polygon-${id}`,

      svgWH: [100, 100],

      svgScale: [1, 1],

      defaultColor: ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcScale } = this

      calcScale()
    },
    calcScale () {
      const { width, height, svgWH } = this

      const [w, h] = svgWH

      this.svgScale = [width / w, height / h]
    },
    onResize () {
      const { calcScale } = this

      calcScale()
    },
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || [])
    },
    fade: color_lib["fade"]
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_decoration9_src_mainvue_type_script_lang_js_ = (decoration9_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue





/* normalize component */

var decoration9_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_decoration9_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_f8ad0d4c_render,
  mainvue_type_template_id_f8ad0d4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_decoration9_src_main = (decoration9_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/index.js



/* harmony default export */ var decoration9 = (function (Vue) {
  Vue.component(components_decoration9_src_main.name, components_decoration9_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.css
var digitalFlop_src_main = __webpack_require__("bc96");

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/index.js



/* harmony default export */ var digitalFlop = (function (Vue) {
  Vue.component(src_main.name, src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.css
var flylineChart_src_main = __webpack_require__("41f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue?vue&type=template&id=54f2d20f&
var mainvue_type_template_id_54f2d20f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dv-flyline-chart",staticClass:"dv-flyline-chart",style:(("background-image: url(" + (_vm.mergedConfig ? _vm.mergedConfig.bgImgUrl : '') + ")")),on:{"click":_vm.consoleClickPos}},[(_vm.mergedConfig)?_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('radialGradient',{attrs:{"id":_vm.gradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_c('radialGradient',{attrs:{"id":_vm.gradient2Id,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"0"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"1"}})],1),(_vm.paths[0])?_c('circle',{attrs:{"id":("circle" + (_vm.paths[0].toString())),"cx":_vm.paths[0][2][0],"cy":_vm.paths[0][2][1]}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (_vm.mergedConfig.halo.radius)),"dur":_vm.mergedConfig.halo.duration / 10 + 's',"repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":_vm.mergedConfig.halo.duration / 10 + 's',"repeatCount":"indefinite"}})]):_vm._e()],1),(_vm.paths[0])?_c('image',{attrs:{"xlink:href":_vm.mergedConfig.centerPointImg.url,"width":_vm.mergedConfig.centerPointImg.width,"height":_vm.mergedConfig.centerPointImg.height,"x":_vm.paths[0][2][0] - _vm.mergedConfig.centerPointImg.width / 2,"y":_vm.paths[0][2][1] - _vm.mergedConfig.centerPointImg.height / 2}}):_vm._e(),_c('mask',{attrs:{"id":("maskhalo" + (_vm.paths[0].toString()))}},[(_vm.paths[0])?_c('use',{attrs:{"xlink:href":("#circle" + (_vm.paths[0].toString())),"fill":("url(#" + _vm.gradient2Id + ")")}}):_vm._e()]),(_vm.paths[0] && _vm.mergedConfig.halo.show)?_c('use',{attrs:{"xlink:href":("#circle" + (_vm.paths[0].toString())),"fill":_vm.mergedConfig.halo.color,"mask":("url(#maskhalo" + (_vm.paths[0].toString()) + ")")}}):_vm._e(),_vm._l((_vm.paths),function(path,i){return _c('g',{key:i},[_c('defs',[_c('path',{ref:("path" + i),refInFor:true,attrs:{"id":("path" + (path.toString())),"d":("M" + (path[0].toString()) + " Q" + (path[1].toString()) + " " + (path[2].toString())),"fill":"transparent"}})]),_c('use',{attrs:{"xlink:href":("#path" + (path.toString())),"stroke-width":_vm.mergedConfig.lineWidth,"stroke":_vm.mergedConfig.orbitColor}}),(_vm.lengths[i])?_c('use',{attrs:{"xlink:href":("#path" + (path.toString())),"stroke-width":_vm.mergedConfig.lineWidth,"stroke":_vm.mergedConfig.flylineColor,"mask":("url(#mask" + _vm.unique + (path.toString()) + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + (_vm.lengths[i])),"to":((_vm.lengths[i]) + ", 0"),"dur":_vm.times[i] || 0,"repeatCount":"indefinite"}})]):_vm._e(),_c('mask',{attrs:{"id":("mask" + _vm.unique + (path.toString()))}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":_vm.mergedConfig.flylineRadius,"fill":("url(#" + _vm.gradientId + ")")}},[_c('animateMotion',{attrs:{"dur":_vm.times[i] || 0,"path":("M" + (path[0].toString()) + " Q" + (path[1].toString()) + " " + (path[2].toString())),"rotate":"auto","repeatCount":"indefinite"}})],1)]),_c('image',{attrs:{"xlink:href":_vm.mergedConfig.pointsImg.url,"width":_vm.mergedConfig.pointsImg.width,"height":_vm.mergedConfig.pointsImg.height,"x":path[0][0] - _vm.mergedConfig.pointsImg.width / 2,"y":path[0][1] - _vm.mergedConfig.pointsImg.height / 2}}),_c('text',{style:(("fontSize:" + (_vm.mergedConfig.text.fontSize) + "px;")),attrs:{"fill":_vm.mergedConfig.text.color,"x":path[0][0] + _vm.mergedConfig.text.offset[0],"y":path[0][1] + _vm.mergedConfig.text.offset[1]}},[_vm._v(" "+_vm._s(_vm.texts[i])+" ")])])})],2):_vm._e()])}
var mainvue_type_template_id_54f2d20f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue?vue&type=template&id=54f2d20f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var flylineChart_src_mainvue_type_script_lang_js_ = ({
  name: 'DvFlylineChart',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'dv-flyline-chart',
      unique: Math.random(),
      maskId: `flyline-mask-id-${id}`,
      maskCircleId: `mask-circle-id-${id}`,
      gradientId: `gradient-id-${id}`,
      gradient2Id: `gradient2-id-${id}`,

      defaultConfig: {
        /**
         * @description Flyline chart center point
         * @type {Array<Number>}
         * @default centerPoint = [0, 0]
         */
        centerPoint: [0, 0],
        /**
         * @description Flyline start points
         * @type {Array<Array<Number>>}
         * @default points = []
         * @example points = [[10, 10], [100, 100]]
         */
        points: [],
        /**
         * @description Flyline width
         * @type {Number}
         * @default lineWidth = 1
         */
        lineWidth: 1,
        /**
         * @description Orbit color
         * @type {String}
         * @default orbitColor = 'rgba(103, 224, 227, .2)'
         */
        orbitColor: 'rgba(103, 224, 227, .2)',
        /**
         * @description Flyline color
         * @type {String}
         * @default orbitColor = '#ffde93'
         */
        flylineColor: '#ffde93',
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Flyline radius
         * @type {Number}
         * @default flylineRadius = 100
         */
        flylineRadius: 100,
        /**
         * @description Flyline animation duration
         * @type {Array<Number>}
         * @default duration = [20, 30]
         */
        duration: [20, 30],
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: true,
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgUrl = ''
         * @example bgImgUrl = './img/bg.jpg'
         */
        bgImgUrl: '',
        /**
         * @description Text configuration
         * @type {Object}
         */
        text: {
          /**
           * @description Text offset
           * @type {Array<Number>}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: '#ffdb5c',
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Halo configuration
         * @type {Object}
         */
        halo: {
          /**
           * @description Weather to show halo
           * @type {Boolean}
           * @default show = true
           * @example show = true | false
           */
          show: true,
          /**
           * @description Halo animation duration (10 = 1s)
           * @type {Number}
           * @default duration = 30
           */
          duration: 30,
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: '#fb7293',
          /**
           * @description Halo max radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Center point img configuration
         * @type {Object}
         */
        centerPointImg: {
          /**
           * @description Center point img width
           * @type {Number}
           * @default width = 40
           */
          width: 40,
          /**
           * @description Center point img height
           * @type {Number}
           * @default height = 40
           */
          height: 40,
          /**
           * @description Center point img url
           * @type {String}
           * @default url = ''
           */
          url: ''
        },
        /**
         * @description Points img configuration
         * @type {Object}
         * @default radius = 120
         */
        pointsImg: {
          /**
           * @description Points img width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Points img height
           * @type {Number}
           * @default height = 15
           */
          height: 15,
          /**
           * @description Points img url
           * @type {String}
           * @default url = ''
           */
          url: ''
        }
      },

      mergedConfig: null,

      paths: [],
      lengths: [],
      times: [],
      texts: []
    }
  },
  watch: {
    config () {
      const { calcData } = this

      calcData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { calcData } = this

      calcData()
    },
    async calcData () {
      const { mergeConfig, createFlylinePaths, calcLineLengths } = this

      mergeConfig()

      createFlylinePaths()

      await calcLineLengths()

      const { calcTimes, calcTexts } = this

      calcTimes()

      calcTexts()
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      const mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})

      const { points } = mergedConfig

      mergedConfig.points = points.map(item => {
        if (item instanceof Array) {
          return { position: item, text: '' }
        }

        return item
      })

      this.mergedConfig = mergedConfig
    },
    createFlylinePaths () {
      const { getPath, mergedConfig, width, height } = this

      let { centerPoint, points, relative } = mergedConfig

      points = points.map(({ position }) => position)

      if (relative) {
        centerPoint = [width * centerPoint[0], height * centerPoint[1]]
        points = points.map(([x, y]) => [width * x, height * y])
      }

      this.paths = points.map(point => getPath(centerPoint, point))
    },
    getPath (center, point) {
      const { getControlPoint } = this

      const controlPoint = getControlPoint(center, point)

      return [point, controlPoint, center]
    },
    getControlPoint ([sx, sy], [ex, ey]) {
      const { getKLinePointByx, mergedConfig } = this

      const { curvature, k } = mergedConfig

      const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2]

      const distance = getPointDistance([sx, sy], [ex, ey])

      const targetLength = distance / curvature
      const disDived = targetLength / 2

      let [dx, dy] = [mx, my]

      do {
        dx += disDived
        dy = getKLinePointByx(k, [mx, my], dx)[1]
      } while (getPointDistance([mx, my], [dx, dy]) < targetLength)

      return [dx, dy]
    },
    getKLinePointByx (k, [lx, ly], x) {
      const y = ly - k * lx + k * x

      return [x, y]
    },
    async calcLineLengths () {
      const { $nextTick, paths, $refs } = this

      await $nextTick()

      this.lengths = paths.map((foo, i) => $refs[`path${i}`][0].getTotalLength())
    },
    calcTimes () {
      const { duration, points } = this.mergedConfig

      this.times = points.map(foo => randomExtend(...duration) / 10)
    },
    calcTexts () {
      const { points } = this.mergedConfig

      this.texts = points.map(({ text }) => text)
    },
    consoleClickPos ({ offsetX, offsetY }) {
      const { width, height, dev } = this

      if (!dev) return

      const relativeX = (offsetX / width).toFixed(2)
      const relativeY = (offsetY / height).toFixed(2)

      console.warn(`dv-flyline-chart DEV: \n Click Position is [${offsetX}, ${offsetY}] \n Relative Position is [${relativeX}, ${relativeY}]`)
    }
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_flylineChart_src_mainvue_type_script_lang_js_ = (flylineChart_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue





/* normalize component */

var flylineChart_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_flylineChart_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_54f2d20f_render,
  mainvue_type_template_id_54f2d20f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_flylineChart_src_main = (flylineChart_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/index.js



/* harmony default export */ var flylineChart = (function (Vue) {
  Vue.component(components_flylineChart_src_main.name, components_flylineChart_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.css
var flylineChartEnhanced_src_main = __webpack_require__("dbbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue?vue&type=template&id=600be252&
var mainvue_type_template_id_600be252_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-flyline-chart-enhanced",style:(("background-image: url(" + (_vm.mergedConfig ? _vm.mergedConfig.bgImgSrc : '') + ")")),on:{"click":_vm.consoleClickPos}},[(_vm.flylines.length)?_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('radialGradient',{attrs:{"id":_vm.flylineGradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_c('radialGradient',{attrs:{"id":_vm.haloGradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"0"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"1"}})],1)],1),_vm._l((_vm.flylinePoints),function(point){return _c('g',{key:point.key + Math.random()},[_c('defs',[(point.halo.show)?_c('circle',{attrs:{"id":("halo" + _vm.unique + (point.key)),"cx":point.coordinate[0],"cy":point.coordinate[1]}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (point.halo.radius)),"dur":((point.halo.time) + "s"),"repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":((point.halo.time) + "s"),"repeatCount":"indefinite"}})]):_vm._e()]),_c('mask',{attrs:{"id":("mask" + _vm.unique + (point.key))}},[(point.halo.show)?_c('use',{attrs:{"xlink:href":("#halo" + _vm.unique + (point.key)),"fill":("url(#" + _vm.haloGradientId + ")")}}):_vm._e()]),(point.halo.show)?_c('use',{attrs:{"xlink:href":("#halo" + _vm.unique + (point.key)),"fill":point.halo.color,"mask":("url(#mask" + _vm.unique + (point.key) + ")")}}):_vm._e(),(point.icon.show)?_c('image',{attrs:{"xlink:href":point.icon.src,"width":point.icon.width,"height":point.icon.height,"x":point.icon.x,"y":point.icon.y}}):_vm._e(),(point.text.show)?_c('text',{style:(("fontSize:" + (point.text.fontSize) + "px;color:" + (point.text.color))),attrs:{"fill":point.text.color,"x":point.text.x,"y":point.text.y}},[_vm._v(" "+_vm._s(point.name)+" ")]):_vm._e()])}),_vm._l((_vm.flylines),function(line,i){return _c('g',{key:line.key + Math.random()},[_c('defs',[_c('path',{ref:line.key,refInFor:true,attrs:{"id":line.key,"d":line.d,"fill":"transparent"}})]),_c('use',{attrs:{"xlink:href":("#" + (line.key)),"stroke-width":line.width,"stroke":line.orbitColor}}),_c('mask',{attrs:{"id":("mask" + _vm.unique + (line.key))}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":line.radius,"fill":("url(#" + _vm.flylineGradientId + ")")}},[_c('animateMotion',{attrs:{"dur":line.time,"path":line.d,"rotate":"auto","repeatCount":"indefinite"}})],1)]),(_vm.flylineLengths[i])?_c('use',{attrs:{"xlink:href":("#" + (line.key)),"stroke-width":line.width,"stroke":line.color,"mask":("url(#mask" + _vm.unique + (line.key) + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + (_vm.flylineLengths[i])),"to":((_vm.flylineLengths[i]) + ", 0"),"dur":line.time,"repeatCount":"indefinite"}})]):_vm._e()])})],2):_vm._e()])}
var mainvue_type_template_id_600be252_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue?vue&type=template&id=600be252&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var flylineChartEnhanced_src_mainvue_type_script_lang_js_ = ({
  name: 'DvFlylineChartEnhanced',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const id = uuid()
    return {
      ref: 'dv-flyline-chart-enhanced',
      unique: Math.random(),
      flylineGradientId: `flyline-gradient-id-${id}`,
      haloGradientId: `halo-gradient-id-${id}`,
      /**
       * @description Type Declaration
       * 
       * interface Halo {
       *    show?: boolean
       *    duration?: [number, number]
       *    color?: string
       *    radius?: number
       * }
       * 
       * interface Text {
       *    show?: boolean
       *    offset?: [number, number]
       *    color?: string
       *    fontSize?: number
       * }
       * 
       * interface Icon {
       *    show?: boolean
       *    src?: string
       *    width?: number
       *    height?: number
       * }
       * 
       * interface Point {
       *    name: string
       *    coordinate: [number, number]
       *    halo?: Halo
       *    text?: Text
       *    icon?: Icon
       * }
       * 
       * interface Line {
       *    width?: number
       *    color?: string
       *    orbitColor?: string
       *    duration?: [number, number]
       *    radius?: string
       * }
       * 
       * interface Flyline extends Line {
       *    source: string
       *    target: string
       * }
       * 
       * interface FlylineWithPath extends Flyline {
       *    d: string
       *    path: [[number, number], [number, number], [number, number]]
       *    key: string
       * }
       */
      defaultConfig: {
        /**
         * @description Flyline chart points
         * @type {Point[]}
         * @default points = []
         */
        points: [],
        /**
         * @description Lines
         * @type {Flyline[]}
         * @default lines = []
         */
        lines: [],
        /**
         * @description Global halo configuration
         * @type {Halo}
         */
        halo: {
          /**
           * @description Whether to show halo
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Halo animation duration (1s = 10)
           * @type {[number, number]}
           */
          duration: [20, 30],
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: '#fb7293',
          /**
           * @description Halo radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Global text configuration
         * @type {Text}
         */
        text: {
          /**
           * @description Whether to show text
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Text offset
           * @type {[number, number]}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: '#ffdb5c',
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Global icon configuration
         * @type {Icon}
         */
        icon: {
          /**
           * @description Whether to show icon
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Icon src
           * @type {String}
           * @default src = ''
           */
          src: '',
          /**
           * @description Icon width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Icon height
           * @type {Number}
           * @default width = 15
           */
          height: 15
        },
        /**
         * @description Global line configuration
         * @type {Line}
         */
        line: {
          /**
           * @description Line width
           * @type {Number}
           * @default width = 1
           */
          width: 1,
          /**
           * @description Flyline color
           * @type {String}
           * @default color = '#ffde93'
           */
          color: '#ffde93',
          /**
           * @description Orbit color
           * @type {String}
           * @default orbitColor = 'rgba(103, 224, 227, .2)'
           */
          orbitColor: 'rgba(103, 224, 227, .2)',
          /**
           * @description Flyline animation duration
           * @type {[number, number]}
           * @default duration = [20, 30]
           */
          duration: [20, 30],
          /**
           * @description Flyline radius
           * @type {Number}
           * @default radius = 100
           */
          radius: 100
        },
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgSrc = ''
         */
        bgImgSrc: '',
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: true
      },
      /**
       * @description Fly line data
       * @type {FlylineWithPath[]}
       * @default flylines = []
       */
      flylines: [],
      /**
       * @description Fly line lengths
       * @type {Number[]}
       * @default flylineLengths = []
       */
      flylineLengths: [],
      /**
       * @description Fly line points
       * @default flylinePoints = []
       */
      flylinePoints: [],

      mergedConfig: null
    }
  },
  watch: {
    config () {
      const { calcData } = this

      calcData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { calcData } = this

      calcData()
    },
    async calcData () {
      const { mergeConfig, calcflylinePoints, calcLinePaths } = this

      mergeConfig()

      calcflylinePoints()

      calcLinePaths()

      const { calcLineLengths } = this

      await calcLineLengths()
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      const mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})

      const { points, lines, halo, text, icon, line } = mergedConfig

      mergedConfig.points = points.map(item => {
        item.halo = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(halo, true), item.halo || {})
        item.text = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(text, true), item.text || {})
        item.icon = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(icon, true), item.icon || {})

        return item
      })

      mergedConfig.lines = lines.map(item => {
        return Object(util["deepMerge"])(Object(plugin_util["deepClone"])(line, true), item)
      })

      this.mergedConfig = mergedConfig
    },
    calcflylinePoints () {
      const { mergedConfig, width, height } = this

      const { relative, points } = mergedConfig

      this.flylinePoints = points.map((item, i) => {
        const { coordinate: [x, y], halo, icon, text } = item

        if (relative) item.coordinate = [x * width, y * height]

        item.halo.time = randomExtend(...halo.duration) / 10

        const { width: iw, height: ih } = icon
        item.icon.x = item.coordinate[0] - iw / 2
        item.icon.y = item.coordinate[1] - ih / 2

        const [ox, oy] = text.offset
        item.text.x = item.coordinate[0] + ox
        item.text.y = item.coordinate[1] + oy

        item.key = `${item.coordinate.toString()}${i}`

        return item
      })
    },
    calcLinePaths () {
      const { getPath, mergedConfig } = this

      const { points, lines } = mergedConfig

      this.flylines = lines.map(item => {
        const { source, target, duration } = item

        const sourcePoint = points.find(({ name }) => name === source).coordinate
        const targetPoint = points.find(({ name }) => name === target).coordinate

        const path = getPath(sourcePoint, targetPoint).map(item => item.map(v => parseFloat(v.toFixed(10))))
        const d = `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`
        const key = `path${path.toString()}`
        const time = randomExtend(...duration) / 10

        return { ...item, path, key, d, time }
      })
    },
    getPath (start, end) {
      const { getControlPoint } = this

      const controlPoint = getControlPoint(start, end)

      return [start, controlPoint, end]
    },
    getControlPoint ([sx, sy], [ex, ey]) {
      const { getKLinePointByx, mergedConfig } = this

      const { curvature, k } = mergedConfig

      const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2]

      const distance = getPointDistance([sx, sy], [ex, ey])

      const targetLength = distance / curvature
      const disDived = targetLength / 2

      let [dx, dy] = [mx, my]

      do {
        dx += disDived
        dy = getKLinePointByx(k, [mx, my], dx)[1]
      } while (getPointDistance([mx, my], [dx, dy]) < targetLength)

      return [dx, dy]
    },
    getKLinePointByx (k, [lx, ly], x) {
      const y = ly - k * lx + k * x

      return [x, y]
    },
    async calcLineLengths () {
      const { $nextTick, flylines, $refs } = this

      await $nextTick()

      this.flylineLengths = flylines.map(({ key }) => $refs[key][0].getTotalLength())
    },
    consoleClickPos ({ offsetX, offsetY }) {
      const { width, height, dev } = this

      if (!dev) return

      const relativeX = (offsetX / width).toFixed(2)
      const relativeY = (offsetY / height).toFixed(2)

      console.warn(`dv-flyline-chart-enhanced DEV: \n Click Position is [${offsetX}, ${offsetY}] \n Relative Position is [${relativeX}, ${relativeY}]`)
    }
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_flylineChartEnhanced_src_mainvue_type_script_lang_js_ = (flylineChartEnhanced_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue





/* normalize component */

var flylineChartEnhanced_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_flylineChartEnhanced_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_600be252_render,
  mainvue_type_template_id_600be252_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_flylineChartEnhanced_src_main = (flylineChartEnhanced_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/index.js



/* harmony default export */ var flylineChartEnhanced = (function (Vue) {
  Vue.component(components_flylineChartEnhanced_src_main.name, components_flylineChartEnhanced_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.css
var fullScreenContainer_src_main = __webpack_require__("7cc8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue?vue&type=template&id=fe03f55e&
var mainvue_type_template_id_fe03f55e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,attrs:{"id":"dv-full-screen-container"}},[(_vm.ready)?[_vm._t("default")]:_vm._e()],2)}
var mainvue_type_template_id_fe03f55e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue?vue&type=template&id=fe03f55e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var fullScreenContainer_src_mainvue_type_script_lang_js_ = ({
  name: 'DvFullScreenContainer',
  mixins: [autoResize],
  data () {
    return {
      ref: 'full-screen-container',
      allWidth: 0,
      scale: 0,
      datavRoot: '',
      ready: false
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { initConfig, setAppScale } = this

      initConfig()

      setAppScale()

      this.ready = true
    },
    initConfig () {
      const { dom } = this
      const { width, height } = screen

      this.allWidth = width

      dom.style.width = `${width}px`
      dom.style.height = `${height}px`
    },
    setAppScale () {
      const { allWidth, dom } = this

      const currentWidth = document.body.clientWidth

      dom.style.transform = `scale(${currentWidth / allWidth})`
    },
    onResize () {
      const { setAppScale } = this

      setAppScale()
    }
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_fullScreenContainer_src_mainvue_type_script_lang_js_ = (fullScreenContainer_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue





/* normalize component */

var fullScreenContainer_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_fullScreenContainer_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_fe03f55e_render,
  mainvue_type_template_id_fe03f55e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_fullScreenContainer_src_main = (fullScreenContainer_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/index.js



/* harmony default export */ var fullScreenContainer = (function (Vue) {
  Vue.component(components_fullScreenContainer_src_main.name, components_fullScreenContainer_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.css
var loading_src_main = __webpack_require__("84cd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue?vue&type=template&id=05f6cd58&
var mainvue_type_template_id_05f6cd58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-loading"},[_c('svg',{attrs:{"width":"50px","height":"50px"}},[_c('circle',{attrs:{"cx":"25","cy":"25","r":"20","fill":"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415","stroke":"#02bcfe","stroke-linecap":"round"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0, 25 25;360, 25 25","dur":"1.5s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"stroke","values":"#02bcfe;#3be6cb;#02bcfe","dur":"3s","repeatCount":"indefinite"}})],1),_c('circle',{attrs:{"cx":"25","cy":"25","r":"10","fill":"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7","stroke":"#3be6cb","stroke-linecap":"round"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"360, 25 25;0, 25 25","dur":"1.5s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"stroke","values":"#3be6cb;#02bcfe;#3be6cb","dur":"3s","repeatCount":"indefinite"}})],1)]),_c('div',{staticClass:"loading-tip"},[_vm._t("default")],2)])}
var mainvue_type_template_id_05f6cd58_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue?vue&type=template&id=05f6cd58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loading_src_mainvue_type_script_lang_js_ = ({
  name: 'DvLoading'
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loading_src_mainvue_type_script_lang_js_ = (loading_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue





/* normalize component */

var loading_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_loading_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_05f6cd58_render,
  mainvue_type_template_id_05f6cd58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_loading_src_main = (loading_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/index.js



/* harmony default export */ var loading = (function (Vue) {
  Vue.component(components_loading_src_main.name, components_loading_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.css
var percentPond_src_main = __webpack_require__("a157");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue?vue&type=template&id=ea653244&
var mainvue_type_template_id_ea653244_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"percent-pond",staticClass:"dv-percent-pond"},[_c('svg',[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId1,"x1":"0%","y1":"0%","x2":"100%","y2":"0%"}},_vm._l((_vm.linearGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":((lc[0]) + "%"),"stop-color":lc[1]}})}),1),_c('linearGradient',{attrs:{"id":_vm.gradientId2,"x1":"0%","y1":"0%","x2":_vm.gradient2XPos,"y2":"0%"}},_vm._l((_vm.linearGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":((lc[0]) + "%"),"stop-color":lc[1]}})}),1)],1),_c('rect',{attrs:{"x":_vm.mergedConfig ? _vm.mergedConfig.borderWidth / 2 : '0',"y":_vm.mergedConfig ? _vm.mergedConfig.borderWidth / 2 : '0',"rx":_vm.mergedConfig ? _vm.mergedConfig.borderRadius : '0',"ry":_vm.mergedConfig ? _vm.mergedConfig.borderRadius : '0',"fill":"transparent","stroke-width":_vm.mergedConfig ? _vm.mergedConfig.borderWidth : '0',"stroke":("url(#" + _vm.gradientId1 + ")"),"width":_vm.rectWidth > 0 ? _vm.rectWidth : 0,"height":_vm.rectHeight > 0 ? _vm.rectHeight : 0}}),_c('polyline',{attrs:{"stroke-width":_vm.polylineWidth,"stroke-dasharray":_vm.mergedConfig ? _vm.mergedConfig.lineDash.join(',') : '0',"stroke":("url(#" + _vm.polylineGradient + ")"),"points":_vm.points}}),_c('text',{attrs:{"stroke":_vm.mergedConfig ? _vm.mergedConfig.textColor : '#fff',"fill":_vm.mergedConfig ? _vm.mergedConfig.textColor : '#fff',"x":_vm.width / 2,"y":_vm.height / 2}},[_vm._v(" "+_vm._s(_vm.details)+" ")])])])}
var mainvue_type_template_id_ea653244_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue?vue&type=template&id=ea653244&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var percentPond_src_mainvue_type_script_lang_js_ = ({
  name: 'DvPercentPond',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    const id = uuid()
    return {
      gradientId1: `percent-pond-gradientId1-${id}`,
      gradientId2: `percent-pond-gradientId2-${id}`,

      width: 0,
      height: 0,

      defaultConfig: {
        /**
         * @description Value
         * @type {Number}
         * @default value = 0
         */
        value: 0,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#3DE7C9', '#00BAFF'],
        /**
         * @description Border width
         * @type {Number}
         * @default borderWidth = 3
         */
        borderWidth: 3,
        /**
         * @description Gap between border and pond
         * @type {Number}
         * @default borderGap = 3
         */
        borderGap: 3,
        /**
         * @description Line dash
         * @type {Array<Number>}
         * @default lineDash = [5, 1]
         */
        lineDash: [5, 1],
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: '#fff',
        /**
         * @description Border radius
         * @type {Number}
         * @default borderRadius = 5
         */
        borderRadius: 5,
        /**
         * @description Local Gradient
         * @type {Boolean}
         * @default localGradient = false
         * @example localGradient = false | true
         */
        localGradient: false,
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: '{value}%'
      },

      mergedConfig: null
    }
  },
  computed: {
    rectWidth () {
      const { mergedConfig, width } = this

      if (!mergedConfig) return 0

      const { borderWidth } = mergedConfig

      return width - borderWidth
    },
    rectHeight () {
      const { mergedConfig, height } = this

      if (!mergedConfig) return 0

      const { borderWidth } = mergedConfig

      return height - borderWidth
    },
    points () {
      const { mergedConfig, width, height } = this

      const halfHeight = height / 2

      if (!mergedConfig) return `0, ${halfHeight} 0, ${halfHeight}`

      const { borderWidth, borderGap, value } = mergedConfig

      const polylineLength = (width - (borderWidth + borderGap) * 2) / 100 * value

      return `
        ${borderWidth + borderGap}, ${halfHeight}
        ${borderWidth + borderGap + polylineLength}, ${halfHeight + 0.001}
      `
    },
    polylineWidth () {
      const { mergedConfig, height } = this

      if (!mergedConfig) return 0

      const { borderWidth, borderGap } = mergedConfig

      return height - (borderWidth + borderGap) * 2
    },
    linearGradient () {
      const { mergedConfig } = this

      if (!mergedConfig) return []

      const { colors } = mergedConfig

      const colorNum = colors.length

      const colorOffsetGap = 100 / (colorNum - 1)

      return colors.map((c, i) => [colorOffsetGap * i, c])
    },
    polylineGradient () {
      const { gradientId1, gradientId2, mergedConfig } = this

      if (!mergedConfig) return gradientId2

      if (mergedConfig.localGradient) return gradientId1

      return gradientId2
    },
    gradient2XPos () {
      const { mergedConfig } = this

      if (!mergedConfig) return '100%'

      const { value } = mergedConfig

      return `${200 - value}%`
    },
    details () {
      const { mergedConfig } = this

      if (!mergedConfig) return ''

      const { value, formatter } = mergedConfig

      return formatter.replace('{value}', value)
    }
  },
  watch: {
    config () {
      const { mergeConfig } = this

      mergeConfig()
    }
  },
  methods: {
    async init () {
      const { initWH, config, mergeConfig } = this

      await initWH()

      if (!config) return

      mergeConfig()
    },
    async initWH () {
      const { $nextTick, $refs } = this

      await $nextTick()

      const { clientWidth, clientHeight } = $refs['percent-pond']

      this.width = clientWidth
      this.height = clientHeight
    },
    mergeConfig () {
      const { config, defaultConfig } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})
    }
  },
  mounted () {
    const { init } = this

    init()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_percentPond_src_mainvue_type_script_lang_js_ = (percentPond_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue





/* normalize component */

var percentPond_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_percentPond_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_ea653244_render,
  mainvue_type_template_id_ea653244_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_percentPond_src_main = (percentPond_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/index.js



/* harmony default export */ var percentPond = (function (Vue) {
  Vue.component(components_percentPond_src_main.name, components_percentPond_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.css
var scrollBoard_src_main = __webpack_require__("037e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue?vue&type=template&id=0c0d0428&
var mainvue_type_template_id_0c0d0428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-scroll-board"},[(_vm.header.length && _vm.mergedConfig)?_c('div',{staticClass:"header",style:(("background-color: " + (_vm.mergedConfig.headerBGC) + ";"))},_vm._l((_vm.header),function(headerItem,i){return _c('div',{key:("" + headerItem + i),staticClass:"header-item",style:(("\n        height: " + (_vm.mergedConfig.headerHeight) + "px;\n        line-height: " + (_vm.mergedConfig.headerHeight) + "px;\n        width: " + (_vm.widths[i]) + "px;\n      ")),attrs:{"align":_vm.aligns[i]},domProps:{"innerHTML":_vm._s(headerItem)}})}),0):_vm._e(),(_vm.mergedConfig)?_c('div',{staticClass:"rows",style:(("height: " + (_vm.height - (_vm.header.length ? _vm.mergedConfig.headerHeight : 0)) + "px;"))},_vm._l((_vm.rows),function(row,ri){return _c('div',{key:("" + (row.toString()) + (row.scroll)),staticClass:"row-item",style:(("\n        height: " + (_vm.heights[ri]) + "px;\n        line-height: " + (_vm.heights[ri]) + "px;\n        background-color: " + (_vm.mergedConfig[row.rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC']) + ";\n      "))},_vm._l((row.ceils),function(ceil,ci){return _c('div',{key:("" + ceil + ri + ci),staticClass:"ceil",style:(("width: " + (_vm.widths[ci]) + "px;")),attrs:{"align":_vm.aligns[ci]},domProps:{"innerHTML":_vm._s(ceil)},on:{"click":function($event){return _vm.emitEvent('click', ri, ci, row, ceil)},"mouseenter":function($event){return _vm.handleHover(true, ri, ci, row, ceil)},"mouseleave":function($event){return _vm.handleHover(false)}}})}),0)}),0):_vm._e()])}
var mainvue_type_template_id_0c0d0428_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue?vue&type=template&id=0c0d0428&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var scrollBoard_src_mainvue_type_script_lang_js_ = ({
  name: 'DvScrollBoard',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      ref: 'scroll-board',

      defaultConfig: {
        /**
         * @description Board header
         * @type {Array<String>}
         * @default header = []
         * @example header = ['column1', 'column2', 'column3']
         */
        header: [],
        /**
         * @description Board data
         * @type {Array<Array>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Header background color
         * @type {String}
         * @default headerBGC = '#00BAFF'
         */
        headerBGC: '#00BAFF',
        /**
         * @description Odd row background color
         * @type {String}
         * @default oddRowBGC = '#003B51'
         */
        oddRowBGC: '#003B51',
        /**
         * @description Even row background color
         * @type {String}
         * @default evenRowBGC = '#003B51'
         */
        evenRowBGC: '#0A2732',
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2000,
        /**
         * @description Header height
         * @type {Number}
         * @default headerHeight = 35
         */
        headerHeight: 35,
        /**
         * @description Column width
         * @type {Array<Number>}
         * @default columnWidth = []
         */
        columnWidth: [],
        /**
         * @description Column align
         * @type {Array<String>}
         * @default align = []
         * @example align = ['left', 'center', 'right']
         */
        align: [],
        /**
         * @description Show index
         * @type {Boolean}
         * @default index = false
         */
        index: false,
        /**
         * @description index Header
         * @type {String}
         * @default indexHeader = '#'
         */
        indexHeader: '#',
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: 'single',
        /**
         * @description Pause scroll when mouse hovered
         * @type {Boolean}
         * @default hoverPause = true
         * @example hoverPause = true | false
         */
        hoverPause: true
      },

      mergedConfig: null,

      header: [],

      rowsData: [],

      rows: [],

      widths: [],

      heights: [],

      avgHeight: 0,

      aligns: [],

      animationIndex: 0,

      animationHandler: '',

      updater: 0,

      needCalc: false
    }
  },
  watch: {
    config () {
      const { stopAnimation, calcData } = this

      stopAnimation()

      this.animationIndex = 0

      calcData()
    }
  },
  methods: {
    handleHover(enter, ri, ci, row, ceil){
      const { mergedConfig, emitEvent, stopAnimation, animation } = this

      if (enter) emitEvent('mouseover', ri, ci, row, ceil)
      if (!mergedConfig.hoverPause) return

      if (enter) {
        stopAnimation()
      } else {
        animation(true)
      }
    },
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { mergedConfig, calcWidths, calcHeights } = this

      if (!mergedConfig) return

      calcWidths()

      calcHeights()
    },
    calcData () {
      const { mergeConfig, calcHeaderData, calcRowsData } = this

      mergeConfig()

      calcHeaderData()

      calcRowsData()

      const { calcWidths, calcHeights, calcAligns } = this

      calcWidths()

      calcHeights()

      calcAligns()

      const { animation } = this

      animation(true)
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})
    },
    calcHeaderData () {
      let { header, index, indexHeader} = this.mergedConfig

      if (!header.length) {
        this.header = []

        return
      }

      header = [...header]

      if (index) header.unshift(indexHeader)

      this.header = header
    },
    calcRowsData () {
      let { data, index, headerBGC, rowNum } = this.mergedConfig

      if (index) {
        data = data.map((row, i) => {
          row = [...row]

          const indexTag = `<span class="index" style="background-color: ${headerBGC};">${i + 1}</span>`

          row.unshift(indexTag)

          return row
        })
      }

      data = data.map((ceils, i) => ({ ceils, rowIndex: i }))

      const rowLength = data.length

      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [...data, ...data]
      }

      data = data.map((d, i) => ({ ...d, scroll: i }))

      this.rowsData = data
      this.rows = data
    },
    calcWidths () {
      const { width, mergedConfig, rowsData } = this

      const { columnWidth, header } = mergedConfig

      const usedWidth = columnWidth.reduce((all, w) => all + w, 0)

      let columnNum = 0
      if (rowsData[0]) {
        columnNum = rowsData[0].ceils.length
      } else if (header.length) {
        columnNum = header.length
      }

      const avgWidth = (width - usedWidth) / (columnNum - columnWidth.length)

      const widths = new Array(columnNum).fill(avgWidth)

      this.widths = Object(util["deepMerge"])(widths, columnWidth)
    },
    calcHeights (onresize = false) {
      const { height, mergedConfig, header } = this

      const { headerHeight, rowNum, data } = mergedConfig

      let allHeight = height

      if (header.length) allHeight -= headerHeight

      const avgHeight = allHeight / rowNum

      this.avgHeight = avgHeight

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight)
    },
    calcAligns () {
      const { header, mergedConfig } = this

      const columnNum = header.length

      let aligns = new Array(columnNum).fill('left')

      const { align } = mergedConfig

      this.aligns = Object(util["deepMerge"])(aligns, align)
    },
    async animation (start = false) {
      const { needCalc, calcHeights, calcRowsData } = this

      if (needCalc) {
        calcRowsData()
        calcHeights()
        this.needCalc = false
      }

      let { avgHeight, animationIndex, mergedConfig, rowsData, animation, updater } = this

      const { waitTime, carousel, rowNum } = mergedConfig

      const rowLength = rowsData.length

      if (rowNum >= rowLength) return

      if (start) {
        await new Promise(resolve => setTimeout(resolve, waitTime))
        if (updater !== this.updater) return
      }

      const animationNum = carousel === 'single' ? 1 : rowNum

      let rows = rowsData.slice(animationIndex)
      rows.push(...rowsData.slice(0, animationIndex))

      this.rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1)
      this.heights = new Array(rowLength).fill(avgHeight)

      await new Promise(resolve => setTimeout(resolve, 300))
      if (updater !== this.updater) return

      this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))

      animationIndex += animationNum

      const back = animationIndex - rowLength
      if (back >= 0) animationIndex = back

      this.animationIndex = animationIndex
      this.animationHandler = setTimeout(animation, waitTime - 300)
    },
    stopAnimation () {
      const { animationHandler, updater } = this

      this.updater = (updater + 1) % 999999

      if (!animationHandler) return

      clearTimeout(animationHandler)
    },
    emitEvent (type, ri, ci, row, ceil) {
      const { ceils, rowIndex } = row

      this.$emit(type, {
        row: ceils,
        ceil,
        rowIndex,
        columnIndex: ci
      })
    },
    updateRows(rows, animationIndex) {
      const { mergedConfig, animationHandler, animation } = this

      this.mergedConfig = {
        ...mergedConfig,
        data: [...rows]
      }

      this.needCalc = true

      if (typeof animationIndex === 'number') this.animationIndex = animationIndex
      if (!animationHandler) animation(true)
    }
  },
  destroyed () {
    const { stopAnimation } = this

    stopAnimation()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_scrollBoard_src_mainvue_type_script_lang_js_ = (scrollBoard_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue





/* normalize component */

var scrollBoard_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_scrollBoard_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_0c0d0428_render,
  mainvue_type_template_id_0c0d0428_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_scrollBoard_src_main = (scrollBoard_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/index.js



/* harmony default export */ var scrollBoard = (function (Vue) {
  Vue.component(components_scrollBoard_src_main.name, components_scrollBoard_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.css
var scrollRankingBoard_src_main = __webpack_require__("c280");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue?vue&type=template&id=045d0900&
var mainvue_type_template_id_045d0900_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-scroll-ranking-board"},_vm._l((_vm.rows),function(item,i){return _c('div',{key:item.toString() + item.scroll,staticClass:"row-item",style:(("height: " + (_vm.heights[i]) + "px;"))},[_c('div',{staticClass:"ranking-info"},[_c('div',{staticClass:"rank"},[_vm._v("No."+_vm._s(item.ranking))]),_c('div',{staticClass:"info-name",domProps:{"innerHTML":_vm._s(item.name)}}),_c('div',{staticClass:"ranking-value"},[_vm._v(_vm._s(_vm.mergedConfig.valueFormatter ? _vm.mergedConfig.valueFormatter(item) : item.value + _vm.mergedConfig.unit))])]),_c('div',{staticClass:"ranking-column"},[_c('div',{staticClass:"inside-column",style:(("width: " + (item.percent) + "%;"))},[_c('div',{staticClass:"shine"})])])])}),0)}
var mainvue_type_template_id_045d0900_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue?vue&type=template&id=045d0900&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var scrollRankingBoard_src_mainvue_type_script_lang_js_ = ({
  name: 'DvScrollRankingBoard',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      ref: 'scroll-ranking-board',

      defaultConfig: {
        /**
         * @description Board data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2000,
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: 'single',
        /**
         * @description Value unit
         * @type {String}
         * @default unit = ''
         * @example unit = 'ton'
         */
        unit: '',
        /**
         * @description Auto sort by value
         * @type {Boolean}
         * @default sort = true
         */
        sort: true,
        /**
         * @description Value formatter
         * @type {Function}
         * @default valueFormatter = null
         */
        valueFormatter: null
      },

      mergedConfig: null,

      rowsData: [],

      rows: [],

      heights: [],

      animationIndex: 0,

      animationHandler: '',

      updater: 0
    }
  },
  watch: {
    config () {
      const { stopAnimation, calcData } = this

      stopAnimation()

      calcData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { mergedConfig, calcHeights } = this

      if (!mergedConfig) return

      calcHeights(true)
    },
    calcData () {
      const { mergeConfig, calcRowsData } = this

      mergeConfig()

      calcRowsData()

      const { calcHeights } = this

      calcHeights()

      const { animation } = this

      animation(true)
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {})
    },
    calcRowsData () {
      let { data, rowNum, sort } = this.mergedConfig

      sort && data.sort(({ value: a }, { value: b }) => {
        if (a > b) return -1
        if (a < b) return 1
        if (a === b) return 0
      })

      const value = data.map(({ value }) => value)
      
      const min = Math.min(...value) || 0

      // abs of min
      const minAbs = Math.abs(min)

      const max = Math.max(...value) || 0

      // abs of max
      const maxAbs = Math.abs(max)

      const total = max + minAbs

      data = data.map((row, i) => ({ ...row, ranking: i + 1, percent: (row.value + minAbs) / total * 100 }))

      const rowLength = data.length

      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [...data, ...data]
      }

      data = data.map((d, i) => ({ ...d, scroll: i }))

      this.rowsData = data
      this.rows = data
    },
    calcHeights (onresize = false) {
      const { height, mergedConfig } = this

      const { rowNum, data } = mergedConfig

      const avgHeight = height / rowNum

      this.avgHeight = avgHeight

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight)
    },
    async animation (start = false) {
      let { avgHeight, animationIndex, mergedConfig, rowsData, animation, updater } = this

      const { waitTime, carousel, rowNum } = mergedConfig

      const rowLength = rowsData.length

      if (rowNum >= rowLength) return

      if (start) {
        await new Promise(resolve => setTimeout(resolve, waitTime))
        if (updater !== this.updater) return
      }

      const animationNum = carousel === 'single' ? 1 : rowNum

      let rows = rowsData.slice(animationIndex)
      rows.push(...rowsData.slice(0, animationIndex))

      this.rows = rows.slice(0, rowNum + 1)
      this.heights = new Array(rowLength).fill(avgHeight)

      await new Promise(resolve => setTimeout(resolve, 300))
      if (updater !== this.updater) return

      this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))

      animationIndex += animationNum

      const back = animationIndex - rowLength
      if (back >= 0) animationIndex = back

      this.animationIndex = animationIndex
      this.animationHandler = setTimeout(animation, waitTime - 300)
    },
    stopAnimation () {
      const { animationHandler, updater } = this

      this.updater = (updater + 1) % 999999

      if (!animationHandler) return

      clearTimeout(animationHandler)
    },
  },
  destroyed () {
    const { stopAnimation } = this

    stopAnimation()
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_scrollRankingBoard_src_mainvue_type_script_lang_js_ = (scrollRankingBoard_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue





/* normalize component */

var scrollRankingBoard_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_scrollRankingBoard_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_045d0900_render,
  mainvue_type_template_id_045d0900_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_scrollRankingBoard_src_main = (scrollRankingBoard_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/index.js



/* harmony default export */ var scrollRankingBoard = (function (Vue) {
  Vue.component(components_scrollRankingBoard_src_main.name, components_scrollRankingBoard_src_main)
});

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.css
var waterLevelPond_src_main = __webpack_require__("fa10");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"83837588-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue?vue&type=template&id=fde64310&
var mainvue_type_template_id_fde64310_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-water-pond-level"},[(_vm.renderer)?_c('svg',[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId,"x1":"0%","y1":"0%","x2":"0%","y2":"100%"}},_vm._l((_vm.svgBorderGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":lc[0],"stop-color":lc[1]}})}),1)],1),(_vm.renderer)?_c('text',{attrs:{"stroke":("url(#" + _vm.gradientId + ")"),"fill":("url(#" + _vm.gradientId + ")"),"x":_vm.renderer.area[0] / 2 + 8,"y":_vm.renderer.area[1] / 2 + 8}},[_vm._v(" "+_vm._s(_vm.details)+" ")]):_vm._e(),(!_vm.shape || _vm.shape === 'round')?_c('ellipse',{attrs:{"cx":_vm.renderer.area[0] / 2 + 8,"cy":_vm.renderer.area[1] / 2 + 8,"rx":_vm.renderer.area[0] / 2 + 5,"ry":_vm.renderer.area[1] / 2 + 5,"stroke":("url(#" + _vm.gradientId + ")")}}):_c('rect',{attrs:{"x":"2","y":"2","rx":_vm.shape === 'roundRect' ? 10 : 0,"ry":_vm.shape === 'roundRect' ? 10 : 0,"width":_vm.renderer.area[0] + 12,"height":_vm.renderer.area[1] + 12,"stroke":("url(#" + _vm.gradientId + ")")}})]):_vm._e(),_c('canvas',{ref:"water-pond-level",style:(("border-radius: " + _vm.radius + ";"))})])}
var mainvue_type_template_id_fde64310_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue?vue&type=template&id=fde64310&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var waterLevelPond_src_mainvue_type_script_lang_js_ = ({
  name: 'DvWaterLevelPond',
  props: {
    config: Object,
    default: () => ({})
  },
  data () {
    const id = uuid()
    return {
      gradientId: `water-level-pond-${id}`,

      defaultConfig: {
        /**
         * @description Data
         * @type {Array<Number>}
         * @default data = []
         * @example data = [60, 40]
         */
        data: [],
        /**
         * @description Shape of wanter level pond
         * @type {String}
         * @default shape = 'rect'
         * @example shape = 'rect' | 'roundRect' | 'round'
         */
        shape: 'rect',
        /**
         * @description Water wave number
         * @type {Number}
         * @default waveNum = 3
         */
        waveNum: 3,
        /**
         * @description Water wave height (px)
         * @type {Number}
         * @default waveHeight = 40
         */
        waveHeight: 40,
        /**
         * @description Wave opacity
         * @type {Number}
         * @default waveOpacity = 0.4
         */
        waveOpacity: 0.4,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#3DE7C9', '#00BAFF'],
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: '{value}%'
      },

      mergedConfig: {},

      renderer: null,

      svgBorderGradient: [],

      details: '',

      waves: [],

      animation: false
    }
  },
  computed: {
    radius () {
      const { shape } = this.mergedConfig

      if (shape === 'round') return '50%'

      if (shape === 'rect') return '0'

      if (shape === 'roundRect') return '10px'

      return '0'
    },
    shape () {
      const { shape } = this.mergedConfig

      if (!shape) return 'rect'

      return shape
    }
  },
  watch: {
    config () {
      const { calcData, renderer } = this

      renderer.delAllGraph()

      this.waves = []

      setTimeout(calcData, 0)
    }
  },
  methods: {
    init () {
      const { initRender, config, calcData } = this

      initRender()

      if (!config) return

      calcData()
    },
    initRender () {
      const { $refs } = this

      this.renderer = new c_render_lib_default.a($refs['water-pond-level'])
    },
    calcData () {
      const { mergeConfig, calcSvgBorderGradient, calcDetails } = this

      mergeConfig()

      calcSvgBorderGradient()

      calcDetails()

      const { addWave, animationWave } = this

      addWave()

      animationWave()
    },
    mergeConfig () {
      const { config, defaultConfig } = this

      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config)
    },
    calcSvgBorderGradient () {
      const { colors } = this.mergedConfig

      const colorNum = colors.length

      const colorOffsetGap = 100 / (colorNum - 1)

      this.svgBorderGradient = colors.map((c, i) => [colorOffsetGap * i, c])
    },
    calcDetails () {
      const { data, formatter } = this.mergedConfig

      if (!data.length) {
        this.details = ''

        return
      }

      const maxValue = Math.max(...data)

      this.details = formatter.replace('{value}', maxValue)
    },
    addWave () {
      const { renderer, getWaveShapes, getWaveStyle, drawed } = this

      const shapes = getWaveShapes()
      const style = getWaveStyle()

      this.waves = shapes.map(shape => renderer.add({
        name: 'smoothline',
        animationFrame: 300,
        shape,
        style,
        drawed
      }))
    },
    getWaveShapes () {
      const { mergedConfig, renderer, mergeOffset } = this

      const { waveNum, waveHeight, data } = mergedConfig

      const [w, h] = renderer.area

      const pointsNum = waveNum * 4 + 4

      const pointXGap = w / waveNum / 2

      return data.map(v => {
        let points = new Array(pointsNum).fill(0).map((foo, j) => {
          const x = w - pointXGap * j

          const startY = (1 - v / 100) * h

          const y = j % 2 === 0 ? startY : startY - waveHeight

          return [x, y]
        })

        points = points.map(p => mergeOffset(p, [pointXGap * 2, 0]))

        return { points }
      })
    },
    mergeOffset ([x, y], [ox, oy]) {
      return [x + ox, y + oy]
    },
    getWaveStyle () {
      const { renderer, mergedConfig } = this

      const h = renderer.area[1]

      return {
        gradientColor: mergedConfig.colors,
        gradientType: 'linear',
        gradientParams: [0, 0, 0, h],
        gradientWith: 'fill',
        opacity: mergedConfig.waveOpacity,
        translate: [0, 0]
      }
    },
    drawed ({ shape: { points } }, { ctx, area }) {
      const firstPoint = points[0]
      const lastPoint = points.slice(-1)[0]

      const h = area[1]

      ctx.lineTo(lastPoint[0], h)
      ctx.lineTo(firstPoint[0], h)

      ctx.closePath()

      ctx.fill()
    },
    async animationWave (repeat = 1) {
      const { waves, renderer, animation } = this

      if (animation) return

      this.animation = true

      const w = renderer.area[0]

      waves.forEach(graph => {
        graph.attr('style', { translate: [0, 0] })

        graph.animation('style', {
          translate: [w, 0]
        }, true)
      })

      await renderer.launchAnimation()

      this.animation = false

      if (!renderer.graphs.length) return

      this.animationWave(repeat + 1)
    }
  },
  mounted () {
    const { init } = this

    init()
  },
  beforeDestroy () {
    const { renderer } = this

    renderer.delAllGraph()

    this.waves = []
  }
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_waterLevelPond_src_mainvue_type_script_lang_js_ = (waterLevelPond_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue





/* normalize component */

var waterLevelPond_src_main_component = Object(componentNormalizer["a" /* default */])(
  components_waterLevelPond_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_fde64310_render,
  mainvue_type_template_id_fde64310_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_waterLevelPond_src_main = (waterLevelPond_src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/index.js



/* harmony default export */ var waterLevelPond = (function (Vue) {
  Vue.component(components_waterLevelPond_src_main.name, components_waterLevelPond_src_main)
});

// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/index.js
/**
 * EXPORT COMPONENTS
 */






































/**
 * IMPORT COMPONENTS
 */



// border box














// decoration













// charts













/**
 * USE COMPONENTS
 */
/* harmony default export */ var data_view_lib = (function (Vue) {
  Vue.use(fullScreenContainer)
  Vue.use(loading)

  // border box
  Vue.use(borderBox1)
  Vue.use(borderBox2)
  Vue.use(borderBox3)
  Vue.use(borderBox4)
  Vue.use(borderBox5)
  Vue.use(borderBox6)
  Vue.use(borderBox7)
  Vue.use(borderBox8)
  Vue.use(borderBox9)
  Vue.use(borderBox10)
  Vue.use(borderBox11)
  Vue.use(borderBox12)
  Vue.use(borderBox13)

  // decoration
  Vue.use(decoration1)
  Vue.use(decoration2)
  Vue.use(decoration3)
  Vue.use(decoration4)
  Vue.use(decoration5)
  Vue.use(decoration6)
  Vue.use(decoration7)
  Vue.use(decoration8)
  Vue.use(decoration9)
  Vue.use(decoration10)
  Vue.use(decoration11)
  Vue.use(decoration12)

  // charts
  Vue.use(charts)

  Vue.use(activeRingChart)
  Vue.use(capsuleChart)
  Vue.use(waterLevelPond)
  Vue.use(percentPond)
  Vue.use(flylineChart)
  Vue.use(flylineChartEnhanced)
  Vue.use(conicalColumnChart)
  Vue.use(digitalFlop)
  Vue.use(scrollBoard)
  Vue.use(scrollRankingBoard)
});

// CONCATENATED MODULE: ./packages/Header/config.js
const config_config = {
    component: 'Header',
    label: '头部',
    icon: 'buju_toubu',
    style: {
        width: 1920,
        height: 160,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
     
    },
}
/* harmony default export */ var Header_config = (config_config);
// CONCATENATED MODULE: ./packages/VButton/config.js
const VButton_config_config = {
    component: 'v-button', 
    label: '按钮', 
    icon: 'button-component',
    style: {
        width: 100,
        height: 34,
        borderWidth: 1,
        borderColor: '',
        borderRadius: '',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    label: {
                        title: '标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'label',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        model: {
            label: '这是一个button',
        },
    },
}
/* harmony default export */ var VButton_config = (VButton_config_config);
// CONCATENATED MODULE: ./packages/Picture/config.js
const Picture_config_config = {
    component: 'Picture', 
    label: '图片', 
    icon: 'tupian',
    style: {
        width: 300,
        height: 200,
        borderRadius: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    src: {
                        title: '图片路径',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'src',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        model: {
            src: '',
        },
    },
}
/* harmony default export */ var Picture_config = (Picture_config_config);
// CONCATENATED MODULE: ./packages/VText/config.js
const VText_config_config = {
    component: 'v-text',
    label: '文字',
    icon: 'text',
    style: {
        width: 200,
        height: 22,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '#fff',
    },
    // 属性的配置
    props: {
        // 属性schema
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    text: {
                        title: '文本值',
                        type: 'string',
                        description: '输入文本值',
                        'ui:options': {
                            placeholder: '请输入',
                            clearable: true,
                        },
                    },
                },
                'ui:order': [
                    'text',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelPosition: 'top',
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            text: '双击编辑文字',
        },
    },
}

/* harmony default export */ var VText_config = (VText_config_config);
// CONCATENATED MODULE: ./packages/RectShape/config.js
const RectShape_config_config = {
    component: 'RectShape',
    label: '矩形',
    icon: 'juxing',
    style: {
        width: 200,
        height: 200,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: 'center',
        color: '',
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '',
        borderStyle: 'solid',
        verticalAlign: 'middle',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    text: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'text',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            text: '默认文本',
        },
   
    },

}
/* harmony default export */ var RectShape_config = (RectShape_config_config);
// CONCATENATED MODULE: ./packages/Gauge/config.js
const Gauge_config_config = {
    component: 'Gauge',
    label: '仪表盘',
    icon: 'sharpicons_gauge',
    style: {
        width: 200,
        height: 200,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var Gauge_config = (Gauge_config_config);
// CONCATENATED MODULE: ./packages/Flyline/config.js
const Flyline_config_config = {
    component: 'Flyline',
    label: '飞线图',
    icon: 'feixiantu',
    style: {
        width: 400,
        height: 400,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var Flyline_config = (Flyline_config_config);
// CONCATENATED MODULE: ./packages/RingChart/config.js
const RingChart_config_config = {
    component: 'RingChart',
    label: '环图',
    icon: 'fsux_tubiao_bingtu',
    style: {
        width: 200,
        height: 200,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var RingChart_config = (RingChart_config_config);
// CONCATENATED MODULE: ./packages/Capsule/config.js
const Capsule_config_config = {
    component: 'Capsule',
    label: '胶囊柱图',
    icon: 'zhuxingtu',
    style: {
        width: 300,
        height: 300,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var Capsule_config = (Capsule_config_config);
// CONCATENATED MODULE: ./packages/WaterLevel/config.js
const WaterLevel_config_config = {
    component: 'WaterLevel',
    label: '水位图',
    icon: 'shuiweitu',
    style: {
        width: 150,
        height: 200,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var WaterLevel_config = (WaterLevel_config_config);
// CONCATENATED MODULE: ./packages/PercentPond/config.js
const PercentPond_config_config = {
    component: 'PercentPond',
    label: '进度池',
    icon: 'waterlevelsensor',
    style: {
        width: 200,
        height: 100,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        'ui:options': {
                            placeholder: '请输入',
                        },
                    },
                },
                'ui:order': [
                    'title',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            title: '默认标题',
        },
   
    },
}
/* harmony default export */ var PercentPond_config = (PercentPond_config_config);
// CONCATENATED MODULE: ./packages/BackGround/config.js
const BackGround_config_config = {
    component: 'BackGround',
    label: '背景',
    icon: 'juxing',
    style: {
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        backgroundImage: '',
    },
}
/* harmony default export */ var BackGround_config = (BackGround_config_config);
// CONCATENATED MODULE: ./packages/Border/config.js
const Border_config_config = {
    component: 'Border',
    label: '边框',
    icon: 'zhuxingtu',
    style: {
        width: 300,
        height: 300,
        backgroundColor: '',
    },
    props: {
        schemaOptions: {
            schema: {
                type: 'object',
                required: [],
                properties: {
                    type: {
                        title: '边框类型',
                        type: 'string',
                        'ui:widget': 'SelectWidget',
                        enum: [
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            '10',
                            '11',
                        ],
                    },
                },
                'ui:order': [
                    'type',
                ],
            },
            uiSchema: {},
            formFooter: {
                show: false,
            },
            formProps: {
                labelWidth: '100px',
                labelSuffix: '：',
            },
        },
        // 属性数据
        model: {
            type: '1',
        },
   
    },
}
/* harmony default export */ var Border_config = (Border_config_config);

// CONCATENATED MODULE: ./packages/configCombine.js














// shape容器的样式
const shapeStyle= {
    rotate: 0, 
    width: 0,
    height: 0,
    top: 0,
    left: 0,
}
// 组件的公共样式
const componentStyle= {
    opacity: 1,
}

// 基础样式(待改进)注入组件的style属性中
const commonStyle = {
    ...shapeStyle,
    ...componentStyle,
}
// 公共属性
const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}
// 基础组件配置列表
const basicComponentList = [
    BackGround_config,
    RectShape_config,
    VText_config,
    Picture_config,
    VButton_config,
    Header_config,
    Border_config,
]
// 物料组件配置列表
const materialsComponentList = [
    Gauge_config,
    Flyline_config,
    RingChart_config,
    Capsule_config,
    WaterLevel_config,
    PercentPond_config,
]
// 组合方法
function combine(list) {
    for (let i = 0, len = list.length; i < len; i++) {
        const item = list[i]
        item.style = { ...commonStyle, ...item.style }
        list[i] = { ...commonAttr, ...item }
    }
}

// 编辑器左侧组件列表
const list = [
    ...basicComponentList,
    ...materialsComponentList,
]
combine(list)

/* harmony default export */ var configCombine = (list);
// CONCATENATED MODULE: ./packages/index.js
const packVersion = '0.0.1-beta.01'
const packages_r = ['color: #fff', 'border-top-left-radius:3px', 'border-bottom-left-radius:3px', 'background-color: #564b4f', 'padding: 5px'].join(';');
const packages_i = ['color: #fff', 'border-top-right-radius:3px', 'border-bottom-right-radius:3px', 'background-color: #4fc08d', 'padding: 5px'].join(';');
console.log('%cvisualize-components %c'.concat(packVersion), packages_r, packages_i);


const customeComponentList = __webpack_require__("3ad2");
// install方法
const install = function (Vue) {
  if (install.installed) return;
  Vue.use(data_view_lib)
  customeComponentList.keys().forEach(fileName => {
    let config = customeComponentList(fileName);
    let componentName = fileName.split('/')[1]
    Vue.component(componentName, config.default || config);
  })
};
if (typeof window !== "undefined" && window.Vue)
{
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fe7b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=visualize-components.umd.js.map

/***/ }),

/***/ "bc62":
/*!*****************************************************************************************!*\
  !*** ./packages/Render/ComponentWrapper.vue?vue&type=template&id=b2a398b8&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64573b6a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentWrapper.vue?vue&type=template&id=b2a398b8&scoped=true& */ "6fb4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64573b6a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_template_id_b2a398b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "bee7":
/*!********************************************************************************************************!*\
  !*** ./packages/Render/ComponentWrapper.vue?vue&type=style&index=0&id=b2a398b8&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentWrapper.vue?vue&type=style&index=0&id=b2a398b8&lang=scss&scoped=true& */ "2d35");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentWrapper_vue_vue_type_style_index_0_id_b2a398b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d04e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64573b6a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/index.vue?vue&type=template&id=66d052f2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"canvas-container"},[_c('div',{staticClass:"canvas",style:({
                  width: _vm.canvasStyleData.width + 'px',
                  height: _vm.canvasStyleData.height + 'px',
                  backgroundImage:("url(" + (_vm.canvasStyleData.backgroundImage) + ")"),
                  backgroundColor:_vm.canvasStyleData.backgroundColor,
                  backgroundSize: '100%'
              })},_vm._l((_vm.componentData),function(item,index){return _c('ComponentWrapper',{key:index,attrs:{"scale":_vm.canvasStyleData.scale,"config":item}})}),1)])}
var staticRenderFns = []



/***/ }),

/***/ "d538":
/*!************************************************************************!*\
  !*** ./node_modules/visualize-components/lib/visualize-components.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dde8":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Render/ComponentWrapper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_runAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/runAnimation */ "14e2");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/events */ "5255");
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    config: {
      type: Object,
      require: true,
    },
    scale: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      exclude: ["scale"],
      // style中属于sahpe的样式
      shapeStyle: ["width", "height", "top", "left", "rotate", "scale"],
      // 需要被还原的样式如下
      needToChange: [
        "top",
        "left",
        "width",
        "height",
        "fontSize",
        "borderWidth",
      ],
    };
  },
  mounted() {
    Object(_utils_runAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$el, this.config.animations);
  },
  mixins: [_utils_events__WEBPACK_IMPORTED_MODULE_1__["mixins"]],
  methods: {
    // 还原样式
    reductionStyle(key, value) {
      if (this.needToChange.includes(key)) {
        return (value / parseInt(this.scale)) * 100;
      } else {
        return value;
      }
    },
    getComponentStyle(style, filter = []) {
      // 需要加单位的style属性
      const needUnit = [
        "fontSize",
        "width",
        "height",
        "top",
        "left",
        "borderWidth",
        "letterSpacing",
        "borderRadius",
      ];
      const result = {};
      Object.keys(style).forEach((key) => {
        if (!filter.includes(key)) {
          if (key != "rotate") {
            result[key] = this.reductionStyle(key, style[key]);
            if (needUnit.includes(key)) {
              result[key] += "px";
            }
          } else {
            result.transform = `${key}(${style[key]}deg)`;
          }
        }
      });
      return result;
    },
    getShapeStyle(style) {
      const result = {};
      this.shapeStyle.forEach((key) => {
        if (key != "rotate") {
          result[key] = this.reductionStyle(key, style[key]) + "px";
        } else {
          result.transform = `rotate(${style[key]}deg)`;
        }
      });

      return result;
    },
    handleClick() {
      const events = this.config.events;
      Object.keys(events).forEach((event) => {
        this[event](events[event]);
      });
    },
  },
});


/***/ }),

/***/ "e9fb":
/*!************************************************************!*\
  !*** ./packages/Render/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "0e1b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "eeef":
/*!**********************************!*\
  !*** ./packages/Render/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "916f");
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
    Vue.component(_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _index_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}
// 默认导出组件
/* harmony default export */ __webpack_exports__["default"] = (_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "fb15":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ "1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ "3a0d");
/* empty/unused harmony star reexport */

/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ })

/******/ });
});
//# sourceMappingURL=visualize-render.umd.js.map