<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent='login' ref="form">
        <v-text-field 
          prepend-icon="mdi-account-circle" 
          label="メールアドレス"
          v-model="loginInfo.email"
          />
        <v-text-field 
          prepend-icon="mdi-lock" 
          append-icon="mdi-eye-off" 
          label="パスワード" 
          v-model="loginInfo.password"
          />
          <v-card-actions>
            <v-btn class="info" type="submit">ログイン</v-btn>
          </v-card-actions>
      </v-form>
    </v-card-text>


     <v-btn class="info" @click="github">githubでログインする</v-btn>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(
      "login",
      {
        login(dispatch) { dispatch("login", this.loginInfo)},
      }
    ),
    github() {
      axios.get('/login/github')
    }
  }
}
</script>

<style>

</style>
