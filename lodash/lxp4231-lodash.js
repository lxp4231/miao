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

    function drop(array, n = 1) {
        array.splice(0, n)
        return array
    }

    function dropRight(array, n = 1) {
        if (n > array.length) return []
        else {
            array.splice(array.length - n, n)
        }
        return array
    }

    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }

    function flatten(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var temp = array[i]
            if (Array.isArray(temp)) {
                for (var j = 0; j < temp.length; j++) {
                    arr.push(temp[j])
                }
            } else {
                arr.push(temp)
            }
        }
        return arr
    }

    function flatttenDeep(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var temp = array[i]
            if (Array.isArray(temp)) {
                temp = flatttenDeep(temp)
                for (var j = 0; j < temp.length; j++) {
                    arr.push(temp[j])
                }
            } else {
                arr.push(temp)
            }
        }
        return arr
    }

    function flattenDepth(array, n = 1) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var temp = array[i]
            if (Array.isArray(temp)) {
                temp = flattenDepth(temp, n - 1)
                for (var j = 0; j < temp.length; j++) {
                    arr.push(temp[j])
                }
            } else {
                arr.push(temp)
            }
        }
        if (n == 0) return array
        return arr
    }

    function fromPairs(pairs) {
        var map = {}
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    }

    function head(array) {
        if (!array) return undefined
        else return array[0]
    }

    function nth(array, n) {
        if (n > 0) return array[n - 1]
        if (n < 0) {
            var m = Math.abs(n)
            return array[array.length - m]
        }
    }

    function pull(array, ...nums) {
        var res = []
        array.forEach(it => {
            if (!nums.includes(it)) {
                res.push(it)
            }
        })
        return res
    }

    function pullAll(array, nums) {
        var res = []
        array.forEach(it => {
            if (!nums.includes(it)) {
                res.push(it)
            }
        })
        return res
    }

    function sortedIndex(array, value) {
        var n = 0
        array.push(value)
        array.sort((a, b) => {
            return a - b
        })
        array.forEach((it, index) => {
            if (it == value) {
                n = index
            }
        })
        return n
    }
    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        fill: fill,
        flatten: flatten,
        flatttenDeep: flatttenDeep,
        flattenDepth: flattenDepth,
        fromPairs: fromPairs,
        head: head,
        nth = nth,
        pull = pull,
        pullAll = pullAll,
        sortedIndex = sortedIndex
    }
}()