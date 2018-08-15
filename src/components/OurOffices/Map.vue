<template>
  <div class="map">
    <gmap-map
      class="map__map"
      :center="currentPosition"
      :zoom="12"
      :options="mapStyle"
      :disable-default-ui="true"
    >
      <gmap-marker
        :position="currentPosition"
        :clickable="true"
        :draggable="true"
        :icon="icon"
        @g-click="center=m.center"
      />
    </gmap-map>
  </div>
</template>

<script>
import MapStyles from './../../../static/mapStyle.json'

const icon = {
  path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
  fillColor: '#3db565',
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 0.8
}

export default {
  name: 'Map',
  props: {
    currentPosition: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      icon,
      mapStyle: {
        disableDefaultUI: true,
        styles: MapStyles
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  &__map {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 640px;
  }
}
</style>
