<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot v-if="isWinner" name="header">
              Ты выиграл!
            </slot>
            <slot v-else name="header">
              Ты проиграл!
            </slot>
          </div>

          <div class="modal-body">
            <slot v-if="isWinner" name="body">
                <img src="../assets/animation/rich.gif" alt="">
            </slot>
            <slot v-else name="body">
                <img src="../assets/animation/empty.gif" alt="">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="closeModal" class="modal-default-button">
                закрыть
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'modalComponent',
  computed: {
    ...mapState(['isWinner'])
  },
  methods: {
    ...mapActions([
    'closeModalAction'
  ]),
  closeModal: function() {
    this.closeModalAction()
  }
  
     }
}
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(139, 139, 139, 0.15);
  display: table;
  transition: opacity 0.3s ease;
  font-family:"A_BREMENCAPS_REGULAR";
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 15.152vw;
  height: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-image: url('../assets/chest_bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family:"A_BREMENCAPS_REGULAR";
}

.modal-header {
  font-size: 1em;  
  margin-top: 0;
  color: #fec602;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
    font-family:"A_BREMENCAPS_REGULAR";
    position: absolute;
    width: 10.9vw;
    bottom: 33vh;
    left: 45vw;
    padding: 20px; 
    text-align: center;
    font-size: 20px;
    background-image: url('../assets/active_button.png');
    background-size:contain;
    background-repeat: no-repeat;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>