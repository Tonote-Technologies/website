<template>
  <div :style="style" />
</template>
<script>
export default {
  name: 'GapX',
  props: {
    gap: {
      type: String,
      default: '1px'
    }
  },
  computed: {
    style () {
      return {
        'margin-top': this.gap
      }
    }
  }
}
</script>
