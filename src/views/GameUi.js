import React from 'react';
import Square from './Square';

const GameUi = ({
    length = 0,
    squares = [],
    xIsNext = true,
    isGameFinished = false,
    addSymbolToSquare = f => f,
    resetFunc = f =>f,
    isTie = f => f
    }) => {
    return (
        <div className= {!isGameFinished ? "square-row" : "square-row" } >
        <h1>Current Turn : {(xIsNext)? 'X' : 'O'} </h1>
        <h1> { (isGameFinished) ? 'Winner is  '+isGameFinished : '' }</h1>
        <h1> {(isTie && !isGameFinished)? 'Game is Tie' : ''} </h1>
        {
            squares.map((square, index) => {
                return (
                    <Square
                        square={square}
                        len={length}
                        key={index}
                        addSymbol={() => (!isGameFinished && !isTie)? addSymbolToSquare(index,xIsNext): resetFunc()}
                    />
                )
            })
        }
        <button onClick={()=>resetFunc()}>Reset</button>
        </div>
    );
}

export default GameUi;
