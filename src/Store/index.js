import { createStore } from "vuex";

export default createStore({
  state:{
   test: [1,2,3,4,5]
  },
  mutations:{

  },
  actions:{

  },
  getters:{
    getTest(state){
      return state.test
    }
  },
  modules:{

  }

})
