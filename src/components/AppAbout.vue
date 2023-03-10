<template>
  <section id="about" class="section section__about">
    <h2 class="secondary__title section__counter">{{ data.title }}</h2>
    <div class="about__content">
      <div class="about__text">
        <p class="description__text" v-html="data.description"></p>
        <ul class="list__grid">
          <li
            class="list__grid-item"
            v-for="(tech, index) in data?.technologies?.data"
            :key="index"
          >{{ tech.attributes.name }}</li>
        </ul>
      </div>

      <div class="about__image">
        <figure>
          <img
            v-if="data?.image?.data"
            :src="$baseUrl+data.image.data.attributes.formats.thumbnail.url"
            :alt="data.image.data.attributes.alternativeText"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppAbout',
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
      const response = await fetch(`${this.$baseUrl}/api/about?populate=*`, {
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
  &.section__about {
    .about__content {
      display: flex;
      justify-content: space-between;
      align-items: start;

      .about__text {
        width: 60%;

        .description__text {
          margin-top: 0;
          max-width: unset;
        }
      }

      .about__image {
        width: 35%;
        position: relative;

        img {
          border-radius: 3px;
          width: 100%;
          height: auto;
        }

        &::after,
        &::before {
          content: '';
          position: absolute;
          right: -10px;
          bottom: -10px;
          z-index: -1;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid var(--number-color);
          border-radius: 3px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section {
    &.section__about {
      .about__content {
        display: block;

        .about__text,
        .about__image {
          width: initial;
        }
        .about__image {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
