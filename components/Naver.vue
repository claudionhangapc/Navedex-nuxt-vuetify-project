<template>
  <v-col xs="12" md="3">
    <v-card width="281px" elevation="0">
        <v-card  elevation="0" :to="`/show/${id}`">
          <v-list class="pa-0">
          <v-list-item class="pa-0">
                  <v-img
                  height="250"
                  src="/img/IMG_9945_JULIANO.png"
                ></v-img>
          </v-list-item>
          <v-list-item class="pa-0">
             <v-card-text class="pa-0">
              <p class="font-weight-bold mb-1 mt-3" >Juliano Reis {{id}}</p>
              <p class="font-weight-regular">Front-end Developer f</p>
              </v-card-text>
          </v-list-item>
        </v-list>
        </v-card>
      <v-card-actions >
        <v-btn
           nuxt
          :to="`/deletar/${id}`"
          icon 
          class="mb-4 "
          color="#000"
          small>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn
          nuxt
          :to="`/editar/${id}`"
          icon 
          class="mb-4 "
          color="#000"
          small
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-col>
</template>

<script>
export default {
  props:{
    id:{
      type:String,
      required:true
    }
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>
