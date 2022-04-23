import {createStore} from 'vuex'
import axios from "axios";


const store = createStore({
    state: {
        list : [],
        isEdit: false,
        id : Number
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        loadItems(state){
            axios
            .get('http://localhost:8001/api/all')
            .then(response => (
                this.state.list = response["data"]
            ))
        },
        isEditFun(state, id){
            this.state.isEdit = !this.state.isEdit;
            this.state.id = id
        }
    },
    modules: {

    }
})

export default store;