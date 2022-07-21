<template>
  <div>
    <main class="mb-[49px]">
      <section class="wrapper">
        <header
          class="space-y-[15px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[31px]"
        >
          <h1
            class="text-header-color text-[34.9808px] lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica"
          >
            Pricing
          </h1>
          <!-- <p
            class="text-center text-content-color text-[11.6603px] lg:text-[18px] leading-[170.5%] lg:leading-[193.5%]"
          >
            Signing up with ToNote makes notarising 55% cheaper and 26x faster
            than traditional means. You get access to a wide range of certified
            notaries public for virtual sessions and access to a wide range of
            documentation management features.
          </p> -->
          <div class="">
            <tab-toggle
              :toggle="toggleActiveTab"
              :active="activeTab"
              tab-a="Monthly"
              tab-b="Annually"
              :main-style="{ padding: '10px' }"
            />
          </div>
        </header>
        <div
          class="flex lg:justify-center space-x-2 lg:space-x-[20px] overflow-x-auto"
        >
          <div
            v-for="(plan, index) in plans"
            :key="index"
            class="flex-shrink-0 w-auto lg:w-[308px] flex flex-col items-center"
          >
            <div
              class="rounded-lg px-[27px] pt-[26px] pb-[17px] shadow-plan lg:shadow-none bg-white lg:hover:shadow-plan"
            >
              <div class="plan_image w-[225px] lg:w-auto">
                <img
                  :src="require('~/assets/images/' + plan.image)"
                  class="max-w-none w-full h-full"
                  alt="plan image"
                />
              </div>
              <div class="mt-[28.48px]">
                <text-card
                  :header="plan.name"
                  :icon="plan.icon"
                  :icon-style="{
                    'margin-bottom': '7px',
                  }"
                  :header-style="{
                    'font-size': '16px',
                  }"
                  :main-style="{
                    'font-size': '16px',
                    margin: '15px 0 15px',
                    'line-height': '170.5%',
                  }"
                  footer-class=""
                >
                  <p class="text-header w-[254px]">
                    {{ plan.content }}
                  </p>
                  <template #footer>
                    <div class="mt-[34px]">
                      <h2
                        class="text-header leading-[121.5%] tracking-[-0.015] text-[40.99px] mb-[6px]"
                      >
                        {{ plan.cost[activeTab] }}
                      </h2>
                      <p class="text-[14px] text-header">
                        <span>Per Notary Session</span> -
                        <strong>{{ plan.prices.session }}</strong>
                      </p>
                      <p class="text-[14px] text-header">
                        <span>Per Affidavit</span> -
                        <strong>{{ plan.prices.affidavit }}</strong>
                      </p>
                      <Gap gap="10px" />
                      <nuxt-link v-if="plan.to" :to="plan.to">
                        <t-button size="md">
                          <span
                            class="font-normal leading-[162.5%] text-[14px]"
                          >
                            {{ plan.btnText }}
                          </span>
                        </t-button>
                      </nuxt-link>
                      <t-button v-else size="md" @click="signUp()">
                        <span class="font-normal leading-[162.5%] text-[14px]">
                          {{ plan.btnText }}
                        </span>
                      </t-button>
                    </div>
                  </template>
                </text-card>
              </div>
            </div>
            <!-- Options -->
            <div class="mt-[30px] translate-x-1 w-[254px]">
              <div v-if="more === plan.name">
                <list-item
                  v-for="(list, i) in plan.options"
                  :key="i"
                  icon="mark.svg"
                  :item="list"
                  :icon-style="{
                    width: '13.9px',
                    height: '13.55px',
                  }"
                />
              </div>
              <div v-else>
                <list-item
                  v-for="(list, i) in plan.options.slice(0, 6)"
                  :key="i"
                  icon="mark.svg"
                  :item="list"
                  :icon-style="{
                    width: '13.9px',
                    height: '13.55px',
                  }"
                />
              </div>
              <div class="mt-[19px] ml-7">
                <span
                  v-if="more === plan.name"
                  class="text-[#16110D] text-[14px] leading-[170.5%] underline italic cursor-pointer"
                  @click="more = ''"
                  >See Less</span
                >
                <span
                  v-else
                  class="text-[#16110D] text-[14px] leading-[170.5%] underline italic cursor-pointer"
                  @click="more = plan.name"
                  >See More</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <contact-us />
  </div>
</template>

<script>
import { plans } from './data.js'
import mainMixin from '@/mixins/index'
export default {
  name: 'PricesPage',
  mixins: [mainMixin],
  data() {
    return {
      activeTab: 'Monthly',
      plans,
      more: '',
    }
  },
  methods: {
    toggleActiveTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>
