<template>
  <v-card class="mx-auto" variant="outlined" >
      <v-card-item >
          <div >
              <div  class="text-overline mb-1">
                  <h2>Resumo</h2>
              </div>
          </div>
          <div class="empty" v-if="!verificaVazio()"> <div >  Nenhum ponto ou polígono inserido. </div> </div>
         
          <div  v-if="verificaVazio()" class="table-container">
            <v-simple-table  class="elevation-1 custom-table">
              <thead>
                <tr>
                  <th class="text-center column-id">ID</th>
                  <th class="column-population">População</th>
                  <th class="column-impact">Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="item.id">
                  <td class="text-center column-id">{{ item.id }}</td>
                  <td class="column-population">
                    <input @change="func('pop', index, item.pop)" v-model="item.pop" type="number" class="custom-input">
                  </td>
                  <td class="column-impact">
                    <input @change="func('impacto', index, item.impacto)" v-model="item.impacto" type="number" class="custom-input">
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div  v-if="verificaVazio()" style="margin-top:14px">
            
              <v-row>
                <v-col cols="6">
                  <v-select
                    dense
                    outlined
                    :items="lista"
                    v-model="selecao"
                    label="Pontos de alocação"
                  ></v-select>
                </v-col>

                <v-col cols="6">
                  <v-select
                    dense
                    outlined
                    v-model="selecaoModelos"
                    :items="modelos"
                    label="Modelo para cálculo"
                  ></v-select>
                </v-col>
              </v-row>
            
          </div>

          <div style="margin-top: 10px; display: flex; column-gap: 5px">
            <v-btn @click="sendToApi()" variant="tonal">
              Enviar
            </v-btn>
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
  
  // Imports de componentes
  import Modal from '@/components/Modal.vue'

  // Imports de outras biblotecas
  import axios from 'axios';

  useGeographic();

  let tableData = ref([])
  let modal = ref(true)
  let titulo = ref("Aviso")
  let mensagem = ref("Parâmetros inválidos ou sem pontos inseridos") 
  let lista = ref([])
  let selecao = ref()
  let selecaoModelos = ref()
  let modelos = [ "P-Medianas"]

  const emit = defineEmits(["sendResponse"])

  const props = defineProps({
    featuresObjectUpdate : {
      type: VectorSource,
      required: true
    },
    changed: Boolean
  })

  function verificaVazio(){
  
    if(tableData.value.length){
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
    let tamanhoLista = tableData.value.length;
    lista.value = Array.from({ length: tamanhoLista }, (_, index) => index + 1);
    console.log(tamanhoLista)
  })

  function sendToApi(){

    if(!verificaVazio()){
      modal.value = !modal.value
      return
    }
   
    if(selecao.value === undefined){
      modal.value = !modal.value
      mensagem.value = "Escolha uma quantidade de pontos"
      return
    }

    if(selecaoModelos.value === undefined){
      modal.value = !modal.value
      mensagem.value = "Escolha um modelo para o cálculo"
      return
    }

    var parser = new GeoJSON({
      dataProjection: 'EPSG:4326'
    });

    let result = parser.writeFeatures(props.featuresObjectUpdate.getFeatures());
    let objfeatures = JSON.parse(result)
    objfeatures["properties"] = {"p": selecao.value} 
    console.log(objfeatures)
      axios.post('http://localhost:80', objfeatures)
      .then(response => {
        emit("sendResponse", response)
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

.elevation-1 {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 
              0 3px 1px -2px rgba(0, 0, 0, 0.12), 
              0 1px 5px 0 rgba(0, 0, 0, 0.20);
}



.custom-table {
  width: 100%;
}

.custom-table thead {
  position: sticky;
  top: 0;
  background-color: white;
}

.custom-table .column-id {
  width: 20%;
  border: 1px solid black;
}

.custom-table .column-population,
.custom-table .column-impact {
  width: 40%;
  border: 1px solid black;
}

.custom-input {
  color: white;
  height: 35px !important;
  border-bottom: none !important;
}

.table-container {
  width: 100%;
  height: 200px; /* Ajuste para o tamanho desejado */
  overflow: auto;
  align-items: center;
  justify-content: center;
}

.empty {
  width: 100%;
  height: 200px; /* Ajuste para o tamanho desejado */
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-container::-webkit-scrollbar {
  width: 6px; /* Largura da barra de rolagem vertical */
  height: 6px; /* Altura da barra de rolagem horizontal */
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor do preenchimento da barra de rolagem */
  border-radius: 3px; /* Raio de borda da barra de rolagem */
}

.table-container::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Cor do preenchimento da barra de rolagem quando hover */
}

.table-container::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Cor do fundo da barra de rolagem */
}

</style>