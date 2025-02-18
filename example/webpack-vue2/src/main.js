/*
 * @Date: 2025-02-10 18:58:20
 * @LastEditors: xiaoshan
 * @LastEditTime: 2025-02-18 10:55:34
 * @FilePath: /i18n_translation_vite/example/webpack-vue2/src/main.js
 */

import './LangInit/index'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import antD from 'ant-design-vue"'

Vue.config.productionTip = false
// Vue.use(antD);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
// element-tag-marker: 12lm6029
