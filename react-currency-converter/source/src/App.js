import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toast'
import { Block } from './Block';
import './index.scss';

const App = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);

    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then(response => response.json())
            .then(data => {
                setRates(data.rates);
                console.log(data.rates);
                toast.success('Курсы валют обновлены');

            }).catch(error => {
                console.log(error);
                toast.error('Ошибка при обновлении курсов валют');
            })
    }, [])

    useEffect(() => {
        onFromCurrencyChange(fromValue);
    }, [fromCurrency])

    useEffect(() => {
        onToCurrencyChange(toValue);
    }, [toCurrency])

    const onFromCurrencyChange = (value) => {
        const price = value / rates[fromCurrency];
        const res = price * rates[toCurrency];
        setToValue(res);
        setFromValue(value);
    }

    const onToCurrencyChange = (value) => {
        const res = (rates[fromCurrency] / rates[toCurrency]) * value;
        setFromValue(res);
        setToValue(value);
    }

    return (
        <div className="App">
            <Block
                value={fromValue}
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onFromCurrencyChange}
            />
            <Block
                value={toValue}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onToCurrencyChange}
            />
            <ToastContainer position='top-right' delay={3000} />
        </div>
    );
}

export default App;
