import axios from '../../apis/axios';
import { SET_DIGIMON, SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH, SET_LOGIN, SET_LOGOUT } from '../constant';

export const setLogin = () => {
    return {
        type: SET_LOGIN
    }
};

export const setLogout = () => {
    return {
        type: SET_LOGOUT
    }
};

export const setDigimon = (digimon) => {
    return {
        type: SET_DIGIMON,
        digimon: digimon
    }
};

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

export const getDigimons = () => async (dispatch) => {
    const response = await fetch("https://digimon-api.herokuapp.com/api/digimon")
    const digimons = await response.json();
    dispatch({
        type: SET_DIGIMONS,
        digimons: digimons
    });
};

export const getDigimonDetail = (id) => async (dispatch) => {
    const response = await axios({
        method: 'GET',
        url: '/id/'+id
    })
    dispatch({
        type: SET_DIGIMON,
        digimon: response.data[0]
    });
};