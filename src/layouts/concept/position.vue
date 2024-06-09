<template>
<v-main class="pt-0">

  <!-- <v-container>
    <h1>輪轉</h1>
    <v-row >
      <v-col cols="12" md="6">
        <v-img class="first-img" src="@/images/position.png"></v-img>

      </v-col>
      <v-col cols="12" md="6" >
        <v-text class="text-1">{{ description }}</v-text>
      </v-col>
    </v-row>
  </v-container> -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>接發球</h2>
        <reser1 />
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script setup>
import reser1 from '@/components/position/reser1.vue';
const description = ref('排球是需要輪轉的運動，每當發球權轉換之時，需要順時鐘的輪轉，輪換成下一位發球的選手。從一號位開始發球，每當發球權轉換，就會是下一位發球的選手。正因為排球是個會輪轉的運動，所以在發球及接發球的過程中，就會衍生出許多的策略。')
</script>
