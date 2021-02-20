import Vue from 'vue';
import vTimeAgo from 'vue-timeago'
Vue.use(vTimeAgo, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'tr',
  locales:{
    tr: require('date-fns/locale/tr')
  }
})