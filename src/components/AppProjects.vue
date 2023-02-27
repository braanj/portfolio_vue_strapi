<template>
  <section id="projects" class="section section__projects">
    <h2 class="secondary__title section__counter">{{ title }}</h2>
    <div
      class="project__item"
      v-for="(project, index) in projects"
      :key="index"
      :class="{ right: index % 2 !== 0 }"
    >
      <div class="project__image">
        <img :src="require(`@/assets/img/${project.thumbnail.url}`)" :alt="project.title">
      </div>

      <div class="project__details">
        <span class="important__text">{{ project.subtitle }}</span>
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="description__text" v-html="project.description"></p>
        <ul class="project__targets">
          <li
            class="target__item"
            v-for="(target, index) in project.targets"
            :key="index"
          >{{ target }}</li>
        </ul>
        <ul class="project__links">
          <li
            class="link__item"
            v-for="(link, index) in project.links"
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
      projects: [
        {
          thumbnail: {
            url: 'default.jpg',
            alt: 'Project thumbnail',
          },
          title: 'Halcyon Theme',
          subtitle: 'Featured project',
          description: `
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <span class="important__text">Visual Studio Merketplace, Package Control, Atom Package Manager,</span> and <span class="important__text">npm.</span>
          `,
          targets: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
          links: [
            {
              name: 'Github',
              url: 'https://github.com',
            },
            {
              name: 'Live',
              url: '#',
            },
          ],
        },
      ],
    };
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
        font-size: var(--h3-font-size);
      }
      .important__text {
        font-size: var(--small-font-size);
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
          padding-right: .5rem;
          font-size: var(--small-font-size);
        }
      }
    }

    .project__image {
      width: 60%;
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
