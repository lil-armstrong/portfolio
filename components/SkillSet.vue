<template>
  <section class="page-section bg-yellow-200 w-full">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-orange-600">
        Skills
      </h1>
      <p class="text-base font-light">& Proficiency</p>
    </header>

    <section class="flex flex-wrap">
      <section class="p-3 lg:w-6/12 w-full">
        <section
          v-for="skillset of Object.keys(skillsets)"
          :key="skillset"
          class="my-6"
        >
          <header class="mb-6">
            <h2 class="capitalize text-orange-600 font-normal text-lg">
              {{ skillset }}
            </h2>
          </header>
          <section class="flex flex-wrap flex-start">
            <div
              v-for="skill of skillsets[skillset]"
              :key="skill.name"
              class="py-2 px-3 m-1 rounded bg-orange-200 bg-opacity-50 border border-solid border-yellow-500 cursor-pointer"
            >
              <p class="capitalize text-xs font-normal leading-none">
                {{ skill.name }}
              </p>
            </div>
          </section>
        </section>
      </section>
      <section
        class="p-3 lg:w-6/12 w-full rounded shadow-sm"
        style="min-height: 300px"
      >
        <div
          class="bg-yellow-300 flex flex-col my-auto items-center h-full justify-center"
        >
          <p class="text-yellow-500">Works will display here</p>
          <div v-swiper:works="swiperOption">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide portfolio-slide"
                v-for="work in works"
                :key="work.name"
              >
                <img :src="work.image" :alt="work.description" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="flex justify-end">
        <button
          class="relative bottom-0 mb-12 hover:shadow-outline active:shadow-outline hover:bg-blue-700 text-white bg-blue-600 px-3 py-3 rounded-md"
        >
          Education and achievements &rarr;
        </button>
      </section> -->
    </section>
  </section>
</template>

<script>
import skillsets from '~/dataStore/skils'
export default {
  name: 'SkillSetPage',
  data() {
    return {
      skillsets: JSON.parse(skillsets),
      swiperOption: {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          draggable: true,
        },
      },
    }
  },
  computed: {
    activeWorks() {},
  },
}
</script>