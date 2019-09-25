<template lang="pug">
  .row
    .col-lg-5.q-pa-md
      .text-h6.q-pb-md Список задач
      transition-group(name="list")
        TodoItem.q-pa-sm(
          class="list-item"
          :todoItem="todoItem"
          v-for="todoItem in todoList"
          :key="todoItem.id"
          @destroyed="fetchItems")

    q-separator(vertical)

    .col-lg-5.q-pa-md
      TodoItemForm(@created="fetchItems")

</template>

<script>
  import TodoItem from 'app/components/todo/TodoItem'
  import TodoItemForm from 'app/components/todo/TodoItemForm'

  export default {
    data () {
      return {
        loading: true,
        todoItem: {},
        todoList: []
      }
    },
    created () {
      this.fetchItems()
    },
    methods: {
      fetchItems () {
        this.$backend.items.index()
          .then(({ data }) => this.todoList = data)
          .catch(() => this.error = true)
          .finally(() => this.loading = false)
      }
    },
    components: {
      TodoItem,
      TodoItemForm
    }
  }
</script>

<style>
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