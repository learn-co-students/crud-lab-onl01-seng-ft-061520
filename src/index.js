import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import manageRestaurant from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reviewsReducer from './reducers/reviewsReducer';
import restaurantsReducer from './reducers/restaurantsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
