import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import { getFilters } from './src/actions/filterActions';
import { setTabLabels } from './src/actions/dashboardActions';
import App from './App';

// Crear store
const store = configureStore();

// Obtener parámetrización de la aplicación
store.dispatch(getFilters());

// Obtener labels de las pestañas
store.dispatch(setTabLabels());

//Create a Component
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('inmuebles', () => AppContainer);
