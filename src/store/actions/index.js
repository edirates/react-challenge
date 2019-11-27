import axios from '../../apis/axios';
import { SET_DIGIMON, SET_DIGIMONS, SET_MY_DIGIMONS, SET_SEARCH } from '../constant';

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