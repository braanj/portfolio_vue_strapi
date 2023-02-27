<template>
  <section id="experience" class="section section__experience">
    <h2 class="secondary__title section__counter">{{ title }}</h2>
    <div class="tabs">
      <nav class="tabs__navigation">
        <button
          class="tabs__navigation-item"
          :class="{ active: selectedTab === tab }"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = tab"
        >{{ tab }}</button>
      </nav>

      <div class="tabs__content">

        <div
          class="tabs__content-item"
          v-for="(experience, index) in experiences" :key="index"
          :class="{ active: experience.tab === selectedTab }"
        >
          <h3 class="third__title" v-html="experience.title"></h3>
          <span class="sub__title">{{ experience.subtitle }}</span>
          <ul class="tasks">
            <li
            class="tasks-item"
            v-for="(task, index) in experience.tasks"
            :key="index"
            >{{ task }}'</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppExperience',

  data() {
    return {
      title: "Where I've Worked",
      tabs: [
        'Novazeo',
        'Games',
        'Devforyou',
      ],

      selectedTab: 'Novazeo',
      experiences: [
        {
          tab: 'Novazeo',
          title: 'Creative Technologist Co-op <span class="important__text">@Novazeo</span>',
          subtitle: 'July - December 2019',
          tasks: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, Javascript, and Jquery.',
            'Manully tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
            'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of defense, and more.',
          ],
        },

        {
          tab: 'Games',
          title: 'Creative Technologist Co-op <span class="important__text">@Yan Games Studio</span>',
          subtitle: 'July - December 2019',
          tasks: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, Javascript, and Jquery.',
            'Manully tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
            'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of defense, and more.',
          ],
        },

        {
          tab: 'Devforyou',
          title: 'Creative Technologist Co-op <span class="important__text">@ Devforyou</span>',
          subtitle: 'July - December 2019',
          tasks: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, Javascript, and Jquery.',
            'Manully tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
            'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of defense, and more.',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.tabs {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin-top: 1.5rem;

  .tabs__content-item {
    display: none;
    &.active {
      display: block;
    }
  }

  .tabs__navigation {
    display: flex;
    flex-direction: column;
    margin-top: -1rem;

    .tabs__navigation-item {
      padding: 1rem 1rem;
      border-left: 1px solid var(--hover-color);
      transition: all 225ms ease-in-out;
      color: var(--title-color);

      &.active {
        color: var(--number-color);
        border-left: 2px solid var(--number-color);
      }

      &:hover {
        background-color: var(--hover-color);
      }
    }
  }

  .tasks {
    list-style-position: outside;
    margin-left: 1rem;
    margin-top: 1rem;
    list-style: square;

    .tasks-item {
      margin-bottom: 1rem;

      &::marker {
        color: var(--number-color);
      }

    }
  }
}

@media screen and (max-width: 768px) {
  .tabs {
    display: initial;
    margin-top: 0;
    overflow-x: hidden;
    max-width: 100%;

    .tabs__navigation {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: initial;
      margin-top: unset;
      margin-bottom: 3rem;
      overflow-x: scroll;

      .tabs__navigation-item {
        border-bottom: 1px solid var(--hover-color);
        border-left: unset;
        margin: 0;

        &.active {
          border-left: unset;
          border-bottom: 2px solid var(--number-color);
        }

        &:hover {
          background-color: var(--hover-color);
        }
      }
    }
  }
}
</style>
