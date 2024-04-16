<template>
    <form class="py-5 px-5 bg-base-100 rounded-lg">
        <h3 class="my-10"><b>Login to your account</b></h3>
        
        <label class="input input-bordered input-lg flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" placeholder="Username" v-model="login_form.username"/>
        </label>
        <label class="input input-bordered input-lg flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" placeholder="Password" v-model="login_form.password"/>
        </label>
        
        <div class="divider"></div> 
        <button type="submit" class="btn btn-lg btn-square w-full bg-base-300 mb-5" @click="login($event)">Login</button>
        <a class="link" href="/auth/register">Go to Register -></a>
    </form>
</template>

<script setup>
import Auth from '@/api/Auth';

let login_form = {
    username:"",
    password:""
}
function login(e){
    e.preventDefault();
    Auth.login(login_form)
}
</script>

<style lang="scss" scoped>

</style>