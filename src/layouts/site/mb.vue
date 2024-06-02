<template>
  <v-main class="pt-0" >
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent">
            <v-card-title class="title-text-1">{{title_1}}: {{ title_2 }}</v-card-title>
            <v-card-text class="text-1">{{text_1}}</v-card-text>
            <v-card-text class="text-1">{{text_2}}</v-card-text>
            <v-card-text class="text-1">{{text_3}}</v-card-text>
            <v-card-text class="text-1">{{text_4}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-img cover src="/src/images/site/Hirugami.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/vuFEQz3FUac?si=xywnaIcaYxAXf7Vw"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="transparent">
            <v-text class="title-text-2">{{title_3}}</v-text>
            <v-card-text class="text-1">{{text_5}}</v-card-text>
            <v-card-text class="text-1">{{text_6}}</v-card-text>
            <v-card-text class="text-1">{{text_7}}</v-card-text>
            <v-card-text class="text-1">{{text_8}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent">
            <v-text class="title-text-2">{{title_4}}</v-text>
            <v-card-text class="text-1">{{text_9}}</v-card-text>
            <v-card-text class="text-1">{{text_10}}</v-card-text>
            <v-card-text class="text-1">{{text_11}}</v-card-text>
            <v-card-text class="text-1">{{text_12}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://youtube.com/embed/UFmfY6JgNsA?si=jHDDMJ1HHdUlpTwC"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup>
import { ref } from 'vue'

const title_1 = ref('攔中手')
const title_2 = ref('球場上的試煉之門')
const text_1 = ref('城牆守護者：將攔中手比喻為城牆守護者，他們站在網前就像一道堅不可摧的城牆，用強大的攔網能力保護自己的區域，使對手難以穿越。')
const text_2 = ref('突襲先鋒：攔中手在攔網後往往能夠迅速轉換到進攻的角色，就像突襲先鋒一樣，在瞬息萬變的比賽中迅速切換並參與進攻。')

const title_3 = ref('美國隊 David Smith')
const text_5 = ref('David Smith的風格與特質包括以下 :')
const text_6 = ref('擁有身高和臂展，使他在攔網時能夠有效地遮擋對手的進攻。')
const text_7 = ref('擁有多樣性的進攻手段，包括快攻和中距離攻擊。')


const title_4 = ref('美國隊 Maxwell Holt')
const text_9 = ref('Maxwell Holt的風格與特質包括以下 :')
const text_10 = ref('擁有身高和臂展，使他在攔網時能夠有效地遮擋對手的進攻。')
const text_11 = ref('擁有多樣性的進攻手段，包括快攻和中距離攻擊。')

</script>
<style scoped>
.pt-0{
  background-color: aliceblue;
}
.title-text-1{
  font-size: 36px;
  font-family:'Noto Sans TC', sans-serif;
  font-weight: bold;
  color:darkkhaki ;
}
.text-1{
  font-size: 20px;
  color :navy;
}
.title-text-2{
  font-size: 28px;
  font-weight: bold;
  color:darkkhaki ;
}
</style>
