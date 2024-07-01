import { itemProductionType, itemType } from "./items"

export type itemRecipeType = {
	itemRecipeName: string
	itemRecipeImgUrl: string
	isItemRecipeUnlock: boolean
	input: [itemType, itemProductionType][] | []
	output: [itemType, itemProductionType][]
}

export const ironOre: itemType = {
	itemName: "ironOre",
	itemImgUrl: "ironOre.png",
	itemProduction: {
		income: 0,
		count: 0,
	},
}

export const ironOreRicepe: itemRecipeType = {
	itemRecipeName: "ironOreRicepe",
	itemRecipeImgUrl: "ironOreRicepe.png",
	isItemRecipeUnlock: true,
	input: [],
	output: [[ironOre, { income: 30, count: 3 }]],
}
