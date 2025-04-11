<script setup lang="ts">
import ProcessVersion from "@/components/ProcessVersions.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page and the versions of Node.js, Electron and Chromium</h1>
    <ProcessVersion />
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    justify-content: center;
  }
}
</style>
