<template>
  <div class="checkbox">
    <div class="checkbox__wrapper">
      <input
        v-model="localValue"
        type="checkbox"
        id="acheckbox"
        class="checkbox__checkbox"
      >
      <label for="acheckbox" class="checkbox__label">{{ label }} </label>
    </div>
    <ErrorsList
      v-if="hasErrors"
      class="checkbox__errors-list"
      :error-messages="errorMessages"
    />
  </div>
</template>

<script>
import ErrorsList from '@/components/shared/ErrorsList'

export default {
  name: 'ACheckbox',
  components: {
    ErrorsList
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    errorMessages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    },
    hasErrors () {
      return Boolean(this.errorMessages.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;

  &__wrapper {
    display: flex;
    align-items: center;
    color: $white;
    font-size: 1.125rem;
    margin-top: 30px;
  }

  &__label {
    margin-left: 8px;
  }

  &__errors-list {
    position: absolute;
    bottom: -33px;
  }
}
</style>
