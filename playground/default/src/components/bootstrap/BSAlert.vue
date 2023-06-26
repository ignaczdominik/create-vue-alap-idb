<template>
  <div class="alert" :class="`alert-${alertType}`" role="alert">
    <slot />
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-if="closable">
      <span aria-hidden="true">&times;</span></button
    >s
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
