export default {
  title: 'Tag',
  argTypes: {
    color: {},
    backround: {}
  }
}
// export const DefaultTag = () => ({
//   template: '<Tag v-bind="$props" />',
// });

// export const DefaultTag = () => ({
//   template: '<Tag>Design</Tag>'
// });

const Template = (args, { argTypes }) => ({
  // components: { Button },
  props: Object.keys(argTypes),
  template: '<Tag v-bind="$props">Engineering</Tag>'
})

export const DefaultCard = Template.bind({})

export const SecondaryCard = Template.bind({})
SecondaryCard.args = {
  color: '#2FA36B',
  backgroundColor: '#E8FFE8'
}
