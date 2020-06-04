<template>
    <div class="box__wrap box__wrap--padding box__wrap--block-team">
        <div class="box box--column">
            <h1 class="title text--center">A team plugged into yours </h1>
            <div class="box__section box__section--inline box__section--block-team">
                <div v-for="(worker, index) in team" :key="index" class="block-team__single-worker" >
                    <BlockTeamWorker :worker="worker" />
                </div>
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
    .box__wrap--block-team {
        padding-bottom: 40px;
    }
    .title {
        margin-bottom: 100px;
    }
    .box__section--block-team {
        width: 100%;
        flex-wrap: wrap;
    }
    .block-team__single-worker {
        width: 33%;
    }
</style>