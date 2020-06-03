<template>
    <div class="box__wrap box__wrap--padding box__wrap--project">
        <div class="box box--column">
            <div class="box__section project__title">
                <h1 class="title">Your project is no place to iterate.</h1>
                <div class="box__section--half">
                    <p class="text">That’s why our focus is on creating precisely what you asked for the 
                        first time around - no comprises or surprises.
                        Here’s how:
                    </p>
                </div>
            </div>
            <div class="box__section box__section--inline project__tabs">
                <div class="project__drop-down" v-for="(project, index) in projects" :key="index">
                    <div @click="handleDropDown(project.id)" class="drop-down__content">
                        <div class="drop-down__tab">
                            <div class="img img--center tab__icon">
                                <img :src="require(`./../../../static/BlockProject/${project.icon}`)" alt="project-icon"/>
                            </div>
                            <div class="tab__title">
                                <p class="text text--bold">{{project.title}}</p>
                            </div>
                            <div class="img img--center tab__arrow">
                                <img src="~/static/Icons/icon_arrow-bottom_drop-down.png" alt="bottom-arrow"/>
                            </div>
                        </div>
                        <div class="drop-down__border">
                            <div class="drop-down__border_start"></div>
                            <div class="drop-down__border_arrow"></div>
                            <div class="drop-down__border_end"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box__section box__section--inline box__section--reverse">
                <div class="box__img--half img img--center project__img">
                    <img :src="require(`./../../../static/BlockProject/${project.img}`)" alt="project"/>
                </div>
                <div class="box__section box__section--half project__changeable-content">
                    <h2 class="title project__subtitle">{{project.title}}</h2>
                    <p class="text">{{project.content}}</p>
                    <div class="list project__list">
                        <ul v-for="(li, index) in project.list" :key="index" class="project__list-element">
                            <li class="text project__li">{{li}}</li>
                        </ul>
                    </div>
                    <h3 class="text text--bold project__note-title">{{project.noteTitle}}</h3>
                    <p class="text text--normal project__note-text">{{project.noteContent}}</p>
                    <div class="btn btn--referse btn__project" @click="handleCustomCapabilities">
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
            this.project = this.projects.find(project => project.id == projectId)
        },
        handleCustomCapabilities() {
            console.log('handleCustomCapabilities')
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--project {
        padding-top: 120px;
    }
    .title {
        margin-bottom: 20px;
    }
    .project__title {
        margin-bottom: 60px;
    }
    .project__tabs {
        margin-bottom: 65px;
    }
    .project__drop-down {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        &:hover {
            cursor: pointer;
        }
        &:hover .drop-down__border {
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
        &:hover .drop-down__content {
            border: none;
        }
    }
    .drop-down__content {
        padding: 0 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid $darkColor;
    }
    .drop-down__tab {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tab__icon, .tab__title, .tab__arrow {
        display: flex;
        align-items: center;
        padding: 0 10px;
    }
    .tab__icon {
        width: 10%;
        justify-content: flex-end;
    }
    .tab__title {
        width: 85%;
        justify-content: center;
    }
    .tab__title p {
        letter-spacing: 0;
    }
    .tab__arrow {
        width: 5%;
    }
    
    .project__li {
        list-style: none;
    }
    .project__list {
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
    .project__list-element {
        margin: 0;
        padding: 0;
    }
    .project__subtitle {
        font-size: 36px;
        margin-bottom: 20px;
    }
    .project__note-title {
        font-size: 22px;
        margin-top: 90px;
        margin-bottom: 0;
    }
    .project__note-text {
        margin-bottom: 70px;
    }
    .btn__project {
        width: 250px;
    }
    .drop-down__border {
        display: flex;
        width: 100%;
        height: 10px;
        height: 7px;
        opacity: 0;
        .drop-down__border_start {
            background: linear-gradient(to right, #ffd86a, #fff8e4);
            width: 50%;
        }
        .drop-down__border_arrow {
            border: solid #fff8e4;
            border-width: 0 5px 5px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(45deg);
        }
        .drop-down__border_end {
            background: linear-gradient(to right, #fff8e4, #b4e2ff);
            width: 50%;
        }
    }
    .project__img {
        align-items: flex-start;
        justify-content: flex-end;
        padding-top: 30px;
    }
    .project__list {
        margin-left: 22px;
    }
</style>