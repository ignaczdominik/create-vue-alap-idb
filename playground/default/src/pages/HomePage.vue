<script setup>
import { useCounter } from '@/stores/CounterStore.mjs'

const CounterStore = useCounter()
</script>

<template>
  <main class="text-center">
    <h1 class="display-1 my-5">{{ $t('pages.home.hello') }}</h1>
    <button class="btn btn-success" @click="CounterStore.increment()">
      {{ $t('pages.home.counter', { n: CounterStore.counter }) }}
    </button>
  </main>
</template>
