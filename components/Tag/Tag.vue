<template>
  <div :style="style" class="c-tag">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TagComponent',
  props: {
    color: {
      type: String,
      default: '#003BB3'
    },
    backgroundColor: {
      type: String,
      default: '#E2ECFF'
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";

.c-tag {
  padding: 2px 10px;
  // background: #E2ECFF;
  border-radius: 14px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  // display: flex;
  // align-items: center;
  width: fit-content;
  // color: #003BB3;
}
</style>
