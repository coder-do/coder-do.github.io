import React, { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner'
import Collection from './components/Collection';
import './index.scss';

const categories = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
]

function App() {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(0);
    const [loading, setLoading] = useState(false);
    const [collections, setCollections] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('https://6148209765467e0017384ce7.mockapi.io/photos')
            .then(res => res.json())
            .then(data => setCollections(data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://6148209765467e0017384ce7.mockapi.io/photos?page=${page}&limit=3&category=${category || ''}`)
            .then(res => res.json())
            .then(data => setCollections(data))
            .finally(() => setLoading(false));
    }, [category, page])

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {categories.map((item, index) => (
                        <li
                            key={index}
                            className={category == index ? 'active' : ''}
                            onClick={() => setCategory(index)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
            </div>
            <div className="content">
                {
                    loading ? (
                        <Puff
                            height="100"
                            width="100"
                            style={{
                                margin: '0 auto',
                            }}
                            radisu={1}
                            color="#4fa94d"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    ) : collections
                        .filter(item => searchValue ? item.name.toLowerCase().includes(searchValue.toLowerCase()) : true)
                        .map((collection, ind) => (
                            <Collection key={ind} name={collection.name} images={collection.photos} />
                        ))
                }
            </div>
            <ul className="pagination">
                {
                    [...Array(5)].map((_, index) => (
                        <li
                            key={index}
                            className={page == index + 1 ? 'active' : ''}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
