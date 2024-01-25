<script setup lang="ts">
import FermentCard from '../components/FermentCard.vue'
import FermentService from '../services/FermentService'
import { ref, onMounted } from 'vue'

const ferments = ref()

onMounted(() => {
  FermentService.getFerments()
    .then((response) => {
      ferments.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main>
    <div v-for="ferment in ferments" :key="ferment.id">
      <FermentCard :ferment="ferment" />
    </div>

    <RouterLink :to="{ name: 'ferment-creation' }" class="button-new">+</RouterLink>
  </main>
</template>

<style scoped>
.button-new {
  display: flex;
  width: 30px;
  height: 30px;
  background-color: brown;
  color: white;
  justify-content: center;
}
</style>
