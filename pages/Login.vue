<template>
  <v-form >
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
          placeholder="Senha"
          outlined
          dense
          full-width
          height="40"
          hide-details
          class="input-border"
          :autofocus="true"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col cols="12"  class="pa-0">
          <v-btn 
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
}
</script>

<style scoped>
  .input-border{
    border: 1px solid #424242 !important;
  }
</style>