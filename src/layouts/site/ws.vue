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
                src="https://youtube.com/embed/W-bKj81StKY?si=roKVeAgVQoVA3O1x"
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

const title_1 = ref('主攻手')
const title_2 = ref('球場上的靈魂核心')
const text_1 = ref('進攻能力： 主攻手是排球隊伍中的一個位置，通常是在前排的位置，負責進攻和得分。主攻手在進攻時通常是球隊的主要得分點，他們擅長在網前接受二傳手的傳球，然後進行強有力的扣球攻擊。')
const text_2 = ref('進攻能力： 主攻手需要具備優秀的進攻技巧和力量，以能夠有效地擊打球隊的對手。他們通常會參與各種進攻形式，包括快攻、高球和側面攻擊等。')
const text_3 = ref('網前布局： 主攻手在進攻和防守時需要能夠巧妙地利用網前的空間，擁有良好的瞭解網前局勢的能力。這包括選擇適當的攻擊路線，以及在防守時有效地擋住對手的攻擊。')
const text_4 = ref('多面手段： 儘管主攻手的主要職責是在進攻時得分，但他們也需要在防守時做出貢獻。這可能包括參與擋網、接擋和反擊等工作，以減少對手的得分。')

const title_3 = ref('日本隊 石川祐希')
const text_5 = ref('石川祐希的風格與特質包括以下 :')
const text_6 = ref('以強大的攻擊力聞名，特別擅長扣球技術。他在場上能夠有效地攻破對方陣線，成為球隊進攻的主要火力點。')
const text_7 = ref('並且在場上展現出積極的態度，充滿活力，這種特質不僅在比賽中能夠激勵隊友，也使他成為球場上的重要氛圍創造者。')
const text_8 = ref('除了攻擊，石川祐希可能在全場防守中也有出色的表現。他可能具有快速的移動能力和良好的接球技術，使他在進攻和防守之間能夠快速轉換角色。')
const title_4 = ref('法國隊 Ngapeth')
const text_9 = ref('Ngapeth的風格與特質包括以下 :')
const text_10 = ref('以其獨特而具有創意的攻擊風格而聞名。他善於使用各種攻擊技巧，包括扣球、吊球和拉球，使對手難以預測他的下一步動作。')
const text_11 = ref('儘管主要是進攻手，Ngapeth在防守方面同樣出色。在全場防守中表現出色，有時甚至擔任自由球員的角色，展現他的靈活性和敏捷度。')
const text_12 = ref('他在場上具有良好的比賽閱讀能力，他能夠快速適應比賽的變化，採取最有效的策略。這種隨機應變的能力使他成為關鍵時刻的可靠球員。')
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
.title-text-2{
  font-size: 28px;
  font-weight: bold;
  color:darkkhaki ;
}
</style>
