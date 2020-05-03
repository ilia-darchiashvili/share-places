import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Bill Gates',
            image: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;