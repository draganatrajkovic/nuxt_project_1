<template>
  <div class="container">
      <BlockCover />
      <BlockProject />
      <BlockAboutAsl />
      <BlockOurStory />
      <BlockLuminaries />
      <BlockTeam />
      <BlockExperienceDesign />
  </div>
</template>

<script>
import BlockCover from '~/components/blocks/BlockCover.vue'
import BlockProject from '~/components/blocks/BlockProject/BlockProject.vue'
import BlockAboutAsl from '~/components/blocks/BlockAboutAsl.vue'
import BlockOurStory from '~/components/blocks/BlockOurStory.vue'
import BlockLuminaries from '~/components/blocks/BlockLuminaries/BlockLuminaries.vue'
import BlockTeam from '~/components/blocks/BlockTeam/BlockTeam.vue'
import BlockExperienceDesign from '~/components/blocks/BlockExperienceDesign.vue'

export default {
  components: {
    BlockCover,
    BlockProject,
    BlockAboutAsl,
    BlockOurStory,
    BlockLuminaries,
    BlockTeam,
    BlockExperienceDesign
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
