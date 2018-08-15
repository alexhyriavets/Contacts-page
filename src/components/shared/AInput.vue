<template>
  <div
    class="input"
    :class="{ 'error' : isInvalid }"
  >
    <input
      :value="value"
      name="ainput"
      :id="`a${label}`"
      type="text"
      class="input__input"
      @input="onInput"
    >
    <div class="input__hints-wrapper">
      <label :for="`a${label}`" class="input__label">{{ label }}</label>
      <div class="input__line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  position: relative;
  width: 540px;
  height: 40px;
  font-size: 1.125rem;

  &__line {
    width: 100%;
    height: 2px;
    background-color: $primary-grey;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
  }

  &__label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
  }

  &__input {
    display: block;
    margin-left: auto;
    height: 100%;
    width: 80%;
    color: $primary-grey;
    background: transparent;
    transition: all 0.3s ease-in-out;
    font-size: 1.125rem;

    &:focus {
      color: $white;
    }

    &:focus + .input__hints-wrapper {
      & .input__label {
        color: $white;
      }

      & .input__line {
        background-color: $white;
      }
    }
  }
}

.error {
  color: $error;

  .input__line {
    background-color: $error;
  }
}
</style>
