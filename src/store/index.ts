import { defineStore } from "pinia" 
import { ref } from "vue" 

export const useSidebarStore = defineStore('counter', () => {
    const isSidebarOpen = ref(false);
    const isLoading = ref(false);
    const isDeleteAlertOn = ref(false);
    const isOkayToDelete = ref(false);
    const deleteTaskId = ref(0);

    const toggleSideBar = (): void => {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    const turnOffSidebar = (): void => {
        isSidebarOpen.value = false
    }

    const setLoadingOn = (): void => { isLoading.value = true }
    const setLoadingOff = (): void => { isLoading.value = false }

    const setDeleteAlertOn = (id: number): void => { 
        isDeleteAlertOn.value = true
        deleteTaskId.value = id
     }
    const setDeleteAlertOff = (): void => { isDeleteAlertOn.value = false }

    const setIsOkayToDeleteTrue = (): void => { isOkayToDelete.value = true,  setDeleteAlertOff()}
    const setIsOkayToDeleteFalse = (): void => { isOkayToDelete.value = false}

    return {
        isSidebarOpen,
        toggleSideBar,
        turnOffSidebar,
        setLoadingOn,
        setLoadingOff,
        isLoading,
        setDeleteAlertOn,
        setDeleteAlertOff,
        isDeleteAlertOn,
        isOkayToDelete,
        setIsOkayToDeleteTrue,
        setIsOkayToDeleteFalse,
        deleteTaskId
    }
})