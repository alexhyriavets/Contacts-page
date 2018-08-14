<template>
  <section class="offices">
    <div class="container">
      <div class="offices__content">
        <div class="offices__left">
          <h2 class="offices__title section-title">Our Offices</h2>
          <OfficesTabs :offices-data="Offices" />
        </div>
        <div class="offices__right">
          <Map />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OfficesTabs from './OfficesTabs'
import Map from './Map'
import Offices from './../../../static/offices.json'

export default {
  name: 'OurOffices',
  components: {
    OfficesTabs,
    Map
  },
  data () {
    return {
      Offices
    }
  }
}
</script>

<style lang="scss" scoped>
.offices {
  min-height: 500px;
  background-image: url('../../assets/img/grey-bg.png');
  padding-top: 96px;

  &__title {
    padding-bottom: 40px;
  }
}
</style>
