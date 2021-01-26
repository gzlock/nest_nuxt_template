import { Middleware } from '@nuxt/types'
import axios from 'axios'

const auth: Middleware = async ({ route, store }) => {
  console.log('auth', route.path)
  if (route.path.startsWith('/admin')) {
    // vuex中已经有admin对象，则跳过验证
    if (store.state.admin) return
    // 否则使用ajax从端口读取判断是否
    const res = await axios.get('/api/admin')
    store.commit('SET_ADMIN', res.data)
  }
}

export default auth
