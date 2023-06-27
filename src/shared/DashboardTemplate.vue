<script setup>
import {RouterView } from 'vue-router'








import {ref} from "vue";
import NavBar from "@/shared/NavBar.vue";
import SideBar from "@/shared/SideBar.vue";
const isSideMenuOpen = ref(false)

</script>

<template>
    <div
            class="flex h-screen bg-gray-50 dark:bg-gray-900"
            :class="{ 'overflow-hidden': isSideMenuOpen}"
    >
        <SideBar  :isSideMenuOpen="isSideMenuOpen" @side-menu-is-false="isSideMenuOpen = false" />
        <div class="flex flex-col flex-1">
            <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                <NavBar @toggle-side-menu="isSideMenuOpen =  !isSideMenuOpen" />
            </header>
            <main class="h-full pb-16 overflow-y-auto">
                <!-- Remove everything INSIDE this div to a really blank page -->
                <div class="container px-6 mx-auto grid">
                    <RouterView />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>

</style>
