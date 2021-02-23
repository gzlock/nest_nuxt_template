export default function ({ $axios }) {
  if (process.client) {
    const protocol = window.location.protocol
    const hostname = window.location.hostname
    const url = `${protocol}//${hostname}`
    console.log('axios baseUrl', url)
    $axios.defaults.baseURL = url
  }
}