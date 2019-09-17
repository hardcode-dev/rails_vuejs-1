import axios from 'axios'

let token = document.head.querySelector('meta[name="csrf-token"]')
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content

const adapter = axios.create({
  baseURL: '/',
  headers: {
    'Accept': 'application/json'
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
