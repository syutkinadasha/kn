const winCombination = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]

export function checkWinner(values) {
	// уверена, что это не очень правильный вариант, но время было ограничено, поэтому оставила так, для работоспособности
	let flag = false;
	values.sort();

	winCombination.forEach((item) => {
		if (
			values.includes(item[0]) &&
			values.includes(item[1]) &&
			values.includes(item[2])
		) {
			flag = true;
			return false;
		}
	})

	return flag;
}