<template>
  <section class="page-section bg-yellow-200 w-full">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-orange-600">
        Skills
      </h1>
      <p class="text-base font-light">& Proficiency</p>
    </header>

    <section class="p-3">
      <section
        v-for="skillset of Object.keys(skillsets)"
        :key="skillset"
        class="my-6"
      >
        <header class="mb-6">
          <h2 class="capitalize text-orange-400 font-head font-normal text-lg">
            {{ skillset }}
          </h2>
        </header>
        <section class="flex flex-wrap flex-start">
          <div
            v-for="skill of skillsets[skillset]"
            :key="skill.name"
            class="p-2 m-1 rounded bg-white bg-opacity-75"
          >
            <p class="capitalize text-sm font-normal">{{ skill.name }}</p>
          </div>
        </section>
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
    }
  },
}
</script>