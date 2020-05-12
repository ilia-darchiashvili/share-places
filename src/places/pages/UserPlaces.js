import React from 'react';
import { useParams } from 'react-router-dom';

import PlacesList from '../components/PlacesList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageURL: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageURL: 'https://media.cntraveler.com/photos/5924a32f88fb614c3c25fdb6/4:3/w_480,c_limit/GettyImages-551773825.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;