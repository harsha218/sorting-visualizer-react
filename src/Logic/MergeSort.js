var ind = []

export const Merge = (s) => {
    console.log('in merge')
    if(s.length === 0){
        return []
    }
    let arr = s.map((el, i) => {
        return [el, i];
    });
    mergeSort(arr, 0, arr.length - 1);
    let dummy = ind
    ind = []
    return dummy
}

const mergeSort = (array, start, end) => {
    if (array.length === 1) {
        return array;
    } else {
        var mid = Math.floor(array.length / 2);
        var left = array.slice(0, mid);
        var right = array.slice(mid);
        var indexHalf = Math.floor((end + 1 + start) / 2);
        var Aleft = mergeSort(left, start, indexHalf - 1);
        var Aright = mergeSort(right, indexHalf, end);
        return actualMergeSort(Aleft, Aright, start);
    }
}

const actualMergeSort = (left, right, start) => {
    var sortedArray = [];
    var indexToPush = start;
    while (left.length && right.length) {
        if (left[0][0] <= right[0][0]) {
            indexToPush++;
            sortedArray.push(left.shift());
        } else {
            let toIndex = indexToPush;
            let fromIndex = right[0][1];
            ind.push([fromIndex, toIndex]);
            right[0][1] = indexToPush++;
            sortedArray.push(right.shift());
            left.forEach(element => {
                element[1]++;
            });
        }
    }
    return sortedArray.concat(left).concat(right);
}