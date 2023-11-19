<template>
  <div>
  <v-container>
    <v-row justify="space-around" style="margin-top:100px">
      <v-card width="800">
        <v-img
          height="200"
          src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
          cover
          class="text-white"
        >
            <v-card-title class="text-h3 pt-14">
              User Registration
            </v-card-title>
        </v-img>

        <v-card-text>
          <form>
              <v-text-field
                v-model="state.name"
                :error-messages="v$.name.$errors.map(e => e.$message)"
                :counter="10"
                label="Enter Your Name"
                placeholder="eg. John Doe"
                required
                @input="v$.name.$touch"
                @blur="v$.name.$touch"
              ></v-text-field>

              <h3 style="text-align:left">Is the current person minor?</h3>
              <v-container style="display:flex">
              <v-checkbox
                v-model="state.checkbox1"
                :error-messages="v$.checkbox1.$errors.map(e => e.$message)"
                label="Is Minor"
                @change="v$.checkbox1.$touch"
                @blur="v$.checkbox1.$touch"
              ></v-checkbox>
              
              <v-checkbox
                v-model="state.checkbox2"
                :error-messages="v$.checkbox2.$errors.map(e => e.$message)"
                label="Not Minor"
                required
                @change="v$.checkbox2.$touch"
                @blur="v$.checkbox2.$touch"
              ></v-checkbox>
            </v-container>

            <v-container>
              <v-row justify="space-around">
                <v-date-picker
                  color="primary"
                ></v-date-picker>
              </v-row>
            </v-container>

              <v-btn
                class="me-4"
                @click="v$.$validate"
              >
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'

  const initialState = {
    name: '',
    checkbox1: null,
    checkbox2: null,
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    name: { required },
    checkbox1: { required },
    checkbox2: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }

</script>

<style>


</style>