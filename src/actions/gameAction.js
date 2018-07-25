export const ADD_SYMBOL = 'ADD_SYMBOL';
export const RESET_GAME = 'RESET_GAME';

export const addSymbol =(index) => ({
  type: ADD_SYMBOL,
  payload: {
    index
  }
});

export const resetGame = () => ({
  type: RESET_GAME,
});

