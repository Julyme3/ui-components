<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line-block">
    <ProgressBar :percent="percent" max-width="400px" />
    <Button label="increase progress" @click="increaseProgress" :disabled="limitActive" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from '@/components/progress/ProgressBar.vue'
import Button from '@/components/button/Button.vue'

const percent = ref(0)
const limitActive = ref(false)

const increaseProgress = () => {
  if (percent.value >= 100) {
    limitActive.value = true
    return
  }

  percent.value += 10
}
</script>

<style scoped></style>
