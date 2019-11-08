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
    },
    methods:{
        
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
