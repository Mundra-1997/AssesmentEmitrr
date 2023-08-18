import axios from 'axios'

const axiosInstance = axios.create({
     baseURL: 'https://quiz-gtsj.onrender.com',
    headers: {
       'authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default axiosInstance
