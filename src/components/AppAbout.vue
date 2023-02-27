<template>
  <section id="about" class="section section__about">
    <h2 class="secondary__title section__counter">{{ title }}</h2>
    <div class="about__content">
      <div class="about__text">
        <p class="description__text" v-html="description"></p>
        <ul class="list__grid">
          <li
            class="list__grid-item"
            v-for="(tech, index) in technologies"
            :key="index"
          >{{ tech }}</li>
        </ul>
      </div>

      <div class="about__image">
        <figure>
          <img :src="require(`@/assets/img/${image.url}`)" :alt="image.alt">
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
      title: 'About Me',
      description: `
        Hello! My name is John and I enjoy creating things that live on the internet. My interest in web
        development started back in 2018 when I decided to try creating HTML pages - turns out hacking together a
        custom reblog button taught me a lot about HTML & Css!
        <br>
        Fast-forward to today, and I've had the privilege of working at <span class="important__text">an
          advertising agency</span>. My main focus these days is building accessible, inclusive products and
        digital experiences at <span class="important__text">Novazeo</span> for a variety of clients.
        <br>
        Here are a few technologies I've working with recently:
      `,
      technologies: ['Javascript (ES6+)', 'React', 'Node.Js', 'TypeScript', 'Eleventy', 'WordPress'],
      image: {
        url: 'project.jpg',
        alt: 'Alternative text',
      },
    };
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
