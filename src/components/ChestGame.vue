<template>
  <div id="chest_area">
    <div id="chest_row">
      <div @click="openModalWindow" class="chest_wrapper " :class="{'clickable': clickable}" v-for="index in 3" :key="`${index}-firstrow`">
        <div class="chest_container">
          <div class="chest">
              <img src="../assets/closed_chest.png" alt="chest" :id="`${index}-img-firstrow`">
          </div>
        </div>
      </div>
    </div>
    <div id="chest_row">
      <div @click="openModalWindow" class="chest_wrapper" :class="{'clickable': clickable}" v-for="index in 3" :key="`${index}-secondrow`">
        <div class="chest_container">
        <div class="chest">
            <img src="../assets/closed_chest.png" alt="chest" :id="`${index}-img-secondrow`">
        </div>
    </div>
      </div>
    </div>
    <div id="chest_row">
      <div @click="openModalWindow" class="chest_wrapper" :class="{'clickable': clickable}" v-for="index in 3" :key="`${index}-thirdrow`">
        <div class="chest_container">
        <div class="chest">
            <img src="../assets/closed_chest.png" alt="chest" :id="`${index}-img-third-row`">
        </div>
    </div>
      </div>
    </div>
    <p id="chest_hint">Для игры Вам необходимо купить попытки, 
а затем нажать кнопку “ИГРАТЬ”</p>
    <button @click="activateChests" :disabled="!isPlaying" id="play_button">
      <span> ИГРАТЬ </span>
    </button>
  </div>
</template>

<script>
import { mapState , mapActions} from 'vuex'

export default {
  name: 'ChestGame',
  computed: {
        ...mapState([
            'isPlaying',
            'clickable',
            'isWinner',
            'animations',
            'active'
        ])
     },
  methods: {
    ...mapActions(['activateChestsAction','openModalAction']),
    activateChests: function() {
      this.activateChestsAction()
    },
    openModalWindow: function() {
      if(this.clickable){
        this.openModalAction()
      }
    }
  }   
}
</script>

<style scoped >
#chest_area {
  float:left;
  top:20%;
  left:19%;
  width:30%;
  margin: 10px;
  position: absolute;
}

#chest_row {
  display: flex;
}

.chest_wrapper {
  margin: 5px;
}

#chest_hint{
  color:white;
  text-shadow: 0 0 15px white;
}
.clickable {
  -webkit-animation: blink 1.5s linear infinite;
    -moz-animation: blink 1.5s linear infinite;
    -ms-animation: blink 1.5s linear infinite;
    -o-animation: blink 1.5s linear infinite;
    animation: blink 1.5s linear infinite;
} 

button:disabled,
button[disabled]{
  background-image: url('../assets/disabled_button.png');
  background-size: contain;
}

button {
  top:67%;
  left:45vw;
  position: absolute;
  z-index: 100;
  width: 36%;
  height: 6.7vh;
  background-image: url('../assets/active_button.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family:"A_BREMENCAPS_REGULAR";
  color: #52311b;
}

button > span {
  padding: 20px;
}

.chest_container {
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-image: url('../assets/chest_bg.png');
    background-repeat: no-repeat;
}
.chest > img {
    width: 100%;
    margin: auto;
}

@keyframes blink {
    0% { box-shadow: 0 0 15px white; }
    50% { box-shadow: none; }
    100% { box-shadow: 0 0 15px white; }
}

@-webkit-keyframes blink {
    0% { box-shadow: 0 0 15px white; }
    50% { box-shadow: 0 0 0; }
    100% { box-shadow: 0 0 15px white; }
}

</style>
