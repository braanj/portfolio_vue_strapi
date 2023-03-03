<template>
  <section id="projects" class="section section__projects">
    <h2 class="secondary__title section__counter">{{ title }}</h2>
    <div
      class="project__item"
      v-for="(project, index) in projects?.data"
      :key="index"
      :class="{ right: index % 2 !== 0 }"
    >
      <div class="project__image">
        <figure>
          <img
            :src="$baseUrl+project.attributes?.image.data.attributes.formats.thumbnail.url"
            :alt="project.attributes?.title"
          >
        </figure>
      </div>

      <div class="project__details">
        <span class="project__subtitle">{{ project.attributes?.subtitle }}</span>
        <h3 class="project__title">{{ project.attributes?.title }}</h3>
        <p class="description__text" v-html="project.attributes?.description"></p>
        <ul class="project__targets">
          <li
            class="target__item"
            v-for="(target, index) in project.attributes?.targets"
            :key="index"
          >{{ target.name }}</li>
        </ul>
        <ul class="project__links">
          <li
            class="link__item"
            v-for="(link, index) in project.attributes?.links"
            :key="index"
          >
            <a :href="link.url" class="link">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppProjects',

  data() {
    return {
      title: 'Some things I\'ve built',
      projects: [],
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
      const response = await fetch(`${this.$baseUrl}/api/projects?populate=*`, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.projects = response;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss">
.section__projects {
  .project__item {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;

    &:last-child {
      margin-bottom: 0;
    }
    .project__details {
      width: 40%;
      text-align: right;
      z-index: 10;

      .project__title {
        margin-top: .5rem;
        font-size: var(--h2-font-size);
      }
      .project__subtitle {
        font-size: var(--smaller-font-size);
        color: var(--number-color);
      }

      .description__text {
        max-width: unset;
        background-color: var(--body-color);
        margin-left: -6rem;
        padding: 1.5rem;
        padding-right: 0;
      }

      .project__links,
      .project__targets {
        margin-bottom: 1rem;
        .link__item,
        .target__item {
          display: inline;
          padding-right: .75rem;
          font-size: var(--smaller-font-size);
          &:last-child {
            padding-right: 0;
          }
        }
        .target__item {
          opacity: .6;
        }
      }
    }

    .project__image {
      min-width: 60%;
      img {
        width: 100%;
      }
    }

    &.right {
      .project__image {
        order: 1;
      }

      .project__details {
        text-align: left;
        .description__text {
          margin-left: unset;
          padding: 1.5rem;
          padding-left: 0;
          margin-right: -6rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section__projects {
    .project__item {
      display: initial;
      .project__details,
      .project__image {
        width: unset;
      }

      .project__details {
        margin-top: 1.5rem;
        .description__text {
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
