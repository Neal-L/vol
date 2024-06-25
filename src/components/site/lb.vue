<template>
  <v-card height="245">
    <v-img  cover src="/src/images/site/Nishinoya3.jpg"  @click="navigateToWsPage"></v-img>
    <v-btn :color="color" variant="text" class=text-1 rounded="xl" to="/lb">{{ text_1 }}</v-btn>
    <!-- <v-card-text class="text-1">{{ text_1 }}</v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const text_1 = ref('自由球員')
const color = ref('white')

const router = useRouter();
const navigateToWsPage = () => {
  router.push('/lb');
};
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
