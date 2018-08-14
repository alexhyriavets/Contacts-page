<template>
  <div class="tabs">
    <ul class="tabs__nav">
      <li
        v-for="(tab, index) in shownTabs"
        :key="`tab-${tab.id}-${index}`"
        class="tabs__nav-item"
      >
        <button
          class="tabs__nav-link"
          :class="{ 'active' : tab.id === currentTabId }"
          @click="changeCurrentTabHandler(tab.id)"
        >
          {{ tab.city }}
        </button>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <div :key="shownOffice.name">
        <h3 class="tabs__title">{{ shownOffice.name }}</h3>
        <p class="tabs__address">
          {{ shownOffice.location }} <br>
          {{ shownOffice.index }} <br>
          {{ shownOffice.country }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { map, prop, head, compose, find, propEq, pick } from 'ramda'

export default {
  name: 'OfficesTabs',
  props: {
    officesData: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data () {
    return {
      currentTabId: compose(head, map(prop('id')))(this.officesData)
    }
  },
  computed: {
    shownTabs () {
      return map(pick(['id', 'city']), this.officesData)
    },
    shownOffice () {
      const isCurrentOffice = propEq('id', this.currentTabId)
      return find(isCurrentOffice, this.officesData) || {}
    }
  },
  methods: {
    changeCurrentTabHandler (newTabId) {
      this.currentTabId = newTabId
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  color: $white;

  &__nav {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    &-item {
      margin-left: 18px;

      &:first-child {
        margin-left: 0;
      }
    }

    &-link {
      font-size: 0.6875rem;
      font-weight: 700;
      color: $white;
      text-transform: uppercase;
      transition: color 250ms ease-in-out;

      &:hover {
        color: $primary-green;
        cursor: pointer;
      }

      &.active {
        color: $primary-green;
      }
    }
  }

  &__title {
    font-size: 1.625rem;
    margin-bottom: 38px;
  }

  &__address {
    font-size: 0.6875rem;
    line-height: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0.2;
}
</style>
