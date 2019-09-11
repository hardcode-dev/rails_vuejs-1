<template>
  <div>
    <p v-bind:style="`color: ${color}`">Message: {{ message }}</p>
    <p :style="`color: ${color}`">Reversed message: {{ reversedMessage }}</p>
    <button v-on:click="changeMessage">Change message</button>
    <button @click="resetMessage">Reset message</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'I am message',
      color: 'green'
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    message (newValue, oldValue) {
      console.log(`Message changed from "${oldValue}" to "${newValue}"`)
    }
  },
  methods: {
    changeMessage() {
      this.message = 'I am new message'
    },
    resetMessage() {
      this.message = 'I am message'
    }
  }
}
</script>

<style>
  p {
    font-size: 2em;
  }
  button {
    font-size: 1em;
  }
</style>
