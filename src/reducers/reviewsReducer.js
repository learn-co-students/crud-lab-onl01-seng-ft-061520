import cuid from 'cuid';

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.text,
        restaurantId: action.restaurantId
      }
      return state.concat(review);
    case 'DELETE_REVIEW':
      return state.filter(r => r.id !== action.id);
    default:
      return state;
  }
};

export default reviewsReducer;
