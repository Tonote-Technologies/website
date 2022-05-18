<template>
  <div class="c-footerList mb-[48px]">
    <h1 class="c-footerList__header">
      {{ header }}
    </h1>
    <div class="c-footerList__body">
      <span v-for="(link, i) in links" :key="i" class="link">
        <a v-if="link.to" :href="link.to">{{ link.name }}</a>
        <a v-else :href="link.url" target="_blank">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterList',
  props: {
    header: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.c-footerList {
  &__header {
    font-weight: bold;
    font-size: 16px;
    line-height: 162.5%;
    color: #ffffff;
    margin-bottom: 25px;
    // color: #000000;
  }

  &__body {
    display: block;

    .link {
      font-weight: normal;
      font-size: 14px;
      line-height: 194.5%;
      color: #ffffff;
      margin-bottom: 16px;
      // color: #000000;
      display: block;
    }
  }
}
</style>
