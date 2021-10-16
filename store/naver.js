export const state = ()=>({
  navers:[]
})

export const actions = {

  async fetch({commit}, payload){
    const response = await this.$axios.get('/navers')
    const navers = response.data
    commit('SET', navers)
  },

  async fetchSingle({commit}, id){
    const response = await this.$axios.get(`/navers/${id}`)
    const naver = response.data
    return naver
  },

  async create({commit},payload){
    const response = await this.$axios.post('/navers', payload)
    const naver = response.data
    commit('ADD',naver)
    return naver
  },

  async delete({commit}, id){
    const response =  await this.$axios.delete(`/navers/${id}`)
    const naver = response.data
    commit('DELETE', naver)
    return naver
  }

}

export const mutations = {

  ADD(state,payload){
    state.navers.push(payload)
  },

  SET(state, payload){
    state.navers = payload
  },

  DELETE(state, id){
    const index = state.navers.findIndex(naver => naver.id ===id)
    state.navers.splice(index,1)
  }
}