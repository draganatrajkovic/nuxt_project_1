<template>
    <div class="box__wrap box__wrap--footer">
        <div class="box box--column">
            <div class="box__section box__section--inline box__section--top-align">
                <div class="img">
                    <img src="~/static/MainFooter/logo.png" alt="footer-logo"/>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Company</p>
                    <p class="text__footer--white">
                        725 East State Street
                        trenton, NY 08609
                        info@asllightning.com
                        (800) 369-1101
                    </p>
                    <div class="box__section box__section--inline box__footer-seg-social">
                        <div class="footer__social footer__twitter" @click="handleTwitter"></div>
                        <div class="footer__social footer__instagram" @click="handleInstagram"></div>
                        <div class="footer__social footer__facebook" @click="handleFacebook"></div>
                    </div>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Company</p>
                    <a class="text__footer--white footer__link" href="#">Products</a>
                    <a class="text__footer--white footer__link" href="#">About us</a>
                    <a class="text__footer--white footer__link" href="#">Technology</a>
                    <a class="text__footer--white footer__link" href="#">Resources</a>
                    <a class="text__footer--white footer__link" href="#">Inspiration</a>
                </div>
                <div class=" box__section box__section--footer">
                    <p class="text__footer--upper">Customer Service</p>
                    <a class="text__footer--white footer__link" href="#">Contact us</a>
                    <a class="text__footer--white footer__link" href="#">Rep Locator</a>
                    <a class="text__footer--white footer__link" href="#">Shipping Information</a>
                </div>
                <div class="box__section box__section--footer">
                    <p class="text__footer--upper">Stay up to date</p>
                    <form class="box__section box__section--inline box__section--footer__sub">
                        <input class="footer__input" v-model="email" placeholder="info@asllightning.com"/>
                        <div class="btn btn--no-bg btn__footer" @click="handleSubscribe">
                            <div class="btn__icon"></div>
                            <div class="btn__text"><p>Subscribe</p></div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <p class="text__footer">C ASL Lignhting. All RIghts reserved. Designed by <span class="text__footer--white">Forwardslash.</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email:''
        }
    },
    methods: {
        handleSubscribe() {
            if (this.email === '') {
                alert('Please insert you email!')
            } else {
                alert('Thank you for subscribe '  + this.email + '!')
                this.email = ''
            }
        },
        handleTwitter() {
            window.location.href = "https://twitter.com/"
        },
        handleInstagram() {
            window.location.href = "https://www.instagram.com/"
        },
        handleFacebook() {
            window.location.href = "https://www.facebook.com/"
        }
    }
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
        color: #3b374f;
    }
    .text__footer--white {
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
    .box__footer-seg-social {
        justify-content: flex-start;
    }
    .footer__social {
        width: 20px;
        height: 20px;
        padding: 5px;
        &:hover {
            cursor: pointer;
        }
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
    .footer__link {
        text-decoration: none;
        transition:all 0.3s ease;
        &:hover {
            text-decoration: underline;
        }
    }
    .footer__input {
        color: white;
    }
    .box__section--footer__sub {
        align-items: center;
        justify-content: space-between;
    }
</style>