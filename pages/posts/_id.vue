<template>
  <div class="single-post">
    {{getPosts.filter(p => p.id == this.id)}}

  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  data() {
    return {
      id:this.$route.params.id,
      // post: ''
    }
  },
  computed: {
    ...mapGetters({
        getPosts: 'posts/getPosts',
    })
  },

}
</script>

<style lang="scss" scoped>
  .single-post {

  }
</style>
