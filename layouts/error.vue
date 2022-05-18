<template>
  <div
    class="flex flex-col justify-center items-center w-screen h-screen space-y-2 text-center tonote p-5"
  >
    <h1 class="font-bolder text-[12rem] code">
      404
    </h1>
    <p
      class="text-[2rem] text-[#213b70] font-NeueHelvetica font-medium capitalize -translate-y-16"
    >
      Nothing to see here
    </p>
    <nuxt-link
      to="/"
      class="bg-primary-color text-white rounded-md px-3 py-2 text-sm -translate-y-16"
    >
      Go Back Home
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'nobar'
}
</script>

<style lang="scss" scoped>
.tonote {
  background-image: url('assets/icons/tonote_logo.svg');
  background-repeat: no-repeat;
  background-position: 4% 95vh;
  background-size: 30%;
  @media (min-width: 768px) {
    background-position: 3% 95vh;
    background-size: 20%;
  }
  @media (min-width: 1024px) {
    background-position: 2% 93vh;
    background-size: 10%;
  }
}
.code {
  color: #f5f5f5;
  text-shadow: 0 0 10px #003bb3;
}
</style>
