<template>
    <div
    class="absolute z-50 w-screen h-[calc(100vh-60px)] mt-[60px] flex justify-center items-center backdrop-blur-sm inset-0 bg-opacity-10 bg-white"
  >
    <div class="border border-neutral-700 w-[20%] h-[25%] rounded-md px-4 py-3 shadow-sm shadow-neutral-600 bg-white flex flex-col justify-center space-y-6">
      <span class="flex justify-center items-center space-x-5">Are you sure to delete ?</span>
      <div class="flex justify-center items-center space-x-5">
        <button class="px-6 py-3 hover:bg-red-300 text-red-900 bg-red-400 rounded-sm text-sm flex justify-center items-center" @click="handleYes">Yes</button>
        <button class="px-6 py-3 hover:bg-green-300 text-green-900 bg-green-400 rounded-sm text-sm flex justify-center items-center" @click="handleNo">No</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import { useSidebarStore } from '@/store';
    export default {

        setup() {
            const sidebarstore = useSidebarStore()
            return {
                sidebarstore
            }
        },
        data() {

            return {

            }
        },
        methods: {
            handleYes() {
                this.sidebarstore.setIsOkayToDeleteTrue()
            },

            handleNo() {
                this.sidebarstore.setDeleteAlertOff()
            }
        }
    }
</script>