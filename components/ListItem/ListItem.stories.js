import ListItem from '.'

export default {
  title: 'Components/ListItem',
  component: { ListItem },
  argTypes: {
    icon: {
      control: {}
    },
    iconStyle: {},
    count: {
      control: {}
    },
    item: {
      control: {}
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { ListItem },
  template: '<list-item v-bind="$props" />'
})

export const count = Template.bind({})
count.args = {
  icon: '',
  count: 1,
  item: 'Sign up for free and upload your credentials'
}

export const markStamp = Template.bind({})
markStamp.args = {
  icon: 'mark-stamp.svg',
  iconStyle: {
    width: '18.21px',
    height: '18px'
  },
  item: 'Get certified true copies of essential documents such as your passport, birth certificate or educational certificate, virtually '
}

export const mark = Template.bind({})
mark.args = {
  icon: 'mark.svg',
  iconStyle: {
    width: '13.9px',
    height: '13.55px'
  },
  item: 'Enable seamless documentation management processes'
}
