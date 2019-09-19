<template>
  <div>
    <p> {{ title }} </p>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      deleteTodo() {
        this.$emit('deleteTodo', this.title)
      }
    }
  }
</script>
