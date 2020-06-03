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
                <div class="nav-link__content">
                    <div class="nav-link__link">
                        <nuxt-link to="/inspiration" >Inspiration </nuxt-link>
                    </div>
                    <div class="nav-link__border"></div>
                </div>
                <div class="nav-link__content">
                    <div class="nav-link__link">
                        <nuxt-link to="/customization" >Customization </nuxt-link>
                    </div>
                    <div class="nav-link__border"></div>
                </div>
                <div class="nav-link__content">
                    <div class="nav-link__link">
                        <nuxt-link to="/company" >Company</nuxt-link>
                    </div>
                    <div class="nav-link__border"></div>
                </div>
                <div class="nav-link__content">
                    <div class="nav-link__link">
                        <nuxt-link to="/contact" >Contact</nuxt-link>
                    </div>
                    <div class="nav-link__border"></div>
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
        padding-top: 25px;
        align-items: center;
    }

    .nav-links {
        width: 60%;
        height: 100%;
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
    .btn:hover .btn__icon {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out 0s;
    }

    .btn__icon__nav {
        background: url('./../../static/MainNavigation/icon_product_finder.png') no-repeat;
        width: 25px;
        height: 15px;
    }
    .nav-link__content {
        height: 100%;
        &:hover .nav-link__border {
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
    }
    .nav-link__link, .nav-link__border {
        height: 50%;
        display: flex;
        align-items: flex-end;
    }
    .nav-link__border {
        opacity: 0;
        border-bottom: 4px solid transparent;
        border-image: linear-gradient(to right, #ffd86a, #fff8e4, #b4e2ff);
        border-image-slice: 1;
    }
    .nav-search:hover img {
        cursor: pointer;
        transform: scale(1.2);
        transition-duration: 0.3s;
    }
    .nav-search-bar form {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .nav-search-bar input {
        width: 100%;
        padding: 10px;
        border-radius: 25px;
        width: 100%;
        opacity: 1;
        transition: opacity .3s ease-in-out;
        &:focus {
            outline: none;
        }
    }
</style>