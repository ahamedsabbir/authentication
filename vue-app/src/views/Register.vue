<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="form.name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="form.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword"
                                    v-model="form.confirmPassword" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data() {
        return {
            form: {},
            auth: {},
            token: ''
        }
    },
    methods: {
        async handleSubmit() {
            console.log(this.form)
            try {
                axios.defaults.baseURL = this.$config.ApiUrl
                const response = await axios.post('/register', this.form)
                this.auth = response.data.user;
                this.token = response.data.token;
                alert(response.data.msg || 'Student added successfully')
                this.$router.push('/');
            } catch (error) {
                alert(error.response.data.msg || 'Error adding student')
                console.error('Error fetching data:', error)
            }
        }
    }
}
</script>