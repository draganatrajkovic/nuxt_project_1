<template>
    <div class="test">
        <div class="title">
            <h1>What is Lorem Ipsum?</h1>
            <h2>Test component</h2>
        </div>
        <div class="content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .test {
        width: 70%;
        .title {
            color: darkred;
            font-size: 1.5rem;
        }

        .content {
            background-color: lightblue;
            border-radius: 5px;
            color: white;
            padding: 10px;
            text-align: center;
            h3 {
                color: 	#0f3461;
            }
            p {
                color: grey;
                padding: 10px;
            }
            ul {
                list-style: none;
                li a {
                    color: darkred;
                    text-decoration: none;
                    margin-left: -40px;
                    &:hover {
                        cursor: pointer; 
                        opacity: 0.7;
                    }
                }
            }
        }

    }
</style>