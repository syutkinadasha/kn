import * as actionTypes from "../actions/types";

const initialState = {
	defaultField: [0,0,0,0,0,0,0,0,0],
	players: {
		'x': [],
		'o': []
	},
	activePlayer: 'x',
	steps: {
		'x': 0,
		'o': 0
	},
	winner: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_PLAYER_DATA:
			return {
				...state,
				players: {
					...state.players,
					[action.player]: [...state.players[action.player], action.value]
				},
				steps: {
					...state.steps,
					[action.player]: action.step
				}
			};
		case actionTypes.RESTART_GAME:
			return {
				...state,
				players: {
					'x': [],
					'o': []
				},
				activePlayer: 'x',
				steps: {
					'x': 0,
					'o': 0
				},
				winner: ''
			};
		case actionTypes.CHANGE_ACTIVE_PLAYER:
			return {
				...state,
				activePlayer: action.player
			};
		case actionTypes.SET_WINNER:
			return {
				...state,
				winner: action.player
			}
		default:
			return state;
	}
};

export default reducer;