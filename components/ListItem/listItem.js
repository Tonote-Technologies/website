export default {
  name: 'ListItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: Object,
      default: () => {}
    },
    count: {
      type: Number,
      default: 0
    },
    item: {
      type: String,
      default: 'help'
    }
  }
}
