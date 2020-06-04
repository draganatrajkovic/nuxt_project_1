<template>
    <div class="box__wrap box__wrap--padding box__wrap--block-project">
        <div class="box box--column">
            <div class="box__section block-project__title">
                <h1 class="title">Your project is no place to iterate.</h1>
                <div class="box__section--half">
                    <p class="text">That’s why our focus is on creating precisely what you asked for the 
                        first time around - no comprises or surprises.
                        Here’s how:
                    </p>
                </div>
            </div>
            <div class="box__section box__section--inline block-project__tabs">
                <div class="block-project__drop-down" v-for="(project, index) in projects" :key="index">
                    <div @click="handleDropDown(project.id)" class="block-project__drop-down__content">
                        <div class="block-project__drop-down__tab">
                            <div class="img img--center block-project__drop-down__tab__icon">
                                <img :src="require(`./../../../static/BlockProject/${project.icon}`)" alt="project-icon"/>
                            </div>
                            <div class="block-project__tab__title">
                                <p class="text text--bold">{{project.title}}</p>
                            </div>
                            <div class="img img--center block-project__tab__arrow">
                                <img src="~/static/Icons/icon_arrow-bottom_drop-down.png" alt="bottom-arrow"/>
                            </div>
                        </div>
                        <div class="block-project__drop-down__border_">
                            <div class="block-project__drop-down__border__start"></div>
                            <div class="block-project__drop-down__border__arrow"></div>
                            <div class="block-project__drop-down__border__end"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box__section box__section--inline box__section--reverse block-project__dynamic-content">
                <div class="box__img--half img img--center block-project__img">
                    <img :src="require(`./../../../static/BlockProject/${project.img}`)" alt="project"/>
                </div>
                <div class="box__section box__section--half">
                    <h2 class="title block-project__subtitle">{{project.title}}</h2>
                    <p class="text">{{project.content}}</p>
                    <div class="list block-project__list">
                        <ul v-for="(li, index) in project.list" :key="index" class="block-project__list-element">
                            <li class="text block-project__li">{{li}}</li>
                        </ul>
                    </div>
                    <h3 class="text text--bold block-project__note__title">{{project.noteTitle}}</h3>
                    <p class="text text--normal block-project__note__text">{{project.noteContent}}</p>
                    <div class="btn btn--referse block-project__btn" @click="handleCustomCapabilities">
                        <div class="btn__icon"></div>
                        <div class="btn__text"><p>{{project.button}}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {projectsService} from './ProjectsService'
export default {
    components: {

    },
    data() {
        return {
            projects: projectsService.all(),
            project:projectsService.find(1)
        }
    },

    methods: {
        handleDropDown(projectId) {
            setTimeout(() => {
                this.project = this.projects.find(project => project.id == projectId)
            }, 300)
        },
        handleCustomCapabilities() {
            console.log('handleCustomCapabilities')
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-project {
        padding-top: 120px;
    }
    .title {
        margin-bottom: 20px;
    }
    .block-project__title {
        margin-bottom: 60px;
    }
    .block-project__tabs {
        margin-bottom: 65px;
    }
    .block-project__drop-down {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        &:hover {
            cursor: pointer;
        }
        &:hover .block-project__drop-down__border_ {
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
        &:hover .block-project__drop-down__content {
            border: none;
        }
        &:hover .block-project__drop-down__border_{
            border: transparent;
            .block-project__drop-down__border__start {
                background: linear-gradient(to right, #ffd86a, #fff8e4);
                width: 50%;
            }
            .block-project__drop-down__border__arrow {
                border: solid #fff8e4;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 5px;
                transform: rotate(45deg);
            }
            .block-project__drop-down__border__end {
                background: linear-gradient(to right, #fff8e4, #b4e2ff);
                width: 50%;
            }
        }
    }
    .block-project__drop-down__content {
        padding: 0 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .block-project__drop-down__border_ {
        display: flex;
        width: 100%;
        height: 10px;
        height: 7px;
        border-bottom: 1px solid $darkColor;
        
    }
    .block-project__drop-down__tab {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .block-project__drop-down__tab__icon, .block-project__tab__title, .block-project__tab__arrow {
        display: flex;
        align-items: center;
        padding: 0 10px;
    }
    .block-project__drop-down__tab__icon {
        width: 10%;
        justify-content: flex-end;
    }
    .block-project__tab__title {
        width: 85%;
        justify-content: center;
    }
    .block-project__tab__title p {
        letter-spacing: 0;
    }
    .block-project__tab__arrow {
        width: 5%;
    }
    
    .block-project__li {
        list-style: none;
    }
    .block-project__list {
        list-style: none;
        margin-top: 30px;
        li::before {
            content: "\2022";
            color: $lightColor;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    }
    .block-project__list-element {
        margin: 0;
        padding: 0;
    }
    .block-project__subtitle {
        font-size: 36px;
        margin-bottom: 20px;
    }
    .block-project__note__title {
        font-size: 22px;
        margin-top: 90px;
        margin-bottom: 0;
    }
    .block-project__note__text {
        margin-bottom: 70px;
    }
    .block-project__btn {
        width: 250px;
    }
    
    .block-project__img {
        align-items: flex-start;
        justify-content: flex-end;
        padding-top: 30px;
    }
    .block-project__list {
        margin-left: 22px;
    }
    .block-project__dynamic-content{
        opacity: 1;
        transition: opacity 0.5 ease-in-out;
    }
</style>