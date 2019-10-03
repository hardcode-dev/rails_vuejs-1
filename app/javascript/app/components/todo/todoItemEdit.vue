<template lang="pug">
  q-dialog(
    :value="true"
    @hide="hide"
    full-width
    full-height)
    q-card
      q-card-section.row.items-center.q-py-sm
        .text-h5 Редактирование
        q-space
        q-btn(color="brown" icon="fas fa-times" flat round dense v-close-popup)
      q-card-section
        p {{ id }}
</template>

<script>
  export default {
    computed: {
      id () {
        return this.$route.params.id
      }
    },
    methods: {
      hide () {
        this.$router.push({ name: 'Todos' })
      }
    }
  }
</script>
