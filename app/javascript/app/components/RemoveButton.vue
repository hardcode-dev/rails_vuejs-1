<template>
  <button :disabled="done" @click="deleteTodoItem">Удалить</button>
</template>

<script>
  export default {
    props: {
      id: Number,
      status: Number
    },
    computed: {
      done() {
        return this.status === 1
      }
    },
    methods: {
      deleteTodoItem() {
        this.$emit('deleteTodoItem', this.id)
      }
    }
  }
</script>