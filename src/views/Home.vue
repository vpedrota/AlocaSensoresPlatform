<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
        <MapEditor :geometry="Option" :removeAll="buttonClicked"/>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <MenuOptMap @nomeDoEvento1="handleEvento1" @removerAllEmit="handleRemoveAll"/>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts" setup>

  // importando componentes
  import MenuOptMap from '@/components/MenuOptionsMap.vue';
  import MapEditor from  '@/components/Map.vue'

  // importando tipos
  import selectedOptions from '../types/selectedOptions'

  // importanto vue
  import { defineEmits, ref } from 'vue';


  let Option = ref("")
  const buttonClicked = ref(false)

  const emit = defineEmits(['nomeDoEvento1']);

  const handleEvento1 = (dados: selectedOptions) => {
    if(dados.selectedMode.value[0].isActive) {
      Option.value = "edicao"
      return
    }
    let array = dados.selectedGeometryOption.value
    for (let i = 0; i < array.length; i++) {
      if (array[i].isActive === true) {
        Option.value = array[i].label
        break;
      }
    }
   }

    const handleRemoveAll = () => {
        buttonClicked.value = !buttonClicked.value
    }
</script>
