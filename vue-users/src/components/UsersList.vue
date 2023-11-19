<template>
    <v-card
    flat
    title="Users"
  >
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="this.$store.state.Users"
      :search="search"
    ></v-data-table>
  </v-card>
  </template>
  
  <script>
  import { mapState } from "vuex";
    export default {
        name: 'UsersList',
        data() {
            return{
                search: '',
                page: 1,
        headers: [
          {
            align: 'center',
            key: 'name',
            sortable: true,
            title: 'Name',
          },
          { align: 'center', key: 'username', title: 'Username' },
          { align: 'center', key: 'phone', title: 'Contact Number' },
          { align: 'center', key: 'company.name', title: 'Company Name' },
          { align: 'center', key: 'address.city', title: 'City' },
          { align: 'center', key: 'website', title: 'Website' },
        ],
            }
        },
        mounted(){
            this.$store.dispatch('loadposts')
        },
        computed: {
            ...mapState([
                'Users'
            ])
        }
    }

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  