import React from 'react';
import PropTypes from 'prop-types';
import './GameFieldItem.css';

const GameFieldItem = ({indx, showX, showO, winner, handlerClick}) => {
	const className = ['game-field__item'];

	showO && className.push('game-field__item_o');
	showX && className.push('game-field__item_x');

	return (
		<div className={className.join(' ')} onClick={() => !showX && !showO && !winner && handlerClick(indx)}/>
	)
}

GameFieldItem.defaultProps = {
	showX: false,
	showO: false,
	winner: ''
}

GameFieldItem.propTypes = {
	indx: PropTypes.number.isRequired,
	handlerClick: PropTypes.func.isRequired,
	showX: PropTypes.bool,
	showO: PropTypes.bool,
	winner: PropTypes.string
}

export default GameFieldItem;