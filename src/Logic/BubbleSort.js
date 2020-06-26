var ind = []

export const Bubble = (s) => {
    console.log('in bubble')
    let array = s.map((el, i) => {
        return [el, i];
    });
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j][0] > array[j + 1][0]) {
                let ind1 = array[j][1];
                let ind2 = array[j + 1][1];
                ind.push([ind1, ind2]);
                let ele1 = array[j][0];
                let ele2 = array[j + 1][0];
                array[j][0] = ele2;
                array[j + 1][0] = ele1;
            }
        }
    }
    let dummy = ind
    ind = []
    return dummy
}