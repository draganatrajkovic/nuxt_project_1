<template>
    <div class="box__wrap">
        <div class="box box__navigation">
            <div class="nav-img img">
                <nuxt-link to="/" ><img src="~/static/MainNavigation/logo.png"></nuxt-link>
            </div>
            <div class="btn btn__nav" @click="handleProductFinder">
                <div class="btn__icon btn__icon__nav"></div>
                <div class="btn__text"><p>Product Finder</p></div>
            </div>
            <div v-if="searchBar" class="nav-search-bar nav-links">
                <form @submit.prevent="handleSearchTerm">
                    <input placeholder="Search term" v-model="searchTerm" />
                </form>
            </div>
            <div v-else class="nav-links box__section box__section--inline">
                <div class="nav-links__single-link">
                    <nuxt-link to="/inspiration" >Inspiration </nuxt-link>
                    <div class="nav-links__single-link__border"></div>
                </div>
                <div class="nav-links__single-link">
                    <nuxt-link to="/customization" >Customization </nuxt-link>
                    <div class="nav-links__single-link__border"></div>
                </div>
                <div class="nav-links__single-link">
                    <nuxt-link to="/company" >Company</nuxt-link>
                    <div class="nav-links__single-link__border"></div>
                </div>
                <div class="nav-links__single-link">
                    <nuxt-link to="/contact" >Contact</nuxt-link>
                    <div class="nav-links__single-link__border"></div>
                </div>
            </div>
            <div class="nav-search img img--center">
                <img src="~/static/MainNavigation/icon_search.png" @click="handleSearch" alt="search-icon"/>
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
    },
    data() {
        return {
            searchBar: false,
            searchTerm:''
        }
    },
    methods: {
        handleSearch() {
            if (this.searchBar === true) {
                this.searchBar = false
            } else {
                this.searchBar = true
            }
        },
        handleSearchTerm() {
            alert(this.searchTerm)
            this.searchTerm = ''
        }, 
        handleProductFinder() {
            console.log('handleProductFinder')
        }
    }
}
</script>
<style lang="scss" scoped>
    .box__navigation {
        padding: 10px;
        align-items: center;
    }
    .nav-links {
        width: 60%;
        align-items: stretch;
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
    .nav-links__single-link {
        height: 100%;
        &:hover .nav-links__single-link__border {
            visibility: visible;
            transition: 0.3s;
        }
    }
    .nav-links__single-link__border {
        visibility: hidden;
        height: 3px;
        background: linear-gradient(to right, #ffd86a, #fff8e4, #b4e2ff);
    }
    .nav-search:hover img {
        cursor: pointer;
        transform: scale(1.2);
        transition-duration: 0.3s;
    }
    .nav-search-bar input {
        padding: 10px;
        border-radius: 25px;
        width: 100%;
        // transition:all 0.3s ease;
        &:focus {
            outline: none;
        }
    }
</style>