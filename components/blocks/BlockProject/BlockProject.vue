<template>
    <div class="box__wrap box__wrap--padding box__wrap--project">
        <div class="box box--column">
            <div class="box__section">
                <h1 class="title">Your project is no place to iterate.</h1>
                <p class="text">That’s why our focus is on creating precisely what you asked for the 
                    first time around - no comprises or surprises. Here’s how:</p>
            </div>
            <div class="box__section box__section--inline">
                <div class="drop-down drop-down__projects" v-for="(project, index) in projects" :key="index">
                    <div @click="handleDropDown(project.id)" class="drop-down__content">
                        <div class="drop-down__title">
                            <div class="img">
                                <img :src="require(`./../../../static/BlockProject/${project.icon}`)" alt="project-icon"/>
                            </div>
                            <p class="text text--bold">{{project.title}}</p>
                            <div class="img">
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
                <div class="box__img--half img img--center">
                    <img src="~/static/BlockProject/product_gradient_01.png" alt="project_img"/>
                </div>
                <div class="box__section box__section--half">
                    <h2 class="title block-project__subtitle">{{project.title}}</h2>
                    <p class="text">{{project.content}}</p>
                    <ul class="list block-project__list" v-for="(li, index) in project.list" :key="index">
                        <li class="list-element text text--normal ">{{li}}</li>
                    </ul>
                    <h3 class="text text--bold block-project__note-title">{{project.noteTitle}}</h3>
                    <p class="text text--normal block-project__note-text">{{project.noteContent}}</p>
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
    .drop-down__projects {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        margin: 20px;
        &:hover .drop-down__border {
            visibility: visible;
            // height: 10px;
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
    .drop-down__title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .block-project__list {
        list-style: none;
        li::before {
            content: "\2022";
            color: $lightColor;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    }
    .block-project__subtitle {
        font-size: 36px;
    }
    .block-project__note-title, .block-project__note-text {
        font-size: 22px;
    }
    .btn__project {
        width: 250px;
    }
    .drop-down__border {
        display: flex;
        width: 100%;
        height: 10px;
        height: 7px;
        visibility: hidden;
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
</style>