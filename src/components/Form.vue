<template>
    <v-card class="mx-auto" variant="outlined">
        <v-card-item >
            <div >
                <div class="text-overline mb-1">
                    <h2>Títullo</h2>
                </div>
            </div>
            <div>
                dd
            </div>
        </v-card-item>
    </v-card>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  interface TabelaItem {
    id: number;
    coluna: string;
    impacto: string;
  }
  
  const tabela = ref<TabelaItem[]>([
    { id: 1, coluna: 'Coluna 1', impacto: 'Alto' },
    { id: 2, coluna: 'Coluna 2', impacto: 'Médio' },
    { id: 3, coluna: 'Coluna 3', impacto: 'Baixo' },
  ]);
  
  const headers = [
    { text: 'ID', value: 'id' },
    { text: 'Coluna', value: 'coluna' },
    { text: 'Impacto', value: 'impacto' },
  ];
  

  </script>