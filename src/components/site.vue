<template>
  <v-card height="420">
    <v-img  cover src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k6IY0i6giGZoqQnpzoNEow.png"></v-img>
    <v-btn color="white" variant="text" class=text-1 rounded="xl" to="/site">{{ text_1 }}</v-btn>
    <!-- <v-card-text class="text-1">{{ text_1 }}</v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const text_1 = ref('球員位置')
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
