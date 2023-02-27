<template>
  <footer class="footer">
    <p class="copyright__text">{{ copyright }}</p>
    <div class="github__numbers">
      <div
        class="stars"
        v-for="(credit, index) in credits"
        :key="index"
      >
        <span v-html="credit.icon"></span>
        {{ credit.number }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      copyright: 'Designed & Built by Me',
      credits: [
        { icon: '<i class="uil uil-star"></i>', number: '522' },
        { icon: '<i class="uil uil-code-branch"></i>', number: '522' },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
  font-size: var(--smaller-font-size);

  .github__numbers {
    display: flex;
    gap: 1.5rem;
    margin-top: .5rem;
  }
}
</style>
