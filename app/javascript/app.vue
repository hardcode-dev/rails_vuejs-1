<template lang="pug">
  div
    q-layout(view="hHh lpR fFf")
      q-header(
        elevated
        class="bg-brown-4 text-white"
        height-hint="98")
        q-toolbar
          q-btn(
            dense
            flat
            round
            icon="fas fa-bars"
            @click="drawer = !drawer")
          q-toolbar-title
            q-avatar.q-mr-md
              img(:src="require('images/logo.jpg')")
            | TODO Application
      drawer(:value="drawer")

      q-page-container
        q-page
          TodoList

</template>

<script>
  import Drawer from 'app/components/shared/Drawer'
  import TodoList from 'app/components/todo/TodoList'

  export default {
    data () {
      return {
        drawer: true,
      }
    },
    components: {
      Drawer,
      TodoList
    }
  }
</script>
