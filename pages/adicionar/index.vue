<template>
  <div>
    <v-container class="class-container">
       <v-row class="pl-3 pr-3 d-flex align-center mb-7">
         <label for="" style=" height:20px;
            width:11px">
           <v-img
            src="/img/vector.svg"
          ></v-img>
         </label>
          <h4 class="text-h4 ml-5"> 
             Adicionar Naver
          </h4>   
       </v-row>
      <v-row>
        <v-col class="pl-4 pr-4" cols="12" sm="6">
          <div class="mb-8 input-width mr-0" >
            <p class="ma-0 text-body-2 mb-1">Nome</p>
            <v-text-field 
              class="pa-0 ma-0 input-border " 
              outlined
              label="Nome"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              width="280"
              >

            </v-text-field>
          </div>
          <div class="mb-8 input-width">
            <p class="ma-0 text-body-2 mb-1">Idade</p>
            <v-text-field 
              class="pa-0 ma-0 input-border" 
              outlined
              label="Idade"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              >

            </v-text-field>
          </div>
          <div class="mb-8 input-width">
            <p class="ma-0 text-body-2 mb-1">Projetos que participou</p>
            <v-text-field 
              class="pa-0 ma-0 input-border" 
              outlined
              label="Projetos que participou"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              >

            </v-text-field>
          </div>
        </v-col>
        <v-col class="pl-4 pr-4" cols="12" sm="6">
           <div class="mb-8 input-width">
            <p class="ma-0 text-body-2 mb-1">Cargo</p>
            <v-text-field 
              class="pa-0 ma-0 input-border" 
              outlined
              label="Cargo"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              >

            </v-text-field>
          </div>
          <div class="mb-8 input-width">
            <p class="ma-0 text-body-2 mb-1">Tempo de empresa</p>
            <v-text-field 
              class="pa-0 ma-0 input-border" 
              outlined
              label="Tempo de empresa"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              >

            </v-text-field>
          </div>
          <div class="mb-8 input-width">
            <p class="ma-0 text-body-2 mb-1">URL da foto do Naver</p>
            <v-text-field 
              class="pa-0 ma-0 input-border" 
              outlined
              label="URL da foto do Naver"
              solo
              dense
              hide-details
              autofocus
              flat
              height="40"
              >

            </v-text-field>
          </div>
          <div class="d-flex flex-row-reverse input-width">
             <v-btn 
              width="176"
              class="white--text "
              color="#212121"
              depressed
              height="40"
              @click="createNaver">
              Salvar
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <modal-feed-back title="Naver atualizado" message="Naver atualizado com sucesso!"/>
    </v-container>
      
  </div>
    
</template>
<script>
  export default {
    data(){
      return{
        naver:{
          job_role:'Desenvolvedor',
          admission_date:'19/08/2018',
          birthdate:'12/04/1992',
          project:'Project Backend Test',
          name:'Christian Tavares',
          url:'https://claudionhangapc.com/projetos/navedex/img/eduardo.png',
        }
      }
    },
    methods:{
      createNaver(){
        this.$store.dispatch('naver/create', this.naver)
      }
    }
  } 
</script>

<style scoped>

  .class-container{
     max-width: 590px !important;
  }

   .input-border{
    border: 1px solid #424242 !important;
  }
 
</style>


