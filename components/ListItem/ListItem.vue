<template>
  <div class="flex items-start mt-[10px] lg:mt-0 lg:space-y-2">
    <div class="mr-[14px] flex-shrink-0">
      <p v-if="icon" class="mt-2 lg:mt-4">
        <img
          :style="iconStyle"
          :src="require('~/assets/icons/features/' + icon)"
          alt="list icon"
        />
      </p>
      <p
        v-else
        class="list_count flex justify-center items-center rounded-full mt-1.5 lg:mt-[16.5px]"
      >
        {{ count }}
      </p>
    </div>
    <div class="pt-[5px] lg:pt-0">
      <p
        class="text-content-color text-[14px] lg:leading-[231%]"
        v-html="item"
      />
    </div>
  </div>
</template>

<script src="./listItem.js"></script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.list_count {
  width: 20px;
  height: 20px;
  background-color: $primary-color;
  font-weight: normal;
  font-size: 12px;
  line-height: 366.5%;
  text-align: center;
  color: #ffffff;
}
</style>
