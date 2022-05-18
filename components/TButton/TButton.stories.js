// export default {
//   title: 'Button'
// }

// export const PrimaryBtn = () => '<t-button />'

import TButton from './TButton.vue'

export default {
  title: 'TButton',
  component: TButton,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'plain', 'link']
      }
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 'full'] }
    },
    disabled: {
      control: { type: 'select', options: ['true', 'false'] }
    },
    ml: {},
    icon: {},
    textColor: {},
    width: {}
  }
}
const Template = (args, { argTypes }) => ({
  components: { TButton },
  props: Object.keys(argTypes),
  template: '<t-button v-bind="$props">Get an Affidavit</t-button>'
})

// export const Primary = Template.bind({});
// Primary.args = { background: '#003BB3', label: 'Primary Button' };

// export const Default = Template.bind({});

export const Primary = Template.bind({})

Primary.args = {
  theme: 'primary'
}
export const PrimaryWithIcon = Template.bind({})

PrimaryWithIcon.args = {
  theme: 'primary',
  icon: 'right-arrow-white.svg',
  ml: '40px'
}

export const Link = Template.bind({})

Link.args = {
  theme: 'link',
  icon: 'right-arrow-blue.svg',
  ml: '40px'
}
export const Outline = Template.bind({})

Outline.args = {
  theme: 'outline'
}

export const HeroButton = Template.bind({})

HeroButton.args = {
  theme: 'outline',
  width: '186px',
  size: 'md'
}
