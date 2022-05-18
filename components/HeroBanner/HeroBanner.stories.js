export default {
  title: 'Components/HeroBanner',
  argTypes: {
    heading: {},
    subHeading: {}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <hero-banner v-bind="$props">
    <template #bannerbtn>
      <t-button size="md" width="186px">
        Start Earning
      </t-button>
      <t-button size="md" width="186px" theme="outline">
        Get an Affidavit
      </t-button>
    </template>
  </hero-banner>
  `
})

export const Home = Template.bind({})
Home.args = {
  heading: 'ToNote for Notaries Public',
  subHeading:
    'We are building a community that recognises the notary public service and encourages financial liberation through this service.'
}
export const Solutions = Template.bind({})
Solutions.args = {
  heading: 'Our Solutions',
  subHeading:
    'Our goal is to create a world where every document shared is secure and can be trusted. The first step towards this is to help people and teams sign, notarise and collaborate on documents virtually'
}
