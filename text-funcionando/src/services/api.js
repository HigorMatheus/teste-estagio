import axios from ''

const api = axios.create({
    baseURL:"http://localhost:3333"
})

export default api