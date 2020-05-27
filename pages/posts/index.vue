<template>
    <div class="posts">
        <h3>Posts:</h3>
        <ul v-for='post in getPosts' :key="post.id"   >
            <li>
                <button @click="singlePost(post.id)">
                    {{post.title}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
    computed: {
    // posts() {
    //     return this.$store.getters.['posts/getPosts']
    // }
        ...mapGetters({
            getPosts: 'posts/getPosts'
        })
    },
    methods: {
        singlePost(postId) {
            this.$router.push('/posts/' + postId)
        }
    }
}
</script>

<style>
    .posts {
        padding: 50px;
        min-height: 80vh;
    
    }
</style>