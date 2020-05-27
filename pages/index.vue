<template>
  <div class="container">
      <BlockCover />
  </div>
</template>

<script>
import BlockCover from '~/components/blocks/BlockCover.vue'

export default {
  components: {
    BlockCover
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    min-height: 80vh;
  }
</style>
