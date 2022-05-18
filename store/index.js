
const initiateState = {
  appurl: process.env.appURL,
  signin: 'auth/sign-in',
  signup: 'auth/sign-up'
}
export const state = () => ({ ...initiateState })
export const getters = {
  authURL: state => (url) => {
    return `${state.appurl}${state[url]}`
  }
}
