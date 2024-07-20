if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function (callback) {
        this.map(callback).reduce((destArray, array) =>
            destArray.concat(array), [])
    }
}