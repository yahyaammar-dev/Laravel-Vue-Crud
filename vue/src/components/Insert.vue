<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Insert New Number</h2>
      </div>
      <form class="mt-8 space-y-6" @submit="formSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input v-model="user.name" id="name" name="name" type="text" autocomplete="name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
          </div>
          <div>
            <label for="tel" class="sr-only">Phone</label>
            <input v-model="user.tel" id="tel" name="tel" type="tel" autocomplete="tel" pattern="[0-9]{4}-[0-9]{7}" 
            placeholder="0334-5413268" required="" 
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {{isEdit ? "Update":"Save"}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import store from '../store/index.js'

export default {
    data() {
        return {
            user:{
                name: "",
                tel: ""
            }
        }
    },
    computed :{
        isEdit(){
            return store.state.isEdit
        }
    } ,
    methods: {
        formSubmit(ev){
            ev.preventDefault();
            if(!store.state.isEdit){
                axios
                .post('http://localhost:8001/api/insert',this.user)
                .then(response => (
                    store.commit('loadItems')
                ))
            }else{
                this.user.id = store.state.id;
                axios
                .post('http://localhost:8001/api/update',this.user)
                .then(response => (
                    store.commit('loadItems')
                )) 
            }
        }
    }
}
</script>