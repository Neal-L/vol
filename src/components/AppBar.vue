<template>
  <v-app-bar class="px-1" color = "transparent">
    <v-app-bar-nav-icon icon="mdi-home" to="/index"></v-app-bar-nav-icon>
    <v-app-bar-title class="title">排球訓練輔助系統</v-app-bar-title>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">首頁</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/concept">觀念</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/skill">技術</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/fitness">體能</v-btn>

    <v-spacer></v-spacer>
    {{ time }}

    <!-- <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="#C5B358" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="#C5B358">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Disconnect
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu> -->
  </v-app-bar>
</template>

<script setup>
import { ref,reactive, onMounted, onUnmounted } from 'vue'
const user = reactive({
  initials: 'ST',
  fullName: 'Shih Ting',
  email: 'tim85915@gmail.com',
})
const time = ref(new Date().toLocaleTimeString())
const updateTime = () => {
  time.value = new Date().toLocaleTimeString()
}
let intervalId = null
onMounted(() => {
  intervalId = setInterval(updateTime, 1000)
})

// 在组件卸载时清除定时器
onUnmounted(() => {
  clearInterval(intervalId)
})

</script>
<style scoped>
.title{
  font-size: 26px;
  font-weight: 600;
  color: #C5B358;
}
.time{
  font-size: 20px;
  font-weight: 600;
}
.px-1{
  display: flex;
  align-items: center;
}
</style>
