export default {
  title: 'Accordion',
  argTypes: {
    title: {}
  }
}
// export const Accordion = () => ({
//   template: '<Accordion v-bind="$props" />',
// });

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<Accordion v-bind="$props">The reason for using tonote is to be happy</Accordion>'
})

export const Accordion = Template.bind({})
Accordion.args = {
  title: 'Why use Tonote?'
}
