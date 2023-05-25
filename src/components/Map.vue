<template>
    <div id="map" class="map"></div>
</template>

<script lang="ts" setup>

    // vue js
    import { ref, watch, onMounted, popScopeId } from 'vue';
    import { defineProps } from 'vue';

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


    let map:Map
    let draw:Draw
    let source: VectorSource
    let style: Style
    let drawnPolygons = new Collection();
    let modify: Modify
    let select: Select

    const props = defineProps({
        geometry: {type: String, required: true},
        removeAll: Boolean
    });
    
    function convertToGeoJSON()  {
      const features = drawnPolygons.getArray().map(polygon => {
        return {
          type: 'Feature',
          geometry: polygon
        };
      });

      const featureCollection = {
        type: 'FeatureCollection',
        features: features
      };

      console.log(JSON.stringify(featureCollection));
    };

    watch(() => props.removeAll, (novoValor) => {
        source.clear()
    })

    watch(() => props.geometry, (novoValor) => {

        if(novoValor == "edicao") {
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
            drawnPolygons.push(event.feature)
            map.removeInteraction(select)
        });

        map.addInteraction(draw)
    });

    
    
    // Função para inicializar o mapa
    function initializeMap() {
    
        source = new VectorSource(); // Fonte de dados do polígono
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
            interactions: [snap, select],
        });


        select.on('select', function (e) {
            console.log(e.selected[0])
            if(e.selected[0] && props.geometry == "edicao"){
                alert(2)
            }
        });

        
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