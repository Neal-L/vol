<template>
  <v-app-bar class="px-1" color = "transparent">
    <v-app-bar-nav-icon icon="mdi-home"></v-app-bar-nav-icon>
    <v-app-bar-title>排球訓練輔助系統</v-app-bar-title>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">首頁</v-btn>
<v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/concept">觀念</v-btn>
<v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/skill">技術</v-btn>
<v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/fitness">體能</v-btn>

    <v-spacer></v-spacer>

    <v-btn class="mx-3" icon="mdi-cart-outline"></v-btn>
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
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
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { reactive } from 'vue'
const user = reactive({
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
})

</script>
