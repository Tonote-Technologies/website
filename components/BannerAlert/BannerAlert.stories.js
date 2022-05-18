export default {
  title: 'Components/BannerAlert',
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<banner-alert />'
})

export const Default = Template.bind({})
