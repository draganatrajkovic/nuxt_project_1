<template>
    <div class="box__wrap">
        <div class="box box--column box--pagination">
            <div class="pagination__numbers">
                <ul v-for="(num, index) in totalPages" :key="index" class="pagination__number">
                    <li class="pagination__number__li">
                        <p 
                            :class="[activePage !== num ? 'text' : 'text--bold']"
                            @click="handlePageNumber(index)">{{num}}</p>
                    </li>
                </ul>
            </div>
            <div class="box arrows">
                <div class="arrow left__arrow" @click="handlePrev"></div>
                <div class="arrow right__arrow" @click="handleNext"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'productsList'
    ],
    data(){
        return {
            activePage: 1
        }
    },
    methods: {
        handlePrev(activePage) {
            if ( this.activePage <= 1) {
                this.activePage
                this.$emit( 'handleActivePage', this.activePage)
            } else {
                this.activePage = this.activePage - 1
                this.$emit( 'handleActivePage', this.activePage)
            }
        },
        handleNext() {
            if (this.activePage >= this.totalPages.length) {
                this.$emit( 'handleActivePage', this.activePage)
                this.activePage
            } else {
                this.activePage = this.activePage + 1
                this.$emit( 'handleActivePage', this.activePage)
            }
        },
        handlePageNumber(index) {
            this.activePage = index + 1
            this.$emit( 'handleActivePage', this.activePage)
        }
    },
    computed: {
        visibleProducts() {
            this.productsList.filter(products => product.id === 2)
        },
        totalPages() {
            let arr = []
            for (let i = 1; i < this.productsList.length / 10; i++) {
                arr.push(i)
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
    .box--pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arrows {
        justify-content: center;
    }
    .arrow {
        width: 71px;
        height: 71px;
        
        &:hover {
            cursor: pointer;
        }
    }
    .left__arrow {
        background: url('./../../static/PartsSlider/arrow_left--dark.png') no-repeat;
    }
    .left__arrow:hover {
        background: url('./../../static/PartsSlider/arrow_left--dark_hover.png') no-repeat;
    }
    .right__arrow {
        background: url('./../../static/PartsSlider/arrow_right--dark.png') no-repeat;
    }
    .right__arrow:hover {
        background: url('./../../static/PartsSlider/arrow_right--dark_hover.png') no-repeat;
    }
    .pagination__numbers {
        width: 100%;
        flex-wrap: wrap;
        // padding: 0 30px;
        display: flex;
    }
    .pagination__number {
        padding: 0;
        margin: 0 5px;
    }
    .pagination__number__li {
        list-style-type: none;
    }
    .text {
        font-size: 16px;
        color: #c6c9d1;
        &:hover {
            color: $darkColor;
            font-weight: bold;
            cursor: pointer;
        }
    }
    .text, .text--bold {
        font-size: 10px;
        line-height: 10px;
    }
    .box {
        width: 100%;
    }
</style>