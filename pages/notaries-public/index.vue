<template>
  <main class="mb-[110.01px]">
    <hero-banner
      heading="ToNote for Notaries"
      sub-heading="We are building a community that recognises the notary public service and encourages
      financial liberation through this service."
      illustration="stamp.gif"
    >
      <template #bannerbtn>
        <t-button size="md" width="186px" @click="signUp()">
          Start Earning
        </t-button>
      </template>
    </hero-banner>
    <section class="wrapper">
      <div
        class="flex flex-col lg:flex-row items-center lg:justify-between mt-[44.75px]"
      >
        <div class="w-full lg:w-[499px] 2xl:w-[582px]">
          <text-card
            header="We have created a free-market place that will give you access to a wide range of customers worldwide"
            subheader="BENEFITS"
            :main-style="{
              'font-size': '18px',
              margin: '15px 0 15px',
              'line-height': '193.5%',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121.5%',
            }"
          >
            <p class="textcard_body">
              <!-- This means we appreciate the work that you do and the more you
              notarise on our platform, the more you earn. To aid your efforts,
              we have created a free-market place that will give you access to a
              wide range of customers worldwide, who are in need of a notary
              public, for business or personal purposes. -->

              We are building a community that recognises the notary public
              service and encourages financial liberation through this service.
              This means we appreciate the work that you do and the more you
              notarise on our platform, the more you earn. <br /><br />

              <h6>Seamlessly create and store electronic signatures, stamps and
              seals</h6> <br>

              You can notarise client's documents from anywhere using a
              combination of our e-signature, digital seal and audio-visual
              conferencing features. Not too tech savvy? Don't worry, our online
              tutorial will teach you everything you need to know about how to
              use our platform in a few short videos.
            </p>
          <div>
            <h6>Benefits</h6>
            <ol type="1" style="padding-left: 30px">
              <li>1. Free and guided onboarding and training</li>
              <li>2. Access to a market place full of customers</li>
              <li>3. Digitise signatures, stamps and seals</li>
              <li>4. Automated Identity verification</li>
              <li>5. Notarise documents virtually & in real time</li>
              <li>6. Increase notary income</li>
              <li>7. Access to audit trail of notarised documents</li>
              <li>8. 24/7 access via all devices</li>
              <li>9. Bank grade security</li>
            </ol>
            <div style="margin-top: 20px">
              <template>
                <t-button size="md" width="186px" @click="signUp()">
                  Get Started
                </t-button>
              </template>
            </div>
          </div>

          </text-card>
        </div>
        <div class="w-auto mt-[63px] lg:mt-0">
          <img
            src="~/assets/images/benefit2.png"
            class="w-full h-full max-w-none"
          />
        </div>
      </div>
      <!--  -->
      <div
        class="flex flex-col lg:flex-row-reverse items-center lg:justify-between mt-[50px] lg:mt-[136px]"
      >
        <div class="w-full lg:w-[622px] 2xl:w-[622px]">
          <text-card
            header="Seamlessly create and store electronic signatures, stamps and seals"
            :main-style="{
              'font-size': '18px',
              margin: '15px 0 15px',
              'line-height': '193.5%',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121.5%',
            }"
          >
            <p class="textcard_body">
              You can notarise client's documents from anywhere using a
              combination of our e-signature, digital seal and audio-visual
              conferencing features. Not too tech savvy? Don't worry, our online
              tutorial will teach you everything you need to know about how to
              use our platform in a few short videos.
            </p>
          </text-card>
        </div>
        <div class="mt-[40px] lg:mt-0 w-auto lg:w-[422px]">
          <img
            src="~/assets/images/seamless.png"
            class="w-full h-full max-w-none"
            alt="stamp"
          />
        </div>
      </div>

      <!--  -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 mt-[57px] lg:mt-[136px]"
      >
        <text-card
          v-for="(feature, index) in features"
          :key="index"
          :header="feature.header"
          :icon="feature.icon"
          :icon-style="{
            'margin-bottom': '7px',
          }"
          :header-style="{
            'font-size': '16px',
          }"
          :main-style="{
            'font-size': '16px',
            margin: '15px 0 15px',
          }"
        >
          <p class="textcard_body">
            {{ feature.content }}
          </p>
        </text-card>
      </div>
      <!--  -->
      <div
        class="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between mt-[57px] lg:mt-[136px]"
      >
        <div class="w-full lg:w-[488px] xl:w-[498px] 2xl:w-[622px]">
          <text-card
            header="Getting Started"
            :main-style="{
              'font-size': '18px',
              margin: '15px 0 15px',
              'line-height': '193.5%',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121.5%',
            }"
          >
            <p
              class="text-[16px] leading-[193.5%] text-content-color mb-[18px]"
            >
              Boost your notary earnings by following these simple steps:
            </p>
            <list-item
              v-for="(list, index) in getstarted"
              :key="index"
              :count="index + 1"
              :item="list"
            />
          </text-card>
        </div>
        <div class="w-auto">
          <img
            src="~/assets/images/getstarted.png"
            class="w-full h-full max-w-none"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { features, getstarted } from './data.js'
import mainMixin from '@/mixins/index'
export default {
  name: 'NotariesPublic',
  mixins: [mainMixin],
  data() {
    return {
      features,
      getstarted,
    }
  },
}
</script>

<style></style>
