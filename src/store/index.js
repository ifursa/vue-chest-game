import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlaying: false,
    isModal:false,
    isWinner: false,
    currentStep: 0,
    hints: ['Чтобы играть тебе необходимо купить игру!', 'Нажимай играть , чтобы начать!' , 'Выбери сундук и нажми на него чтобы открыть!'],
    currentHint: 0,
    clickable:false,
    gameCosts: 5,
    avaliableGames: 0,
    gamesToBuy: 0,
    buySumm: 0
  },
  getters: {
  },
  mutations: {
    incrementGamesInCart: function(state) {
      state.gamesToBuy += 1
    },
    decrementGamesInCart: function(state) {
      if(state.gamesToBuy > 0) {
        state.gamesToBuy -= 1
      }
    },
    changeGameCosts: function(state) {
      state.buySumm = state.gamesToBuy*state.gameCosts
    },
    buyGames: function(state) {
      state.avaliableGames += state.gamesToBuy
      state.gamesToBuy = 0
      state.buySumm = 0
      state.currentHint = 1
    },
    startGame: function(state) {
      state.isPlaying = true
      state.currentHint = 1
    },
    activateAllChests: function(state) {
      if(!state.clickable){
        state.currentHint = 2
        state.clickable = true
        state.avaliableGames -= 1
        state.isWinner = !state.isWinner
        if(state.avaliableGames === 0) {
          state.isPlaying = false
        }
      }
    },
    openModal: function(state) {
      state.isModal = true
      if(state.avaliableGames === 0) {
        state.clickable = false
      }
    },
    closeModal: function (state) {
      state.isModal = false
      state.clickable = false
      if(state.avaliableGames === 0) {
        state.currentHint = 0
      }
    }
  },
  actions: {
    incrementGamesInCartAction: function({commit}) {
      commit('incrementGamesInCart')
      commit('changeGameCosts')
    },
    decrementGamesInCartAction: function({commit}) {
      commit('decrementGamesInCart')
      commit('changeGameCosts')
    },
    changeGameCostsAction: function({commit}) {
      commit('changeGameCosts')
    },
    buyGamesAction: function({commit}) {
      commit('buyGames')
    },
    startGameAction: function({commit}) {
      commit('startGame')
    },
    activateChestsAction: function({commit}){
      commit('activateAllChests')
    },
    openModalAction: function ({commit}) {
      commit('openModal')
   },
    closeModalAction: function ({commit}) {
      commit('closeModal')
   }
  },
  modules: {
  }
})
