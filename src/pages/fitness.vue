<template>
  <v-main class="pt-0">
    <v-container>

      <v-row>
        <v-col cols="12">
          <h2>體能</h2>
        </v-col>
        <v-col v-for="(list, index) in fitlist" :key="index" cols="12" md="3">
          <v-card  height="400">
            <v-img cover :src="list.imageUrl" height="200"></v-img>
            <v-btn :color="color" variant="text" class="text-1" :to="list.path">{{ list.title }}</v-btn>
            <v-card-text style= "font-size:15px">{{ list.description }}</v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>

import { ref } from 'vue'
const color = ref('white');
const fitlist=ref([
  {
    title:'胸',
    path:'chest',
    description:'胸肌在排球運動中的擊球力量、穩定性與控制、協調性、防守動作至關重要。',
    imageUrl: "https://gymbeastics.com/wp-content/uploads/2023/01/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88-24.webp"
  },
  {
    title:'背',
    path:'back',
    description:'背肌在排球運動中的擊球力量、穩定性與控制、協調性、防守動作至關重要。',
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/%E8%83%8C%E8%82%8C%E5%88%86%E4%BD%88-1629271761.png"
  },
  {
    title:'肩',
    path:'shoulder',
    description:'肩肌在排球運動中的擊球力量、穩定性與控制、協調性、防守動作至關重要。',
    imageUrl: "https://blog.worldgymtaiwan.com/hs-fs/hubfs/%E6%96%87%E7%AB%A0%E5%B0%88%E7%94%A8%E5%9C%96%E7%89%87/%E8%82%A9%E8%A2%96%E8%82%8C%E7%BE%A4.png?width=700&name=%E8%82%A9%E8%A2%96%E8%82%8C%E7%BE%A4.png"
  },
  {
    title:'腿',
    path:'leg',
    description:'腿肌在排球運動中的擊球力量、穩定性與控制、協調性、防守動作至關重要。',
    imageUrl: "https://vicpersonaltrainer.com/wp-content/uploads/2022/03/e58a83e7b79ae885bfe5be8c.jpg?w=960"
  }
])



</script>
<style scoped>
.text-1 {
  font-size: 24px;
  font-weight: 600;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
