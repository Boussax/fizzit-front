<script setup lang="ts">
import router from '@/router'
import FermentCard from '../components/FermentCard.vue'
import FermentService from '../services/FermentService'
import { ref, onMounted } from 'vue'

const ferments = ref()
let selectedFerments: number[] = []
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
  const index = selectedFerments.findIndex((fermentId) => fermentId === id)
  if (index === -1) {
    console.log('id not found in array')
    selectedFerments.push(id)
  } else {
    console.log('id found in array')
    selectedFerments.splice(index, 1)
  }
  console.log(selectedFerments)
}

function deleteFerments() {
  if (selectedFerments.length > 0) {
    for (let index of selectedFerments) {
      console.log('deleting ferment with id: ', selectedFerments[index])
      FermentService.deleteFerment(selectedFerments[index]).then((response) => {
        console.log(response)
        selectedFerments = []
        router.push({ name: 'dashboard' })
      })
    }
  } else {
    console.log('no selected ferment to delete')
  }
}
</script>

<template>
  <main>
    <div v-for="ferment in ferments" :key="ferment.id">
      <input type="checkbox" @click="toggleFerment(ferment.id)" />
      <FermentCard :ferment="ferment" />
    </div>
    <div class="footer">
      <RouterLink :to="{ name: 'ferment-creation' }" class="button-new">+</RouterLink>
      <button @click="deleteFerments()">Delete selected ferments</button>
    </div>
  </main>
  <pre>{{ selectedFerments }}</pre>
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
.footer {
  display: flex;
  background-color: inherit;
  justify-content: space-between;
  color: white;
}
</style>
