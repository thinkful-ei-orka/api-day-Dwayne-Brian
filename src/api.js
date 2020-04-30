
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ei-student/';

function getItems() {
    return fetch(`${BASE_URL}items`)
    //return Promise.resolve('A successful response!');
}

export default {
getItems
};
