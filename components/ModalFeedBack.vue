<template>
  <div>
   <v-dialog :value="dialog"
    persistent  
    max-width="592" >
     <v-container class="pa-8" style="background:#fff">
       <v-row >
         <v-col cols="12"  class="pa-0 d-flex justify-end">
           <v-icon @click="closeModal">mdi-close</v-icon>
         </v-col>
          <v-col cols="12" class="pa-0 ">
           <p class="mb-8 font-weight-bold">{{title}}</p>
         </v-col>
         <v-col cols="12" class="pa-0">
           <p class="mb-8">{{message}}</p>
         </v-col>
       </v-row>
     </v-container>
   </v-dialog>

  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    }
  },

  data(){
    return{
      dialog:true,
    }
  },
  methods:{
    closeModal(){
      this.dialog = false
    }
  }
}
</script>
