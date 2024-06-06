<template>
  <v-main class="pt-0">
    <v-container>
      <h2>{{ title }}</h2>
      <v-row>
        <v-col cols="6" md="8">
          <v-card color="transparent">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QbhXFP1raGM?si=DN_SAJwYGyc9ehVE"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rqbE6WpAy6I?si=0Bs7xHVxeqOCtsrY"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P8JgX8-Ds34?si=Mv-JHCUpShr1iOFU"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uFTYAHLaP-k?si=XP25P7l_r0ECNOKS"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4D8KPkCXZxY?si=bCvEIIayKiOqwDIe"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card >
            <v-card-title class="title-text-2">{{ title2 }}</v-card-title>
            <v-list color="white" >
              <v-list-item v-for="(item, index) in train" :key="index" >
                <v-list-item-content>
                  <v-list-item-title class="content">{{ item.content }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-title class="title-text-2">{{ title3 }}</v-card-title>
            <v-list>
              <v-list-item v-for="(item, index) in extra" :key="index" >
                <v-list-item-content>
                  <v-list-item-title class="content">{{ item.content }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
  </template>

  <script setup>
  import { ref } from 'vue'
  const title = ref('腿部訓練')
  const title2 = ref('建議訓練菜單')
  const title3 = ref('額外訓練項目')
  const train = ref([
    {content : '髖外展  4組*12次(最大RPM60%)'},
    {content : '髖內收  4組*12次(最大RPM60%)'},
    {content : '深蹲  4組*6次(最大RPM80%)'},
    {content : '硬舉  4組*6次(最大RPM80%)'},

  ])
  const extra = ref([
    {content : '保加利亞分腿蹲 4組*8次(最大RPM20%)'},
    {content : '壺鈴擺盪  4組*8次(最大RPM80%)'},
  ])

  </script>
  <style scoped>
  .title-text-2{
    font-size: 26px;
    font-weight: 600;
  }
  .content{
    font-size: 18px;
    padding-bottom: 5px;
  }
  </style>

