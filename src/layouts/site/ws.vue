<template>
  <v-main class="pt-0">
    <v-container>
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
            <v-img cover src="/src/images/site/bokuto2.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/U183xgd7G5M?si=Yt8fZzvRXcJbCXJX"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="transparent">
            <v-text class="title-text-2">{{title_3}}</v-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup>
import { ref } from 'vue'

const title_1 = ref('主攻手')
const title_2 = ref('球場上的靈魂核心')
const text_1 = ref('進攻能力： 主攻手是排球隊伍中的一個位置，通常是在前排的位置，負責進攻和得分。主攻手在進攻時通常是球隊的主要得分點，他們擅長在網前接受二傳手的傳球，然後進行強有力的扣球攻擊。')
const text_2 = ref('進攻能力： 主攻手需要具備優秀的進攻技巧和力量，以能夠有效地擊打球隊的對手。他們通常會參與各種進攻形式，包括快攻、高球和側面攻擊等。')
const text_3 = ref('網前布局： 主攻手在進攻和防守時需要能夠巧妙地利用網前的空間，擁有良好的瞭解網前局勢的能力。這包括選擇適當的攻擊路線，以及在防守時有效地擋住對手的攻擊。')
const text_4 = ref('多面手段： 儘管主攻手的主要職責是在進攻時得分，但他們也需要在防守時做出貢獻。這可能包括參與擋網、接擋和反擊等工作，以減少對手的得分。')

const title_3 = ref('日本隊 石川祐希')
</script>
<style scoped>
.title-text-1{
  font-size: 36px;
  font-family:'Noto Sans TC', sans-serif;
  font-weight: bold;
  color:darkkhaki ;
}
.text-1{
  font-size: 20px;
}
</style>
