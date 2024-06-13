<template>
  <v-card>
    <v-img src="@/images/sign/中間.png"></v-img>
    <v-card-title class="card_title"><b>{{ card_title }}</b></v-card-title>
    <v-card-title >　{{ card_title1 }}</v-card-title>
    <v-card-text class="text_1">　　{{ card_text1 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text2 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text3 }}</v-card-text>
    <v-card-title >　{{ card_title2 }}</v-card-title>
    <v-card-text class="text_1">　　{{ card_text4 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text5 }}</v-card-text>
    <v-card-text class="text_1">　　{{ card_text6 }}</v-card-text>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'

  const card_title = ref('通常中間會有以下幾種球種:')
  const card_title1 = ref('藍色線的為快攻的球種:')
  const card_text1 = ref('分別有離舉球員近身的A,C與離舉球員有距離的B,D。')
  const card_text2 = ref('A快攻為在舉球員前方的近身球，而C快攻則是在舉球員後方的近身球。')
  const card_text3 = ref('B快攻為在舉球員前方的離身球，而D快攻則是在舉球員後方的離身球。')
  const card_title2 = ref('綠色線的為中間有高度的球種:')
  const card_text4 = ref('分別有離舉球員近身的2號,8號與離舉球員有距離的流2。')
  const card_text5 = ref('2中間有高度的球種則是在舉球員前方的近身球，而8則是在舉球員後方的近身球。')
  const card_text6 = ref('流2中間有高度的球種則是在舉球員前方的離身球。')

</script>
<style scoped>
    .card_title{
      font-size: 22px;
    }
    .text_1{
      font-size: 18px;
    }
  </style>
