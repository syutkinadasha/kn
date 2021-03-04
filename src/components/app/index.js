import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../reducers";
import GameField from "../gameField";
import RestartButton from "../restartButton";
import './App.css';

const store = createStore(reducer);

const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<h3>Tic-Tac-Toe</h3>
				<GameField />
				<RestartButton />
			</div>
		</Provider>
	);
}

export default App;
