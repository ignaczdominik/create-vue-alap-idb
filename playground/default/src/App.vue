<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main class="container container-fluid">
    <RouterView />
  </main>
  <TheFooter />
</template>
