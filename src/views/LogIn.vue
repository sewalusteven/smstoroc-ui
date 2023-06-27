<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
                class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img
                            aria-hidden="true"
                            class="object-cover w-full h-full dark:hidden"
                            src="../assets/login-office-dark.jpeg"
                            alt="Office"
                    />
                    <img
                            aria-hidden="true"
                            class="hidden object-cover w-full h-full dark:block"
                            src="../assets/login-office-dark.jpeg"
                            alt="Office"
                    />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <h1
                                class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                        >
                            Login
                        </h1>
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Email</span>
                            <input v-model="loginData.req.email"
                                    class="block p-3 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"
                            />
                        </label>
                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input v-model="loginData.req.password"
                                    class="block p-3 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="***************"
                                    type="password"
                            />
                        </label>

                        <!-- You should use a button here, as the anchor is only used for the example  -->
                        <button @click="handleLogin"
                                class="block flex justify-between w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        >
                            <span class="my-auto">  Log in</span>
                            <div role="status" v-if="loginData.isLoading">
                                <svg aria-hidden="true" class="w-6 h-6 mr-2 my-auto text-gray-200 animate-spin dark:text-gray-600 fill-purple-700 dark:fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>


                        </button>

                        <p class="mt-4">
                            <a
                                    class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    href="./forgot-password.html"
                            >
                                Forgot your password?
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { notify } from "notiwind"
import {useAuthStore} from "@/stores/auth";
import {computed, reactive, watch} from "vue";

const authStore =  useAuthStore();
const loginData =  reactive({
    req: {
        email: "",
        password: ""
    },
    isLoading: false
})

const handleLogin = () => {
    loginData.isLoading = true;
    authStore.login(loginData.req)
}

const response = computed(() => authStore.response)

watch(response, (val) => {
    loginData.isLoading = false;
    alert("Response",JSON.stringify(val), "success")
})


const alert = (title, text, status) => {
    notify({
        group: "top",
        title: title,
        status:status,
        text: text
    }, 2000) // 4s
}
</script>

<style scoped>

</style>