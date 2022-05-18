<template>
  <div>
    <main class="mb-[84px] lg:mb-[66px]">
      <hero-banner
        heading="Our Solutions"
        sub-heading="Our goal is to create a world where every document shared is secure and can be trusted. The first step towards this is to help people and teams sign, notarise and collaborate on documents virtually"
        illustration="unlock.gif"
      >
        <template #bannerbtn>
          <t-button
            size="md"
            width="186px"
            padding="0 20px 0 17px"
            @click="signIn()"
          >
            Notarise a Document
          </t-button>
          <t-button theme="outline" size="md" width="186px" @click="signIn()">
            Get an Affidavit
          </t-button>
        </template>
      </hero-banner>

      <section class="wrapper">
        <!-- Tonote Basic -->
        <div
          id="individual"
          class="flex flex-col lg:flex-row items-center lg:justify-between mt-[31px] lg:items-start"
        >
          <div class="w-full lg:w-[484px] 2xl:w-[582px]">
            <text-card
              header="Get certified true copies of essential documents"
              subheader="ToNote Basic"
              :sub-style="{
                'font-size': '16px',
                'letter-spacing': '0',
              }"
              :main-style="{
                'font-size': '16px',
                margin: '24px 0 30px',
                'line-height': '170.5%',
              }"
              :header-style="{
                'font-size': '23.5135px',
                'letter-spacing': '-0.015em',
                'line-height': '121%',
                width: '100%',
                'max-width': '296px',
              }"
            >
              <p class="textcard_body">
                If you have ever had to notarise a document or get an affidavit
                for personal or business use then our basic plan is for you. At
                no recurring cost, you can have access to all nationally
                certified notaries public on our platform.
              </p>
              <template #footer>
                <div class="mb-[11px]">
                  <list-item
                    v-for="(list, index) in basicFeatures"
                    :key="index"
                    :item="list"
                    icon="mark.svg"
                    :icon-style="{
                      width: '13.9px',
                      'max-width': 'unset',
                    }"
                  />
                </div>
                <t-button
                  size="md"
                  width="186px"
                  padding="0 20px 0 17px"
                  @click="signUp()"
                >
                  Notarise a Document
                </t-button>
              </template>
            </text-card>
          </div>
          <div class="w-auto lg:w-[693.22px] relative lg:mt-4">
            <div
              class="w-auto mt-[40px] lg:mt-0 h-[350px] lg:w-full lg:h-[498.85px] passport-bg"
            >
              <img
                src="~/assets/images/passport-illustration.png"
                class="w-[325px] h-[240px] lg:w-[460px] lg:h-[319.08px] object-contain"
                alt="signed document"
              />
            </div>
            <div
              class="relative lg:absolute mt-[-50px] lg:mt-0 lg:bottom-[-130px] lg:left-[130px]"
            >
              <signup-card />
            </div>
          </div>
        </div>

        <!-- Benefits -->

        <div class="mt-[60px] lg:mt-[117px]">
          <h3 class="textcard_subheader lg:!mb-0">BENEFITS</h3>
          <div
            class="flex flex-col lg:flex-row mt-[16px] lg:items-start lg:justify-between"
          >
            <div
              class="w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]"
            >
              <list-item
                v-for="(list, index) in benefitsGroupA"
                :key="index"
                :item="list"
                icon="mark.svg"
                :icon-style="{
                  width: '13.9px',
                  'max-width': 'unset',
                }"
              />
            </div>
            <div class="w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]">
              <list-item
                v-for="(list, index) in benefitsGroupB"
                :key="index"
                :item="list"
                icon="mark.svg"
                :icon-style="{
                  width: '13.9px',
                  'max-width': 'unset',
                }"
              />
            </div>
          </div>
        </div>

        <!-- Tonote for Teams -->
        <div
          id="teams"
          class="flex flex-col-reverse lg:flex-row items-start lg:justify-between mt-[66px] lg:mt-[95px]"
        >
          <div
            class="w-auto mt-[53pt] lg:mt-0 lg:w-[466px] relative lg:mt-[-21px]"
          >
            <img
              src="~/assets/images/teams.png"
              class="w-full h-full max-w-none"
              alt="signed document"
            />
            <div
              class="relative lg:absolute mt-[35px] lg:mt-0 lg:top-[326px] lg:left-0"
            >
              <signup-card />
            </div>
          </div>
          <div class="w-full lg:w-[433px] xl:w-[500px] 2xl:w-[582px]">
            <text-card
              header="We understand team dynamics and how roles and responsibilities are shared."
              subheader="ToNote for Teams"
              :sub-style="{
                'font-size': '16px',
                'letter-spacing': '0',
              }"
              :main-style="{
                'font-size': '16px',
                margin: '16px 0 13px',
                'line-height': '170.5%',
              }"
              :header-style="{
                'font-size': '23.5135px',
                'letter-spacing': '-0.015em',
                'line-height': '121%',
              }"
            >
              <p class="textcard_body">
                Businesses sign and notarise documents every day and need to
                collaboratively manage agreements to close transactions.
                <br /><br />
                We understand team dynamics and how roles and responsibilities
                are shared. <br /><br />
                This is why you can set permissionsand restrictions, selecting
                which team members are able to prepare, review, sign, notarise
                and share essential documents.
              </p>
              <template #footer>
                <t-button size="md" width="186px" @click="signUp()">
                  Get PRO Now
                </t-button>
              </template>
            </text-card>
          </div>
        </div>

        <!-- Benefits -->
        <div class="mt-[60px] lg:mt-[100px]">
          <h3 class="textcard_subheader lg:!mb-0 mt-[42px] lg:mt-[51px]">
            BENEFITS
          </h3>
          <p class="textcard_preamble">All ToNote Basic features and:</p>
          <div
            class="flex flex-col lg:flex-row lg:items-start lg:justify-between"
          >
            <div
              class="w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]"
            >
              <list-item
                v-for="(list, index) in benefitsGroupC"
                :key="index"
                :item="list"
                icon="mark.svg"
                :icon-style="{
                  width: '13.9px',
                  'max-width': 'unset',
                }"
              />
            </div>
            <div class="w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]">
              <list-item
                v-for="(list, index) in benefitsGroupD"
                :key="index"
                :item="list"
                icon="mark.svg"
                :icon-style="{
                  width: '13.9px',
                  'max-width': 'unset',
                }"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Tonote Business -->
      <div
        id="business"
        class="mt-[50px] mb-[36px] lg:m-0 lg:mt-[115px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center px-4"
      >
        <div
          class="mb-[36px] lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[526px]"
        >
          <text-card
            header="Closing transactions has never been this easy."
            subheader="ToNote for Businesses"
            :main-style="{
              'font-size': '16px',
              margin: '26px 0 26px',
              'line-height': '170.5%',
            }"
            :sub-style="{
              'font-size': '16px',
              'letter-spacing': '0',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '121%',
              width: 'auto',
              'max-width': '377px',
            }"
          >
            <p class="textcard_body">
              Are you a business that frequently signs and notarises documents
              or has customers who need to notarise documents from time to time?
              We have automated the notary process so that your customers will
              now be able to certify essential documents and swear affidavits in
              record time. Closing transactions has never been this easy.
            </p>
            <template #footer>
              <nuxt-link to="/contact-sales">
                <t-button size="md" width="186px"> Talk to Sales </t-button>
              </nuxt-link>
            </template>
          </text-card>
          <!-- Benefits -->
          <div class="hidden lg:block lg:mt-[40px]">
            <h3 class="textcard_subheader lg:!mb-0">BENEFITS</h3>
            <p class="textcard_preamble">All ToNote for Teams features and:</p>
            <div
              class="w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px] max-w-[466px]"
            >
              <list-item
                v-for="(list, index) in benefitsGroupE"
                :key="index"
                :item="list"
                icon="mark.svg"
                :icon-style="{
                  width: '13.9px',
                  'max-width': 'unset',
                }"
              />
            </div>
          </div>
        </div>
        <div class="w-screen lg:w-[54%] 2xl:w-[870px] relative mt-[-54px]">
          <img
            src="~/assets/images/business-form.png"
            class="w-full h-full max-w-none mt-[20pt] lg:mt-0"
            alt="backgroung image "
          />
          <div
            class="hidden lg:block absolute lg:top-[405px] 2xl:top-[450px] lg:right-[75px] 2xl:right-[85px]"
          >
            <signup-card />
          </div>
        </div>
      </div>
      <div class="block lg:hidden wrapper">
        <!-- Benefits -->
        <div class="">
          <h3 class="textcard_subheader lg:!mb-0">BENEFITS</h3>
          <p class="textcard_preamble">All ToNote for Teams features and:</p>
          <div class="w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px]">
            <list-item
              v-for="(list, index) in benefitsGroupE"
              :key="index"
              :item="list"
              icon="mark.svg"
              :icon-style="{
                width: '13.9px',
                'max-width': 'unset',
              }"
            />
          </div>
        </div>
        <div class="mt-[20px]">
          <signup-card />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {
  basicFeatures,
  benefitsGroupA,
  benefitsGroupB,
  benefitsGroupC,
  benefitsGroupD,
  benefitsGroupE
} from './data.js'
import mainMixin from '@/mixins/index'

export default {
  name: 'SolutionsPage',
  mixins: [mainMixin],
  data () {
    return {
      basicFeatures,
      benefitsGroupA,
      benefitsGroupB,
      benefitsGroupC,
      benefitsGroupD,
      benefitsGroupE
    }
  }
}
</script>

<style lang="scss">
.passport-bg {
  background: url(assets/images/passport-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: drop-shadow(0 0 10px #ccc);
  & > img {
    transform: translate(0, 0);
  }
  @media (min-width: 1024px) {
    & > img {
      transform: translate(140px, 70px);
    }
  }
}
</style>
