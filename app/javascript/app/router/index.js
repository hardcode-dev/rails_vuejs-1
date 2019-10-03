import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const TodoList = () => import('../components/todo/TodoList.vue')

export default new VueRouter({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/', redirect: '/todos' },
    {
      name: 'Todos',
      path: '/todos',
      component: TodoList
    },
    {
      name: 'Todo',
      path: '/todos/:id',
      component: () => import('../components/todo/Todo.vue')
    }
  ]
})