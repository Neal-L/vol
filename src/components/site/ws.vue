<template>
  <v-card height="245">
    <v-img  cover src="/src/images/site/bokuto3.jpg"></v-img>
    <v-btn :color="color" variant="text" class=text-1 rounded="xl" to="/ws">{{ text_1 }}</v-btn>
    <!-- <v-card-text class="text-1">{{ text_1 }}</v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const text_1 = ref('主攻手')
const color = ref('white')

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
