import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let state = {
    count: 0,
    newList: []
};

let mutations = {
    intCount(){
        state.count++;
    },
    setNews(state, data){
        state.newList = data;
    }
};

const store = new Vuex.Store({
    state,
    mutations
});

export default store;