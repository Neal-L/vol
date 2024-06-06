<template>
  <v-main class="pt-0">
    <v-container>
      <h2>{{ title }}</h2>
      <v-row>
        <v-col cols="6" md="8">
          <v-card color="transparent">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rVtavxnF_Dw?si=qfgZG2Do_qUBSQwG"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H4gz2TTErmU?si=j7BgqcsHeqsxXNBh"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LJllpqWeMHI?si=061eF52dyJRmEenw"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6C3jequN4zA?si=-p6lSxXIyhXF_pXY"
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
  const title = ref('背部與二頭肌訓練')
  const title2 = ref('建議訓練菜單')
  const title3 = ref('額外訓練項目')
  const train = ref([
    {content : '(寬距/窄距)坐姿划船:  4組*12次(最大RPM40%)'},
    {content : '(寬距/窄距)高位下拉:  4組*8-12次(最大RPM80%-40%)'},
    {content : '啞鈴划船: 4組*8-12次(最大RPM80%-40%)'},
    {content : '啞鈴上斜彎舉: 4組*8-12次(最大RPM80%-40%)'},
    {content : '直槓/六角槓硬舉: 4組*6-10次(最大RPM80%-40%)'},
  ])
  const extra = ref([
    {content : 'Cable平行背拉:  4組*8-12次(最大RPM80%-40%)'},
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

