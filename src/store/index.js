import { createStore } from 'redux';
import { SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH } from './constant';

const initialState = {
    digimons: [],
    myDigimons: [],
    search: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DIGIMONS:
            return {
                ...state,
                digimons: action.digimons
            };
        case SET_MY_DIGIMONS:
            return {
                ...state,
                myDigimons: action.myDigimons
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            };
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;