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
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.orders {
    height:100%;
}

</style>