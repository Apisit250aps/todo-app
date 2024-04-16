<template>
    <div id="register" class="flex flex-col items-center justify-center">
        <RegisterForm />
    </div>
</template>

<script setup>
import RegisterForm from '@/components/Forms/RegisterForm.vue';

</script>

<style scoped>
#register form {
    max-width: 32rem;
    width: 100%;
    margin: 0 1rem
}
#register {
    
    height: 100dvh;
}
</style>