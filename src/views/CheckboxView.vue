<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <Checkbox label="Checkbox" name="checkboxActive" value="I like it" v-model="checkboxActive" />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <Checkbox
      label="Checkbox"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model="checkboxActiveDisabled"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line-block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <CheckboxGroup v-model:selectedValues="selectedHeroes" name="heroes" :options="listOfHeroes" />
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line-block">
    <p>Switch: {{ switchProfessional }}</p>
    <checkbox
      label="I'm a professional"
      name="switch"
      value="I'm a professional"
      type="switch"
      v-model="switchProfessional"
    />
  </div>
</template>

<script setup lang="ts">
import Checkbox from '@/components/checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue'
import { ref } from 'vue'

const checkboxActive = ref(true)
const checkboxActiveDisabled = ref(false)
const checkboxDisabled = ref(true)
const switchProfessional = ref(true)

const listOfHeroes = ['Spider Man', 'Batman', 'Tor', 'Loki']
const selectedHeroes = ref(['Loki', 'Batman'])
</script>

<style scoped></style>
