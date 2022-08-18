import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
    const [users, setUsers] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [invitedUsers, setInvitedUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.data)
                setIsLoading(false)
            })
    }, [])

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const onInvite = (user) => {
        if (!invitedUsers.includes(user)) {
            setInvitedUsers(prev => [...prev, user]);
        } else {
            setInvitedUsers(prev => prev.filter(u => u != user));
        }
    }

    const onSendInvites = () => {
        setSuccess(!success);
    }

    return (
        <div className="App">
            {success ?
                <Success count={invitedUsers.length} onSendInvites={onSendInvites} setInvitedUsers={setInvitedUsers} /> :
                (
                    <Users
                        items={users}
                        onInvite={onInvite}
                        onSearch={onSearch}
                        isLoading={isLoading}
                        searchValue={searchValue}
                        invitedUsers={invitedUsers}
                        onSendInvites={onSendInvites}
                    />
                )}
        </div>
    );
}

export default App;
