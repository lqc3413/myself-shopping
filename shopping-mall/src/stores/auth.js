import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { login, register } from '../api/index'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)

  const loginUser = async (credentials) => {
    const response = await login(credentials)
    user.value = response.user
    token.value = response.token
    isAuthenticated.value = true
    localStorage.setItem('token', token.value)
  }

  const registerUser = async (userData) => {
    const response = await register(userData)
    user.value = response.user
    token.value = response.token
    isAuthenticated.value = true
    localStorage.setItem('token', token.value)
  }

  const logout = () => {
    user.value = null
    token.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
  }

  return { user, token, isAuthenticated, loginUser, registerUser, logout }
})