<template>
  <div>
    <main class="mb-[200px]">
      <div class="wrapper">
        <header
          class="space-y-[15px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[31px]"
        >
          <h1
            class="text-header-color text-[34.9808px] lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica text-center"
          >
            Together at ToNote
          </h1>
          <p
            class="text-center text-content-color text-[11.6603px] lg:text-[18px] leading-[170.5%] lg:leading-[193.5%] lg:w-[798px]"
          >
            We believe that experiences are stronger when shared. Our journey at
            ToNote has just begun, and we are consistently looking for great
            talent to work, play and ‘experience’ with the ToNote team.
          </p>
          <t-button size="md" width="150px"> Join the Team </t-button>
        </header>
        <div class="mb-[40px] lg:mb-[94px] mt-[40px] lg:mt-[71px]">
          <div
            class="grid grid-rows-3 grid-flow-col gap-x-[6.75px] lg:gap-x-[23px] gap-y-[7.39px] lg:gap-y-[21px] h-[135px] lg:h-[420px]"
          >
            <div class="row-span-3">
              <img
                src="~/assets/images/team_image_1.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
            <div class="row-span-2">
              <img
                src="~/assets/images/team_image_2.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
            <div class="row-span-1">
              <img
                src="~/assets/images/team_image_3.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
            <div class="row-span-3 col-span-2">
              <img
                src="~/assets/images/team_image_4.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
            <div class="row-span-1">
              <img
                src="~/assets/images/team_image_5.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
            <div class="row-span-2">
              <img
                src="~/assets/images/team_image_6.png"
                class="w-full h-full object-cover"
                alt="team image"
              />
            </div>
          </div>
        </div>

        <div
          class="space-y-[8px] flex flex-col items-center w-full lg:w-[829px] mx-auto lg:mb-[58px] mb-[39px]"
        >
          <h3 class="text-header-color text-[23.5135px] font-bold">
            Our Values
          </h3>
          <p class="text-content-color text-[14px] lg:text-[18px]">
            Everything that we do is driven by
            <span class="text-[#FF9901]"><strong>FACTS</strong> </span>:
          </p>
        </div>

        <!-- Values -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 text-center lg:text-left"
        >
          <text-card
            v-for="(value, index) in values"
            :key="index"
            :header="value.header"
            :header-style="{
              'font-size': '18px',
            }"
            :main-style="{
              'font-size': '18px',
              margin: '15px 0 15px',
            }"
          >
            <p class="textcard_body">
              {{ value.content }}
            </p>
          </text-card>
        </div>

        <div
          class="grid grid-rows-3 grid-flow-col gap-x-[5.17px] lg:gap-x-[16px] gap-y-[5.5px] lg:gap-y-[17px] h-[225.75px] lg:h-[550px] mt-[49px] lg:mt-[75px]"
        >
          <div class="row-span-3 col-span-3">
            <img
              src="~/assets/images/team_image_9.png"
              class="w-full h-full object-cover"
              alt="team image"
            />
          </div>
          <div class="row-span-2 col-span-2">
            <img
              src="~/assets/images/team_image_7.png"
              class="w-full h-full object-cover"
              alt="team image"
            />
          </div>
          <div class="row-span-1 col-span-2">
            <img
              src="~/assets/images/team_image_8.png"
              class="w-full h-full object-cover"
              alt="team image"
            />
          </div>
        </div>

        <!-- Roles -->
        <div>
          <h3
            class="mx-auto text-header-color font-bold text-[23.5135px] text-center w-auto max-w-[292px] md:max-w-none lg:w-[482px] mb-[34px] lg:mb-[63px] mt-[68px] lg:mt-[100px] font-NeueHelvetica"
          >
            We are currently looking for candidates to fill these roles:
          </h3>
          <div class="mx-auto lg:w-[991px]">
            <div class="mb-[12px] lg:mb-[20px]">
              <Tag>Design</Tag>
            </div>
            <div>
              <Roles job-title="Illustrator" location="Remote, OK" />
              <Roles job-title="UI Designer" location="Lagos, Nigeria" />
            </div>
            <div class="mb-[12px] lg:mb-[20px]">
              <Tag color="#2FA36B" background-color="#E8FFE8">
                Engineering
              </Tag>
            </div>
            <div>
              <Roles job-title="Front End Developer" location="Accra, Ghana" />
              <Roles job-title="Back End Developer" location="Nairobi, Kenya" />
              <Roles job-title="Android Developer" location="Remote, OK" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { values, workBenefits } from './data.js'

export default {
  name: 'CareersPage',
  data () {
    return {
      values,
      workBenefits
    }
  }
}
</script>

<style></style>
