<template>
  <div id="torch_area">
      <img src="../assets/torch.png" alt="torch">
      <div class="fire_point">
          <div class="dark_red flame"></div>
          <div class="red flame"></div>
          <div class="orange flame"></div>
          <div class="yellow flame"></div>
          <div class="white flame"></div>
      </div>
  </div>
</template>
<style>
#torch_area{
  float:left; 
  clear:left;
  margin: 0;
position: absolute;
top: 45%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
}
#torch_area > img {
  width: 250px;
  height: 330px;
}
.fire_point{
top:22%;
left: 29%;
width: 60px;
height: 60px;
position:absolute;
transform-origin:center bottom;
animation-name: flicker;
animation-duration:3ms;
animation-delay:200ms;
animation-timing-function: ease-in;
animation-iteration-count: infinite;
animation-direction: alternate;
}

.flame{
bottom:0;
position:absolute;
border-bottom-right-radius: 50%;
border-bottom-left-radius: 50%;
border-top-left-radius: 50%;
transform:rotate(-45deg) scale(1.5,1.5);
}

.yellow{
left:15%; 
width: 80%;
height: 80%;
background:gold;
box-shadow: 0px 0px 9px 4px gold;
}

.orange{
left:11%; 
width: 50%;
height: 50%;
background:orange;
box-shadow: 0px 0px 9px 4px orange;
}

.red{
left:7%;
width: 100%;
height: 100%;
background:OrangeRed;
box-shadow: 0px 0px 5px 4px OrangeRed;
}

.dark_red{
left:-4%;
width: 130%;
height: 130%;
background:rgb(196, 52, 0);
box-shadow: 0px 0px 5px 4px rgb(196, 52, 0);
}

.white{
left:23%; 
bottom:-4%;
width:55%;
height: 55%;
background:white;
box-shadow : 0px 0px 9px 4px white;
}

.circle{
border-radius: 50%;
position:absolute;  
}

@keyframes flicker{
0%   {transform: rotate(26deg);}
20%  {transform: rotate(26deg);}
40%  {transform: rotate(26deg);}
60%  {transform: rotate(26deg) scaleY(1.04);}
80%  {transform: rotate(26deg) scaleY(0.92);}
100% {transform: rotate(27deg);}
}
</style>