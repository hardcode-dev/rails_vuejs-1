import axios from 'axios'

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
    index: () => adapter.get('items'),
    create: (params) => adapter.post(`items`, params),
    destroy: (id) => adapter.delete(`items/${id}`),
  }
}

export {
  backend
}
