<template>
  <main class="mb-[57px] lg:mb-[110.01px]">
    <hero-banner
      heading="Sign and Notarise important documents online now"
      sub-heading="Do you need a certified true copy of a document, a sworn affidavit or a credible witness for an agreement?"
      header-class="lg:w-[506px] lg:text-[45px]"
      illustration="signature.gif"
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
          Get an Affidavi
        </t-button>
      </template>
    </hero-banner>

    <section class="wrapper anime-section opacity-0">
      <div class="flex flex-col items-center mt-[89.75px]">
        <div class="flex flex-col items-center text-center">
          <h1 class="u-main-text w-auto lg:w-[768px] px-[16px]">
            Notarising documents online is
            <span class="text-[#FF9901]">26X</span> faster and
            <span class="text-[#458FFF]">55%</span> cheaper than traditional
            means of notarisation.
          </h1>
          <p
            class="u-text-summary mt-[20px] mb-[8px] lg:mb-[18px] w-[342px] lg:w-[457px]"
          >
            Contact us to find out more about our notary solutions for your
            personal or business needs.
          </p>
          <nuxt-link to="/contact-sales" class="self-auto">
            <t-button
              theme="primary"
              size="md"
              icon="right-arrow-white.svg"
              :icon-style="{
                'margin-left': '34.9px',
                width: '7px',
              }"
            >
              Contact Sales
            </t-button>
          </nuxt-link>
        </div>
        <div class="w-auto lg:w-[1185px]">
          <img :src="require('~/assets/images/header_img.png')" alt="" />
        </div>
      </div>
    </section>

    <section
      class="anime-section opacity-0basic-section m-0 px-[16px] lg:px-0 lg:m-0 lg:mt-[47px] flex flex-col lg:flex-row items-center lg:items-center lg:justify-center mt-5"
    >
      <div
        class="m-0 lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[499px]"
      >
        <TextCard
          header="ToNote Basic"
          :header-style="{ 'font-size': '23.5135px' }"
          :main-style="{
            'font-size': '16px',
            margin: '31.49px 0 26px',
          }"
          footer-class="mb-14"
        >
          <p class="textcard_body">
            If you’ve ever had to notarise a document or get an affidavit for
            personal or business use then our basic plan is for you. At no
            recurring cost, you can have access to all nationally certified
            notaries public on our platform.
          </p>
          <template #footer>
            <div class="flex">
              <t-button
                size="md"
                icon="right-arrow-white.svg"
                :icon-style="{
                  'margin-left': '40px',
                  width: '7px',
                }"
                @click="signUp()"
              >
                Start Free
              </t-button>

              <nuxt-link to="/solutions">
                <t-button
                  theme="link"
                  icon="right-arrow-blue.svg"
                  size="md"
                  padding="0 0 0 17px"
                  text-align="left"
                  :icon-style="{
                    'margin-left': '8.9px',
                  }"
                >
                  <span class="text-[14px]">Learn More</span>
                </t-button>
              </nuxt-link>
            </div>
          </template>
        </TextCard>
        <ListItem
          icon="clock.svg"
          :icon-style="{ width: '36.8px', height: '34.5px' }"
          item="Our notaries public are available for virtual sessions between 9am and 6pm daily."
        />
      </div>
      <div class="w-auto lg:w-[850px] 2xl:w-[905px] mt-[20px] lg:mt-0">
        <img
          :src="require('~/assets/images/tonoteBasic.png')"
          class="max-w-none w-full"
          alt="tonote basic mobile view"
        />
      </div>
    </section>

    <!-- TEAMS AND BUSINESSES -->

    <section class="wrapper notaries-section">
      <div
        class="flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[94px]"
      >
        <div class="w-auto lg:w-[563.18px] mt-[38px] lg:mt-0">
          <img
            src="~/assets/images/tonoteTeams.png"
            class="w-full h-full max-w-none"
            alt="notaries image"
          />
        </div>
        <div
          class="w-full mt-[53px] lg:mt-0 max-w-[464px] 2xl:translate-x-[-5rem]"
        >
          <TextCard
            header="ToNote for Teams"
            :header-style="{
              'font-size': '23.5135px',
              'line-height': '98%',
              'letter-spacing': '-0.015em',
            }"
            :main-style="{
              'font-size': '16px',
              'margin-bottom': '26px',
              'line-height': '194.5%',
            }"
          >
            <div>
              <p
                class="mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"
              >
                Set permissions and restrictions <br />
                for teams
              </p>
              <p class="textcard_body">
                Businesses sign and notarise documents every day. We understand
                team dynamics and how roles and responsibilities are shared.
                This is why you can set permissions and restrictions, selecting
                which team members are able to prepare, review, sign, notarise
                and share essential documentation.
              </p>
            </div>
            <template #footer>
              <div class="flex">
                <t-button
                  theme="link"
                  icon="right-arrow-blue.svg"
                  :icon-style="{
                    'margin-left': '38.9px',
                  }"
                  padding="0"
                  width="138.9px"
                  text-align="left"
                  @click="signUp()"
                >
                  <span class="text-[14px]">Notarise Now</span>
                </t-button>
              </div>
            </template>
          </TextCard>
        </div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center lg:justify-between mt-[75px] lg:mt-[144px]"
      >
        <div class="w-full lg:w-[443px] 2xl:w-[622px] max-w-[443px]">
          <TextCard
            header="ToNote for Business"
            :header-style="{
              'font-size': '23.5135px',
              'line-height': '98%',
              'letter-spacing': '-0.015em',
              'margin-bottom': '5px',
            }"
            :main-style="{
              'font-size': '16px',
              'margin-bottom': '26px',
              'line-height': '194.5%',
            }"
          >
            <div>
              <p
                class="mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"
              >
                We have automated the notary <br />
                process
              </p>
              <p class="textcard_body">
                Are you a business that has customers who need to notarise
                documents from time to time? We have automated the notary
                process so that your customers will now be able to validate
                essential documents and swear affidavits in record time. Closing
                transactions have never been this easy.
              </p>
            </div>
            <template #footer>
              <div class="flex">
                <t-button
                  theme="link"
                  icon="right-arrow-blue.svg"
                  :icon-style="{
                    'margin-left': '38.9px',
                  }"
                  padding="0"
                  width="138.9px"
                  text-align="left"
                  @click="signUp()"
                >
                  <span class="text-[14px]">Notarise Now</span>
                </t-button>
              </div>
            </template>
          </TextCard>
        </div>
        <div class="w-auto lg:w-[581.79px] mt-[38px] lg:mt-0">
          <img
            src="~/assets/images/tonoteBusiness.png"
            class="w-full h-full max-w-none"
            alt="notaries image"
          />
        </div>
      </div>
    </section>

    <section class="wrapper anime-section notaries-section opacity-0">
      <div
        class="flex flex-col lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[195px]"
      >
        <div class="w-auto lg:w-[544px]">
          <img
            src="~/assets/images/tonoteNotaries.png"
            class="w-full h-full max-w-none"
            alt="notaries image"
          />
        </div>
        <div
          class="w-full mt-[53px] lg:translate-x-[-6rem] lg:mt-0 lg:w-[443px] 2xl:w-[622px] max-w-[443px]"
        >
          <TextCard
            header="ToNote for Notaries"
            :header-style="{
              'font-size': '23.5135px',
              'line-height': '98%',
              'letter-spacing': '-0.015em',
            }"
            :main-style="{
              'font-size': '16px',
              margin: '31px 0 26px',
              'line-height': '194.5%',
            }"
          >
            <p class="textcard_body">
              We are building a community that recognises the notary public
              service and encourages financial liberation through this service.
              This means we appreciate the work that you do and the more you
              notarise on our platform, the more you earn.
            </p>
            <template #footer>
              <div class="flex">
                <t-button
                  size="md"
                  icon="right-arrow-white.svg"
                  width="130px"
                  :icon-style="{
                    'margin-left': '32.9px',
                    width: '7px',
                  }"
                  @click="signUp()"
                >
                  Join Us
                </t-button>

                <nuxt-link to="/notaries-public">
                  <t-button
                    theme="link"
                    icon="right-arrow-blue.svg"
                    size="md"
                    padding="0 0 0 17px"
                    text-align="left"
                    :icon-style="{
                      'margin-left': '8.9px',
                    }"
                  >
                    <span class="text-[14px]">Learn More</span>
                  </t-button>
                </nuxt-link>
              </div>
            </template>
          </TextCard>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import mainMixin from '@/mixins/index'

export default {
  name: 'IndexPage',
  mixins: [mainMixin],
  data () {
    return {
      activeTab: 'For Teams',
      component: 'for-teams'
    }
  },
  mounted () {
    function reveal () {
      const reveals = document.querySelectorAll('.anime-section')

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('sectionAnime')
        } else {
          reveals[i].classList.remove('sectionAnime')
        }
      }
    }

    window.addEventListener('scroll', reveal)
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.u-main-text,
.textCard-header {
  font-family: 'NeueHelvetica';
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 98%;
  text-align: center;
  letter-spacing: -0.015em;
  color: #03060b;

  span {
    font-family: 'NeueHelvetica';
  }
}
.textCard-header {
  font-size: 23.5135px;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
}

.u-text-summary {
  font-weight: normal;
  font-size: 16px;
  // line-height: 170.5%;
  text-align: center;
  color: $body-text-color;
  // margin-top: 20px;
  // margin-bottom: 18px;
}
.basic-section {
  margin-top: 47px;
}
.teams-group {
  background: #f9f9f9;
  border-radius: 20px;
}
</style>
