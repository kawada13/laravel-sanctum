<template>
  <div>
    <v-app-bar
      color="blue lighten-2"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title 
        class="display-1" 
        style="cursor: pointer" 
        @click="$router.push({ name: 'home' })"
        >
        Site Logo
        </v-toolbar-title>

      <v-spacer></v-spacer>


      <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="$router.push({ name: 'home' })"
        >
        Home
        </v-toolbar-title>
      <!-- <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="$router.push({ name: 'category-list' })"
        >
        Category List
        </v-toolbar-title>
      <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="$router.push({ name: 'product-list' })"
        >
        Product List  
        </v-toolbar-title> -->
      <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="$router.push({ name: 'login' })"
        >
        Login 
        </v-toolbar-title>
      <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="$router.push({ name: 'register' })"
        >
        Register 
        </v-toolbar-title>
      <v-toolbar-title 
        class="ml-5"
        style="cursor: pointer" 
        @click="logout()"
        >
        Logout 
        </v-toolbar-title>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods:{
    logout() {
      console.log('ログアウト');
      this.$store.dispatch('login/logout')
    }
  }
}
</script>

<style>
</style>
