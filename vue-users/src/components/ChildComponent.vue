<template>
    <h1>This is Child Component</h1>
    <div style="display:flex">
        
        <v-card
        width="600"
        variant="elevated"
        color="indigo-darken-3"
        title="Parent to Child Component Communication"
        class="pt-4 pb-4 mx-4 mt-4"
        >
            <h4 style="text-align: left;padding-left: 15px;">{{ data.name }}</h4>
            <h4 style="text-align: left;padding-left: 15px;">{{ data.email }}</h4>
            <h4 style="text-align: left;padding-left: 15px;">{{ data.city }}</h4>
            <!--Pass function from Parent Component to child Component-->
            <v-btn variant="flat" class="mt-2" @click="getdata()">Get Employee Data</v-btn>

        </v-card>
        
        
        <v-card
        width="600"
        variant="elevated"
        color="indigo-darken-3"
        title="Parent to Child Component Communication"
        class="pt-4 pb-4 mx-4 mt-4"
        >
            <!--Pass data from child Component to Parent Component-->

        <v-btn variant="flat" @click="getUsername(Username)">Send UserName from Child To Parent</v-btn>

        </v-card>
        
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props : {
            //Pass Data Object and function from Parent Component to child component
            data:Object,
            getdata:Function,

            //pass data from child to parent component
            getUsername: Function
        },
        data () {
            return {
                Username: "Pritica"
            }
        }
    }
</script>

<style>

</style>