<template>
    <div class="navigation-bar">
        <nuxt-link to="/">Home </nuxt-link><span>|</span>
        <nuxt-link to="/posts">Posts </nuxt-link><span>|</span>
        <nuxt-link to="/about-us">About us</nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    .navigation-bar {
        display: flex;
        justify-content: flex-end;
        background-color: #ee753c;
        padding: 30px;
        margin: 0;
        a {
            color: white;
            text-decoration: none;
        }
        a.nuxt-link-active {
            color: darkred;
        }
        span {
            margin-left: 5px;
            margin-right: 5px;
            color: white;
        }
    }
</style>