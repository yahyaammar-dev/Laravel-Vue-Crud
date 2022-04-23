<template>
  <div class="flex justify-center flex-col items-center">
    <div>
        <h2 class="mt-10 mb-8 text-center text-3xl font-extrabold text-gray-900">Records</h2>
    </div>
     <div class="max-w-md w-full bg-white rounded-lg lg:w-1/3">
        <ul class="list">
            <li class="flex justify-between p-3 hover:bg-indigo-600 hover:text-white rounded-lg mb-5 shadow-lg" 
            v-for="item in list" :key="item.name">
                <div>
                    <p>{{item.name}}</p>
                    <sub>{{item.phone}}</sub>
                </div>
                <div class="flex items-center">
                    <fa :icon="['fa', 'pen-to-square']" class="mr-4 cursor-pointer" @click="editItem(item.id)"/>
                    <fa :icon="['fa', 'trash']"  class="cursor-pointer" @click="deleteItem(item.id)"/>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>




<script>
import axios from "axios";
import store from '../store/index.js'

export default {
    computed: {
        list(){
            return store.state.list
        }
    },
    created() {
        store.commit('loadItems');
    },
    methods:{
        deleteItem(id){
            axios
            .post(`http://localhost:8001/api/delete/${id}`)
            .then(response => (
                console.log(response)
            ))
            store.commit('loadItems');
            if(this.list.length==1){
                store.commit('isEditFun',id);
            }
        },
        editItem(id){   
            store.commit('isEditFun',id);
        }
    }
}
</script>