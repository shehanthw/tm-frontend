<template>
  <div class="flex flex-col w-full h-full items-center space-y-5 justify-center">
    <div
      class="flex w-[30%] flex-col items-center space-y-2 text-gray-400 border border-gray-600 px-6 py-5 rounded-md shadow-gray-900 shadow-lg"
    >
      <!-- title -->
      <div class="flex flex-col w-[100%] space-y-2 text-2xl">
        <span>Sign in</span>
      </div>

      <!-- task title -->
      <div class="flex flex-col w-[100%] space-y-2 text-sm">
        <span>Username</span>
        <input
          type="text"
          placeholder="Username"
          class="outline-none px-2 py-2 text-gray-700 rounded-sm"
          v-model="data.email"
        />
        <div class="text-xs text-red-300 h-[10px]"></div>
      </div>

      <!-- task details -->
      <div class="flex flex-col w-[100%] space-y-2 text-sm">
        <span>Password</span>
        <input
          type="password"
          placeholder="Password"
          class="outline-none px-2 py-2 text-gray-700 rounded-sm"
          v-model="data.password"
        />
        <div class="text-xs text-red-300 h-[10px]"></div>
      </div>

      <div class="flex flex-col w-[100%] text-sm">
        <div class="flex space-x-2">
          <span>Click here to sign-up</span>
          <router-link class="text-blue-500 underline" to="register">register</router-link>
        </div>
        <div class="h-[15px] text-xs text-red-400">
          <span>{{ error }}</span>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex flex-col w-[100%] text-sm">
        <div>
          <button
            class="px-3 py-2 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm flex justify-center items-center"
            @click="handleSubmit"
          >
            <span v-if="!isLoging">Login</span>
            <span v-else>Loging...</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { login } from '../api/Auth'

export default {
  setup() {

    const isLoging = ref(false)

    return {
      isLoging
    }
  },
  data() {
    return {
      error: '',
      data: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    handleSubmit() {
      this.isLoging = true
      // Call the login function
      login(this.data)
        .then(() => {
          // If login is successful, reload the window
          window.location.reload();
          this.isLoging = false
        })
        .catch((error: any) => {
          // If there is an error during login, log the error
          this.error = error.response.data.message
          console.error(error.response.data.message);
          this.isLoging = false
        });
      
      console.log(this.data)
    }
  }
}
</script>
