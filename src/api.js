import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/victor-brian/';

function getItems() {
    return fetch(`${BASE_URL}items`)
    //return Promise.resolve('A successful response!');
}

function createItem(name) {
    let newItem = {
        name 
    };
    return fetch(`${BASE_URL}items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .catch(error => alert('Something went wrong. Try again later.')
    );
}

function updateItem(id, updateData){
    let stringData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: stringData
    })
    .catch(error => alert('Something went wrong. Try again later.')
    );
}

function itemDelete(id) {
    return fetch(`${BASE_URL}items/${id}`, {
        method: 'DELETE'
    })
    .catch(error => alert('Something went wrong. Try again later.')
    );
}

export default {
getItems,
createItem,
updateItem,
itemDelete
};
