<template>
  <div>
   <v-dialog :value="dialog"
    persistent  
    max-width="592" >
     <v-container class="pa-8" style="background:#fff">
       <v-row v-if="controlContainer">
         <v-col cols="12" class="pa-0 ">
           <p class="mb-8 font-weight-bold">Excluir Naver</p>
         </v-col>
         <v-col cols="12" class="pa-0">
           <p class="mb-8">Tem certeza que deseja excluir este Naver?</p>
         </v-col>
         <v-col cols="12" class="d-flex justify-end pa-0">
           <v-btn 
           min-width="176" 
           min-height="40" 
           outlined 
           class="mr-6" 
           @click="closeModal">
           Cancelar
           </v-btn>
           <v-btn 
           min-width="176" 
           min-height="40" 
           dark
           >
             Excluir
           </v-btn>
         </v-col>
       </v-row>
       <v-row v-else>
         <v-col cols="12"  class="pa-0 d-flex justify-end">
           <v-icon @click="closeModal">mdi-close</v-icon>
         </v-col>
          <v-col cols="12" class="pa-0 ">
           <p class="mb-8 font-weight-bold">Naver excluído</p>
         </v-col>
         <v-col cols="12" class="pa-0">
           <p class="mb-8">Naver excluido com sucesso!</p>
         </v-col>
       </v-row>
     </v-container>
   </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialog:true,
      controlContainer:true
    }
  },
  methods:{
    closeModal(){
      this.dialog = false
      this.controlContainer = true 
      this.$nuxt.$options.router.push('/')
    }
  }
}
</script>
