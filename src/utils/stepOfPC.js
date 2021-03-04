export function stepOfPC(players) {
	// компьютер просто делает свой ход в пустое поле, без какой-либо логики
	const indx = Math.abs(Math.round(- 0.5 + Math.random() * (10)));

	if (!players.x.includes(indx) && !players.o.includes(indx))
		return indx;
	else
		return stepOfPC(players);
}