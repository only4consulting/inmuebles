import { SET_FILTERS } from '../actions/filterActions';

// Estado inicial
const initialState = {
  filterCategories: []
}

export const filterReducer = (state = initialState, action) => {

  // Evaluar la acción
  switch (action.type) {

    case SET_FILTERS:
      return {
        ...state,
        filterCategories: action.payload
      }

    default:
      return state;
  }
}