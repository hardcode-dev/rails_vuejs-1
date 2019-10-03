<template lang="pug">
  q-input.q-pb-md(
    v-model="filter"
    label="Поиск"
    color="brown"
    debounce="300"
    dense)
</template>

<script>
  export default {
    computed: {
      filter: {
        get () {
          return this.$store.state.filter
        },
        set (value) {
          this.$store.commit('updateFilter', value)
        }
      }
    }
  }
</script>
