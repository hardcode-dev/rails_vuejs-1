<template lang="pug">
  .row
    .col-lg-9
      | {{ todoItem.title }}
    .col-lg-3.flex.justify-end.no-wrap
      q-btn(
        @click="show"
        size="sm"
        color="brown-4"
        icon="fas fa-info")
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
      show () {
        this.$router.push({ name: 'Todo', params: { id: this.todoItem.id } })
      },
      destroy () {
        this.$backend.items.destroy(this.todoItem.id)
          .finally(() => this.$emit('destroyed'))
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../quasar/quasar.variables'
  button
    margin-left 25px
    background-color $green !important
</style>
