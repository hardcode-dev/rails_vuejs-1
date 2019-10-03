<template lang="pug">
  q-btn-group(dense unelevated)
    q-btn-dropdown.q-ma-none(
      dense
      flat
      color="brown"
      auto-close
      menu-self="center left")
      q-list
        q-item(
          v-for="action in actions"
          :key="action.name"
          clickable
          @click="apply(action.name)"
          dense)
          q-item-section
            q-item-label {{ action.label }}
</template>

<script>
  export default {
    props: ['actions', 'id'],
    methods: {
      apply (action) {
        if (typeof this[action] === 'function') this[action]()
      },
      edit () {
        this.$router.push({ name: 'todoItemEdit', params: { id: this.id } })
      },
      destroy () {
        this.$backend.items.destroy(this.id)
          .finally(() => this.$emit('changed'))
      }
    }
  }
</script>
