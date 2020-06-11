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
import {  mapGetters } from 'vuex';
export default {
    props: [
        // 'productsList'
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
        totalPages() {
            let arr = []
            let reminder = this.filteredProductList.length % 10
            if (reminder > 0 ) {
                this.filteredProductList.length = this.filteredProductList.length + 1
                for (let i = 1; i < (this.filteredProductList.length / 10)+1; i++) {
                    arr.push(i)
                }
                return arr
            } else {
                for (let i = 1; i < (this.filteredProductList.length / 10)+1; i++) {
                    arr.push(i)
                }
                return arr
            }
        },
         ...mapGetters({
            filteredProductList: 'getFilteredProductList' 
        }), 
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