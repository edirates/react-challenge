import { SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH } from '../constant';

export const setDigimons = (digimons) => {
    return {
        type: SET_DIGIMONS,
        digimons: digimons
    }
};

export const setMyDigimons = (myDigimons) => {
    return {
        type: SET_MY_DIGIMONS,
        myDigimons: myDigimons
    }
};

export const setSearch = (search) => {
    return {
        type: SET_SEARCH,
        search: search
    }
};