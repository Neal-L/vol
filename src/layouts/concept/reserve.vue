<template>
<v-main class="pt-0">

  <v-container>
    <h1>輪轉概念</h1>
    <v-row >
      <v-col cols="12" md="6">
        <v-img class="first-img" src="@/images/position.png"></v-img>

      </v-col>
      <v-col cols="12" md="6" >
        <v-text class="text-1">{{ description }}</v-text>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <h2>接發球</h2>
    <v-row>
      <v-col cols="12" md="6">
        <reser1 />
      </v-col>
      <v-col cols="12" md="6">
        <reser2 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <reser3 />
      </v-col>
      <v-col cols="12" md="6">
        <reser4 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <reser5 />
      </v-col>
      <v-col cols="12" md="6">
        <reser6 />
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script setup>
import { ref } from 'vue'
import reser1 from '@/components/reserve/reser1.vue'
import reser2 from '@/components/reserve/reser2.vue'
import reser3 from '@/components/reserve/reser3.vue'
import reser4 from '@/components/reserve/reser4.vue'
import reser5 from '@/components/reserve/reser5.vue'
import reser6 from '@/components/reserve/reser6.vue'
const description = ref('排球是需要輪轉的運動，每當發球權轉換之時，需要順時鐘的輪轉，輪換成下一位發球的選手。從一號位開始發球，每當發球權轉換，就會是下一位發球的選手。正因為排球是個會輪轉的運動，所以在發球及接發球的過程中，就會衍生出許多的策略。')
</script>
