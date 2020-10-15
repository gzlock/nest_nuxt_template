import { Middleware } from '@nuxt/types'
import axios from 'axios'

const auth: Middleware = async ({ route, store }) => {
  // 已经有admin名称，则跳过验证
  if (store.state.admin) return
  const res = await axios.get('/api/')
  store.commit('SET_ADMIN', res.data)
}

export default auth
