
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
            <v-img cover src="/src/images/site/miya2.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/Y0serh-85TQ?si=0b86wpwuCSsHrHrW"
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
                src="https://youtube.com/embed/WkBwTIAafN0?si=L3WL9jjDcW0xqchI"
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

const title_1 = ref('舉球員')
const title_2 = ref('球場上的指揮官')
const text_1 = ref('精確技術：舉球員需要擁有高度的技術水平，尤其是在傳球和分配球方面。他們的傳球需要準確無誤，以確保進攻的順利進行。')
const text_2 = ref('球場視野：舉球員需要具備優越的球場視野，能夠快速評估比賽狀況，做出正確的戰術決策。')
const text_3 = ref('快速反應：有些舉球員以創意豐富的球技而聞名，他們可以在各種情境中提供不同風格的分配球，使進攻更具變化性。')
const text_4 = ref('高抗壓性：舉球員需要在壓力下保持冷靜，不僅要應對比賽的壓力，還要應對可能來自對手和觀眾的壓力。')

const title_3 = ref('日本隊 關田成大')
const text_5 = ref('關田成大的風格與特質包括以下 :')
const text_6 = ref('擁有優越的傳球技巧和分配球能力，他的精準傳和出色的球場視野使他能夠有效地組織進攻，提高球隊整體效能。')
const text_7 = ref('並且在場上展現出冷靜、穩健的態度，在比賽壓力下保持冷靜，做出明智的決策，這種特質在舉球員這個位置上尤為重要。')
const text_8 = ref('擁有出色的球場視野，能夠迅速判斷比賽狀況並做出正確的決策。這對於舉球員來說至關重要，因為他們需要迅速適應變化的情勢。')

const title_4 = ref('伊朗隊 Marouf')
const text_9 = ref('Marouf的風格與特質包括以下 :')
const text_10 = ref('以其卓越的分球技巧而聞名。他能夠在各種情境中精確地傳球給隊友。')
const text_11 = ref('並擁有精銳的上手托球技術，使得球在他手上像他身體的一部份，擁有舉球魔術師的美名。')
const text_12 = ref('他展現出創造性的球技，包括各種扣球、隨機發球等，使他的進攻更加多變和具備威脅性。')
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
