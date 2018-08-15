<template>
  <section class="offices">
    <div class="container">
      <div class="offices__content">
        <div class="offices__left">
          <h2 class="offices__title section-title">Our Offices</h2>
          <OfficesTabs
            :offices-data="offices"
            @tab-change="tabChangeHandler"
          />
        </div>
        <div class="offices__right">
          <Map
            :current-position="currentPosition"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OfficesTabs from './OfficesTabs'
import Map from './Map'
import Offices from './../../../static/offices.json'
import { find, pathOr, propEq } from 'ramda'

export default {
  name: 'OurOffices',
  components: {
    OfficesTabs,
    Map
  },
  data () {
    return {
      offices: Offices,
      currentPosition: { lat: 50.452660, lng: 30.508334 }
    }
  },
  methods: {
    tabChangeHandler (newTabId) {
      const isSameId = propEq('id', newTabId)
      const properOffice = find(isSameId, this.offices)
      this.currentPosition = pathOr({}, ['location'], properOffice)
    }
  }
}
</script>

<style lang="scss" scoped>
.offices {
  position: relative;
  min-height: 500px;
  background-image: url('../../assets/img/grey-bg.png');
  padding-top: 96px;

  &__title {
    padding-bottom: 40px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
