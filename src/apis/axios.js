import axios from 'axios';

export default axios.create({
    baseURL: `https://digimon-api.herokuapp.com/api/digimon`
});