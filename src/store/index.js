import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const SET_TASKS = 'SET_TASKS'
const SET_PROJECTS = 'SET_PROJECTS'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    projects: [],
  },
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks = payload
    },
    SET_PROJECTS: (state, payload) => {
      state.projects = payload
    },
  },
  actions: {
    getTasks: async ({commit}) => {
      try {
        const {data} = await axios.get(`http://localhost:3000/tasks`)
        commit(SET_TASKS, data)
        console.log(data)
      } catch(e) {
        console.error(e)
      }
    },
    approveTask: async ({commit, dispatch, state}, payload) => {
      const tasks = state.tasks.map(i => {
       if (i.id === payload.id)
        i.status = 'Active'
        return i
      })

      try {
        const randomId =  (Math.random() + 1).toString(36).substring(7);
        await axios.post("http://localhost:3000/projects", {
          id: randomId,
          title: payload.name,
          thumbnail: "https://www.visualdomain.com.au/hubfs/Thumbnails%20with%20play%20(4)-1.jpg",
          producer: "John Smith",
          date: payload.due_date,
          count: 5
        })
        
        // do some patch .. no time :(
        // update state
        commit(SET_TASKS, tasks)
        dispatch('getProjects')

      } catch(e) {
        console.error(e)
      }
    },
    getProjects: async ({commit}) => {
      try {
        const {data} = await axios.get(`http://localhost:3000/projects`)
        commit(SET_PROJECTS, data)
        console.log(data)
      } catch(e) {
        console.error(e)
      }
    },
  }
})
