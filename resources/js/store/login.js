const state = {
  duplication: false,
}

const getters = {}

const mutations = {
  setDupError(state, judge) {
    state.duplication = judge
  },
}

const actions = {
  async login({commit}, loginInfo) {
    await axios.get('/sanctum/csrf-cookie')
    axios.post('/api/login', {
      email: loginInfo.email,
      password: loginInfo.password,
    })
    .then(response => {
      console.log(response)
   })
   .catch(error => {
    alert('ログインに失敗しました。');
    });
  },
  async register({commit}, loginInfo) {
    console.log(loginInfo);
    axios.post('/api/register', {
      name: loginInfo.name,
      email: loginInfo.email,
      password: loginInfo.password,
    })
    .then(response => {
      console.log(response)
   })
   .catch(error => {
    alert('ログインに失敗しました。');
    });
  },

   getUser({commit}, loginInfo) {
    axios.get('/api/user')
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e.response);
    })
  },
  logout({commit}) {
    axios.post('/logout')
  }
}



export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
