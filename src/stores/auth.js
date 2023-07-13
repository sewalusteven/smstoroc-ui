import { defineStore } from 'pinia'
import {authClient} from "@/config/httpClient";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    response: {}
  }),
  getters: {
      fetchResponse: (state) => state?.response.data,
  },
  actions: {
     login(requestBody){
       authClient.get('/sanctum/csrf-cookie').then(response => {
           console.log(response)
           authClient.post('/api/login', requestBody).then(res => {
               this.response = res
           }).catch(err => {
               this.response = err.response;
           })
       }).catch(err => {
           this.response = err.response;
       });
     }
  }
} )

