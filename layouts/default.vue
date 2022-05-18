<template>
  <div class="main">
    <PreHeader />
    <nav
      class="py-4 lg:py-2 fixed bg-white z-30 left-0 right-0 top-0 lg:top-[58px]"
      :class="{ 'shadow-md': top }"
    >
      <div class="wrapper">
        <Header />
      </div>
    </nav>
    <div class="mt-24 lg:mt-44">
      <nuxt />
    </div>
    <Footer />
    <cookies />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      top: 0
    }
  },
  mounted () {
    const self = this
    document.addEventListener('scroll', function () {
      const st = window.pageYOffset || document.documentElement.scrollTop
      self.top = st <= 0 ? 0 : st
    }, false)
  }
}
</script>

<style lang="scss" >
html {
  --top-spacing: 115px;
  scroll-padding-top: var(--top-spacing);
}
</style>
