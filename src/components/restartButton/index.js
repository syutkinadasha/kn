import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RestartButton.css';
import { restartGame } from "../../actions";

const RestartButton = ({ restartGame }) => {
	const handlerOnRestart = useCallback(() => {
		restartGame();
	}, [restartGame])

	return (
		<button className="restart-button" onClick={handlerOnRestart}>
			Restart
		</button>
	)
}

RestartButton.propTypes = {
	restartGame: PropTypes.func.isRequired
}

const mapDispatchToProps = {
	restartGame
}

export default connect(null, mapDispatchToProps)(RestartButton);