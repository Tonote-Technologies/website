export default {
  title: 'Components/ProfileCard',
  argTypes: {
    image: {},
    info: {}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      teams: [
        {
          name: 'Fikayo',
          role: 'Head, Product & Design',
          image: 'Fikayo.jpeg'
        },
        {
          name: 'Daniel',
          role: 'Head, Product & Design',
          image: 'Daniel.jpeg'
        },
        {
          name: 'Shafi',
          role: 'Head, Product & Design',
          image: 'Shafi.jpeg'
        },
        {
          name: 'Laide',
          role: 'Head, Product & Design',
          image: 'Laide.jpeg'
        }
      ]
    }
  },
  template: `
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-0">
    <profile-card v-bind="$props" v-for="(res, index) in teams" :key="index" v-bind:info="res" />
  </div>
    `
})

export const Default = Template.bind({})
