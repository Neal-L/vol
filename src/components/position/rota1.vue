<template>
  <v-container>
    <canvas ref="canvas"></canvas>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  let canvas = ref(null)

  onMounted(()=>{
  const ctx=canvas.value.getContext('2d')
  canvas.value.width=window.innerWidth*window.devicePixelRatio
  canvas.value.height=window.innerHeight*window.devicePixelRatio
  ctx.translate(canvas.value.width/2, canvas.value.height)
  ctx.scale(1,-1)
  ctx.beginPath()
  ctx.lineWidth="10"
  ctx.lineCap="round"
  ctx.strokeStyle="#ccc"
  ctx.moveTo(0,0)
  ctx.lineTo(0,100)
  ctx.stroke()
})

//ctx上下文 起始坐标，线条粗细，线条长度，角度
function drawTree(ctx,v0,thick,length,dir){
  if(thick<3&&Math.random()<0.3)return
  if(thick<2){
    ctx.beginPath()
    ctx.arc(...v0,20,0,2*Math.PI)
    ctx.fillStyle=Math.random()<0.3?'#ccc':'red'
    ctx.fill()
    return
  }
  ctx.beginPath()
  ctx.moveTo(...v0)
  const v1=[
    v0[0]+length*Math.cos((dir*Math.PI)/100),
    v0[1]+length*Math.sin((dir*Math.PI)/100),
  ]
  ctx.lineTo(...v1)
  ctx.lineCap='round'
  ctx.lineWidth=thick
  ctx.strokeStyle='#333'
  ctx.stroke()
  // 渲染帧函数
  // requestAnimationFrame(()=>{
  //   drawTree(ctx,v1,thick*0.8,length*0.8,dir+Math.random()*30),
  //   drawTree(ctx,v1,thick*0.8,length*0.8,dir-Math.random()*30)
  // })
  setTimeout(() => {
    drawTree(ctx,v1,thick*0.8,length*0.8,dir+Math.random()*30),
    drawTree(ctx,v1,thick*0.8,length*0.8,dir-Math.random()*30)
  }, 50);
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
  drawTree(ctx,[0,0],10,200,50)
})
</script>
