export default {
  title: 'Roles',
  argTypes: {
    jobTitle: {},
    location: {}
  }
}
// export const Accordion = () => ({
//   template: '<Accordion v-bind="$props" />',
// });

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Roles v-bind="$props"></Roles>'
})

export const Roles = Template.bind({})
Roles.args = {
  jobTitle: 'Illustrator',
  location: 'Remote, OK'
}
