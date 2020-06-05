<template>
    <div class="container">
        <BlockSubnav />
        <BlockPendants />
        <PartPagination />
        <BlockProducts />
        <PartPagination />
        <BlockRecentlyViewed />
        <BlockLetsTalk />
    </div>
</template>

<script>
import BlockSubnav from '~/components/blocks/listing/BlockSubnav.vue'
import BlockPendants from '~/components/blocks/listing/BlockPendants/BlockPendants.vue'
import PartPagination from '~/components/parts/PartPagination.vue'
import BlockProducts from '~/components/blocks/listing/BlockProducts/BlockProducts.vue'
import BlockRecentlyViewed from '~/components/blocks/listing/BlockRecentlyViewed.vue'
import BlockLetsTalk from '~/components/blocks/listing/BlockLetsTalk.vue'

export default {
    components: {
        BlockSubnav,
        BlockPendants,
        PartPagination,
        BlockProducts,
        BlockRecentlyViewed,
        BlockLetsTalk
    }
}
</script>