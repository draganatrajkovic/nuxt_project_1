<template>
  <div class="container">
      <BlockCover />
      <BlockProject />
      <BlockAboutAsl />
      <BlockOurStory />
      <BlockLuminaries />
      <BlockTeam />
      <ExperienceDesign />
  </div>
</template>

<script>
import BlockCover from '~/components/blocks/BlockCover.vue'
import BlockProject from '~/components/blocks/BlockProject/BlockProject.vue'
import BlockAboutAsl from '~/components/blocks/BlockAboutAsl.vue'
import BlockOurStory from '~/components/blocks/BlockOurStory.vue'
import BlockLuminaries from '~/components/blocks/BlockLuminaries/BlockLuminaries.vue'
import BlockTeam from '~/components/blocks/BlockTeam/BlockTeam.vue'
import ExperienceDesign from '~/components/blocks/ExperienceDesign.vue'

export default {
  components: {
    BlockCover,
    BlockProject,
    BlockAboutAsl,
    BlockOurStory,
    BlockLuminaries,
    BlockTeam,
    ExperienceDesign
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
  }
</style>
