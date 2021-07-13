var lxp4231 = function() {
    function chunk(arr, n) {
        var newArr = []
        var temp = []
        var num = 0
        for (var i = 0; i < arr.length; i++) {
            num++
            temp.push(arr[i])
            if (num == n) {
                newArr.push(temp)
                temp = []
                num = 0
            }
        }
        if (arr.length % n != 0) {
            newArr.push(temp)
        }
        return newArr
    }

    function compact(array) {
        var arr = []
        for (var key of array) {
            if (key) {
                arr.push(key)
            }
        }
        return arr
    }

    function difference(arr, ...array) {
        var res = []
        var newArray = array.flat()
        for (var key of arr) {
            if (!newArray.includes(key)) {
                res.push(key)
            }
        }
        return res
    }

    function drop(array, n) {
        array.splice(0, n)
        return array
    }

    function dropRight(array, n) {
        array.splice(array.length - n, n)
        return array
    }

    // function fill(array, value, start = 0, end = array.length) {
    //     for (let i = start; i < end; i++) {
    //         array[i] = value
    //     }
    //     return array
    // }

    function flatten(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                for (var j = 0; j < array[i].length; j++) {
                    arr.push(array[i][j])
                }
            } else {
                arr.push(array[i])
            }
        }
        return arr
    }

    function fromPairs(pairs) {
        var map = {}
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    }
    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        // fill: fill,
        flatten: flatten,
        fromPairs: fromPairs
    }
}()