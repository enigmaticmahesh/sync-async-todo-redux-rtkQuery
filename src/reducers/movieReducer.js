export const INITIAL_STATE = {
  title: '',
  isbn: '',
  firstname: '',
  lastname: '',
};

export const ACTIONS = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  RESET_INPUTS: 'RESET_INPUTS',
  FILL_MOVIE: 'FILL_MOVIE',
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'RESET_INPUTS':
      return {
        ...INITIAL_STATE,
      };
    case 'FILL_MOVIE':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
