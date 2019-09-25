<template lang="pug">
  .row
    .col-lg-10
      | {{ todoItem.title }}
    .col-lg-2.flex.justify-end
      q-btn(
        @click="destroy"
        size="sm"
        color="brown-4"
        icon="fas fa-trash-alt")
</template>

<script>
  export default {
    props: {
      todoItem: {
        type: Object,
        required: true
      }
    },
    methods: {
      destroy () {
        this.$backend.items.destroy(this.todoItem.id)
          .finally(() => this.$emit('destroyed'))
      }
    }
  }
</script>

<style scoped>
  button {
    margin-left: 25px;
  }
</style>
