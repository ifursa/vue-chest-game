<template>
    <div id="gnome">
        <div id="gnobe_block">
            <img id="gnome_image" src="../assets/gnome.png" alt="">
            <img id="gnome_head" src="../assets/animation/dwarf_head.gif">
            <img id="gnome_handcuff" src="../assets/animation/dwarf_нandcuff.gif">
            <img id="gnome_shoulder" src="../assets/animation/dwarf_shoulder.gif">
            <img id="gnome_ax" src="../assets/animation/dwarf_ax.gif">
        </div>
        <div id="prompt_box">
            <p>{{hints[currentHint]}}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['hints','currentHint'])
    }
}
</script>

<style scoped>

#gnome_head{
    border-radius: 40%;
    z-index: 30;
    position: absolute;
    top:21%;
    left:69.7%;
    width: 3.5%;
    height: 8%;    
}

#gnome_handcuff{
    opacity: 1;
    border-radius: 80%;
    z-index: 30;
    position: absolute;
    top:28%;
    left:67.8%;
    width: 3.5%;
    height: 5%;    
}

#gnome_ax{
    border-radius: 20%;
    opacity: 1;
    z-index: 1;
    position: absolute;
    top:32%;
    left:67.4%;
    width: 4.3%;
    height: 9%;    
}

#gnome_shoulder {
    border-radius: 80%;
    z-index: 30;
    position: absolute;
    top:26.3%;
    left:72.5%;
    width: 4.3%;
    height: 6%;  
}
#gnome_image {
    top:48%;
    right:14.8%;
    z-index: 1;
    position: absolute; 
    width:25.7%;
    height: 62%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
#prompt_box{
    z-index: 2;
    position: absolute;
    width: 10%;
    height: 20%;
    top:30%;
    left:65%;
    background-image: url('../assets/prompt_box.png');
    background-size: contain;
    background-repeat: no-repeat;
}

#prompt_box > p{
    position: relative;
    top:50%;
    padding: 5px;
    font-size: 1vh;
    font-family:"A_BREMENCAPS_REGULAR";
    color: #52311b;
}
</style>