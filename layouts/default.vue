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
  padding: 130px 0;
}

.box {
  width: 62.5%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media only screen and (max-width: 1920px) {
  }
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
  display: flex;
}

.box__img--half {
  display: flex;
  width: 50%;
}

.img {
  display: flex;
}

.img--center {
  justify-content: center;
  align-items: center;
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
  padding: 7px 32px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
	&:hover {
    // opacity: 0.7;
    cursor: pointer;
  }
  &:hover .btn__icon {
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
  }
	&:focus {
		outline: none;
	}
}
.btn__icon {
	background: url('./../static/Icons/icon_button.png') no-repeat center center;
	float: left;
	width: 28px;
	height: 28px;
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
a:hover {
  cursor: pointer;
}

//slider white
.slider--white {
  .slick-prev, .slick-next {
    width: 71px;
    height: 71px;
  }
  .slick-prev:before {
    content: url('./../static/PartsSlider/arrow_left--white.png');
    transition: opacity .3s ease-in-out;
  }
  .slick-prev:hover:before {
    content: url('./../static/PartsSlider/arrow_left--white_hover.png');
    opacity: 1;
  }
  .slick-prev {
    left: -100px;
  }
  .slick-next {
    right: -100px;
  }
  .slick-next:before {
    content: url('./../static/PartsSlider/arrow_right--white.png');
    transition: opacity .3s ease-in-out;
  }
  .slick-next:hover:before {
    content: url('./../static/PartsSlider/arrow_right--white_hover.png');
    opacity:1;
  }
  .slick-dots li button:before {
    color: #47454f;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: white;
  }
}

</style>