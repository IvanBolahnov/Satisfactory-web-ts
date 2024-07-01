import { itemType } from "./items"
import { ironOre } from "./itemsRecipe"

export type buildingRecipeType = {
	buildingRecipeName: string
	buildingName: string
	isBuildingRecipeUnlock: boolean
	cost: [itemType, { count: number }][]
}

export const minerMk1: buildingRecipeType = {
	buildingName: "minerMk1",
	buildingRecipeName: "minerMk1Recipe",
	isBuildingRecipeUnlock: true,
	cost: [[ironOre, { count: 1 }]],
}
