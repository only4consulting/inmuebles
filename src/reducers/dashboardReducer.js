import { SET_ACTIVE_TAB } from '../actions/dashboardActions';

// Estado inicial
const initialState = {
  activeExploreTabItem: "Near Me"
}

export const dashboardReducer = (state = initialState, action) => {

  // Evaluar la acción
  switch (action.type) {

    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeExploreTabItem: action.payload
      }

    default:
      return state;
  }
}