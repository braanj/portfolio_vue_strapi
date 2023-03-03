<template>
  <section id="other__projects" class="section section__other-projects">
    <h2 class="secondary__title">{{ title }}</h2>
    <span class="small__text">{{ subtitle }}</span>

    <div class="other__projects-grid">
      <transition-group name="slide-fade">
        <div
          class="other__project-item"
          v-for="(project, index) in projects.data"
          :key="index"
        >
          <div class="project__header">
            <div class="project__icon">
              <i class="uil uil-folder"></i>
            </div>
            <ul class="project__links">
              <li
                class="link__item"
                v-for="(link, index) in project.attributes?.links"
                :key="index"
              >
                <a :href="link.url"
                  class="link"
                  v-html="link.icon"
                ></a>
              </li>
            </ul>
          </div>
          <div class="project__body">
            <h3 class="third__title">{{ project.attributes?.title }}</h3>
            <p class="description__text">{{ project.attributes?.subtitle }}</p>
          </div>
          <div class="project__footer">
            <ul class="project__targets">
              <li
                class="target__item"
                v-for="(target, index) in project.attributes?.targets"
                :key="index"
              >{{ target.name }}</li>
            </ul>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="button__container">
      <!-- Todo : Add show more functionnality -->
      <button
        class="button"
        v-if="projects && projects.meta && pageSize < projects.meta.pagination.total"
        @click="getData(pageSize += 3)"
      >Show More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppOtherProjects',
  data() {
    return {
      title: 'Other Noteworthy Projects',
      subtitle: 'View the archive',
      pageSize: 3,
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

    async getData(size) {
      try {
        const response = await fetch(`${this.$baseUrl}/api/other-projects?pagination[pageSize]=${size}&populate=*`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);
        this.projects = response;
      } catch (error) {
        this.error = error;
      }
    },
  },

  mounted() {
    this.getData(this.pageSize);
  },
};
</script>

<style lang="scss">
.section__other-projects {
  .small__text {
    color: var(--number-color);
  }

  .small__text,
  .secondary__title {
    text-align: center;
    display: block;
    width: 100%;
    margin: .5rem;

    &::after {
      display: none;
    }
  }

  .other__projects-grid span {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    gap: 1rem;

    .other__project-item {
      background-color: var(--light-navy-color);
      padding: 1.5rem;
      border-radius: 5px;

      .project__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        align-items: center;

        .project__icon {
          font-size: var(--h1-font-size);
        }

        .project__links {
          font-size: var(--h2-font-size);
          .link__item {
            display: inline;
            margin-right: .5rem;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      .project__body {
        .third__title {
          margin-bottom: 1rem;
        }

        .description__text {
          font-size: var(--small-font-size);
          max-width: unset;
        }
      }

      .project__footer {
        .project__targets {
          .target__item {
            display: inline-block;
            margin-right: 1rem;
            margin-top: .5rem;
            font-size: var(--small-font-size);
            font-style: italic;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section__other-projects {
    .other__projects-grid span {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 550px) {
  .section__other-projects {
    .other__projects-grid span {
      grid-template-columns: 1fr;
    }
  }
}
</style>
