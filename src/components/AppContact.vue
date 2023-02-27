<template>
  <section id="contact" class="section section__contact text-center">
    <span class="small__text section__counter">{{ subtitle }}</span>
    <h2 class="secondary__title">{{ title }}</h2>

    <p class="description__text" v-html="description"></p>

    <div class="button__container">
      <button class="button">{{ cta }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppContact',

  data() {
    return {
      title: 'Get In Touch',
      subtitle: 'What\'s Next?',
      description: 'Although I\'m not Currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
      cta: 'Say Hello',
    };
  },
};
</script>

<style lang="scss">
.section {

  &.section__contact {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .secondary__title {
      display: initial;
      font-size: var(--h1-font-size);
      margin-bottom: 0;

      &::after {
        display: none;
      }
    }
  }
}
</style>
