import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { itemType } from "../../utils/items"
import { buildingRecipeType } from "../../utils/buildingsRecipe"
import { itemRecipeType } from "../../utils/itemsRecipe"
import { buildingType } from "../../utils/buildings"

type playerStateType = {
	value: number
	buildings: buildingType[]
	buildingsRecipes: buildingRecipeType[]
	items: itemType[]
	itemsRecipes: itemRecipeType[]
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
