<template>
  <div v-if="loading">
    <p>Загрузка</p>
  </div>
  <div v-else>
    <div v-if="error">
      <p>Ошибка</p>
    </div>
    <div v-else>
      <input v-model="title">
      <button @click="addTodo">Add todo</button>
      <todo :title="todo.title" v-for="todo in list" @deleteTodo="deleteTodo"></todo>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Todo from 'app/components/todo'

  export default {
    data: function () {
      return {
        loading: true,
        error: false,
        title: '',
        list: []
      }
    },
    created: function() {
      axios.get('/list')
        .then((response) => this.list = response.data)
        .catch(() => this.error = true)
        .finally(() => this.loading = false)
    },
    methods: {
      addTodo() {
        this.list.push({ title: this.title })
        this.title = ''
      },
      deleteTodo(title) {
        this.list = this.list.filter((todo) => { if (todo.title !== title) return todo })
      }
    },
    components: {
      Todo
    }
  }
</script>

<style>
  p {
    font-size: 1.4em;
  }
  button {
    font-size: 1em;
  }
</style>
