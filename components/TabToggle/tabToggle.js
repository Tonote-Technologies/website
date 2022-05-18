export default {
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
    activeTab () {
      return this.active
    }
  }
}
