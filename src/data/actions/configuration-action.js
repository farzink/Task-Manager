import createAction from '../action';
export const ADD = "ADD"
export const UPDATE = "UPDATE"

export const add = configuration => {
    return createAction(ADD, configuration)
}

export const update = configuration => {
    return createAction(UPDATE, configuration)
}
