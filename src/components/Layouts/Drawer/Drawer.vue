<script setup>
import Navbar from '../../Navigation/Nav/Navbar.vue';

let isDrawer = true
function drawerToggle(){
    isDrawer = !isDrawer
}
</script>



<template>
    <div class="drawer " >
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle"  />
        <div class="drawer-content flex flex-col">
            <!-- Page content here -->
            <Navbar>
                <div class="flex-none">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button " id="d">Open drawer</label>
                </div>
            </Navbar>
            
            <slot></slot>
        </div>
        <div class="drawer-side bg-base-100">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-75 min-h-full text-base-content">
                <!-- Sidebar content here
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li> -->
            </ul>

        </div>
    </div>
</template>

<style scoped></style>