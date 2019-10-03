import axios from 'axios'
import Vue from 'vue'

let token = document.head.querySelector('meta[name="csrf-token"]')
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content

const adapter = axios.create({
  baseURL: '/',
  headers: {
    'Accept': 'application/json'
  }
})

adapter.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    window.location.href = "/login"
  } else {
    return Promise.reject(error)
  }
})

const backend = {
  items: {
    index: (params) => adapter.get('items', { params: params }),
    create: (params) => adapter.post(`items`, params),
    show: (id) => adapter.get(`items/${id}`),
    destroy: (id) => adapter.delete(`items/${id}`),
  }
}

Vue.prototype.$backend = backend

export {
  backend
}
