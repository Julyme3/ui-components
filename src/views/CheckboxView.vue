<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model="checkboxActiveDisabled"
    />
  </div>
</template>

<script setup lang="ts">
import Checkbox from '@/components/checkbox/Checkbox.vue'
import { ref } from 'vue'

const checkboxActive = ref(true)
const checkboxActiveDisabled = ref(false)
const checkboxDisabled = ref(true)
</script>

<style scoped></style>
