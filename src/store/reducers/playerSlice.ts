import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type playerStateType = {
	value: number
}

const initialState: playerStateType = {
	value: 0,
}

export const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export default playerSlice.reducer
