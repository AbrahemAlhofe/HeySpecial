export const state = () => ({
    
    isLoginDialogOpen: false,

    isSidebarOpen: false

})

export const mutations = {

    openLoginDialog (state) { state.isLoginDialogOpen = true },
    closeLoginDialog (state) { state.isLoginDialogOpen = false },

    openSidebar (state) { state.isSidebarOpen = true },
    closeSidebar (state) { state.isSidebarOpen = false }

}