<template>
  <section id="contact" class="section section__contact text-center">
    <span class="small__text section__counter">{{ data.subtitle }}</span>
    <h2 class="secondary__title">{{ data.title }}</h2>
    <p class="description__text" v-html="data.description"></p>
    <div class="button__container">
      <a :href="data.cta.link" class="button">{{ data.cta.text }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppContact',

  data() {
    return {
      data: [],
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
      const response = await fetch(`${this.$baseUrl}/api/contact?populate=*`, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.data = response.data.attributes;
    } catch (error) {
      this.error = error;
    }
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
