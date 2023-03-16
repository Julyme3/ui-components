<template>
  <div class="progress">
    <span class="progress-percent">{{ percent }}%</span>
    <svg width="120" height="120" viewBox="0 0 120 120" class="progress-svg">
      <circle class="progress-back" cx="60" cy="60" r="54" fill="none" stroke-width="12" />
      <circle
        class="progress-line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke-width="12"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  percent: Number
}>()
</script>

<style scoped lang="less">
.progress {
  position: relative;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  &-svg {
    transform: rotate(-90deg);
  }
  &-percent {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: var(--primary);
  }
  &-back {
    stroke: var(--primary-hover);
  }
  &-line {
    stroke-dasharray: 100;
    transition: stroke-dashoffset 0.5s;
    stroke: var(--primary);
  }
}
</style>
