<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="my-row">
        <v-col cols="12" sm="8" md="6">
            <v-card class="my-card">
            <v-card-title class="my-card-title">Sobre o projeto:</v-card-title>
            <v-card-text class="my-card-text">
                AlocaS é uma implementação baseada no artigo "de Oliveira Simoyama, F., Tomás, L. R., Pinto, F. M., Salles-Neto, L. L., & Santos, L. B. L. (2022). Optimal rain gauge network to reduce rainfall impacts on urban mobility–a spatial sensitivity analysis. Industrial Management & Data Systems." O objetivo é proporcionar uma ferramenta para resolver problemas conhecidos de otimização através de uma API (Application Programming Interface). O projeto faz parte do projeto DAI CNPq-Unifesp-Agevap "Otimização de Melhores Práticas de Gerenciamento da Bacia Hidrográfica do Rio Paraíba do Sul visando a qualidade da água", coordenado pelo prof. Luiz Leduino de Salles-Neto (Unifesp). O desenvolvimento do site é parte do Projeto de Iniciação Tecnológica (PIBIT-CNPq) do estudante da Unifesp Victor Hugo Godoi Pedrota, como parte do projeto DAI CNPq-Unifesp-Agevap, e é orientador pelo prof. Leduino e pelo pesquisador Leonardo Bacelar (CEMADEN). O objetivo do alocaS é facilitar que novas aplicações, focadas para web, utilizem algum dos modelos de otimização em sua implementação, economizando recursos de processamento e com fácil utilização descrita na documentação.
            </v-card-text>
            </v-card>
        </v-col>
        </v-row>
        <v-row justify="center" align="center" class="my-row">
        <v-col cols="12" sm="8" md="6">
        <v-card class="my-card">
          <v-card-title class="my-card-title">Agradecimentos:</v-card-title>
          <v-card-text class="my-card-text ima">
            <v-row justify="center" class="my-image-row">
              <v-col class="ima" cols="3">
                <img src="https://alocasensores.unifesp.br/sobre/img/cnpq-logo.png" alt="Imagem 1" class="my-image">
              </v-col>
              <v-col cols="3">
                <img src="https://alocasensores.unifesp.br/sobre/img/agevap-logo.png" alt="Imagem 2" class="my-image">
              </v-col>
             
              <v-col cols="3">
                <img src="https://alocasensores.unifesp.br/sobre/img/unifesp-logo.jpg" alt="Imagem 4" class="my-image">
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
        </v-row>
  </v-container>

</template>

<script lang="ts" setup>

</script>

.ima{
display:flex;
justify-content: center;
align-items:center;
}

<style>
img{
    max-width:150px;
}
.my-card {
  border-radius: 10px;
}

.my-card-title {
  font-size: 24px;
  font-weight: bold;
}

.my-card-text {
  text-align: justify;
}

</style>
