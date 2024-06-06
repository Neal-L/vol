<template>
  <v-main class="pt-0">
    <v-container>
      <h2>{{ title }}</h2>
      <v-row>
        <v-col cols="6" md="8">
          <v-card color="transparent">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bDTqiZ-h5gI?si=4f77lENm-TkJmtFE"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/omHLoD265PE?si=do5YtbnG1WajW4uX"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7V91pLy-h1Q?si=RWnsaGd77NXUKdxU"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8-akDpgt6zo?si=oo0QKf31jSSe7gZq"
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
  const title = ref('肩部訓練')
  const title2 = ref('建議訓練菜單')
  const title3 = ref('額外訓練項目')
  const train = ref([
    {content : '肩外旋  4組*12次(最大RPM40%)'},
    {content : '坐姿啞鈴肩上推舉(bench 角度70度)  4組*8-12次(最大RPM80%-40%)'},
    {content : '上斜啞鈴側平舉  4組*8-12次(最大RPM80%-40%)'},
    {content : '繩索面拉  4組*8-12次(最大RPM80%-40%)'},
  ])
  const extra = ref([
    {content : '跪姿拉弓  4組*8-12次(最大RPM80%-40%)'},
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

