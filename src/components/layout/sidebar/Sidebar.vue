<template>
  <div :class="['sidebar', { 'sidebar-open': isOpen }]">
    <router-link class="sidebar-link" v-for="link in links" :key="link.name" :to="link.href">{{
      link.name
    }}</router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
const links = [
  {
    name: 'Typography',
    href: '/typography'
  },
  {
    name: 'Button',
    href: '/button'
  },
  { name: 'Checkbox', href: '/checkbox' },
  {
    name: 'Radio',
    href: '/radio'
  },
  {
    name: 'Progress',
    href: '/progress'
  },
  {
    name: 'Input',
    href: '/input'
  }
]
</script>

<style scoped lang="less">
.sidebar {
  position: fixed;
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  width: 250px;
  padding: 20px;
  transition: 0.2s transform;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &-open {
    transform: translateX(0px);
  }
  &-link {
    display: block;
    border-radius: 12px;
    transition: 0.2s color;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
