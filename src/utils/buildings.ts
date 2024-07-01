import { buildingRecipeType } from "./buildingsRecipe"
import { itemRecipeType } from "./itemsRecipe"

export type buildingType = {
	buildingName: string
	buildingImgUrl: string
	overclock: number
	itemRecipe: itemRecipeType
	buildingRecipe: buildingRecipeType
}
