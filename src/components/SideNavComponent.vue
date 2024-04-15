<template>
    <nav id="side-nav" v-show="isShow">
        <div id="side-menu">
            asd
        </div>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(
    {
        isShow:Boolean,
    }
)

</script>

<style scoped>
.link-m {
    background-color: white;
    padding: 1rem;
    border-radius: 15px;

}

#side-nav {
    height: 100dvh !important;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    transition: 0.5s;
    background-color: #bababa;
    padding: 1rem;
    overflow: hidden;
    
}

#side-menu {
    /* width: 0; */
    height: 100%;
    transition: 0.5s;
    background-color: white;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: 19px 19px 38px #bebebe,
        -19px -19px 38px #ffffff;
}
</style>