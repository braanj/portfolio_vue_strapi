<template>
  <section id="other__projects" class="section section__other-projects">

    <h2 class="secondary__title">{{ title }}</h2>
    <!-- Todo : Turn it to an archive link -->
    <span class="small__text">{{ subtitle }}</span>

    <div class="other__projects-grid">
      <div
        class="other__project-item"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project__header">
          <!-- Todo : Add a folder icon -->
          <div class="project__icon">
            <i class="uil uil-folder"></i>
          </div>
          <!-- Todo : Add links icons -->
          <ul class="project__links">
            <li
              class="link__item"
              v-for="(link, index) in project.links"
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
          <h3 class="third__title">{{ project.title }}</h3>
          <p class="description__text">{{ project.subtitle }}</p>
        </div>
        <div class="project__footer">
          <ul class="project__targets">
            <li
              class="target__item"
              v-for="(target, index) in project.targets"
              :key="index"
            >{{ target }}</li>
          </ul>
        </div>
      </div>

    </div>
    <div class="button__container">
      <!-- Todo : Add show more functionnality -->
      <button class="button">Show More</button>
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
      projects: [
        {
          title: 'Intergrating Algolia Search with WordPress Multisite',
          subtitle: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
          targets: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
          links: [
            {
              name: 'Github',
              url: 'https://github.com',
              icon: '<i class="uil uil-github"></i>',
            },
            {
              name: 'Live',
              url: '#',
              icon: '<i class="uil uil-external-link-alt"></i>',
            },
          ],
        },
      ],
    };
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

  .other__projects-grid {
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
    .other__projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 550px) {
  .section__other-projects {
    .other__projects-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
