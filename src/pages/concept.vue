<template>
  <v-main class="pt-0">
    <v-container>
      <v-row  class="d-flex flex-row">
        <v-col cols="12" md="6">
            <site />
            <position />
        </v-col>
        <v-col cols="12" md="6">
            <sign />
            <think />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import site from '../components/site.vue';
import position from '../components/position.vue';
import sign from '../components/sign.vue';
import think from '../components/think.vue';
</script>
