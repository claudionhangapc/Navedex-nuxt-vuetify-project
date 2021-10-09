<template>
  <v-col xs="12" md="3">
    <v-card width="281px" elevation="0">
       <v-img
          height="250"
          src="/img/IMG_9945_JULIANO.png"
        ></v-img>

    
      <v-card-text class="pa-0">
       <p class="font-weight-bold mb-1 mt-3" >Juliano Reis</p>
       <p class="font-weight-regular">Front-end Developer f</p>
      </v-card-text>
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
    </v-card>
    <modal-visualizacao @updateDialog="updateDialogIndex" :dialog="dialog"/>

  </v-col>
</template>

<script>
export default {

  data(){
    return{
      dialog:true
    }
  },
  methods:{
    updateDialogIndex(value){
      this.dialog=value
    }
  }
}
</script>