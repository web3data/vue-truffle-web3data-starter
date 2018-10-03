import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
