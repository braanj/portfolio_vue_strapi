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
          :class="{ active: experience.attributes.company === selectedTab }"
        >
          <h3 class="third__title">
            {{ experience.attributes.title }}
            <span class="important__text">@ {{ experience.attributes.company }}</span>
          </h3>
          <span class="sub__title">
            {{ experience.attributes.date }}
          </span>
          <p class="description__text" v-html="experience.attributes.description"></p>
          <ul class="tasks">
            <li
            class="tasks-item"
            v-for="
            (task, index) in experience.attributes.tasks.split('\n')"
            :key="index"
            >{{ task }}</li>
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
      tabs: [],
      selectedTab: 'Novazeo',
      experiences: [],
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
      const response = await fetch(`${process.env.VUE_APP_BACK_END_HOST}/api/experciences`, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);

      this.experiences = response.data;
      response.data.map((elem) => this.tabs.push(elem.attributes.company));
      [this.selectedTab] = [this.tabs[0]];
    } catch (error) {
      this.error = error;
    }
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

  .description__text {
    max-width: 100%;
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
