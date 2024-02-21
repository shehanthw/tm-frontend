<template>
  <div class="flex flex-col text-neutral-400 justify-between px-8 py-6 space-y-5">
    <div class="flex space-x-4">
      <input
        class="border border-neutral-600 bg-transparent px-3 py-1 outline-none rounded-sm"
        placeholder="Add Task"
        v-model="newTask"
      />
      <button
        class="px-3 py-1 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm"
        @click="add"
      >
        Add Task
      </button>
    </div>

    <!-- cards -->
    <div class="flex w-full justify-between overflow-auto custom-scrollbar">
      <Card label="Backlog" :list="backlog" />
      <Card label="Work In Progress" :list="inProgress" />
      <Card label="Ready" :list="ready" />
      <Card label="Done" :list="done" />
    </div>

  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import Card from '@/components/Tasks/Card.vue'

export default {
  components: {
    draggable,
    Card
  },
  data() {
    return {
      newTask: '',
      items: {
        backlog: [{ name: 'login page bug' }, { name: 'ar aging' }, { name: 'COA Template' }],
        inProgress: [],
        ready: [],
        done: []
      },
      backlog: [{ name: 'login page bug' }, { name: 'ar aging' }, { name: 'COA Template' }],
      inProgress: [],
      ready: [],
      done: []
    }
  },
  methods: {
    add() {
      if (this.newTask) {
        this.backlog.push({ name: this.newTask })
        this.newTask = ''
      }
    }
  }
}
</script>

<style scoped>
.custom-scrollbar {
  overflow-y: auto;
}

/* For WebKit browsers (Chrome, Safari) */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* Adjust the width as needed */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4f4f4f; /* Change the color as needed */
}

/* For Firefox */
.custom-scrollbar {
  scrollbar-width: thin; /* "thin" or "auto" depending on your preference */
  scrollbar-color: #4f4f4f transparent; /* Change the color as needed */
}
</style>
