<template>
    <div class="main_wrapper">
        <div class="content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/views/footer/footer'

export default {
    components:{
        Footer
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.main_wrapper {
    height:100%;

    .content {
        overflow-y:auto;
        width: 100%;
        height: calc(100% - 100px);
    }
}

</style>