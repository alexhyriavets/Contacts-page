<template>
  <div>
    <gmap-map
      style="width: 400px; height: 400px;"
      :center="{ lat: 30.2672, lng: -97.7431 }"
      :zoom="12"
      :options="mapStyle"
    />
  </div>
</template>

<script>
import MapStyles from './../../../static/mapStyle.json'

export default {
  name: 'Map',
  data () {
    return {
      mapStyle: {
        styles: MapStyles
      }
    }
  }
}
</script>
