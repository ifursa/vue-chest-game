(function(){"use strict";var t={382:function(t,e,n){var a=n(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"apps"}},[e("TorchBlock"),e("ChestGame"),e("GnomeBlock"),e("PurchaseBlock"),t.isModal?e("div",[e("modalComponent")],1):t._e()],1)},s=[],o=n(629),c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"chest_area"}},[e("div",{attrs:{id:"chest_row"}},t._l(3,(function(a){return e("div",{key:`${a}-firstrow`,staticClass:"chest_wrapper",class:{clickable:t.clickable},on:{click:t.openModalWindow}},[e("div",{staticClass:"chest_container"},[e("div",{staticClass:"chest"},[e("img",{attrs:{src:n(182),alt:"chest",id:`${a}-img-firstrow`}})])])])})),0),e("div",{attrs:{id:"chest_row"}},t._l(3,(function(a){return e("div",{key:`${a}-secondrow`,staticClass:"chest_wrapper",class:{clickable:t.clickable},on:{click:t.openModalWindow}},[e("div",{staticClass:"chest_container"},[e("div",{staticClass:"chest"},[e("img",{attrs:{src:n(182),alt:"chest",id:`${a}-img-secondrow`}})])])])})),0),e("div",{attrs:{id:"chest_row"}},t._l(3,(function(a){return e("div",{key:`${a}-thirdrow`,staticClass:"chest_wrapper",class:{clickable:t.clickable},on:{click:t.openModalWindow}},[e("div",{staticClass:"chest_container"},[e("div",{staticClass:"chest"},[e("img",{attrs:{src:n(182),alt:"chest",id:`${a}-img-third-row`}})])])])})),0),e("p",{attrs:{id:"chest_hint"}},[t._v("Для игры Вам необходимо купить попытки, а затем нажать кнопку “ИГРАТЬ”")]),e("button",{attrs:{disabled:!t.isPlaying,id:"play_button"},on:{click:t.activateChests}},[e("span",[t._v(" ИГРАТЬ ")])])])},r=[],l={name:"ChestGame",computed:{...(0,o.rn)(["isPlaying","clickable","isWinner","animations","active"])},methods:{...(0,o.nv)(["activateChestsAction","openModalAction"]),activateChests:function(){this.activateChestsAction()},openModalWindow:function(){this.clickable&&this.openModalAction()}}},u=l,m=n(1),d=(0,m.Z)(u,c,r,!1,null,"7d9ebff4",null),f=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"purchase_block"}},[e("div",{attrs:{id:"purchase_menu"}},[e("img",{attrs:{id:"purchase_menu_heading",src:n(255),alt:""}}),e("div",{attrs:{id:"purchase_menu_info"}},[e("p",{staticClass:"grey_text"},[t._v(" 1 игра = "+t._s(t.gameCosts)+"$")]),e("b",[t._v("Вам доступно ")]),e("div",{staticClass:"data_score"},[e("p",{staticClass:"grey_text"},[t._v(" игр : ")]),e("span",{staticClass:"yellow_counter"},[t._v(t._s(t.avaliableGames))])]),e("br"),e("b",[t._v("Покупка")]),e("div",{staticClass:"data_score"},[e("p",{staticClass:"grey_text"},[t._v(" игр : ")]),e("span",{staticClass:"yellow_counter"},[t._v(t._s(t.gamesToBuy)),e("div",{staticClass:"controls"},[e("button",{staticClass:"arrow up",on:{click:t.increase}}),e("button",{staticClass:"arrow down",on:{click:t.decrease}})])])]),e("div",{staticClass:"data_score"},[e("p",{staticClass:"grey_text"},[t._v(" сумма : ")]),e("span",{staticClass:"yellow_counter"},[t._v(t._s(t.buySumm))]),e("div",{attrs:{id:"currency"}},[t._v("$")])])]),e("button",{attrs:{id:"purchase_menu_button"},on:{click:t.orderGames}},[e("p",[t._v("КУПИТЬ")])])])])},v=[],h={computed:{...(0,o.rn)(["avaliableGames","gamesToBuy","buySumm","gameCosts"])},methods:{...(0,o.nv)(["incrementGamesInCartAction","decrementGamesInCartAction","buyGamesAction","startGameAction"]),increase:function(){this.incrementGamesInCartAction()},decrease:function(){this.decrementGamesInCartAction()},orderGames:function(){this.gamesToBuy>0&&(this.buyGamesAction(),this.startGameAction())}}},_=h,g=(0,m.Z)(_,p,v,!1,null,"399b3494",null),b=g.exports,C=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"torch_area"}},[e("img",{attrs:{src:n(406),alt:"torch"}}),e("div",{staticClass:"fire_point"},[e("div",{staticClass:"dark_red flame"}),e("div",{staticClass:"red flame"}),e("div",{staticClass:"orange flame"}),e("div",{staticClass:"yellow flame"}),e("div",{staticClass:"white flame"})])])}],k={},G=(0,m.Z)(k,C,y,!1,null,null,null),w=G.exports,x=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"gnome"}},[t._m(0),e("div",{attrs:{id:"prompt_box"}},[e("p",[t._v(t._s(t.hints[t.currentHint]))])])])},A=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"gnobe_block"}},[e("img",{attrs:{id:"gnome_image",src:n(815),alt:""}}),e("img",{attrs:{id:"gnome_head",src:n(359)}}),e("img",{attrs:{id:"gnome_handcuff",src:n(46)}}),e("img",{attrs:{id:"gnome_shoulder",src:n(618)}}),e("img",{attrs:{id:"gnome_ax",src:n(779)}})])}],M={computed:{...(0,o.rn)(["hints","currentHint"])}},B=M,T=(0,m.Z)(B,x,A,!1,null,"6d4e5778",null),P=T.exports,O=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t.isWinner?t._t("header",(function(){return[t._v(" Ты выиграл! ")]})):t._t("header",(function(){return[t._v(" Ты проиграл! ")]}))],2),e("div",{staticClass:"modal-body"},[t.isWinner?t._t("body",(function(){return[e("img",{attrs:{src:n(798),alt:""}})]})):t._t("body",(function(){return[e("img",{attrs:{src:n(550),alt:""}})]}))],2),e("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[e("button",{staticClass:"modal-default-button",on:{click:t.closeModal}},[t._v(" закрыть ")])]}))],2)])])])])},W=[],Z={name:"modalComponent",computed:{...(0,o.rn)(["isWinner"])},methods:{...(0,o.nv)(["closeModalAction"]),closeModal:function(){this.closeModalAction()}}},I=Z,$=(0,m.Z)(I,O,W,!1,null,null,null),H=$.exports,S={name:"App",components:{ChestGame:f,GnomeBlock:P,PurchaseBlock:b,TorchBlock:w,modalComponent:H},computed:{...(0,o.rn)(["isModal"])},methods:{}},j=S,E=(0,m.Z)(j,i,s,!1,null,null,null),F=E.exports;a.ZP.use(o.ZP);var q=new o.ZP.Store({state:{isPlaying:!1,isModal:!1,isWinner:!1,currentStep:0,hints:["Чтобы играть тебе необходимо купить игру!","Нажимай играть , чтобы начать!","Выбери сундук и нажми на него чтобы открыть!"],currentHint:0,clickable:!1,gameCosts:5,avaliableGames:0,gamesToBuy:0,buySumm:0},getters:{},mutations:{incrementGamesInCart:function(t){t.gamesToBuy+=1},decrementGamesInCart:function(t){t.gamesToBuy>0&&(t.gamesToBuy-=1)},changeGameCosts:function(t){t.buySumm=t.gamesToBuy*t.gameCosts},buyGames:function(t){t.avaliableGames+=t.gamesToBuy,t.gamesToBuy=0,t.buySumm=0,t.currentHint=1},startGame:function(t){t.isPlaying=!0,t.currentHint=1},activateAllChests:function(t){t.clickable||(t.currentHint=2,t.clickable=!0,t.avaliableGames-=1,t.isWinner=!t.isWinner,0===t.avaliableGames&&(t.isPlaying=!1))},openModal:function(t){t.isModal=!0,0===t.avaliableGames&&(t.clickable=!1)},closeModal:function(t){t.isModal=!1,t.clickable=!1,0===t.avaliableGames&&(t.currentHint=0)}},actions:{incrementGamesInCartAction:function({commit:t}){t("incrementGamesInCart"),t("changeGameCosts")},decrementGamesInCartAction:function({commit:t}){t("decrementGamesInCart"),t("changeGameCosts")},changeGameCostsAction:function({commit:t}){t("changeGameCosts")},buyGamesAction:function({commit:t}){t("buyGames")},startGameAction:function({commit:t}){t("startGame")},activateChestsAction:function({commit:t}){t("activateAllChests")},openModalAction:function({commit:t}){t("openModal")},closeModalAction:function({commit:t}){t("closeModal")}},modules:{}});a.ZP.config.productionTip=!1,new a.ZP({store:q,render:t=>t(F)}).$mount("#app")},779:function(t,e,n){t.exports=n.p+"img/dwarf_ax.093076a6.gif"},359:function(t,e,n){t.exports=n.p+"img/dwarf_head.d87940fa.gif"},618:function(t,e,n){t.exports=n.p+"img/dwarf_shoulder.29e5bf03.gif"},46:function(t,e,n){t.exports=n.p+"img/dwarf_нandcuff.e7b82af6.gif"},550:function(t,e,n){t.exports=n.p+"img/empty.2eb34d66.gif"},798:function(t,e,n){t.exports=n.p+"img/rich.d4fdeff1.gif"},182:function(t,e,n){t.exports=n.p+"img/closed_chest.eba0f4be.png"},815:function(t,e,n){t.exports=n.p+"img/gnome.76e71f7a.png"},255:function(t,e,n){t.exports=n.p+"img/purchase block_heading.0e307aac.png"},406:function(t,e,n){t.exports=n.p+"img/torch.fd3284a4.png"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var c=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[r])}))?a.splice(r--,1):(c=!1,s<o&&(o=s));if(c){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,o=a[0],c=a[1],r=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(r)var u=r(n)}for(e&&e(a);l<o.length;l++)s=o[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkvue_chest_game"]=self["webpackChunkvue_chest_game"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(382)}));a=n.O(a)})();
//# sourceMappingURL=app.91bcaa6e.js.map