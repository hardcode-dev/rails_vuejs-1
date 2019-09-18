<template lang="pug">
  q-btn(@click="deleteTodoItem") Удалить
</template>

<script>
  export default {
    props: {
      id: Number
    },
    methods: {
      deleteTodoItem() {
        this.$emit('deleteTodoItem', this.id)
      }
    }
  }
</script>