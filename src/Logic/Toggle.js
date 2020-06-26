export const ToggleQuick = (array, id) => {
    console.log('in toggle')
    let ind = id.shift()
    let temp = array[ind[0]];
    array[ind[0]] = array[ind[1]];
    array[ind[1]] = temp;
    array.splice(0,0)
    return [array, id]
}

export const ToggleMergeBubble = (array, id) => {
    console.log('in toggle')
    let ind = id.shift()
    let from = ind[0]
    let to = ind[1]
    let ele = array[from]
    array.splice(from, 1)
    array.splice(to, 0, ele)
    return [array,id]
}