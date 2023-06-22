<template>
  <v-card
    class="mx-auto"
    variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          <h2>Ferramentas</h2>
        </div>
          <div>
            <div class="view">
              <v-btn variant="tonal"   v-for="(button, index) in buttonsSatView" @click="toggleButtonOptionsView(index, buttonsSatView)"  :disabled="isButtonDisabled(index) " :key="index"  :class="{ active: button.isActive }">
                    {{button.label}}
              </v-btn>
            </div>
          <div>
            <div class="text-overline mb-1">
              Modo 
            </div>
            <div class="view">
              <v-btn  v-for="(button, index) in buttonsModeSelection" @click="toggleButton(index, buttonsModeSelection)" :class="{ active: button.isActive }"  variant="tonal">
                {{button.label}}
              </v-btn>
            </div>
          </div>
          <div v-if="buttonsModeSelection[0].isActive">
            <div class="text-overline mb-1">Selecionar Geometria</div>
            <div class="opcoes">
              <v-btn  variant="tonal" v-for="(button, index) in buttonsGeometrySelection" @click="toggleButton(index, buttonsGeometrySelection)"  :key="index"  :class="{ active: button.isActive }">
                {{button.label}}
              </v-btn>
            </div>
          </div>
          <div v-if="buttonsModeSelection[0].isActive">
            <div class="text-overline mb-1">Selecionar tipo do ponto</div>
            <div class="opcoes">
              <v-btn  variant="tonal" v-for="(button, index) in buttonsPointType" @click="toggleButtonPointType(index, buttonsPointType)"  :key="index"  :class="{ active: button.isActive }">
                {{button.label}}
              </v-btn>
            </div>
          </div>
          <div>
            <div class="text-overline mb-1">
              Remover
            </div>
            <div>
              <v-btn  @click="emit('removerAllEmit')" variant="tonal">
                Remover Todos
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>  

import { ref } from 'vue';
import selectedOptions from '../types/selectedOptions'

interface Button {
  label: string;
  isActive: boolean;
}

const emit = defineEmits(['nomeDoEvento1', 'removerAllEmit', 'changeView', 'changePointType']);


const buttonsGeometrySelection= ref<Button[]>([
  { label: 'Polygon', isActive: true },
  { label: 'Circle', isActive: false },
  { label: 'Point', isActive: false },
]);

const buttonsModeSelection = ref<Button[]>([
  { label: 'Inserir', isActive: true },
  { label: 'Edição', isActive: false },
  { label: 'Remover', isActive: false },
]);

const buttonsPointType = ref<Button[]>([
  { label: 'Demanda', isActive: true },
  { label: 'Alocação', isActive: false },
]);

const buttonsSatView = ref<Button[]>([
  { label: 'Satélite', isActive: false},
  { label: 'OSM', isActive: true },
]);

function  isButtonDisabled(index:number) {
    return index == 0
}

function toggleButton(index: number, buttons: Button[]): void {

  buttons.forEach((button, i) => {
    button.isActive = i === index;
  });

  let data:selectedOptions = {
    "selectedView": buttonsSatView,
    "selectedMode": buttonsModeSelection,
    "selectedGeometryOption": buttonsGeometrySelection 
  }

  emit('nomeDoEvento1', data);
}

function toggleButtonOptionsView(index: number, buttons: Button[]): void {

  let option

  buttons.forEach((button, i) => {
    
    button.isActive = i === index;
    if(i === index){
      option = buttons[i]
    }
    
  });

  emit('changeView', option);
}

function toggleButtonPointType (index: number, buttons: Button[]): void {

  let option

  buttons.forEach((button, i) => {
    button.isActive = i === index;
    if(i === index){
      option = buttons[i]
    } 
  });

  emit('changePointType', option);
}
</script>


<style>

.view{
  display: flex;
  column-gap: 5px;
  margin-left: 5px;
}

.menu{
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  margin-top: 30px;
}

.opcoes{
  display: flex;
  row-gap: 5px;
  column-gap: 5px;
  margin-bottom: 5px;
  margin-top: 5px
}

.active{
  background-color: aquamarine;
}

</style>
