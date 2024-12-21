import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    _id: "",
    name: "",
    email: "",
    mobile: "",
    avatar: "",
    verify_email: "",
    last_login_date: "",
    status: "",
    role: "",
    address_details: [],
    shopping_cart: [],
    orderHistory: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        setUserDetails: (state, action) => {
            state._id = action.payload?._id
            state.name = action.payload?.name
            state.email = action.payload?.email
            state.mobile = action.payload?.mobile
            state.avatar = action.payload?.avatar
            state.verify_email = action.payload?.verify_email
            state.last_login_date = action.payload?.last_login_date
            state.status = action.payload?.status
            state.role = action.payload?.role
            state.address_details = action.payload?.address_details
            state.shopping_cart = action.payload?.shopping_cart
            state.orderHistory = action.payload?.orderHistory
        },
        updateAvatar: (state, action) => {
            state.avatar = action.payload?.avatar
        },
        logout: (state) => {
            state._id = ""
            state.name = ""
            state.email = ""
            state.mobile = ""
            state.avatar = ""
            state.verify_email = ""
            state.last_login_date = ""
            state.status = ""
            state.role = ""
            state.address_details = []
            state.shopping_cart = []
            state.orderHistory = []
        }
    }
})

export const { setUserDetails, logout, updateAvatar } = userSlice.actions
export default userSlice.reducer