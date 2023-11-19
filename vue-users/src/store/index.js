import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    test: 'test 123...',
    Users:[],
    errorMessage: ''
  },
  getters: {
  },
  actions: {
    loadposts({commit}) {
      console.log("load posts...")
       // Make get request to the API Endpoint
      axios
    .get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        console.log(response.data)
                        // After data is retrieved, we update the Users Array
                        this.Users = response.data
                        // let Users = response.data
                        commit('SET_USERS', this.Users) 
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMessage = "There is an Error in Retrieving Data!!!"
                    })
    }
  },
  mutations: {
    SET_USERS(state, Users) {
      state.Users = Users
    }
  },
  modules: {
  }
})
