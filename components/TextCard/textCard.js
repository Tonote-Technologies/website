export default {
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
}
