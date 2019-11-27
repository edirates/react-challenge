import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { SET_DIGIMON, SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH } from './constant';

const initialState = {
    digimons: [],
    myDigimons: [],
    search: "",
    digimon: {}
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
        case SET_DIGIMON:
            return {
                ...state,
                digimon: action.digimon
            };
        default: 
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;