import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
import About from './pages/About'
import Projects from './pages/projects'
import Contact from './pages/Contact'
const router = new VueRouter({
  mode:'history',
  routes:[
      {
          path:'/about',
          name:'about',
          component:About
      },
      {
        path:'/projects',
        name:'projects',
        component:Projects
      },
      {
        path:'/contact',
        name:'contact',
        component:Contact
      },
]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
