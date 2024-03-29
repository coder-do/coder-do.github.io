import React, { useState } from 'react';
import Result from './components/Result';
import './index.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];



function Game({ question, onAnswer, step }) {
    const percent = Math.round(step / questions.length * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((variant, index) => (
                    <li key={index} onClick={() => onAnswer(index)}>
                        {variant}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const question = questions[step];

    const onAnswer = (answer) => {
        setStep(step + 1);
        if (answer === question.correct)
            setScore(score + 1);
    }

    const onRestart = () => {
        setStep(0);
        setScore(0);
    }

    return (
        <div className="App">
            {
                step !== questions.length
                    ? <Game question={question} onAnswer={onAnswer} step={step} />
                    : <Result score={score} len={questions.length} restart={onRestart} />
            }
        </div>
    );
}

export default App;
