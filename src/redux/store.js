import { createStore } from "redux";


const initialState = {

    jugadores: [],
    titulares: [],
    suplentes: []

};


const reducerMister = (state = initialState, action) => {

    return state

}

export default createStore (reducerMister);