<template>
    <div class="orders">
		<keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>

export default {
    data() {
        return {
        	
        }
    },
}
</script>

<style lang="scss" scoped>
.orders {
    height:100%;
}
</style>