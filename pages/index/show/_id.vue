<template>
  <div>
   <v-dialog :value="dialog"
    persistent  
    max-width="1006" >
     <v-container >
       <v-row v-show="naver">
         <v-col class="pa-0" cols="12" sm="6">
            <v-img
            max-height="500"
            :lazy-src="naver.url"
            :src="naver.url"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
         </v-col>
         <v-col class="pa-0 " cols="12" sm="6">
             <v-card class="rounded-0 pl-8 pb-7 pr-7">
               <v-row justify="end" class="pt-6">
                    <v-icon @click="closeModal">mdi-close</v-icon>
               </v-row>
               <v-card-text class="pa-0 ">
                 <p class="text-h5 text--primary mb-2">{{naver.name}}</p>
                 <div class="mb-6">{{naver.job_role}}</div>
                 <p class="text-h5 text--primary mb-2">idade</p>
                 <div class="mb-6">{{naver.birthdate |getYears}} anos</div>
                 <p class="text-h5 text--primary mb-2">Tempo na empresa</p>
                 <div class="mb-6">{{naver.admission_date |getYears}} anos</div>
                 <p class="text-h5 text--primary mb-2">Projeto que participou</p>
                 <div class="mb-16">{{naver.project}}</div>
               </v-card-text>
               <v-row class="pt-7">
                 <v-card-actions >
                    <v-btn
                      nuxt
                      :to="`/deletar/${naver.id}`"
                      icon 
                      class="mb-4 "
                      color="#000"
                      small>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                      nuxt
                      :to="`/editar/${naver.id}`"
                      icon 
                      class="mb-4 "
                      color="#000"
                      small>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-card-actions>
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
  
  created(){
    this.fetchSingle()
    
  },

  data(){
    return{
      dialog:true,
      naver:{},
    }
  },
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  methods:{
    closeModal(){
      this.dialog = false 
      this.$nuxt.$options.router.push('/')
    },
    openModal(){
       this.dialog = true
    },
    async fetchSingle(){
      this.naver = await this.$store.dispatch('naver/fetchSingle', this.id)
      this.openModal()
    }
  },
  filters:{
    getYears(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
      }
  }
}
</script>
