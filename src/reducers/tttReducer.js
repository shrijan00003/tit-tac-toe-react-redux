import { ADD_SYMBOL, RESET_GAME } from '../actions/gameAction';

const INITIAL_STATE = {
    squares: Array(9).fill(null),
    xIsNext: true,
    isWinner : false

}

const setSymbolSquare = (squares, turn, index) => {
    return squares.map((value, i) => {
        if (i === index && value === null) {
            value = (turn) ? 'X' : 'O';

        }
        return value;
    })
}

const changeTurn = (squares, turn, index) => {

}

const tttReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SYMBOL:
            const temp = state.squares.slice();
            if (temp[action.payload.index] === 'X' ||
                temp[action.payload.index] === 'O') {
                return state;
            }
            temp[action.payload.index] = (state.xIsNext) ? 'X' : 'O'

            return {
                ...state,
                squares: temp,
                xIsNext: !state.xIsNext
            }
        case RESET_GAME:
           return INITIAL_STATE
        default:
            return state;
    }
}

export default tttReducer

