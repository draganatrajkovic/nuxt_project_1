<template>
  <div>
    <Header />
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
html {
  box-sizing: border-box;
  margin: 0 auto;
}
</style>