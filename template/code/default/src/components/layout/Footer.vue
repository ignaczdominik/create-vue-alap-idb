<template>
  <footer class="mt-auto py-3 bg-primary" data-bs-theme="dark">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>
    <p class="text-center text-white">© {{ currentYear }} Company, Inc</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
