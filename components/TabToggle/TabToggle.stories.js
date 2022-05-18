export default {
  title: 'Components/TabToggle',
  argTypes: {
    indicatorStyle: {},
    mainStyle: {},
    tabA: {},
    tabB: {},
    active: {}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      activeTab: 'Monthly'
    }
  },
  methods: {
    toggleActiveTab (tab) {
      this.activeTab = tab
    }
  },
  template:
    '<tab-toggle v-bind="$props" :toggle="toggleActiveTab" :active="activeTab"/>'
})

export const Default = Template.bind({})
Default.args = {
  indicatorStyle: {
    // 'background-color': 'red'
  },
  mainStyle: {}
}
