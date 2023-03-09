<template>
  <footer class="footer">
    <p class="copyright__text">{{ copyright }}</p>
    <div class="github__numbers">
      <div class="stars">
        <span>
          <i class="uil uil-star"></i>
          {{ stars_count }}
        </span>
      </div>
      <div class="stars">
        <span>
          <i class="uil uil-code-branch"></i>
          {{ forks_count }}
        </span>
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
      repos: [],
      stars_count: 0,
      forks_count: 0,
    };
  },

  methods: {
    countReposNumbers() {
      this.repos.forEach((rep) => {
        this.stars_count += rep.stargazers_count;
        this.forks_count += rep.forks_count;
      });
    },

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
      const response = await fetch('https://api.github.com/users/braanj/repos', {
        method: 'GET',
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
      this.repos = response;
      this.countReposNumbers();
    } catch (error) {
      console.log(error);
    }
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
