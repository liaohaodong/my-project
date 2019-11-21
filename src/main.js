import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Icon } from 'vant';
Vue.use(Icon);
import { Image } from 'vant';
Vue.use(Image);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Search } from 'vant';
Vue.use(Search);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { List } from 'vant';
Vue.use(List);
import waterfall from 'vue-waterfall2'
Vue.use(waterfall);

(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 720) {
              docEl.style.fontSize = '100px';
          } else {
              docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
          }
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

