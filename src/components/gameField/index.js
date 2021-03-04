import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPlayerData, changeActivePlayer, setWinner } from "../../actions";
import GameFieldItem from "../gameFieldItem";
import { checkWinner, stepOfPC } from "../../utils";
import './GameField.css';

const GameField = ({ activePlayer, players, setPlayerData, changeActivePlayer, defaultField, steps, winner, setWinner }) => {

	const changePlayer = useCallback((indx, player, step) => {
		if (step >= 2) {
			if (checkWinner([...players[player], indx])) {
				setWinner(player);
			}
		}
		setPlayerData(player, indx, (step + 1));
		changeActivePlayer(player === 'x' ? 'o' : 'x');
	}, [setPlayerData, changeActivePlayer, players, setWinner])

	useEffect(() => {
		// let timer = null;
		if (!winner && activePlayer === 'o') {
			const indx = stepOfPC(players);
			// timer = setTimeout(() => {
				changePlayer(indx, activePlayer, steps[activePlayer])
			// }, 500);
		}
		// return () => {
		// 	clearTimeout(timer);
		// };
	}, [activePlayer])

	const handlerOnClick = useCallback((indx) => {
		if (!winner) {
			changePlayer(indx, activePlayer, steps[activePlayer]);
		}
	}, [activePlayer, steps, winner, changePlayer])

	return (
		<div className="game-field">
			<div className="game-field__list">
				{ defaultField.map((i, key) => {
					return (
						<GameFieldItem
							key={key}
							indx={key}
							winner={winner}
							showX={players.x.includes(key)}
							showO={players.o.includes(key)}
							handlerClick={handlerOnClick}
						/>
					)
				})}
			</div>
			{
				winner && (
					<div className="game-field__result">
						Player {winner} win
					</div>
				)
			}
		</div>
	)
}

GameField.propTypes = {
	activePlayer: PropTypes.string.isRequired,
	players: PropTypes.object.isRequired,
	setPlayerData: PropTypes.func.isRequired,
	changeActivePlayer: PropTypes.func.isRequired,
	defaultField: PropTypes.array.isRequired,
	steps: PropTypes.object.isRequired,
	winner: PropTypes.string.isRequired,
	setWinner: PropTypes.func.isRequired
}

const mapStateToProps = ({ activePlayer, players, defaultField, steps, winner }) => {
	return { activePlayer, players, defaultField, steps, winner }
}

const mapDispatchToProps = {
	setPlayerData,
	changeActivePlayer,
	setWinner
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);