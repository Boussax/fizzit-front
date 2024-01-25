<script setup lang="ts">
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const name = ref('')
const type = ref('')
const startDate = ref()
const fermentationDuration = ref(0)

const options = ref(['Ginger Beer', 'Keffir', 'Kombucha', 'Sauerkraut'])
</script>

<template>
  <div class="wrapper">
    <div class="ferment-info-form">
      <label for="name">Name</label>
      <input v-model="name" placeholder="edit me" />
      <label for="type">Ferment type</label>
      <select v-model="type" placeholder="choose ferment type">
        <option v-for="(option, index) in options" :value="option" :key="index">
          {{ option }}
        </option>
      </select>
      <label for="startDate">Started on</label>

      <VueDatePicker v-model="startDate"></VueDatePicker>
      <label>Theoratical fermentation duration (in days)</label>
      <input v-model="fermentationDuration" type="number" placeholder="edit me" />
    </div>
    <div class="form-footer">
      <RouterLink :to="{ name: 'dashboard' }" class="cancel button">Cancel</RouterLink>
      <RouterLink :to="{ name: 'dashboard' }" class="create button">Create</RouterLink>
    </div>
  </div>
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
