<template>
    <div class="box__wrap box__wrap--padding box__wrap--block-about-asl">
        <div class="box">
            <div class="box__section box__section--inline">
                <div class="box__img--half img block-about-asl__img">
                    <img src="~/static/BlockAboutAsl/bg.png" alt="block-about-asl__img"/>
                </div>
                <div class="box__section  box__section--half block-about-asl__text__wrap">
                    <div class="block-about-asl__text">
                        <h1 class="title">About ASL</h1>
                        <p class="text">
                            ASL manufactures innovative, sustainable lighting systems for healthcare, hospitality, 
                            and other commercial applications. Our products are powerful and pretty, but never 
                            precious. Instead, we focus on bringing your ideas to light in line with your budget 
                            and performance needs. It’s how our family and community have done it since dawn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box__wrap--block-about-asl {
        padding-top: 90px;
        padding-bottom: 220px;
        justify-content: center;
    }
    .block-about-asl__img {
        justify-content: flex-end;
    }
    .block-about-asl__img img {
        margin-right: -10px;
    }
    .block-about-asl__text__wrap {
        margin-top: 95px;
    }
    .block-about-asl__text {
        padding-left: 90px;
    }

</style>