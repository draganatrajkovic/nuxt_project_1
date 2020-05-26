<template>
    <div>
        <h1>What is Lorem Ipsum?</h1>
        <h2>Test component</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3>Posts:</h3>
        <ul v-for='post in getPosts' :key="post.id"   >
            <li>{{post.title}}</li>
        </ul>
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
    data() {
        return {
            // id: this.$route.params.id
        }
    }, 
    computed: {
        // posts() {
        //     return this.$store.getters.['posts/getPosts']
        // }
        ...mapGetters({
            getPosts: 'posts/getPosts'
        })
    }
}
</script>