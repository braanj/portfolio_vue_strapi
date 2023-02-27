<template>
  <section id="intro" class="section section__intro">
    <span class="small__text">{{ greating }}</span>
    <h1 class="main__title">{{ title }}</h1>
    <h2 class="main__title subtitle">{{ subtitle }}</h2>
    <p class="description__text" v-html='description'></p>
    <button class="button">{{ cta }}</button>
  </section>
</template>

<script>
export default {
  name: 'AppIntro',

  data() {
    return {
      greating: 'Hi, my name is',
      title: 'John.',
      subtitle: ' I build things for the Web.',
      description: `I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
      Currently, I'm focused on building accessible, humain-centered products at <a href="#">Yan Games Studio</a>.`,
      cta: 'Check out my course!',
    };
  },
};
</script>
