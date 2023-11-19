<template>
  <nav>
    <router-link to="/parent">Parent Component</router-link>
    <router-link to="/UserRegistration">Register</router-link>
  </nav>
  <v-layout>
      <v-app-bar
        color="default"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Vue Js Test</v-app-bar-title>

        <template v-slot:append>

          <div class="mx-4"><router-link to="/parent"><v-btn variant="tonal" >Parent Child Communiction</v-btn></router-link></div>
          <div class="mx-4"><router-link to="/usersList"><v-btn variant="tonal">Users List</v-btn></router-link></div>
          <router-link to="/UserRegistration"><v-btn variant="tonal">User Registration</v-btn></router-link>
        </template>
      </v-app-bar>
    </v-layout>
  <router-view/>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
