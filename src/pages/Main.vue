<template>
  <main class="main">
    <Contacts />
    <OurOffices />
    <ContactUs />
  </main>
</template>

<script>
import Contacts from './../components/Contacts'
import OurOffices from './../components/OurOffices'
import ContactUs from './../components/ContactUs'

export default {
  name: 'Main',
  components: {
    Contacts,
    OurOffices,
    ContactUs
  }
}
</script>

<style lang="scss">
</style>
