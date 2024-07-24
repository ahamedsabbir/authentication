<template>
    <h1>Profile</h1>
	<img :src="image" style="width:200px; height:200px;"/>
    <p>url:- {{ $store.state.auth.image }}</p>
	<input type="file" @change="handleFileUpload"/>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'Dashboard',
	data(){
		return{
			file: {},
			image: this.$config.ApiStorage + "/" + this.$store.state.auth.image
		}
	},
    methods: {
		async handleFileUpload(e){
			try {
				this.file.image = e.target.files[0]
                axios.defaults.baseURL = this.$config.ApiUrl
                const token = this.$store.state.auth.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.post('/profile/image/' + this.$store.state.auth.id, this.file, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
				this.image = this.$config.ApiStorage + "/" + response.data.image
				this.$store.dispatch('callImageChange', response.data.image);
				console.log(response.data)
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