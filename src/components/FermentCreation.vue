<script setup lang="ts">
import { PartialFerment } from '@/assets/models/ferment'
import FermentService from '@/services/FermentService'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import router from '@/router'

const typeOptions: string[] = ['Ginger beer', 'Keffir', 'Kimchi', 'Kombucha', 'Sauerkraut', 'Other']
const ferment = ref<PartialFerment>(new PartialFerment())
const today = new Date()
const TWO_WEEKS_IN_SECONDS = 14 * 24 * 60 * 60 * 1000

function checkPartialFerment(ferment: PartialFerment) {
  if (ferment.name === '') {
    console.log('name not set')
    return false
  }
  if (ferment.type === '') {
    console.log('type not set')
    return false
  }
  if (ferment.fermentationDuration === 0) {
    console.log('duration not set')
    return false
  }
  return true
}
function sendForm(ferment: PartialFerment) {
  if (checkPartialFerment(ferment)) {
    FermentService.createFerment(ferment)
      .then((response) => {
        console.log(response)
        router.push({ path: '/' })
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    console.log('please set a name, type and duration')
  }
}
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent="sendForm(ferment)" class="ferment-info-form">
      <BaseInput v-model="ferment.name" type="text" label="Name" />

      <BaseSelect v-model="ferment.type" label="Ferment Type" :options="typeOptions" />

      <label for="startDate">Started on</label>
      <VueDatePicker
        v-model="ferment.startDate"
        :max-date="today"
        :min-date="new Date(today.getTime() - TWO_WEEKS_IN_SECONDS)"
      ></VueDatePicker>

      <BaseInput
        v-model="ferment.fermentationDuration"
        type="number"
        label="Theoretical fermentation duration (in days)"
      />

      <div class="form-footer">
        <RouterLink :to="{ name: 'dashboard' }" class="cancel button">Cancel</RouterLink>
        <button type="submit" @submit.prevent="sendForm(ferment)" class="create button">
          Create
        </button>
      </div>
    </form>
  </div>
  <pre>{{ ferment }}</pre>
</template>

<style scoped>
.wrapper {
  background-color: grey;
  margin: 0;
}
.ferment-info-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: inherit;
  > input,
  select {
    margin-bottom: 5px;
  }
}
.form-footer {
  display: flex;
  background-color: inherit;
  justify-content: space-between;
  color: white;
}
.cancel {
  background-color: red;
  color: inherit;
}
.create {
  background-color: green;
  color: inherit;
}

.button {
  border: 2px white solid;
  border-radius: 6px;
  margin: 3px;
  padding: 3px;
}
</style>
