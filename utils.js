function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}
// console.log(shuffleArray([1, 2, 3, 4]))
// console.log(shuffleArray([4, 3, 2, 1]))

module.exports = {
    shuffleArray
}