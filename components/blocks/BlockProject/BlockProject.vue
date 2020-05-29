<template>
    <div class="box__wrap box__wrap--project">
        <div class="box">
            <div class="box__section">
                <h1 class="title">Your project is no place to iterate.</h1>
                <p class="text">That’s why our focus is on creating precisely what you asked for the 
                    first time around - no comprises or surprises. Here’s how:</p>
            </div>
            <div class="box__section--inline" v-for="(project, index) in projects" :key="index">
                <div class="drop-down" @click="handleDropDown(project.id)">
                    <img alt="project-icon_1"/>
                    <p class="text--bold">{{project.title}}</p>
                    <img alt="bottom-arrow"/>
                </div>
            </div>
            <div class="box__section--inline">
                <div class="box__img box__section">
                    <img alt="project_img"/>
                </div>
                <div class="box__section">
                    <h2 class="block-project__subtitle">{{project.title}}</h2>
                    <p class="text">{{project.content}}</p>
                    <ul class="list" v-for="(li, index) in project.list" :key="index">
                        <li class="list-element">
                            {{li}}
                        </li>
                    </ul>
                    <h3 class="block-project__note-title">{{project.noteTitle}}</h3>
                    <p class="block-project__note-text">{{project.noteContent}}</p>
                    <button class="btn btn--reverse-icon" @click="handleCustomCapabilities">
                        {{project.button}}
                    </button>
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
            this.project = projectsService.find(projectId)
        },
        handleCustomCapabilities() {
            console.log('handleCustomCapabilities')
        }
    }
}
</script>

<style lang="scss" scoped>

.drop-down{
    width: 20%;
    margin: 20px;
    background-color: turquoise;
    &:hover {
        background-color: violet;
        cursor: pointer;
    }
}
</style>