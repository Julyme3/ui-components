<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import MainHeader from '@/components/layout/header/Header.vue'
import Sidebar from '@/components/layout/sidebar/Sidebar.vue'

const sidebarOpen = ref(true)
const toggleMenu = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <button class="sidebar-toggle" @click="toggleMenu" type="button">&#5125;</button>
  <MainHeader />
  <div class="container">
    <Sidebar :isOpen="sidebarOpen" />
    <div :class="['content', { 'content-full': !sidebarOpen }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 30px;
  max-width: calc(100% - 250px);
  transition: 0.2s all;
  transform: translateX(250px);
  &-full {
    max-width: 100%;
    transform: translateX(0);
  }
}
.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (@tablet-widths-only) {
}
</style>
