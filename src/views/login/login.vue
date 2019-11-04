<template>
    <div class="login_wrapper">
        <div class="input_wrapper">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="login.username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.password"></mt-field>
        </div>
        <div class="submit_wrapper">
            <mt-button class="submit" type="default" @click="submitData">submit</mt-button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Cookies from "js-cookie";
import constants from "@/assets/js/constants";
import { Toast,Field,Button } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

export default {
    props: {},
    data() {
        return {
            login: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        check(username, password) {
            if (!username) {
                return false;
            } else {
                if (!password) {
                    return false;
                }
            }
            return true;
        },
        submitData() {
            const username = this.login.username.trim();
            const password = this.login.password.trim();
            let result = this.check(username, password);
            if (!result) return;

            let userInfo = {
                username: username,
                pwd: password
            };
            this.$router.push({
                name:'main'
            })
            // let url = this.$utils.ajaxUrl(true) + this.$resource.login;

            // const ax = this.$axios({
            //     url: url,
            //     data: userInfo,
            //     headers: {
            //         "Content-Type": "application/x-www-form-urlencoded"
            //     },
            //     transformRequest: [this.$utils.transformRequest],
            //     method: "post"
            // });

            // this.$axios
            //     .all([ax])
            //     .then(response => {
            //         if (response[0].status === 200) {
                        
            //             //用户名密码正确
            //             // Cookies.set("username", data.userName, { expires: 1 });
                       
            //         } 
            //     })
            //     .catch(response => {
                    
            //     });
        },
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login_wrapper{
    .submit_wrapper{
        margin-top:20px;
        display:flex;
        justify-content: flex-end;
    }
}
</style>
