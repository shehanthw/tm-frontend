<template>
  <div class="flex flex-col w-full h-full items-center space-y-5 justify-center">
    <div
      class="flex w-[30%] flex-col items-center space-y-2 text-gray-400 border border-gray-600 px-6 py-5 rounded-md shadow-gray-900 shadow-lg"
    >
      <!-- title -->
      <div class="flex flex-col w-[100%] space-y-2 text-2xl">
        <span>Sign up</span>
      </div>

      <!-- users name -->
      <div class="flex flex-col w-[100%] space-y-2 text-sm">
        <span>Username</span>
        <input
          type="text"
          placeholder="Username"
          class="outline-none px-2 py-2 text-gray-700 rounded-sm"
          v-model="data.name"
        />
        <div class="text-xs text-red-300 h-[10px]"></div>
      </div>

      <!-- email -->
      <div class="flex flex-col w-[100%] space-y-2 text-sm">
        <span>Email</span>
        <input
          type="text"
          placeholder="Username"
          class="outline-none px-2 py-2 text-gray-700 rounded-sm"
          v-model="data.email"
        />
        <div class="text-xs text-red-300 h-[10px]"></div>
      </div>

      <!-- password -->
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

      <!-- password confirmation-->
      <div class="flex flex-col w-[100%] space-y-2 text-sm">
        <span>Confirm Password</span>
        <input
          type="password"
          placeholder="Password"
          class="outline-none px-2 py-2 text-gray-700 rounded-sm"
          v-model="data.password_confirmation"
        />
        <div class="text-xs text-red-300 h-[10px]"></div>
      </div>

      <div class="flex flex-col w-[100%] text-sm">
        <div class="flex space-x-2">
          <span>Click here to sign-in</span>
          <router-link class="text-blue-500 underline" to="login">login</router-link>
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
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { register } from '../api/Auth'

export default {
  data() {
    return {
      error: '',
      data: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {
    handleSubmit() {
      register(this.data).then(() => this.$router.push({ name: 'login' }))
        .catch((error) => {
            this.error = error.response.data.message
            console.log(error.response.data.message)
        })

      console.log(this.data)
    }
  }
}
</script>
