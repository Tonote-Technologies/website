exports.ids = [14];
exports.modules = {

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TButton',
  props: {
    size: {
      type: String,
      default: 'sm',

      validator(value) {
        return ['sm', 'md', 'lg', 'full'].includes(value);
      }

    },
    theme: {
      type: String,
      default: 'primary',

      validator(value) {
        return ['primary', 'secondary', 'outline', 'plain', 'link'].includes(value);
      }

    },
    submitType: {
      type: String,
      default: 'button'
    },
    padding: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    ml: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: Object,
      default: () => {}
    },
    iconWidth: {
      type: String,
      default: ''
    },
    iconHeight: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return {
        btn: true,
        [`btn-${this.theme}`]: true,
        [`btn-${this.size}`]: true // [`btn-${this.disabled}`]: true

      };
    },

    style() {
      return {
        padding: this.padding,
        width: this.width,
        height: this.height,
        fontSize: this.fontSize,
        color: this.textColor,
        textAlign: this.textAlign
      };
    } // iconStyle () {
    //   return {
    //     marginLeft: this.ml,
    //     width: this.iconWidth,
    //     height: this.iconHeight
    //   }
    // }


  }
});

/***/ })

};;
//# sourceMappingURL=t-button-button.js.map