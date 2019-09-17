<template lang="pug">
  div
    p
      slot
      | {{ todoItem.id }}. {{ todoItem.title }}
      slot(name="remove" :status="todoItem.status" :id="todoItem.id")
        button(@click="deleteTodoItem") Delete
</template>

<script>
  export default {
    props: {
        todoItem: {
          type: Object,
          required: true
        }
      },
    data () {
      return {
        icons: ['check', 'times']
      }
    },
    methods: {
      deleteTodoItem() {
        this.$emit('deleteTodoItem', this.todoItem.id)
      }
    }
  }
</script>

<style scoped>
  button {
    margin-left: 25px;
  }
</style>
