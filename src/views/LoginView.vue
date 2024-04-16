<template>
    <div id="login" class="flex flex-col items-center justify-center">
        <LoginForm />
    </div>
</template>

<script setup>
import LoginForm from '@/components/Forms/LoginForm.vue';
</script>

<style scoped>
#login form {
    max-width: 32rem;
    width: 100%;
    margin: 0 1rem
}
#login {
    height: 100dvh;
}
</style>