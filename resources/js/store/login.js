import router from '../router/index';

const state = {
  user: {},
  isAuth: false
}

const getters = {}

const mutations = {
  setDupError(state, judge) {
    state.duplication = judge
  },
  setUser(state, user) {
    state.user = user
  },
  SET_IS_AUTH(state, value) {
    state.isAuth = value;
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
      localStorage.setItem("auth", "ture");
      commit('setUser', response.data.user);
      commit('SET_IS_AUTH', true);
      router.push("/");
   })
   .catch(error => {
    alert('ログインに失敗しました。');
    });
  },
  async register({commit}, loginInfo) {
    await axios.get('/sanctum/csrf-cookie')
    axios.post('/api/register', {
      name: loginInfo.name,
      email: loginInfo.email,
      password: loginInfo.password,
    })
    .then(response => {
      console.log(response)
      localStorage.setItem("auth", "ture");
      router.push("/");
   })
   .catch(error => {
    alert('ログインに失敗しました。');
    });
  },

   getUser({commit}, loginInfo) {
    axios.get('/api/user')
    .then(res => {
      console.log(res);
      commit('setUser', res.data);
      commit('SET_IS_AUTH', true);
    })
    .catch(e => {
      console.log(e.response);
      commit('setUser', null);
      commit('SET_IS_AUTH', false);
    })
  },
  logout({commit}) {
    axios.post('/logout')
    .then(res => {
      localStorage.removeItem("auth");
      commit('setUser', null);
      commit('SET_IS_AUTH', false);
      router.push("/auth/login");
    })
  },
}

function isLoggedIn() {
  return localStorage.getItem("auth");
}



export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
