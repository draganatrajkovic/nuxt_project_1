<template>
    <div class="box__wrap box__wrap--block-pendants">
        <div class="box">
            <div class="box__section">
                <h1 class="title">Mini Pendants</h1>
            </div>

            <div class="box__section box__section--inline">
                <div class="segment">
                    <ul v-for="(pendant, index) in pendants" :key="index">
                        <div>
                            <h3>{{pendant.title}}</h3>
                            <img alt="arrow-down" />
                            <!-- <img alt="arrow-top" /> -->
                        </div>
                        <ul v-for="(preformance, index) in pendant.preformances" :key="index">
                            <input type="checkbox" /><span>{{preformance}}</span>
                        </ul>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { pendantService } from './PendantsService'
export default {
    data() {
        return {
            pendants: pendantService.all()
        }
    }
}
</script>