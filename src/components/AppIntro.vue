<template>
  <section id="intro" class="section section__intro">
    <span class="small__text">{{ intro.attributes.greating }}</span>
    <h1 class="main__title">{{ intro.attributes.title }}</h1>
    <h2 class="main__title subtitle">{{ intro.attributes.subtitle }}</h2>
    <p class="description__text" v-html='intro.attributes.description'></p>
    <a :href="intro.attributes.link" class="button">{{ intro.attributes.cta }}</a>
  </section>
</template>

<script>
export default {
  name: 'AppIntro',

  data() {
    return {
      intro: {
        attributes: {},
      },
      error: null,
      headers: { 'Content-Type': 'application/json' },
    };
  },

  methods: {
    parseJSON(resp) {
      return (resp.json ? resp.json() : resp);
    },

    checkStatus(resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((_resp) => {
        throw _resp;
      });
    },
  },

  async mounted() {
    try {
      const response = await fetch('https://portfolio-lrgm.onrender.com/api/intro', {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.intro = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
