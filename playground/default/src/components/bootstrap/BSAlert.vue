<template>
  <div class="alert" :class="`alert-${alertType}`" role="alert">
    <slot />
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      v-if="closable"
    ></button>
  </div>
</template>

<script setup>
const props = defineProps({
  alertType: {
    type: String,
    default: 'info',
    validator(value) {
      return ['success', 'warning', 'danger', 'info', 'secondary', 'light', 'dark'].includes(value)
    }
  },
  closable: {
    type: Boolean,
    default: false
  }
})
</script>
