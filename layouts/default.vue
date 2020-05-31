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
.box__wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.box__wrap--padding {
  padding: 100px 0;
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

.btn {
  width: 200px;
  background-color: $mainColor;
  border-radius: 35px;
  padding: 13px 20px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
	&:hover {
		opacity: 0.7;
	}
	&:focus {
		outline: none;
	}
}
.btn__icon {
	background: url('./../static/Icons/icon_button.png') no-repeat center center;
	float: left;
	width: 28px;
	height: 25px;
}
.btn__text p {
	color: white;
	font-size: 14px;
	text-transform: uppercase;
	font-family: 'Lato';
	font-weight: bold;
}
.btn--referse {
	flex-direction: row-reverse;
}
.btn--no-bg {
	background-color: transparent;
}

:hover {
  cursor: pointer;
  transition: 0.3s;
}

</style>