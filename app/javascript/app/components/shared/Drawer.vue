<template lang="pug">
  q-drawer(
    :value="value"
    side="left"
    content-class="bg-brown-3"
    bordered)
    q-scroll-area.fit
      q-list(padding)
        //div(v-for="link in menu" :key="link.route")
        q-item(
          clickable
          :to="{ name: 'Todos' }"
          exact
          v-ripple
          active-class="bg-brown-4")
          q-item-section(avatar)
            q-icon(color="white" name="fas fa-tasks")
          q-item-section
            q-item-label.text-white.text-weight-medium Задачи
</template>

<script>
  export default {
    props: ['value']
  }
</script>