import * as actionTypes from "./types";

const setPlayerData = (player, value, step) => {
	return {
		type: actionTypes.SET_PLAYER_DATA,
		player,
		value,
		step
	}
}

const restartGame = () => {
	return {
		type: actionTypes.RESTART_GAME
	}
}

const changeActivePlayer = (player) => {
	return {
		type: actionTypes.CHANGE_ACTIVE_PLAYER,
		player
	}
}

const setWinner = (player) => {
	return {
		type: actionTypes.SET_WINNER,
		player
	}
}

export {
	setPlayerData,
	restartGame,
	changeActivePlayer,
	setWinner
};