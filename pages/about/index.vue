<template>
  <div>
    <main class="mb-[137px]">
      <hero-banner
        heading="Our vision at ToNote is to make trust easy in the digital world."
        header-class="lg:w-[768px]"
        body-class="lg:w-[743px] lg:pr-2"
        sub-heading="Our solutions are pioneering the BIG SHIFT from the traditional to digital trust management. With our first product, businesses and individuals can securely sign and notarise documents or get affidavits, 100% online and in real-time.
Our market place feature connects customers with nationally certified notaries public, who can certify essential documents.
We secure all documents and personal information using encryption software that converts the information into code that only the customer can read. "
        :banner-alert="false"
        hero-left-class="lg:translate-y-[20px] 2xl:ml-[0px]"
      >
      </hero-banner>

      <section class="wrapper">
        <!-- Image -->
        <div class="about_image mt-[46px] lg:mt-[54px]">
          <img
            src="~/assets/images/about.jpeg"
            class="w-full h-full max-w-none"
            alt=""
          />
        </div>

        <!-- Team -->
        <div class="teams mt-[44px] lg:mt-[77px] text-center lg:text-left">
          <text-card
            header="Our Team"
            :main-style="{
              'font-size': '18px',
              margin: '18.49px 0',
              'line-height': '193.5%',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '98%',
            }"
          >
            <p class="textcard_body text-[11.6603px] lg:text-[18px]">
              The passionate bunch obsessed with making notarising documents
              simpler.
            </p>
          </text-card>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-0"
          >
            <profile-card
              v-for="(res, index) in teams"
              :key="index"
              :name="res.name"
              :pref-name="res.prefname"
              :role="res.role"
              :image="res.image"
              :linkedinurl="res.linkedin"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      teams: [
        {
          name: 'Fikayo Durosinmi-Etti',
          prefname: 'Fikayo',
          role: 'CEO and Co-Founder',
          image: 'Fikayo.jpeg',
          linkedin:
            'https://www.linkedin.com/in/fikayo-durosinmi-etti-7aa232101/',
        },
        {
          name: 'Shafi Akinropo',
          prefname: 'Shafi',
          role: 'Lead Engineer',
          image: 'Shafi.jpeg',
          linkedin: 'https://www.linkedin.com/in/akin-shafi-90b3b4a4/',
        },
        {
          name: 'Daniel Etim Inyang',
          prefname: 'Daniel',
          role: 'Head of Revenue & Growth',
          image: 'Daniel.jpeg',
          linkedin: 'https://www.linkedin.com/in/danielinyang',
        },

        {
          name: 'Laide Misola Enabulele',
          prefname: 'Laide',
          role: 'Lead, Community & Compliance',
          image: 'Laide.jpeg',
          linkedin: 'https://www.linkedin.com/in/laide-misola-e-4a181994/',
        },
      ],
    }
  },
}
</script>

<style></style>
