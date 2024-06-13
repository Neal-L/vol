<template>
  <v-card>
    <v-row>
      <v-col cols="12" md="8">
        <canvas ref="canvas" style="border:1px solid #000;"></canvas>
      </v-col>
      <v-col cols="12" md="4">
        <v-card-text class="text-1">{{Context}}</v-card-text>
        <v-card-text class="text-1" v-for="(items, index) in player" :key="index">{{items.pos}}</v-card-text>
        <v-btn @click="case_1">draw</v-btn>
        <v-btn @click="reset">reset</v-btn>
      </v-col>
    </v-row>
  </v-card>

</template>

<script setup>
import { ref, onMounted} from 'vue'

const Context =ref('這是第五種接發球的站位')
const player = ref([
  {pos :'大主攻手'},
  {pos :'舉球員'},
  {pos :'大攔中手'},
  {pos :'自由球員'},
  {pos :'舉對'},
  {pos :'小主攻手'}
])





const canvas = ref(null)
const ctx = ref(null)

function drawsquare(x, y, ctx) {
  let square_x = x
  let square_y = y
  ctx.beginPath()
  ctx.rect(square_x, square_y, 540, 600)
  ctx.lineWidth = 5
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#00FFFF"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(square_x + 22, square_y , 500, 500)
  ctx.lineWidth = 5
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#FFA500"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(square_x, 250)
  ctx.lineTo(square_x + 540, 250)
  ctx.strokeStyle = "white"
  ctx.stroke()
}

function ball(x, y, ctx) {
  const vb_x = x
  const vb_y = y
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.fillStyle = "#FFDF00"
  ctx.arc(vb_x, vb_y, 25, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
  let curveline_start1 = { x: vb_x + 10, y: vb_y - 25 }
  let curveline_end1 = { x: vb_x - 5, y: vb_y + 25 }
  let controlpoint1 = { x: vb_x - 16, y: vb_y }
  let controlpoint2 = { x: vb_x + 10, y: vb_y - 3 }
  ctx.beginPath()
  ctx.moveTo(curveline_start1.x, curveline_start1.y)
  ctx.bezierCurveTo(controlpoint1.x, controlpoint1.y
    , controlpoint2.x, controlpoint2.y
    , curveline_end1.x, curveline_end1.y)
  ctx.lineWidth = 10
  ctx.strokeStyle = "#0000CD"
  ctx.stroke()

  let curveline_start2 = { x: vb_x - 25, y: vb_y }
  let curveline_end2 = { x: vb_x + 25, y: vb_y }
  let controlpoint3 = { x: vb_x - 10, y: vb_y + 15 }
  let controlpoint4 = { x: vb_x + 10, y: vb_y - 15 }
  ctx.beginPath()
  ctx.moveTo(curveline_start2.x, curveline_start2.y)
  ctx.bezierCurveTo(controlpoint3.x, controlpoint3.y
    , controlpoint4.x, controlpoint4.y
    , curveline_end2.x, curveline_end2.y)
  ctx.lineWidth = 8
  ctx.strokeStyle = "#0000CD"
  ctx.stroke()
}

function BWS(x, y, ctx) {//4號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#CE0000"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function SET(x, y, ctx) {//3號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#6A5ACD"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function BMB(x, y, ctx) {//2號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#87CEEB"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function SWS(x, y, ctx) { //1號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#7B7B7B"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function OP(x, y, ctx) {//6號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#B15BFF"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function LB(x, y, ctx) {//5號位
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#743A3A"
  ctx.arc(x, y, 35, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}


function case_1() {
  ctx.value.clearRect(0, 0, 500, canvas.value.height)
  drawsquare(0, 100, ctx.value)
  BWS(420, 430, ctx.value)
  SWS(130, 460, ctx.value)
  LB(290, 480, ctx.value)
  BMB(100, 200, ctx.value) //270 150
  SET(80, 150, ctx.value)
  OP(480, 250, ctx.value) //480 480

  ball(100, 35, ctx.value)
}
function reset() {
  ctx.value.clearRect(0, 0, 500, canvas.value.height)
  drawsquare(0, 100, ctx.value)
  ball(100, 35, ctx.value)
  BWS(100, 350, ctx.value)
  SET(280, 350, ctx.value)
  BMB(440, 350, ctx.value)
  SWS(440, 500, ctx.value)
  OP(280, 500, ctx.value)
  LB(100, 500, ctx.value)
}

onMounted(() => {
  ctx.value = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth * window.devicePixelRatio
  canvas.value.height = window.innerHeight * window.devicePixelRatio

  drawsquare(0, 100, ctx.value)
  ball(100, 35, ctx.value)
  BWS(100, 350, ctx.value)
  SET(280, 350, ctx.value)
  BMB(440, 350, ctx.value)
  SWS(440, 500, ctx.value)
  OP(280, 500, ctx.value)
  LB(100, 500, ctx.value)

  BWS(800, 150, ctx.value)
  SET(800, 225, ctx.value)
  BMB(800, 300, ctx.value)
  LB(800, 375, ctx.value)
  OP(800, 450, ctx.value)
  SWS(800, 525, ctx.value)

})
</script>

<style scoped>
.first-img {
  width: 800px;
  height: 100%;
}
.text-1 {
  font-size: 30px;
}
</style>
