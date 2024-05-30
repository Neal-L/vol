<template>
  <v-main class="pt-0">
    <v-container>
      <v-row  no-gutters>
        <v-col md="12">
          <ws />
          <st />
          <mb />
          <op />
          <lb />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import ws from '../components/site/ws.vue'
import st from '../components/site/st.vue'
import mb from '../components/site/mb.vue'
import op from '../components/site/op.vue'
import lb from '../components/site/lb.vue'
</script>
