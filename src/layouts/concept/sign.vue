<template>
  <v-main class="pt-0">

    <v-container>
      <h1>{{ title }}</h1>
      <v-row >
        <v-col cols="12" md="6">
          <mid />
        </v-col>

        <v-col cols="12" md="6">
          <long /> 
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  </template>

  <script setup>
    import { ref } from 'vue'
    const title = ref('暗號球種')
  </script>

  <style scoped>
    .card_title{
      font-size: 22px;
    }
    .text_1{
      font-size: 18px;
    }
  </style>
