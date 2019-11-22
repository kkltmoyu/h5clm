<template>
    <div class="main_wrapper">
        <div class='header' v-if='showBack'>
            <i href='javascript:void(0)' class='iconfont icon iconarrow-lift' @click='back'></i>
        </div>
        <div class="content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/views/footer/footer';

export default {
    components:{
        Footer
    },
    data() {
        return {
            showBack:false,
        }
    },
    created() {
        this.init();
    },
    watch:{
        $route(to) {
            this.handlerBack(to);
        },
    },
    methods:{
        init(){
            this.handlerBack(this.$route);
        },
        handlerBack(to){
            this.showBack = to.meta.showBack || false;
        },
        back(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.main_wrapper {
    height:100%;

    .header{
        z-index:100;
        width:100%;
        height:$back-header;
        background: #2185F0;
        color:#fff;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding-left:20px;

        i{
            font-size:0.5rem;
        }
    }
    .content {
        overflow-y:auto;
        width: 100%;
        height: calc(100% - 50px);
    }
}

</style>