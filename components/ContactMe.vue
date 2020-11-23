<template>
  <section class="page-section bg-white">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-blue-600">
        Contact
      </h1>
      <p class="text-base font-light">& let's talk</p>
    </header>

    <section class="flex flex-wrap">
      <section class="p-3 w-auto lg:w-3/12">
        <ul class="socials">
          <li class="socials-item">Github</li>
          <li class="socials-item">Facebook</li>
          <li class="socials-item">Twitter</li>
          <li class="socials-item">Linked In</li>
        </ul>
      </section>
      <section class="flex-auto lg:w-9/12">
        <form action="" class="flex flex-col space-y-3 bg-gray-100 p-3">
          <div class="flex flex-wrap">
            <label class="block lg:w-6/12 p-3">
              <span class="text-gray-500 text-sm font-light">Name</span>
              <input
                class="form-input mt-1 block w-full text-lg"
                placeholder="Jane Doe"
              />
            </label>
            <label class="block lg:w-6/12 p-3">
              <span class="text-gray-500 text-sm font-light"
                >Email address</span
              >
              <input
                type="email"
                class="form-input mt-1 block w-full text-lg"
                placeholder="Jane Doe"
              />
            </label>
          </div>
          <label class="block p-3">
            <span class="text-gray-500 text-sm font-light">Say Hello</span>
            <textarea
              class="form-textarea mt-1 block w-full text-lg"
              rows="10"
              placeholder="Say something"
            ></textarea>
          </label>
          <section class="pl-3">
            <button
              class="relative bottom-0 mb-12 hover:shadow-outline active:shadow-outline hover:bg-blue-700 text-white bg-blue-600 px-6 py-3 rounded-md flex-grow-0"
              target="_blanks"
            >
              Complete
            </button>
          </section>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
}
</script>

<style lang="scss">
.socials {
  padding: 8px;
  padding-left: 50px;

  .socials-item {
    padding: 12px;
    padding-left: 30px;
    position: relative;
    // width: 50%;
    border-radius: 8px;
    box-sizing: border-box;
    display: block;
    margin-bottom: 16px;
    // background: #fff;

    &:before {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      left: 0;
      top: 0;
      margin-left: -40px;
      background-color: white;
      border: 4px solid orange;
      border-radius: 8px;
      z-index: 10;

      /* graphics */

      width: 50px;
      height: 50px;
      left: 0px;

      /* white */
      /* tailwindui/blue/600 */
      border: 1px solid #1c64f2;
      box-sizing: border-box;
      /* shadow-lg */
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1),
        0px 4px 6px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }
}
</style>