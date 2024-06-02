
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
            <v-img cover src="/src/images/site/yaku2.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card color="transparent" height="500px">
            <iframe width="100%" height="100%"
                src="https://youtube.com/embed/pOAxvRS-wPo?si=mTrhUuwDxz8Y59n9"
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
                src="https://www.youtube.com/embed/fOKc8kzl08c?si=XbClO4HAR8b-txoU"
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

const title_1 = ref('自由球員')
const title_2 = ref('球場上的守護神')
const text_1 = ref('專注防守：自由球員的主要職責是提供卓越的防守表現。他們通常以迅速、靈活的動作和精準的傳球技巧為球隊提供強大的防守支援。')
const text_2 = ref('優秀的接發球能力：由球員通常負責接發球，因此他們需要具備優秀的接發球技能，能夠穩定地接住對手發出的發球。')
const text_3 = ref('反應速度：自由球員需要迅速反應對手的進攻，以有效地阻擋和接住來自對手的攻擊。')
const text_4 = ref('精準的防守位置：在場上自由球員需要具備準確的防守位置，以最大程度地涵蓋可能的攻擊路徑。')

const title_3 = ref('法國隊 Jenia Grebennikov')
const text_5 = ref('Jenia Grebennikov的風格與特質包括以下 :')
const text_6 = ref('其以精湛的防守技能聞名，能夠迅速反應對手的進攻，穩定地接住攻擊球，確保球隊能夠繼續進攻。')
const text_7 = ref('並具有優秀的接發球技能，確保球隊擁有穩定的一傳。')
const text_8 = ref('擁有優秀的球場視野，能夠預測對手的攻擊方向，選擇最佳的防守位置，有效地阻擋對手的進攻。')

const title_4 = ref('波蘭隊 Pawel Zatorski')
const text_9 = ref('Pawel Zatorski的風格與特質包括以下 :')
const text_10 = ref('靠著靈活迅速的動作，能夠在球場上迅速移動，應對不同方向的攻擊，並且有能力進行極具挑戰性的救球動作。')
const text_11 = ref('並在高強度的比賽中，能夠保持冷靜並展現穩定的心態</b>，即便面對困難的情況仍能發揮出色。')

</script>
<style scoped>
.pt-0{
  background-color: #bd0220;
}
.title-text-1{
  font-size: 36px;
  font-family:'Noto Sans TC', sans-serif;
  font-weight: bold;
  color:whitesmoke ;
}
.text-1{
  font-size: 20px;
  color: whitesmoke;
}
.title-text-2{
  font-size: 28px;
  font-weight: bold;
  color:whitesmoke ;
}
</style>
