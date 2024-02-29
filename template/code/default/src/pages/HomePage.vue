<template>
  <BaseLayout>
    <h1 class="display-1 my-5">Hello!</h1>
    <button class="btn btn-success" @click="increment()">
      Számláló: {{ counter }}
    </button>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@layouts/BaseLayout.vue"
import { useCounter } from '@stores/CounterStore.mjs'
import { mapState, mapActions } from 'pinia'

export default{
  components:{
    BaseLayout
  },
  computed:{
    ...mapState(useCounter, ['counter']) 
  },
  methods:{
    ...mapActions(useCounter, ['increment']) 
  }
}
</script>