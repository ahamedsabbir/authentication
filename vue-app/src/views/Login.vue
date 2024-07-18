<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center">Login</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password" required>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe">
                                <label class="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false
        }
    },
    methods: {
        handleSubmit() {
            // Here you would typically call an API to authenticate the user
            console.log('Login attempted', {
                email: this.email,
                password: this.password,
                rememberMe: this.rememberMe
            })
            // After successful login, you might want to redirect the user or update the app state
        }
    }
}
</script>