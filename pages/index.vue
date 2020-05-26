<template>
  <div class="container">
      <Test />
  </div>
</template>

<script>
import Test from '~/components/Test.vue'

export default {
  components: {
    Test
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
