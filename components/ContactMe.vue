<template>
  <section class="page-section bg-gray-200">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-blue-600">
        Contact
      </h1>
      <p class="text-base font-light">& let's talk</p>
    </header>

    <section class="p-3">
      <ul class="socials">
        <li class="socials-item">Github</li>
        <li class="socials-item">Facebook</li>
        <li class="socials-item">Twitter</li>
        <li class="socials-item">Linked In</li>
      </ul>
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
    background-color: white;
    // width: 50%;
    border-radius: 8px;
    box-sizing: border-box;
    display: block;
    margin-bottom: 16px;
    background: #fff;

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
      background: #ffffff;
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