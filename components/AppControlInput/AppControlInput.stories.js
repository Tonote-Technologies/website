export default {
  title: 'Components/ControlInput',
  argTypes: {
    controlType: {
      control: {
        type: 'select',
        options: ['input', 'textarea']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'search']
      }
    },
    label: {},
    icon: {}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => {
    return {
      value: ''
    }
  },
  template: '<app-control-input v-bind="$props" v-model="value" />'
})

export const InputControl = Template.bind({})
InputControl.args = {
  controlType: 'input',
  type: 'text',
  label: 'First name',
  icon: ''
}

export const selectInput = Template.bind({})
selectInput.args = {
  controlType: 'select',
  label: 'Company Email',
  icon: 'dropdown-down.svg'
}
