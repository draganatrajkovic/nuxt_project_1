<template>
    <div class="box__wrap box__wrap--padding">
        <div class="box box--column">
            <h1 class="title">A team plugged into yours </h1>
            <div class="box__section box__section--inline box__section--workers">
                <!-- <div class="box__section box__section--inline box__section--workers"> -->
                    <div v-for="(worker, index) in team" :key="index" class="single-worker" >
                        <BlockTeamWorker :worker="worker" />
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import BlockTeamWorker from './BlockTeamWorker'
import {teamService} from './TeamService'
export default {
    components: {
        BlockTeamWorker
    },
    data() {
        return {
            team: teamService.all()
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__section--workers {
        width: 100%;
        flex-wrap: wrap;
    }
    .single-worker {
        width: 30%;
    }
</style>