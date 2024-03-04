<template>
  <div class="w-[24%] flex flex-col items-center space-y-4">
    <div class="w-[100%] bg-[#161A1D] py-3 px-4">{{ label }}</div>
    <div class="w-full bg-[#161A1D] px-4 min-h-[500px] py-4">
      <!-- card -->
      <draggable :list="list" group="tasks" class="flex flex-col space-y-3 min-h-[500px]" item-key="index" @start="onDragStart" @end="onDragEnd">
        <template #item="{ element }">
          <div :class="getDynamicClasses()" :label="label" :accesskey="element.id">
            {{ element.name }}
            <div class="flex space-x-3">
              <span @click="navigateToUpdate(element.id)"><PencilSquareIcon class="w-5"/></span>
              <span><TrashIcon class="w-5 text-red-500 hover:text-red-300 z-50" @click="() => handleDeleteAlert(element.id)" /></span>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { list } from 'postcss'
import { defineComponent, ref, watch  } from 'vue'
import type { PropType } from 'vue'
import draggable from 'vuedraggable'
import { updateTask, deleteTaskById } from "../../api/Tasks"
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/solid'
import { useSidebarStore } from '@/store'

interface ChildProps {
  label: string;
  list: { id: number, name: string }[];
}

export default defineComponent({

  // ===============> components block
  components: {
    draggable,
    TrashIcon,
    PencilSquareIcon
  },

  // ===============> props block
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    list: {
      type: Array as PropType<ChildProps['list']>,
      default: () => [], // Provide an empty array as the default value
    },
  },

  // ===============> setup block
  setup(props) {
    const sidebarstore = useSidebarStore()
    const label = ref(props.label);
    const list = ref(props.list)
    const commonClass = "w-full px-4 py-3 rounded-sm bg-[#1D2125] h-[100px] cursor-pointer border-b flex justify-between";
    const sourceColumn = ref({ value: '' })
    const destinationColumn = ref(label.value);

    watch(() => sidebarstore.isOkayToDelete, (newValue, oldValue) => {
      handleDelete(newValue)
    });

    function handleDelete(isOkayToDelete: boolean): void {
      if (isOkayToDelete) {
        deleteTaskById(sidebarstore.deleteTaskId)
          .then((res) => {
            console.log(res)
            window.location.reload()
          })
          .catch((error) => {
            console.log(error)
          })

      }
      sidebarstore.setIsOkayToDeleteFalse();
    }

    return {
      label,
      list,
      commonClass,
      sourceColumn,
      destinationColumn,
      sidebarstore
    };
  },

  // ===============> methods block
  methods: {
    getDynamicClasses() {
      return {
        [`${this.commonClass} border-green-600`]: this.label === 'Done',
        [`${this.commonClass} border-yellow-600`]: this.label === 'Ready',
        [`${this.commonClass} border-blue-600`]: this.label === 'Work In Progress',
        [this.commonClass]: this.label !== 'Done',
      }
    },

    onDragStart() {
      // assigining source column name on start
      this.sourceColumn.value = this.label;
    },

    onDragEnd(evt: any) {
      // getting destination column using label attribute in jsx
      const destinationColumn = evt.to.querySelector("div").getAttribute('label')

      // getting destination column using accesskey attribute in jsx
      let itemId = evt.item.getAttribute('accesskey')

      // triggering API
      this.updateStatus(itemId, destinationColumn);
      itemId = ""
      this.destinationColumn = ""
    },


    updateStatus(id: number, destinationColumn: string) {
      let status = ""

      // checking the column name and updating the status accordingly
      switch(destinationColumn) {
        case "Backlog":
          status = "backlog"
          break;
        case "Work In Progress":
          status = "inprogress"
          break;
        case "Ready":
          status = "ready"
          break;
        case "Done":
          status = "done"
          break;
        return "backlog"
      }

      // triggering API
      updateTask(id, status)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    navigateToUpdate(id: number) {
      this.$router.push({ name: "tasksUpdate", params: { id: id } })
    },

    handleDeleteAlert(id: number) {
      this.sidebarstore.setDeleteAlertOn(id)
    }
  }
})
</script>
