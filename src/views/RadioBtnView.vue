<template>
  <h1 class="heading-1">RadioBtn</h1>
  <h2 class="heading-2">RadioBtn Active</h2>
  <p>Selected radio buttons: {{ radioChecked }}</p>
  <div class="line-block" v-for="radio in radioOptions" :key="radio">
    <RadioBtn v-model="radioChecked" :label="radio" :value="radio" name="radioBtn" />
  </div>
  <h2 class="heading-2">RadioBtn Disabled</h2>
  <div class="line-block">
    <RadioBtn
      v-model="radioDisabledChecked"
      label="RadioBtn Disabled"
      value="RadioBtnDisabled"
      name="radioBtnDisabled"
      :disabled="radioDisabled"
    />
  </div>
</template>

<script setup lang="ts">
import RadioBtn from '@/components/radio/RadioBtn.vue'
import { ref } from 'vue'

const radioOptions = ['Radio1', 'Radio2', 'Radio3']
const radioChecked = ref('')
const radioDisabled = ref(true)
const radioDisabledChecked = ref('RadioBtnDisabled')
</script>

<style scoped lang="less"></style>
