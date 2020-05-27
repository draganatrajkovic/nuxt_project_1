<template>
  <div>
    <MainHeader />
    <MainNavigation />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/main/MainHeader.vue'
import MainNavigation from '~/components/main/MainNavigation.vue'
import MainFooter from '~/components/main/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainNavigation,
    MainFooter
  }
}
</script>

<style lang="scss">
html {
  // box-sizing: border-box;
  // margin: 0 auto;
  // font-family: 'Raleway', sans-serif;
  // // background-image: url('~assets/images/bg.jpg');
  // background-repeat: repeat;
  // min-height: 100vh;
  // width: 100%;
  // button {
  //   background-color: transparent;
  //   border: none;
  //   color: white;
  //   &:hover {
  //     cursor: pointer;
  //     opacity: 0.7;
  //   }
  // }

}
</style>