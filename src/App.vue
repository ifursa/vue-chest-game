<template>
  <div id="apps">
    <TorchBlock/>
    <ChestGame/>
    <GnomeBlock/>
    <PurchaseBlock/>
    <div v-if="isModal">
      <modalComponent/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ChestGame from './components/ChestGame.vue'
import PurchaseBlock from './components/PurchaseBlock.vue'
import TorchBlock from './components/TorchBlock.vue'
import GnomeBlock from './components/GnomeBlock.vue'
import modalComponent from './components/modalComponent.vue'
export default {
  name: 'App',
  components: {
    ChestGame,
    GnomeBlock,
    PurchaseBlock,
    TorchBlock,
    modalComponent
  },
  computed: {
        ...mapState([
            'isModal'
        ]),
     },
  methods: {}     
}
</script>

<style>
* {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }

body,html { 
  margin:0 !important;
  box-sizing: border-box;
}
#apps {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  background-image: url('./assets/bg_2.png');
  background-repeat: no-repeat;
  background-size:100% 100%;
}

@font-face {
  font-family: "A_BREMENCAPS_REGULAR";
  src: local("A_BREMENCAPS_REGULAR"),
   url(./assets/fonts/A_BREMENCAPS_REGULAR.TTF);
}

button:active  {
  transform: translateY(4px);
}

</style>
