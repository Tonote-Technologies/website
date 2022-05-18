export default {
  title: 'FooterList'
  // argTypes: {
  //   header: {},
  //   links: {}
  // }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<FooterList v-bind="$props" />'
})

export const FooterList = Template.bind({})

FooterList.args = {
  header: 'Solutions',
  links: [
    {
      name: 'For Teams',
      url: 'https://google.com'
    },
    {
      name: 'For Businesses',
      url: 'http://getbem.com/'
    }
  ]
}
