<template>
  <v-card>
    <v-img src="@/images/sign/長球.png"></v-img>
    <v-card-title class="card_title"><b>{{ card_title }}</b></v-card-title>
    <v-card-title >　{{ card_title1 }}</v-card-title>
    <v-card-text class="text_1">　　{{ card_text1 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text2 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text3 }}</v-card-text>
    <v-card-title >　{{ card_title2 }}</v-card-title>
    <v-card-text class="text_1">　　{{ card_text4 }}</v-card-text>

  </v-card>
</template>
<script setup>
  import { ref } from 'vue'

  const card_title = ref('通常長球會有以下幾種球種:')
  const card_title1 = ref('藍色線的為兩邊的長球球種:')
  const card_text1 = ref('分別有與標竿一樣高度的0號、9號、比標竿高的4號、7號及比標竿矮的6號。')
  const card_text2 = ref('0號、4號與6號為在舉球員前方的長球。')
  const card_text3 = ref('而7號、9號則是在舉球員後方的長球。')
  const card_title2 = ref('紅色線的為界於長球與中間的球種:')
  const card_text4 = ref('3號為在舉球員前方的但不到標竿旁的長球。')


</script>
<style scoped>
    .card_title{
      font-size: 22px;
    }
    .text_1{
      font-size: 18px;
    }
  </style>
