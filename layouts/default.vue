<template>
  <v-app>
    <div class="pt-6 pb-6 d-flex justify-center" >
      <v-app-bar
      dense
      class="pa-0 class-container"
      color="white"
      flat
      >
          <v-row >
              <v-img
              max-height="37"
              max-width="156"
              src="/img/logo.png"
            ></v-img>
            <v-spacer/>
            <v-btn
              text
            >Sair</v-btn>  
          </v-row>
      </v-app-bar>
    </div>
      
    <v-main>
      <v-container class="class-container ">
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
  }
}
</script>

<style scoped>
  .class-container{
     max-width: 1106px !important;
  }

</style>
