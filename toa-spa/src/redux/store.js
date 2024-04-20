import { createStore, applyMiddleware } from 'redux'; // Import Redux store functions
import { Provider } from 'react-redux'; // Import Redux provider
import thunk from 'redux-thunk'; // Import Redux thunk middleware

import { composeWithDevTools } from 'redux-devtools-extension'; // Import Redux DevTools

import rootReducer from './reducers/index'; // Import your rootReducer

// Create store with reducers, and enable Redux dev tools with the thunk middleware
const store = createStore(
    rootReducer, // Preloaded state
    composeWithDevTools(applyMiddleware(thunk)) // Enhancer
);

// Wrapper component to provide Redux store to your App
const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default DataProvider;