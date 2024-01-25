<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 10px;
  border: 3px black solid;
}
</style>
