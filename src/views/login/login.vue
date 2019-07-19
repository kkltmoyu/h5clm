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
import Cookies from "js-cookie";
import constants from "@/assets/js/constants";

export default {
    name: "login",
    props: {},
    data() {
        return {
            login: {
                username: "",
                password: ""
            }
        };
    },
    method: {
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
            let url = this.$utils.ajaxUrl(true) + this.$resource.login;

            const ax = this.$axios({
                url: url,
                data: userInfo,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                transformRequest: [this.$utils.transformRequest],
                method: "post"
            });

            this.$axios
                .all([ax])
                .then(response => {
                    if (response[0].status === 200) {
                        const data = response[0].data.data;
                        const roles = 'ROLE_ADMIN';
                        //用户名密码正确
                        Cookies.set("username", data.userName, { expires: 1 });
                        Cookies.set("TD-Smart-Choice-Token", data.token);
                        Cookies.set("TD-Smart-Choice-UserId", data.userId);
                        Cookies.set('roles', roles, { expires: 1 });

                        this.setAccountSource(data.source);
                        this.$router.push({
                            name: constants.roles[roles].homePage
                        });
                    } 
                })
                .catch(response => {
                    if (
                        response.response &&
                        response.response["statusText"] &&
                        response.response.statusText === "Unauthorized"
                    ) {
                        Toast({
                            message: "用户名或密码错误，请重新输入",
                            position: "middle",
                            duration: 3000
                        });
                    } else {
                        Toast({
                            message: "服务器连接异常",
                            position: "middle",
                            duration: 3000
                        });
                    }
                });
        },
        setAccountSource(target) {
            let sourceList = constants.accountSourceList;
            let result = sourceList.filter(item => {
                return item.value.toLowerCase() === target.toLowerCase();
            });
            this.setCurrentSource(result[0]);
            Cookies.set("source", JSON.stringify(result[0]), { expires: 1 });
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
