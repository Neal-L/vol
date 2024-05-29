<template>
  <v-card height="420">
    <v-img  cover src="https://i.imgur.com/8c1LdlL.jpg"></v-img>
    <v-btn color="white" variant="text" class=text-1 rounded="xl" to="/sign">{{ text_1 }}</v-btn>
    <!-- <v-card-text class="text-1">{{ text_1 }}</v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const text_1 = ref('暗號')
</script>

<style scoped>
.text-1{
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  right: 10px;
  bottom: 10px;
}
</style>
