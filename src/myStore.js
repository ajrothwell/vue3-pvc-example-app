// import Vue from 'vue';
// import Vuex from 'vuex';
import mergeDeep from './util/merge-deep';
import pvcStore from '@phila/vue-comps/src/store.js';
// import { pvcStore } from '@cityofphiladelphia/phila-vue-comps';

// when you load vuex from a script tag this seems to happen automatically
// Vue.use(Vuex);

function myCreateStore(config) {

  const initialState = {
    candidates: [],
    addressEntered: null,
    fullScreen: {},
    fullScreenTopicsEnabled: true,
  };

  const mb = {
    state: initialState,
    mutations: {
      setCandidates(state, payload) {
        state.candidates = payload;
      },
      setAddressEntered(state, payload) {
        state.addressEntered = payload;
      },
    }
  }

  // let mergeStore = mb;
  let mergeStore = mergeDeep(mb, pvcStore);
  console.log('mergeStore:', mergeStore);


  // TODO standardize how payloads are passed around/handled
  // return new Vuex.Store({
  //   state: mergeStore.state,
  //   getters: mergeStore.getters,
  //   mutations: mergeStore.mutations
  // });
  return mergeStore;
}

export default myCreateStore;
