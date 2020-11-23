<template>
  <section
    class="w-full flex flex-col h-full items-end justify-end page-section bg-gray-900"
    style="min-height: 100vh"
  >
    <section
      class="flex flex-col flex-end items-center justify-end w-full h-full p-3"
    >
      <figure
        class="flex items-center w-full h-full z-0 flex-1 top-0 justify-center absolute"
      >
        <img
          class="w-full lg:w-1/2 object-fill object-bottom opacity-25"
          src="/images/vectorPassport.png"
          alt="ebong okposong vector passport"
        />
      </figure>
      <section class="text-center z-10 p-3" style="margin-bottom: 2%">
        <h1
          class="font-head text-4xl font-bold leading-tight capitalize text-white"
        >
          Ebong, Okposong
        </h1>
        <p class="text-blue-100 font-normal">Web Developer (Front-end)</p>

        <ul
          class="space-x-3 flex justify-evenly w-full bg-gray-900 shadow-outline rounded mt-3 text-white"
        >
          <li>
            <a
              class="hover:bg-blue-600 p-3 block text-sm"
              target="_blank"
              href="https://facebook/oebong"
              ><span class="iconfont icon-facebook"></span>Facebook</a
            >
          </li>

          <li>
            <a
              href="https://www.github.com/lil-armstrong/"
              class="hover:bg-blue-600 p-3 block text-sm"
              target="_blank"
              ><span class="iconfont icon-github"></span> Github</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lil-armstrong/"
              class="hover:bg-blue-600 p-3 block text-sm"
              target="_blank"
              ><span class="iconfont icon-linkedin"></span> LinkedIn</a
            >
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'SplashScreen',
}
</script>