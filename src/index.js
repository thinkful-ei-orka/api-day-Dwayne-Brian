import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

import api from './api';

const main = function () {
  api.getItems()
  .then(res => console.log(res));
  console.log(api.BASE_URL);
 
  fetch('https://thinkful-list-api.herokuapp.com/ei-student/items/victor-brian')
  .then(res => res.json())
  .then(data => console.log(data));
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
