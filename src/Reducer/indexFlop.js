import { combineReducers } from 'redux'
import { Merge } from '../Logic/MergeSort'

const method = (state = 'mergeSort', action) => {
    switch (action.type) {
        case 'CHANGE_METHOD':
            return action.method

        default:
            return state
    }
}

const status = (state = 'stop', action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return action.status

        default:
            return state
    }
}

const generate = (state = [], action) => {
    switch (action.type) {
        case 'ARRAY_GENERATE':
            return Array.from({ length: action.size }, () => Math.floor(Math.random() * action.size));

        case 'ARRAY_CLEAR':
            return []

        case 'TOGGLER':
            let array = action.array
            console.log(action.array)
            let element = array.splice(action.ind[0], 1);
            array.splice(action.ind[1], 0, element[0]);
            console.log(array)
            return array

        default:
            return state
    }
}

const indexArray = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            if (action.status === 'start') {
                if (action.method === 'mergeSort')
                    return Merge(action.array)
            } else {
                return []
            }

        case 'CLEAR_IND':
            return []

        default:
            return state
    }
}

export default combineReducers({
    method,
    status,
    generate,
    indexArray
})

