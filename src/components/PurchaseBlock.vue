<template>
    <div id="purchase_block">
        <div id="purchase_menu">
            <img id="purchase_menu_heading" src="../assets/purchase block_heading.png" alt="">
            <div id="purchase_menu_info">
                <p class="grey_text"> 1 игра = {{gameCosts}}$</p>
                <b>Вам доступно </b>
                <div class="data_score">
                    <p class="grey_text"> игр : </p><span class="yellow_counter">{{avaliableGames}}</span>
                </div>
                <br/>
                <b>Покупка</b>
                <div class="data_score">
                    <p class="grey_text"> игр :  </p><span class="yellow_counter">{{gamesToBuy}}<div class='controls'><button @click="increase" class="arrow up"></button><button @click="decrease" class="arrow down"></button></div></span>
                </div>
                <div class="data_score">
                    <p class="grey_text"> сумма : </p><span class="yellow_counter">{{buySumm}}</span><div id="currency">$</div>
                </div>
            </div>
            <button @click="orderGames" id="purchase_menu_button"><p>КУПИТЬ</p></button>
        </div>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'

export default {
    computed: {
        ...mapState([   
            'avaliableGames',
            'gamesToBuy',
            'buySumm',
            'gameCosts'
        ]),
     },
    methods: {
        ...mapActions([
    'incrementGamesInCartAction','decrementGamesInCartAction','buyGamesAction','startGameAction']),
        increase: function() {
            this.incrementGamesInCartAction()
        },
        decrease: function() {
            this.decrementGamesInCartAction()
        },
        orderGames: function(){
            if(this.gamesToBuy > 0) {
                this.buyGamesAction()
                this.startGameAction()
            }
        }
    } 
}
</script>
<style scoped>
#purchase_block {
    z-index: 10;
    position: relative;
    float:right; 
    clear:right;
    width: 22.83%;
    height: 100vh;
    background-image: url('../assets/purchase_bg.png');
    background-size: 100% 100%;
}
#purchase_menu { 
    width: 204px;
    height: 381px ;
    margin-left: 30px;
    background-image: url('../assets/purchase_menu_bg.png');
    position: absolute;
    top: 45%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
#purchase_menu_heading {
    width: inherit;
    height: 80px;
    margin-top: 40px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

#purchase_menu_button {
    position: absolute;
    bottom:10px;
    left: 0;
    padding: 20px; 
    text-align: center;
    width: -webkit-fill-available;
    font-size: 20px;
    background-image: url('../assets/active_button.png');
    background-size:contain;
    background-repeat: no-repeat;
}
#purchase_menu_buttton > p {
    font-size: x-large;
    margin: 20px;
    top: 50%;                         
    transform: translate(0, -50%);
}

button {
    font-family:"A_BREMENCAPS_REGULAR";
    color: #52311b;
}

#purchase_menu_info {
    font-family:"A_BREMENCAPS_REGULAR";
    color: #52311b; 
}

#purchase_menu_info {
    width: 90%;
    color:white;
}
#purchase_menu_info > * {
    width: inherit;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
}

.grey_text{
    color: #bab6b6;
    font-size: 12px;
}

.yellow_counter {
    float: right;
    color:#fec602;
}

.arrow {
  border: solid #bab6b6;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.up {
  padding: 4px;  
  position: absolute;  
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  padding: 4px; 
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.controls {
    position: relative;
    bottom: 2.5vh;
    left: 1vw;
}

#currency {
    color: #bab6b6;
    position: absolute;
    left:10.5vw;
}
</style>