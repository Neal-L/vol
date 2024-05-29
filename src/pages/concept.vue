<template>
  <v-main class="pt-0">
    <v-container>
      <v-row  justify="center">
        <v-col md="6">
            <site />
            <position />
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
