import Vue from 'vue'
import Vuex from 'vuex'

// import product from './product'
// import goods from './goods'

// import error from './error'
// import snackbar from './snackbar'
import login from './login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // product,
    // goods,
    // error,
    // snackbar,
    login
  }
})

export default store