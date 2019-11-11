<template>
    <div class="shop_wrapper">
       <div class='img_wrapper'>
           <img :src='data.src' alt=''/>
       </div>
       <div class='info_wrapper'>
           <div class='title'>{{data.name}}</div>
           <div class='row'>
           </div>
           <div class='row'>
               <div class='l'>
                    <span class='send_line'>{{data.send_line}}起送</span>
                    <span class='delivery_fee'>{{data.float_delivery_fee}}</span>
               </div>
               <div class='r'>
                   <span class='time'>{{data.wait}}</span>
                   <span class='distance'>{{data.distance}}</span>
               </div>
           </div>
           <div class='activity'>
               <span v-for='(item) in data.activities' :key='item'>{{item.name}}</span>
           </div>
           <div class='support'>
               <span v-for='(item) in data.supports' :key='item'>{{item.name}}</span>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    props: {
        data: Object
    },
    data() {
        return {
        }
    },
    computed:{
       
    },
    mounted(){
    },
    methods: {
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop_wrapper {
    width:100%;
    font-size:0.5rem;
}
</style>
