<template>
  <div class="flex flex-col text-neutral-400 justify-between px-8 py-6 space-y-5">
    <div class="flex flex-col w-full items-center space-y-5">
      <!-- Page Title  -->
      <div
        class="w-[60%] border px-1 py-6 flex flex-col items-center border-gray-600 rounded-md select-none"
      >
        <div class="w-[90%] font-semibold">
          <span>Update Task</span>
        </div>

        <div class="flex w-[90%] flex-col items-center space-y-2">
          <!-- task title -->
          <div class="flex flex-col w-[100%] space-y-2 text-sm">
            <span>Task Title</span>
            <input
              type="text"
              placeholder="Task Title"
              class="outline-none px-2 py-2 text-gray-700"
              v-model="data.title"
            />
            <div class="text-xs text-red-300 h-[10px]"></div>
          </div>

          <!-- task details -->
          <div class="flex flex-col w-[100%] space-y-2 text-sm">
            <span>Task Details</span>
            <input
              type="text"
              placeholder="Task Details"
              class="outline-none px-2 py-2 text-gray-700"
              v-model="data.description"
            />
            <div class="text-xs text-red-300 h-[10px]"></div>
          </div>

          <!-- task status -->
          <div class="flex flex-col w-[100%] space-y-2 text-sm">
            <span>Task Status</span>
            <select
              v-model="data.status"
              class="outline-none px-2 py-2 text-gray-700"
              placeholder="Select"
              required
            >
              <option value="">Select</option>
              <option value="backlog">Backlog</option>
              <option value="inprogress">Inprogress</option>
              <option value="ready">Ready</option>
              <option value="done">Done</option>
            </select>
            <div class="h-[20px] text-xs text-red-400">{{ error }}</div>
          </div>

          <!-- Submit Button -->
          <div class="flex flex-col w-[100%] text-sm">
            <div>
              <button
                class="px-3 py-1 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm flex justify-center items-center"
                @click="handleUpdate"
              >
                <span v-if="!isSaving">Update</span>
                <span v-else>Updating...</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { updateTaskById, getTaskById } from '../../api/Tasks'
import { useSidebarStore } from '@/store'
import { ref } from 'vue'

export default {
  setup() {
    const sidebarStore = useSidebarStore()
    const isSaving = ref(false)
    return {sidebarStore, isSaving}
  },
  data() {
    const id = localStorage.getItem('userId') || ''

    return {
      error: '',
      taskId: 0,
      data: {
        title: '',
        user_id: id,
        description: '',
        status: ''
      },
      isDropdownOpen: false
    }
  },

  methods: {
    handleUpdate() {
      this.isSaving = true
      updateTaskById(this.taskId, this.data).then(() => {
          this.$router.push({ name: 'tasks' })
          this.isSaving = false
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getTask() {
      this.sidebarStore.setLoadingOn()
      const paramId = this.$route.params.id
      const intId = Number(paramId)
      this.taskId = intId
      getTaskById(intId).then((res: any) => {
        this.data.title = res.title
        this.data.description = res.description
        this.data.status = res.status
        this.sidebarStore.setLoadingOff()
      })
    }
  },

  mounted() {
    this.getTask()
  }
}
</script>
