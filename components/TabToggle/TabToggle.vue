<template>
  <div
    class="bg-[#F4F4F4] relative rounded-full w-[261px] h-[34px] flex items-center justify-center"
    :style="mainStyle"
  >
    <button
      class="text-[14px] flex justify-center items-center"
      @click="[toggle(tabA)]"
    >
      <span class="">
        {{ tabA }}
      </span>
    </button>
    <button
      class="text-[14px] ml-[68px] flex justify-center items-center"
      @click="[toggle(tabB)]"
    >
      <span class="">
        {{ tabB }}
      </span>
    </button>

    <span
      class="flex justify-center bg-[#003BB3] items-center absolute w-[142px] top-0 bottom-0 rounded-full text-white text-[14px] z-10 active-tab"
      :class="[{ 'left-0': activeTab === tabA, 'right-0': active === tabB }]"
      :style="indicatorStyle"
    >
      <span class="">
        {{ activeTab }}
      </span>
    </span>
  </div>
</template>

<script src="./tabToggle.js"></script>

<style scoped>
  .active-tab{
    transition: all 1s ease-in-out;
  }
</style>
