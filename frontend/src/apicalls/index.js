import axios from 'axios'

const axiosInstance = axios.create({
     baseURL: 'https://programmingquiz.onrender.com',
    headers: {
       'authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default axiosInstance
