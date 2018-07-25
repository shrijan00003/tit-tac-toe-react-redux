
import { connect } from 'react-redux';
import { addSymbol, resetGame } from '../actions/gameAction';
import GameUi from './GameUi';
import CalculateWinner from './CalculateWinner';
import CalculateTie from '../services/CalculateTie';


const mapStateToProps = state => {
    return {
        squares: state.ttt.squares,
        length: state.ttt.squares.length,
        xIsNext : state.ttt.xIsNext,
        isGameFinished : CalculateWinner(state.ttt.squares),
        isTie : CalculateTie(state.ttt.squares)
    }
};

const mapDispatchToProps = dispatch => {
    return {
            addSymbolToSquare: (symbol,index) => dispatch(addSymbol(symbol,index)),
            resetFunc : ()=> dispatch(resetGame()),
  }
};

const EnhancedGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameUi)

export default EnhancedGame
