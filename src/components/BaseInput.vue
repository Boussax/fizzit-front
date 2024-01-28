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
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="field"
    :placeholder="label"
    @input="$emit('update:modelValue', ($event.target as EventTarget & InputHTMLAttributes).value)"
  />
</template>
