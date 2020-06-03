<template>
    <div class="box__wrap">
        <div class="box box__header">
            <div class="header-text">
                <p class="text__header">ASL Lightning Fixtures Made In America</p>
            </div>
            <div class="header-links text__header">
                <div class="header__link">
                    <a >Resources</a>
                    <img src="~/static/Icons/icon_arrow-bottom_drop-down.png" alt="our_story_img"/>
                </div>
                <div class="header__link">
                    <a>Technology</a>
                </div>
                <div class="header__link">
                    <a>Compliance</a>
                </div>
                <div class="header__link">
                    <a>Partners</a>
                </div>
                <div class="header__link">
                    <a>My Account</a>
                    <img src="~/static/Icons/icon_arrow-bottom_drop-down.png" alt="our_story_img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .box__header {
        align-items: center;
    }
    .box__wrap {
        background-color: #eff2f4;
    }
    .text__header {
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        color: $mainColor;
        letter-spacing: 1px;
    }
    .header-links {
        width: 60%;
        display: flex;
        justify-content: flex-end;
    }
    .header__link {
        // margin-left: 5px;
    }
    .header-links a {
        margin: 0 10px;
        text-decoration: none;
        &:hover {
            opacity: 1;
            transition: opacity .3s ease-in-out;
            text-decoration: underline;
        }
    }
</style>