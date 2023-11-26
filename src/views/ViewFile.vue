<template>

  <input
    type="file"
    @change="onFileChanged($event)"
    accept="application/pdf"
    capture
  />

</template>

<script setup lang="ts">

import {onFileChanged} from "@/modules/core";
</script>

<style scoped>

</style>
