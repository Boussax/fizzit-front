<script setup lang="ts">
import router from '@/router'
import FermentCard from '../components/FermentCard.vue'
import FermentService from '../services/FermentService'
import { ref, onMounted } from 'vue'
import type { Ferment } from '@/assets/models/ferment'

const ferments = ref()
const selectedFerments = ref<Array<number>>([])
onMounted(() => {
  FermentService.getFerments()
    .then((response) => {
      ferments.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function toggleFerment(id: number) {
  const index = selectedFerments.value.findIndex((fermentId) => fermentId === id)
  if (index === -1) {
    console.log('id not found in array')
    selectedFerments.value.push(id)
  } else {
    console.log('id found in array')
    selectedFerments.value.splice(index, 1)
  }
  console.log(selectedFerments.value)
}

function deleteFerments() {
  for (let id of selectedFerments.value as number[]) {
    FermentService.deleteFerment(id)
      .then((response) => {
        console.log(response)
        const index = ferments.value.findIndex((ferment: Ferment) => ferment.id === id)
        ferments.value.splice(index, 1)
      })
      .catch((error) => console.log(error))
  }
  selectedFerments.value = []
}
</script>

<template>
  <main>
    <div v-for="ferment in ferments" :key="ferment.id" class="dashboard-line">
      <FermentCard :ferment="ferment" />
      <input type="checkbox" @click="toggleFerment(ferment.id)" />
    </div>
    <div class="footer">
      <RouterLink :to="{ name: 'ferment-creation' }" class="button-new">+</RouterLink>
      <button :disabled="selectedFerments.length === 0" @click="deleteFerments()">
        Delete selected ferments
      </button>
    </div>
  </main>
</template>

<style scoped>
.dashboard-line {
  display: flex;
  align-items: center;
}
.button-new {
  display: flex;
  width: 30px;
  height: 30px;
  background-color: brown;
  color: white;
  justify-content: center;
}
.footer {
  display: flex;
  background-color: inherit;
  justify-content: space-between;
  color: white;
}
</style>
