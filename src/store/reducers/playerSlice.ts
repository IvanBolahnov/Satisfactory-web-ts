import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type playerStateType = {
	value: number
	// buildings: buildingType[]
	buildings: []
	buildingsRecipes: []
	items: []
	itemsRecipes: []
	progress: []
}

const initialState: playerStateType = {
	value: 0,
	buildings: [],
	buildingsRecipes: [],
	items: [],
	itemsRecipes: [],
	progress: [],
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
