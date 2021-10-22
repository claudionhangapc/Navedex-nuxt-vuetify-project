<template>
  <div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >

      <v-container class="class-container">
        <v-row class="pl-3 pr-3 d-flex align-center mb-7">
          <label for="" style=" height:20px;
              width:11px">
              <NuxtLink to="/">
                <v-img
                  src="/img/vector.svg"
                ></v-img>
              </NuxtLink>
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
                :rules="rules.nome"
                v-model="naver.name"
                autofocus
                hide-details
                flat
                height="40"
                width="280"
                >
              </v-text-field>
            </div>
            <div class="mb-8 input-width">
              <p class="ma-0 text-body-2 mb-1">Idade</p>
              <v-menu
              v-model="menu1"
              :close-on-content-click="false"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field 
                      class="pa-0 ma-0 input-border" 
                      outlined
                      label="Idade"
                      solo
                      dense
                      hide-details
                      autofocus
                      v-bind="attrs"
                      v-on="on"
                      flat
                      height="40"
                      @click:clear="date = null"
                      :rules="rules.idade"
                      :value="naver.birthdate"
                      slot="activator">
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="naver.birthdate"
                  @change="menu1 = false"
                ></v-date-picker>
            </v-menu>
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
                v-model="naver.project"
                flat
                :rules="rules.projeto"
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
                v-model="naver.job_role"
                flat
                :rules="rules.cargo"
                height="40"
                >
              </v-text-field>
            </div>
            <div class="mb-8 input-width">
              <p class="ma-0 text-body-2 mb-1">Tempo de empresa</p>
              <v-menu
              v-model="menu2"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field 
                    class="pa-0 ma-0 input-border" 
                    outlined
                    label="Tempo de empresa"
                    solo
                    dense
                    hide-details
                    autofocus
                    v-bind="attrs"
                    v-on="on"
                    flat
                    :rules="rules.tempoEmpresa"
                    height="40"
                    @click:clear="date = null"
                    :value="naver.admission_date"
                    slot="activator">
                </v-text-field>
              </template>
              <v-date-picker
                v-model="naver.admission_date"
                @change="menu2 = false"
              ></v-date-picker>
            </v-menu>
            </div>
            <div class="mb-8 input-width">
              <p class="ma-0 text-body-2 mb-1">URL da foto do Naver</p>
              <v-text-field 
                class="pa-0 ma-0 input-border" 
                outlined
                label="URL da foto do Naver"
                solo
                v-model="naver.url"
                dense
                hide-details
                autofocus
                flat
                :rules="rules.url"
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
                @click="validationForm">
                Salvar
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <modal-feed-back  v-on:change="closeModal" :dialog="dialog" title="Naver criada" message="Naver criada com sucesso!"/>
      </v-container>
     </v-form>    
  </div>
    
</template>
<script>
  export default {
    data(){
      return{
        valid: true,
        dialog:false,
        naver:{
          job_role:null,
          admission_date:null,
          birthdate:null,
          project:null,
          name:null,
          url:null,
        },
        menu2: false,
        menu1: false,
        rules:{
          nome:[
            v => !!v || 'Nome é obrigatório',
          ],
          idade:[
            v => !!v || 'Idade é obrigatório',
          ],
          projeto:[
            v => !!v || 'Projeto é obrigatório',
          ],
          cargo:[
            v => !!v || 'Cargo é obrigatório',
          ],
          tempoEmpresa:[
            v => !!v || 'Tempo na empresa é obrigatório',
          ],
          url:[
            v => !!v || 'Url da foto é obrigatório',
          ],
        }
      }
    },
    methods:{
      createNaver(){
        this.formatDateToDB()
        this.$store.dispatch('naver/create', this.naver)
        this.dialog = true
      },

      closeModal(value){
        this.dialog = value
      },

      validationForm(){
        if(this.$refs.form.validate()){
          this.createNaver()
        }
      },

      formatDate(date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },

      formatDateToDB(){
        this.naver.admission_date = this.formatDate(this.naver.admission_date)
        this.naver.birthdate = this.formatDate(this.naver.birthdate)
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


