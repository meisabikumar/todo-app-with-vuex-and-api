import axios from "axios";

const state = {
    todos:[
        {
            id:1,
            title:'Todos One'
        },
        {
            id:2,
            title:'Todos Two'
        },
    ]
};

const getters = {
    allTodos:(state)=>state.todos
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
