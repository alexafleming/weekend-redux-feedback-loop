import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const formState = {
    step: 1,
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
}

const form = (state = formState, action) => {
    if (action.type === 'SET_NEXT_STEP') {
        if (action.payload.step === 1) {
            state.feeling = action.payload.response;
        } else if (action.payload.step === 2) {
            state.understanding = action.payload.response;
        } else if (action.payload.step === 3) {
            state.support = action.payload.response; 
        } else if (action.payload.step === 4) {
            state.comments = action.payload.response;
        }

        return {
            ...state,
            step: state.step + 1,
        };
    }

    if (action.type === 'RESET_FORM'){
        return formState;
    }

    return state;
}

const reduxStore = createStore(
    combineReducers({
        form,
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
