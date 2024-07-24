<template>
    <h1>Dashboard</h1>
    <p>Name:- {{ auth.name }}</p>
    <p>Role:- {{ auth.role }}</p>
    <p>Token:- {{ $store.state.auth.token }}</p>
    <p>Email:- {{ $store.getters.allAuth.email }}</p>
    <button @click="clickHandel">Change Name</button>
    <button @click="clickLogout">logout</button>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'Dashboard',
    methods: {
        clickHandel(){
            this.$store.dispatch('callNameChange', 'kamal');
        },
        async clickLogout(){
            try {
                axios.defaults.baseURL = this.$config.ApiUrl
                const token = this.$store.state.auth.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.post('/logout', {token: token})
                this.$store.dispatch('callAuth', {});
                alert(response.data.msg || 'Student added successfully');
                this.$router.push('/login');
            } catch (error) {
                alert(error.response.data.msg || 'Error adding student')
                console.error('Error fetching data:', error)
            }
        }
    },
    computed: {
        ...mapState(['auth'])
    }
}
</script>

<style scoped></style>