<script setup lang="ts">
defineProps({
  ferment: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink class="ferment-link" :to="{ name: 'ferment-details', params: { id: ferment.id } }">
    <div class="ferment-miniature">
      <h1 class="ferment-title">{{ ferment.name }}</h1>
      <div class="ferment-dates">
        <span>{{ new Intl.DateTimeFormat('fr-FR').format(ferment.startDate) }}</span>
        <span>{{ ferment.startDate }}</span>
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
}

.ferment-title {
  align-self: center;
}
.ferment-dates {
  display: flex;
  font-size: larger;
  margin: 0 50px;
  justify-content: space-between;
}

.ferment-link {
  padding: 0;
}
</style>
