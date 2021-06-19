//

export const favItemReducer = (state = { favItems: [] }, action) => {
	switch (action.type) {
		case 'ADD_FAV_ITEM':
			const existItem = state.favItems.find(x => x === action.payload);
			if (existItem) {
				return {
					...state,
				};
			} else {
				return {
					...state,
					favItems: [...state.favItems, action.payload],
				};
			}
		case 'REMOVE_FAV_ITEM':
			return {
				...state,
				favItems: state.favItems.filter(x => x !== action.payload),
			};
		case 'RESET_FAV_ICON':
			return {
				favItems: action.payload,
			};
		case 'REMOVE_FAV_ICON':
			return {
				favItems: [],
			};

		default:
			return state;
	}
};
