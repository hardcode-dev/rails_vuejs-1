<template lang="pug">
  div
    slot
    | {{ todoItem.title }}
    slot(name="remove" :id="todoItem.id")
      button(@click="deleteTodoItem") Delete
</template>

<script>
  export default {
    props: {
      todoItem: {
        type: Object,
        required: true,
        validator () {
          return false
        }
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
