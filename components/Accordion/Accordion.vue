<template>
  <div
    class="accordion-group lg:pl-[40px] lg:border-b-[0.5px] border-black"
    :class="{ active }"
  >
    <div
      class="tab__header"
      :class="{ 'tab__header--active': active }"
      @click.prevent="active = !active"
    >
      <div class="accordion-card flex items-start justify-between">
        <p class="title mr-[30px] w-[268px] lg:w-[500px]">
          {{ title }}
        </p>
        <span
          class="side-arrow flex-shrink-0 mt-[3px]"
          :class="{ 'side-arrow--open': active }"
        >
          <picture>
            <source
              srcset="~/assets/icons/small-a.svg"
              media="(max-width: 768px)"
            >
            <img src="~/assets/icons/big-a.svg" alt="side arrow">
          </picture>
        </span>
      </div>
    </div>
    <div class="content text-black" :class="{ 'content--active': active }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

body {
  background-color: #f1f5f8;
}
.accordion-card {
  background-color: #fff;
}
.title {
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;

  // @media (min-width: 1024px) {
  //   line-height: 79.3%;
  // }
}
.content {
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  width: 80%;
  transition: 0.3s all ease-in-out;
  max-height: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 87%;
  }

  &--active {
    max-height: 900px;
    margin-top: 15px;
  }
}
.accordion-group {
  cursor: pointer;
  padding-top: 46px;
  padding-bottom: 46px;
  transition: 0.3s all ease-in-out;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &.active {
    padding-top: 46x;
    padding-bottom: 46px;

    @media screen and (max-width: 768px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
}
.tab__header {
  &--active {
    color: #000000;

    @media screen and (max-width: 768px) {
      color: #003bb3;
    }
  }
}

.side-arrow {
  cursor: pointer;

  &--open {
    transform: rotate(180deg);
    transition: transform 0.2s;
    transform-origin: 50% 50%;
  }
}
</style>
