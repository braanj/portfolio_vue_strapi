<template>
  <header class="full__width page__header">
    <nav class="page__navigation">
      <a :href="home" class="header__logo">
        <span>Homepage</span>
        <i class="uil uil-ninja"></i>
      </a>

      <button @click="toggler" class="burger" :class="{ active: mobile }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="main__menu" :class="{ active: mobile }">
        <li class="menu__item" v-for="(link, index) in links" :key="index">
          <a
            class="menu__link"
            :class="{ section__counter: link.hasCounter, button: link.isButton }"
            :href="link.href"
            @click="toggler"
          >{{ link.text }}</a>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      home: '/',
      mobile: false,
      links: [
        { href: '#about', text: 'About', hasCounter: true },
        { href: '#experience', text: 'Experience', hasCounter: true },
        { href: '#projects', text: 'Work', hasCounter: true },
        { href: '#contact', text: 'Contact', hasCounter: true },
        {
          href: '#resume', text: 'Resume', hasCounter: false, isButton: true,
        },
      ],
    };
  },

  methods: {
    toggler() {
      this.mobile = !this.mobile;
    },
  },
};
</script>

<style lang="scss">
$header_padding: 1rem 2rem;

.page__header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: $header_padding;
  background-color: var(--body-color);
  z-index: var(--z-fixed);

  .page__navigation {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    .header__logo {
      position: relative;
      width: 30px;
      height: 30px;
      z-index: 10;

      span {
        display: none;
      }

      i {
        font-size: var(--h1-font-size);
      }
    }

    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background-color: transparent;
      z-index: 10;
      span {
        display: block;
        width: 20px;
        height: 2px;
        background-color: var(--title-color);
      }
    }

    .main__menu {
      list-style: decimal outside;

      .menu__item {
        display: inline-block;

        .menu__link {
          padding: .5rem 1rem;
          color: var(--text-color);
          font-weight: var(--font-normal);
          font-size: var(--small-font-size);
        }
      }
    }
  }

}

@media screen and (max-width: 768px) {
  .page__header {
    .page__navigation {
      .burger {
        display: flex;

        span {
          transition: all 225ms ease-in-out;
        }

        &.active {
          span {
            &:first-child {
              transform: rotate(45deg) translateX(5px);
            }

            &:nth-child(2) {
              display: none;
            }

            &:last-child {
              transform: rotate(-45deg) translateX(5px);
            }
          }
        }
      }

      .main__menu {
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background-color: var(--body-color);
        padding: $header_padding;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 225ms ease-in-out;
        .menu__item {
          margin-bottom: 1rem;
          .button {
            display: block;
            margin: .5rem;
            text-align: center;
          }
        }
        &.active {
          right: 0;
        }
      }
    }
  }
}
</style>
