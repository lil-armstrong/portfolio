<template>
  <section class="w-full h-full flex page-section bg-white">
    <div class="flex w-full flex-wrap">
      <section
        class="lg:w-5/12 md:w-full h-full lg:relative absolute z-0 opacity-0 lg:opacity-100 transition-all duration-75"
        >
        <img
        class="w-full h-full object-contain"
        src="/images/vectorPassport.png"
        alt="ebong okposong vector passport"
        />
      </section>
      <section class="lg:w-7/12 w-full p-4 z-10 my-6 lg:mt-0">
        <header>
          <h1
            class="font-head lg:text-4xl text-3xl font-bold leading-tight text-blue-600"
            >
            About
          </h1>
          <p class="lg:text-base text-sm font-normal">
            & Me
          </p>
        </header>

        <p class="my-6 block text-gray-900">
          Pragmatic web developer with an eye for good layout and design. Passionate about using disruptive technologies to solve real world problems.
        </p>
        <p>
          Looking for a small team that solves real world challenges using disruptive technologies. My strengths are mostly in frontend using Vuejs as a library and Nuxtjs as a framework, but I can also work independently as a backend Nodejs/Express engineer using MongoDB as a database, and Apollo/GraphQL as API development tool.
        </p>
        <a
          href="https://docs.google.com/document/d/12Xhyh0ZbZ20jK7gw-n4_93zRBKn2SXds833isPWdFtA/edit"
          class="relative my-3 hover:shadow-outline active:shadow-outline hover:bg-blue-700 text-white bg-blue-600 px-6 py-3 rounded-md"
          target="_blanks"
          >Download Resume</a
        >
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