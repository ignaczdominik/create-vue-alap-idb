<template>
  <nav class="bg-white dark:bg-gray-800">
    <div class="flex justify-between p-3 border-b-2 flex-wrap dark:border-none">
      <RouterLink to="/" class="flex items-center space-x-3">
        <span class="self-center text-2xl font-semibold dark:text-white">Feladat</span>
      </RouterLink>
      <button class="block md:hidden" @click="toggleMenu">
        <svg
          class="w-5 h-5 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" :class="{ hidden: !menuOpen }">
        <ul class="menu">
          <li class="menuitem"><RouterLink to="#">1. oldal</RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.menu {
  @apply flex flex-col p-4;
  @apply md:flex-row md:p-0 md:space-x-8;
}
.menuitem {
  @apply block py-2 px-3 text-gray-500;
  @apply hover:bg-blue-400 hover:text-white rounded p-2;
}

.menuitem:has(.active) {
  @apply text-blue-500;
  @apply hover:text-white;
}
</style>
