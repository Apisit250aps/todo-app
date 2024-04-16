<template>
    <li>
        <a :href="url" :class="{ 'active':is_active }">
            <slot></slot>
        </a>
    </li>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = route.name

const props = defineProps(
    {
        url:{
            type: String,
            default:''
        },
        active:{
            type:String,
            default:''
        }
    }
)
let is_active = computed(()=>{ return props.active === currentPath })

</script>

<style scoped></style>