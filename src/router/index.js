import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
