<template>
  <section class="contact-us">
    <div class="container">
      <h2 class="contact-us__title section-title">Contact Us</h2>
      <div class="contact-us__content">
        <div class="contact-us__left">
          <ContactUsForm />
        </div>
        <div class="contact-us__right">
          <p class="contact-us__text">
            Please tell us more about your request and give us info about your company and country
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactUsForm from './ContactUsForm'

export default {
  name: 'ContactUs',
  components: {
    ContactUsForm
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  background: url('../../assets/img/green-bg.png');
  padding-bottom: 100px;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    padding-top: 100px;
    padding-bottom: 36px;
  }

  &__text {
    margin-left: 60px;
    font-size: 1.125rem;
    color: $primary-grey;
  }
}
</style>
