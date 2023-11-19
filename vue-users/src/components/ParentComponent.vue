<template>
    <div>
        <h1>This is Parent Component</h1>
        
        <ChildComponent :data="Employee" :getdata="getEmployeeData" :getUsername="getUserName"/>

        <h2>User Name: {{ Username }}</h2>
    </div>
</template>

<script>
    import ChildComponent from './ChildComponent.vue'
    export default {
        name: 'ParentComponent',
        components : {
            ChildComponent,
        },
        data () {
            return {
                Employee: {
                    name: "Pritica Aruldas",
                    email: "pritica.m.aruldas@gmail.com",
                    city: "Pune"
                },
                Username:''
            }
        },
        methods: {
            //pass Parent data to child component
            getEmployeeData () {
                alert("Function called for Get Employee Data!!")
            },
            //pass data from child compnent to parent
            getUserName(Username) {
                // alert(Username)
                this.Username= Username;
            }
        }
    }
</script>

<style>

</style>