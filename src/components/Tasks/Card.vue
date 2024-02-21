<template>
  <div class="w-[24%] flex flex-col items-center space-y-4">
    <div class="w-[100%] bg-[#161A1D] py-3 px-4">{{ label }}</div>
    <div class="w-full bg-[#161A1D] px-4 min-h-[500px] py-4">
      <!-- card -->
      <draggable :list="list" group="tasks" class="flex flex-col space-y-3 min-h-[500px]">
        <template #item="{ element }">
          <div :class="getDynamicClasses()">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { list } from 'postcss'
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import draggable from 'vuedraggable'

interface ChildProps {
  label: string;
  list: { name: string }[];
}

export default defineComponent({
  components: {
    draggable,
  },
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
  setup(props) {
    const label = ref(props.label);
    const list = ref(props.list)
    const commonClass = "w-full px-2 py-2 rounded-sm bg-[#1D2125] h-[100px] cursor-pointer border-b";

    return {
      label,
      list,
      commonClass
    };
  },
  methods: {
    getDynamicClasses() {
      return {
        [`${this.commonClass} border-green-600`]: this.label === 'Done',
        [`${this.commonClass} border-yellow-600`]: this.label === 'Ready',
        [`${this.commonClass} border-blue-600`]: this.label === 'Work In Progress',
        [this.commonClass]: this.label !== 'Done',
      }
    }
  }
})
</script>
