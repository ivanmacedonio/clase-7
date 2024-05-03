import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.username = action.payload
        },
        clearUser: (state, action) => {
            state.username = ""
        },
        saludar: (state, action) => {
            state.username = "Hola como va"
        }
    }
})

export const {addUser, clearUser, saludar} = userSlice.actions
export default userSlice.reducer



