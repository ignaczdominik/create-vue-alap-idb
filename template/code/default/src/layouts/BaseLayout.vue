<template>
    <header>
        <BSNavBar />
    </header>
    <main class="container">
        <slot />
    </main>
</template>
<script>
import BSNavBar from "@components/layout/BSNavBar.vue"
export default {
    components: {
        BSNavBar
    }
}
</script>