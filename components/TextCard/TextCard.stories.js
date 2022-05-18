import TextCard from '.'

export default {
  title: 'Components/TextCard',
  component: { TextCard },
  argTypes: {
    icon: {
      control: {}
    },
    iconStyle: {},
    mainStyle: {},
    headerStyle: {},
    subheader: {},
    header: {}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { TextCard },
  template: `
        <text-card v-bind="$props">
          <p class="textcard_body">
            If you've ever had to notarise a document or get an affidavit
            for personal or business use then our basic plan is
            for you.At no recurring cost, you can have access to all nationally certified notaries public on our platform.
          </p>
          <template #footer>
            <span>Footer content</span>
          </template>
        </text-card>
    `
})

export const Default = Template.bind({})
Default.args = {
  icon: '',
  headerStyle: {
    'font-size': '23.5135px'
  },
  header: 'ToNote Basic',
  mainStyle: {
    'font-size': '16px',
    margin: '31.49px 0 26px'
  }
}

export const TextcardWithIcon = Template.bind({})
TextcardWithIcon.args = {
  icon: 'world.svg',
  iconStyle: {
    'margin-bottom': '7px'
  },
  headerStyle: {
    'font-size': '16px'
  },
  header: 'Notarise from anywhere at anytime',
  mainStyle: {
    'font-size': '16px',
    margin: '15px 0 15px'
  }
}

export const TextcardWithSubHeader = Template.bind({})
TextcardWithSubHeader.args = {
  icon: '',
  subheader: 'BENEFITS',
  headerStyle: {
    'font-size': '23.5135px'
  },
  header:
    'we have created a free-market place that will give you access to a wide range of customers worldwide',
  mainStyle: {
    'font-size': '18px',
    margin: '15px 0 15px'
  }
}
