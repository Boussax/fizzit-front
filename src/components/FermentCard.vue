<script setup lang="ts">
import { Ferment } from '@/assets/models/ferment'

defineProps({
  ferment: {
    type: Ferment,
    required: true
  }
})
</script>

<template>
  <RouterLink class="ferment-link" :to="{ name: 'ferment-details', params: { id: ferment.id } }">
    <div class="ferment-miniature">
      <h1>{{ ferment.name }}</h1>
      <h2>{{ ferment.type }}</h2>
      <div class="ferment-dates">
        <span>{{ ferment.startDate }}D</span>
        <span>{{ ferment.fermentationDuration }} days</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.ferment-miniature {
  display: flex;
  flex-direction: column;
  color: aliceblue;
  background-color: brown;
  margin: 4px;
  > * {
    align-self: center;
  }
}
.ferment-dates {
  display: flex;
  font-size: larger;
  margin: 0 50px;
  justify-content: space-between;
  align-items: center;
  > * {
    margin: 0 4px;
  }
}

.ferment-link {
  padding: 0;
}
</style>
