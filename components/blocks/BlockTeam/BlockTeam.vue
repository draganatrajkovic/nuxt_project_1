<template>
    <div class="box__wrap">
        <div class="">
            <h1 class="title">A team plugged into yours </h1>
            <div v-for="(worker, index) in team" :key="index" class="box__team" >
                <BlockTeamWorker :worker="worker" :img="worker.img" />
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
    .box__wrap {
        width: 100%;
    }
    .box__team {
        width: 100%;
        display: flex;
    }

</style>