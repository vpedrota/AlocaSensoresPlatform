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
          <div class="view">
          <v-btn class="view" variant="tonal" v-for="(button, index) in buttonsSatView" @click="toggleButton(index, buttonsSatView)"  :key="index"  :class="{ active: button.isActive }">
                {{button.label}}
          </v-btn>
          <div>
            <div class="text-overline mb-1">
              Modo 
            </div>
            <div>
              <v-btn  class="view" v-for="(button, index) in buttonsModeSelection" @click="toggleButton(index, buttonsModeSelection)" :class="{ active: button.isActive }"  variant="tonal">
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

const emit = defineEmits(['nomeDoEvento1', 'removerAllEmit']);


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

const buttonsSatView = ref<Button[]>([
  { label: 'Satélite', isActive: true },
  { label: 'OSM', isActive: false },
]);

function toggleButton(index: number, buttons: Button[] ): void {
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


</script>


<style>

.view{
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
  column-gap: 5px;
  margin-bottom: 5px;
}

.active{
  background-color: aquamarine;
}

</style>
