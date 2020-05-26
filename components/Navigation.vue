<template>
    <div class="navigation-bar">
        <nuxt-link to="/">Home |</nuxt-link>
        <nuxt-link to="/posts">Posts |</nuxt-link>
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
    }
</style>