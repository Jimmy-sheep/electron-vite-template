<script setup lang="ts">
import { reactive } from "vue";

const versions = reactive({ ...window.versions });
</script>

<template>
  <ul class="versions">
    <li class="node-version">Node v{{ versions.node }}</li>
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
  </ul>
</template>

<style scoped>
.versions {
  padding: 15px 0;
  font-family: 'Menlo', 'Lucida Console', monospace;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  border-radius: 22px;
  background-color: #F1F3F5;
  backdrop-filter: blur(24px);
}

.versions li {
  display: block;
  float: left;
  border-right: 1px solid var(--vt-c-divider-light-2);
  padding: 0 20px;
  font-size: 14px;
  line-height: 14px;
  opacity: 0.8;

  &:last-child {
    border: none;
  }
}
</style>
