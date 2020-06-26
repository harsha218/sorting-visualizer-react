var ind = []

export const Quick = (s) => {
    console.log('in quick')
    let array = s.map((el, i) => {
        return [el, i];
    });
    quickSort(array, 0, array.length - 1)
    let dummy = ind
    ind = []
    return dummy
}

const quickSort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = quickPartition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
}

const quickPartition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)][0],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i][0] < pivot) {
            i++;
        }
        while (items[j][0] > pivot) {
            j--;
        }
        if (i <= j) {
            let ind1 = items[i][1];
            let ind2 = items[j][1];
            ind.push([ind1, ind2]);
            var temp = items[i][0];
            items[i][0] = items[j][0];
            items[j][0] = temp;
            i++;
            j--;
        }
    }
    return i;
}
