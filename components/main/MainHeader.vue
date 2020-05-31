<template>
    <div class="box__wrap">
        <div class="box box__header">
            <div class="header-text">
                <p class="text__header">ASL Lightning Fixtures Made In America</p>
            </div>
            <div class="header-links text__header">
                <a >Resources</a>
                <a>Technology</a>
                <a>Compliance</a>
                <a>Partners</a>
                <a>My Account</a>
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
    }
    .header-links a {
        margin: 0 10px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
</style>