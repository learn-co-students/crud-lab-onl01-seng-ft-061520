import cuid from 'cuid';

function restaurantsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      return state.concat(restaurant);
      // return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_RESTAURANT':
      return state.filter(r => r.id !== action.id);
    default:
      return state;
  }
};

export default restaurantsReducer;
