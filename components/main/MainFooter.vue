<template>
    <div class="box__wrap box__wrap--footer">
        <div class="box box--column">
            <div class="box__section box__section--inline box__section--top-align">
                <div class=" box__section box__section--footer">
                    <img src="~/static/MainFooter/logo.png" alt="footer-logo"/>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Company</p>
                    <p class="text__footer">
                        725 East State Street
                        trenton, NY 08609
                        info@asllightning.com
                        (800) 369-1101
                    </p>
                    <div class="box__section box__section--inline box__footer-seg-social">
                        <div class="footer__social footer__twitter"></div>
                        <div class="footer__social footer__instagram"></div>
                        <div class="footer__social footer__facebook"></div>
                    </div>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Company</p>
                    <a class="text__footer">Products</a>
                    <a class="text__footer">About us</a>
                    <a class="text__footer">Technology</a>
                    <a class="text__footer">Resources</a>
                    <a class="text__footer">Inspiration</a>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Customer Service</p>
                    <a class="text__footer">Contact us</a>
                    <a class="text__footer">Rep Locator</a>
                    <a class="text__footer">Shipping Information</a>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Stay up to date</p>
                    <input placeholder="info@asllightning.com"/>
                </div>
                <div class=" box__section box__section--footer">
                    <div class="btn btn--no-bg btn__footer" @click="handleSubscribe">
                        <div class="btn__icon"></div>
                        <div class="btn__text"><p>Subscribe</p></div>
                    </div>
                </div>
            </div>
            <div>
                <p>C ASL Lignhting. All RIghts reserved. Designed by <span class="text__footer">Forwardslash.</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .box__wrap--footer {
        padding: 50px 0;
        background-color: #191723;
    }
    .box__section--top-align {
        align-items: flex-start;
        border-bottom: 1px solid #3b374f;
        padding-bottom: 50px;
    }
    .box__section--footer {
        width: 15%;
    }
    .box__section--footer input {
        background-color: #3b374f;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    .text__footer {
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        color: white;
    }
    .text__footer--upper {
        text-transform: uppercase;
        font-weight: bold;
        color: #3b374f;
    }
    .btn__footer {
        width: 130px;
    }
    .footer__social {
        width: 20px;
        height: 20px;
    }
    .footer__twitter {
        background: url('./../../static/MainFooter/icon_twitter.png') no-repeat center center;
        &:hover {
            background: url('./../../static/MainFooter/icon_twitter_hover.png') no-repeat center center;
        }
    }
    .footer__instagram {
        background: url('./../../static/MainFooter/icon_instagram.png') no-repeat center center;
        &:hover {
            background: url('./../../static/MainFooter/icon_instagram_hover.png') no-repeat center center;
        }
    }
    .footer__facebook {
        background: url('./../../static/MainFooter/icon_facebook.png') no-repeat center center;
        &:hover {
            background: url('./../../static/MainFooter/icon_facebook_hover.png') no-repeat center center;
        }
    }
</style>