<template>
  <form @submit.prevent="submitFormHandler" class="csform">
    <AInput
      v-model="name"
      label="Name"
      class="csform__input"
      :error-messages="fieldErrors('name')"
    />
    <AInput
      v-model="phone"
      label="Phone"
      class="csform__input"
      :error-messages="fieldErrors('phone')"
    />
    <AInput
      v-model="email"
      label="Email"
      class="csform__input"
      :error-messages="fieldErrors('email')"
    />
    <ACheckbox
      v-model="isAgreed"
      label="I agree the processing of personal data"
      :error-messages="didNotAgreedError"
    />
    <button class="csform__button" type="submit">get in touch</button>
  </form>
</template>

<script>
import AInput from '@/components/shared/AInput'
import ACheckbox from '@/components/shared/ACheckbox'
import { mapActions } from 'vuex'
import { required, email, numeric } from 'vuelidate/lib/validators'
import { fieldErrorsMixin } from '@/mixins'
import ErrorsList from '@/components/shared/ErrorsList'

export default {
  name: 'ContactUsForm',
  components: {
    AInput,
    ErrorsList,
    ACheckbox
  },
  mixins: [fieldErrorsMixin],
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      isAgreed: false,
      didNotAgreedError: []
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    }
  },
  validationMessages: {
    name: { required: 'Name is required' },
    email: { required: 'Email is required', email: 'Please, enter valid email' },
    phone: { required: 'Phone is required', numeric: 'Phone number should contains only numeric values' }
  },
  methods: {
    ...mapActions({
      sendContactUsForm: 'sendContactUsForm'
    }),
    async submitFormHandler () {
      this.$v.$touch()

      if (this.isAgreed) {
        this.didNotAgreedError = []
      } else {
        this.didNotAgreedError = ['You did not agree processing of personal data']
        return
      }

      if (this.$v.$invalid) return

      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone
      }

      try {
        await this.sendContactUsForm(payload)
      } catch (error) {
        console.error(error)
      }

      this.clearForm()
    },
    clearForm () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.isAgreed = false

      this.didNotAgreedError = []

      this.$v.$reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.csform {
  position: relative;

  &__input {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    width: 282px;
    height: 82px;
    background-color: $primary-grey;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.6875rem;
    transition: opacity 300ms ease-in-out;
    margin-top: 45px;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }

  &__alert {
    position: absolute;
    bottom: 90px;
    left: 0;
    font-size: 1.125rem;
    color: $error;
  }
}
</style>
