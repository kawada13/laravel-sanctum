<template>
  <div>
      <h1>Home Component</h1>
      <p>ログインしたユーザーしか見れないページにしたい</p>
      <p>ログインユーザー名</p>
  </div>
</template>

<script>
export default {
  methods: {
    getUser() {
       this.$store.dispatch('login/getUser')
    }
  },
  mounted() {
      Promise.all([
        this.getUser()
      ])
    }
}
</script>

<style>
</style>
