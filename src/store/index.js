// Import Redux
import { createStore, applyMiddleware } from 'redux';

// Import Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// Import middleware
import thunk from 'redux-thunk';
import middleware from '../middleware';

// Import Constant
import { SET_DIGIMON, SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH, SET_LOGIN, SET_LOGOUT } from './constant';

const initialState = {
    digimons: [],
    myDigimons: [],
    search: "",
    digimon: {},
    isLogin: false
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
        case SET_LOGIN:
            return {
                ...state,
                isLogin: true
            };
        case SET_LOGOUT:
            return {
                ...state,
                myDigimons: [],
                search: "",
                digimon: {},
                isLogin: false
            };
        default: 
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(persistedReducer, applyMiddleware(thunk));
const store = createStore(persistedReducer, applyMiddleware(middleware));

const persistor = persistStore(store);

export {
    store,
    persistor
};