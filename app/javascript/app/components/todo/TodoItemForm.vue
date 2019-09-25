<template lang="pug">
  div
    .text-h6 Новая задача
    q-input.q-pa-sm(
      v-model="todoItem.title"
      label="Название"
      dense
      color="brown-4")
    .q-pa-sm.flex.justify-end
      q-btn(
        @click="createTodoItem"
        color="brown-4") Добавить задачу
</template>

<script>
  export default {
    data () {
      return {
        todoItem: {
          title: ''
        }
      }
    },
    methods: {
      createTodoItem () {
        this.$backend.items.create(this.todoItem)
          .finally(() => {
            this.todoItem = {}
            this.$emit('created')
          })
      },
    }
  }
</script>