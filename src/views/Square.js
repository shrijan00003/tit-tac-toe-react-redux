import React from 'react';

const Square = ({ square, len, addSymbol = f => f}) => {
    return (
        <button className="square" onClick = {()=> addSymbol() }>
            {square}
        </button>
    )
}

export default Square;
