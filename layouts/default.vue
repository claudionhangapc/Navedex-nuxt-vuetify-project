<template>
  <v-app>
    <div class="pt-6 pb-6 d-flex justify-center" >
      <v-app-bar
      dense
      class="pa-0 class-container pl-3 pr-3"
      color="white"
      flat
      >
          <v-row >
            <NuxtLink to="/">
              <v-img
              max-height="37"
              max-width="156"
              src="/img/logo.png"
            ></v-img>
            </NuxtLink>
              
            <v-spacer/>
            <v-btn
              @click="logout"
              text
            >Sair</v-btn>  
          </v-row>
      </v-app-bar>
    </div>
      
    <v-main>
      <v-container class="class-container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }, 
  methods:{
    async logout(){
      await this.$auth.logout();
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
  .class-container{
     max-width: 1130px !important;
  }

</style>
