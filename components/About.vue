<template>
  <section class="w-full h-full flex page-section bg-white">
    <div class="flex w-full flex-wrap">
      <section
        class="lg:w-5/12 md:w-full h-full lg:relative absolute z-0 opacity-25 lg:opacity-100"
      >
        <img
          class="w-full h-full object-contain"
          src="/images/vectorPassport.png"
          alt="ebong okposong vector passport"
        />
      </section>
      <section class="lg:w-7/12 w-full p-3 z-10 mt-6 lg:mt-0">
        <header>
          <h1
            class="font-head lg:text-4xl text-3xl font-bold leading-tight text-blue-600"
          >
            About
          </h1>
          <p class="lg:text-base text-sm font-normal">& Me</p>
        </header>

        <p class="my-6 description">
          I work professionally as a freelancer, with an accrued 4+ years of
          relevant experiences developing web apps. The relevant programming
          tools I use quite often include VSCode, Webstorm, SCSS, Git, Laravel,
          Vue.js, MySQL, PostgreSQL, Apollo, GraphQL, MongoDB, Nuxt.js and of
          course Node.js. I can also work independently as a frontend web
          developer as well as a backend web developer. I have practical skills
          in system administration and maintenance. I am looking for a working
          environment that supports creativity, flexibility and independent
          thinking, to help me develop my problem solving skills and achieve my
          goal of becoming a better product developer and system administrator.
        </p>

        <button class="bg-blue-600 p-3 lg:mt-6 text-white">
          Download Resume
        </button>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // this.pageScroll()
  },
  methods: {
    pageScroll() {
      window.scrollBy(0, 1)
      let scrolldelay = setTimeout(this.pageScroll, 10)
    },
  },
}
</script>
