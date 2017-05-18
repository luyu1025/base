/**
 * Created by 12394 on 2017-2-15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  //经纬度
  test:true
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
