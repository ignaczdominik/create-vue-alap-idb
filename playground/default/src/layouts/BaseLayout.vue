<template>
  <header>
    <BSNavBar />
  </header>
  <main class="container">
    <slot />
  </main>
  <BaseFooter />
</template>
<script>
import BSNavBar from '@components/layout/BSNavBar.vue'
import BaseFooter from '@components/layout/BaseFooter.vue'
export default {
  components: {
    BSNavBar,
    BaseFooter
  }
}
</script>
