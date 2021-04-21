<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>login-youtube</title>
    </head>
    <body>
        <div id="app">
          <v-app>
              <app-header class="mb-3 "></app-header>
              <v-container>
               <router-view></router-view>
             </v-container>
          </v-app>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>