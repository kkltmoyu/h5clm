<template>
    <div id="app">
        <div class="content">
            <router-view/>
        </div>
        <div class="footer_wrapper">footer</div>
    </div>
</template>

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
        height: 90%;
    }

    .footer_wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100px;
    }
}

</style>
<style lang="scss">
@import "./assets/css/public.scss";
</style>
