<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vue 3 App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Register' }">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Dashboard' }">Dashboard</router-link>
                    </li>
					<li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'BsNav',

}
</script>