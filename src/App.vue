<script setup>
import {RouterView } from 'vue-router'
import { Notification, NotificationGroup } from 'notiwind'
</script>

<template>
    <NotificationGroup group="top">
        <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications, close }"
                    enter="ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        class="w-full max-w-sm mt-4 overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
                        v-for="notification in notifications"
                        :key="notification.id"
                    >
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="shrink-0">
                                    <svg v-if="notification.status === 'success'" class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <svg v-if="notification.status === 'error'" class="w-6 h-6 fill-red-700  text-red-400" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">

                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                                    </svg>

                                </div>
                                <div class="ml-3 w-0 flex-1 pt-0.5">
                                    <p class="font-semibold text-gray-800">{{ notification.title }}</p>
                                    <p class="text-sm font-semibold text-gray-500">{{ notification.text }}</p>
                                </div>
                                <div class="flex ml-4 shrink-0">
                                    <button @click="close(notification.id)" class="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                                        <span class="sr-only">Close</span>
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
    <RouterView />
</template>

<style scoped>

</style>
