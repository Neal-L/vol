
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
            <v-img cover src="/src/images/site/Ushijima2.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/c66RN87YjNE?si=QQXF6i1yNIYzPfzC"
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
                src="https://youtube.com/embed/7DBQ-HWsCR4?si=WMy89vVLHwNQGOaq"
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

const title_1 = ref('舉球對角')
const title_2 = ref('球場上的關鍵突破')
const text_1 = ref('強大的進攻能力：舉球對角通常是球隊中最強大的進攻手之一。他們具有強大的攻擊力和得分能力，可以在各個進攻位置上產生重要的威脅。')
const text_2 = ref('全場進攻：舉球對角不僅能在前場進攻，還可能參與')
const text_3 = ref('穩定的心理素質：作為得分主力，舉球對角需要在比賽中保持冷靜和穩定的心態。必須能夠應對比賽壓力，')

const title_3 = ref('日本隊 西田有志')
const text_5 = ref('西田有志的風格與特質包括以下 :')
const text_6 = ref('擁有<b>強大的身體素質</b>使他在面對攔網時能夠有效地突破對手的進攻。')
const text_7 = ref('並有著<b>破壞力巨大的發球</b>，能夠再一開始就破壞對方接發球隊形，使對方設定的戰術難以執行。')

const title_4 = ref('日本隊 宮浦健人')
const text_9 = ref('宮浦健人的風格與特質包括以下 :')
const text_10 = ref('很好的使用上引臂出手的優勢，使他在面對攔網時能夠快速地出手，突破對手的攔網。')
const text_11 = ref('擁有上引臂出手的優勢所衍生的優勢，能在舉球不適這麼理想的狀態，打出更為有效的線路，增加在修正球時，更大的威脅性。')
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
