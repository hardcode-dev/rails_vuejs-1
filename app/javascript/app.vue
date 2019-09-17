<template lang="pug">
  div(v-if="loading")
    p Загрузка
  div(v-else)
    div(v-if="error")
      p Ошибка
    div(v-else)
      input(v-model="title")
      button(@click="addTodoItem") Add todo

      transition-group(name="list")
        TodoItem(
          class="list-item"
          :todoItem="todoItem"
          v-for="todoItem in todoList"
          :key="todoItem.id"
          @deleteTodoItem="deleteTodoItem"
          )

          template(v-slot:default)
            | Название:
          template(v-slot:remove="props")
            RemoveButton(:id="props.id" :status="props.status" @deleteTodoItem="deleteTodoItem")
</template>

<script>
  import { backend } from 'app/backend'
  import TodoItem from 'app/components/TodoItem'
  import RemoveButton from 'app/components/RemoveButton'

  export default {
    data: function () {
      return {
        loading: true,
        error: false,
        title: '',
        todoList: []
      }
    },
    created: function() {
      this.fetchItems()
    },
    methods: {
      fetchItems() {
        backend.items.index()
          .then((response) => this.todoList = response.data)
          .catch(() => this.error = true)
          .finally(() => this.loading = false)
      },
      addTodoItem() {
        let params = { title: this.title }
        backend.items.create(params)
          .finally(() => {
            this.fetchItems()
            this.title = ''
          })
      },
      deleteTodoItem(id) {
        backend.items.destroy(id)
          .finally(() => this.fetchItems())
      }
    },
    components: {
      TodoItem,
      RemoveButton
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

  .list-item {
    display: block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
