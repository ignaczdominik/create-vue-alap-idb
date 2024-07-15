<template>
  <BaseHeader />
  <main class="container mx-auto">
    <slot />
  </main>
</template>
<script>
import BaseHeader from '@components/layout/BaseHeader.vue'
export default {
  components: {
    BaseHeader
  }
}
</script>
