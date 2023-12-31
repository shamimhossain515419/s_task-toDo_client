import { useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContact } from '../Component/AuthProvider/AuthProvider'





const axiosSecure = axios.create({
     baseURL: `https://s-task-to-do-setver.vercel.app/`,
})

const useAxiosSecure = () => {
     const { LogOut } = useContext(AuthContact)
     const navigate = useNavigate()

     useEffect(() => {
          axiosSecure.interceptors.request.use(config => {
               const token = localStorage.getItem('access-token')
               if (token) {
                    config.headers.Authorization = `Bearer ${token}`
               }
               return config
          })

          axiosSecure.interceptors.response.use(
               response => response,
               async error => {
                    if (
                         error.response &&
                         (error.response.status === 401 || error.response.status === 403)
                    ) {
                         await LogOut()
                         navigate('/login')
                    }
                    return Promise.reject(error)
               }
          )
     }, [LogOut, navigate, axiosSecure])

     return [axiosSecure]
}

export default useAxiosSecure;

