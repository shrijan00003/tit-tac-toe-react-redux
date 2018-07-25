import { connect } from 'react-redux';
import { addSymbol } from '../actions/gameAction';
import Square from './Square';


const mapStateToProps = state => {
  return {
    square: state.ttt.square,
    length: state.square.ttt.length
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addSymbolToSquare: (symbol,index) => dispatch(addSymbol(symbol,index)),
    console: () => console.log('ok')
  }
};

const EnhancedGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square)

export default EnhancedGame;

// import { addTodo, setTodoAsComplete } from '../actions/todoActions';

// import TodoListUI from './todoListUI';

// const mapStateToProps = state => {
//   return {
//     todoList: state.todo.list,
//     length: state.todo.list.length
//   }
// };