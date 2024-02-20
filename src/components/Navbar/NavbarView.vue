<template>
  <div
    class="absolute w-screen bg-[#1D2125] h-[60px] border-b border-neutral-600 flex items-center"
  >
    <div class="px-3 flex w-full justify-end space-x-4">
      <!-- button -> create new task -->
      <button class="px-3 py-1 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm">
        Create
      </button>

      <!-- text feilds to search tasks -->
      <div>
        <input
          type="text"
          placeholder="Search"
          class="outline-none px-2 py-1 bg-[#1D2125] border border-neutral-600 text-neutral-300"
        />
      </div>

      <!-- profile name -->
      <div>
        <div
          class="rounded-full w-8 h-8 text-blue-100 border border-neutral-500 flex justify-center items-center text-xs"
        >
          SW
        </div>
      </div>

      <!-- logout button -->
      <div>
        <button class="rounded-full hover:bg-red-300 text-red-900 bg-red-400 text-sm w-8 h-8">
          O
        </button>
      </div>
    </div>
  </div>
</template>
