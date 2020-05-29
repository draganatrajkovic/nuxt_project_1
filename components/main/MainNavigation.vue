<template>
    <div class="box__wrap">
        <div class="box box__navigation">
            <div class="nav-img">
                <img src="~/static/MainNavigation/logo.png">
            </div>
            <div class="nav-btn">
                <button class="btn btn--switched">PRODUCT FINDER</button>
            </div>
            <div class="nav-links">
                <nuxt-link to="/inspiration" class="nav-link">Inspiration </nuxt-link><span>|</span>
                <nuxt-link to="/customization" class="nav-link">customization </nuxt-link><span>|</span>
                <nuxt-link to="/company" class="nav-link">Company</nuxt-link>
                <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
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
    }
</style>