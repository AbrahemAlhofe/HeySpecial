export const state = () => ({
    isLoginDialogOpen: false
})

export const mutations = {

    openLoginDialog (state) {
        state.isLoginDialogOpen = true
    },

    closeLoginDialog (state) {
        state.isLoginDialogOpen = false
    }

}