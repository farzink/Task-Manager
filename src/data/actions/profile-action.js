import createAction from '../action';
export const ADD = "ADD"
export const UPDATE = "UPDATE"

export const add = profile => {
    return createAction(ADD, profile)
}

export const update = profile => {
    return createAction(UPDATE, profile)
}
