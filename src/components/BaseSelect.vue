<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { InputHTMLAttributes } from 'vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array<string>,
      default: ['']
    }
  }
}
</script>
<template>
  <label v-if="label">{{ label }}</label>
  <select
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', ($event.target as EventTarget & InputHTMLAttributes).value)
      }
    }"
    :value="modelValue"
    class="field"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
