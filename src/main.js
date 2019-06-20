import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';

import Vue from 'vue';
import TheNavbar from '@/components/TheNavbar';
import App from './App.vue';
import router from './router'; // vue-router instance
import store from './store/'; // vuex store instance

Amplify.configure(aws_exports);

Vue.use(TheNavbar, {router, store});
Vue.use(AmplifyPlugin, AmplifyModules);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
