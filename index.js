import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import App from './App';

// Crear store
const store = configureStore();

//Create a Component
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('inmuebles', () => AppContainer);
