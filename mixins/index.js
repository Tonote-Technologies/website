import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'authURL'
    ])
  },
  methods: {
    signIn() {
      // window.open(this.authURL('signin'))
      window.open('https://gettonote-users.netlify.app/')
    },
    signUp() {
      // window.open(this.authURL('signup'))
      window.open('https://gettonote-users.netlify.app/register')
    }
  }
}
