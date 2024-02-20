<template>
  <div class="flex flex-col text-neutral-400 justify-between px-8 py-6 space-y-5">
    <!-- titles -->
    <div class="flex w-full justify-between overflow-auto custom-scrollbar">
      <div class="w-[24%] flex flex-col items-center space-y-4">
        <div class="w-[100%] bg-[#161A1D] py-3 px-4">Backlog</div>
        <div class="w-full bg-[#161A1D] px-4 h-[5000px]">Card</div>
      </div>
      <div class="w-[24%] flex flex-col items-center space-y-4">
        <div class="w-[100%] bg-[#161A1D] py-3 px-4">Task List</div>
        <div class="w-full bg-[#161A1D] px-4 h-[500px]">Card</div>
      </div>
      <div class="w-[24%] flex flex-col items-center space-y-4">
        <div class="w-[100%] bg-[#161A1D] py-3 px-4">In Progress</div>
        <div class="w-full bg-[#161A1D] px-4 h-[500px]">Card</div>
      </div>
      <div class="w-[24%] flex flex-col items-center space-y-4">
        <div class="w-[100%] bg-[#161A1D] py-3 px-4">Completed</div>
        <div class="w-full bg-[#161A1D] px-4 h-[500px]">Card</div>
      </div>
    </div>
  </div>
</template>

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
