const SEARCH_MAIN = 'SEARCH_MAIN';
const SEARCH_MAIN_SUCCEED = 'SEARCH_MAIN_SUCCEED';
const initialState = {
  current: 0,
};

const research = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MAIN: {
      return {
        ...state,
        current: state.current + 1,
      };
    }
    case SEARCH_MAIN_SUCCEED: {
      return {
        ...state,
        buyList: action.buyList,
        sellList: action.sellList,
      };
    }
    default:
      return state;
  }
};

export default research;
