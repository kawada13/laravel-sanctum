<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">登録</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent='register' ref="form">
        <v-text-field 
          prepend-icon="mdi-account-circle" 
          label="お名前"
          v-model="loginInfo.name"
          />
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
            <v-btn class="info" type="submit">登録</v-btn>
          </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      loginInfo: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(
      "login",
      {
        register(dispatch) { dispatch("register", this.loginInfo)},
      }
    ),
  }
}
</script>

<style>
</style>
