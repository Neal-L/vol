<template>
  <v-card height="420">
    <v-img  cover src="https://megapx-assets.dcard.tw/images/f2c7c488-6049-4a81-96a8-c1fde0db114b/640.webp"></v-img>
    <v-btn color="white" variant="text" class=text-1 rounded="xl" to="/think">{{ text_1 }}</v-btn>
    <!-- <v-card-text class="text-1">{{ text_1 }}</v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const text_1 = ref('思考方向')
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
