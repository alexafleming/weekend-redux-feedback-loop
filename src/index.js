import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'; 

const formStep = (state = 1, action) => {
    if(action.type === 'SET_NEXT_STEP') {
        return state + 1;
    }
    return state;
  }
  
  const reduxStore = createStore(
    combineReducers({
      formStep,
    }),
    applyMiddleware(logger)
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
