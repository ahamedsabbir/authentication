<template>
    <h1>Dashboard</h1>
</template>

<script>
import BsSidebar from '../components/BsSidebar.vue';
import Sidebar from '../components/BsSidebar.vue'

export default {
    name: 'Dashboard',
    components: {
        BsSidebar
    },
    methods: {
        toggleMenu() {
            document.querySelector("#wrapper").classList.toggle("toggled");
        }
    }
}
</script>

<style scoped></style>