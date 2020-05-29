<template>
    <div class="box__wrap">
        <div class="box box--column">
            <h1 class="title">A team plugged into yours </h1>
            <div class="box__section box__section--inline">
                <!-- <div class="box__section box__section--inline box__section--workers"> -->
                    <div v-for="(worker, index) in team" :key="index">
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
        width: 30%;
    }
</style>