<template>
  <div>
      <h1>Home Component</h1>
      <p>ログインしたユーザーしか見れないページにしたい</p>
      <p>ログインユーザー名：{{user.name}}</p>
      <p>ログインユーザーメールアドレス：{{user.email}}</p>
      <v-btn
      small
      fab
      class="ml-5"
      @click="print">
        <v-icon>print</v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async getUser() {
       await this.$store.dispatch('login/getUser')
      //  console.log(this.$store.state.login.user);
      //  this.user = this.$store.state.login.user
    },
     print() {
      window.print()
    },
  },
  computed: {
    user() {
      return this.$store.state.login.user
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
