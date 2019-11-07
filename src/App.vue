<template>
    <div id="app">
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app',
    components:{
    },
    created(){
        // this.initScale();
    },
    methods:{
        initScale(){
            let dpr = window.devicePixelRatio || 1;
            let viep = document.querySelector('meta[name=viewport]');
            let scal = 1 / dpr;
            console.log('dpr is ',window.devicePixelRatio,',scal is ',scal,',offsetWidth is ',document.documentElement.offsetWidth)
            document.documentElement.style.fontSize = (document.documentElement.offsetWidth/10)*dpr+'px';
            viep.setAttribute('content','width=device-width,initial-scale='+scal+',maximum-scale='+scal+',user-scalable=no');
            
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    height:100%;

    .content {
        width: 100%;
        height: 100%;
    }
}

</style>
<style lang="scss">
@import "./assets/css/public.scss";
</style>
