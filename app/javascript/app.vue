<template>
  <div>
    <input v-model="title">
    <button @click="addTodo">Add todo</button>
    <todo :title="todo.title" v-for="todo in list" @deleteTodo="deleteTodo"></todo>
  </div>
</template>

<script>
  import Todo from 'app/components/todo'

  export default {
    data () {
      return {
        title: '',
        list: [
          {
            title: 'My first todo'
          }
        ]
      }
    },
    computed: {
    },
    watch: {
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
