/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

import store from './store';
import VueObserveVisibilityPlugin from 'vue-observe-visibility';

window.Vue.use(VueObserveVisibilityPlugin);
Vue.prototype.$user = User;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-timeline', require('./components/timeline/AppTimeline.vue').default);
Vue.component('app-tweet', require('./components/tweets/AppTweet.vue').default);
Vue.component('app-tweet-username', require('./components/tweets/AppTweetUsername.vue').default);
Vue.component('app-tweet-compose', require('./components/compose/AppTweetCompose.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    el: '#app',
});
