<template>
  <div>
   <v-dialog :value="dialog"
    persistent  
    max-width="1006" >
     <v-container >
       <v-row>
         <v-col class="pa-0" cols="12" sm="6">
            <v-img
            max-height="500"
            src="/img/IMG_9945_JULIANO.png"
          ></v-img>
         </v-col>
         <v-col class="pa-0 " cols="12" sm="6">
             <v-card class="rounded-0 pl-8 pb-7 pr-7">
               <v-row justify="end" class="pt-6">
                    <v-icon @click="closeModal">mdi-close</v-icon>
               </v-row>
               <v-card-text class="pa-0 ">
                 <p class="text-h5 text--primary mb-2">Juliano Reis</p>
                 <div class="mb-6">Front-end Developer</div>
                 <p class="text-h5 text--primary mb-2">idade</p>
                 <div class="mb-6">Front-end Developer</div>
                 <p class="text-h5 text--primary mb-2">Tempo na empresa</p>
                 <div class="mb-6">Front-end Developer</div>
                 <p class="text-h5 text--primary mb-2">Projeto que participou</p>
                 <div class="mb-16">Front-end Developer</div>
               </v-card-text>
               <v-row class="pt-11">
                 <v-card-action >
                    <v-btn
                    icon 
                    class="mb-4 "
                    color="#000"
                    small>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                    icon 
                    class="mb-4 "
                    color="#000"
                    small>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-card-action>
               </v-row>
             </v-card>
         </v-col>
       </v-row>
     </v-container>
   </v-dialog>
  </div>
</template>

<script>
export default {
  
  props:{
     dialog:{
       type: Boolean,
       required: true
     }
  },
  data(){
    return{

    }
  },
  methods:{
    closeModal(){
      this.$emit('updateDialog',false)
    }
  }
}
</script>
