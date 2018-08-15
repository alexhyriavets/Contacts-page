<template>
  <form @submit.prevent="submitFormHandler" class="csform">
    <AInput
      v-model="name"
      label="Name"
      :is-invalid="$v.name.$error"
      class="csform__input"
    />
    <AInput
      v-model="phone"
      label="Phone"
      :is-invalid="$v.phone.$error"
      class="csform__input"
    />
    <AInput
      v-model="email"
      label="Email"
      :is-invalid="$v.email.$error"
      class="csform__input"
    />
    <div class="csform__checkbox-wrapper">
      <input
        v-model="isAgreed"
        type="checkbox"
        id="acheckbox"
        class="csform__checkbox"
      >
      <label for="acheckbox" class="csform__checkbox-label">I agree the processing of personal data</label>
    </div>
    <p v-if="showAlert" class="csform__alert">You did not agree processing of personal data</p>
    <button class="csform__button" type="submit">get in touch</button>
  </form>
</template>

<script>
import AInput from './../shared/AInput'
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'ContactUsForm',
  components: {
    AInput
  },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      isAgreed: false,
      showAlert: false
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
    },
    isAgreed: {
      required
    }
  },
  methods: {
    submitFormHandler () {
      this.$v.$touch()

      if (!this.isAgreed) {
        this.showAlert = true
        return
      }

      if (this.$v.$invalid) return

      // asda

      this.clearForm()
    },
    clearForm () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.isAgreed = false
      this.showAlert = false
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

  &__checkbox {
    &-wrapper {
      display: flex;
      align-items: center;
      color: $white;
      font-size: 1.125rem;
    }

    &-label {
      margin-left: 8px;
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
    color:$error;
  }
}
</style>
