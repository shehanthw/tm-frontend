<template>
    <div :class="notificationClass">
        <div class="flex justify-between px-4">
            <span class="text-sm">Icon</span>
            <div>x</div>
        </div>
        <div class="flex flex-col px-4">
            <span class="text-sm">{{ title }}</span>
            <div class="text-xs">Content</div>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            type: 'error',
            title: '' 
        }  
    },
    computed: {
        notificationClass() {
            return [
                "flex", "absolute", "flex-col", "z-10 w-[340px] h-[70px] right-8 top-16 rounded-sm",
                "bg-red-200"
            ]
        },
    },

    watch: {
        type(newType) {
            this.title = "asdasd"
        }
    }
}
</script>