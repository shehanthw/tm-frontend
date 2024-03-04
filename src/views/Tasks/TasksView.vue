<template>
  <div class="flex flex-col text-neutral-400 justify-between px-8 py-6 space-y-5">
    <div class="flex space-x-4">
      <input
        class="border border-neutral-600 bg-transparent px-3 py-1 outline-none rounded-sm"
        placeholder="Search Tasks"
        v-model="newTask"
      />
      <button
        class="px-3 py-1 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm"
        @click="add"
      >
        Search
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
import { showTasks } from "../../api/Tasks"
import { useSidebarStore } from "../../store/index"

type CardList = {
  id: number
  name: string
}

export default {
  setup() {
    const sidebarstore = useSidebarStore()
    return {
      sidebarstore
    }
  },
  components: {
    draggable,
    Card
  },
  data() {
    return {
      newTask: '',
      backlog: [] as CardList[],
      inProgress: [] as CardList[],
      ready: [] as CardList[],
      done: [] as CardList[],
      allTasks: [],
      backlogLength: 0 as number
    }
  },
  methods: {
    add() {
      if (this.newTask) {
        this.backlog.push({id: 1, name: this.newTask })
        this.newTask = ''
      }
    },

    getAllTasks() {
      this.sidebarstore.setLoadingOn()
      showTasks().then((res) => {
        for(const item of res) {
          if (item.status == "backlog") {
            this.backlog.push({ name:  item.title, id: item.id})
          } else if(item.status == "inprogress") {
            this.inProgress.push({ name:  item.title, id: item.id})
          } else if(item.status == "ready") {
            this.ready.push({ name:  item.title, id: item.id})
          } else if(item.status == "done") {
            this.done.push({ name:  item.title, id: item.id})
          } else {
            console.log(`Status : ${item.status} is not valid`)
          }
        }
        this.sidebarstore.setLoadingOff()
      }).catch(error => {
          console.error('Error fetching tasks:', error);
          this.sidebarstore.setLoadingOff()
        });
    },
  },

  mounted() {
    this.getAllTasks()
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
