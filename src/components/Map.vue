<template>
    <!-- <v-container>
        <div id="meuDiv" style="background-color: #3399CC">
            <MenuOptMap @changePointType="changePointType" @changeView="changeView" @nomeDoEvento1="handleEvento1" @removerAllEmit="handleRemoveAll"/>
            <br>
            <FormFeatures @sendResponse="sendResponse" :changed="flag" :featuresObjectUpdate="source" :featuresObjectUpdate2="source_aloc"></FormFeatures>
        </div>

        <div id="map"></div> -->
    <!-- </v-container> -->
     <v-container>
      <v-row>
        <v-col cols="12" md="8">
            <div id="map" class="map"></div><br>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <MenuOptMap @changePointType="changePointType" @changeView="changeView" @nomeDoEvento1="handleEvento1" @removerAllEmit="handleRemoveAll"/>
          </v-col>
          <v-col cols="12">
            <FormFeatures @sendResponse="sendResponse" @download="download" :changed="flag" :featuresObjectUpdate="source" :featuresObjectUpdate2="source_aloc"></FormFeatures>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
    <!-- <modal :open="modal"></modal> -->
</template>


<script lang="ts" setup>

    // vue js
    import { ref, watch, onMounted, popScopeId } from 'vue';

    // importando componentes
    import Modal from '@/components/Modal.vue'
    import FormFeatures from '@/components/Form.vue'
    import MenuOptMap from '@/components/MenuOptionsMap.vue';

    // importando tipos
    import selectedOptions from '../types/selectedOptions'

    // OpenLayers imports
    import { Style, Fill, Stroke } from 'ol/style';
    import Geometry, { Type } from 'ol/geom/Geometry';
    import Map from 'ol/Map.js';
    import Collection from 'ol/Collection.js';
    import View from 'ol/View.js';
    import {Draw, Modify, Snap} from 'ol/interaction.js';
    import {OSM, Stamen,  Vector as VectorSource} from 'ol/source.js';
    import {Select} from 'ol/interaction.js';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
    import GeoJSON from 'ol/format/GeoJSON';
    import 'ol/ol.css'
    import {Group as LayerGroup} from 'ol/layer.js';
    import {useGeographic} from 'ol/proj.js';
import { GeometryCollection } from 'ol/geom';

    let buttonClicked = ref(false)
    let featuresObject = ref()

    let map:Map
    let draw:Draw
    
    let style: Style
    let modify: Modify
    let select: Select
    let modal:Boolean
    let responseLayer: VectorLayer = null 
    let vector: VectorLayer
    let vector_aloc: VectorLayer
    let source: VectorSource
    let source_aloc: VectorSource
    let geometry:String
    let modify_aloc:Modify
    let style_aloc:Style
    let flag = ref(true)
    let alocao = ref(false)
    let id = 1
    modal = ref(true)
    geometry = ref("Polygon")
    

    const emit = defineEmits(['featuresObjectUpdate', 'featuresObjectUpdate2', 'changed']);
    
    function changeMapOptions(){
        if(geometry.value == "edição"){
            select.getFeatures().clear();
            map.addInteraction(modify)
            map.addInteraction(modify_aloc)
            map.addInteraction(select)
            map.removeInteraction(draw)
            return
        }
        
        if(geometry.value == "remover"){
            map.removeInteraction(modify)
            map.removeInteraction(modify_aloc)
            map.removeInteraction(draw)
            select.getFeatures().clear();
            map.addInteraction(select) 
            return
        }

        map.removeInteraction(select)
        map.removeInteraction(modify)
        map.removeInteraction(modify_aloc)
        map.removeInteraction(draw)
      
        if(!alocao.value){
            draw = new Draw({
                source,
                type: geometry.value,
                style,
            });
        } else{
            draw = new Draw({
                source: source_aloc,
                type: geometry.value,
                style: style_aloc,
            });

        }

        draw.on('drawend', (event) => {
            map.removeInteraction(select)
            if(responseLayer != null)
                responseLayer.clear()
            modal.value = !modal.value
            event.feature.set('id', id)
            event.feature.set('pop', 1)
            event.feature.set('impacto', 1)
            id += 1
        });

        map.addInteraction(draw)
    }

    const changePointType= (option) => {
        alocao.value = option.label === "Alocação"
        changeMapOptions()
    }

    const download = (response) => { 
        var features_layer = []; // Array para armazenar as geometrias
  
        // Itere sobre as geometrias na camada desejada e adicione-as ao array de features
        map.getLayers().forEach(function(layer) {
            let new_layer = []
            if (layer instanceof VectorLayer) {
                layer.getSource().forEachFeature(function(feature) {
                    new_layer.push(feature);
                });
                features_layer.push(new_layer)
            }
        });

        let result = []
        var geoJSONFormat = new GeoJSON();

        features_layer.forEach(function(layer){

            var geojsonObject = {
            type: 'FeatureCollection',
            features: layer.map(function(feature) {
            var geometry = geoJSONFormat.writeFeatureObject(feature);
            var properties = feature.getProperties();
            return geometry  
            })

        };
        
        result.push(geojsonObject)

        })

        let geometry_collection_array = []

        result.forEach(function(featureCollection){
            let newGeometryCollection =      []

            featureCollection.features.forEach(function(f){
                newGeometryCollection.push(f.geometry)
            })

            geometry_collection_array.push(newGeometryCollection)
        })

        // Crie um objeto GeoJSON com as features
        console.log(geometry_collection_array)

        var geojsonObject = {
            type: 'FeatureCollection',
            features: []
        }

        let abc = []
        geometry_collection_array.forEach(function(geoCollection){

            var geomCol = {
                type: 'Feature',
                properties: {},
                geometry: {
                    type:"GeometryCollection",
                    geometries: 
                        geoCollection.map(function(feature){
                            return feature
                        })
                    
                }

            }

            geojsonObject.features.push(geomCol)

        })
        
        console.log(geojsonObject)
        // Converta o objeto GeoJSON em uma string
        var geojsonString = JSON.stringify(geojsonObject, null, 2);
        
        // Crie um blob a partir da string GeoJSON
        var blob = new Blob([geojsonString], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        
        // Crie um elemento de link e acione o clique programaticamente para iniciar o download
        var link = document.createElement('a');
        link.href = url;
        link.download = 'geometries.geojson';
        link.click();
        
        // Limpe o URL do objeto para liberar memória
        URL.revokeObjectURL(url);
    }

    const sendResponse = (response) => {

        if(responseLayer != null)
            responseLayer.clear()

        var novaCamada = new VectorLayer({
        source: new VectorSource(),
        style: function(feature) {
            // Estilo das novas geometrias
            return new Style({
            fill: new Fill({
                color: 'rgba(255, 0, 0, 0.5)' // Cor de preenchimento das geometrias
            }),
            stroke: new Stroke({
                color: 'red', // Cor da borda das geometrias
                width: 2 // Largura da borda
            })
            });
        }
        });

        let abc = new GeoJSON()
        let a = abc.readFeature(response.data.features[0])
        novaCamada.getSource().addFeature(a)
        a = abc.readFeature(response.data.features[1])
        novaCamada.getSource().addFeature(a)
        responseLayer = novaCamada.getSource()
        map.addLayer(novaCamada);
    }

    const changeView = (dado) => {
        let tipoMapa = dado.label
        let layerGroup 
        if (tipoMapa === 'OSM') {
            layerGroup = new LayerGroup({
            layers: [
                new  TileLayer({
                    source: new OSM() 
                }),
                vector,
                vector_aloc
            ]
            });
           
        } else{

            layerGroup = new LayerGroup({
            layers: [
            new TileLayer({
            source: new Stamen({
                layer: 'watercolor' 
            })}),
                vector,
                vector_aloc
            ]
            });
                  
        }
       map.setLayerGroup(layerGroup);
    }

    const handleEvento1 = (dados: selectedOptions) => {

        let array = dados.selectedGeometryOption.value
        for (let i = 0; i < array.length; i++) {
            if (array[i].isActive === true) {
                geometry.value = array[i].label 
                break;
            }
        }

        if(dados.selectedMode.value[1].isActive){
            geometry.value = "edição"
            return 
        }

        if(dados.selectedMode.value[2].isActive){
            geometry.value = "remover"
            return 
        }

    }

    const handleRemoveAll = () => {
        if(responseLayer != null)
            responseLayer.clear()
        source.clear()
        source_aloc.clear()
    }
       
    function initializeMap() {

        useGeographic()
    

        // Estilo para o polígono desenhado
        style = new Style({
            fill: new Fill({
            color: 'rgba(255, 255, 255, 0.4)',
            }),
            stroke: new Stroke({
            color: '#3399CC',
            width: 2,
            }),
        });

        style_aloc = new Style({
            fill: new Fill({
            color: 'rgba(0, 255, 0, 1)',
            }),
            stroke: new Stroke({
            color: '#ff99CC',
            width: 2,
            }),
        });
        
        source = new VectorSource({wrapX: false}); // Fonte de dados do polígono
        source_aloc = new VectorSource({wrapX: false}); // Fonte de dados do polígono

        // Utilizado para inserir os pontos de demanda
        vector = new VectorLayer({
            source: source,
            style: {
                'fill-color': 'rgba(255, 255, 255, 1)',
                'stroke-color': '#ffcc33',
                'stroke-width': 2,
                'circle-radius': 7,
                'circle-fill-color': '#ffcc33',
            },
        });

        // Utilizado para inserir os pontos de alocação
        vector_aloc = new VectorLayer({
            source: source_aloc,
            style: {
                'fill-color': 'rgba(0, 255, 255, 1)',
                'stroke-color': '#ffccff',
                'stroke-width': 2,
                'circle-radius': 7,
                'circle-fill-color': '#00ccff',
            },
        });

        
        modify = new Modify({ source }); 
        modify_aloc = new Modify({ source: source_aloc });           
        
        select = new Select();

        draw = new Draw({
            source,
            type: geometry.value,
            style,
        });

        const snap = new Snap({ source });

        draw.on('drawend', (event) => {
            map.removeInteraction(select)
            modal.value = !modal.value
            event.feature.set('id', id)
            event.feature.set('pop', 1)
            event.feature.set('impacto', 1)
            id += 1
        });

        select.on('select', function (e) {
            
            if(e.selected[0] && geometry == "remover"){
                if(responseLayer != null)
                    responseLayer.clear()
               
                source.removeFeature(e.selected[0])
                source_aloc.removeFeature(e.selected[0])
                flag.value=!flag.value
                emit('changed', flag);
            }
        });  
        
        source.on('change', function(){
            let parser = new GeoJSON();
            let result = parser.writeFeatures(source.getFeatures());
            let objfeatures = JSON.parse(result)
            flag.value=!flag.value
            emit('featuresObjectUpdate', source);
            emit('featuresObjectUpdate2', source_aloc);
            emit('changed', flag);
        })

        source_aloc.on('change', function(){
            flag.value=!flag.value
            emit('changed', flag);
        })

        map = new Map({
            target: 'map',
            layers: [
            new TileLayer({
                source: new OSM(),
            }),
            vector,
            vector_aloc,
            ],
            view: new View({
                center: [-46.6361, -23.5505],
                zoom: 12 
            }),
            interactions: [draw, snap, select],
        });

        modify.on('modifystart', function(event) {
            if(responseLayer != null)
                responseLayer.clear()
        });

        modify_aloc.on('modifystart', function(event) {
            if(responseLayer != null)
                responseLayer.clear()
        });


    }

    watch( () => geometry.value, (newOption) => {
        changeMapOptions()
    },{ deep: true})

    onMounted(initializeMap);
</script>

<style>

/* #meuDiv {
    position: absolute;
    top: 70px; 
    right: 100px; 
    z-index: 100; 
}

#map {
    position: relative;
    width: 100%;
    height: 90vh;
} */

#map{
  height: 70vh;
  max-height: 800px;
  width: 100%;
}
</style>