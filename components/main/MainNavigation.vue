<template>
    <div class="box__wrap">
        <div class="box box__navigation">
            <div class="nav-img">
                <nuxt-link to="/" ><img src="~/static/MainNavigation/logo.png"></nuxt-link>
            </div>
            <div class="btn btn__nav">
                <div class="btn__icon btn__icon__nav"></div>
                <div class="btn__text"><p>Product Finder</p></div>
            </div>
            <div class="nav-links">
                <nuxt-link to="/inspiration" >Inspiration </nuxt-link>
                <nuxt-link to="/customization" >Customization </nuxt-link>
                <nuxt-link to="/company" >Company</nuxt-link>
                <nuxt-link to="/contact" >Contact</nuxt-link>
            </div>
            <div class="nav-search">
                <img src="~/static/MainNavigation/icon_search.png" alt="search-icon"/>
            </div>
        </div>
    </div>
</template>

<script>
import Inspiration from '~/pages/Inspiration.vue'
import Customization from '~/pages/Customization.vue'
import Company from '~/pages/Company.vue'
import Contact from '~/pages/Contact.vue'

export default {
    components: {
        Inspiration,
        Customization,
        Company,
        Contact
    }
}
</script>
<style lang="scss" scoped>
    .box__navigation {
        padding: 10px;
        align-items: center;
    }
    .nav-links a {
        text-decoration: none;
        margin: 0 10px;
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        color: $mainColor;
        text-transform: uppercase;
        font-weight: bold;
        &:focus {
            color: $mainColor;
        }
    }
    
    .btn__icon__nav {
        background: url('./../../static/MainNavigation/icon_product_finder.png') no-repeat center center;
    }
</style>