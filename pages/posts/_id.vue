<template>
  <div class="single-post">
    {{post}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
    }
  },
  computed: {
    post() {
      this.$store.posts.commit('getSinglePost', this.id)
    }
  },

}
</script>

<style lang="scss" scoped>
  .single-post {
    min-height: 80vh;
  }
</style>
