<template>
    <header>
        <div class="bg-amber-950 w-full text-white p-4 shadow">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>

<style scoped>

</style>