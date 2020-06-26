export const actionMethod = (method) => ({
    type: 'CHANGE_METHOD',
    method
})

export const actionStatus = (status) => ({
    type: 'CHANGE_STATUS',
    status
})

export const actionArrayGenerate = (size) => ({
    type: 'ARRAY_GENERATE',
    size
})

export const toggle = () => ({
    type: 'TOOGLE'
})