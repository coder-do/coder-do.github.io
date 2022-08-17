import React from 'react';

const Result = ({ score, len, restart }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {score} ответа из {len}</h2>
            <button onClick={restart}>Попробовать снова</button>
        </div>
    );
}

export default Result;