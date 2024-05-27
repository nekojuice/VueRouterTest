<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function redir() {
  router.push('/about')
}
</script>

<template>
  <main>
    <button @click="redir()">導向About!!!!</button>
    <button @click="this.$router.push('/about')">導向About2!!!!</button>
  </main>
</template>
