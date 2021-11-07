<template>
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-container >
      <v-row align="center" justify="center">
        <v-img
          max-height="60"
          max-width="236"
          src="/img/logo.png"
        ></v-img>    
      </v-row>
      <v-row class="pt-10">
        <v-col cols="12" class="pa-0 font-weight-black mb-1">Email</v-col>
        <v-col cols="12"  class="pa-0"> 
          <v-text-field
          v-model='login.email'
          :rules="rules.email"
          placeholder="E-mail"
          outlined
          dense
          full-width
          height="40"
          hide-details
          class="input-border"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col cols="12"  class="pa-0 font-weight-black  mb-1">Senha</v-col>
        <v-col cols="12"  class="pa-0"> 
          <v-text-field
          v-model='login.password'
          :rules="rules.password"
          placeholder="Senha"
          outlined
          dense
          full-width
          height="40"
          hide-details
          class="input-border"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pt-8" v-if="error">
        <v-col cols="12"  class="pa-0"> 
          <v-alert
           dense
           border="1px"
          type="error"
          class="mb-0"
          >
          E-mail ou senha incorreta
        </v-alert>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col cols="12"  class="pa-0">
          <v-btn 
            @click="validationForm"
            class="white--text"
            color="#212121"
            depressed
            height="40"
            block>
            Entrar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  layout: 'public',
  // OR
  data(){
    return{
      login:{
        email:'',
        password:''
      },
      error:false,
      rules:{
          email:[
            v => !!v || 'email é obrigatório',
            this.validateEmail
          ],
          password:[
            v => !!v || 'Nome é obrigatório'
           
          ]
        }
    }
  },
  methods:{
    async userLogin(){
      try{
        const response = await this.$auth.loginWith('local',{
          data:this.login
        })
        this.$auth.setUser(
          {
            id:response.data.id,
            email:response.data.email
          }
        )
        this.$router.replace("/")
        
      }catch(err){
        this.error = true
        console.log(err.message)
      }
    },
    validationForm(){
        if(this.$refs.form.validate()){
          this.userLogin()
        }
    },
    validateEmail(text){
    let message= null
    const emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if(text.length===0){
      message = "email deve ser preenchido"
    }
    if(!emailPattern.test(text)){
        message = "email incorreto";
    } 
    return  message;
    }
  }
}
</script>

<style scoped>
  .input-border{
    border: 1px solid #424242 !important;
  }
</style>