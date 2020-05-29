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
}

.box__wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.box {
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.box--column {
  flex-direction: column;
}

.box__section {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // flex-wrap: wrap;
}

.box__section--inline {
  flex-direction: row;
  justify-content: space-between;
}

.box__section--reverse {
  flex-direction: row-reverse;
}

.box__section--half {
  width: 50%;
}

.box__img {
  width: 100%;
}

.box__img--half {
  width: 50%;
}

img {
  max-width: 100%;
}

.drop-down {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

$mainColor: #2e2b3d;
$lightColor: #ffd86a;
$neutralColor: #b6b8bc;
$darkColor: #191723;

.btn {
  background-color: $mainColor;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Lato';
  border-radius: 20px;
  padding: 13px;
  border: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}


</style>