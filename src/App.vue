<template>
  <div class="container">
    <slot>
      <AppHeader />
      <AppIntro />
      <AppAbout />
      <AppExperience />
      <AppProjects />
      <AppOtherProjects />
      <AppContact />
      <AppFooter />
    </slot>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppIntro from './components/AppIntro.vue';
import AppAbout from './components/AppAbout.vue';
import AppExperience from './components/AppExperience.vue';
import AppProjects from './components/AppProjects.vue';
import AppOtherProjects from './components/AppOtherProjects.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppIntro,
    AppAbout,
    AppExperience,
    AppProjects,
    AppOtherProjects,
    AppContact,
    AppFooter,
  },
};
</script>

<style lang="scss">

:root {
  --header-height: 3rem;

  /*------ Colors ------*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --hue: 0;
  --sat: 0%;
  // --title-color: hsl(var(--hue), var(--sat), 20%);
  --title-color: #CCD6F6;
  --title-color-dark: hsl(var(--hue), var(--sat), 0%);
  --text-color: #CCD6F6;
  --body-color: #0A192F;
  --container-color: #fff;
  --number-color: #63FED9;
  --light-navy-color: #112240;
  --hover-color: rgba(100, 255, 218, 0.1);

  /*------ Font and typography ------*/
  --title-font: 'Cambria', 'Cochin', Georgia, Times, 'Times New Roman', serif;

  --body-font: 'Calibre','Inter','San Francisco','SF Pro Text','-apple-system',system-ui,sans-serif;

  /*.5rem = 8px | 1rem = 16px ...*/
  --big-font-size: 4rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;
  --tiny-font-size: 0.625rem;

  /*------ Font weight ------*/
  --font-normal: 400;
  --font-medium: 500;
  --font-semi-bold: 600;

  /*------ Margenes Bottom ------*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /*------ z index ------*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

/* Responsive typography */
@media screen and (max-width: 992px) {
  :root {
    --big-font-size: 2.75rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.2;
}

html {
  scroll-behavior: smooth;
}

body,
button,
input,
textarea {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: unset;
  letter-spacing: .5px;
}

body {
  background-color: var(--body-color);
  color: var(--text-color);
}

h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  font-family: var(--title-font);
}

a {
  text-decoration: none;
  color: var(--number-color);
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  list-style-position: inside;
}

.section__number {
  padding-right: .5rem;
  color: var(--number-color);
}

.button__container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
}

.button {
  color: var(--number-color) !important;
  border: 1px solid var(--number-color);
  border-radius: 3px;
  padding: .75rem 1.5rem;
  transition: all 225ms ease-in-out;

  &:active {
    opacity: .8;
  }

  &:hover {
    background-color: var(--hover-color);
  }
}

.main__menu,
.container {
  counter-reset: section 0;
}
.container {
  margin: 1rem 20%;
}

.section {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: start;
  max-width: 1600px;
}

@media screen and (max-width: 768px) {
  .container {
    margin: .5rem 5%;
  }

  .section {
    padding: .5rem;
  }
}

.small__text {
  display: block;
  font-size: var(--smaller-font-size);
}

.main__title {
  font-size: var(--big-font-size);
  line-height: 1.2;

  &.subtitle {
    opacity: .6;
  }
}

.description__text {
  font-size: var(--normal-font-size);
  line-height: 1.4;
  margin: 1.5rem 0;
  max-width: 70%;
}

.important__text {
  color: var(--number-color);
}

.secondary__title {
  display: flex;
  align-items: center;
  -moz-box-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background-color: #CCD6F669;
    margin-left: 20px;
  }
}

@media screen and (max-width: 768px) {
  .secondary__title {
    &::after {
      display: none;
    }
  }
}

.third__title {
  margin-bottom: 1rem;
}

.sub__title {
  display: block;
  font-size: var(--smaller-font-size);
  font-style: italic;
  margin-top: -.5rem;
}

.section__counter {
  &::before {
    counter-increment: section;
    margin-right: 10px;
    color: var(--number-color);
    content: '0' counter(section) '.';
  }
}

.list__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  list-style: square;
  list-style-position: inside;

  li::marker {
    color: var(--number-color);
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
