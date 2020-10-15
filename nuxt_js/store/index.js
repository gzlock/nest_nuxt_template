export const state = () => ({
  admin: null,
})

export const mutations = {
  SET_ADMIN (state, admin) {
    console.log('SET_ADMIN', admin)
    state.admin = admin
  },
}
