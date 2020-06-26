import { Merge } from '../Logic/MergeSort'
import { Bubble } from '../Logic/BubbleSort'
import { Quick } from '../Logic/QuickSort'
import { ToggleQuick, ToggleMergeBubble } from '../Logic/Toggle'

const initalState = {
    status: 'stop',
    method: 'mergeSort',
    array: [],
    id: []
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_METHOD':
            return { ...state, method: action.method, id: [] }

        case 'ARRAY_GENERATE':
            return { ...state, id: [], array: Array.from({ length: action.size }, () => Math.floor(Math.random() * action.size)) };

        case 'ARRAY_CLEAR':
            return { ...state, array: [] }

        case 'CHANGE_STATUS':
            if (action.status === 'start') {
                if (state.method === 'mergeSort')
                    return { ...state, id: Merge(state.array), status: 'start' }
                else if (state.method === 'bubbleSort')
                    return { ...state, id: Bubble(state.array), status: 'start' }
                else if (state.method === 'quickSort')
                    return { ...state, id: Quick(state.array), status: 'start' }
            } else {
                return { ...state, status: 'stop' }
            }

        case 'TOOGLE':
            var res;
            if (state.method === 'mergeSort')
                res = ToggleMergeBubble(state.array.slice(0), state.id.slice(0))
            else if (state.method === 'bubbleSort')
                res = ToggleMergeBubble(state.array.slice(0), state.id.slice(0))
            else if (state.method === 'quickSort')
                res = ToggleQuick(state.array.slice(0), state.id.slice(0))
            return { ...state, array: res[0], id: res[1] }

        default:
            return state
    }
}


