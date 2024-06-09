<template>

  <v-card >
    <v-row>
      <v-col cols="12" md="6">
        <canvas ref="canvas"></canvas>
      </v-col>
    </v-row>

  </v-card>



</template>

<script setup>
  import { ref, onMounted } from 'vue'


  let canvas = ref(null)


  onMounted(()=>{
  const ctx=canvas.value.getContext('2d')
  canvas.value.width=window.innerWidth*window.devicePixelRatio
  canvas.value.height=window.innerHeight*window.devicePixelRatio

  ctx.scale(1,-1)
  ctx.beginPath()
  ctx.lineWidth="10"
  ctx.lineCap="round"
  ctx.strokeStyle="#ccc"
  ctx.moveTo(0,0)
  ctx.lineTo(0,0)
  ctx.stroke()


})

function drawsquare(x,y,ctx){
  let square_x = x
  let square_y = y
  ctx.beginPath()
  ctx.rect(square_x, square_y,540,600)
  ctx.lineWidth = 5
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#00FFFF"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath();
  ctx.rect(square_x+22, square_y+100, 500, 500)
  ctx.lineWidth = 5
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#FFA500"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(square_x, 450)
  ctx.lineTo(square_x+542, 450)
  ctx.strokeStyle = "white"
  ctx.stroke()

}

function ball(x,y,ctx){
  const vb_x = x
  const vb_y = y
  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.fillStyle = "#FFDF00"
  ctx.arc(vb_x,vb_y,25,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
  let curveline_start1 = {x:vb_x+10,y:vb_y-25};
  let curveline_end1 = {x:vb_x-5,y:vb_y+25};
  let controlpoint1 = {x:vb_x-16,y:vb_y};
  let controlpoint2 = {x:vb_x+10,y:vb_y-3};
  ctx.beginPath();
  ctx.moveTo(curveline_start1.x,curveline_start1.y)
  ctx.bezierCurveTo(controlpoint1.x,controlpoint1.y
      ,controlpoint2.x,controlpoint2.y
      ,curveline_end1.x,curveline_end1.y)
  ctx.lineWidth =10
  ctx.strokeStyle = "#0000CD"
  ctx.stroke()

  let curveline_start2 = {x:vb_x-25,y:vb_y};
  let curveline_end2 = {x:vb_x+25,y:vb_y};
  let controlpoint3 = {x:vb_x-10,y:vb_y+15};
  let controlpoint4 = {x:vb_x+10,y:vb_y-15};
  ctx.beginPath();
  ctx.moveTo(curveline_start2.x,curveline_start2.y)
  ctx.bezierCurveTo(controlpoint3.x,controlpoint3.y
      ,controlpoint4.x,controlpoint4.y
      ,curveline_end2.x,curveline_end2.y)
  ctx.lineWidth =8
  ctx.strokeStyle = "#0000CD"
  ctx.stroke()
}

function BWS(x,y,ctx){//4號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#4682B4"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}
function SET(x,y,ctx){//3號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#6A5ACD"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}

function BMB(x,y,ctx){//2號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#87CEEB"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}
function SWS(x,y,ctx){ //1號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#4682B4"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}
function OP(x,y,ctx){//6號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#6A5ACD"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}
function LB(x,y,ctx){//5號位

  ctx.beginPath();
  ctx.lineWidth = 2
  ctx.strokeStyle = "white"
  ctx.fillStyle = "#4B0082"
  ctx.arc(x,y,40,0,Math.PI*2)
  ctx.fill()
  ctx.closePath();
}

onMounted(()=>{
  const ctx=canvas.value.getContext('2d')
  canvas.value.width=window.innerWidth*window.devicePixelRatio
  canvas.value.height=window.innerHeight*window.devicePixelRatio
  ctx.translate(canvas.value.width/2, canvas.value.height)
  ctx.scale(1,-1)
  // ctx.beginPath()
  // ctx.lineWidth="10"
  // ctx.lineCap="round"
  // ctx.strokeStyle="#ccc"
  // ctx.moveTo(0,0)
  // ctx.lineTo(0,100)
  // ctx.stroke()
  drawsquare(-800,5,ctx)
  ball(-700,700,ctx)
  BWS(-700,530,ctx)
  SET(-530,530,ctx)
  BMB(-370,530,ctx)
  SWS(-370,300,ctx)
  OP(-530,300,ctx)
  LB(-700,300,ctx)
})

</script>
<style scoped>
  .first-img{
    width: 800px;
    height: 100%;
  }
  .text-1{
    font-size: 30px;

  }
</style>
