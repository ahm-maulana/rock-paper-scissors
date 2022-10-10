<script setup>
import {onMounted} from 'vue'
import Game from './components/Game.vue'

onMounted(() => {
  document.title = 'RPS Game'
})

</script>

<template>
  <Game></Game>
</template>

<style scoped>

</style>
