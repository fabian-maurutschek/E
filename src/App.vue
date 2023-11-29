<template>
  <v-app>
    <v-main>
      <NavBar/>
      <ViewFile/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import ViewFile from "@/views/ViewFile.vue";
import NavBar from "@/components/shared/NavBar.vue";
</script>
