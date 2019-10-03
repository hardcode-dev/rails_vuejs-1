<template lang="pug">
  div.flex.justify-center(v-if="backendLoading")
    q-spinner-bars(
      size="md"
      color="brown-6")
  div(v-else-if="backendError")
    p Error
  div(v-else)
    p {{ todoItem.created_at }}
    p {{ todoItem.title }}
</template>

<script>
  import loadingMixin from '../../mixins'

  export default {
    data () {
      return {
        todoItem: {
          title: '',
          created_at: ''
        }
      }
    },
    computed: {
      id () {
        return this.$route.params.id
      }
    },
    created () {
      setTimeout(this.fetchItem, 750)
    },
    methods: {
      fetchItem () {
        this.$backend.items.show(this.id)
          .then(({ data }) => this.todoItem = data)
          .catch(() => this.backendError = true)
          .finally(() => this.backendLoading = false)
      }
    },
    mixins: [loadingMixin]
  }
</script>
