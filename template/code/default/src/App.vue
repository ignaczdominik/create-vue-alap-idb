<script setup>
import { RouterView } from 'vue-router'
import VNav from '@/components/layout/BSNavBar.vue'
import VFooter from '@/components/layout/Footer.vue'
</script>

<template>
  <v-nav />
  <router-view />
  <v-footer />
</template>
