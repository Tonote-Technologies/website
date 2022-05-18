import { ValidationProvider } from 'vee-validate'
export default {
  name: 'AppInputControl',
  components: {
    ValidationProvider
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
    style () {
      return {
        'margin-top': this.margin
      }
    }
  }
}
