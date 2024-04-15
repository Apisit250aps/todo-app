<script setup>
import SideBarComponent from './components/Navs/SideBarComponent.vue';
</script>

<template>
  <SideBarComponent is-show="true"/>
  <main>
    <RouterView />
  </main>
</template>