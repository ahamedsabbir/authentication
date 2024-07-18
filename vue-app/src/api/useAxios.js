import { ref } from 'vue'
import axios from 'axios'

export function useAxios() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const getData = async (url, method = 'get', payload = null) => {
    loading.value = true
    error.value = null

    try {
      axios.defaults.baseURL = $config.ApiUrl
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      let response

      if (method === 'get') {
        response = await axios.get(url)
      } else if (method === 'post') {
        response = await axios.post(url, payload)
      } else {
        throw new Error('Unsupported HTTP method')
      }

      data.value = response.data
    } catch (err) {
      console.error('Error fetching data:', err)
      error.value = err.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, getData }
}