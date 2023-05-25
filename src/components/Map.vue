<template>
    <div id="map" class="map"></div>
    <modal :open="modal"></modal>
</template>

<script lang="ts" setup>

    // vue js
    import { ref, watch, onMounted, popScopeId } from 'vue';

    // importando componentes
    import Modal from '@/components/Modal.vue'

    // OpenLayers imports
    import { Style, Fill, Stroke } from 'ol/style';
    import Geometry, { Type } from 'ol/geom/Geometry';
    import Map from 'ol/Map.js';
    import Collection from 'ol/Collection.js';
    import View from 'ol/View.js';
    import {Draw, Modify, Snap} from 'ol/interaction.js';
    import {OSM, Vector as VectorSource} from 'ol/source.js';
    import {Select} from 'ol/interaction.js';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
    import GeoJSON from 'ol/format/GeoJSON';

    let map:Map
    let draw:Draw
    let source: VectorSource
    let style: Style
    let modify: Modify
    let select: Select
    let modal:Boolean

    modal = ref(true)
    const props = defineProps({
        geometry: {type: String, required: true},
        removeAll: Boolean
    });
    
    function convertToGeoJSON()  {
      const features = source.getFeatures()

      const featureCollection = {
        type: 'FeatureCollection',
        features: features
      };

      const geojsonFormat = new GeoJSON();
      console.log(geojsonFormat.writeFeaturesObject(features));
    };

    watch(() => props.removeAll, (novoValor) => {
        source.clear()

    })

    watch(() => source, () => {
        alert(0)
     })

    watch(() => props.geometry, (novoValor) => {

        if(novoValor == "remover") {
            map.removeInteraction(modify)
            map.removeInteraction(draw)
            select.getFeatures().clear();
            map.addInteraction(select)
            return
        }

        if(novoValor == "edicao") {
            select.getFeatures().clear();
            map.addInteraction(modify)
            map.addInteraction(select)
            map.removeInteraction(draw)
            return
        }
        map.removeInteraction(select)
        map.removeInteraction(modify)
        map.removeInteraction(draw)

        draw = new Draw({
            source,
            type: <Type> novoValor,
            style,
        });

        draw.on('drawend', (event) => {
            map.removeInteraction(select)
            let parser = new GeoJSON();
            let result = parser.writeFeatures(source.getFeatures());
            let i
            let objfeatures = JSON.parse(result)
            modal.value = !modal.value
             console.log(objfeatures)
        });

        modify.on('modifystart', function(event) {
            console.log(3)
            console.log(select)
            console.log(event.feature)
        });


        map.addInteraction(draw)
    });

    
    
    // Função para inicializar o mapa
    function initializeMap() {
    
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


        const vector = new VectorLayer({
            source: source,
            style: {
                'fill-color': 'rgba(255, 255, 255, 0.2)',
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
            type: <Type> props.geometry,
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
            center: [0, 0],
            zoom: 2,
            }),
            interactions: [draw, snap, select],
        });

        draw.on('drawend', (event) => {
            map.removeInteraction(select)
            modal.value = !modal.value
            event.feature.set('id', 0)
            event.feature.set('população', 0)
            event.feature.set('impacto', 0)
            console.log(event.feature)
        });

        select.on('select', function (e) {
            if(e.selected[0] && props.geometry == "remover"){
                source.removeFeature(e.selected[0])
            }
        });  
        
        source.on('change', function(){
            let parser = new GeoJSON();
            let result = parser.writeFeatures(source.getFeatures());
            let objfeatures = JSON.parse(result)
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