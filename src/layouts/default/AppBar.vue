
<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon>
      <v-icon icon="mdi-circle-slice-6" />
    </v-app-bar-nav-icon>
    <v-app-bar-title>
      {{ navbar.title }}
    </v-app-bar-title>
    <div class="nav-buttons" v-if="navbar.status">
      <v-btn variant="tonal" @click="$router.push(item.href)" v-for="item in items">
        {{ item.nome }}
      </v-btn>
      
    </div>

    
      <v-btn  @click="changeToggleState" variant="tonal" v-if="!navbar.status">
          Menu
      </v-btn>
    
    
  </v-app-bar>

  <v-navigation-drawer
        v-model="togglePanel"
        location="top"
        temporary>
  <div class="nav-buttons-list">
    <v-btn  @click="$router.push(item.href)" variant="tonal" v-for="item in items">
      {{ item.nome }}
    </v-btn>
  </div>
  </v-navigation-drawer>

  
</template>

<script lang="ts" setup>

  import { ref, watch, onMounted, onBeforeMount} from 'vue'

  // Textos 
  let navbarText: string = "AlocaSensores"

  const navbar = ref({ title: navbarText, status: true})
  const screenWidth = ref(window.innerWidth);
  const items = ref([{"nome":"Página Inicial", "href": "/"}, { "nome":"Sobre", "href":"about"}])
  let togglePanel = ref<boolean>(false)

  onBeforeMount( () => {
    if(screenWidth.value < 600){
      navbar.value.status = false
    }else{
      navbar.value.status = true
      togglePanel.value = false
    }
  });

  
  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  const changeToggleState = () => {
    togglePanel.value = !(togglePanel.value);
  }

  watch(screenWidth, (newValue) => {
    if(screenWidth.value < 600){
      navbar.value.status = false
    }else{
      navbar.value.status = true
      togglePanel.value = false
    }
  })

</script>

<style scoped>

.nav-buttons{
  display: flex;
  row-gap: 5px;
  column-gap: 5px;
  margin-right: 5px;
}

.nav-buttons-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5px;
  margin-top: 15px;
}

.nav-buttons-list button{
  max-width: 150px;
  width: 150px;
}
</style>