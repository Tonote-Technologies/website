<template>
  <section
    class="hero flex flex-col items-center lg:items-start lg:flex-row lg:justify-center mt-10 px-4 lg:px-0"
  >
    <div
      class="hero_left flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 lg:translate-y-[80px] max-w-[582px]"
      :class="heroLeftClass"
    >
      <div v-if="bannerAlert">
        <banner-alert />
      </div>
      <h2
        class="heroTitle leading-[98%] tracking-[-0.015em] text-[#03060B] text-[34.9808px] lg:text-[52.3502px] font-bold mt-[14px] mb-[23px] w-full text-center lg:text-left lg:w-[406px] max-w-[582px]"
        :class="headerClass"
      >
        {{ heading }}
      </h2>
      <p
        class="heroBody w-full md:w-[323px] lg:w-[499px] 2xl:w-[582px] px-5 lg:px-0 lg:pr-14 text-[11.6603px] lg:text-[18px] text-[#626262] mb-[28px] leading-[170.5%] lg:leading-[193.5%] max-w-[582px]"
        :class="bodyClass"
      >
        {{ subHeading }}
      </p>
      <div
        class="btn_fadein flex space-y-1.5 lg:space-x-1.5 lg:space-y-0 flex-col lg:flex-row"
      >
        <slot name="bannerbtn" />
      </div>
    </div>
    <div
      class="hero_right lg:ml-[0px] mt-[29px] lg:mt-0 w-full md:w-[350px] lg:h-[620.25px] lg:w-[800px] xl:w-[827px] 2xl:w-[827px] overflow-hidden"
    >
      <img
        :src="require('~/assets/gif/' + illustration)"
        alt="signature anime"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>

<script src="./hero.js"></script>

<style>
.hero_left > h2 {
  font-family: 'NeueHelvetica';
}
</style>
