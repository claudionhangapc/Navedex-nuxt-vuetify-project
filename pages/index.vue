<template>
  <div>
    <v-container>
      <v-row class="pl-3 pr-3 mb-6">
        <h2>NAVERS</h2>
        <v-spacer/>
        <v-btn
          nuxt
          to="/adicionar"
          min-width="176" 
          min-height="40" 
          dark
        >
          Adicionar
        </v-btn>
      </v-row>
      <v-row>
        <naver id="4"/>
        <naver id="3"/>
        <naver id="2"/>
        <naver id="1"/>
        <naver id="6"/>
        
      </v-row>
       <NuxtChild/>
    </v-container>
    
  </div>
    
</template>


<style scoped>
.class-btn{
  background: #212121;
  color:#FFF;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 16px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
}
.class-text{
  color: #212121;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  font-family: "Montserrat", sans-serif;
}
</style>


