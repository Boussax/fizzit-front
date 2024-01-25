<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FermentService from '@/services/FermentService'
import type { Ferment } from '@/assets/models/ferment'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const ferment = ref<Ferment | null>(null)

onMounted(() => {
  FermentService.getFerment(props.id)
    .then((response) => (ferment.value = response.data))
    .catch((error) => console.log(error))
})
</script>

<template>
  <div v-if="ferment">
    <h1>{{ ferment.name }}</h1>
    <p>{{ ferment.startDate }}</p>
    <p>{{ ferment.type }}</p>
  </div>
</template>
