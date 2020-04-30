
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/victor-brian/';

function getItems() {
    return fetch(`${BASE_URL}items`)
    //return Promise.resolve('A successful response!');
}

function createItem(name) {
    let newItem = {
        name 
    };

    fetch(`${BASE_URL}items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    });
}

export default {
getItems,
createItem
};
