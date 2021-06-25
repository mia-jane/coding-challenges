function showTheLove(arr) {
	const smallest = Math.min(...arr)
	let newSmallest = smallest - (smallest / 4)
	const newArr = arr.map(x => {
		newSmallest += (x / 4)
		return x - (x / 4)
	})
	newArr.splice(arr.indexOf(smallest), 1, newSmallest)
	return newArr
}