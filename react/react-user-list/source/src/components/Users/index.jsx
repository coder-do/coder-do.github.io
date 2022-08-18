import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ items, isLoading, onSearch, searchValue, onInvite, invitedUsers, onSendInvites }) => {
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} onChange={onSearch} type="text" placeholder="Найти пользователя..." />
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <div className="scroll-hide">
                    <ul className="users-list">
                        {items &&
                            items
                                .filter(el => `${el.first_name}${el.last_name}`.toLowerCase().includes(searchValue.toLowerCase()))
                                .map(item =>
                                    <User key={item.id} isInvited={invitedUsers.includes(item.id)} onInvite={onInvite} {...item} />
                                )
                        }
                    </ul>
                </div>
            )}
            <button
                style={{
                    backgroundColor: invitedUsers.length ? 'rgb(251, 80, 0)' : '#e0e0e0',
                    boxShadow: invitedUsers.length ? '0 7px 10px rgba(251, 80, 0, 0.4)' : '0px 0px 0px 1px #e0e0e0',
                }}
                className="send-invite-btn"
                onClick={() => onSendInvites()}
                disabled={!invitedUsers.length}
            >
                Отправить приглашение
            </button>
        </>
    );
};
