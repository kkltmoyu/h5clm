<template>
    <div class="main_wrapper">
        <div class="content">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/views/footer/footer'

export default {
    name: 'Main',
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