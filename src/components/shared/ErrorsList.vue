<template>
  <div class="errors-list__wrapper">
    <p
      v-for="(errorMessage, index) in errorMessages"
      :key="index"
      class="errors-list__error"
    >
      * {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorsList',
  props: {
    errorMessages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.errors-list {
  &__wrapper {
    transform: translateY(-14px);
  }

  &__error {
    color: $error;
    font-size: 14px;
    font-style: italic;
  }
}
</style>
