<template>
    <div class="box__wrap">
        <div class="box box__navigation">
            <div class="nav-img">
                Logo
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

<style lang="scss" scoped>
    .main__navigation {
        display: flex;
        // justify-content: flex-end;
        // background-color: #ee753c;
        padding: 30px;
        margin: 0;
    }
    // a {
    //     color: white;
    //     text-decoration: none;
    // }
    // a.nuxt-link-active {
    //     color: darkred;
    // }
    // span {
    //     margin-left: 5px;
    //     margin-right: 5px;
    //     color: white;
    // }
</style>