<template>
      <v-container fluid>
        <v-dialog v-model="modalOpen" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{props.titulo}}</span>
            </v-card-title>
            <v-card-text>
              <p>{{props.mensagem}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="closeModal">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch} from 'vue';

  const props = defineProps({
    open: Boolean,
    titulo: String,
    mensagem: String
  })

  watch(() => props.open, (novoValor) => {
        modalOpen.value = !modalOpen.value
  })

  const modalOpen = ref(false);
  
  const openModal = () => {
    modalOpen.value = true;
  };
  
  const closeModal = () => {
    modalOpen.value = false;
  };

  </script>
  
  <style>
  /* Estilos opcionais para o modal */
  .v-dialog--active .v-overlay {
    background-color: rgba(0, 0, 0, 0.7);
  }
  </style>
  