<template>
  <v-card class="mx-auto" variant="outlined" >
      <v-card-item >
          <div >
              <div  class="text-overline mb-1">
                  <h2>Resumo</h2>
              </div>
          </div>
          <div>
            <div v-if="!verificaVazio()">  Nenhum ponto ou polígono inserido. </div>
            <div  v-if="verificaVazio()" v-for="(item, index) in tableData">
              <v-row>
                <v-col cols="4">
                  <v-text-field @change="func('id', index, item.id)" v-model="item.id" label="Input 1" outlined dense></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field  @change="func('pop', index, item.pop)"  v-model="item.pop" label="População" outlined dense></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field @change="func('impacto',index, item.impacto)" v-model="item.impacto" label="Impacto" outlined dense></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div style="margin-top: 10px">
              <v-btn @click="sendToApi()" variant="tonal">
                Enviar
              </v-btn>
            </div>
          </div>
      </v-card-item>
  </v-card>
  <modal :titulo="titulo" :mensagem="mensagem" :open="modal"></modal>
</template>

<script lang="ts" setup>

// Imports do vue
import { ref, watch, onMounted, watchEffect} from 'vue';

// imports do openlayers
import {OSM, Vector as VectorSource} from 'ol/source.js';
import GeoJSON from 'ol/format/GeoJSON';
import {transform} from 'ol/proj'
import Feature from 'ol/Feature.js';
import Polygon from 'ol/geom/Polygon.js';
import Point from 'ol/geom/Point.js';

import {useGeographic, fromLonLat} from 'ol/proj.js';

useGeographic();

// Imports de componentes
import Modal from '@/components/Modal.vue'

// Imports de outras biblotecas
import axios from 'axios';


let tableData = ref([])
let modal = ref(true)
let titulo = ref("Aviso")
let mensagem = ref("Parâmetros inválidos") 

const props = defineProps({
featuresObjectUpdate : {
  type: VectorSource,
  required: true
},
changed: Boolean
})

function verificaVazio(){
 
  if(props.featuresObjectUpdate){
    return true
  }
    
  return false
}

function func(campo, index, valor) {
  props.featuresObjectUpdate.getFeatures()[index].set(campo, valor)
  tableData.value = props.featuresObjectUpdate.getFeatures().map((feature) => {
    return {"id": feature.get('id'), "pop":feature.get('pop'), "impacto": feature.get('impacto')};
  })
}

watch(() => props.changed, (novoValor: VectorSource) => {
  tableData.value = props.featuresObjectUpdate.getFeatures().map((feature) => {
    return {"id": feature.get('id'), "pop":feature.get('pop'), "impacto": feature.get('impacto')};
  })
})

function sendToApi(){

  if(!verificaVazio()){
    modal.value = !modal.value
    return
  }

var parser = new GeoJSON({
  dataProjection: 'EPSG:4326'
});
let result = parser.writeFeatures(props.featuresObjectUpdate.getFeatures());
let objfeatures = JSON.parse(result)

console.log(objfeatures)
  axios.post('http://localhost:80', objfeatures)
  .then(response => {

let feature = new Feature({
  geometry: new Point(fromLonLat([ 0, 0]))
});

let abc = new GeoJSON()
console.log(response.data)
let a = abc.readFeature(response.data.features[0])
props.featuresObjectUpdate.addFeature(a)
a = abc.readFeature(response.data.features[1])
props.featuresObjectUpdate.addFeature(a)
  console.log(a)
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

}

</script>

<style>


.input-field {
  width: 100%;
}
</style>