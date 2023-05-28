<template>

     <v-container>
      <v-row>
        <v-col cols="12" md="8">
            <div id="map" class="map"></div><br>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <MenuOptMap @changeView="changeView" @nomeDoEvento1="handleEvento1" @removerAllEmit="handleRemoveAll"/>
          </v-col>
          <v-col cols="12">
            <FormFeatures @sendResponse="sendResponse" :changed="flag" :featuresObjectUpdate="source"></FormFeatures>
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

    let buttonClicked = ref(false)
    let featuresObject = ref()

    let map:Map
    let draw:Draw
    let source: VectorSource
    let style: Style
    let modify: Modify
    let select: Select
    let modal:Boolean
    let vector: VectorLayer
    let responseLayer = null

    let geometry:String
    let flag = ref(true)

    let id = 1
    modal = ref(true)
    geometry = "Polygon"
    

    const emit = defineEmits(['featuresObjectUpdate', 'changed']);

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
                vector
            ]
            });
           
        } else{

            layerGroup = new LayerGroup({
            layers: [
            new TileLayer({
            source: new Stamen({
                layer: 'watercolor' 
            })}),
                vector
            ]
            });
                  
        }
       map.setLayerGroup(layerGroup);
    }

    const handleEvento1 = (dados: selectedOptions) => {

        let array = dados.selectedGeometryOption.value
        for (let i = 0; i < array.length; i++) {
            if (array[i].isActive === true) {
            geometry = array[i].label
            break;
            }
        }

        if(dados.selectedMode.value[1].isActive) {
            geometry = "edicao"
            select.getFeatures().clear();
            map.addInteraction(modify)
            map.addInteraction(select)
            map.removeInteraction(draw)
            return
        }

        if(dados.selectedMode.value[2].isActive) {
            geometry = "remover"
            map.removeInteraction(modify)
            map.removeInteraction(draw)
            select.getFeatures().clear();
            map.addInteraction(select)
            return
        }


        map.removeInteraction(select)
        map.removeInteraction(modify)
        map.removeInteraction(draw)

        draw = new Draw({
            source,
            type: geometry,
            style,
        });

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

        modify.on('modifystart', function(event) {
            if(responseLayer != null)
                responseLayer.clear()
        });


        map.addInteraction(draw)

    }

    const handleRemoveAll = () => {
        if(responseLayer != null)
            responseLayer.clear()
        source.clear()
    }
    
    function convertToGeoJSON()  {
      const features = source.getFeatures()


      const featureCollection = {
        type: 'FeatureCollection',
        features: features
      };

      const geojsonFormat = new GeoJSON();
      console.log(geojsonFormat.writeFeaturesObject(features));
    };
       
    // Função para inicializar o mapa
    function initializeMap() {

        useGeographic()
    
        source = new VectorSource({wrapX: false}); // Fonte de dados do polígono
        const vectorLayer = new VectorLayer({ source }); // Camada de vetor para exibir o polígono

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

        
        modify = new Modify({ source });        
        select = new Select();

        draw = new Draw({
            source,
            type: geometry,
            style,
        });

        const snap = new Snap({ source });

        map = new Map({
            target: 'map',
            layers: [
            new TileLayer({
                source: new OSM(),
            }),
            vector,
            ],
            view: new View({
                center: [-46.6361, -23.5505],
                zoom: 12 
            }),
            interactions: [draw, snap, select],
        });

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
            emit('changed', flag);
            console.log(objfeatures)
        })
    }

    onMounted(initializeMap);
</script>

<style>

#map{
  height: 70vh;
  max-height: 800px;
  width: 100%;
}

</style>