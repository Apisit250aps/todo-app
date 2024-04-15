<template>
    <nav id="side-nav" v-show="isShow" class="">
        <aside class="" id="side-menu">
            <a href="#" @click="side()">
                <i class="bx bx-home-alt bx-md"></i>
            </a>
        </aside>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue';
let show = true
function side(){
    show = !show
    if (show){
        document.getElementById('side-menu').style.height = '80%'
    }
    else {
        document.getElementById('side-menu').style.height = "24px"
    }
}

defineProps(
    {
        isShow:Boolean,
    }
)

</script>

<style scoped>
#side-nav {
    position: absolute;
    /* z-index: 1; */
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.3s;
    height: 100dvh;
    display: flex;
    align-items: center;
    /* width: 250px; */
    /* width: 0; */
}

#side-menu {
    border-radius: 20px;
    background: #fefefe;
    box-shadow: 20px 20px 60px #d8d8d8,
        -20px -20px 60px #ffffff;
    margin: auto 1rem;
    padding: 1rem .5rem;
    height: 90%;

    transition: 0.5s;
    display: flex;
    align-items: center;

}
</style>