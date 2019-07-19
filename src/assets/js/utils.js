import Cookies from 'js-cookie';
import Vue from 'vue';

class Utils {
    constructor() {
        this.env = process.env.NODE_ENV;
    }
    static ajaxUrl(native) {
        if (native) {
            return this.env === 'development' ?
                'https://debug.talkingdata.com/lbs/smartselect/api/statistics' :
                this.env === 'production'
                //production环境
                ?
                'https://api.talkingdata.com/lbs/smartselect/admin'
                //gray环境
                :
                'https://debug.talkingdata.com/lbs/smartselect/api/statistics';
        } else
            return this.env === 'development' ?
                'https://debug.talkingdata.com/lbs/smartselect/api/dataservice' :
                this.env === 'production'
                //production环境
                ?
                'https://api.talkingdata.com/lbs/smartselect/dataservice'
                //gray环境
                :
                'https://debug.talkingdata.com/lbs/smartselect/api/dataservice';

    }
   
    static transformRequest(data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret;
    }

    //构造request请求,native = true 表示调用接口位于权限后台，为false表示调用接口为智选接口
    static makeRequest(config, native = true) {
        //url可根据环境配置或者config传入
        let basicUrl = this.ajaxUrl(native);
        config.url = basicUrl + config.url;

        const defaults = {
            method: 'get',
            headers: {
                'TD-Smart-Choice-Token': Cookies.get('TD-Smart-Choice-Token'),
                'TD-Smart-Choice-UserId': Cookies.get('TD-Smart-Choice-UserId'),
            },
        };

        const request = _.merge(defaults, config);

        return request;
    }

    /**
     * [千位分隔符]
     * @param  {[type]} [number]
     * @return {[type]} [string]
     */
    static milliFormat(num) {
        return num && num.toString()
            .replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }
    /**
     * [字符串转base64]
     * @param  {[type]}  [string]
     * @return {[type]}     [string]
     */
    static encode(val) {
        return btoa(unescape(encodeURIComponent(val)))
    }

    /**
     * [base64转字符串]
     * @param  {[type]}  [string]
     * @return {[type]}     [string]
     */
    static decode(val) {
        return decodeURIComponent(escape(atob(val)))
    }

    static getRoles() {
        return Cookies.get('roles')
    }

    /*
    * 下载文件请求：
    * @param  {url} String 请求地址
    * @param  {options} Object form键值对
    * @param {
        native:true 表示调用接口位于权限后台， 为false表示调用接口为智选接口
    }
    */
    static async download(url = '', options = {}, native = true, method = 'post') {
        let form = new FormData();
        let array = Object.keys(options);
        array.map(item => {
            form.append(item, options[item]);
        });
        let config = {
            url: url,
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //转成二进制，一定要加，不加文件无法打开
            responseType: 'blob',
        }
        if (array.length > 0)
            config['data'] = form;
        return await Vue.prototype.$axios(this.makeRequest(config, native));
    }

    /*
     * 下载文件流：
     * @param  {datas} String 数据内容
     * @param  {title} String 下载文件名称
     */
    static exportExcel(datas, title) {
        //调用成功，在html中创建一个a元素
        let aTag = document.createElement('a');
        //创建一个blob对象
        let blob = new Blob([datas], {
            //Excel文件版本
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
        }); // 这个content是下载的文件内容，自己修改
        if (title)
            aTag.download = title; // 下载的文件名
        aTag.href = URL.createObjectURL(blob); //创建一个URL对象
        aTag.click();
        URL.revokeObjectURL(blob); //释
    }

}

export default Utils;
